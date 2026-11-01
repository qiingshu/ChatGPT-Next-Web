import type { LocaleType as SharedLocaleType } from "./cn";
import { getClientConfig } from "../config/client";
import { SAAS_CHAT_UTM_URL } from "@/app/constant";
const isApp = !!getClientConfig()?.isApp;

const tw: SharedLocaleType = {
  WIP: "此功能仍在開發中……",
  Error: {
    Unauthorized: isApp
      ? `😆 對話遇到了一些問題，不用慌:
    \\ 1️⃣ 想要無須設定開箱即用，[點選這裡立刻開啟對話 🚀](${SAAS_CHAT_UTM_URL})
    \\ 2️⃣ 如果你想消耗自己的 OpenAI 資源，點選[這裡](/#/settings)修改設定 ⚙️`
      : `😆 對話遇到了一些問題，不用慌:
    \ 1️⃣ 想要無須設定開箱即用，[點選這裡立刻開啟對話 🚀](${SAAS_CHAT_UTM_URL})
    \ 2️⃣ 如果你正在使用私有部署版本，點選[這裡](/#/auth)輸入存取金鑰 🔑
    \ 3️⃣ 如果你想消耗自己的 OpenAI 資源，點選[這裡](/#/settings)修改設定 ⚙️
 `,
  },

  Auth: {
    Title: "需要密碼",
    Tips: "管理員開啟了密碼驗證，請在下方填入存取密碼",
    SubTips: "或者輸入你的 OpenAI 或 Google API 金鑰",
    Input: "在此處填寫存取密碼",
    Confirm: "確認",
    Later: "稍候再說",
    Return: "返回",
    SaasTips: "設定太麻煩，想要立即使用",
    TopTips:
      "🥳 NextChat AI 首發優惠，立刻解鎖 OpenAI o1, GPT-4o, Claude-3.5 等最新的大型語言模型",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} 則對話`,
  },
  Chat: {
    SubTitle: (count: number) => `您已經與 ChatGPT 進行了 ${count} 則對話`,
    EditMessage: {
      Title: "編輯訊息記錄",
      Topic: {
        Title: "聊天主題",
        SubTitle: "更改目前聊天主題",
      },
    },
    Actions: {
      ChatList: "檢視訊息列表",
      CompressedHistory: "檢視壓縮後的歷史 Prompt",
      Export: "匯出聊天紀錄",
      Copy: "複製",
      Stop: "停止",
      Retry: "重試",
      Pin: "固定",
      PinToastContent: "已將 1 條對話固定至預設提示詞",
      PinToastAction: "檢視",
      Delete: "刪除",
      Edit: "編輯",
      RefreshTitle: "重新整理標題",
      RefreshToast: "已傳送重新整理標題請求",
    
      "FullScreen": "全螢幕",
      "Speech": "朗讀",
      "StopSpeech": "停止",
    },
    Commands: {
      new: "新建聊天",
      newm: "從角色範本新建聊天",
      next: "下一個聊天",
      prev: "上一個聊天",
      clear: "清除上下文",
      del: "刪除聊天",
    
      "fork": "複製聊天",
    },
    InputActions: {
      Stop: "停止回應",
      ToBottom: "移至最新",
      Theme: {
        auto: "自動主題",
        light: "亮色模式",
        dark: "深色模式",
      },
      Prompt: "快捷指令",
      Masks: "所有角色範本",
      Clear: "清除聊天",
      Settings: "對話設定",
      UploadImage: "上傳圖片",
    },
    Rename: "重新命名對話",
    Typing: "正在輸入…",
    Input: (submitKey: string) => {
      var inputHints = `輸入訊息後，按下 ${submitKey} 鍵即可傳送`;
      if (submitKey === "Enter") {
        inputHints += "，Shift + Enter 鍵換行";
      }
      return inputHints;
    },
    Send: "傳送",
    Config: {
      Reset: "重設",
      SaveAs: "另存新檔",
    },
    IsContext: "預設提示詞",
    ShortcutKey: {
      Title: "鍵盤快捷方式",
      newChat: "開啟新聊天",
      focusInput: "聚焦輸入框",
      copyLastMessage: "複製最後一個回覆",
      copyLastCode: "複製最後一個程式碼區塊",
      showShortcutKey: "顯示快捷方式",
      clearContext: "清除上下文",
    },
  
    "StartSpeak": "開始說話",
    "StopSpeak": "停止",
  },
  Export: {
    Title: "將聊天記錄匯出為 Markdown",
    Copy: "複製全部",
    Download: "下載檔案",
    Share: "分享到 ShareGPT",
    MessageFromYou: "來自您的訊息",
    MessageFromChatGPT: "來自 ChatGPT 的訊息",
    Format: {
      Title: "匯出格式",
      SubTitle: "可以匯出 Markdown 文字檔或者 PNG 圖片",
    },
    IncludeContext: {
      Title: "包含角色範本上下文",
      SubTitle: "是否在訊息中顯示角色範本上下文",
    },
    Steps: {
      Select: "選取",
      Preview: "預覽",
    },
    Image: {
      Toast: "正在產生截圖",
      Modal: "長按或按右鍵儲存圖片",
    },
  
    "Artifacts": {
      "Title": "分享 Artifacts",
      "Error": "分享 Artifacts — 失敗",
    },
  },
  Select: {
    Search: "查詢訊息",
    All: "選取全部",
    Latest: "最近幾條",
    Clear: "清除選取",
  },
  Memory: {
    Title: "上下文記憶 Prompt",
    EmptyContent: "尚未記憶",
    Copy: "複製全部",
    Send: "傳送記憶",
    Reset: "重設對話",
    ResetConfirm: "重設後將清除目前對話記錄以及歷史記憶，確認重設？",
  },
  Home: {
    NewChat: "開新對話",
    DeleteChat: "確定要刪除選取的對話嗎？",
    DeleteToast: "已刪除對話",
    Revert: "撤銷",
  },
  Settings: {
    Title: "設定",
    SubTitle: "設定選項",

    Danger: {
      Reset: {
        Title: "重設所有設定",
        SubTitle: "重設所有設定項回預設值",
        Action: "立即重設",
        Confirm: "確認重設所有設定？",
      },
      Clear: {
        Title: "清除所有資料",
        SubTitle: "清除所有聊天、設定資料",
        Action: "立即清除",
        Confirm: "確認清除所有聊天、設定資料？",
      },
    },
    Lang: {
      Name: "語言", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "所有語言",
    },
    Avatar: "大頭貼",
    FontSize: {
      Title: "字型大小",
      SubTitle: "聊天內容的字型大小",
    },
    FontFamily: {
      Title: "聊天字型",
      SubTitle: "聊天內容的字型，若留空則套用全域預設字型",
      Placeholder: "字型名稱",
    },
    InjectSystemPrompts: {
      Title: "匯入系統提示",
      SubTitle: "強制在每個請求的訊息列表開頭新增一個模擬 ChatGPT 的系統提示",
    },
    InputTemplate: {
      Title: "使用者輸入預處理",
      SubTitle: "使用者最新的一則訊息會填充到此範本",
    },

    Update: {
      Version: (x: string) => `目前版本：${x}`,
      IsLatest: "已是最新版本",
      CheckUpdate: "檢查更新",
      IsChecking: "正在檢查更新...",
      FoundUpdate: (x: string) => `發現新版本：${x}`,
      GoToUpdate: "前往更新",
    
      "Success": "更新成功",
      "Failed": "更新失敗",
    },
    SendKey: "傳送鍵",
    Theme: "主題",
    TightBorder: "緊湊邊框",
    SendPreviewBubble: {
      Title: "預覽氣泡",
      SubTitle: "在預覽氣泡中預覽 Markdown 內容",
    },
    AutoGenerateTitle: {
      Title: "自動產生標題",
      SubTitle: "根據對話內容產生合適的標題",
    },
    Sync: {
      CloudState: "雲端資料",
      NotSyncYet: "還沒有進行過同步",
      Success: "同步成功",
      Fail: "同步失敗",

      Config: {
        Modal: {
          Title: "設定雲端同步",
          Check: "檢查可用性",
        },
        SyncType: {
          Title: "同步類型",
          SubTitle: "選擇偏好的同步伺服器",
        },
        Proxy: {
          Title: "啟用代理伺服器",
          SubTitle: "在瀏覽器中同步時，啟用代理伺服器以避免跨域限制",
        },
        ProxyUrl: {
          Title: "代理伺服器位置",
          SubTitle: "僅適用於本專案內建的跨域代理",
        },

        WebDav: {
          Endpoint: "WebDAV 位置",
          UserName: "使用者名稱",
          Password: "密碼",
        },

        UpStash: {
          Endpoint: "UpStash Redis REST Url",
          UserName: "備份名稱",
          Password: "UpStash Redis REST Token",
        },
      },

      LocalState: "本機資料",
      Overview: (overview: any) => {
        return `${overview.chat} 次對話，${overview.message} 則訊息，${overview.prompt} 條提示詞，${overview.mask} 個角色範本`;
      },
      ImportFailed: "匯入失敗",
    },
    Mask: {
      Splash: {
        Title: "角色範本啟動頁面",
        SubTitle: "新增聊天時，呈現角色範本啟動頁面",
      },
      Builtin: {
        Title: "隱藏內建角色範本",
        SubTitle: "在所有角色範本列表中隱藏內建角色範本",
      },
    },
    Prompt: {
      Disable: {
        Title: "停用提示詞自動補齊",
        SubTitle: "在輸入框開頭輸入 / 即可觸發自動補齊",
      },
      List: "自訂提示詞列表",
      ListCount: (builtin: number, custom: number) =>
        `內建 ${builtin} 條，使用者自訂 ${custom} 條`,
      Edit: "編輯",
      Modal: {
        Title: "提示詞列表",
        Add: "新增一則",
        Search: "搜尋提示詞",
      },
      EditModal: {
        Title: "編輯提示詞",
      },
    },
    HistoryCount: {
      Title: "附帶歷史訊息數",
      SubTitle: "每次請求附帶的歷史訊息數",
    },
    CompressThreshold: {
      Title: "歷史訊息長度壓縮閾值",
      SubTitle: "當未壓縮的歷史訊息超過該值時，將進行壓縮",
    },

    Usage: {
      Title: "帳戶餘額",
      SubTitle(used: any, total: any) {
        return `本月已使用 $${used}，訂閱總額 $${total}`;
      },
      IsChecking: "正在檢查…",
      Check: "重新檢查",
      NoAccess: "輸入 API Key 檢視餘額",
    },

    Access: {
      SaasStart: {
        Title: "使用 NextChat AI",
        Label: "(性價比最高的方案)",
        SubTitle:
          "由 NextChat 官方維護，無須設定開箱即用，支援 OpenAI o1、GPT-4o、Claude-3.5 等最新的大型語言模型",
        ChatNow: "立刻開始對話",
      },

      AccessCode: {
        Title: "存取密碼",
        SubTitle: "管理員已開啟加密存取",
        Placeholder: "請輸入存取密碼",
      },
      CustomEndpoint: {
        Title: "自訂 API 端點 (Endpoint)",
        SubTitle: "是否使用自訂 Azure 或 OpenAI 服務",
      },
      Provider: {
        Title: "模型供應商",
        SubTitle: "切換不同的服務供應商",
      },
      OpenAI: {
        ApiKey: {
          Title: "OpenAI API Key",
          SubTitle: "使用自訂 OpenAI Key 繞過密碼存取限制",
          Placeholder: "OpenAI API Key",
        },

        Endpoint: {
          Title: "API 端點 (Endpoint) 位址",
          SubTitle: "除預設位址外，必須包含 http(s)://",
        },
      },
      Azure: {
        ApiKey: {
          Title: "Azure API Key",
          SubTitle: "使用自訂 Azure Key 繞過密碼存取限制",
          Placeholder: "Azure API Key",
        },

        Endpoint: {
          Title: "API 端點 (Endpoint) 位址",
          SubTitle: "範例：",
        },

        ApiVerion: {
          Title: "API 版本 (azure api version)",
          SubTitle: "指定一個特定的 API 版本",
        },
      },
      Anthropic: {
        ApiKey: {
          Title: "Anthropic API Key",
          SubTitle: "從 Anthropic AI 取得您的 API Key",
          Placeholder: "Anthropic API Key",
        },

        Endpoint: {
          Title: "端點位址",
          SubTitle: "範例：",
        },

        ApiVerion: {
          Title: "API 版本 (claude api version)",
          SubTitle: "指定一個特定的 API 版本",
        },
      },
      Google: {
        ApiKey: {
          Title: "Google API Key",
          SubTitle: "從 Google AI 取得您的 API Key",
          Placeholder: "輸入您的 Google AI Studio API Key",
        },

        Endpoint: {
          Title: "端點位址",
          SubTitle: "範例：",
        },

        ApiVersion: {
          Title: "API 版本（僅適用於 gemini-pro）",
          SubTitle: "選擇一個特定的 API 版本",
        },
      
        "GoogleSafetySettings": {
          "Title": "Google 安全過濾設定",
          "SubTitle": "選擇安全過濾級別",
        },
      },
      CustomModel: {
        Title: "自訂模型名稱",
        SubTitle: "增加自訂模型可選擇項目，使用英文逗號隔開",
      },
    
      "Baidu": {
        "ApiKey": {
          "Title": "Baidu API Key",
          "SubTitle": "使用自訂 API Key",
          "Placeholder": "Baidu API Key",
        },
        "SecretKey": {
          "Title": "Baidu Secret Key",
          "SubTitle": "使用自訂憑證 — Secret Key",
          "Placeholder": "Baidu Secret Key",
        },
        "Endpoint": {
          "Title": "介面位址",
          "SubTitle": "請在 .env 中設定此項",
        },
      },
      "Tencent": {
        "ApiKey": {
          "Title": "Tencent API Key",
          "SubTitle": "使用自訂 API Key",
          "Placeholder": "Tencent API Key",
        },
        "SecretKey": {
          "Title": "Tencent Secret Key",
          "SubTitle": "使用自訂憑證 — Secret Key",
          "Placeholder": "Tencent Secret Key",
        },
        "Endpoint": {
          "Title": "介面位址",
          "SubTitle": "請在 .env 中設定此項",
        },
      },
      "ByteDance": {
        "ApiKey": {
          "Title": "ByteDance API Key",
          "SubTitle": "使用自訂 API Key",
          "Placeholder": "ByteDance API Key",
        },
        "Endpoint": {
          "Title": "介面位址",
          "SubTitle": "範例: ",
        },
      },
      "Alibaba": {
        "ApiKey": {
          "Title": "Alibaba API Key",
          "SubTitle": "使用自訂 API Key",
          "Placeholder": "Alibaba API Key",
        },
        "Endpoint": {
          "Title": "介面位址",
          "SubTitle": "範例: ",
        },
      },
      "Moonshot": {
        "ApiKey": {
          "Title": "Moonshot API Key",
          "SubTitle": "使用自訂 API Key",
          "Placeholder": "Moonshot API Key",
        },
        "Endpoint": {
          "Title": "介面位址",
          "SubTitle": "範例: ",
        },
      },
      "DeepSeek": {
        "ApiKey": {
          "Title": "DeepSeek API Key",
          "SubTitle": "使用自訂 API Key",
          "Placeholder": "DeepSeek API Key",
        },
        "Endpoint": {
          "Title": "介面位址",
          "SubTitle": "範例: ",
        },
      },
      "XAI": {
        "ApiKey": {
          "Title": "XAI API Key",
          "SubTitle": "使用自訂 API Key",
          "Placeholder": "XAI API Key",
        },
        "Endpoint": {
          "Title": "介面位址",
          "SubTitle": "範例: ",
        },
      },
      "ChatGLM": {
        "ApiKey": {
          "Title": "ChatGLM API Key",
          "SubTitle": "使用自訂 API Key",
          "Placeholder": "ChatGLM API Key",
        },
        "Endpoint": {
          "Title": "介面位址",
          "SubTitle": "範例: ",
        },
      },
      "SiliconFlow": {
        "ApiKey": {
          "Title": "SiliconFlow API Key",
          "SubTitle": "使用自訂 API Key",
          "Placeholder": "SiliconFlow API Key",
        },
        "Endpoint": {
          "Title": "介面位址",
          "SubTitle": "範例: ",
        },
      },
      "Stability": {
        "ApiKey": {
          "Title": "Stability API Key",
          "SubTitle": "使用自訂 API Key",
          "Placeholder": "Stability API Key",
        },
        "Endpoint": {
          "Title": "介面位址",
          "SubTitle": "範例: ",
        },
      },
      "Iflytek": {
        "ApiKey": {
          "Title": "Iflytek API Key",
          "SubTitle": "使用自訂 API Key",
          "Placeholder": "Iflytek API Key",
        },
        "ApiSecret": {
          "Title": "Iflytek API Secret",
          "SubTitle": "使用自訂憑證 — API Secret",
          "Placeholder": "Iflytek API Secret",
        },
        "Endpoint": {
          "Title": "介面位址",
          "SubTitle": "範例: ",
        },
      },
    },

    Model: "模型 (model)",
    CompressModel: {
      Title: "壓縮模型",
      SubTitle: "用於壓縮歷史記錄的模型",
    },
    Temperature: {
      Title: "隨機性 (temperature)",
      SubTitle: "值越大，回應越隨機",
    },
    TopP: {
      Title: "核心採樣 (top_p)",
      SubTitle: "與隨機性類似，但不要和隨機性一起更改",
    },
    MaxTokens: {
      Title: "單次回應限制 (max_tokens)",
      SubTitle: "單次互動所用的最大 Token 數",
    },
    PresencePenalty: {
      Title: "話題新穎度 (presence_penalty)",
      SubTitle: "值越大，越有可能拓展到新話題",
    },
    FrequencyPenalty: {
      Title: "頻率懲罰度 (frequency_penalty)",
      SubTitle: "值越大，越有可能降低重複字詞",
    },
  
    "ShowPassword": "顯示密碼",
    "LocalizationInfo": {
      "Edition": "NextChat 自訂版",
      "Timeout": "連線測試逾時（30 秒），請檢查網路及介面位址。",
      "Success": "連線成功",
      "NoResponse": "服務商未回傳有效回應，請檢查模型及介面設定。",
      "Upstream": "上游基礎",
      "Details": "詳細版本資訊",
      "Security": "安全維護識別碼",
      "Commit": "建置提交",
      "Official": "官方參考版本",
      "Unavailable": "尚未取得",
      "Note": "包含選擇性移植，並非完整官方 v2.16.1。官方版本資訊僅供參考。",
    },
    "ProviderSetup": {
      "ModelIdPlaceholder": "模型 ID@服務商",
      "Provider": "服務商",
      "ProviderHelp": "選擇服務商並輸入其 API Key，即可使用預設模型",
      "ProviderKeyPlaceholder": "輸入此服務商的 API Key",
      "CurrentModel": "目前聊天模型",
      "DefaultModel": "預設模型",
      "ModelHelp": "介面及自訂模型可在進階設定中調整",
      "TestModel": "測試目前聊天模型",
      "TestHelp": "傳送簡短請求，可能產生 API 費用；不寫入聊天記錄",
      "TestConnection": "測試連線",
      "Testing": "測試中…",
      "Advanced": "進階設定",
      "OfficialURL": "官方位址",
      "DefaultRoute": "預設透過本站路由存取",
    },
    "TTS": {
      "Enable": {
        "Title": "啟用文字轉語音",
        "SubTitle": "啟用文字生成語音服務",
      },
      "Autoplay": {
        "Title": "啟用自動朗讀",
        "SubTitle": "自動生成語音並播放，需先啟用文字轉語音",
      },
      "Model": "模型 (model)",
      "Engine": "轉換引擎",
      "Voice": {
        "Title": "聲音",
        "SubTitle": "生成語音時使用的聲音",
      },
      "Speed": {
        "Title": "速度",
        "SubTitle": "生成語音的速度",
      },
    },
    "Realtime": {
      "Enable": {
        "Title": "即時聊天",
        "SubTitle": "啟用即時聊天功能",
      },
      "Provider": {
        "Title": "模型服務商",
        "SubTitle": "切換不同服務商",
      },
      "Model": {
        "Title": "模型 (model)",
        "SubTitle": "選擇一個模型",
      },
      "ApiKey": {
        "Title": "API Key",
        "SubTitle": "API Key",
        "Placeholder": "API Key",
      },
      "Azure": {
        "Endpoint": {
          "Title": "介面位址",
          "SubTitle": "介面位址",
        },
        "Deployment": {
          "Title": "部署名稱",
          "SubTitle": "部署名稱",
        },
      },
      "Temperature": {
        "Title": "隨機性 (temperature)",
        "SubTitle": "值越大，回應越隨機",
      },
    },
    "SafetyLabels": {
      "BLOCK_NONE": "不攔截",
      "BLOCK_ONLY_HIGH": "僅攔截高風險",
      "BLOCK_MEDIUM_AND_ABOVE": "攔截中等及以上風險",
      "BLOCK_LOW_AND_ABOVE": "攔截低風險及以上",
    },
  },
  Store: {
    DefaultTopic: "新的對話",
    BotHello: "請問需要我的協助嗎？",
    Error: "出錯了，請稍後再嘗試",
    Prompt: {
      History: (content: string) =>
        "這是 AI 與使用者的歷史聊天總結，作為前情提要：" + content,
      Topic:
        "Use the language used by the user (e.g. en for english conversation, zh-hant for chinese conversation, etc.) to generate a title (at most 6 words) summarizing our conversation without any lead-in, quotation marks, preamble like 'Title:', direct text copies, single-word replies, quotation marks, translations, or brackets. Remove enclosing quotation marks. The title should make third-party grasp the essence of the conversation in first sight.",
      Summarize:
        "Use the language used by the user (e.g. en-us for english conversation, zh-hant for chinese conversation, etc.) to summarise the conversation in at most 200 words. The summary will be used as prompt for you to continue the conversation in the future.",
    },
  },
  Copy: {
    Success: "已複製到剪貼簿中",
    Failed: "複製失敗，請賦予剪貼簿權限",
  },
  Download: {
    Success: "內容已下載到您的目錄。",
    Failed: "下載失敗。",
  },
  Context: {
    Toast: (x: any) => `已設定 ${x} 條前置上下文`,
    Edit: "前置上下文和歷史記憶",
    Add: "新增一則",
    Clear: "上下文已清除",
    Revert: "恢復上下文",
  },
  Plugin: { Name: "外掛程式" ,
    "Accessibility": {
      "Create": "新增: 外掛程式",
      "Edit": "編輯: 外掛程式",
      "Save": "儲存: 外掛程式",
      "SchemaUrl": "外掛程式 Schema URL",
      "LoadSchema": "從 URL 載入: 外掛程式 Schema",
      "Schema": "外掛程式 Schema",
    },
    "Page": {
      "Title": "外掛程式",
      "SubTitle": (count: number) => "外掛程式: " + count,
      "Search": "查詢訊息 — 外掛程式",
      "Create": "新增",
      "Find": "在 GitHub 上尋找外掛程式: ",
    },
    "Item": {
      "Info": (count: number) => "方法: " + count,
      "View": "檢視",
      "Edit": "編輯",
      "Delete": "刪除",
      "DeleteConfirm": "確認刪除？",
    },
    "Auth": {
      "None": "無須授權",
      "Basic": "Basic",
      "Bearer": "Bearer",
      "Custom": "自訂",
      "CustomHeader": "參數名稱",
      "Token": "Token",
      "Proxy": "使用代理",
      "ProxyDescription": "使用代理避免 CORS 限制",
      "Location": "位置",
      "LocationHeader": "Header",
      "LocationQuery": "Query",
      "LocationBody": "Body",
    },
    "EditModal": {
      "Title": (readonly: boolean) => "編輯: 外掛程式" + (readonly ? " (唯讀)" : ""),
      "Download": "下載",
      "Auth": "授權方式",
      "Content": "OpenAPI Schema",
      "Load": "從 URL 載入",
      "Method": "方法",
      "Error": "OpenAPI Schema 格式錯誤",
    },
  },
  FineTuned: { Sysmessage: "你是一個助手" },
  Mask: {
    Name: "角色範本",
    Page: {
      Title: "預設角色角色範本",
      SubTitle: (count: number) => `${count} 個預設角色定義`,
      Search: "搜尋角色角色範本",
      Create: "新增",
    },
    Item: {
      Info: (count: number) => `包含 ${count} 條預設對話`,
      Chat: "對話",
      View: "檢視",
      Edit: "編輯",
      Delete: "刪除",
      DeleteConfirm: "確認刪除？",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `編輯預設角色範本 ${readonly ? "（唯讀）" : ""}`,
      Download: "下載預設值",
      Clone: "以此預設值建立副本",
    },
    Config: {
      Avatar: "角色頭像",
      Name: "角色名稱",
      Sync: {
        Title: "使用全域設定",
        SubTitle: "目前對話是否使用全域模型設定",
        Confirm: "目前對話的自訂設定將會被自動覆蓋，確認啟用全域設定？",
      },
      HideContext: {
        Title: "隱藏預設對話",
        SubTitle: "隱藏後預設對話不會出現在聊天介面",
      },
      Share: {
        Title: "分享此角色範本",
        SubTitle: "產生此角色範本的直達連結",
        Action: "複製連結",
      },
    
      "Artifacts": {
        "Title": "啟用 Artifacts",
        "SubTitle": "透過 Artifacts 顯示 HTML 頁面",
      },
      "CodeFold": {
        "Title": "啟用程式碼摺疊",
        "SubTitle": "自動摺疊過長的程式碼區塊",
      },
    },
  },
  SearchChat: {
    Name: "搜尋聊天記錄",
    Page: {
      Title: "搜尋聊天記錄",
      Search: "輸入搜尋關鍵詞",
      NoResult: "沒有找到結果",
      NoData: "沒有資料",
      Loading: "載入中",

      SubTitle: (count: number) => `找到 ${count} 條結果`,
    },
    Item: {
      View: "檢視",
    },
  },
  NewChat: {
    Return: "返回",
    Skip: "跳過",
    NotShow: "不再顯示",
    ConfirmNoShow: "確認停用？停用後可以隨時在設定中重新啟用。",
    Title: "挑選一個角色範本",
    SubTitle: "現在開始，與角色範本背後的靈魂思維碰撞",
    More: "搜尋更多",
  },
  URLCommand: {
    Code: "偵測到連結中已經包含存取密碼，是否自動填入？",
    Settings: "偵測到連結中包含了預設設定，是否自動填入？",
  },
  UI: {
    Confirm: "確認",
    Cancel: "取消",
    Close: "關閉",
    Create: "新增",
    Edit: "編輯",
    Export: "匯出",
    Import: "匯入",
    Sync: "同步",
    Config: "設定",
  
    "Save": "儲存",
    "Loading": "載入中…",
    "Seed": "隨機種子",
    "User": "使用者",
    "Assistant": "助理",
    "System": "系統",
    "Text": "文字",
    "Image": "圖片",
    "Standard": "標準",
    "Vivid": "鮮豔",
    "Natural": "自然",
    "ErrorTitle": "發生錯誤",
    "ReportError": "回報此錯誤",
    "ClearData": "清除所有資料",
    "AssistantTagline": "打造你自己的 AI 助理。",
    "EmptyPrompt": "新提示詞",
    "EmptyPromptContent": "請輸入提示詞內容",
    "AllFiles": "所有檔案",
  
    "Refresh": "重新載入",
    "HidePassword": "隱藏密碼",
  },
  Exporter: {
    Description: {
      Title: "只有清除上下文之後的訊息會被顯示",
    },
    Model: "模型",
    Messages: "訊息",
    Topic: "主題",
    Time: "時間",
  },

  "Discovery": {
    "Name": "探索",
  },
  "Mcp": {
    "Name": "MCP",
    "UI": {
      "Market": "MCP 市集",
      "PresetLoadFailed": "載入預設伺服器失敗",
      "InitFailed": "載入初始狀態失敗",
      "ConfigSaved": "伺服器設定已儲存",
      "ConfigSaveFailed": "儲存設定失敗",
      "ToolsFailed": "載入工具失敗",
      "Stopped": "已停止",
      "StopFailed": "停止伺服器失敗",
      "StartFailed": "啟動伺服器失敗，請檢查日誌",
      "RestartingClients": "正在重新啟動所有客戶端",
      "RestartFailed": "重新啟動客戶端失敗",
      "Initializing": "初始化中",
      "NoServers": "尚無可用伺服器",
      "OpenRepo": "開啟程式碼儲存庫",
      "Start": "啟動",
      "Tools": "工具",
      "Add": "新增",
      "RestartAll": "全部重新啟動",
      "Search": "搜尋 MCP 伺服器",
      "ConfigureServer": "設定伺服器",
      "ServerDetails": "伺服器詳情",
      "NoTools": "尚無可用工具",
      "LoadingPresets": "正在載入預設伺服器清單…",
      "ConfiguredServers": "已設定伺服器",
      "UpdatingConfig": "正在更新設定…",
      "CreatingClient": "正在建立 MCP 客戶端…",
      "Stopping": "正在停止伺服器…",
      "Starting": "正在啟動伺服器…",
      "RestartingServers": "正在重新啟動所有伺服器…",
      "ExecutionFailed": "MCP 執行失敗",
    },
  },
  "SdPanel": {
    "Prompt": "畫面提示詞",
    "NegativePrompt": "負面提示詞",
    "PleaseInput": (name: string) => name + " — 請輸入內容",
    "AspectRatio": "長寬比",
    "ImageStyle": "圖像風格",
    "OutFormat": "輸出格式",
    "AIModel": "模型 (model)",
    "ModelVersion": "模型版本",
    "Submit": "生成",
    "ParamIsRequired": (name: string) => name + ": 必填",
    "Styles": {
      "D3Model": "3D 模型",
      "AnalogFilm": "膠片",
      "Anime": "動漫",
      "Cinematic": "電影風格",
      "ComicBook": "漫畫",
      "DigitalArt": "數位藝術",
      "Enhance": "增強",
      "FantasyArt": "奇幻藝術",
      "Isometric": "等距",
      "LineArt": "線描",
      "LowPoly": "低多邊形",
      "ModelingCompound": "黏土模型",
      "NeonPunk": "霓虹龐克",
      "Origami": "摺紙",
      "Photographic": "攝影",
      "PixelArt": "像素藝術",
      "TileTexture": "平鋪紋理",
    },
  },
  "Sd": {
    "SubTitle": (count: number) => "圖片: " + count,
    "Actions": {
      "Params": "查看參數",
      "Copy": "複製: 畫面提示詞",
      "Delete": "刪除",
      "Retry": "重試",
      "ReturnHome": "返回首頁",
      "History": "歷史記錄",
    },
    "EmptyRecord": "尚無繪圖記錄",
    "Status": {
      "Name": "狀態",
      "Success": "成功",
      "Error": "失敗",
      "Wait": "等待中",
      "Running": "執行中",
    },
    "Danger": {
      "Delete": "確認刪除？",
    },
    "GenerateParams": "生成參數",
    "Detail": "詳情",
  },
  "ApiError": {
    "Timeout": "請求逾時，請稍後重試，或在進階設定檢查介面位址。",
    "Quota": "服務商額度不足，請檢查帳戶餘額、付費狀態或用量限制。",
    "AccessCode": "存取碼無效，請檢查本站存取碼。",
    "InvalidKey": "API Key 無效或已過期，請檢查目前服務商的 Key。",
    "Permission": "存取遭拒，請檢查模型權限及服務商地區限制。",
    "Model": "模型無法使用或介面不存在，請在進階設定檢查模型 ID 及介面位址。",
    "RateLimit": "請求過於頻繁或已達用量上限，請稍後重試並檢查額度。",
    "Parameters": "請求參數不相容，請檢查進階設定中的模型 ID 及參數。",
    "Unavailable": "服務商暫時無法使用，請稍後重試。",
    "Empty": "未回傳有效內容，請檢查模型狀態後重試。",
    "Network": "網路連線失敗，請檢查網路、介面位址及第三方 CORS 設定。",
    "Generic": "請求失敗，請檢查服務商的 API Key、模型及介面設定。",
  },
};

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

export type LocaleType = typeof tw;
export type PartialLocaleType = DeepPartial<typeof tw>;

export default tw;
// Translated by @chunkiuuu, feel free the submit new pr if there are typo/incorrect translations :D
