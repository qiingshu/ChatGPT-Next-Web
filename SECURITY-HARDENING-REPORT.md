# NextChat 正式上线前安全补强报告

日期：2026-10-31（Asia/Shanghai）  
仓库：[qiingshu/ChatGPT-Next-Web](https://github.com/qiingshu/ChatGPT-Next-Web)  
工作分支：`maintenance/nextchat-upgrade`  
本轮起点：`1df31eb02aaa92432d6cc9cc7cc7dc309180e00b`  
自动化验收提交：`b61b83af7d66568b88ad75334156b5e630d0388f`  
[本轮完整差异](https://github.com/qiingshu/ChatGPT-Next-Web/compare/1df31eb02aaa92432d6cc9cc7cc7dc309180e00b...b61b83af7d66568b88ad75334156b5e630d0388f)

## 结论

本轮插件 schema XSS、通用代理 SSRF 和版本展示修复已通过自动化验收，可提交用户验收。尚不能宣称五家真实模型 API 或实体 iPhone 已验收；正式上线需在用户完成剩余验证并明确批准后进行。

本轮只修改维护分支。没有合并 main，没有修改生产环境变量、域名或正式部署，没有使用 VPS 构建、安装依赖或运行测试。全部依赖安装、类型检查、单元测试、生产构建和浏览器自动化均在 GitHub 托管临时 runner 完成；Vercel 仅构建 Preview。

五家模型的真实 API 请求仍为「待用户测试」：本次未取得明确授权且可安全使用的专用测试凭据，没有读取、复制或使用生产 API Key。实体 iPhone Safari 尚未测试。不能把合成响应回归、WebKit 移动视口测试视为真实模型调用或实体设备验收。

## 修复内容与文件

| 文件 | 修改及原因 |
|---|---|
| `app/components/plugin.tsx` | 移除远程 schema 的 dangerouslySetInnerHTML/contentEditable 展示，改用受控 textarea；保留远程加载、JSON/YAML 解析、编辑和验证保存。远程请求失败时通过安全代理加载，分别传递站点认证与插件认证。 |
| `app/components/plugin.module.scss` | 为文本编辑框设置宽度边界、可调整高度、移动端 16px 字号，避免手机视口横向挤出。 |
| `app/api/proxy-security.ts` | 新增 HTTPS 目标、特殊地址、DNS 全部结果检查，以及连接 IP 固定、TLS 主机名验证和重定向拒绝。 |
| `app/api/proxy.ts` | 使用经校验并固定 IP 的 HTTPS 连接；过滤逐跳头、Cookie、站点访问码及平台内部头，保留插件 Authorization 和自定义认证头；保留流式传输与原有 10 分钟请求预算，DNS 解析另限 5 秒。实际执行时长仍受平台限制。 |
| `app/api/proxy/[[...path]]/route.ts` | 通用插件代理单独使用 Node.js 路由，以执行 DNS 校验与连接固定；支持原有插件路径及 HTTP 方法。 |
| `app/api/[provider]/[...path]/route.ts` | 未知服务商不再落入通用代理，返回 404；已知五家模型分发分支保持原样。 |
| `next.config.mjs` | 删除会绕过代理安全检查的五条外部 beforeFiles 转发规则；旧 OpenAI、Google、Anthropic、Alibaba、Azure 代理路径由安全路由兼容处理。 |
| `app/utils/proxy-auth.ts`、`app/store/plugin.ts` | 动态生成仅用于站点代理认证的独立请求头，避免覆盖插件自己的认证；代理不会把此站点认证头转发到第三方。 |
| `app/config/build.ts`、`app/components/settings.tsx` | 明确显示上游基础 v2.16.0、定制版标识和完整构建提交号，并明确「非完整官方 v2.16.1」。 |
| `test/proxy-security.test.ts` | 增加地址边界、DNS、连接固定、TLS 参数、取消/解析超时及 3xx 拒绝测试。 |
| `maintenance/tests/security-network.cjs` | GitHub runner 上真实公网 HTTPS 回显、私网拒绝、真实重定向拒绝及认证头隔离验证，不使用模型凭据。 |
| `maintenance/tests/security-browser.cjs` | Chromium/WebKit 中加载带 img/onerror、svg/onload、script 注入的合法 schema，验证不执行脚本，并验证编辑、持久化、重载和移动布局。 |
| `maintenance/tests/provider-onboarding.cjs`、`.github/workflows/maintenance-acceptance.yml` | 将安全检查接入现有五家模型回归；所有模型请求继续使用明确标识的合成响应。 |

未修改 package.json、yarn.lock 或任何依赖版本。未修改五家模型适配器、默认模型/预设、Key 即用配置逻辑、Masks、文学分析提示词、聊天记录存储及导入导出结构。Tauri 打包清单原版本号未改，本轮未制作桌面安装包；网页版本展示已与该历史标识分开。

## SSRF 防护边界与兼容性

- 仅允许公网 HTTPS；拒绝 URL 用户名/密码、片段、非公网或特殊用途地址。
- 拒绝回环、RFC1918、链路本地、CGNAT、云元数据、Azure 平台内部地址、组播/保留范围、IPv6 ULA/链路本地、IPv4-mapped IPv6、已知 NAT64/Teredo/6to4 等地址；对特殊用途范围采取保守拒绝。
- 处理数字、十六进制及缩写 IPv4 的 URL 标准化；拒绝 IPv6 zone ID 与本地主机名。
- DNS 返回中任一地址不安全即拒绝全部答案；实际连接使用已检查 IP，不重新解析、不使用共享连接池，同时保留原域名 SNI 与证书校验。
- 不自动跟随 301/302/303/307/308 等重定向，统一返回安全错误；合法第三方若返回跳转，应填写最终 HTTPS API 地址。
- 保留公网自定义域名、合法自定义端口、基础路径/查询参数、请求体、插件 Authorization 和自定义 X-* API 认证头；保留响应流。服务端 OpenAI Key 仅允许用于精确官方 OpenAI origin，不发送至调用方指定的其他主机。
- 本轮防护覆盖通用插件代理及其旧固定服务商代理路径；五家模型原有独立路由及运行时保持不变。

## 自动化与 Preview 结果

[GitHub Actions 验收运行](https://github.com/qiingshu/ChatGPT-Next-Web/actions/runs/41203132225)  
测试环境：GitHub-hosted Ubuntu 24.04、Node.js 22.23.4；浏览器工具仅安装在 runner 临时目录。

| 验证 | 结果与证据边界 |
|---|---|
| 类型检查 | TYPE_本轮插件 schema XSS、通用代理 SSRF 和版本展示修复已通过自动化验收，可提交用户验收。尚不能宣称五家真实模型 API 或实体 iPhone 已验收；正式上线需在用户完成剩余验证并明确批准后进行。 |
| 单元测试 | UNIT_本轮插件 schema XSS、通用代理 SSRF 和版本展示修复已通过自动化验收，可提交用户验收。尚不能宣称五家真实模型 API 或实体 iPhone 已验收；正式上线需在用户完成剩余验证并明确批准后进行。 |
| 生产构建 | BUILD_本轮插件 schema XSS、通用代理 SSRF 和版本展示修复已通过自动化验收，可提交用户验收。尚不能宣称五家真实模型 API 或实体 iPhone 已验收；正式上线需在用户完成剩余验证并明确批准后进行。 |
| 真实公网 HTTPS | NETWORK_本轮插件 schema XSS、通用代理 SSRF 和版本展示修复已通过自动化验收，可提交用户验收。尚不能宣称五家真实模型 API 或实体 iPhone 已验收；正式上线需在用户完成剩余验证并明确批准后进行。 |
| 私网/回环/元数据 | URL 拒绝由真实路由验收；混合 DNS、IPv4/IPv6 与连接固定由单元测试验收。 |
| 重定向 | 真实公网服务实际返回 3xx 后，代理拒绝；私网/元数据/IPv6 Location 的 301/302/303/307/308 由确定性传输测试覆盖，没有实际请求这些内网目标。 |
| 插件 XSS、编辑保存 | XSS_本轮插件 schema XSS、通用代理 SSRF 和版本展示修复已通过自动化验收，可提交用户验收。尚不能宣称五家真实模型 API 或实体 iPhone 已验收；正式上线需在用户完成剩余验证并明确批准后进行。 |
| 移动布局 | MOBILE_本轮插件 schema XSS、通用代理 SSRF 和版本展示修复已通过自动化验收，可提交用户验收。尚不能宣称五家真实模型 API 或实体 iPhone 已验收；正式上线需在用户完成剩余验证并明确批准后进行。 |
| Masks、提示词、聊天历史、导入导出 | DATA_本轮插件 schema XSS、通用代理 SSRF 和版本展示修复已通过自动化验收，可提交用户验收。尚不能宣称五家真实模型 API 或实体 iPhone 已验收；正式上线需在用户完成剩余验证并明确批准后进行。 |
| Vercel Preview | PREVIEW_本轮插件 schema XSS、通用代理 SSRF 和版本展示修复已通过自动化验收，可提交用户验收。尚不能宣称五家真实模型 API 或实体 iPhone 已验收；正式上线需在用户完成剩余验证并明确批准后进行。 |

[验收代码对应 Preview](https://chat-gpt-next-d0lo0ngze-qiingshus-projects.vercel.app)  
[下载测试证据 ZIP](https://github.com/qiingshu/ChatGPT-Next-Web/actions/runs/41203132225/artifacts/13043875627)，包含 Chromium/WebKit JSON、设置页截图及真实公网代理 JSON；GitHub Actions artifact 保留 7 天。截图中输入框已遮罩，备份文件和请求凭据不上传。

测试中曾遇到公网回显服务自行拒绝私网跳转，不能把该 403 视为本项目代理拦截通过。最终测试先校验真实 3xx 再检查代理拒绝；私网 Location 用确定性传输测试覆盖。浏览器持久化测试明确等待 IndexedDB 写入和编辑框填入后再做重载断言。

## 五家模型验证状态

以下默认值沿用任务开始时的维护分支，本轮未更改：

| 服务商 | 沿用默认模型 | 配置/独立 Key/连接/两轮流式上下文（合成） | 真实模型 API |
|---|---|---|---|
| OpenAI | gpt-5.4-mini | PROVIDER_本轮插件 schema XSS、通用代理 SSRF 和版本展示修复已通过自动化验收，可提交用户验收。尚不能宣称五家真实模型 API 或实体 iPhone 已验收；正式上线需在用户完成剩余验证并明确批准后进行。 | 待用户测试 |
| Gemini | gemini-3.5-flash-lite | PROVIDER_本轮插件 schema XSS、通用代理 SSRF 和版本展示修复已通过自动化验收，可提交用户验收。尚不能宣称五家真实模型 API 或实体 iPhone 已验收；正式上线需在用户完成剩余验证并明确批准后进行。 | 待用户测试 |
| DeepSeek | deepseek-flash | PROVIDER_本轮插件 schema XSS、通用代理 SSRF 和版本展示修复已通过自动化验收，可提交用户验收。尚不能宣称五家真实模型 API 或实体 iPhone 已验收；正式上线需在用户完成剩余验证并明确批准后进行。 | 待用户测试 |
| Claude | claude-haiku-5-5 | PROVIDER_本轮插件 schema XSS、通用代理 SSRF 和版本展示修复已通过自动化验收，可提交用户验收。尚不能宣称五家真实模型 API 或实体 iPhone 已验收；正式上线需在用户完成剩余验证并明确批准后进行。 | 待用户测试 |
| Mistral | mistral-small-latest | PROVIDER_本轮插件 schema XSS、通用代理 SSRF 和版本展示修复已通过自动化验收，可提交用户验收。尚不能宣称五家真实模型 API 或实体 iPhone 已验收；正式上线需在用户完成剩余验证并明确批准后进行。 | 待用户测试 |

浏览器回归还覆盖自定义 URL 与自定义模型保留、默认隐藏高级设置、输入法组合 Enter、连接测试不写入聊天记录、独立 Key 切换、无效 Key/额度不足/模型不可用/30 秒连接测试超时，以及 SSE 错误终止。错误响应为合成场景，不能证明真实服务商账户可用。

## 提交与生产保护

- 主修复：`08ad62261066c94a26d746633cf3c010e25b35a9`。
- JSX 保存处理修正：`025eac2f58b027a9ea00be979c9afca8e655bddb`。
- 保留原有插件超时预算：`451a728279aea0ce0429bdab30a36cfef94b734d`。
- 重定向测试校准：`bf8970500707fe9db7d844198b2b2575e0ac0630`。
- 编辑持久化测试等待：`b61b83af7d66568b88ad75334156b5e630d0388f`。
- 报告另作纯文档提交；应用和测试代码均未在上述验收后改动。

生产 main 保持 `c5f61211c8bd37b0180074fe58b3e9913e81c17c`，正式部署保持 `dpl_9DUPLWgaC7giPMU5VhmZix1Y7xzW`。没有请求或执行正式发布。

上游基础证据：官方 v2.16.0 对应 `377480b448798488db5ef03f4d5c44d2d930693c`，GitHub compare 显示其为本轮起点的 merge base（ahead，behind=0）。本项目包含其他定制及选择性修复，不能据此宣称完整官方 v2.16.1。

## 未验证项、风险与最小回滚

1. 五家模型真实调用、真实账户额度与接口可用性待用户使用专用测试 Key 验证；本轮没有取得可安全使用的测试凭据位置。
2. 移动端证据来自 Chromium/WebKit 的 390×844 触控视口，未在实体 iPhone Safari 验证键盘与系统行为。
3. DNS 全答案与特殊地址范围保守拒绝可能拒绝使用混合私网 DNS 的接口；HTTP、内网接口及自动跳转不在支持范围。应使用直接可达的公网 HTTPS 地址。
4. DNS 选择已校验的首个 IPv4，若无则使用 IPv6；不自动切换其他答案。目标可用性仍取决于公网网络、证书与接口自身。
5. Node.js 通用代理会受 Vercel Functions 的时长、响应与平台限制；本轮 Preview 构建通过不等于所有第三方插件接口均实测通过。
6. 没有批量升级依赖，也未把本轮结果表述为全仓库所有安全问题均消除。

目前生产未变，无需生产回滚。维护分支若需撤回本轮修复，应在该分支逆序 revert 本轮提交，恢复到 `1df31eb02aaa92432d6cc9cc7cc7dc309180e00b` 的应用代码，再由 GitHub Actions 与 Preview 验证；不要强制重置 main 或操作生产部署。撤回会重新引入本轮修复的 XSS/SSRF 风险。

本轮交付后停止，等待用户验收与明确正式上线授权。
