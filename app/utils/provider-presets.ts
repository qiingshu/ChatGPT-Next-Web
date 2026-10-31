import {
  ServiceProvider, ApiPath, OPENAI_BASE_URL, GEMINI_BASE_URL,
  DEEPSEEK_BASE_URL, ANTHROPIC_BASE_URL, MISTRAL_BASE_URL,
} from "../constant";

// These presets are opt-in: never migrate or overwrite a user's saved endpoint/key.
export const PROVIDER_PRESETS = {
  [ServiceProvider.OpenAI]: {
    label: "OpenAI", model: "gpt-5.4-mini", keyField: "openaiApiKey",
    urlField: "openaiUrl", route: ApiPath.OpenAI, officialUrl: OPENAI_BASE_URL,
  },
  [ServiceProvider.Google]: {
    label: "Gemini", model: "gemini-3.5-flash-lite", keyField: "googleApiKey",
    urlField: "googleUrl", route: ApiPath.Google, officialUrl: GEMINI_BASE_URL,
  },
  [ServiceProvider.DeepSeek]: {
    label: "DeepSeek", model: "deepseek-flash", keyField: "deepseekApiKey",
    urlField: "deepseekUrl", route: ApiPath.DeepSeek, officialUrl: DEEPSEEK_BASE_URL,
  },
  [ServiceProvider.Anthropic]: {
    label: "Claude", model: "claude-haiku-5-5", keyField: "anthropicApiKey",
    urlField: "anthropicUrl", route: ApiPath.Anthropic, officialUrl: ANTHROPIC_BASE_URL,
  },
  [ServiceProvider.Mistral]: {
    label: "Mistral", model: "mistral-small-latest", keyField: "mistralApiKey",
    urlField: "mistralUrl", route: ApiPath.Mistral, officialUrl: MISTRAL_BASE_URL,
  },
} as const;

export type PresetProvider = keyof typeof PROVIDER_PRESETS;

export function getProviderPreset(provider: string) {
  return PROVIDER_PRESETS[provider as PresetProvider];
}
