import { SubmitKey } from "../store/config";
import type { LocaleType } from "./index";
import { getClientConfig } from "../config/client";
import { SAAS_CHAT_UTM_URL } from "@/app/constant";
const isApp = !!getClientConfig()?.isApp;

const ar: LocaleType = {
  WIP: "قريبًا...",
  Error: {
    Unauthorized: isApp
      ? `😆 واجهت المحادثة بعض المشكلات، لا داعي للقلق:
    \\ 1️⃣ إذا كنت ترغب في تجربة دون إعداد، [انقر هنا لبدء المحادثة فورًا 🚀](${SAAS_CHAT_UTM_URL})
    \\ 2️⃣ إذا كنت تريد استخدام موارد OpenAI الخاصة بك، انقر [هنا](/#/settings) لتعديل الإعدادات ⚙️`
      : `😆 واجهت المحادثة بعض المشكلات، لا داعي للقلق:
    \ 1️⃣ إذا كنت ترغب في تجربة دون إعداد، [انقر هنا لبدء المحادثة فورًا 🚀](${SAAS_CHAT_UTM_URL})
    \ 2️⃣ إذا كنت تستخدم إصدار النشر الخاص، انقر [هنا](/#/auth) لإدخال مفتاح الوصول 🔑
    \ 3️⃣ إذا كنت تريد استخدام موارد OpenAI الخاصة بك، انقر [هنا](/#/settings) لتعديل الإعدادات ⚙️
 `,
  },
  Auth: {
    Title: "تحتاج إلى كلمة مرور",
    Tips: "قام المشرف بتفعيل التحقق بكلمة المرور، يرجى إدخال رمز الوصول أدناه",
    SubTips: "أو إدخال مفتاح API الخاص بـ OpenAI أو Google",
    Input: "أدخل رمز الوصول هنا",
    Confirm: "تأكيد",
    Later: "في وقت لاحق",
    Return: "عودة",
    SaasTips: "الإعدادات معقدة، أريد استخدامه على الفور",
    TopTips:
      "🥳 عرض NextChat AI الأول، افتح الآن OpenAI o1, GPT-4o, Claude-3.5 وأحدث النماذج الكبيرة",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} محادثة`,
  },
  Chat: {
    SubTitle: (count: number) => `إجمالي ${count} محادثة`,
    EditMessage: {
      Title: "تحرير سجل الرسائل",
      Topic: {
        Title: "موضوع الدردشة",
        SubTitle: "تغيير موضوع الدردشة الحالي",
      },
    },
    Actions: {
      ChatList: "عرض قائمة الرسائل",
      CompressedHistory: "عرض التاريخ المضغوط",
      Export: "تصدير سجل الدردشة",
      Copy: "نسخ",
      Stop: "إيقاف",
      Retry: "إعادة المحاولة",
      Pin: "تثبيت",
      PinToastContent: "تم تثبيت 1 محادثة في الإشعارات المسبقة",
      PinToastAction: "عرض",
      Delete: "حذف",
      Edit: "تحرير",
      RefreshTitle: "تحديث العنوان",
      RefreshToast: "تم إرسال طلب تحديث العنوان",
    
      "FullScreen": "ملء الشاشة",
      "Speech": "قراءة بصوت عالٍ",
      "StopSpeech": "إيقاف",
    },
    Commands: {
      new: "دردشة جديدة",
      newm: "إنشاء دردشة من القناع",
      next: "الدردشة التالية",
      prev: "الدردشة السابقة",
      clear: "مسح السياق",
      del: "حذف الدردشة",
    
      "fork": "نسخ المحادثة",
    },
    InputActions: {
      Stop: "إيقاف الاستجابة",
      ToBottom: "الانتقال إلى الأحدث",
      Theme: {
        auto: "موضوع تلقائي",
        light: "الوضع الفاتح",
        dark: "الوضع الداكن",
      },
      Prompt: "الأوامر السريعة",
      Masks: "جميع الأقنعة",
      Clear: "مسح الدردشة",
      Settings: "إعدادات الدردشة",
      UploadImage: "تحميل صورة",
    },
    Rename: "إعادة تسمية الدردشة",
    Typing: "يكتب…",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} إرسال`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += "، Shift + Enter لإدراج سطر جديد";
      }
      return inputHints + "، / لتفعيل الإكمال التلقائي، : لتفعيل الأوامر";
    },
    Send: "إرسال",
    Config: {
      Reset: "مسح الذاكرة",
      SaveAs: "حفظ كقناع",
    },
    IsContext: "الإشعارات المسبقة",
  
    "StartSpeak": "بدء التحدث",
    "StopSpeak": "إيقاف",
    "ShortcutKey": {
      "Title": "اختصارات لوحة المفاتيح",
      "newChat": "فتح محادثة جديدة",
      "focusInput": "التركيز على حقل الإدخال",
      "copyLastMessage": "نسخ آخر رد",
      "copyLastCode": "نسخ آخر كتلة برمجية",
      "showShortcutKey": "عرض الاختصارات",
      "clearContext": "مسح الدردشة",
    },
  },
  Export: {
    Title: "مشاركة سجل الدردشة",
    Copy: "نسخ الكل",
    Download: "تحميل الملف",
    Share: "مشاركة على ShareGPT",
    MessageFromYou: "المستخدم",
    MessageFromChatGPT: "ChatGPT",
    Format: {
      Title: "تنسيق التصدير",
      SubTitle: "يمكنك تصدير النص كـ Markdown أو صورة PNG",
    },
    IncludeContext: {
      Title: "تضمين سياق القناع",
      SubTitle: "هل تريد عرض سياق القناع في الرسائل",
    },
    Steps: {
      Select: "اختيار",
      Preview: "معاينة",
    },
    Image: {
      Toast: "يتم إنشاء لقطة الشاشة",
      Modal: "اضغط مطولاً أو انقر بزر الماوس الأيمن لحفظ الصورة",
    },
  
    "Artifacts": {
      "Title": "مشاركة Artifacts",
      "Error": "مشاركة Artifacts — خطأ",
    },
  },
  Select: {
    Search: "بحث في الرسائل",
    All: "تحديد الكل",
    Latest: "أحدث الرسائل",
    Clear: "مسح التحديد",
  },
  Memory: {
    Title: "ملخص التاريخ",
    EmptyContent: "محتوى المحادثة قصير جداً، لا حاجة للتلخيص",
    Send: "ضغط تلقائي لسجل الدردشة كـ سياق",
    Copy: "نسخ الملخص",
    Reset: "[غير مستخدم]",
    ResetConfirm: "تأكيد مسح ملخص التاريخ؟",
  },
  Home: {
    NewChat: "دردشة جديدة",
    DeleteChat: "تأكيد حذف المحادثة المحددة؟",
    DeleteToast: "تم حذف المحادثة",
    Revert: "تراجع",
  },
  Settings: {
    Title: "الإعدادات",
    SubTitle: "جميع خيارات الإعدادات",

    Danger: {
      Reset: {
        Title: "إعادة تعيين جميع الإعدادات",
        SubTitle: "إعادة تعيين جميع عناصر الإعدادات إلى القيم الافتراضية",
        Action: "إعادة التعيين الآن",
        Confirm: "تأكيد إعادة تعيين جميع الإعدادات؟",
      },
      Clear: {
        Title: "مسح جميع البيانات",
        SubTitle: "مسح جميع الدردشات وبيانات الإعدادات",
        Action: "مسح الآن",
        Confirm: "تأكيد مسح جميع الدردشات وبيانات الإعدادات؟",
      },
    },
    Lang: {
      Name: "اللغة", // انتبه: إذا كنت ترغب في إضافة ترجمة جديدة، يرجى عدم ترجمة هذه القيمة، اتركها كما هي "Language"
      All: "جميع اللغات",
    },
    Avatar: "الصورة الشخصية",
    FontSize: {
      Title: "حجم الخط",
      SubTitle: "حجم الخط في محتوى الدردشة",
    },
    FontFamily: {
      Title: "خط الدردشة",
      SubTitle: "خط محتوى الدردشة، اتركه فارغًا لتطبيق الخط الافتراضي العالمي",
      Placeholder: "اسم الخط",
    },
    InjectSystemPrompts: {
      Title: "حقن الرسائل النصية النظامية",
      SubTitle:
        "فرض إضافة رسالة نظامية تحاكي ChatGPT في بداية قائمة الرسائل لكل طلب",
    },
    InputTemplate: {
      Title: "معالجة الإدخال من قبل المستخدم",
      SubTitle: "سيتم ملء آخر رسالة من المستخدم في هذا القالب",
    },

    Update: {
      Version: (x: string) => `الإصدار الحالي: ${x}`,
      IsLatest: "أنت على أحدث إصدار",
      CheckUpdate: "التحقق من التحديثات",
      IsChecking: "جارٍ التحقق من التحديثات...",
      FoundUpdate: (x: string) => `تم العثور على إصدار جديد: ${x}`,
      GoToUpdate: "انتقل للتحديث",
    
      "Success": "تم التحديث",
      "Failed": "فشل التحديث",
    },
    SendKey: "زر الإرسال",
    Theme: "السمة",
    TightBorder: "وضع بدون حدود",
    SendPreviewBubble: {
      Title: "فقاعة المعاينة",
      SubTitle: "معاينة محتوى Markdown في فقاعة المعاينة",
    },
    AutoGenerateTitle: {
      Title: "توليد العنوان تلقائيًا",
      SubTitle: "توليد عنوان مناسب بناءً على محتوى الدردشة",
    },
    Sync: {
      CloudState: "بيانات السحابة",
      NotSyncYet: "لم يتم التزامن بعد",
      Success: "تم التزامن بنجاح",
      Fail: "فشل التزامن",

      Config: {
        Modal: {
          Title: "تكوين التزامن السحابي",
          Check: "التحقق من التوفر",
        },
        SyncType: {
          Title: "نوع التزامن",
          SubTitle: "اختر خادم التزامن المفضل",
        },
        Proxy: {
          Title: "تفعيل الوكيل",
          SubTitle: "يجب تفعيل الوكيل عند التزامن عبر المتصفح لتجنب قيود CORS",
        },
        ProxyUrl: {
          Title: "عنوان الوكيل",
          SubTitle: "ينطبق فقط على الوكيل المتاح في هذا المشروع",
        },

        WebDav: {
          Endpoint: "عنوان WebDAV",
          UserName: "اسم المستخدم",
          Password: "كلمة المرور",
        },

        UpStash: {
          Endpoint: "رابط UpStash Redis REST",
          UserName: "اسم النسخ الاحتياطي",
          Password: "رمز UpStash Redis REST",
        },
      },

      LocalState: "بيانات محلية",
      Overview: (overview: any) => {
        return `${overview.chat} دردشة، ${overview.message} رسالة، ${overview.prompt} إشعار، ${overview.mask} قناع`;
      },
      ImportFailed: "فشل الاستيراد",
    },
    Mask: {
      Splash: {
        Title: "صفحة بدء القناع",
        SubTitle: "عرض صفحة بدء القناع عند بدء دردشة جديدة",
      },
      Builtin: {
        Title: "إخفاء الأقنعة المدمجة",
        SubTitle: "إخفاء الأقنعة المدمجة في قائمة الأقنعة",
      },
    },
    Prompt: {
      Disable: {
        Title: "تعطيل الإكمال التلقائي للإشعارات",
        SubTitle: "استخدم / في بداية مربع النص لتفعيل الإكمال التلقائي",
      },
      List: "قائمة الإشعارات المخصصة",
      ListCount: (builtin: number, custom: number) =>
        `مدمج ${builtin} إشعار، مخصص ${custom} إشعار`,
      Edit: "تحرير",
      Modal: {
        Title: "قائمة الإشعارات",
        Add: "جديد",
        Search: "بحث عن إشعارات",
      },
      EditModal: {
        Title: "تحرير الإشعارات",
      },
    },
    HistoryCount: {
      Title: "عدد الرسائل التاريخية المرفقة",
      SubTitle: "عدد الرسائل التاريخية المرفقة مع كل طلب",
    },
    CompressThreshold: {
      Title: "عتبة ضغط طول الرسائل التاريخية",
      SubTitle:
        "عندما يتجاوز طول الرسائل التاريخية غير المضغوطة هذه القيمة، سيتم الضغط",
    },

    Usage: {
      Title: "التحقق من الرصيد",
      SubTitle(used: any, total: any) {
        return `تم استخدام $${used} هذا الشهر، إجمالي الاشتراك $${total}`;
      },
      IsChecking: "جارٍ التحقق...",
      Check: "إعادة التحقق",
      NoAccess: "أدخل مفتاح API أو كلمة مرور للوصول إلى الرصيد",
    },

    Access: {
      SaasStart: {
        Title: "استخدام NextChat AI",
        Label: "(أفضل حل من حيث التكلفة)",
        SubTitle:
          "مدعوم رسميًا من NextChat، جاهز للاستخدام بدون إعداد، يدعم أحدث النماذج الكبيرة مثل OpenAI o1 و GPT-4o و Claude-3.5",
        ChatNow: "الدردشة الآن",
      },
      AccessCode: {
        Title: "كلمة المرور للوصول",
        SubTitle: "قام المشرف بتمكين الوصول المشفر",
        Placeholder: "أدخل كلمة المرور للوصول",
      },
      CustomEndpoint: {
        Title: "واجهة مخصصة",
        SubTitle: "هل تستخدم خدمة Azure أو OpenAI مخصصة",
      },
      Provider: {
        Title: "موفر الخدمة النموذجية",
        SubTitle: "التبديل بين مقدمي الخدمة المختلفين",
      },
      OpenAI: {
        ApiKey: {
          Title: "OpenAI API Key",
          SubTitle: "استخدم مفتاح OpenAI مخصص لتجاوز قيود كلمة المرور",
          Placeholder: "مفتاح OpenAI API",
        },

        Endpoint: {
          Title: "عنوان الواجهة",
          SubTitle: "يجب أن يحتوي على http(s):// بخلاف العنوان الافتراضي",
        },
      },
      Azure: {
        ApiKey: {
          Title: "Azure API Key",
          SubTitle: "استخدم مفتاح Azure مخصص لتجاوز قيود كلمة المرور",
          Placeholder: "مفتاح Azure API",
        },

        Endpoint: {
          Title: "عنوان الواجهة",
          SubTitle: "مثال:",
        },

        ApiVerion: {
          Title: "إصدار الواجهة (azure api version)",
          SubTitle: "اختر إصدارًا معينًا",
        },
      },
      Anthropic: {
        ApiKey: {
          Title: "Anthropic API Key",
          SubTitle: "استخدم مفتاح Anthropic مخصص لتجاوز قيود كلمة المرور",
          Placeholder: "مفتاح Anthropic API",
        },

        Endpoint: {
          Title: "عنوان الواجهة",
          SubTitle: "مثال:",
        },

        ApiVerion: {
          Title: "إصدار الواجهة (claude api version)",
          SubTitle: "اختر إصدار API محدد",
        },
      },
      Google: {
        ApiKey: {
          Title: "Google API Key",
          SubTitle: "احصل على مفتاح API الخاص بك من Google AI",
          Placeholder: "أدخل مفتاح Google AI Studio API",
        },

        Endpoint: {
          Title: "عنوان النهاية",
          SubTitle: "مثال:",
        },

        ApiVersion: {
          Title: "إصدار API (مخصص لـ gemini-pro)",
          SubTitle: "اختر إصدار API معين",
        },
        GoogleSafetySettings: {
          Title: "مستوى تصفية الأمان من Google",
          SubTitle: "تعيين مستوى تصفية المحتوى",
        },
      },
      Baidu: {
        ApiKey: {
          Title: "Baidu API Key",
          SubTitle: "استخدم مفتاح Baidu API مخصص",
          Placeholder: "مفتاح Baidu API",
        },
        SecretKey: {
          Title: "المفتاح السري",
          SubTitle: "استخدم مفتاح Baidu Secret مخصص",
          Placeholder: "مفتاح Baidu Secret",
        },
        Endpoint: {
          Title: "عنوان الواجهة",
          SubTitle: "لا يدعم التخصيص، انتقل إلى .env للتكوين",
        },
      },
      ByteDance: {
        ApiKey: {
          Title: "ByteDance API Key",
          SubTitle: "استخدم مفتاح ByteDance API مخصص",
          Placeholder: "مفتاح ByteDance API",
        },
        Endpoint: {
          Title: "عنوان الواجهة",
          SubTitle: "مثال:",
        },
      },
      Alibaba: {
        ApiKey: {
          Title: "Alibaba API Key",
          SubTitle: "استخدم مفتاح Alibaba Cloud API مخصص",
          Placeholder: "مفتاح Alibaba Cloud API",
        },
        Endpoint: {
          Title: "عنوان الواجهة",
          SubTitle: "مثال:",
        },
      },
      CustomModel: {
        Title: "اسم النموذج المخصص",
        SubTitle: "أضف خيارات نموذج مخصص، مفصولة بفواصل إنجليزية",
      },
    
      "Tencent": {
        "ApiKey": {
          "Title": "Tencent API Key",
          "SubTitle": "استخدام API Key مخصص",
          "Placeholder": "Tencent API Key",
        },
        "SecretKey": {
          "Title": "Tencent Secret Key",
          "SubTitle": "استخدام بيانات اعتماد مخصصة — Secret Key",
          "Placeholder": "Tencent Secret Key",
        },
        "Endpoint": {
          "Title": "عنوان الواجهة",
          "SubTitle": "اضبط هذه القيمة في .env",
        },
      },
      "Moonshot": {
        "ApiKey": {
          "Title": "Moonshot API Key",
          "SubTitle": "استخدام API Key مخصص",
          "Placeholder": "Moonshot API Key",
        },
        "Endpoint": {
          "Title": "عنوان الواجهة",
          "SubTitle": "مثال: ",
        },
      },
      "DeepSeek": {
        "ApiKey": {
          "Title": "DeepSeek API Key",
          "SubTitle": "استخدام API Key مخصص",
          "Placeholder": "DeepSeek API Key",
        },
        "Endpoint": {
          "Title": "عنوان الواجهة",
          "SubTitle": "مثال: ",
        },
      },
      "XAI": {
        "ApiKey": {
          "Title": "XAI API Key",
          "SubTitle": "استخدام API Key مخصص",
          "Placeholder": "XAI API Key",
        },
        "Endpoint": {
          "Title": "عنوان الواجهة",
          "SubTitle": "مثال: ",
        },
      },
      "ChatGLM": {
        "ApiKey": {
          "Title": "ChatGLM API Key",
          "SubTitle": "استخدام API Key مخصص",
          "Placeholder": "ChatGLM API Key",
        },
        "Endpoint": {
          "Title": "عنوان الواجهة",
          "SubTitle": "مثال: ",
        },
      },
      "SiliconFlow": {
        "ApiKey": {
          "Title": "SiliconFlow API Key",
          "SubTitle": "استخدام API Key مخصص",
          "Placeholder": "SiliconFlow API Key",
        },
        "Endpoint": {
          "Title": "عنوان الواجهة",
          "SubTitle": "مثال: ",
        },
      },
      "Stability": {
        "ApiKey": {
          "Title": "Stability API Key",
          "SubTitle": "استخدام API Key مخصص",
          "Placeholder": "Stability API Key",
        },
        "Endpoint": {
          "Title": "عنوان الواجهة",
          "SubTitle": "مثال: ",
        },
      },
      "Iflytek": {
        "ApiKey": {
          "Title": "Iflytek API Key",
          "SubTitle": "استخدام API Key مخصص",
          "Placeholder": "Iflytek API Key",
        },
        "ApiSecret": {
          "Title": "Iflytek API Secret",
          "SubTitle": "استخدام بيانات اعتماد مخصصة — API Secret",
          "Placeholder": "Iflytek API Secret",
        },
        "Endpoint": {
          "Title": "عنوان الواجهة",
          "SubTitle": "مثال: ",
        },
      },
    },

    Model: "النموذج",
    CompressModel: {
      Title: "نموذج الضغط",
      SubTitle: "النموذج المستخدم لضغط السجل التاريخي",
    },
    Temperature: {
      Title: "العشوائية (temperature)",
      SubTitle: "كلما زادت القيمة، زادت العشوائية في الردود",
    },
    TopP: {
      Title: "عينات النواة (top_p)",
      SubTitle: "مشابه للعشوائية ولكن لا تغيره مع العشوائية",
    },
    MaxTokens: {
      Title: "حد أقصى للرموز لكل رد (max_tokens)",
      SubTitle: "أقصى عدد للرموز في تفاعل واحد",
    },
    PresencePenalty: {
      Title: "تجدد الموضوع (presence_penalty)",
      SubTitle: "كلما زادت القيمة، زادت احتمالية التوسع في مواضيع جديدة",
    },
    FrequencyPenalty: {
      Title: "عقوبة التكرار (frequency_penalty)",
      SubTitle: "كلما زادت القيمة، زادت احتمالية تقليل تكرار الكلمات",
    },
  
    "ShowPassword": "إظهار كلمة المرور",
    "LocalizationInfo": {
      "Edition": "NextChat — إصدار مخصص",
      "Timeout": "انتهت مهلة الاتصال بعد 30 ثانية. تحقق من الشبكة وعنوان API.",
      "Success": "نجح الاتصال",
      "NoResponse": "لم يُرجع المزوّد استجابة صالحة. تحقق من النموذج وإعدادات الواجهة.",
      "Upstream": "الإصدار الأساسي للمشروع الأصلي",
      "Details": "معلومات الإصدار التفصيلية",
      "Security": "معرّف الصيانة الأمنية",
      "Commit": "Commit البناء",
      "Official": "الإصدار الرسمي المرجعي",
      "Unavailable": "غير متاح بعد",
      "Note": "يتضمن إصلاحات منتقاة، وليس الإصدار الرسمي v2.16.1 بالكامل. معلومات الإصدار الرسمي للمرجع فقط.",
    },
    "ProviderSetup": {
      "ModelIdPlaceholder": "معرّف النموذج@المزوّد",
      "Provider": "المزوّد",
      "ProviderHelp": "اختر المزوّد وأدخل API Key الخاص به لاستخدام النموذج الافتراضي",
      "ProviderKeyPlaceholder": "أدخل API Key لهذا المزوّد",
      "CurrentModel": "نموذج المحادثة الحالي",
      "DefaultModel": "النموذج الافتراضي",
      "ModelHelp": "عدّل الواجهة والنماذج المخصصة في الإعدادات المتقدمة",
      "TestModel": "اختبار النموذج الحالي",
      "TestHelp": "يرسل طلبًا قصيرًا قد تترتب عليه رسوم API؛ لا يحفظ سجل المحادثة",
      "TestConnection": "اختبار الاتصال",
      "Testing": "جارٍ الاختبار…",
      "Advanced": "الإعدادات المتقدمة",
      "OfficialURL": "العنوان الرسمي",
      "DefaultRoute": "يستخدم مسار هذا الموقع افتراضيًا",
    },
    "TTS": {
      "Enable": {
        "Title": "تفعيل TTS",
        "SubTitle": "تفعيل تحويل النص إلى كلام",
      },
      "Autoplay": {
        "Title": "تفعيل التشغيل التلقائي",
        "SubTitle": "توليد الكلام وتشغيله تلقائيًا؛ فعّل TTS أولًا",
      },
      "Model": "النموذج",
      "Engine": "محرك TTS",
      "Voice": {
        "Title": "الصوت",
        "SubTitle": "الصوت المستخدم للمقاطع المُولّدة",
      },
      "Speed": {
        "Title": "السرعة",
        "SubTitle": "سرعة الصوت المُولّد",
      },
    },
    "Realtime": {
      "Enable": {
        "Title": "محادثة فورية",
        "SubTitle": "تفعيل المحادثة الفورية",
      },
      "Provider": {
        "Title": "مزوّد النموذج",
        "SubTitle": "تبديل المزوّد",
      },
      "Model": {
        "Title": "النموذج",
        "SubTitle": "اختر نموذجًا",
      },
      "ApiKey": {
        "Title": "API Key",
        "SubTitle": "API Key",
        "Placeholder": "API Key",
      },
      "Azure": {
        "Endpoint": {
          "Title": "عنوان الواجهة",
          "SubTitle": "عنوان الواجهة",
        },
        "Deployment": {
          "Title": "اسم النشر",
          "SubTitle": "اسم النشر",
        },
      },
      "Temperature": {
        "Title": "العشوائية (temperature)",
        "SubTitle": "كلما زادت القيمة، زادت العشوائية في الردود",
      },
    },
    "SafetyLabels": {
      "BLOCK_NONE": "بلا حظر",
      "BLOCK_ONLY_HIGH": "المرتفع فقط",
      "BLOCK_MEDIUM_AND_ABOVE": "المتوسط فما فوق",
      "BLOCK_LOW_AND_ABOVE": "المنخفض فما فوق",
    },
  },
  Store: {
    DefaultTopic: "دردشة جديدة",
    BotHello: "كيف يمكنني مساعدتك؟",
    Error: "حدث خطأ، يرجى المحاولة مرة أخرى لاحقًا",
    Prompt: {
      History: (content: string) =>
        "هذا ملخص للدردشة السابقة كنقطة انطلاق: " + content,
      Topic:
        "استخدم أربع إلى خمس كلمات لإرجاع ملخص مختصر لهذه الجملة، بدون شرح، بدون علامات ترقيم، بدون كلمات تعبيرية، بدون نص إضافي، بدون تنسيق عريض، إذا لم يكن هناك موضوع، يرجى العودة إلى 'دردشة عامة'",
      Summarize:
        "قم بتلخيص محتوى الدردشة باختصار، لاستخدامه كإشارة سياقية لاحقة، اجعلها في حدود 200 كلمة",
    },
  },
  Copy: {
    Success: "تم الكتابة إلى الحافظة",
    Failed: "فشل النسخ، يرجى منح أذونات الحافظة",
  },
  Download: {
    Success: "تم تنزيل المحتوى إلى مجلدك.",
    Failed: "فشل التنزيل.",
  },
  Context: {
    Toast: (x: any) => `يحتوي على ${x} إشعارات مخصصة`,
    Edit: "إعدادات الدردشة الحالية",
    Add: "إضافة دردشة جديدة",
    Clear: "تم مسح السياق",
    Revert: "استعادة السياق",
  },
  Plugin: {
    Name: "إضافة",
  
    "Accessibility": {
      "Create": "إنشاء: إضافة",
      "Edit": "تحرير: إضافة",
      "Save": "حفظ: إضافة",
      "SchemaUrl": "إضافة Schema URL",
      "LoadSchema": "تحميل من URL: إضافة Schema",
      "Schema": "إضافة Schema",
    },
    "Page": {
      "Title": "الإضافات",
      "SubTitle": (count: number) => "الإضافات: " + count,
      "Search": "بحث في الرسائل — الإضافات",
      "Create": "إنشاء",
      "Find": "ابحث عن الإضافات على GitHub: ",
    },
    "Item": {
      "Info": (count: number) => "الأساليب: " + count,
      "View": "عرض",
      "Edit": "تحرير",
      "Delete": "حذف",
      "DeleteConfirm": "تأكيد الحذف؟",
    },
    "Auth": {
      "None": "دون مصادقة",
      "Basic": "Basic",
      "Bearer": "Bearer",
      "Custom": "مخصص",
      "CustomHeader": "اسم المعامل",
      "Token": "Token",
      "Proxy": "استخدام وكيل",
      "ProxyDescription": "استخدام وكيل لتجنب قيود CORS",
      "Location": "الموقع",
      "LocationHeader": "Header",
      "LocationQuery": "Query",
      "LocationBody": "Body",
    },
    "EditModal": {
      "Title": (readonly: boolean) => "تحرير: إضافة" + (readonly ? " (للقراءة فقط)" : ""),
      "Download": "تنزيل",
      "Auth": "نوع المصادقة",
      "Content": "OpenAPI Schema",
      "Load": "تحميل من URL",
      "Method": "الأساليب",
      "Error": "OpenAPI Schema غير صالح",
    },
  },
  FineTuned: {
    Sysmessage: "أنت مساعد",
  },
  SearchChat: {
    Name: "بحث",
    Page: {
      Title: "البحث في سجلات الدردشة",
      Search: "أدخل كلمات البحث",
      NoResult: "لم يتم العثور على نتائج",
      NoData: "لا توجد بيانات",
      Loading: "جارٍ التحميل",

      SubTitle: (count: number) => `تم العثور على ${count} نتائج`,
    },
    Item: {
      View: "عرض",
    },
  },
  Mask: {
    Name: "القناع",
    Page: {
      Title: "أقنعة الأدوار المخصصة",
      SubTitle: (count: number) => `${count} تعريف لدور مخصص`,
      Search: "بحث عن قناع الدور",
      Create: "إنشاء جديد",
    },
    Item: {
      Info: (count: number) => `يحتوي على ${count} محادثات مخصصة`,
      Chat: "الدردشة",
      View: "عرض",
      Edit: "تحرير",
      Delete: "حذف",
      DeleteConfirm: "تأكيد الحذف؟",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `تحرير القناع المخصص ${readonly ? " (للقراءة فقط)" : ""}`,
      Download: "تنزيل القناع المخصص",
      Clone: "استنساخ القناع",
    },
    Config: {
      Avatar: "صورة الدور",
      Name: "اسم الدور",
      Sync: {
        Title: "استخدام الإعدادات العالمية",
        SubTitle: "هل تستخدم الدردشة الحالية الإعدادات العالمية للنموذج",
        Confirm:
          "ستتم الكتابة فوق الإعدادات المخصصة للدردشة الحالية تلقائيًا، تأكيد تفعيل الإعدادات العالمية؟",
      },
      HideContext: {
        Title: "إخفاء المحادثات المخصصة",
        SubTitle: "بعد الإخفاء، لن تظهر المحادثات المخصصة في واجهة الدردشة",
      },
      Share: {
        Title: "مشاركة هذا القناع",
        SubTitle: "إنشاء رابط مباشر لهذا القناع",
        Action: "نسخ الرابط",
      },
    
      "Artifacts": {
        "Title": "تفعيل Artifacts",
        "SubTitle": "عرض صفحات HTML باستخدام Artifacts",
      },
      "CodeFold": {
        "Title": "تفعيل طي الشيفرة",
        "SubTitle": "طي كتل الشيفرة الطويلة تلقائيًا",
      },
    },
  },
  NewChat: {
    Return: "العودة",
    Skip: "بدء الآن",
    NotShow: "عدم العرض مرة أخرى",
    ConfirmNoShow:
      "تأكيد إلغاء العرض؟ بعد الإلغاء، يمكنك إعادة تفعيله في الإعدادات في أي وقت.",
    Title: "اختر قناعًا",
    SubTitle: "ابدأ الآن وتفاعل مع الأفكار خلف القناع",
    More: "عرض الكل",
  },

  URLCommand: {
    Code: "تم الكشف عن رمز وصول في الرابط، هل تريد تعبئته تلقائيًا؟",
    Settings: "تم الكشف عن إعدادات مسبقة في الرابط، هل تريد تعبئتها تلقائيًا؟",
  },

  UI: {
    Confirm: "تأكيد",
    Cancel: "إلغاء",
    Close: "إغلاق",
    Create: "إنشاء",
    Edit: "تحرير",
    Export: "تصدير",
    Import: "استيراد",
    Sync: "مزامنة",
    Config: "تكوين",
  
    "Save": "حفظ",
    "Loading": "جارٍ التحميل…",
    "Seed": "بذرة عشوائية",
    "User": "المستخدم",
    "Assistant": "المساعد",
    "System": "النظام",
    "Text": "نص",
    "Image": "صورة",
    "Standard": "قياسي",
    "Vivid": "زاهٍ",
    "Natural": "طبيعي",
    "ErrorTitle": "حدث خطأ",
    "ReportError": "الإبلاغ عن هذا الخطأ",
    "ClearData": "مسح جميع البيانات",
    "AssistantTagline": "أنشئ مساعد الذكاء الاصطناعي الخاص بك.",
    "EmptyPrompt": "تعليمة جديدة",
    "EmptyPromptContent": "أدخل محتوى التعليمة",
    "AllFiles": "جميع الملفات",
  
    "Refresh": "إعادة تحميل",
    "HidePassword": "إخفاء كلمة المرور",
  },
  Exporter: {
    Description: {
      Title: "فقط الرسائل بعد مسح السياق سيتم عرضها",
    },
    Model: "النموذج",
    Messages: "الرسائل",
    Topic: "الموضوع",
    Time: "الوقت",
  },

  "Discovery": {
    "Name": "استكشاف",
  },
  "Mcp": {
    "Name": "MCP",
    "UI": {
      "Market": "سوق MCP",
      "PresetLoadFailed": "تعذر تحميل الخوادم المعدة مسبقًا",
      "InitFailed": "تعذر تحميل الحالة الأولية",
      "ConfigSaved": "حُفظ إعداد الخادم",
      "ConfigSaveFailed": "تعذر حفظ الإعداد",
      "ToolsFailed": "تعذر تحميل الأدوات",
      "Stopped": "متوقف",
      "StopFailed": "تعذر إيقاف الخادم",
      "StartFailed": "تعذر بدء الخادم؛ تحقق من السجلات",
      "RestartingClients": "جارٍ إعادة تشغيل جميع العملاء",
      "RestartFailed": "تعذر إعادة تشغيل العملاء",
      "Initializing": "جارٍ التهيئة",
      "NoServers": "لا توجد خوادم متاحة",
      "OpenRepo": "فتح المستودع",
      "Start": "بدء",
      "Tools": "الأدوات",
      "Add": "إضافة",
      "RestartAll": "إعادة تشغيل الكل",
      "Search": "البحث عن خوادم MCP",
      "ConfigureServer": "إعداد الخادم",
      "ServerDetails": "تفاصيل الخادم",
      "NoTools": "لا توجد أدوات متاحة",
      "LoadingPresets": "جارٍ تحميل قائمة الخوادم المعدة مسبقًا…",
      "ConfiguredServers": "الخوادم المُعدّة",
      "UpdatingConfig": "جارٍ تحديث الإعداد…",
      "CreatingClient": "جارٍ إنشاء عميل MCP…",
      "Stopping": "جارٍ إيقاف الخادم…",
      "Starting": "جارٍ بدء الخادم…",
      "RestartingServers": "جارٍ إعادة تشغيل جميع الخوادم…",
      "ExecutionFailed": "فشل تنفيذ MCP",
    },
  },
  "SdPanel": {
    "Prompt": "وصف الصورة",
    "NegativePrompt": "الوصف السلبي",
    "PleaseInput": (name: string) => name + " — أدخل قيمة",
    "AspectRatio": "نسبة الأبعاد",
    "ImageStyle": "نمط الصورة",
    "OutFormat": "تنسيق الإخراج",
    "AIModel": "النموذج",
    "ModelVersion": "إصدار النموذج",
    "Submit": "توليد",
    "ParamIsRequired": (name: string) => name + ": مطلوب",
    "Styles": {
      "D3Model": "نموذج ثلاثي الأبعاد",
      "AnalogFilm": "فيلم تقليدي",
      "Anime": "رسوم يابانية",
      "Cinematic": "سينمائي",
      "ComicBook": "قصص مصورة",
      "DigitalArt": "فن رقمي",
      "Enhance": "محسّن",
      "FantasyArt": "فن خيالي",
      "Isometric": "متساوي القياس",
      "LineArt": "رسم خطي",
      "LowPoly": "مضلعات قليلة",
      "ModelingCompound": "صلصال",
      "NeonPunk": "بانك نيون",
      "Origami": "طي الورق",
      "Photographic": "فوتوغرافي",
      "PixelArt": "فن البكسل",
      "TileTexture": "نسيج بلاط",
    },
  },
  "Sd": {
    "SubTitle": (count: number) => "الصور: " + count,
    "Actions": {
      "Params": "عرض المعاملات",
      "Copy": "نسخ: وصف الصورة",
      "Delete": "حذف",
      "Retry": "إعادة المحاولة",
      "ReturnHome": "العودة للرئيسية",
      "History": "السجل",
    },
    "EmptyRecord": "لا توجد صور بعد",
    "Status": {
      "Name": "الحالة",
      "Success": "نجاح",
      "Error": "خطأ",
      "Wait": "في الانتظار",
      "Running": "قيد التشغيل",
    },
    "Danger": {
      "Delete": "تأكيد الحذف؟",
    },
    "GenerateParams": "معاملات التوليد",
    "Detail": "التفاصيل",
  },
  "ApiError": {
    "Timeout": "انتهت مهلة الطلب. أعد المحاولة أو تحقق من العنوان في الإعدادات المتقدمة.",
    "Quota": "حصة المزوّد غير كافية. تحقق من الرصيد والفوترة وحدود الاستخدام.",
    "AccessCode": "رمز الوصول للموقع غير صالح. تحقق من الرمز.",
    "InvalidKey": "API Key غير صالح أو منتهي الصلاحية. تحقق من Key للمزوّد المحدد.",
    "Permission": "رُفض الوصول. تحقق من صلاحيات النموذج والقيود الإقليمية.",
    "Model": "النموذج أو الواجهة غير متاح. تحقق من المعرّف والعنوان في الإعدادات المتقدمة.",
    "RateLimit": "طلبات كثيرة أو تم بلوغ الحد. أعد المحاولة لاحقًا وتحقق من الحصة.",
    "Parameters": "معاملات الطلب غير متوافقة. تحقق من معرّف النموذج والمعاملات المتقدمة.",
    "Unavailable": "المزوّد غير متاح مؤقتًا. أعد المحاولة لاحقًا.",
    "Empty": "لم يُرجع محتوى صالحًا. تحقق من حالة النموذج وأعد المحاولة.",
    "Network": "فشل الاتصال بالشبكة. تحقق من الشبكة والعنوان وإعدادات CORS للطرف الثالث.",
    "Generic": "فشل الطلب. تحقق من API Key والنموذج وإعدادات الواجهة للمزوّد.",
  },
};

export default ar;
