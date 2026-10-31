import { describe, expect, test } from "@jest/globals";
import { DEFAULT_MODELS, ServiceProvider } from "../app/constant";
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
  test("providers have separate persistent key and URL fields", () => {
    expect(new Set(Object.values(PROVIDER_PRESETS).map((p) => p.keyField)).size).toBe(5);
    expect(new Set(Object.values(PROVIDER_PRESETS).map((p) => p.urlField)).size).toBe(5);
  });
});

describe("safe Chinese API errors", () => {
  test.each([
    ["HTTP 401: invalid_api_key", undefined, "API Key 无效"],
    ["API key not valid", 400, "API Key 无效"],
    ["HTTP 402", undefined, "额度不足"],
    ["HTTP 429: insufficient_quota", undefined, "额度不足"],
    ["HTTP 429: rate_limit_exceeded", undefined, "请求过于频繁"],
    ["HTTP 404: model_not_found", undefined, "模型不可用"],
    ["HTTP 403", undefined, "访问被拒绝"],
    ["HTTP 400: invalid_request", undefined, "请求参数不兼容"],
    ["HTTP 503", undefined, "服务商暂时不可用"],
    ["AbortError: aborted", undefined, "请求超时"],
    ["NetworkError: Failed to fetch", undefined, "网络连接失败"],
    ["empty response from server", undefined, "未返回有效内容"],
  ])("%s", (message, status, expected) => {
    const result = formatApiError(new Error(message), status);
    expect(result).toContain(expected);
    expect(formatApiError(new Error(result))).toBe(result);
  });
  test("never reflects arbitrary upstream text or a credential-like marker", () => {
    const marker = "PRIVATE_FIXTURE_DO_NOT_ECHO";
    expect(formatApiError(new Error(marker))).not.toContain(marker);
    expect(formatApiError(new Error("HTTP 401 " + marker))).not.toContain(marker);
    expect(formatApiError(null)).toContain("请求失败");
  });
});
