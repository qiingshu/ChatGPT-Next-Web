const assert = require("node:assert/strict");
module.exports = async function verifySecurityBrowser(page, context, base) {
  const versionCard = page.getByTestId("build-version");
  await versionCard.waitFor();
  const details = versionCard.locator("details");
  assert.equal(await details.getAttribute("open"), null, "version details start collapsed");
  const compact = await versionCard.innerText();
  assert.ok(compact.includes("2026.10.31") && compact.includes("v2.16.0"));
  assert.ok(!compact.includes("qiingshu-maintenance.") && !/[a-f0-9]{40}/.test(compact));
  assert.equal(await page.getByText("NextChat Custom Edition", { exact: true }).count(), 1);
  assert.equal(await page.getByRole("link", { name: /前往更新|Go to Update/i }).count(), 0);
  assert.equal(await page.getByRole("button", { name: /前往更新|Go to Update/i }).count(), 0);
  const compactBox = await versionCard.boundingBox();
  assert.ok(compactBox.height < 140, "collapsed version card remains compact on mobile");
  await details.locator("summary").click();
  const version = await versionCard.innerText();
  assert.ok(version.includes("Security maintenance ID: qiingshu-maintenance."));
  assert.ok(version.includes("Official reference version: ") && version.includes("not the complete official v2.16.1"));
  assert.match(version, /[a-f0-9]{40}/);
  assert.equal(await versionCard.locator("code").innerText(), process.env.GITHUB_SHA);
  const codeBox = await versionCard.locator("code").boundingBox();
  assert.ok(codeBox.x + codeBox.width <= 391, "long commit stays within the mobile card");
  assert.ok(codeBox.height < 30, "long commit stays on one scrollable line");
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 2), false);
  await page.screenshot({ path: (process.env.NEXTCHAT_EVIDENCE_DIR || "maintenance/acceptance-results") + "/" + (await page.context().browser().browserType().name()) + "-version-expanded.png", mask: [page.locator("input")], animations: "disabled" });
  await details.locator("summary").click();
  assert.equal(await details.getAttribute("open"), null);
  await context.route("**/plugins.json", route => route.fulfill({ contentType: "application/json", body: "[]" }));
  const payload = '<img src=x onerror="window.__schemaXss=1"><svg onload="window.__schemaXss=2"></svg><script>window.__schemaXss=3</script>';
  const schema = { openapi: "3.0.0", info: { title: "Security Fixture Plugin", version: "1.0.0", description: payload },
    servers: [{ url: "https://example.com" }],
    paths: { "/fixture": { get: { operationId: "fixture", description: payload, responses: { "200": { description: "OK" } } } } } };
  let fallback = false;
  await context.route("https://schema-fixture.invalid/openapi.json", route => route.abort());
  await context.route("**/api/proxy/openapi.json", route => {
    fallback = true;
    assert.ok(route.request().headers()["x-nextchat-authorization"], "schema fallback must carry application authorization");
    return route.fulfill({ contentType: "application/json", body: JSON.stringify(schema) });
  });
  await page.goto(base + "/#/plugins");
  await page.getByRole("button", { name: "Create plugin", exact: true }).click();
  await page.getByLabel("Plugin Schema URL", { exact: true }).fill("https://schema-fixture.invalid/openapi.json");
  await page.getByRole("button", { name: "Load plugin Schema", exact: true }).click();
  const editor = page.getByLabel("Plugin Schema", { exact: true });
  await page.waitForFunction(() => document.querySelector('textarea[aria-label="Plugin Schema"]')?.value.includes("Security Fixture Plugin"));
  assert.ok(fallback);
  assert.equal(JSON.parse(await editor.inputValue()).info.description, payload);
  await page.waitForTimeout(100);
  assert.equal(await page.evaluate(() => window.__schemaXss), undefined);
  assert.equal(await page.locator(".modal-mask img, .modal-mask script").count(), 0);
  schema.info.version = "1.0.1";
  await editor.fill(JSON.stringify(schema, null, 2));
  await page.getByRole("button", { name: "Save plugin", exact: true }).click();
  await page.locator(".modal-mask").waitFor({ state: "detached" });
  await page.waitForFunction(async () => {
    const db = await new Promise((resolve, reject) => {
      const request = indexedDB.open("keyval-store");
      request.onsuccess = () => resolve(request.result); request.onerror = () => reject(request.error);
    });
    const raw = await new Promise((resolve, reject) => {
      const request = db.transaction("keyval", "readonly").objectStore("keyval").get("chat-next-web-plugin");
      request.onsuccess = () => resolve(request.result); request.onerror = () => reject(request.error);
    });
    db.close();
    return raw && Object.values(JSON.parse(raw).state.plugins).some(plugin =>
      plugin.title === "Security Fixture Plugin" && plugin.content.includes('"version": "1.0.1"'));
  });
  await page.reload();
  await page.getByRole("button", { name: "Edit plugin Security Fixture Plugin", exact: true }).click();
  await editor.waitFor();
  await page.waitForFunction(() => document.querySelector('textarea[aria-label="Plugin Schema"]')?.value.includes("Security Fixture Plugin"));
  const saved = JSON.parse(await editor.inputValue());
  assert.equal(saved.info.version, "1.0.1");
  assert.equal(saved.info.description, payload);
  assert.equal(await page.evaluate(() => window.__schemaXss), undefined);
  const box = await editor.boundingBox();
  assert.ok(box.width > 150 && box.x >= 0 && box.x + box.width <= 391, "schema editor fits mobile viewport");
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 2), false);
  await page.getByRole("button", { name: "Save plugin", exact: true }).click();
  return { remoteSchemaXssPrevented: true, editingSavingAndReload: true, authenticatedFallback: true,
    mobileSchemaEditor: true, upstreamCustomAndCommitDisplayed: true };
};
