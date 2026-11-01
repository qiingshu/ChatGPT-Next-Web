import Locale from "../locales";

// Classify errors locally. Never display upstream text: it may echo a credential.
export function formatApiError(error: unknown, status?: number): string {
  const value = error as { name?: string; message?: string; code?: string; type?: string };
  const text = typeof error === "string" ? error : [value?.name, value?.message, value?.code, value?.type].filter(Boolean).join(" ");
  // Adapter errors can pass through this formatter more than once.
  // Only our known localized messages are accepted verbatim; upstream text is never displayed.
  if (Object.values(Locale.ApiError).includes(text)) return text;
  const http = status ?? Number(text.match(/HTTP\s+(\d{3})/i)?.[1]);
  if (/超时|timeout|timed out|AbortError|aborted/i.test(text) || http === 408 || http === 504)
    return Locale.ApiError.Timeout;
  if (/额度不足|余额不足|quota|insufficient|credit|billing|balance/i.test(text) || http === 402)
    return Locale.ApiError.Quota;
  if (/访问码|access code|wrong code/i.test(text))
    return Locale.ApiError.AccessCode;
  if (http === 401 || /API Key 无效|invalid.?api.?key|unauthenticated|authentication_error|api.key.not.valid/i.test(text))
    return Locale.ApiError.InvalidKey;
  if (http === 403 || /访问被拒绝|permission_denied|permission_error/i.test(text))
    return Locale.ApiError.Permission;
  if (http === 404 || /模型不可用|model.*(not.found|not.exist|unavailable|not.support|retired)|not_found_error/i.test(text))
    return Locale.ApiError.Model;
  if (http === 429 || /请求过于频繁|rate.?limit|resource_exhausted/i.test(text))
    return Locale.ApiError.RateLimit;
  if (http === 400 || http === 422 || /请求参数不兼容|invalid_request|invalid.argument/i.test(text))
    return Locale.ApiError.Parameters;
  if (http >= 500 || /服务商暂时不可用|overloaded|connection failed/i.test(text))
    return Locale.ApiError.Unavailable;
  if (/empty response|有效响应|有效内容/i.test(text))
    return Locale.ApiError.Empty;
  if (/fetch|network|load failed|连接/i.test(text))
    return Locale.ApiError.Network;
  return Locale.ApiError.Generic;
}
