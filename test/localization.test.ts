import { describe, expect, test } from "@jest/globals";
import Locale, { ALL_LANGS, AllLangs, getLang, getISOLang, type LocaleType } from "../app/locales";
import { formatApiError } from "../app/utils/api-error";

function leaves(value: unknown, prefix = "", result: Record<string, unknown> = {}) {
  for (const [key, item] of Object.entries(value as object)) {
    const path = prefix ? prefix + "." + key : key;
    if (typeof item === "object" && item !== null) leaves(item, path, result);
    else result[path] = item;
  }
  return result;
}
describe("complete localized UI dictionaries", () => {
  const reference = leaves(ALL_LANGS.cn);
  test("keeps all 20 existing language identifiers", () => {
    expect(AllLangs).toHaveLength(20);
    expect(AllLangs).toEqual(expect.arrayContaining(["cn", "en", "tw", "jp", "ar", "bn", "sk"]));
  });
  test.each(AllLangs)("%s has complete, callable and nonempty translations", (lang) => {
    const actual = leaves(ALL_LANGS[lang] as LocaleType);
    expect(Object.keys(actual).sort()).toEqual(Object.keys(reference).sort());
    for (const [key, value] of Object.entries(actual)) {
      expect(typeof value).toBe(typeof reference[key]);
      if (typeof value === "string") expect(value.trim().length).toBeGreaterThan(0);
      if (typeof value === "function") {
        const result = value(key.endsWith(".Input") ? "Enter" : key.endsWith(".Overview") ? { chat: 1, message: 2, prompt: 3, mask: 4 } : 1, 2);
        expect(typeof result).toBe("string");
        expect(result).not.toMatch(/undefined|\[object Object\]/);
      }
    }
  });
  test("localized errors remain safe and idempotent", () => {
    for (const text of Object.values(Locale.ApiError)) expect(formatApiError(text)).toBe(text);
    expect(formatApiError("HTTP 401 PRIVATE_FIXTURE")).toBe(Locale.ApiError.InvalidKey);
    expect(formatApiError("PRIVATE_FIXTURE")).toBe(Locale.ApiError.Generic);
  });
  test("selecting a non-English language never mutates the English dictionary", () => {
    expect(ALL_LANGS.en.Settings.LocalizationInfo.Edition).toBe("NextChat Custom Edition");
  });
  test.each([["ja-US", "jp"], ["zh-HK", "tw"], ["zh-Hant", "tw"], ["zh-Hans", "cn"], ["en-CN", "en"], ["nb-NO", "no"], ["fr-FR", "fr"]])("detects %s by language and script", (browser, expected) => {
    localStorage.removeItem("lang");
    Object.defineProperty(navigator, "language", { configurable: true, value: browser });
    expect(getLang()).toBe(expected);
  });
  test("retains saved language identifiers and publishes a valid Japanese HTML language", () => {
    localStorage.setItem("lang", "jp");
    expect(getLang()).toBe("jp");
    expect(getISOLang()).toBe("ja");
    localStorage.removeItem("lang");
  });
});
