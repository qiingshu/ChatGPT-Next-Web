const {chromium,webkit}=require('/tmp/imqing-browser-check/node_modules/playwright');
const fs=require('node:fs');
const assert=require('node:assert/strict');
const base=process.env.TEST_URL||'http://127.0.0.1:3100';
const engine=process.env.ENGINE||'chromium';
const label=process.env.TEST_LABEL||'local';
const pause=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{
 const browser=await ({chromium,webkit}[engine]).launch({headless:true,args:engine==='chromium'?['--no-sandbox']:[]});
 const context=await browser.newContext({viewport:{width:390,height:844},locale:'en-US',isMobile:true,hasTouch:true,acceptDownloads:true});
 const page=await context.newPage();
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 let called=0,currentProvider='Mistral';
 const providers={Mistral:['mistral','mistral-maintenance-fixture','Authorization'],DeepSeek:['deepseek','deepseek-chat','Authorization'],Google:['google','gemini-2.5-flash','x-goog-api-key'],Anthropic:['anthropic','claude-sonnet-4-5','x-api-key'],OpenAI:['openai','gpt-4o-mini','Authorization']};
 await page.route('**/api/{mistral,deepseek,google,anthropic,openai}/**',async route=>{
  if(route.request().method()==='GET'){await route.fulfill({status:200,contentType:'application/json',body:JSON.stringify({data:[]})});return;}
  const [path,model,header]=providers[currentProvider];
  assert.ok(route.request().url().includes('/api/'+path+'/'),`Expected ${path}, got ${new URL(route.request().url()).pathname}`);
  const payload=route.request().postDataJSON(); assert.equal(payload.model??model,model);
  assert.ok(route.request().headers()[header.toLowerCase()]?.includes('synthetic-test-key'));
  called++;
  let chunks;
  if(currentProvider==='Google') chunks=[{candidates:[{content:{parts:[{text:'Mock Google response'}]}}]},{candidates:[{finishReason:'STOP'}]}];
  else if(currentProvider==='Anthropic') chunks=[{type:'content_block_delta',index:0,delta:{type:'text_delta',text:'Mock Anthropic response'}},{type:'message_stop'}];
  else chunks=[{choices:[{delta:{content:`Mock ${currentProvider} response`}}]}];
  await route.fulfill({status:200,contentType:'text/event-stream',body:chunks.map(c=>'data: '+JSON.stringify(c)+'\n\n').join('')+'data: [DONE]\n\n'});
 });
 await page.goto(base+'/#/chat',{waitUntil:'domcontentloaded'});
 await page.locator('textarea').first().waitFor({timeout:60000}); await pause(1000);
 async function state(fn,arg){return page.evaluate(async({fn,arg})=>{
  const db=await new Promise((resolve,reject)=>{const r=indexedDB.open('keyval-store');r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error)});
  const get=key=>new Promise((resolve,reject)=>{const r=db.transaction('keyval','readonly').objectStore('keyval').get(key);r.onsuccess=()=>resolve(JSON.parse(r.result));r.onerror=()=>reject(r.error)});
  const put=(key,val)=>new Promise((resolve,reject)=>{const tx=db.transaction('keyval','readwrite');tx.objectStore('keyval').put(JSON.stringify(val),key);tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error)});
  const result=await (new Function('get','put','arg',`return (${fn})(get,put,arg)`))(get,put,arg);db.close();return result;
 },{fn:fn.toString(),arg});}
 await state(async(get,put)=>{
  const chat=await get('chat-next-web-store');
  chat.state.sessions[0].topic='Maintenance fixture';
  chat.state.sessions[0].messages=[{id:'fixture-user',role:'user',content:'Preserve literature fixture 文学分析测试',date:'2026/10/31 12:00:00'},{id:'fixture-assistant',role:'assistant',content:'Preserved reply',date:'2026/10/31 12:00:01'}];
  const mask=await get('mask-store');mask.state.masks['fixture-mask']={...chat.state.sessions[0].mask,id:'fixture-mask',name:'Maintenance Mask',builtin:false,context:[{id:'fixture-system',role:'system',content:'Preserve fixture prompt 原文保留',date:'2026/10/31'}]};
  const prompt=await get('prompt-store');prompt.state.prompts['fixture-prompt']={id:'fixture-prompt',title:'Maintenance Prompt',content:'Preserve fixture prompt 原文保留',isUser:true,createdAt:1793419200000};
  await put('chat-next-web-store',chat);await put('mask-store',mask);await put('prompt-store',prompt);
 });
 for(const [provider,[path,model]] of Object.entries(providers)){
  currentProvider=provider;
  await page.goto(base+'/robots.txt',{waitUntil:'domcontentloaded'});
  await state(async(get,put,{provider,path,model})=>{
   const access=await get('access-control');access.state.useCustomConfig=true;access.state.provider=provider;
   const field={Google:'google',Anthropic:'anthropic',OpenAI:'openai',DeepSeek:'deepseek',Mistral:'mistral'}[provider];
   access.state[field+'ApiKey']='synthetic-test-key';access.state[field+'Url']='/api/'+path;
   await put('access-control',access);
   const config=await get('app-config');config.state.customModels='mistral-maintenance-fixture@Mistral,gemini-2.5-flash@Google,claude-sonnet-4-5@Anthropic';await put('app-config',config);
   const chat=await get('chat-next-web-store');chat.state.sessions[0].mask.modelConfig.model=model;chat.state.sessions[0].mask.modelConfig.providerName=provider;chat.state.sessions[0].mask.syncGlobalConfig=false;chat.state.sessions[0].mask.modelConfig.compressMessageLengthThreshold=1000000;await put('chat-next-web-store',chat);
  },{provider,path,model});
  await page.goto(base+'/#/chat',{waitUntil:'domcontentloaded'});await page.locator('textarea').first().waitFor({timeout:60000});
  const input=page.locator('textarea').first();await input.fill('Maintenance mock request');
  if(provider==='Mistral'){await input.dispatchEvent('keydown',{key:'Enter',keyCode:229,which:229,isComposing:true,bubbles:true});await pause(150);assert.equal(called,0,'IME Enter must not submit');}
  await input.press('Enter');
  await page.getByText(`Mock ${provider} response`,{exact:true}).waitFor({timeout:30000});
  console.log(`PASS mocked provider: ${provider}`);
 }
 assert.equal(called,5);
 await page.screenshot({path:`maintenance/evidence/${label}-${engine}-chat.png`,fullPage:false,animations:'disabled'});
 await page.goto(base+'/#/settings');
 // Provider setting reflects the last selected provider; select Mistral through the native mobile control.
 const providerSelect=page.locator('select').filter({has:page.locator('option[value="Mistral"]')}).first();await providerSelect.selectOption('Mistral');
 await page.getByLabel('Mistral API URL',{exact:true}).waitFor();
 assert.equal(await page.getByLabel('Mistral API Key',{exact:true}).inputValue(),'synthetic-test-key');
 await page.getByLabel('Mistral API URL',{exact:true}).scrollIntoViewIfNeeded();
 await page.screenshot({path:`maintenance/evidence/${label}-${engine}-settings.png`,fullPage:false,animations:'disabled'});
 // Export through the actual UI, inspect only synthetic fixture data, then import into a clean browser context.
 const downloadPromise=page.waitForEvent('download');await page.getByRole('button',{name:/Local Data.*Export/i}).click();
 const download=await downloadPromise;const file=await download.path();const backup=JSON.parse(fs.readFileSync(file,'utf8'));
 assert.ok(backup['chat-next-web-store'].sessions.some(s=>s.topic==='Maintenance fixture'));
 assert.equal(backup['mask-store'].masks['fixture-mask'].context[0].content,'Preserve fixture prompt 原文保留');
 assert.equal(backup['prompt-store'].prompts['fixture-prompt'].content,'Preserve fixture prompt 原文保留');
 const fresh=await browser.newContext({viewport:{width:390,height:844},locale:'en-US',isMobile:true,hasTouch:true});
 await fresh.route('**/api/{mistral,deepseek,google,anthropic,openai}/**',route=>route.fulfill({status:200,contentType:'application/json',body:'{"data":[]}'}));
 const p2=await fresh.newPage();
 await p2.goto(base+'/#/settings',{waitUntil:'domcontentloaded'});await p2.getByRole('button',{name:/Local Data.*Import/i}).waitFor({timeout:60000});
 const chooser=p2.waitForEvent('filechooser');await p2.getByRole('button',{name:/Local Data.*Import/i}).click();await (await chooser).setFiles({name:'maintenance-fixture.json',mimeType:'application/json',buffer:Buffer.from(JSON.stringify(backup))});
 await p2.waitForEvent('load');await pause(1500);
 const imported=await p2.evaluate(async()=>{
  const db=await new Promise(resolve=>{const r=indexedDB.open('keyval-store');r.onsuccess=()=>resolve(r.result)});
  const get=key=>new Promise(resolve=>{const r=db.transaction('keyval','readonly').objectStore('keyval').get(key);r.onsuccess=()=>resolve(JSON.parse(r.result).state)});
  const chat=await get('chat-next-web-store'),mask=await get('mask-store'),prompt=await get('prompt-store');db.close();
  return {chat:chat.sessions.some(s=>s.topic==='Maintenance fixture'&&s.messages.some(m=>m.content==='Preserve literature fixture 文学分析测试')),mask:mask.masks['fixture-mask']?.context[0]?.content==='Preserve fixture prompt 原文保留',prompt:prompt.prompts['fixture-prompt']?.content==='Preserve fixture prompt 原文保留'};
 });
 assert.deepEqual(imported,{chat:true,mask:true,prompt:true});
 const overflow=await p2.evaluate(()=>document.documentElement.scrollWidth>innerWidth+2);assert.equal(overflow,false);
 fs.writeFileSync(`maintenance/evidence/${label}-${engine}.json`,JSON.stringify({engine,viewport:'390x844',mockProviders:Object.keys(providers),apiCalls:called,configMistral:true,exportImport:{chat:true,mask:true,prompt:true},horizontalOverflow:overflow,imeEnterProtected:true,physicalIPhone:false,pageErrors:errors},null,2));
 assert.deepEqual(errors,[]);
 await browser.close();console.log(`PASS ${label} ${engine}: five mocked provider streams, Mistral settings, IndexedDB export/import, mobile viewport`);
})().catch(e=>{console.error(e);process.exitCode=1});
