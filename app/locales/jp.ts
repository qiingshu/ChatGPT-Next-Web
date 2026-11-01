import type { LocaleType } from "./index";
import { getClientConfig } from "../config/client";
import { SAAS_CHAT_UTM_URL } from "@/app/constant";
const isApp = !!getClientConfig()?.isApp;

const jp: LocaleType = {
  WIP: "この機能は開発中です",
  Error: {
    Unauthorized: isApp
      ? `😆 会話中に問題が発生しましたが、心配しないでください:
    \\ 1️⃣ 設定なしで始めたい場合は、[ここをクリックしてすぐにチャットを開始 🚀](${SAAS_CHAT_UTM_URL})
    \\ 2️⃣ 自分のOpenAIリソースを使用したい場合は、[ここをクリックして](/#/settings)設定を変更してください ⚙️`
      : `😆 会話中に問題が発生しましたが、心配しないでください:
    \ 1️⃣ 設定なしで始めたい場合は、[ここをクリックしてすぐにチャットを開始 🚀](${SAAS_CHAT_UTM_URL})
    \ 2️⃣ プライベートデプロイ版を使用している場合は、[ここをクリックして](/#/auth)アクセストークンを入力してください 🔑
    \ 3️⃣ 自分のOpenAIリソースを使用したい場合は、[ここをクリックして](/#/settings)設定を変更してください ⚙️
 `,
  },
  Auth: {
    Title: "パスワードが必要です",
    Tips: "管理者がパスワード認証を有効にしました。以下にアクセスコードを入力してください",
    SubTips: "または、OpenAIまたはGoogle APIキーを入力してください",
    Input: "ここにアクセスコードを入力",
    Confirm: "確認",
    Later: "後で",
    Return: "戻る",
    SaasTips: "設定が面倒すぎる、すぐに使いたい",
    TopTips:
      "🥳 NextChat AIの発売特典で、OpenAI o1、GPT-4o、Claude-3.5などの最新の大規模モデルを今すぐアンロック",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count}件の会話`,
  },
  Chat: {
    SubTitle: (count: number) => `合計${count}件の会話`,
    EditMessage: {
      Title: "メッセージ履歴を編集",
      Topic: {
        Title: "チャットテーマ",
        SubTitle: "現在のチャットテーマを変更",
      },
    },
    Actions: {
      ChatList: "メッセージリストを見る",
      CompressedHistory: "圧縮された履歴プロンプトを見る",
      Export: "チャット履歴をエクスポート",
      Copy: "コピー",
      Stop: "停止",
      Retry: "再試行",
      Pin: "固定",
      PinToastContent: "1件の会話をプリセットプロンプトに固定しました",
      PinToastAction: "見る",
      Delete: "削除",
      Edit: "編集",
      RefreshTitle: "タイトルを更新",
      RefreshToast: "タイトル更新リクエストが送信されました",
    
      "FullScreen": "全画面",
      "Speech": "読み上げ",
      "StopSpeech": "停止",
    },
    Commands: {
      new: "新しいチャット",
      newm: "マスクから新しいチャット",
      next: "次のチャット",
      prev: "前のチャット",
      clear: "コンテキストをクリア",
      del: "チャットを削除",
    
      "fork": "チャットをコピー",
    },
    InputActions: {
      Stop: "応答を停止",
      ToBottom: "最新へスクロール",
      Theme: {
        auto: "自動テーマ",
        light: "ライトモード",
        dark: "ダークモード",
      },
      Prompt: "クイックコマンド",
      Masks: "すべてのマスク",
      Clear: "チャットをクリア",
      Settings: "チャット設定",
      UploadImage: "画像をアップロード",
    },
    Rename: "チャットの名前を変更",
    Typing: "入力中…",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey}で送信`;
      if (submitKey === "Enter") {
        inputHints += "、Shift + Enterで改行";
      }
      return inputHints + "、/で補完をトリガー、:でコマンドをトリガー";
    },
    Send: "送信",
    Config: {
      Reset: "メモリをクリア",
      SaveAs: "マスクとして保存",
    },
    IsContext: "プリセットプロンプト",
  
    "StartSpeak": "発話を開始",
    "StopSpeak": "停止",
    "ShortcutKey": {
      "Title": "キーボードショートカット",
      "newChat": "新しいチャットを開く",
      "focusInput": "入力欄にフォーカス",
      "copyLastMessage": "最後の返信をコピー",
      "copyLastCode": "最後のコードブロックをコピー",
      "showShortcutKey": "ショートカットを表示",
      "clearContext": "チャットをクリア",
    },
  },
  Export: {
    Title: "チャット履歴を共有",
    Copy: "すべてコピー",
    Download: "ファイルをダウンロード",
    Share: "ShareGPTに共有",
    MessageFromYou: "ユーザー",
    MessageFromChatGPT: "ChatGPT",
    Format: {
      Title: "エクスポート形式",
      SubTitle: "MarkdownテキストまたはPNG画像としてエクスポートできます",
    },
    IncludeContext: {
      Title: "マスクコンテキストを含む",
      SubTitle: "メッセージにマスクコンテキストを表示するかどうか",
    },
    Steps: {
      Select: "選択",
      Preview: "プレビュー",
    },
    Image: {
      Toast: "スクリーンショットを生成中",
      Modal: "長押しまたは右クリックして画像を保存",
    },
  
    "Artifacts": {
      "Title": "Artifacts を共有",
      "Error": "Artifacts を共有 — エラー",
    },
  },
  Select: {
    Search: "メッセージを検索",
    All: "すべて選択",
    Latest: "最新の数件",
    Clear: "選択をクリア",
  },
  Memory: {
    Title: "履歴の要約",
    EmptyContent: "対話内容が短いため、要約は不要です",
    Send: "チャット履歴を自動的に圧縮し、コンテキストとして送信",
    Copy: "要約をコピー",
    Reset: "[unused]",
    ResetConfirm: "履歴の要約をリセットしてもよろしいですか？",
  },
  Home: {
    NewChat: "新しいチャット",
    DeleteChat: "選択した会話を削除してもよろしいですか？",
    DeleteToast: "会話を削除しました",
    Revert: "元に戻す",
  },
  Settings: {
    Title: "設定",
    SubTitle: "すべての設定オプション",

    Danger: {
      Reset: {
        Title: "すべての設定をリセット",
        SubTitle: "すべての設定項目をデフォルト値にリセット",
        Action: "今すぐリセット",
        Confirm: "すべての設定をリセットしてもよろしいですか？",
      },
      Clear: {
        Title: "すべてのデータをクリア",
        SubTitle: "すべてのチャット、設定データをクリア",
        Action: "今すぐクリア",
        Confirm: "すべてのチャット、設定データをクリアしてもよろしいですか？",
      },
    },
    Lang: {
      Name: "言語", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "すべての言語",
    },
    Avatar: "アバター",
    FontSize: {
      Title: "フォントサイズ",
      SubTitle: "チャット内容のフォントサイズ",
    },
    FontFamily: {
      Title: "チャットフォント",
      SubTitle:
        "チャットコンテンツのフォント、空白の場合はグローバルデフォルトフォントを適用します",
      Placeholder: "フォント名",
    },
    InjectSystemPrompts: {
      Title: "システムプロンプトの注入",
      SubTitle:
        "すべてのリクエストメッセージリストの先頭にChatGPTのシステムプロンプトを強制的に追加",
    },
    InputTemplate: {
      Title: "ユーザー入力のプリプロセス",
      SubTitle: "最新のメッセージをこのテンプレートに埋め込む",
    },

    Update: {
      Version: (x: string) => `現在のバージョン：${x}`,
      IsLatest: "最新バージョンです",
      CheckUpdate: "更新を確認",
      IsChecking: "更新を確認中...",
      FoundUpdate: (x: string) => `新しいバージョンを発見：${x}`,
      GoToUpdate: "更新へ進む",
    
      "Success": "更新しました",
      "Failed": "更新に失敗しました",
    },
    SendKey: "送信キー",
    Theme: "テーマ",
    TightBorder: "ボーダーレスモード",
    SendPreviewBubble: {
      Title: "プレビューバブル",
      SubTitle: "プレビューバブルでMarkdownコンテンツをプレビュー",
    },
    AutoGenerateTitle: {
      Title: "自動タイトル生成",
      SubTitle: "チャット内容に基づいて適切なタイトルを生成",
    },
    Sync: {
      CloudState: "クラウドデータ",
      NotSyncYet: "まだ同期されていません",
      Success: "同期に成功しました",
      Fail: "同期に失敗しました",

      Config: {
        Modal: {
          Title: "クラウド同期の設定",
          Check: "可用性を確認",
        },
        SyncType: {
          Title: "同期タイプ",
          SubTitle: "好きな同期サーバーを選択",
        },
        Proxy: {
          Title: "プロキシを有効化",
          SubTitle:
            "ブラウザで同期する場合、クロスオリジン制限を避けるためにプロキシを有効にする必要があります",
        },
        ProxyUrl: {
          Title: "プロキシURL",
          SubTitle: "このプロジェクトに組み込まれたクロスオリジンプロキシ専用",
        },

        WebDav: {
          Endpoint: "WebDAV エンドポイント",
          UserName: "ユーザー名",
          Password: "パスワード",
        },

        UpStash: {
          Endpoint: "UpStash Redis REST URL",
          UserName: "バックアップ名",
          Password: "UpStash Redis REST トークン",
        },
      },

      LocalState: "ローカルデータ",
      Overview: (overview: any) => {
        return `${overview.chat} 回の対話、${overview.message} 件のメッセージ、${overview.prompt} 件のプロンプト、${overview.mask} 件のマスク`;
      },
      ImportFailed: "インポートに失敗しました",
    },
    Mask: {
      Splash: {
        Title: "マスク起動画面",
        SubTitle: "新しいチャットを作成する際にマスク起動画面を表示",
      },
      Builtin: {
        Title: "内蔵マスクを非表示",
        SubTitle: "すべてのマスクリストで内蔵マスクを非表示",
      },
    },
    Prompt: {
      Disable: {
        Title: "プロンプトの自動補完を無効化",
        SubTitle: "入力フィールドの先頭に / を入力して自動補完をトリガー",
      },
      List: "カスタムプロンプトリスト",
      ListCount: (builtin: number, custom: number) =>
        `内蔵 ${builtin} 件、ユーザー定義 ${custom} 件`,
      Edit: "編集",
      Modal: {
        Title: "プロンプトリスト",
        Add: "新規作成",
        Search: "プロンプトを検索",
      },
      EditModal: {
        Title: "プロンプトを編集",
      },
    },
    HistoryCount: {
      Title: "履歴メッセージ数",
      SubTitle: "各リクエストに含まれる履歴メッセージの数",
    },
    CompressThreshold: {
      Title: "履歴メッセージの圧縮閾値",
      SubTitle: "未圧縮の履歴メッセージがこの値を超えた場合、圧縮が行われます",
    },

    Usage: {
      Title: "残高確認",
      SubTitle(used: any, total: any) {
        return `今月の使用量 $${used}、サブスクリプション合計 $${total}`;
      },
      IsChecking: "確認中…",
      Check: "再確認",
      NoAccess: "APIキーまたはアクセスパスワードを入力して残高を確認",
    },

    Access: {
      SaasStart: {
        Title: "NextChat AIを使用する",
        Label: "(コストパフォーマンスの最も高いソリューション)",
        SubTitle:
          "NextChatによって公式に管理されており、設定なしですぐに使用でき、OpenAI o1、GPT-4o、Claude-3.5などの最新の大規模モデルをサポートしています",
        ChatNow: "今すぐチャット",
      },

      AccessCode: {
        Title: "アクセスパスワード",
        SubTitle: "管理者が暗号化アクセスを有効にしました",
        Placeholder: "アクセスパスワードを入力してください",
      },
      CustomEndpoint: {
        Title: "カスタムエンドポイント",
        SubTitle: "カスタムAzureまたはOpenAIサービスを使用するかどうか",
      },
      Provider: {
        Title: "モデルプロバイダー",
        SubTitle: "異なるプロバイダーに切り替える",
      },
      OpenAI: {
        ApiKey: {
          Title: "OpenAI API Key",
          SubTitle: "カスタムOpenAIキーを使用してパスワードアクセス制限を回避",
          Placeholder: "OpenAI API Key",
        },

        Endpoint: {
          Title: "エンドポイント",
          SubTitle:
            "デフォルト以外のアドレスにはhttp(s)://を含める必要があります",
        },
      },
      Azure: {
        ApiKey: {
          Title: "Azure API Key",
          SubTitle: "カスタムAzureキーを使用してパスワードアクセス制限を回避",
          Placeholder: "Azure API Key",
        },

        Endpoint: {
          Title: "エンドポイント",
          SubTitle: "例：",
        },

        ApiVerion: {
          Title: "APIバージョン (azure api version)",
          SubTitle: "特定のバージョンを選択",
        },
      },
      Anthropic: {
        ApiKey: {
          Title: "Anthropic API Key",
          SubTitle:
            "カスタムAnthropicキーを使用してパスワードアクセス制限を回避",
          Placeholder: "Anthropic API Key",
        },

        Endpoint: {
          Title: "エンドポイント",
          SubTitle: "例：",
        },

        ApiVerion: {
          Title: "APIバージョン (claude api version)",
          SubTitle: "特定のAPIバージョンを選択",
        },
      },
      Google: {
        ApiKey: {
          Title: "Google API Key",
          SubTitle: "Google AIからAPI Keyを取得",
          Placeholder: "Google AI Studio API Keyを入力",
        },

        Endpoint: {
          Title: "エンドポイント",
          SubTitle: "例：",
        },

        ApiVersion: {
          Title: "APIバージョン（gemini-pro専用）",
          SubTitle: "特定のAPIバージョンを選択",
        },
        GoogleSafetySettings: {
          Title: "Google セーフティ設定",
          SubTitle: "コンテンツフィルタリングレベルを設定",
        },
      },
      Baidu: {
        ApiKey: {
          Title: "Baidu API Key",
          SubTitle: "カスタムBaidu API Keyを使用",
          Placeholder: "Baidu API Key",
        },
        SecretKey: {
          Title: "シークレットキー",
          SubTitle: "カスタムBaiduシークレットキーを使用",
          Placeholder: "Baiduシークレットキー",
        },
        Endpoint: {
          Title: "エンドポイント",
          SubTitle: "カスタムはサポートしていません、.env設定に進んでください",
        },
      },
      ByteDance: {
        ApiKey: {
          Title: "ByteDance API Key",
          SubTitle: "カスタムByteDance API Keyを使用",
          Placeholder: "ByteDance API Key",
        },
        Endpoint: {
          Title: "エンドポイント",
          SubTitle: "例：",
        },
      },
      Alibaba: {
        ApiKey: {
          Title: "Alibaba API Key",
          SubTitle: "カスタムAlibaba Cloud API Keyを使用",
          Placeholder: "Alibaba Cloud API Key",
        },
        Endpoint: {
          Title: "エンドポイント",
          SubTitle: "例：",
        },
      },
      CustomModel: {
        Title: "カスタムモデル名",
        SubTitle: "カスタムモデルの選択肢を追加、英語のカンマで区切る",
      },
    
      "Tencent": {
        "ApiKey": {
          "Title": "Tencent API Key",
          "SubTitle": "カスタム API Key を使用",
          "Placeholder": "Tencent API Key",
        },
        "SecretKey": {
          "Title": "Tencent Secret Key",
          "SubTitle": "カスタム認証情報を使用 — Secret Key",
          "Placeholder": "Tencent Secret Key",
        },
        "Endpoint": {
          "Title": "接続先アドレス",
          "SubTitle": "この値は .env で設定してください",
        },
      },
      "Moonshot": {
        "ApiKey": {
          "Title": "Moonshot API Key",
          "SubTitle": "カスタム API Key を使用",
          "Placeholder": "Moonshot API Key",
        },
        "Endpoint": {
          "Title": "接続先アドレス",
          "SubTitle": "例: ",
        },
      },
      "DeepSeek": {
        "ApiKey": {
          "Title": "DeepSeek API Key",
          "SubTitle": "カスタム API Key を使用",
          "Placeholder": "DeepSeek API Key",
        },
        "Endpoint": {
          "Title": "接続先アドレス",
          "SubTitle": "例: ",
        },
      },
      "XAI": {
        "ApiKey": {
          "Title": "XAI API Key",
          "SubTitle": "カスタム API Key を使用",
          "Placeholder": "XAI API Key",
        },
        "Endpoint": {
          "Title": "接続先アドレス",
          "SubTitle": "例: ",
        },
      },
      "ChatGLM": {
        "ApiKey": {
          "Title": "ChatGLM API Key",
          "SubTitle": "カスタム API Key を使用",
          "Placeholder": "ChatGLM API Key",
        },
        "Endpoint": {
          "Title": "接続先アドレス",
          "SubTitle": "例: ",
        },
      },
      "SiliconFlow": {
        "ApiKey": {
          "Title": "SiliconFlow API Key",
          "SubTitle": "カスタム API Key を使用",
          "Placeholder": "SiliconFlow API Key",
        },
        "Endpoint": {
          "Title": "接続先アドレス",
          "SubTitle": "例: ",
        },
      },
      "Stability": {
        "ApiKey": {
          "Title": "Stability API Key",
          "SubTitle": "カスタム API Key を使用",
          "Placeholder": "Stability API Key",
        },
        "Endpoint": {
          "Title": "接続先アドレス",
          "SubTitle": "例: ",
        },
      },
      "Iflytek": {
        "ApiKey": {
          "Title": "Iflytek API Key",
          "SubTitle": "カスタム API Key を使用",
          "Placeholder": "Iflytek API Key",
        },
        "ApiSecret": {
          "Title": "Iflytek API Secret",
          "SubTitle": "カスタム認証情報を使用 — API Secret",
          "Placeholder": "Iflytek API Secret",
        },
        "Endpoint": {
          "Title": "接続先アドレス",
          "SubTitle": "例: ",
        },
      },
    },

    Model: "モデル (model)",
    CompressModel: {
      Title: "圧縮モデル",
      SubTitle: "履歴を圧縮するために使用されるモデル",
    },
    Temperature: {
      Title: "ランダム性 (temperature)",
      SubTitle: "値が大きいほど応答がランダムになります",
    },
    TopP: {
      Title: "トップP (top_p)",
      SubTitle:
        "ランダム性に似ていますが、ランダム性と一緒に変更しないでください",
    },
    MaxTokens: {
      Title: "1回の応答制限 (max_tokens)",
      SubTitle: "1回の対話で使用される最大トークン数",
    },
    PresencePenalty: {
      Title: "新鮮度 (presence_penalty)",
      SubTitle: "値が大きいほど新しいトピックに移行する可能性が高くなります",
    },
    FrequencyPenalty: {
      Title: "頻度ペナルティ (frequency_penalty)",
      SubTitle: "値が大きいほど繰り返しの単語が減少します",
    },
  
    "ShowPassword": "パスワードを表示",
    "LocalizationInfo": {
      "Edition": "NextChat カスタム版",
      "Timeout": "接続テストが30秒でタイムアウトしました。ネットワークと API アドレスを確認してください。",
      "Success": "接続成功",
      "NoResponse": "有効な応答がありません。モデルと接続先の設定を確認してください。",
      "Upstream": "上流のベース版",
      "Details": "詳細なバージョン情報",
      "Security": "セキュリティ保守 ID",
      "Commit": "ビルドコミット",
      "Official": "公式の参考バージョン",
      "Unavailable": "未取得",
      "Note": "選択的な修正移植を含みますが、公式 v2.16.1 全体ではありません。公式バージョンは参考情報です。",
    },
    "ProviderSetup": {
      "ModelIdPlaceholder": "モデル ID@プロバイダー",
      "Provider": "プロバイダー",
      "ProviderHelp": "プロバイダーを選び API Key を入力すると、既定のモデルを利用できます",
      "ProviderKeyPlaceholder": "このプロバイダーの API Key を入力",
      "CurrentModel": "現在のチャットモデル",
      "DefaultModel": "既定のモデル",
      "ModelHelp": "接続先やカスタムモデルは詳細設定で変更できます",
      "TestModel": "現在のチャットモデルをテスト",
      "TestHelp": "短いリクエストを送信します。API 料金が発生する場合があります。履歴には保存しません",
      "TestConnection": "接続テスト",
      "Testing": "テスト中…",
      "Advanced": "詳細設定",
      "OfficialURL": "公式アドレス",
      "DefaultRoute": "既定ではこのサイトのルートを使用します",
    },
    "TTS": {
      "Enable": {
        "Title": "TTS を有効化",
        "SubTitle": "テキスト読み上げを有効にします",
      },
      "Autoplay": {
        "Title": "自動再生を有効化",
        "SubTitle": "音声を自動生成して再生します。先に TTS を有効にしてください",
      },
      "Model": "モデル (model)",
      "Engine": "TTS エンジン",
      "Voice": {
        "Title": "声",
        "SubTitle": "生成する音声に使う声",
      },
      "Speed": {
        "Title": "速度",
        "SubTitle": "生成する音声の速度",
      },
    },
    "Realtime": {
      "Enable": {
        "Title": "リアルタイムチャット",
        "SubTitle": "リアルタイムチャットを有効にします",
      },
      "Provider": {
        "Title": "モデルプロバイダー",
        "SubTitle": "プロバイダーを切り替えます",
      },
      "Model": {
        "Title": "モデル (model)",
        "SubTitle": "モデルを選択",
      },
      "ApiKey": {
        "Title": "API Key",
        "SubTitle": "API Key",
        "Placeholder": "API Key",
      },
      "Azure": {
        "Endpoint": {
          "Title": "接続先アドレス",
          "SubTitle": "接続先アドレス",
        },
        "Deployment": {
          "Title": "デプロイ名",
          "SubTitle": "デプロイ名",
        },
      },
      "Temperature": {
        "Title": "ランダム性 (temperature)",
        "SubTitle": "値が大きいほど応答がランダムになります",
      },
    },
    "SafetyLabels": {
      "BLOCK_NONE": "ブロックなし",
      "BLOCK_ONLY_HIGH": "高リスクのみ",
      "BLOCK_MEDIUM_AND_ABOVE": "中リスク以上",
      "BLOCK_LOW_AND_ABOVE": "低リスク以上",
    },
  },
  Store: {
    DefaultTopic: "新しいチャット",
    BotHello: "何かお手伝いできますか？",
    Error: "エラーが発生しました。後でもう一度試してください",
    Prompt: {
      History: (content: string) =>
        "これは前提としての履歴チャットの要約です：" + content,
      Topic:
        "この文の簡潔なテーマを四から五文字で返してください。説明、句読点、感嘆詞、余計なテキストは不要です。太字も不要です。テーマがない場合は「雑談」と返してください",
      Summarize:
        "対話の内容を簡潔に要約し、後続のコンテキストプロンプトとして使用します。200文字以内に抑えてください",
    },
  },
  Copy: {
    Success: "クリップボードに書き込みました",
    Failed: "コピーに失敗しました。クリップボードの権限を付与してください",
  },
  Download: {
    Success: "内容がダウンロードされました",
    Failed: "ダウンロードに失敗しました",
  },
  Context: {
    Toast: (x: any) => `${x} 件のプリセットプロンプトが含まれています`,
    Edit: "現在の対話設定",
    Add: "対話を追加",
    Clear: "コンテキストがクリアされました",
    Revert: "コンテキストを元に戻す",
  },
  Plugin: {
    Name: "プラグイン",
  
    "Accessibility": {
      "Create": "新規作成: プラグイン",
      "Edit": "編集: プラグイン",
      "Save": "保存: プラグイン",
      "SchemaUrl": "プラグイン Schema URL",
      "LoadSchema": "URL から読み込む: プラグイン Schema",
      "Schema": "プラグイン Schema",
    },
    "Page": {
      "Title": "プラグイン",
      "SubTitle": (count: number) => "プラグイン: " + count,
      "Search": "メッセージを検索 — プラグイン",
      "Create": "新規作成",
      "Find": "GitHub でプラグインを探す: ",
    },
    "Item": {
      "Info": (count: number) => "メソッド: " + count,
      "View": "見る",
      "Edit": "編集",
      "Delete": "削除",
      "DeleteConfirm": "削除してもよろしいですか？",
    },
    "Auth": {
      "None": "認証なし",
      "Basic": "Basic",
      "Bearer": "Bearer",
      "Custom": "カスタム",
      "CustomHeader": "パラメーター名",
      "Token": "Token",
      "Proxy": "プロキシを使用",
      "ProxyDescription": "プロキシで CORS 制限を回避します",
      "Location": "場所",
      "LocationHeader": "Header",
      "LocationQuery": "Query",
      "LocationBody": "Body",
    },
    "EditModal": {
      "Title": (readonly: boolean) => "編集: プラグイン" + (readonly ? " (読み取り専用)" : ""),
      "Download": "ダウンロード",
      "Auth": "認証方式",
      "Content": "OpenAPI Schema",
      "Load": "URL から読み込む",
      "Method": "メソッド",
      "Error": "OpenAPI Schema の形式が無効です",
    },
  },
  Discovery: {
    Name: "発見",
  },
  FineTuned: {
    Sysmessage: "あなたはアシスタントです",
  },
  SearchChat: {
    Name: "検索",
    Page: {
      Title: "チャット履歴を検索",
      Search: "検索キーワードを入力",
      NoResult: "結果が見つかりませんでした",
      NoData: "データがありません",
      Loading: "読み込み中",

      SubTitle: (count: number) => `${count} 件の結果が見つかりました`,
    },
    Item: {
      View: "表示",
    },
  },
  Mask: {
    Name: "マスク",
    Page: {
      Title: "プリセットキャラクターマスク",
      SubTitle: (count: number) => `${count} 件のプリセットキャラクター定義`,
      Search: "キャラクターマスクを検索",
      Create: "新規作成",
    },
    Item: {
      Info: (count: number) => `${count} 件のプリセット対話が含まれています`,
      Chat: "対話",
      View: "表示",
      Edit: "編集",
      Delete: "削除",
      DeleteConfirm: "削除してもよろしいですか？",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `プリセットマスクの編集 ${readonly ? "（読み取り専用）" : ""}`,
      Download: "プリセットをダウンロード",
      Clone: "プリセットをクローン",
    },
    Config: {
      Avatar: "キャラクターアバター",
      Name: "キャラクター名",
      Sync: {
        Title: "グローバル設定を使用",
        SubTitle: "現在の対話でグローバルモデル設定を使用するかどうか",
        Confirm:
          "現在の対話のカスタム設定が自動的に上書きされます。グローバル設定を有効にしてもよろしいですか？",
      },
      HideContext: {
        Title: "プリセット対話を非表示",
        SubTitle:
          "非表示にすると、プリセット対話はチャット画面に表示されません",
      },
      Share: {
        Title: "このマスクを共有",
        SubTitle: "このマスクの直リンクを生成",
        Action: "リンクをコピー",
      },
    
      "Artifacts": {
        "Title": "Artifacts を有効化",
        "SubTitle": "Artifacts で HTML ページを表示します",
      },
      "CodeFold": {
        "Title": "コードの折りたたみを有効化",
        "SubTitle": "長いコードブロックを自動的に折りたたみます",
      },
    },
  },
  NewChat: {
    Return: "戻る",
    Skip: "直接開始",
    NotShow: "今後表示しない",
    ConfirmNoShow:
      "無効にしてもよろしいですか？無効にした後、設定でいつでも再度有効にできます。",
    Title: "マスクを選択",
    SubTitle: "今すぐ始めよう、マスクの背後にある魂と思考の衝突",
    More: "すべて表示",
  },

  URLCommand: {
    Code: "リンクにアクセスコードが含まれています。自動入力しますか？",
    Settings: "リンクにプリセット設定が含まれています。自動入力しますか？",
  },

  UI: {
    Confirm: "確認",
    Cancel: "キャンセル",
    Close: "閉じる",
    Create: "新規作成",
    Edit: "編集",
    Export: "エクスポート",
    Import: "インポート",
    Sync: "同期",
    Config: "設定",
  
    "Save": "保存",
    "Loading": "読み込み中…",
    "Seed": "乱数シード",
    "User": "ユーザー",
    "Assistant": "アシスタント",
    "System": "システム",
    "Text": "テキスト",
    "Image": "画像",
    "Standard": "標準",
    "Vivid": "鮮やか",
    "Natural": "自然",
    "ErrorTitle": "エラーが発生しました",
    "ReportError": "このエラーを報告",
    "ClearData": "すべてのデータを消去",
    "AssistantTagline": "自分だけの AI アシスタントを作成。",
    "EmptyPrompt": "新しいプロンプト",
    "EmptyPromptContent": "プロンプトの内容を入力",
    "AllFiles": "すべてのファイル",
  
    "Refresh": "再読み込み",
    "HidePassword": "パスワードを隠す",
  },

  Exporter: {
    Description: {
      Title: "コンテキストをクリアした後のメッセージのみが表示されます",
    },
    Model: "モデル",
    Messages: "メッセージ",
    Topic: "テーマ",
    Time: "時間",
  },

  "Mcp": {
    "Name": "MCP",
    "UI": {
      "Market": "MCP マーケット",
      "PresetLoadFailed": "プリセットサーバーの読み込みに失敗しました",
      "InitFailed": "初期状態の読み込みに失敗しました",
      "ConfigSaved": "サーバー設定を保存しました",
      "ConfigSaveFailed": "設定の保存に失敗しました",
      "ToolsFailed": "ツールの読み込みに失敗しました",
      "Stopped": "停止中",
      "StopFailed": "サーバーの停止に失敗しました",
      "StartFailed": "サーバーの起動に失敗しました。ログを確認してください",
      "RestartingClients": "すべてのクライアントを再起動中",
      "RestartFailed": "クライアントの再起動に失敗しました",
      "Initializing": "初期化中",
      "NoServers": "利用可能なサーバーがありません",
      "OpenRepo": "リポジトリを開く",
      "Start": "起動",
      "Tools": "ツール",
      "Add": "追加",
      "RestartAll": "すべて再起動",
      "Search": "MCP サーバーを検索",
      "ConfigureServer": "サーバーを設定",
      "ServerDetails": "サーバー詳細",
      "NoTools": "利用可能なツールがありません",
      "LoadingPresets": "プリセットサーバーを読み込み中…",
      "ConfiguredServers": "設定済みサーバー",
      "UpdatingConfig": "設定を更新中…",
      "CreatingClient": "MCP クライアントを作成中…",
      "Stopping": "サーバーを停止中…",
      "Starting": "サーバーを起動中…",
      "RestartingServers": "すべてのサーバーを再起動中…",
      "ExecutionFailed": "MCP の実行に失敗しました",
    },
  },
  "SdPanel": {
    "Prompt": "画像プロンプト",
    "NegativePrompt": "除外プロンプト",
    "PleaseInput": (name: string) => name + " — 値を入力",
    "AspectRatio": "縦横比",
    "ImageStyle": "画像スタイル",
    "OutFormat": "出力形式",
    "AIModel": "モデル (model)",
    "ModelVersion": "モデルバージョン",
    "Submit": "生成",
    "ParamIsRequired": (name: string) => name + ": 必須",
    "Styles": {
      "D3Model": "3D モデル",
      "AnalogFilm": "アナログフィルム",
      "Anime": "アニメ",
      "Cinematic": "映画風",
      "ComicBook": "漫画",
      "DigitalArt": "デジタルアート",
      "Enhance": "強調",
      "FantasyArt": "ファンタジー",
      "Isometric": "等角投影",
      "LineArt": "線画",
      "LowPoly": "ローポリゴン",
      "ModelingCompound": "粘土模型",
      "NeonPunk": "ネオンパンク",
      "Origami": "折り紙",
      "Photographic": "写真風",
      "PixelArt": "ピクセルアート",
      "TileTexture": "タイル模様",
    },
  },
  "Sd": {
    "SubTitle": (count: number) => "画像: " + count,
    "Actions": {
      "Params": "パラメーターを表示",
      "Copy": "コピー: 画像プロンプト",
      "Delete": "削除",
      "Retry": "再試行",
      "ReturnHome": "ホームへ戻る",
      "History": "履歴",
    },
    "EmptyRecord": "画像はまだありません",
    "Status": {
      "Name": "状態",
      "Success": "成功",
      "Error": "エラー",
      "Wait": "待機中",
      "Running": "実行中",
    },
    "Danger": {
      "Delete": "削除してもよろしいですか？",
    },
    "GenerateParams": "生成パラメーター",
    "Detail": "詳細",
  },
  "ApiError": {
    "Timeout": "リクエストがタイムアウトしました。再試行するか、詳細設定で接続先を確認してください。",
    "Quota": "利用枠が不足しています。残高、支払い状況、利用制限を確認してください。",
    "AccessCode": "サイトのアクセスコードが無効です。コードを確認してください。",
    "InvalidKey": "API Key が無効または期限切れです。選択したプロバイダーの Key を確認してください。",
    "Permission": "アクセスが拒否されました。モデルの権限と地域制限を確認してください。",
    "Model": "モデルまたは接続先が見つかりません。詳細設定でモデル ID とアドレスを確認してください。",
    "RateLimit": "リクエストが多すぎるか利用上限に達しました。時間をおいて再試行し、利用枠を確認してください。",
    "Parameters": "リクエストパラメーターに互換性がありません。詳細設定でモデル ID とパラメーターを確認してください。",
    "Unavailable": "プロバイダーが一時的に利用できません。後ほど再試行してください。",
    "Empty": "有効な内容が返されませんでした。モデルの状態を確認して再試行してください。",
    "Network": "ネットワーク接続に失敗しました。ネットワーク、接続先、外部サービスの CORS 設定を確認してください。",
    "Generic": "リクエストに失敗しました。プロバイダーの API Key、モデル、接続先を確認してください。",
  },
};

export default jp;
