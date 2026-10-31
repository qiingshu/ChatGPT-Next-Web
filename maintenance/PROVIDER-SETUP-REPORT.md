# NextChat 多模型 API 接入简化：执行与测试报告

日期：2026-10-31（Asia/Shanghai）  
仓库：qiingshu/ChatGPT-Next-Web  
分支：maintenance/nextchat-upgrade  
本轮基线：0d939ad624cb1755a4cf81581c1e20f2b5ab6af0  
功能代码提交：5f0ec0f0a76ae3406f5cdb5ad97109b899ac1afc  
Preview：https://chat-gpt-next-9tgfl0rq0-qiingshus-projects.vercel.app  
GitHub 验收运行：https://github.com/qiingshu/ChatGPT-Next-Web/actions/runs/41198760002

## 结论

实现和平台合成回归已完成，可以交用户在 Preview 验收。五家真实 API 与实体 iPhone 尚未完成验证，不宣称正式上线验收通过。

真实模型 API 状态：OpenAI、Gemini、DeepSeek、Claude、Mistral 均为「待用户测试」。未取得所属模型及安全配置位置明确的测试凭据，没有读取生产密钥、执行真实计费请求或把模拟结果标为真实验证。

## 使用方式与兼容性

1. 在设置页选择服务商，输入其 API Key；该服务商的预设模型自动应用到当前聊天和未来新聊天。
2. 每家服务商继续使用独立的原有 Key 字段。切换不会清空其他家的 Key、URL 或自定义模型列表。
3. API URL、自定义模型及模型参数位于默认关闭的「高级设置」中。第三方兼容接口和其他既有服务商入口保留。
4. 不在设置页初始化、配置 hydration 或升级时执行自动重置。只有用户明确切换服务商，才选择对应预设模型。
5. Masks 的 context、文学分析提示词及现有聊天消息不修改；存储键、schema 版本和备份结构不变。
6. 连接测试使用当前聊天模型，发送简短非流式请求，不写入聊天记录。结果显示在页面内；30 秒超时覆盖整个测试过程，并有卸载清理和重复回调保护。

## 官方预设

| 服务商 | 默认模型 | 官方 API 地址 | 网页默认路由 |
|---|---|---|---|
| OpenAI | gpt-5.4-mini | https://api.openai.com/v1/chat/completions | /api/openai/v1/chat/completions |
| Gemini | gemini-3.5-flash-lite | https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent；流式使用 :streamGenerateContent?alt=sse | /api/google/v1beta/models/… |
| DeepSeek | deepseek-flash | https://api.deepseek.com/chat/completions | /api/deepseek/chat/completions |
| Claude | claude-haiku-5-5 | https://api.anthropic.com/v1/messages | /api/anthropic/v1/messages |
| Mistral | mistral-small-latest | https://api.mistral.ai/v1/chat/completions | /api/mistral/v1/chat/completions |

网页使用已有本站代理路由；不会新建 API 中转服务。已有自定义 URL 保留，已有部署的服务端地址配置仍按原代理行为生效。

必要参数：OpenAI 新预设使用 max_completion_tokens、reasoning_effort=none，去掉旧采样及惩罚字段；DeepSeek 新预设显式使用 thinking.type=disabled；Claude 保留 anthropic-version=2023-06-01 和 max_tokens，不向新模型发送旧采样参数。Gemini 保留原生 systemInstruction、contents、generationConfig 及既有用户可配置安全选项，没有新增内容审核逻辑。原有其他模型配置继续保留。

官方文档核对（文档核对不代表账户实际可用性验证）：

- [OpenAI GPT-5.4 Mini](https://developers.openai.com/api/docs/models/gpt-5.4-mini)
- [Gemini 3.5 Flash-Lite](https://ai.google.dev/gemini-api/docs/models/gemini-3.5-flash-lite)
- [DeepSeek 首次调用](https://api-docs.deepseek.com/en/) / [Thinking Mode](https://api-docs.deepseek.com/guides/thinking_mode/)
- [Claude Haiku 5.5](https://platform.claude.com/docs/en/models/haiku-5-5/overview)
- [Mistral Chat API](https://docs.mistral.ai/api/endpoint/chat)

## 修改文件与原因

| 文件 | 修改原因 |
|---|---|
| app/components/settings.tsx | 直接显示服务商和独立 Key；明确选择时同步当前/未来聊天模型；折叠高级控件；连接结果及完整超时生命周期 |
| app/components/settings.module.scss | 设置区局部布局、触控尺寸、16px 输入字体；覆盖密码组件半宽容器以避免手机 Key 输入框过窄 |
| app/utils/provider-presets.ts | 集中维护五家默认模型、Key/URL 字段及官方地址元数据 |
| app/constant.ts | 注册新默认模型；识别三家新预设的图片能力；保留旧模型条目 |
| app/store/config.ts | 只改变全新配置的 OpenAI 默认模型，不改变持久化版本或重置逻辑 |
| app/client/platforms/openai.ts | 新预设必要参数；非流式 HTTP 错误及 HTTP 200 SSE 错误帧分类处理；移除相关原始错误/URL日志 |
| app/client/platforms/deepseek.ts | 新预设关闭 thinking；安全中文错误回调；移除相关载荷/URL/原始错误日志 |
| app/client/platforms/google.ts | 安全中文错误回调；移除相关原始响应/URL/错误日志 |
| app/client/platforms/anthropic.ts | 安全中文错误回调；移除相关 URL/原始错误日志 |
| app/client/platforms/mistral.ts | 安全中文错误回调；移除相关 URL/原始错误日志 |
| app/utils/api-error.ts | 将 Key、权限、额度、限流、模型、参数、超时和网络错误映射到固定中文提示，不回显上游原文 |
| app/utils/chat.ts | 共用流式失败回调使用安全中文提示 |
| app/store/chat.ts | 聊天错误展示不回显原文；新预设的自动标题和摘要继续使用同服务商的预设模型 |
| test/provider-presets.test.ts | 模型注册、Key 字段隔离、图片识别、错误分类及重复格式化稳定性测试 |
| maintenance/tests/provider-onboarding.cjs | GitHub hosted runner 专用 Chromium/WebKit 合成回归；拦截模型流量、屏蔽输入截图、检查旧数据兼容 |
| .github/workflows/maintenance-acceptance.yml | 仅针对本测试分支运行类型检查、测试、构建及浏览器回归，上传合成证据 |
| maintenance/PROVIDER-SETUP-REPORT.md | 本报告 |

依赖：package.json、yarn.lock 未修改，没有升级项目依赖。浏览器测试工具仅安装在 GitHub hosted runner 临时目录，未添加到项目依赖。

## 本轮提交

- 030dc89：服务商简化配置、官方预设、错误提示与远端验收脚本。
- 2fb1832：修正 GitHub runner 上下文位置。
- 6a710e2：修正限流重复格式化，固定受支持的 GitHub runner 系统。
- 0e1096a：保留新预设的图片识别及原有高级入口，修正 Gemini 流式夹具。
- b2d402f：处理 OpenAI SSE 错误帧并扩展回归。
- 5f0ec0f：修复移动端 Key 容器半宽限制；此为最终通过验证的功能代码。

## 修复与验证过程

- 修复原服务商选择只改变面板、未同步聊天模型的问题。
- 修复连接测试可能在预处理阶段无限等待的问题，添加始终可见的结果。
- 修复错误被多次格式化时，限流误变为额度不足的问题。
- 修复 OpenAI HTTP 200/SSE error 帧被当作空响应的问题。
- 补齐新默认模型的图片能力识别和同服务商摘要模型选择。
- Chromium 的布局断言发现密码组件仍限制半宽，已在服务商设置范围内修正。
- 首次 CI 的 runner 上下文位置错误、Gemini 流式夹具返回非流式 JSON 均已修正；它们属于验证框架问题，不作为真实 API 故障或成功证据。

## 验证结果

- GitHub hosted runner（Ubuntu 24.04、Node 22.23.4）：类型检查通过。
- Jest：7 suites、52 tests 全部通过。
- GitHub 完整构建：通过；Vercel Preview：READY。
- Chromium / WebKit，390×844：全部合成浏览器回归通过，两种引擎均无 pageerror。
- 手机 Key 输入框宽度及连接按钮触控高度断言通过；无页面横向溢出。
- 实际导出/导入按钮完成合成聊天、Masks、提示词内容恢复；旧自定义模型和 URL 保留。
- 五家服务商的非流式连接测试、模拟流式回复、第二轮上下文验证通过。
- 无效 Key、额度不足、模型不存在、30 秒超时，以及 HTTP 200/SSE error 帧终止检查通过。
- [GitHub Actions 日志](https://github.com/qiingshu/ChatGPT-Next-Web/actions/runs/41198760002)
- [下载浏览器测试证据 ZIP](https://github.com/qiingshu/ChatGPT-Next-Web/actions/runs/41198760002/artifacts/13041961771)：包含两种引擎的结果 JSON 及输入值被遮挡的截图；GitHub 保留至 2026-11-07T11:58:37Z。
- 已检查的功能 Preview：[https://chat-gpt-next-9tgfl0rq0-qiingshus-projects.vercel.app](https://chat-gpt-next-9tgfl0rq0-qiingshus-projects.vercel.app)，首页 HTTP 200，页面内提交号与功能代码提交一致。

报告提交只新增本报告，不改变已测试的功能代码。浏览器测试对应上方功能代码提交；报告后的最新 Preview 将由原 Git 集成自动生成。

| 服务商 | 配置/请求与浏览器合成验证 | 真实 API |
|---|---|---|
| OpenAI | 非流式连接、流式回复、上下文及对应配置合成验证通过 | 待用户测试 |
| Gemini | 非流式连接、流式回复、上下文及对应配置合成验证通过 | 待用户测试 |
| DeepSeek | 非流式连接、流式回复、上下文及对应配置合成验证通过 | 待用户测试 |
| Claude | 非流式连接、流式回复、上下文及对应配置合成验证通过 | 待用户测试 |
| Mistral | 非流式连接、流式回复、上下文及对应配置合成验证通过 | 待用户测试 |

模拟用例会检查服务商对应请求头和 Key 字段、模型 ID、必要参数、非流式连接测试、普通聊天流式回包、第二轮上下文连续性、无效 Key/额度/模型错误、30 秒超时、SSE error 帧结束、中文输入法 Enter、Key 切换保留、自定义 URL 持久化及连接、旧自定义模型保留、聊天/Masks/提示词导出导入和移动布局。

浏览器运行于 GitHub hosted runner 自行构建的测试站点，Vercel Preview 单独核对构建与页面响应；没有将 HTTP 200 当作完整浏览器或真实 API 成功证明。模型请求均被拦截为合成响应，未使用真实用户数据。Service Worker 在模拟测试中禁用。

## 未验证项与限制

- 五家真实请求、真实网络流式响应、账号额度/模型权限及第三方接口实际 CORS：待用户测试。
- 实体 iPhone Safari、系统键盘及低内存行为：待用户验收；WebKit 移动视口不能代替真机。
- 真实图片、多模态、工具调用、实时语音及 Service Worker 缓存行为：没有本轮真实端到端结论。
- 本轮未重跑依赖安全审计，不把上一轮审计结果当作当前扫描；构建保留既有非阻塞警告。
- 原 main 测试工作流仍使用 Node 18，本测试分支新增专用 Node 22.23.4 验证工作流；未来合并前应核对 main 的 CI 运行时要求，本次不修改 main 或发布配置。

## 生产保护与最小回滚

交付前复核：main 仍为 c5f61211c8bd37b0180074fe58b3e9913e81c17c；Vercel 最新生产部署仍为 dpl_9DUPLWgaC7giPMU5VhmZix1Y7xzW，对应同一 c5f61211 基线提交，状态 READY。

未使用 VPS 构建、安装依赖、运行浏览器或沙箱。开发修改通过 GitHub 测试分支提交；验证使用 GitHub hosted runner 和 Vercel Preview。未修改生产环境变量、域名、部署配置或其他 Cloudflare Workers/服务器，未合并 main。

当前生产未变，无需生产回滚。若不接受本轮 UI，可在测试分支对本轮提交进行 revert，或继续使用本轮基线 0d939ad 对应的旧 Preview；不执行 force push、生产回滚或数据清理。

完成后停止，等待用户验收及另行明确的生产上线授权。
