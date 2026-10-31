import { ACCESS_CODE_PREFIX } from "../constant";
import { useAccessStore } from "../store/access";
import { getProviderPreset } from "./provider-presets";

// This header authenticates only the application proxy and is never forwarded.
// A plugin's Authorization/x-api-key remains separate and unchanged.
export function getProxyAuthorization(): string {
  const access = useAccessStore.getState();
  if (access.accessCode.trim()) return "Bearer " + ACCESS_CODE_PREFIX + access.accessCode.trim();
  const preset = getProviderPreset(access.provider);
  const key = preset ? access[preset.keyField] : access.openaiApiKey;
  return key?.trim() ? "Bearer " + key.trim() : "";
}
