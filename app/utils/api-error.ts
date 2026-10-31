// Classify errors locally. Never display upstream text: it may echo a credential.
export function formatApiError(error: unknown, status?: number): string {
  const value = error as { name?: string; message?: string; code?: string; type?: string };
  const text = typeof error === "string" ? error : [value?.name, value?.message, value?.code, value?.type].filter(Boolean).join(" ");
  const http = status ?? Number(text.match(/HTTP\s+(\d{3})/i)?.[1]);
  if (/超时|timeout|timed out|AbortError|aborted/i.test(text) || http === 408 || http === 504)
    return "请求超时，请稍后重试，或在高级设置中检查接口地址。";
  if (/额度|余额|quota|insufficient|credit|billing|balance/i.test(text) || http === 402)
    return "服务商额度不足，请检查账户余额、付费状态或用量限制。";
  if (/访问码|access code|wrong code/i.test(text))
    return "访问码无效，请检查本站访问码。";
  if (http === 401 || /API Key 无效|invalid.?api.?key|unauthenticated|authentication_error|api.key.not.valid/i.test(text))
    return "API Key 无效或已过期，请检查当前服务商的 Key。";
  if (http === 403 || /访问被拒绝|permission_denied|permission_error/i.test(text))
    return "访问被拒绝，请检查 API Key 的模型权限及服务商地区限制。";
  if (http === 404 || /模型不可用|model.*(not.found|not.exist|unavailable|not.support|retired)|not_found_error/i.test(text))
    return "模型不可用或接口不存在，请在高级设置中检查模型 ID 和接口地址。";
  if (http === 429 || /请求过于频繁|rate.?limit|resource_exhausted/i.test(text))
    return "请求过于频繁或已达用量上限，请稍后重试并检查服务商额度。";
  if (http === 400 || http === 422 || /请求参数不兼容|invalid_request|invalid.argument/i.test(text))
    return "请求参数不兼容，请检查高级设置中的模型 ID 和参数。";
  if (http >= 500 || /服务商暂时不可用|overloaded|connection failed/i.test(text))
    return "服务商暂时不可用，请稍后重试。";
  if (/empty response|有效响应|有效内容/i.test(text))
    return "服务商未返回有效内容，请检查模型状态后重试。";
  if (/fetch|network|load failed|连接/i.test(text))
    return "网络连接失败，请检查网络、接口地址及第三方接口的跨域设置。";
  return "请求失败，请检查当前服务商的 API Key、模型和接口设置。";
}
