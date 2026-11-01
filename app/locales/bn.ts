import { SubmitKey } from "../store/config";
import type { LocaleType } from "./index";
import { getClientConfig } from "../config/client";
import { SAAS_CHAT_UTM_URL } from "@/app/constant";
const isApp = !!getClientConfig()?.isApp;

const bn: LocaleType = {
  WIP: "শীঘ্রই আসছে...",
  Error: {
    Unauthorized: isApp
      ? `😆 কথোপকথনে কিছু সমস্যা হয়েছে, চিন্তার কিছু নেই:
    \\ 1️⃣ যদি আপনি শূন্য কনফিগারেশনে শুরু করতে চান, তাহলে [এখানে ক্লিক করে অবিলম্বে কথোপকথন শুরু করুন 🚀](${SAAS_CHAT_UTM_URL})
    \\ 2️⃣ যদি আপনি আপনার নিজস্ব OpenAI সম্পদ ব্যবহার করতে চান, তাহলে [এখানে ক্লিক করুন](/#/settings) সেটিংস পরিবর্তন করতে ⚙️`
      : `😆 কথোপকথনে কিছু সমস্যা হয়েছে, চিন্তার কিছু নেই:
    \ 1️⃣ যদি আপনি শূন্য কনফিগারেশনে শুরু করতে চান, তাহলে [এখানে ক্লিক করে অবিলম্বে কথোপকথন শুরু করুন 🚀](${SAAS_CHAT_UTM_URL})
    \ 2️⃣ যদি আপনি একটি প্রাইভেট ডেপ্লয়মেন্ট সংস্করণ ব্যবহার করেন, তাহলে [এখানে ক্লিক করুন](/#/auth) প্রবেশাধিকার কীগুলি প্রবেশ করতে 🔑
    \ 3️⃣ যদি আপনি আপনার নিজস্ব OpenAI সম্পদ ব্যবহার করতে চান, তাহলে [এখানে ক্লিক করুন](/#/settings) সেটিংস পরিবর্তন করতে ⚙️
 `,
  },
  Auth: {
    Title: "পাসওয়ার্ড প্রয়োজন",
    Tips: "অ্যাডমিন পাসওয়ার্ড প্রমাণীকরণ চালু করেছেন, নিচে অ্যাক্সেস কোড প্রবেশ করুন",
    SubTips: "অথবা আপনার OpenAI অথবা Google API কী প্রবেশ করান",
    Input: "এখানে অ্যাক্সেস কোড লিখুন",
    Confirm: "নিশ্চিত করুন",
    Later: "পরে বলুন",
    Return: "ফিরে আসা",
    SaasTips: "কনফিগারেশন খুব কঠিন, আমি অবিলম্বে ব্যবহার করতে চাই",
    TopTips:
      "🥳 NextChat AI প্রথম প্রকাশের অফার, এখনই OpenAI o1, GPT-4o, Claude-3.5 এবং সর্বশেষ বড় মডেলগুলি আনলক করুন",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} টি চ্যাট`,
  },
  Chat: {
    SubTitle: (count: number) => `মোট ${count} টি চ্যাট`,
    EditMessage: {
      Title: "বার্তাগুলি সম্পাদনা করুন",
      Topic: {
        Title: "চ্যাটের বিষয়",
        SubTitle: "বর্তমান চ্যাটের বিষয় পরিবর্তন করুন",
      },
    },
    Actions: {
      ChatList: "বার্তা তালিকা দেখুন",
      CompressedHistory: "সংকুচিত ইতিহাস দেখুন",
      Export: "চ্যাট ইতিহাস রপ্তানী করুন",
      Copy: "অনুলিপি করুন",
      Stop: "থামান",
      Retry: "পুনরায় চেষ্টা করুন",
      Pin: "পিন করুন",
      PinToastContent: "1 টি চ্যাট পূর্বনির্ধারিত প্রম্পটে পিন করা হয়েছে",
      PinToastAction: "দেখুন",
      Delete: "মুছে ফেলুন",
      Edit: "সম্পাদনা করুন",
      RefreshTitle: "শিরোনাম রিফ্রেশ করুন",
      RefreshToast: "শিরোনাম রিফ্রেশ অনুরোধ পাঠানো হয়েছে",
    
      "FullScreen": "পূর্ণ পর্দা",
      "Speech": "পড়ে শোনান",
      "StopSpeech": "থামান",
    },
    Commands: {
      new: "নতুন চ্যাট",
      newm: "মাস্ক থেকে নতুন চ্যাট",
      next: "পরবর্তী চ্যাট",
      prev: "পূর্ববর্তী চ্যাট",
      clear: "প্রসঙ্গ পরিষ্কার করুন",
      del: "চ্যাট মুছে ফেলুন",
    
      "fork": "কথোপকথন অনুলিপি",
    },
    InputActions: {
      Stop: "প্রতিক্রিয়া থামান",
      ToBottom: "সর্বশেষে স্ক্রোল করুন",
      Theme: {
        auto: "স্বয়ংক্রিয় থিম",
        light: "আলোর মোড",
        dark: "অন্ধকার মোড",
      },
      Prompt: "সংক্ষিপ্ত নির্দেশনা",
      Masks: "সমস্ত মাস্ক",
      Clear: "চ্যাট পরিষ্কার করুন",
      Settings: "চ্যাট সেটিংস",
      UploadImage: "চিত্র আপলোড করুন",
    },
    Rename: "চ্যাট নাম পরিবর্তন করুন",
    Typing: "লিখছে…",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} পাঠান`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += "，Shift + Enter নতুন লাইন";
      }
      return inputHints + "，/ পূর্ণতা সক্রিয় করুন，: কমান্ড সক্রিয় করুন";
    },
    Send: "পাঠান",
    Config: {
      Reset: "মেমরি মুছে ফেলুন",
      SaveAs: "মাস্ক হিসাবে সংরক্ষণ করুন",
    },
    IsContext: "পূর্বনির্ধারিত প্রম্পট",
  
    "StartSpeak": "কথা বলা শুরু",
    "StopSpeak": "থামান",
    "ShortcutKey": {
      "Title": "কীবোর্ড শর্টকাট",
      "newChat": "নতুন কথোপকথন খুলুন",
      "focusInput": "ইনপুট ঘরে ফোকাস করুন",
      "copyLastMessage": "শেষ উত্তর অনুলিপি",
      "copyLastCode": "শেষ কোড ব্লক অনুলিপি",
      "showShortcutKey": "শর্টকাট দেখান",
      "clearContext": "চ্যাট পরিষ্কার করুন",
    },
  },
  Export: {
    Title: "চ্যাট ইতিহাস শেয়ার করুন",
    Copy: "সবকিছু কপি করুন",
    Download: "ফাইল ডাউনলোড করুন",
    Share: "ShareGPT তে শেয়ার করুন",
    MessageFromYou: "ব্যবহারকারী",
    MessageFromChatGPT: "ChatGPT",
    Format: {
      Title: "রপ্তানির ফর্ম্যাট",
      SubTitle: "Markdown টেক্সট বা PNG চিত্র রপ্তানি করা যাবে",
    },
    IncludeContext: {
      Title: "মাস্ক প্রসঙ্গ অন্তর্ভুক্ত করুন",
      SubTitle: "বার্তায় মাস্ক প্রসঙ্গ প্রদর্শন করা হবে কি না",
    },
    Steps: {
      Select: "নির্বাচন করুন",
      Preview: "পূর্বরূপ দেখুন",
    },
    Image: {
      Toast: "স্ক্রীনশট তৈরি করা হচ্ছে",
      Modal: "ছবি সংরক্ষণ করতে দীর্ঘ প্রেস করুন অথবা রাইট ক্লিক করুন",
    },
  
    "Artifacts": {
      "Title": "Artifacts শেয়ার করুন",
      "Error": "Artifacts শেয়ার করুন — ত্রুটি",
    },
  },
  Select: {
    Search: "বার্তা অনুসন্ধান করুন",
    All: "সবকিছু নির্বাচন করুন",
    Latest: "সর্বশেষ কিছু",
    Clear: "নির্বাচন পরিষ্কার করুন",
  },
  Memory: {
    Title: "ইতিহাস সারাংশ",
    EmptyContent: "চ্যাটের বিষয়বস্তু খুব সংক্ষিপ্ত, সারাংশ প্রয়োজন নেই",
    Send: "অটোমেটিক চ্যাট ইতিহাস সংকুচিত করুন এবং প্রসঙ্গ হিসেবে পাঠান",
    Copy: "সারাংশ কপি করুন",
    Reset: "[unused]",
    ResetConfirm: "ইতিহাস সারাংশ মুছে ফেলার নিশ্চিত করুন?",
  },
  Home: {
    NewChat: "নতুন চ্যাট",
    DeleteChat: "নির্বাচিত চ্যাট মুছে ফেলার নিশ্চিত করুন?",
    DeleteToast: "চ্যাট মুছে ফেলা হয়েছে",
    Revert: "পূর্বাবস্থায় ফেরান",
  },
  Settings: {
    Title: "সেটিংস",
    SubTitle: "সমস্ত সেটিংস অপশন",

    Danger: {
      Reset: {
        Title: "সমস্ত সেটিংস পুনরায় সেট করুন",
        SubTitle: "সমস্ত সেটিংস বিকল্পগুলিকে ডিফল্ট মানে পুনরায় সেট করুন",
        Action: "এখনই পুনরায় সেট করুন",
        Confirm: "সমস্ত সেটিংস পুনরায় সেট করার নিশ্চিত করুন?",
      },
      Clear: {
        Title: "সমস্ত তথ্য মুছে ফেলুন",
        SubTitle: "সমস্ত চ্যাট এবং সেটিংস ডেটা মুছে ফেলুন",
        Action: "এখনই মুছে ফেলুন",
        Confirm: "সমস্ত চ্যাট এবং সেটিংস ডেটা মুছে ফেলানোর নিশ্চিত করুন?",
      },
    },
    Lang: {
      Name: "ভাষা", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "সমস্ত ভাষা",
    },
    Avatar: "অভিনেতা",
    FontSize: {
      Title: "ফন্ট সাইজ",
      SubTitle: "চ্যাট কনটেন্টের ফন্ট সাইজ",
    },
    FontFamily: {
      Title: "চ্যাট ফন্ট",
      SubTitle:
        "চ্যাট সামগ্রীর ফন্ট, বিশ্বব্যাপী ডিফল্ট ফন্ট প্রয়োগ করতে খালি রাখুন",
      Placeholder: "ফন্টের নাম",
    },
    InjectSystemPrompts: {
      Title: "সিস্টেম-লেভেল প্রম্পট যোগ করুন",
      SubTitle:
        "প্রত্যেক বার্তায় একটি সিস্টেম প্রম্পট যোগ করুন যা ChatGPT এর অনুকরণ করবে",
    },
    InputTemplate: {
      Title: "ব্যবহারকারীর ইনপুট প্রিপ্রসেসিং",
      SubTitle: "ব্যবহারকারীর সর্বশেষ বার্তা এই টেমপ্লেটে পূরণ করা হবে",
    },

    Update: {
      Version: (x: string) => `বর্তমান সংস্করণ: ${x}`,
      IsLatest: "এটি সর্বশেষ সংস্করণ",
      CheckUpdate: "আপডেট পরীক্ষা করুন",
      IsChecking: "আপডেট পরীক্ষা করা হচ্ছে...",
      FoundUpdate: (x: string) => `নতুন সংস্করণ পাওয়া গিয়েছে: ${x}`,
      GoToUpdate: "আপডেট করতে যান",
    
      "Success": "হালনাগাদ সফল",
      "Failed": "হালনাগাদ ব্যর্থ",
    },
    SendKey: "পাঠানোর কী",
    Theme: "থিম",
    TightBorder: "বর্ডার-বিহীন মোড",
    SendPreviewBubble: {
      Title: "প্রিভিউ বুদবুদ",
      SubTitle: "প্রিভিউ বুদবুদে Markdown কনটেন্ট প্রিভিউ করুন",
    },
    AutoGenerateTitle: {
      Title: "স্বয়ংক্রিয় শিরোনাম জেনারেশন",
      SubTitle: "চ্যাট কনটেন্টের ভিত্তিতে উপযুক্ত শিরোনাম তৈরি করুন",
    },
    Sync: {
      CloudState: "ক্লাউড ডেটা",
      NotSyncYet: "এখনো সিঙ্ক করা হয়নি",
      Success: "সিঙ্ক সফল",
      Fail: "সিঙ্ক ব্যর্থ",

      Config: {
        Modal: {
          Title: "ক্লাউড সিঙ্ক কনফিগার করুন",
          Check: "পরীক্ষা করুন",
        },
        SyncType: {
          Title: "সিঙ্ক টাইপ",
          SubTitle: "পছন্দসই সিঙ্ক সার্ভার নির্বাচন করুন",
        },
        Proxy: {
          Title: "প্রক্সি সক্রিয় করুন",
          SubTitle:
            "ব্রাউজারে সিঙ্ক করার সময়, ক্রস-অরিজিন সীমাবদ্ধতা এড়াতে প্রক্সি সক্রিয় করতে হবে",
        },
        ProxyUrl: {
          Title: "প্রক্সি ঠিকানা",
          SubTitle:
            "এটি শুধুমাত্র প্রকল্পের সাথে সরবরাহিত ক্রস-অরিজিন প্রক্সির জন্য প্রযোজ্য",
        },

        WebDav: {
          Endpoint: "WebDAV ঠিকানা",
          UserName: "ব্যবহারকারীর নাম",
          Password: "পাসওয়ার্ড",
        },

        UpStash: {
          Endpoint: "UpStash Redis REST URL",
          UserName: "ব্যাকআপ নাম",
          Password: "UpStash Redis REST টোকেন",
        },
      },

      LocalState: "স্থানীয় ডেটা",
      Overview: (overview: any) => {
        return `${overview.chat} বার চ্যাট, ${overview.message} বার্তা, ${overview.prompt} প্রম্পট, ${overview.mask} মাস্ক`;
      },
      ImportFailed: "আমদানি ব্যর্থ",
    },
    Mask: {
      Splash: {
        Title: "মাস্ক লঞ্চ পেজ",
        SubTitle: "নতুন চ্যাট শুরু করার সময় মাস্ক লঞ্চ পেজ প্রদর্শন করুন",
      },
      Builtin: {
        Title: "ইনবিল্ট মাস্ক লুকান",
        SubTitle: "সমস্ত মাস্ক তালিকায় ইনবিল্ট মাস্ক লুকান",
      },
    },
    Prompt: {
      Disable: {
        Title: "প্রম্পট অটো-কমপ্লিশন নিষ্ক্রিয় করুন",
        SubTitle: "ইনপুট বক্সের শুরুতে / টাইপ করলে অটো-কমপ্লিশন সক্রিয় হবে",
      },
      List: "স্বনির্ধারিত প্রম্পট তালিকা",
      ListCount: (builtin: number, custom: number) =>
        `ইনবিল্ট ${builtin} টি, ব্যবহারকারী সংজ্ঞায়িত ${custom} টি`,
      Edit: "সম্পাদনা করুন",
      Modal: {
        Title: "প্রম্পট তালিকা",
        Add: "নতুন করুন",
        Search: "প্রম্পট অনুসন্ধান করুন",
      },
      EditModal: {
        Title: "প্রম্পট সম্পাদনা করুন",
      },
    },
    HistoryCount: {
      Title: "সংযুক্ত ইতিহাস বার্তার সংখ্যা",
      SubTitle: "প্রতিটি অনুরোধে সংযুক্ত ইতিহাস বার্তার সংখ্যা",
    },
    CompressThreshold: {
      Title: "ইতিহাস বার্তা দৈর্ঘ্য সংকুচিত থ্রেশহোল্ড",
      SubTitle:
        "যখন সংকুচিত ইতিহাস বার্তা এই মান ছাড়িয়ে যায়, তখন সংকুচিত করা হবে",
    },

    Usage: {
      Title: "ব্যালেন্স চেক",
      SubTitle(used: any, total: any) {
        return `এই মাসে ব্যবহৃত $${used}, সাবস্ক্রিপশন মোট $${total}`;
      },
      IsChecking: "পরীক্ষা করা হচ্ছে…",
      Check: "পুনরায় পরীক্ষা করুন",
      NoAccess: "ব্যালেন্স দেখতে API কী অথবা অ্যাক্সেস পাসওয়ার্ড প্রবেশ করুন",
    },

    Access: {
      SaasStart: {
        Title: "NextChat AI ব্যবহার করুন",
        Label: "(সেরা মূল্যসাশ্রয়ী সমাধান)",
        SubTitle:
          "NextChat কর্তৃক অফিসিয়াল রক্ষণাবেক্ষণ, শূন্য কনফিগারেশন ব্যবহার শুরু করুন, OpenAI o1, GPT-4o, Claude-3.5 সহ সর্বশেষ বড় মডেলগুলি সমর্থন করে",
        ChatNow: "এখনই চ্যাট করুন",
      },

      AccessCode: {
        Title: "অ্যাক্সেস পাসওয়ার্ড",
        SubTitle: "অ্যাডমিন এনক্রিপ্টেড অ্যাক্সেস সক্রিয় করেছেন",
        Placeholder: "অ্যাক্সেস পাসওয়ার্ড প্রবেশ করুন",
      },
      CustomEndpoint: {
        Title: "স্বনির্ধারিত ইন্টারফেস",
        SubTitle: "স্বনির্ধারিত Azure বা OpenAI সার্ভিস ব্যবহার করবেন কি?",
      },
      Provider: {
        Title: "মডেল পরিষেবা প্রদানকারী",
        SubTitle: "বিভিন্ন পরিষেবা প্রদানকারীতে স্যুইচ করুন",
      },
      OpenAI: {
        ApiKey: {
          Title: "OpenAI API Key",
          SubTitle:
            "পাসওয়ার্ড অ্যাক্সেস সীমাবদ্ধতা এড়াতে স্বনির্ধারিত OpenAI কী ব্যবহার করুন",
          Placeholder: "OpenAI API কী",
        },

        Endpoint: {
          Title: "ইন্টারফেস ঠিকানা",
          SubTitle: "ডিফল্ট ঠিকানা বাদে, http(s):// অন্তর্ভুক্ত করতে হবে",
        },
      },
      Azure: {
        ApiKey: {
          Title: "Azure API Key",
          SubTitle:
            "পাসওয়ার্ড অ্যাক্সেস সীমাবদ্ধতা এড়াতে স্বনির্ধারিত Azure কী ব্যবহার করুন",
          Placeholder: "Azure API কী",
        },

        Endpoint: {
          Title: "ইন্টারফেস ঠিকানা",
          SubTitle: "উদাহরণ:",
        },

        ApiVerion: {
          Title: "ইন্টারফেস সংস্করণ (azure api version)",
          SubTitle: "নির্দিষ্ট সংস্করণ নির্বাচন করুন",
        },
      },
      Anthropic: {
        ApiKey: {
          Title: "Anthropic API Key",
          SubTitle:
            "পাসওয়ার্ড অ্যাক্সেস সীমাবদ্ধতা এড়াতে স্বনির্ধারিত Anthropic কী ব্যবহার করুন",
          Placeholder: "Anthropic API কী",
        },

        Endpoint: {
          Title: "ইন্টারফেস ঠিকানা",
          SubTitle: "উদাহরণ:",
        },

        ApiVerion: {
          Title: "ইন্টারফেস সংস্করণ (claude api version)",
          SubTitle: "নির্দিষ্ট API সংস্করণ প্রবেশ করুন",
        },
      },
      Google: {
        ApiKey: {
          Title: "Google API Key",
          SubTitle: "Google AI থেকে আপনার API কী পান",
          Placeholder: "আপনার Google AI Studio API কী প্রবেশ করুন",
        },

        Endpoint: {
          Title: "টার্মিনাল ঠিকানা",
          SubTitle: "উদাহরণ:",
        },

        ApiVersion: {
          Title: "API সংস্করণ (শুধুমাত্র gemini-pro)",
          SubTitle: "একটি নির্দিষ্ট API সংস্করণ নির্বাচন করুন",
        },
        GoogleSafetySettings: {
          Title: "Google সেফটি ফিল্টার স্তর",
          SubTitle: "বিষয়বস্তু ফিল্টার স্তর সেট করুন",
        },
      },
      Baidu: {
        ApiKey: {
          Title: "Baidu API Key",
          SubTitle: "স্বনির্ধারিত Baidu API কী ব্যবহার করুন",
          Placeholder: "Baidu API কী",
        },
        SecretKey: {
          Title: "সিক্রেট কী",
          SubTitle: "স্বনির্ধারিত Baidu সিক্রেট কী ব্যবহার করুন",
          Placeholder: "Baidu সিক্রেট কী",
        },
        Endpoint: {
          Title: "ইন্টারফেস ঠিকানা",
          SubTitle: "স্বনির্ধারিত সমর্থিত নয়, .env কনফিগারেশনে চলে যান",
        },
      },
      ByteDance: {
        ApiKey: {
          Title: "ByteDance API Key",
          SubTitle: "স্বনির্ধারিত ByteDance API কী ব্যবহার করুন",
          Placeholder: "ByteDance API কী",
        },
        Endpoint: {
          Title: "ইন্টারফেস ঠিকানা",
          SubTitle: "উদাহরণ:",
        },
      },
      Alibaba: {
        ApiKey: {
          Title: "Alibaba API Key",
          SubTitle: "স্বনির্ধারিত আলিবাবা ক্লাউড API কী ব্যবহার করুন",
          Placeholder: "Alibaba Cloud API কী",
        },
        Endpoint: {
          Title: "ইন্টারফেস ঠিকানা",
          SubTitle: "উদাহরণ:",
        },
      },
      CustomModel: {
        Title: "স্বনির্ধারিত মডেল নাম",
        SubTitle:
          "স্বনির্ধারিত মডেল বিকল্পগুলি যুক্ত করুন, ইংরেজি কমা দ্বারা আলাদা করুন",
      },
    
      "Tencent": {
        "ApiKey": {
          "Title": "Tencent API Key",
          "SubTitle": "নিজস্ব API Key ব্যবহার করুন",
          "Placeholder": "Tencent API Key",
        },
        "SecretKey": {
          "Title": "Tencent Secret Key",
          "SubTitle": "নিজস্ব পরিচয়পত্র ব্যবহার করুন — Secret Key",
          "Placeholder": "Tencent Secret Key",
        },
        "Endpoint": {
          "Title": "ইন্টারফেসের ঠিকানা",
          "SubTitle": "এই মানটি .env-এ নির্ধারণ করুন",
        },
      },
      "Moonshot": {
        "ApiKey": {
          "Title": "Moonshot API Key",
          "SubTitle": "নিজস্ব API Key ব্যবহার করুন",
          "Placeholder": "Moonshot API Key",
        },
        "Endpoint": {
          "Title": "ইন্টারফেসের ঠিকানা",
          "SubTitle": "উদাহরণ: ",
        },
      },
      "DeepSeek": {
        "ApiKey": {
          "Title": "DeepSeek API Key",
          "SubTitle": "নিজস্ব API Key ব্যবহার করুন",
          "Placeholder": "DeepSeek API Key",
        },
        "Endpoint": {
          "Title": "ইন্টারফেসের ঠিকানা",
          "SubTitle": "উদাহরণ: ",
        },
      },
      "XAI": {
        "ApiKey": {
          "Title": "XAI API Key",
          "SubTitle": "নিজস্ব API Key ব্যবহার করুন",
          "Placeholder": "XAI API Key",
        },
        "Endpoint": {
          "Title": "ইন্টারফেসের ঠিকানা",
          "SubTitle": "উদাহরণ: ",
        },
      },
      "ChatGLM": {
        "ApiKey": {
          "Title": "ChatGLM API Key",
          "SubTitle": "নিজস্ব API Key ব্যবহার করুন",
          "Placeholder": "ChatGLM API Key",
        },
        "Endpoint": {
          "Title": "ইন্টারফেসের ঠিকানা",
          "SubTitle": "উদাহরণ: ",
        },
      },
      "SiliconFlow": {
        "ApiKey": {
          "Title": "SiliconFlow API Key",
          "SubTitle": "নিজস্ব API Key ব্যবহার করুন",
          "Placeholder": "SiliconFlow API Key",
        },
        "Endpoint": {
          "Title": "ইন্টারফেসের ঠিকানা",
          "SubTitle": "উদাহরণ: ",
        },
      },
      "Stability": {
        "ApiKey": {
          "Title": "Stability API Key",
          "SubTitle": "নিজস্ব API Key ব্যবহার করুন",
          "Placeholder": "Stability API Key",
        },
        "Endpoint": {
          "Title": "ইন্টারফেসের ঠিকানা",
          "SubTitle": "উদাহরণ: ",
        },
      },
      "Iflytek": {
        "ApiKey": {
          "Title": "Iflytek API Key",
          "SubTitle": "নিজস্ব API Key ব্যবহার করুন",
          "Placeholder": "Iflytek API Key",
        },
        "ApiSecret": {
          "Title": "Iflytek API Secret",
          "SubTitle": "নিজস্ব পরিচয়পত্র ব্যবহার করুন — API Secret",
          "Placeholder": "Iflytek API Secret",
        },
        "Endpoint": {
          "Title": "ইন্টারফেসের ঠিকানা",
          "SubTitle": "উদাহরণ: ",
        },
      },
    },

    Model: "মডেল (model)",
    CompressModel: {
      Title: "সংকোচন মডেল",
      SubTitle: "ইতিহাস সংকুচিত করার জন্য ব্যবহৃত মডেল",
    },
    Temperature: {
      Title: "যাদুকরিতা (temperature)",
      SubTitle: "মান বাড়ালে উত্তর বেশি এলোমেলো হবে",
    },
    TopP: {
      Title: "নিউক্লিয়ার স্যাম্পলিং (top_p)",
      SubTitle: "যাদুকরিতা মত, কিন্তু একসাথে পরিবর্তন করবেন না",
    },
    MaxTokens: {
      Title: "একটি উত্তর সীমা (max_tokens)",
      SubTitle: "প্রতি ইন্টারঅ্যাকশনে সর্বাধিক টোকেন সংখ্যা",
    },
    PresencePenalty: {
      Title: "বিষয়বস্তু তাজা (presence_penalty)",
      SubTitle: "মান বাড়ালে নতুন বিষয়ে প্রসারিত হওয়ার সম্ভাবনা বেশি",
    },
    FrequencyPenalty: {
      Title: "ফ্রিকোয়েন্সি পেনাল্টি (frequency_penalty)",
      SubTitle: "মান বাড়ালে পুনরাবৃত্তি শব্দ কমানোর সম্ভাবনা বেশি",
    },
  
    "ShowPassword": "পাসওয়ার্ড দেখান",
    "LocalizationInfo": {
      "Edition": "NextChat নিজস্ব সংস্করণ",
      "Timeout": "সংযোগ পরীক্ষার ৩০ সেকেন্ড সময়সীমা পেরিয়েছে। নেটওয়ার্ক ও API ঠিকানা পরীক্ষা করুন।",
      "Success": "সংযোগ সফল",
      "NoResponse": "প্রদানকারী বৈধ উত্তর দেয়নি। মডেল ও ইন্টারফেসের সেটিংস পরীক্ষা করুন।",
      "Upstream": "মূল প্রকল্পের ভিত্তি সংস্করণ",
      "Details": "বিস্তারিত সংস্করণ তথ্য",
      "Security": "নিরাপত্তা রক্ষণাবেক্ষণ পরিচিতি",
      "Commit": "বিল্ড commit",
      "Official": "অফিসিয়াল রেফারেন্স সংস্করণ",
      "Unavailable": "এখনও পাওয়া যায়নি",
      "Note": "নির্বাচিত সংশোধন অন্তর্ভুক্ত, সম্পূর্ণ অফিসিয়াল v2.16.1 নয়। অফিসিয়াল সংস্করণ তথ্য কেবল রেফারেন্সের জন্য।",
    },
    "ProviderSetup": {
      "ModelIdPlaceholder": "মডেল ID@প্রদানকারী",
      "Provider": "প্রদানকারী",
      "ProviderHelp": "ডিফল্ট মডেল ব্যবহার করতে প্রদানকারী বেছে API Key লিখুন",
      "ProviderKeyPlaceholder": "এই প্রদানকারীর API Key লিখুন",
      "CurrentModel": "বর্তমান কথোপকথনের মডেল",
      "DefaultModel": "ডিফল্ট মডেল",
      "ModelHelp": "উন্নত সেটিংসে ইন্টারফেস ও নিজস্ব মডেল পরিবর্তন করুন",
      "TestModel": "বর্তমান মডেল পরীক্ষা করুন",
      "TestHelp": "একটি ছোট অনুরোধ পাঠায়, API খরচ হতে পারে; ইতিহাসে সংরক্ষণ করে না",
      "TestConnection": "সংযোগ পরীক্ষা",
      "Testing": "পরীক্ষা চলছে…",
      "Advanced": "উন্নত সেটিংস",
      "OfficialURL": "অফিসিয়াল ঠিকানা",
      "DefaultRoute": "ডিফল্টভাবে এই সাইটের পথ ব্যবহার করে",
    },
    "TTS": {
      "Enable": {
        "Title": "TTS চালু করুন",
        "SubTitle": "পাঠ্য থেকে কথন চালু করুন",
      },
      "Autoplay": {
        "Title": "স্বয়ংক্রিয় চালনা চালু করুন",
        "SubTitle": "কথন তৈরি করে স্বয়ংক্রিয় চালায়; আগে TTS চালু করুন",
      },
      "Model": "মডেল (model)",
      "Engine": "TTS ইঞ্জিন",
      "Voice": {
        "Title": "কণ্ঠ",
        "SubTitle": "তৈরি করা অডিওর কণ্ঠ",
      },
      "Speed": {
        "Title": "গতি",
        "SubTitle": "তৈরি করা অডিওর গতি",
      },
    },
    "Realtime": {
      "Enable": {
        "Title": "তাৎক্ষণিক কথোপকথন",
        "SubTitle": "তাৎক্ষণিক কথোপকথন চালু করুন",
      },
      "Provider": {
        "Title": "মডেল প্রদানকারী",
        "SubTitle": "প্রদানকারী বদলান",
      },
      "Model": {
        "Title": "মডেল (model)",
        "SubTitle": "একটি মডেল বাছুন",
      },
      "ApiKey": {
        "Title": "API Key",
        "SubTitle": "API Key",
        "Placeholder": "API Key",
      },
      "Azure": {
        "Endpoint": {
          "Title": "ইন্টারফেসের ঠিকানা",
          "SubTitle": "ইন্টারফেসের ঠিকানা",
        },
        "Deployment": {
          "Title": "স্থাপনার নাম",
          "SubTitle": "স্থাপনার নাম",
        },
      },
      "Temperature": {
        "Title": "যাদুকরিতা (temperature)",
        "SubTitle": "মান বাড়ালে উত্তর বেশি এলোমেলো হবে",
      },
    },
    "SafetyLabels": {
      "BLOCK_NONE": "কোনোটিই নয়",
      "BLOCK_ONLY_HIGH": "শুধু উচ্চ",
      "BLOCK_MEDIUM_AND_ABOVE": "মাঝারি ও তার বেশি",
      "BLOCK_LOW_AND_ABOVE": "নিম্ন ও তার বেশি",
    },
  },
  Store: {
    DefaultTopic: "নতুন চ্যাট",
    BotHello: "আপনার জন্য কিছু করতে পারি?",
    Error: "একটি ত্রুটি ঘটেছে, পরে আবার চেষ্টা করুন",
    Prompt: {
      History: (content: string) =>
        "এটি পূর্বের চ্যাটের সারাংশ হিসেবে ব্যবহৃত হবে: " + content,
      Topic:
        "চার থেকে পাঁচটি শব্দ ব্যবহার করে এই বাক্যের সংক্ষিপ্ত থিম দিন, ব্যাখ্যা, বিরাম চিহ্ন, ভাষা, অতিরিক্ত টেক্সট বা বোল্ড না ব্যবহার করুন। যদি কোনো থিম না থাকে তবে সরাসরি 'বেকার' বলুন",
      Summarize:
        "আলোচনার বিষয়বস্তু সংক্ষিপ্তভাবে সারাংশ করুন, পরবর্তী কনটেক্সট প্রম্পট হিসেবে ব্যবহারের জন্য, ২০০ শব্দের মধ্যে সীমাবদ্ধ রাখুন",
    },
  },
  Copy: {
    Success: "ক্লিপবোর্ডে লেখা হয়েছে",
    Failed: "কপি ব্যর্থ হয়েছে, দয়া করে ক্লিপবোর্ড অনুমতি প্রদান করুন",
  },
  Download: {
    Success: "বিষয়বস্তু আপনার ডিরেক্টরিতে ডাউনলোড করা হয়েছে।",
    Failed: "ডাউনলোড ব্যর্থ হয়েছে।",
  },
  Context: {
    Toast: (x: any) => `${x}টি পূর্বনির্ধারিত প্রম্পট অন্তর্ভুক্ত`,
    Edit: "বর্তমান চ্যাট সেটিংস",
    Add: "একটি নতুন চ্যাট যোগ করুন",
    Clear: "কনটেক্সট পরিষ্কার করা হয়েছে",
    Revert: "কনটেক্সট পুনরুদ্ধার করুন",
  },
  Plugin: {
    Name: "প্লাগইন",
  
    "Accessibility": {
      "Create": "নতুন তৈরি করুন: প্লাগইন",
      "Edit": "সম্পাদনা করুন: প্লাগইন",
      "Save": "সংরক্ষণ: প্লাগইন",
      "SchemaUrl": "প্লাগইন Schema URL",
      "LoadSchema": "URL থেকে লোড করুন: প্লাগইন Schema",
      "Schema": "প্লাগইন Schema",
    },
    "Page": {
      "Title": "প্লাগইনসমূহ",
      "SubTitle": (count: number) => "প্লাগইনসমূহ: " + count,
      "Search": "বার্তা অনুসন্ধান করুন — প্লাগইনসমূহ",
      "Create": "নতুন তৈরি করুন",
      "Find": "GitHub-এ প্লাগইন খুঁজুন: ",
    },
    "Item": {
      "Info": (count: number) => "পদ্ধতিসমূহ: " + count,
      "View": "দেখুন",
      "Edit": "সম্পাদনা করুন",
      "Delete": "মুছে ফেলুন",
      "DeleteConfirm": "মুছে ফেলার জন্য নিশ্চিত করুন?",
    },
    "Auth": {
      "None": "প্রমাণীকরণ নেই",
      "Basic": "Basic",
      "Bearer": "Bearer",
      "Custom": "নিজস্ব",
      "CustomHeader": "প্যারামিটারের নাম",
      "Token": "Token",
      "Proxy": "প্রক্সি ব্যবহার করুন",
      "ProxyDescription": "CORS সীমাবদ্ধতা এড়াতে প্রক্সি ব্যবহার করুন",
      "Location": "অবস্থান",
      "LocationHeader": "Header",
      "LocationQuery": "Query",
      "LocationBody": "Body",
    },
    "EditModal": {
      "Title": (readonly: boolean) => "সম্পাদনা করুন: প্লাগইন" + (readonly ? " (শুধু পড়ার জন্য)" : ""),
      "Download": "ডাউনলোড",
      "Auth": "প্রমাণীকরণের ধরন",
      "Content": "OpenAPI Schema",
      "Load": "URL থেকে লোড করুন",
      "Method": "পদ্ধতিসমূহ",
      "Error": "অবৈধ OpenAPI Schema",
    },
  },
  FineTuned: {
    Sysmessage: "আপনি একজন সহকারী",
  },
  SearchChat: {
    Name: "অনুসন্ধান",
    Page: {
      Title: "চ্যাট রেকর্ড অনুসন্ধান করুন",
      Search: "অনুসন্ধান কীওয়ার্ড লিখুন",
      NoResult: "কোন ফলাফল পাওয়া যায়নি",
      NoData: "কোন তথ্য নেই",
      Loading: "লোড হচ্ছে",

      SubTitle: (count: number) => `${count} টি ফলাফল পাওয়া গেছে`,
    },
    Item: {
      View: "দেখুন",
    },
  },
  Mask: {
    Name: "মাস্ক",
    Page: {
      Title: "পূর্বনির্ধারিত চরিত্র মাস্ক",
      SubTitle: (count: number) => `${count}টি পূর্বনির্ধারিত চরিত্র সংজ্ঞা`,
      Search: "চরিত্র মাস্ক অনুসন্ধান করুন",
      Create: "নতুন তৈরি করুন",
    },
    Item: {
      Info: (count: number) => `ভিতরে ${count}টি পূর্বনির্ধারিত চ্যাট রয়েছে`,
      Chat: "চ্যাট",
      View: "দেখুন",
      Edit: "সম্পাদনা করুন",
      Delete: "মুছে ফেলুন",
      DeleteConfirm: "মুছে ফেলার জন্য নিশ্চিত করুন?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `পূর্বনির্ধারিত মাস্ক সম্পাদনা ${readonly ? "（পঠনযোগ্য）" : ""}`,
      Download: "পূর্বনির্ধারিত ডাউনলোড করুন",
      Clone: "পূর্বনির্ধারিত ক্লোন করুন",
    },
    Config: {
      Avatar: "চরিত্রের চিত্র",
      Name: "চরিত্রের নাম",
      Sync: {
        Title: "গ্লোবাল সেটিংস ব্যবহার করুন",
        SubTitle: "বর্তমান চ্যাট গ্লোবাল মডেল সেটিংস ব্যবহার করছে কি না",
        Confirm:
          "বর্তমান চ্যাটের কাস্টম সেটিংস স্বয়ংক্রিয়ভাবে ওভাররাইট হবে, গ্লোবাল সেটিংস সক্রিয় করতে নিশ্চিত?",
      },
      HideContext: {
        Title: "পূর্বনির্ধারিত চ্যাট লুকান",
        SubTitle:
          "লুকানোর পরে পূর্বনির্ধারিত চ্যাট চ্যাট ইন্টারফেসে প্রদর্শিত হবে না",
      },
      Share: {
        Title: "এই মাস্ক শেয়ার করুন",
        SubTitle: "এই মাস্কের সরাসরি লিঙ্ক তৈরি করুন",
        Action: "লিঙ্ক কপি করুন",
      },
    
      "Artifacts": {
        "Title": "Artifacts চালু করুন",
        "SubTitle": "Artifacts দিয়ে HTML পৃষ্ঠা দেখান",
      },
      "CodeFold": {
        "Title": "কোড ভাঁজ চালু করুন",
        "SubTitle": "দীর্ঘ কোড ব্লক স্বয়ংক্রিয়ভাবে ভাঁজ করুন",
      },
    },
  },
  NewChat: {
    Return: "ফিরে যান",
    Skip: "ডাইরেক্ট শুরু করুন",
    NotShow: "আবার প্রদর্শন করবেন না",
    ConfirmNoShow:
      "নিশ্চিত যে নিষ্ক্রিয় করবেন? নিষ্ক্রিয় করার পরে সেটিংসে পুনরায় সক্রিয় করা যাবে।",
    Title: "একটি মাস্ক নির্বাচন করুন",
    SubTitle: "এখন শুরু করুন, মাস্কের পিছনের চিন্তা প্রতিক্রিয়া করুন",
    More: "সব দেখুন",
  },

  URLCommand: {
    Code: "লিঙ্কে অ্যাক্সেস কোড ইতিমধ্যে অন্তর্ভুক্ত রয়েছে, অটো পূরণ করতে চান?",
    Settings:
      "লিঙ্কে প্রাক-নির্ধারিত সেটিংস অন্তর্ভুক্ত রয়েছে, অটো পূরণ করতে চান?",
  },

  UI: {
    Confirm: "নিশ্চিত করুন",
    Cancel: "বাতিল করুন",
    Close: "বন্ধ করুন",
    Create: "নতুন তৈরি করুন",
    Edit: "সম্পাদনা করুন",
    Export: "রপ্তানি করুন",
    Import: "আমদানি করুন",
    Sync: "সিঙ্ক",
    Config: "কনফিগারেশন",
  
    "Save": "সংরক্ষণ",
    "Loading": "লোড হচ্ছে…",
    "Seed": "এলোমেলো বীজ",
    "User": "ব্যবহারকারী",
    "Assistant": "সহকারী",
    "System": "সিস্টেম",
    "Text": "পাঠ্য",
    "Image": "ছবি",
    "Standard": "সাধারণ",
    "Vivid": "উজ্জ্বল",
    "Natural": "প্রাকৃতিক",
    "ErrorTitle": "একটি ত্রুটি হয়েছে",
    "ReportError": "এই ত্রুটি জানান",
    "ClearData": "সব তথ্য মুছুন",
    "AssistantTagline": "আপনার নিজস্ব AI সহকারী তৈরি করুন।",
    "EmptyPrompt": "নতুন নির্দেশনা",
    "EmptyPromptContent": "নির্দেশনার বিষয়বস্তু লিখুন",
    "AllFiles": "সব ফাইল",
  
    "Refresh": "আবার লোড করুন",
    "HidePassword": "পাসওয়ার্ড লুকান",
  },
  Exporter: {
    Description: {
      Title: "শুধুমাত্র কনটেক্সট পরিষ্কার করার পরে বার্তাগুলি প্রদর্শিত হবে",
    },
    Model: "মডেল",
    Messages: "বার্তা",
    Topic: "থিম",
    Time: "সময়",
  },

  "Discovery": {
    "Name": "আবিষ্কার",
  },
  "Mcp": {
    "Name": "MCP",
    "UI": {
      "Market": "MCP বাজার",
      "PresetLoadFailed": "পূর্বনির্ধারিত সার্ভার লোড ব্যর্থ",
      "InitFailed": "প্রাথমিক অবস্থা লোড ব্যর্থ",
      "ConfigSaved": "সার্ভারের কনফিগারেশন সংরক্ষিত",
      "ConfigSaveFailed": "কনফিগারেশন সংরক্ষণ ব্যর্থ",
      "ToolsFailed": "সরঞ্জাম লোড ব্যর্থ",
      "Stopped": "বন্ধ",
      "StopFailed": "সার্ভার বন্ধ করা ব্যর্থ",
      "StartFailed": "সার্ভার চালু করা ব্যর্থ; লগ পরীক্ষা করুন",
      "RestartingClients": "সব ক্লায়েন্ট পুনরায় চালু হচ্ছে",
      "RestartFailed": "ক্লায়েন্ট পুনরায় চালু করা ব্যর্থ",
      "Initializing": "আরম্ভ হচ্ছে",
      "NoServers": "কোনো সার্ভার নেই",
      "OpenRepo": "কোড ভান্ডার খুলুন",
      "Start": "চালু করুন",
      "Tools": "সরঞ্জাম",
      "Add": "যোগ করুন",
      "RestartAll": "সব পুনরায় চালু করুন",
      "Search": "MCP সার্ভার খুঁজুন",
      "ConfigureServer": "সার্ভার কনফিগার করুন",
      "ServerDetails": "সার্ভারের বিস্তারিত",
      "NoTools": "কোনো সরঞ্জাম নেই",
      "LoadingPresets": "পূর্বনির্ধারিত সার্ভারের তালিকা লোড হচ্ছে…",
      "ConfiguredServers": "কনফিগার করা সার্ভার",
      "UpdatingConfig": "কনফিগারেশন হালনাগাদ হচ্ছে…",
      "CreatingClient": "MCP ক্লায়েন্ট তৈরি হচ্ছে…",
      "Stopping": "সার্ভার বন্ধ হচ্ছে…",
      "Starting": "সার্ভার চালু হচ্ছে…",
      "RestartingServers": "সব সার্ভার পুনরায় চালু হচ্ছে…",
      "ExecutionFailed": "MCP নির্বাহ ব্যর্থ",
    },
  },
  "SdPanel": {
    "Prompt": "ছবির নির্দেশনা",
    "NegativePrompt": "নেতিবাচক নির্দেশনা",
    "PleaseInput": (name: string) => name + " — একটি মান লিখুন",
    "AspectRatio": "আকৃতির অনুপাত",
    "ImageStyle": "ছবির ধরন",
    "OutFormat": "আউটপুট বিন্যাস",
    "AIModel": "মডেল (model)",
    "ModelVersion": "মডেল সংস্করণ",
    "Submit": "তৈরি করুন",
    "ParamIsRequired": (name: string) => name + ": আবশ্যক",
    "Styles": {
      "D3Model": "ত্রিমাত্রিক মডেল",
      "AnalogFilm": "অ্যানালগ ফিল্ম",
      "Anime": "জাপানি অ্যানিমেশন",
      "Cinematic": "সিনেমাটিক",
      "ComicBook": "কমিকস",
      "DigitalArt": "ডিজিটাল শিল্প",
      "Enhance": "উন্নত",
      "FantasyArt": "কল্পশিল্প",
      "Isometric": "সমমিতিক",
      "LineArt": "রেখাচিত্র",
      "LowPoly": "কম বহুভুজ",
      "ModelingCompound": "মডেলিং মাটি",
      "NeonPunk": "নিয়ন পাঙ্ক",
      "Origami": "কাগজ ভাঁজ",
      "Photographic": "ফটোগ্রাফিক",
      "PixelArt": "পিক্সেল শিল্প",
      "TileTexture": "টালির বুনট",
    },
  },
  "Sd": {
    "SubTitle": (count: number) => "ছবিসমূহ: " + count,
    "Actions": {
      "Params": "প্যারামিটার দেখুন",
      "Copy": "অনুলিপি করুন: ছবির নির্দেশনা",
      "Delete": "মুছে ফেলুন",
      "Retry": "পুনরায় চেষ্টা করুন",
      "ReturnHome": "মূল পাতায় ফিরুন",
      "History": "ইতিহাস",
    },
    "EmptyRecord": "এখনও কোনো ছবি নেই",
    "Status": {
      "Name": "অবস্থা",
      "Success": "সফল",
      "Error": "ত্রুটি",
      "Wait": "অপেক্ষমাণ",
      "Running": "চলছে",
    },
    "Danger": {
      "Delete": "মুছে ফেলার জন্য নিশ্চিত করুন?",
    },
    "GenerateParams": "তৈরির প্যারামিটার",
    "Detail": "বিস্তারিত",
  },
  "ApiError": {
    "Timeout": "অনুরোধের সময়সীমা পেরিয়েছে। আবার চেষ্টা করুন বা উন্নত সেটিংসে ঠিকানা দেখুন।",
    "Quota": "প্রদানকারীর কোটা অপর্যাপ্ত। ব্যালেন্স, পেমেন্ট ও ব্যবহারসীমা দেখুন।",
    "AccessCode": "সাইটের প্রবেশ কোড অবৈধ। কোডটি পরীক্ষা করুন।",
    "InvalidKey": "API Key অবৈধ বা মেয়াদোত্তীর্ণ। নির্বাচিত প্রদানকারীর Key দেখুন।",
    "Permission": "প্রবেশাধিকার প্রত্যাখ্যাত। মডেলের অনুমতি ও আঞ্চলিক সীমা দেখুন।",
    "Model": "মডেল বা ইন্টারফেস পাওয়া যায়নি। উন্নত সেটিংসে মডেল ID ও ঠিকানা দেখুন।",
    "RateLimit": "অনেক অনুরোধ বা ব্যবহারসীমা পূর্ণ। পরে চেষ্টা করুন এবং কোটা দেখুন।",
    "Parameters": "অনুরোধের প্যারামিটার অসামঞ্জস্যপূর্ণ। উন্নত সেটিংসে মডেল ID ও প্যারামিটার দেখুন।",
    "Unavailable": "প্রদানকারী সাময়িকভাবে অনুপলব্ধ। পরে চেষ্টা করুন।",
    "Empty": "বৈধ বিষয়বস্তু পাওয়া যায়নি। মডেলের অবস্থা দেখে আবার চেষ্টা করুন।",
    "Network": "নেটওয়ার্ক সংযোগ ব্যর্থ। নেটওয়ার্ক, ঠিকানা ও তৃতীয় পক্ষের CORS সেটিংস দেখুন।",
    "Generic": "অনুরোধ ব্যর্থ। প্রদানকারীর API Key, মডেল ও ইন্টারফেস সেটিংস দেখুন।",
  },
};

export default bn;
