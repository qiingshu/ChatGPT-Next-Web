// Run only on a GitHub hosted runner. All model traffic is intercepted with synthetic responses.
const assert = require("node:assert/strict");
const fs = require("node:fs");
const { spawn } = require("node:child_process");
const { chromium, webkit } = require(process.env.PLAYWRIGHT_MODULE || "playwright");
if (process.env.GITHUB_ACTIONS !== "true" || process.env.RUNNER_ENVIRONMENT !== "github-hosted") {
  throw new Error("This acceptance suite must run on a GitHub hosted runner.");
}
const base = "http://127.0.0.1:3100";
const out = "maintenance/acceptance-results";
fs.mkdirSync(out, { recursive: true });
const presets = [
  { provider: "DeepSeek", label: "DeepSeek", path: "deepseek", model: "deepseek-flash", field: "deepseek", header: "authorization" },
  { provider: "Google", label: "Gemini", path: "google", model: "gemini-3.5-flash-lite", field: "google", header: "x-goog-api-key" },
  { provider: "Mistral", label: "Mistral", path: "mistral", model: "mistral-small-latest", field: "mistral", header: "authorization" },
  { provider: "Anthropic", label: "Claude", path: "anthropic", model: "claude-haiku-5-5", field: "anthropic", header: "x-api-key" },
  { provider: "OpenAI", label: "OpenAI", path: "openai", model: "gpt-5.4-mini", field: "openai", header: "authorization" },
];
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function snapshot(page) {
  return page.evaluate(async () => {
    const db = await new Promise((resolve, reject) => {
      const r = indexedDB.open("keyval-store");
      r.onsuccess = () => resolve(r.result); r.onerror = () => reject(r.error);
    });
    const result = {};
    for (const key of ["access-control", "app-config", "chat-next-web-store", "mask-store", "prompt-store"]) {
      result[key] = await new Promise((resolve, reject) => {
        const r = db.transaction("keyval", "readonly").objectStore("keyval").get(key);
        r.onsuccess = () => resolve(r.result ? JSON.parse(r.result).state : null);
        r.onerror = () => reject(r.error);
      });
    }
    db.close();
    return result;
  });
}
async function run(engine) {
  const browser = await ({ chromium, webkit }[engine]).launch();
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 }, locale: "en-US", isMobile: true,
    hasTouch: true, serviceWorkers: "block", acceptDownloads: true,
  });
  await context.addInitScript(() => {
    // Make model mocks deterministic; Service Worker caching is outside this suite.
    try { delete Object.getPrototypeOf(navigator).serviceWorker; } catch {}
  });
  let mode = "success", active, calls = 0, streamCalls = 0, secondTurn = false;
  let failure = null;
  const pageErrors = [];
  await context.route("**/*", async (route) => {
    const request = route.request();
    const url = new URL(request.url());
    if (url.pathname === "/api/config") return route.fulfill({
      contentType: "application/json",
      body: JSON.stringify({ needCode: false, hideUserApiKey: false, hideBalanceQuery: true, customModels: "", defaultModel: "" }),
    });
    const preset = presets.find((p) => url.pathname.startsWith("/api/" + p.path + "/") || url.hostname === "fixture.invalid");
    if (!preset && url.origin !== base) return route.abort();
    if (!preset) return route.continue();
    if (request.method() !== "POST") return route.fulfill({ contentType: "application/json", body: '{"data":[]}' });
    try {
      assert.ok(active, "a provider must have been selected");
      assert.ok(url.pathname.startsWith("/api/" + active.path + "/") || url.hostname === "fixture.invalid", "provider route mismatch");
      assert.ok(request.headers()[active.header]?.includes("fixture-" + active.field), "wrong provider credential selected");
      const payload = request.postDataJSON();
      if (active.provider === "Google") assert.ok(url.pathname.includes(active.model + ":"), "Gemini model mismatch");
      else assert.equal(payload.model, active.model, "model mismatch");
      if (active.provider === "OpenAI") {
        assert.equal(payload.reasoning_effort, "none");
        assert.ok(payload.max_completion_tokens > 0);
        assert.ok(!("presence_penalty" in payload) && !("max_tokens" in payload));
      }
      if (active.provider === "DeepSeek") assert.equal(payload.thinking.type, "disabled");
      if (active.provider === "Anthropic") {
        assert.equal(request.headers()["anthropic-version"], "2023-06-01");
        assert.ok(!("temperature" in payload) && !("top_p" in payload));
      }
      calls++;
      if (mode === "timeout") {
        await delay(35000);
        return route.fulfill({ contentType: "application/json", body: "{}" }).catch(() => {});
      }
      if (mode !== "success") {
        const codes = { invalid: [401, "invalid_api_key"], quota: [429, "insufficient_quota"], model: [404, "model_not_found"] };
        const [status, code] = codes[mode];
        return route.fulfill({ status, contentType: "application/json", body: JSON.stringify({ error: { code, message: code } }) });
      }
      const streaming = payload.stream === true;
      const text = "Mock " + active.label + " reply";
      if (streaming) {
        streamCalls++;
        if (secondTurn) assert.ok(JSON.stringify(payload).includes(text), "previous assistant turn must remain in context");
        let chunks;
        if (active.provider === "Google") chunks = [
          { candidates: [{ content: { role: "model", parts: [{ text }] } }] },
          { candidates: [{ finishReason: "STOP" }] },
        ];
        else if (active.provider === "Anthropic") chunks = [
          { type: "content_block_delta", index: 0, delta: { type: "text_delta", text } },
          { type: "message_stop" },
        ];
        else chunks = [{ choices: [{ delta: { content: text } }] }];
        return route.fulfill({
          contentType: "text/event-stream",
          body: chunks.map((v) => "data: " + JSON.stringify(v) + "\n\n").join("") + "data: [DONE]\n\n",
        });
      }
      const response = active.provider === "Google"
        ? { candidates: [{ content: { parts: [{ text: "OK" }] } }] }
        : active.provider === "Anthropic"
        ? { content: [{ type: "text", text: "OK" }] }
        : { choices: [{ message: { content: "OK" } }] };
      return route.fulfill({ contentType: "application/json", body: JSON.stringify(response) });
    } catch (error) {
      failure = error;
      return route.fulfill({ status: 500, contentType: "application/json", body: '{"error":{"message":"acceptance fixture assertion failed"}}' });
    }
  });
  const page = await context.newPage();
  page.on("pageerror", (error) => pageErrors.push(error.message));
  try {
    await page.goto(base + "/#/settings", { waitUntil: "domcontentloaded" });
    const provider = page.getByLabel("服务商", { exact: true });
    await provider.waitFor({ timeout: 60000 });
    const details = page.locator("details").filter({ has: page.locator("summary").filter({ hasText: "高级设置" }) });
    assert.equal(await details.getAttribute("open"), null, "advanced settings must be collapsed initially");
    for (const preset of presets) {
      active = preset;
      await provider.selectOption(preset.provider);
      const key = page.getByLabel(preset.label + " API Key", { exact: true }).first();
      await key.fill("fixture-" + preset.field);
      const result = page.getByRole("status");
      const before = (await snapshot(page))["chat-next-web-store"].sessions[0].messages.length;
      await page.getByRole("button", { name: "测试连接", exact: true }).click();
      await result.filter({ hasText: "连接成功：" + preset.model }).waitFor({ timeout: 10000 });
      if (failure) throw failure;
      await delay(100);
      const saved = await snapshot(page);
      assert.equal(saved["access-control"].provider, preset.provider);
      assert.equal(saved["chat-next-web-store"].sessions[0].mask.modelConfig.providerName, preset.provider);
      assert.equal(saved["chat-next-web-store"].sessions[0].mask.modelConfig.model, preset.model);
      assert.equal(saved["app-config"].modelConfig.model, preset.model);
      assert.equal(saved["chat-next-web-store"].sessions[0].messages.length, before, "connection test must not write chat messages");
      assert.equal(await details.getAttribute("open"), null);
      await page.goto(base + "/#/chat");
      const input = page.locator("textarea").first();
      await input.waitFor();
      const oldCalls = streamCalls;
      if (preset.provider === "DeepSeek") {
        await input.fill("Hi");
        await input.dispatchEvent("keydown", { key: "Enter", keyCode: 229, isComposing: true, bubbles: true });
        await delay(200);
        assert.equal(streamCalls, oldCalls, "IME Enter must not submit");
      }
      await input.fill("Hi"); await input.press("Enter");
      await page.getByText("Mock " + preset.label + " reply", { exact: true }).last().waitFor({ timeout: 15000 });
      if (failure) throw failure;
      secondTurn = true;
      await input.fill("And?"); await input.press("Enter");
      await page.waitForFunction((label) => [...document.querySelectorAll("body *")].filter((el) => el.childElementCount === 0 && el.textContent === "Mock " + label + " reply").length >= 2, preset.label, { timeout: 15000 });
      secondTurn = false;
      if (failure) throw failure;
      await page.goto(base + "/#/settings");
      await provider.waitFor();
    }
    // Switching back restores that provider's own saved key and selects its default.
    active = presets[0];
    await provider.selectOption(active.provider);
    assert.equal(await page.getByLabel("DeepSeek API Key", { exact: true }).first().inputValue(), "fixture-deepseek");
    for (const [next, expected] of [["invalid", "API Key 无效"], ["quota", "额度不足"], ["model", "模型不可用"], ["timeout", "连接测试超时"]]) {
      mode = next;
      await page.getByRole("button", { name: "测试连接", exact: true }).click();
      await page.getByRole("status").filter({ hasText: expected }).waitFor({ timeout: next === "timeout" ? 35000 : 10000 });
      assert.equal(await page.getByRole("button", { name: "测试连接", exact: true }).isEnabled(), true);
    }
    mode = "success";
    // Existing user fixture: saved custom URL, model, history, Mask and prompt.
    await page.evaluate(async () => {
      const db = await new Promise((resolve) => { const r = indexedDB.open("keyval-store"); r.onsuccess = () => resolve(r.result); });
      const get = (key) => new Promise((resolve) => { const r = db.transaction("keyval", "readonly").objectStore("keyval").get(key); r.onsuccess = () => resolve(JSON.parse(r.result)); });
      const put = (key, value) => new Promise((resolve, reject) => { const tx = db.transaction("keyval", "readwrite"); tx.objectStore("keyval").put(JSON.stringify(value), key); tx.oncomplete = resolve; tx.onerror = () => reject(tx.error); });
      const access = await get("access-control");
      access.state.deepseekUrl = "https://fixture.invalid/v1";
      const config = await get("app-config");
      config.state.customModels = "legacy-custom@DeepSeek";
      const chat = await get("chat-next-web-store");
      chat.state.sessions[0].mask.modelConfig.model = "legacy-custom";
      chat.state.sessions[0].mask.syncGlobalConfig = false;
      const mask = await get("mask-store");
      mask.state.masks["fixture-mask"] = { ...chat.state.sessions[0].mask, id: "fixture-mask", name: "Fixture Mask", builtin: false, context: [{ id: "fixture-system", role: "system", content: "文学分析原文保留", date: "2026/10/31" }] };
      const prompt = await get("prompt-store");
      prompt.state.prompts["fixture-prompt"] = { id: "fixture-prompt", title: "Fixture Prompt", content: "文学分析原文保留", isUser: true };
      await put("access-control", access); await put("app-config", config); await put("chat-next-web-store", chat);
      await put("mask-store", mask); await put("prompt-store", prompt); db.close();
    });
    await page.reload(); await provider.waitFor(); await delay(500);
    const legacy = await snapshot(page);
    assert.equal(legacy["access-control"].deepseekUrl, "https://fixture.invalid/v1");
    assert.equal(legacy["app-config"].customModels, "legacy-custom@DeepSeek");
    assert.equal(legacy["chat-next-web-store"].sessions[0].mask.modelConfig.model, "legacy-custom", "opening settings must not reset legacy model");
    assert.ok(legacy["chat-next-web-store"].sessions[0].messages.length >= 20, "existing messages must survive");
    await details.locator("summary").click();
    assert.equal(await page.getByLabel("DeepSeek API URL", { exact: true }).inputValue(), "https://fixture.invalid/v1");
    await page.getByLabel("DeepSeek API URL", { exact: true }).fill("https://fixture.invalid/v1/custom");
    await page.reload(); await provider.waitFor(); await details.locator("summary").click();
    assert.equal(await page.getByLabel("DeepSeek API URL", { exact: true }).inputValue(), "https://fixture.invalid/v1/custom");
    assert.equal(await page.getByLabel("DeepSeek API Key", { exact: true }).first().inputValue(), "fixture-deepseek");
    await provider.selectOption("Google"); await provider.selectOption("DeepSeek");
    assert.equal((await snapshot(page))["access-control"].deepseekUrl, "https://fixture.invalid/v1/custom", "switching must not reset custom URL");
    assert.equal((await snapshot(page))["app-config"].customModels, "legacy-custom@DeepSeek");
    // Real export/import controls; the backup contains synthetic fixtures only and is never uploaded.
    const downloadPromise = page.waitForEvent("download");
    await page.getByRole("button", { name: /Local Data.*Export/i }).click();
    const download = await downloadPromise;
    const backup = JSON.parse(fs.readFileSync(await download.path(), "utf8"));
    assert.equal(backup["mask-store"].masks["fixture-mask"].context[0].content, "文学分析原文保留");
    assert.equal(backup["prompt-store"].prompts["fixture-prompt"].content, "文学分析原文保留");
    const chooserPromise = page.waitForEvent("filechooser");
    await page.getByRole("button", { name: /Local Data.*Import/i }).click();
    const chooser = await chooserPromise;
    const navigation = page.waitForNavigation({ waitUntil: "domcontentloaded" });
    await chooser.setFiles({ name: "fixture.json", mimeType: "application/json", buffer: Buffer.from(JSON.stringify(backup)) });
    await navigation; await provider.waitFor(); await delay(300);
    const restored = await snapshot(page);
    assert.equal(restored["mask-store"].masks["fixture-mask"].context[0].content, "文学分析原文保留");
    assert.equal(restored["prompt-store"].prompts["fixture-prompt"].content, "文学分析原文保留");
    assert.deepEqual(restored["chat-next-web-store"].sessions[0].messages, backup["chat-next-web-store"].sessions[0].messages);
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 2), false);
    await page.getByLabel("DeepSeek API Key", { exact: true }).first().scrollIntoViewIfNeeded();
    await page.screenshot({ path: out + "/" + engine + "-settings.png", mask: [page.locator("input")], animations: "disabled" });
    assert.deepEqual(pageErrors, []);
    if (failure) throw failure;
    const summary = {
      engine, viewport: "390x844", providers: presets.map((p) => p.label), syntheticResponsesOnly: true,
      realApiVerified: false, physicalIPhoneVerified: false, calls, streamCalls,
      providerSwitch: true, separateKeys: true, defaultModels: true, advancedCollapsed: true,
      contextContinuity: true, imeEnter: true, connectionErrors: ["invalid key", "quota", "model", "30s timeout"],
      legacyConfigPreserved: true, masksPromptsAndHistory: true, exportImport: true, horizontalOverflow: false,
      serviceWorkerCacheVerified: false, pageErrors: [],
    };
    fs.writeFileSync(out + "/" + engine + ".json", JSON.stringify(summary, null, 2));
    console.log("PASS " + engine + ": provider onboarding, synthetic chat/context, errors, legacy config and export/import");
  } finally {
    await browser.close();
  }
}
(async () => {
  const server = spawn(process.execPath, ["node_modules/next/dist/bin/next", "start", "--hostname", "127.0.0.1", "--port", "3100"], {
    env: { ...process.env, NEXT_TELEMETRY_DISABLED: "1" }, stdio: ["ignore", "ignore", "ignore"],
  });
  try {
    let ready = false;
    for (let i = 0; i < 120; i++) {
      try { ready = (await fetch(base)).ok; } catch {}
      if (ready) break;
      await delay(1000);
    }
    assert.ok(ready, "GitHub hosted test server did not start");
    for (const engine of ["chromium", "webkit"]) await run(engine);
  } finally { server.kill("SIGTERM"); }
})().catch((error) => {
  // Assertions use only synthetic fixtures. Do not serialize request bodies, headers or backups.
  console.error(error);
  process.exitCode = 1;
});
