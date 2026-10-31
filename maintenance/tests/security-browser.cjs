const assert = require("node:assert/strict");
module.exports = async function verifySecurityBrowser(page, context, base) {
  await page.getByTestId("build-version").waitFor();
  const version = await page.getByTestId("build-version").innerText();
  assert.ok(version.includes("v2.16.0") && version.includes("qiingshu-maintenance."));
  assert.ok(version.includes("非完整官方 v2.16.1"));
  assert.match(version, /[a-f0-9]{40}/);
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
  await page.getByRole("button", { name: "新建插件", exact: true }).click();
  await page.getByLabel("插件 Schema URL", { exact: true }).fill("https://schema-fixture.invalid/openapi.json");
  await page.getByRole("button", { name: "加载插件 Schema", exact: true }).click();
  const editor = page.getByLabel("插件 Schema", { exact: true });
  await page.waitForFunction(() => document.querySelector('textarea[aria-label="插件 Schema"]')?.value.includes("Security Fixture Plugin"));
  assert.ok(fallback);
  assert.ok((await editor.inputValue()).includes(payload.replaceAll('"', '\\"')));
  assert.equal(await page.evaluate(() => window.__schemaXss), undefined);
  assert.equal(await page.locator(".modal-mask img, .modal-mask script").count(), 0);
  schema.info.version = "1.0.1";
  await editor.fill(JSON.stringify(schema, null, 2));
  await page.getByRole("button", { name: "保存插件", exact: true }).click();
  await page.locator(".modal-mask").waitFor({ state: "detached" });
  await page.reload();
  await page.getByRole("button", { name: "编辑插件 Security Fixture Plugin", exact: true }).click();
  await editor.waitFor();
  const saved = JSON.parse(await editor.inputValue());
  assert.equal(saved.info.version, "1.0.1");
  assert.equal(saved.info.description, payload);
  assert.equal(await page.evaluate(() => window.__schemaXss), undefined);
  const box = await editor.boundingBox();
  assert.ok(box.width > 150 && box.x >= 0 && box.x + box.width <= 391, "schema editor fits mobile viewport");
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 2), false);
  await page.getByRole("button", { name: "保存插件", exact: true }).click();
  return { remoteSchemaXssPrevented: true, editingSavingAndReload: true, authenticatedFallback: true,
    mobileSchemaEditor: true, upstreamCustomAndCommitDisplayed: true };
};
