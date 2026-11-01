const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const ts = require('typescript');
const root = process.cwd();
const constants = { ApiPath: {Google:'/api/google', DeepSeek:'/api/deepseek', Mistral:'/api/mistral', Anthropic:'/api/anthropic'}, Google: {ChatPath:m=>`v1beta/models/${m}:streamGenerateContent`}, DeepSeek:{ChatPath:'chat/completions'}, Mistral:{ChatPath:'v1/chat/completions'}, Anthropic:{ChatPath:'v1/messages'}, MISTRAL_BASE_URL:'https://api.mistral.ai', ACCESS_CODE_PREFIX:'nk-', ModelProvider:{GPT:'GPT',GeminiPro:'GeminiPro',Claude:'Claude',Mistral:'Mistral'}, REQUEST_TIMEOUT_MS:1000 };
let request, mockResponse, streamParser, requestPayload, toolProcessor;
const config = {model:'test',max_tokens:32,temperature:0.7,top_p:1};
const access = {useCustomConfig:false,enabledAccessControl:()=>true, anthropicApiVersion:'2023-06-01'};
const stores = {useAccessStore:{getState:()=>access},useAppConfig:{getState:()=>({modelConfig:config})},useChatStore:{getState:()=>({currentSession:()=>({mask:{modelConfig:config}})})},usePluginStore:{getState:()=>({getAsTools:()=>[[],{}]})}};
function load(file, overrides={}) {
 const source=ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,esModuleInterop:true}}).outputText;
 const mod={exports:{}};
 const mocks={
  '@/app/constant':constants,'../constant':constants,
  '@/app/store':stores,
  '../api':{getHeaders:()=>({'Content-Type':'application/json'}),LLMApi:class {}},
  '@/app/config/client':{getClientConfig:()=>({})},
  '@/app/utils':{getMessageTextContent:v=>typeof v.content==='string'?v.content:'',getMessageTextContentWithoutThinking:v=>v.content,isVisionModel:()=>false,getTimeoutMSByModel:()=>1000},
  '@/app/utils/chat':{preProcessImageContent:async v=>v,stream:(path,payload,h,t,f,c,parser,processTool)=>{requestPayload=payload;streamParser=parser;toolProcessor=processTool},streamWithThink:(path,payload,h,t,f,c,parser,processTool)=>{requestPayload=payload;streamParser=parser;toolProcessor=processTool}},
  '@/app/utils/cloudflare':{cloudflareAIGatewayUrl:()=>''},
  '@/app/utils/stream':{fetch:async (url,options)=>{request={url,...options};return mockResponse}},
  nanoid:{nanoid:()=> 'test-id'},
  ...overrides,
 };
 vm.runInNewContext(source,{module:mod,exports:mod.exports,require:id=>{if(id in mocks)return mocks[id];throw Error('Unmocked import '+id)},console:{log(){},error(){},debug(){}},setTimeout,clearTimeout,AbortController,Response,Headers,URL,requestAnimationFrame:()=>0,fetch:async(url,options)=>{request={url,...options};return new Response("{}",{status:200})},process:{env:{}}},{filename:file});
 return mod.exports;
}
(async()=>{
 for(const [file,Class,model] of [['google','GeminiProApi','gemini-2.5-flash'],['deepseek','DeepSeekApi','deepseek-chat'],['mistral','MistralApi','mistral-small-latest'],['anthropic','ClaudeApi','claude-sonnet-4-5']]) {
  const api=new (load(`${root}/app/client/platforms/${file}.ts`)[Class])();
  let finished=0,failed=0;
  const opts={messages:[{role:'system',content:'Preserve original fixture prompt'},{role:'user',content:'test'}],config:{model,stream:false},onFinish:()=>finished++,onError:()=>failed++};
  mockResponse=new Response(JSON.stringify({error:{message:'quota exhausted'}}),{status:429});
  await api.chat(opts);
  assert.equal(finished,0,`${file} must not report HTTP error as success`); assert.equal(failed,1);
  mockResponse=new Response(JSON.stringify(file==='google'?{candidates:[{content:{parts:[{text:'OK'}]}}]}:file==='anthropic'?{content:[{type:'text',text:'OK'}]}:{choices:[{message:{content:'OK'}}]}),{status:200});
  await api.chat(opts); assert.equal(finished,1,`${file} successful nonstream`);
  if(file==='google') {assert.match(request.url,/:generateContent$/);assert.equal(JSON.parse(request.body).systemInstruction.parts[0].text,'Preserve original fixture prompt');}
  if(file==='anthropic') {const b=JSON.parse(request.body);assert.equal(b.system,'Preserve original fixture prompt');assert.ok(!('top_p' in b));assert.ok(!('temperature' in b));}
  await api.chat({...opts,config:{model,stream:true}});
  assert.throws(()=>streamParser(JSON.stringify({type:'error',error:{message:'synthetic-stream-error'}}),[]),/synthetic-stream-error/);
  if(file==='deepseek') {streamParser(JSON.stringify({choices:[{delta:{reasoning_content:'reasoning fixture'}}]}),[]);const message={};toolProcessor(requestPayload,message,[]);assert.equal(message.reasoning_content,'reasoning fixture');}
  if(file==='google'){assert.equal(streamParser(JSON.stringify({candidates:[{finishReason:'STOP'}]}),[]),undefined);assert.equal(streamParser(JSON.stringify({candidates:[{content:{role:'model'},finishReason:'STOP'}]}),[]),undefined);}
  if(file==='mistral') {access.useCustomConfig=true;access.mistralUrl='https://example.test/v1/';assert.equal(api.path('v1/chat/completions'),'https://example.test/v1/chat/completions');access.useCustomConfig=false;}
 }
 // Exercise server-side proxy credential isolation using synthetic credentials.
 const serverConfig={apiKey:'synthetic-server-token'};
 const proxy=load(`${root}/app/api/proxy.ts`,{'next/server':{NextResponse:{json:(body,init)=>new Response(JSON.stringify(body),init)}},'./auth':{auth:req=>{req.headers.set('Authorization','Bearer synthetic-server-token');return {error:false}}},'@/app/config/server':{getServerSideConfig:()=>serverConfig}});
 const makeReq=(target,token='Bearer nk-test-code')=>({method:'POST',headers:new Headers({'x-base-url':target,Authorization:token}),nextUrl:{searchParams:new URLSearchParams()},body:null});
 await proxy.handle(makeReq('https://api.openai.com.attacker.test'),{params:{path:['v1','chat','completions']}});
 assert.equal(request.headers.get('Authorization'),null,'Never forward server key or access code to custom origin');
 await proxy.handle(makeReq('https://api.openai.com'),{params:{path:['v1','chat','completions']}});
 assert.equal(request.headers.get('Authorization'),'Bearer synthetic-server-token');
 await proxy.handle(makeReq('https://api.openai.com','Bearer synthetic-user-token'),{params:{path:['v1','chat','completions']}});
 assert.equal(request.headers.get('Authorization'),'Bearer synthetic-user-token','Preserve frontend OpenAI key');
 assert.equal((await proxy.handle(makeReq('http://localhost'),{params:{path:['x']}})).status,400);
 const authConfig={codes:new Set(['hashed-code']),needCode:true,hideUserApiKey:false};
 const authModule=load(`${root}/app/api/auth.ts`,{'next/server':{},'../config/server':{getServerSideConfig:()=>authConfig},'spark-md5':{hash:v=>'hashed-'+v}});
 for(const [provider,header] of [['GeminiPro','x-goog-api-key'],['Claude','x-api-key']]) {
  const req={headers:new Headers({[header]:'synthetic-user-token'}),nextUrl:{pathname:'/api/test'}};
  assert.equal(authModule.auth(req,provider).error,false,'Native provider keys satisfy caller authentication');
  authConfig.hideUserApiKey=true;assert.equal(authModule.auth(req,provider).error,true);authConfig.hideUserApiKey=false;
 }
 const codeReq={headers:new Headers({Authorization:'Bearer nk-code'}),nextUrl:{pathname:'/api/google'}};
 assert.equal(authModule.auth(codeReq,'GeminiPro').error,false);
 assert.equal(codeReq.headers.get('Authorization'),null,'Never forward an app access code when the upstream key is missing');
 let streamFailed=0,streamFinished=0,mode='http-error';
 const streaming=load(`${root}/app/utils/chat.ts`,{
  '@/app/locales':{Error:{Unauthorized:'Unauthorized'}},
  '@fortaine/fetch-event-source':{EventStreamContentType:'text/event-stream',fetchEventSource:async(path,opts)=>{
    if(mode==='connection-timeout'){await new Promise(resolve=>opts.signal.addEventListener('abort',resolve));return;}
    await opts.onopen(new Response(mode==='http-error'?'quota exceeded':null,{status:mode==='http-error'?429:200,headers:{'Content-Type':mode==='http-error'?'application/json':'text/event-stream'}}));
    if(mode==='idle-timeout'){await new Promise(resolve=>opts.signal.addEventListener('abort',resolve));return;}
    if(mode==='malformed')opts.onmessage({data:'broken-json'});
    if(mode==='success')opts.onmessage({data:'{"text":"OK"}'});
    opts.onclose();
  }},
  './format':{prettyObject:v=>JSON.stringify(v)},'./stream':{fetch:async()=>{}},
 });
 for(mode of ['http-error','malformed','empty','success','connection-timeout','idle-timeout']){
  streamFailed=0;streamFinished=0;
  await streaming.stream('/test',{}, {},[],{},new AbortController(),text=>JSON.parse(text).text,()=>{}, {onError:()=>streamFailed++,onFinish:()=>streamFinished++});
  assert.equal(streamFailed,mode==='success'?0:1,mode+' error callback');
  assert.equal(streamFinished,mode==='success'?1:0,mode+' completion callback');
 }
 console.log('PASS: stream HTTP failures, malformed SSE, empty response, valid SSE lifecycle');
 const primary=new Map(),fallback=new Map([['fixture','stale']]);
 const storage=load(`${root}/app/utils/indexedDB-storage.ts`,{'idb-keyval':{get:async k=>primary.get(k),set:async(k,v)=>primary.set(k,v),del:async k=>primary.delete(k),clear:async()=>primary.clear()},'./safe-storage':{safeLocalStorage:()=>({getItem:k=>fallback.get(k)??null,setItem:(k,v)=>fallback.set(k,v),removeItem:k=>fallback.delete(k),clear:()=>fallback.clear()})}}).indexedDBStorage;
 await storage.setItem('fixture',JSON.stringify({state:{_hasHydrated:true,text:'preserved'}}));
 assert.ok((await storage.getItem('fixture')).includes('preserved'));
 await storage.removeItem('fixture');assert.equal(await storage.getItem('fixture'),null,'Deleted data must not resurrect from localStorage');
 primary.set('fixture','value');fallback.set('fixture','stale');await storage.clear();assert.equal(primary.size+fallback.size,0);
 console.log('PASS: hydrated IndexedDB write/read, removal clears legacy fallback, clear removes both stores');
 let release;
 const slowStorage=load(`${root}/app/utils/indexedDB-storage.ts`,{'idb-keyval':{set:()=>new Promise(resolve=>release=resolve)},'./safe-storage':{safeLocalStorage:()=>({setItem(){}})}}).indexedDBStorage;
 const write=slowStorage.setItem('fixture',JSON.stringify({state:{_hasHydrated:true}}));let flushed=false;const flush=slowStorage.flush().then(()=>flushed=true);
 await Promise.resolve();assert.equal(flushed,false,'Flush waits for IndexedDB transaction completion');release();await flush;await write;assert.equal(flushed,true);
 const merger=load(`${root}/app/utils/merge.ts`).merge;
 const target={rows:[{original:true}],prompt:'Literal __proto__ and constructor words are preserved'};
 merger(target,JSON.parse('{"__proto__":{"polluted":"yes"},"constructor":{"prototype":{"polluted":"yes"}},"rows":[{"added":true}],"normal":{"value":1}}'));
 assert.equal({}.polluted,undefined);assert.equal(Object.hasOwn(target,'constructor'),false);assert.equal(target.normal.value,1);assert.equal(target.rows[0].original,true);assert.equal(target.rows[0].added,true);assert.ok(target.prompt.includes('__proto__'));
 console.log('PASS: persistence flush waits for writes; backup merge blocks prototype traversal and preserves prompt text');
 console.log('PASS: proxy credential isolation, exact OpenAI origin, frontend key preservation, native provider authentication');
 console.log('PASS: four adapters HTTP errors/success, Gemini finish-only SSE, Claude parameters, Mistral custom /v1 URL');
})().catch(e=>{console.error(e);process.exitCode=1});
