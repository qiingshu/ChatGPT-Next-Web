const assert = require("node:assert/strict");
const fs = require("node:fs");
const fixtures = require("./localization-fixtures.json");

module.exports = async function localizationBrowser(page, context, base, engine, setMode) {
  assert.equal(process.env.GITHUB_ACTIONS, "true");
  assert.equal(process.env.RUNNER_ENVIRONMENT, "github-hosted");
  const out = process.env.NEXTCHAT_EVIDENCE_DIR || "maintenance/acceptance-results";
  const evidence = [];
  const failures = [];
  let current = "en";
  async function switchLanguage(lang) {
    await page.goto(base + "/#/settings");
    const previous = fixtures[current];
    const picker = page.getByLabel(previous["Settings.Lang.Name"], { exact: true });
    await picker.waitFor();
    if (current !== lang) {
      const reload = page.waitForNavigation({ waitUntil: "domcontentloaded" });
      await picker.selectOption(lang);
      await reload;
    }
    current = lang;
    const f = fixtures[lang];
    await page.getByLabel(f["Settings.ProviderSetup.Provider"], { exact: true }).waitFor({ timeout: 30000 });
    assert.equal(await page.getByLabel(f["Settings.Lang.Name"], { exact: true }).inputValue(), lang);
    return f;
  }
  async function noOverflow(label) {
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 2), false, label);
  }
  for (const lang of ["cn", "en", ...Object.keys(fixtures).filter(lang => !["cn", "en"].includes(lang))]) {
    try {
      const f = await switchLanguage(lang);
      const htmlLang = await page.locator("html").getAttribute("lang");
      assert.equal(htmlLang, ({ cn: "zh-Hans", tw: "zh-Hant", jp: "ja" })[lang] || lang);
      assert.equal(await page.getByText(f["Settings.LocalizationInfo.Edition"], { exact: true }).count(), 1);
      const theme = page.getByLabel(f["Settings.Theme"], { exact: true });
      assert.deepEqual(await theme.locator("option").evaluateAll(options => options.map(option => option.value).sort()), ["auto", "dark", "light"]);
      for (const value of ["dark", "light", "auto"]) {
        await theme.selectOption(value);
        assert.equal(await theme.locator("option:checked").innerText(), f["Chat.InputActions.Theme." + value]);
        assert.equal(await theme.inputValue(), value);
      }
      const details = page.getByTestId("build-version").locator("details");
      assert.equal(await details.getAttribute("open"), null);
      assert.equal((await page.getByTestId("build-version").innerText()).includes("qiingshu-maintenance."), false);
      await details.locator("summary").click();
      assert.equal(await details.locator("summary").innerText(), f["Settings.LocalizationInfo.Details"]);
      assert.equal(await details.locator("code").innerText(), process.env.GITHUB_SHA);
      assert.ok((await details.innerText()).includes(f["Settings.LocalizationInfo.Note"]));
      const code = await details.locator("code").boundingBox();
      assert.ok(code.x + code.width <= 391 && code.height < 40);
      await details.locator("summary").click();
      const advanced = page.locator("details").filter({ has: page.locator("summary").filter({ hasText: f["Settings.ProviderSetup.Advanced"] }) });
      assert.equal(await advanced.getAttribute("open"), null);
      // A real browser request with a synthetic API response; no live model call.
      setMode("invalid");
      await page.getByRole("button", { name: f["Settings.ProviderSetup.TestConnection"], exact: true }).click();
      await page.getByRole("status").filter({ hasText: f["ApiError.InvalidKey"] }).waitFor({ timeout: 10000 });
      setMode("success");
      await noOverflow(lang + " settings overflow");
      if (["cn", "en", "de", "fr", "ar", "jp", "bn"].includes(lang)) {
        await theme.scrollIntoViewIfNeeded();
        await page.screenshot({ path: out + "/" + engine + "-" + lang + "-settings.png", mask: [page.locator("input")], animations: "disabled" });
      }
      await page.goto(base + "/#/masks");
      await page.locator(".window-header-main-title").filter({ hasText: f["Mask.Page.Title"] }).waitFor();
      await page.getByRole("button", { name: f["Mask.Page.Create"], exact: true }).first().click();
      const modal = page.locator(".modal-mask");
      await modal.waitFor();
      const add = modal.getByRole("button", { name: f["Context.Add"], exact: true });
      await add.click();
      const roles = modal.locator('select').filter({ has: page.locator('option[value="system"]') });
      assert.equal(await roles.locator('option[value="system"]').innerText(), f["UI.System"]);
      assert.equal(await roles.locator('option[value="user"]').innerText(), f["UI.User"]);
      assert.equal(await roles.locator('option[value="assistant"]').innerText(), f["UI.Assistant"]);
      await roles.selectOption("assistant");
      assert.equal(await roles.inputValue(), "assistant");
      await modal.locator('[class*="modal-header-actions"] > div').last().click();
      await modal.waitFor({ state: "detached" });

      await page.goto(base + "/#/plugins");
      await page.getByRole("button", { name: f["Plugin.Accessibility.Create"], exact: true }).click();
      await page.getByLabel(f["Plugin.Accessibility.SchemaUrl"], { exact: true }).waitFor();
      await page.getByLabel(f["Plugin.Accessibility.Schema"], { exact: true }).waitFor();
      assert.equal(await page.locator(".modal-mask select").first().locator('option[value=""]').innerText(), f["Plugin.Auth.None"]);
      await noOverflow(lang + " plugin overflow");
      await page.getByRole("button", { name: f["Plugin.Accessibility.Save"], exact: true }).click();
      await page.locator(".modal-mask").waitFor({ state: "detached" });
      await page.goto(base + "/#/chat");
      await page.locator("textarea").first().waitFor();
      assert.ok(await page.getByText(f["Chat.InputActions.Clear"], { exact: true }).count() > 0);
      await noOverflow(lang + " chat overflow");
      evidence.push({ lang, settings: true, themes: true, nativeOptionValuesPreserved: true,
        localizedApiError: true, versionFold: true, masks: true, roles: true, plugins: true, chat: true, horizontalOverflow: false });
      fs.writeFileSync(out + "/" + engine + "-localization.json", JSON.stringify({ engine, physicalIPhoneVerified: false, syntheticModelResponsesOnly: true, languages: evidence }, null, 2));
    } catch (error) {
      await page.screenshot({ path: out + "/" + engine + "-" + lang + "-localization-failure.png", mask: [page.locator("input")], animations: "disabled" }).catch(() => {});
      failures.push(engine + "/" + lang + ": " + error.message);
      fs.writeFileSync(out + "/" + engine + "-localization-failures.json", JSON.stringify(failures, null, 2));
      if (failures.length >= 3) break;
      // Recover only to collect independent failures; a failed case never counts as passed.
      await page.evaluate(() => localStorage.setItem("lang", "en"));
      await page.goto(base + "/#/settings");
      await page.reload();
      current = "en";
    }
  }
  if (failures.length) throw new Error(failures.join("\\n"));
  await switchLanguage("en");
  console.log("PASS " + engine + ": all 20 languages, settings, themes, errors, versions, Masks, roles, plugins and chat");
};
