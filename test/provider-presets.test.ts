import Locale from "../app/locales";
import { describe, expect, test } from "@jest/globals";
import { DEFAULT_MODELS, ServiceProvider, VISION_MODEL_REGEXES } from "../app/constant";
import { PROVIDER_PRESETS, getProviderPreset } from "../app/utils/provider-presets";
import { formatApiError } from "../app/utils/api-error";

describe("official provider presets", () => {
  test("all five defaults are registered against the correct provider", () => {
    expect(Object.keys(PROVIDER_PRESETS)).toHaveLength(5);
    for (const [provider, preset] of Object.entries(PROVIDER_PRESETS)) {
      expect(DEFAULT_MODELS.some((m) => m.name === preset.model && m.provider.providerName === provider)).toBe(true);
      expect(preset.officialUrl).toMatch(/^https:\/\//);
      expect(preset.route).toMatch(/^\/api\//);
    }
    expect(getProviderPreset(ServiceProvider.DeepSeek)?.model).toBe("deepseek-flash");
    expect(getProviderPreset(ServiceProvider.Google)?.model).toBe("gemini-3.5-flash-lite");
    expect(getProviderPreset(ServiceProvider.Azure)).toBeUndefined();
  });
  test.each(["gpt-5.4-mini", "gemini-3.5-flash-lite", "claude-haiku-5-5"])("preserves image inputs for %s", (model) => {
    expect(VISION_MODEL_REGEXES.some((regex) => regex.test(model))).toBe(true);
  });
  test("providers have separate persistent key and URL fields", () => {
    expect(new Set(Object.values(PROVIDER_PRESETS).map((p) => p.keyField)).size).toBe(5);
    expect(new Set(Object.values(PROVIDER_PRESETS).map((p) => p.urlField)).size).toBe(5);
  });
});

describe("safe localized API errors", () => {
  test.each([
    ["HTTP 401: invalid_api_key", undefined, Locale.ApiError.InvalidKey],
    ["API key not valid", 400, Locale.ApiError.InvalidKey],
    ["HTTP 402", undefined, Locale.ApiError.Quota],
    ["HTTP 429: insufficient_quota", undefined, Locale.ApiError.Quota],
    ["HTTP 429: rate_limit_exceeded", undefined, Locale.ApiError.RateLimit],
    ["HTTP 404: model_not_found", undefined, Locale.ApiError.Model],
    ["HTTP 403", undefined, Locale.ApiError.Permission],
    ["HTTP 400: invalid_request", undefined, Locale.ApiError.Parameters],
    ["HTTP 503", undefined, Locale.ApiError.Unavailable],
    ["AbortError: aborted", undefined, Locale.ApiError.Timeout],
    ["NetworkError: Failed to fetch", undefined, Locale.ApiError.Network],
    ["empty response from server", undefined, Locale.ApiError.Empty],
  ])("%s", (message, status, expected) => {
    const result = formatApiError(new Error(message), status);
    expect(result).toContain(expected);
    expect(formatApiError(new Error(result))).toBe(result);
  });
  test("never reflects arbitrary upstream text or a credential-like marker", () => {
    const marker = "PRIVATE_FIXTURE_DO_NOT_ECHO";
    expect(formatApiError(new Error(marker))).not.toContain(marker);
    expect(formatApiError(new Error("HTTP 401 " + marker))).not.toContain(marker);
    expect(formatApiError(null)).toContain(Locale.ApiError.Generic);
  });
});
