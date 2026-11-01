import type { LocaleType } from "./index";
import { getClientConfig } from "../config/client";
import { SAAS_CHAT_UTM_URL } from "@/app/constant";
const isApp = !!getClientConfig()?.isApp;

const tr: LocaleType = {
  WIP: "Çalışma devam ediyor...",
  Error: {
    Unauthorized: isApp
      ? `😆 Sohbet bazı sorunlarla karşılaştı, endişelenmeyin:
    \\ 1️⃣ Eğer sıfır yapılandırma ile başlamak istiyorsanız, [buraya tıklayarak hemen sohbete başlayın 🚀](${SAAS_CHAT_UTM_URL})
    \\ 2️⃣ Kendi OpenAI kaynaklarınızı kullanmak istiyorsanız, [buraya tıklayarak](/#/settings) ayarları değiştirin ⚙️`
      : `😆 Sohbet bazı sorunlarla karşılaştı, endişelenmeyin:
    \ 1️⃣ Eğer sıfır yapılandırma ile başlamak istiyorsanız, [buraya tıklayarak hemen sohbete başlayın 🚀](${SAAS_CHAT_UTM_URL})
    \ 2️⃣ Eğer özel dağıtım sürümü kullanıyorsanız, [buraya tıklayarak](/#/auth) erişim anahtarını girin 🔑
    \ 3️⃣ Kendi OpenAI kaynaklarınızı kullanmak istiyorsanız, [buraya tıklayarak](/#/settings) ayarları değiştirin ⚙️
 `,
  },
  Auth: {
    Title: "Şifre Gerekli",
    Tips: "Yönetici şifre doğrulamasını etkinleştirdi, lütfen aşağıya erişim kodunu girin",
    SubTips: "Veya OpenAI veya Google API anahtarınızı girin",
    Input: "Erişim kodunu buraya girin",
    Confirm: "Onayla",
    Later: "Sonra",
    Return: "Geri",
    SaasTips: "Ayarlar çok karmaşık, hemen kullanmak istiyorum",
    TopTips:
      "🥳 NextChat AI lansman teklifi, OpenAI o1, GPT-4o, Claude-3.5 ve en son büyük modelleri şimdi açın",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} konuşma`,
  },
  Chat: {
    SubTitle: (count: number) => `Toplam ${count} konuşma`,
    EditMessage: {
      Title: "Mesaj Kayıtlarını Düzenle",
      Topic: {
        Title: "Sohbet Konusu",
        SubTitle: "Geçerli sohbet konusunu değiştir",
      },
    },
    Actions: {
      ChatList: "Mesaj listesine bak",
      CompressedHistory: "Sıkıştırılmış geçmişi gör",
      Export: "Sohbet kayıtlarını dışa aktar",
      Copy: "Kopyala",
      Stop: "Durdur",
      Retry: "Yeniden dene",
      Pin: "Sabitlenmiş",
      PinToastContent: "1 konuşma varsayılan ifadeye sabitlendi",
      PinToastAction: "Görünüm",
      Delete: "Sil",
      Edit: "Düzenle",
      RefreshTitle: "Başlığı Yenile",
      RefreshToast: "Başlık yenileme isteği gönderildi",
    
      "FullScreen": "Tam ekran",
      "Speech": "Sesli oku",
      "StopSpeech": "Durdur",
    },
    Commands: {
      new: "Yeni sohbet",
      newm: "Maske ile yeni sohbet oluştur",
      next: "Sonraki sohbet",
      prev: "Önceki sohbet",
      clear: "Konteksti temizle",
      del: "Sohbeti sil",
    
      "fork": "Sohbeti kopyala",
    },
    InputActions: {
      Stop: "Yanıtı durdur",
      ToBottom: "En alta git",
      Theme: {
        auto: "Otomatik tema",
        light: "Açık mod",
        dark: "Koyu mod",
      },
      Prompt: "Kısayol komutu",
      Masks: "Tüm maskeler",
      Clear: "Sohbeti temizle",
      Settings: "Sohbet ayarları",
      UploadImage: "Resim yükle",
    },
    Rename: "Sohbeti yeniden adlandır",
    Typing: "Yazıyor…",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} gönder`;
      if (submitKey === "Enter") {
        inputHints += " Shift + Enter satır sonu için";
      }
      return inputHints + " / tamamlama için, : komutlar için";
    },
    Send: "Gönder",
    Config: {
      Reset: "Hafızayı temizle",
      SaveAs: "Maske olarak kaydet",
    },
    IsContext: "Varsayılan ifade",
  
    "StartSpeak": "Konuşmaya başla",
    "StopSpeak": "Durdur",
    "ShortcutKey": {
      "Title": "Klavye kısayolları",
      "newChat": "Yeni sohbet aç",
      "focusInput": "Giriş alanına odaklan",
      "copyLastMessage": "Son yanıtı kopyala",
      "copyLastCode": "Son kod bloğunu kopyala",
      "showShortcutKey": "Kısayolları göster",
      "clearContext": "Sohbeti temizle",
    },
  },
  Export: {
    Title: "Sohbet kayıtlarını paylaş",
    Copy: "Hepsini kopyala",
    Download: "Dosyayı indir",
    Share: "ShareGPT'ye paylaş",
    MessageFromYou: "Kullanıcı",
    MessageFromChatGPT: "ChatGPT",
    Format: {
      Title: "Dışa aktarma formatı",
      SubTitle: "Markdown metni veya PNG resmi olarak dışa aktarabilirsiniz",
    },
    IncludeContext: {
      Title: "Maske bağlamını dahil et",
      SubTitle: "Mesajlarda maske bağlamını göstermek ister misiniz",
    },
    Steps: {
      Select: "Seç",
      Preview: "Önizleme",
    },
    Image: {
      Toast: "Ekran görüntüsü oluşturuluyor",
      Modal: "Resmi uzun basın veya sağ tıklayın ve kaydedin",
    },
  
    "Artifacts": {
      "Title": "Artifacts paylaş",
      "Error": "Artifacts paylaş — Hata",
    },
  },
  Select: {
    Search: "Mesajları ara",
    All: "Hepsini seç",
    Latest: "Son birkaç mesaj",
    Clear: "Seçimi temizle",
  },
  Memory: {
    Title: "Geçmiş Özeti",
    EmptyContent: "Sohbet içeriği çok kısa, özetleme gerek yok",
    Send: "Sohbet kayıtlarını otomatik olarak sıkıştır ve bağlam olarak gönder",
    Copy: "Özeti kopyala",
    Reset: "[kullanılmadı]",
    ResetConfirm: "Geçmiş özetini temizlemek istediğinize emin misiniz?",
  },
  Home: {
    NewChat: "Yeni sohbet",
    DeleteChat: "Seçilen sohbeti silmek istediğinize emin misiniz?",
    DeleteToast: "Sohbet silindi",
    Revert: "Geri al",
  },
  Settings: {
    Title: "Ayarlar",
    SubTitle: "Tüm ayar seçenekleri",

    Danger: {
      Reset: {
        Title: "Tüm ayarları sıfırla",
        SubTitle: "Tüm ayarları varsayılan değerlere sıfırla",
        Action: "Hemen sıfırla",
        Confirm: "Tüm ayarları sıfırlamak istediğinizden emin misiniz?",
      },
      Clear: {
        Title: "Tüm verileri temizle",
        SubTitle: "Tüm sohbet ve ayar verilerini temizle",
        Action: "Hemen temizle",
        Confirm:
          "Tüm sohbet ve ayar verilerini temizlemek istediğinizden emin misiniz?",
      },
    },
    Lang: {
      Name: "Dil", // Dikkat: yeni bir çeviri eklemek isterseniz, bu değeri çevirmeyin, `Language` olarak bırakın
      All: "Tüm diller",
    },
    Avatar: "Profil Resmi",
    FontSize: {
      Title: "Yazı Boyutu",
      SubTitle: "Sohbet içeriğinin yazı boyutu",
    },
    FontFamily: {
      Title: "Sohbet Yazı Tipi",
      SubTitle:
        "Sohbet içeriğinin yazı tipi, boş bırakıldığında küresel varsayılan yazı tipi uygulanır",
      Placeholder: "Yazı Tipi Adı",
    },
    InjectSystemPrompts: {
      Title: "Sistem Seviyesi İpucu Enjeksiyonu",
      SubTitle: "Her isteğin başına ChatGPT benzeri bir sistem ipucu ekle",
    },
    InputTemplate: {
      Title: "Kullanıcı Girdisi Ön İşleme",
      SubTitle: "Kullanıcının en son mesajı bu şablona doldurulur",
    },

    Update: {
      Version: (x: string) => `Mevcut sürüm: ${x}`,
      IsLatest: "En son sürüm",
      CheckUpdate: "Güncellemeleri kontrol et",
      IsChecking: "Güncellemeler kontrol ediliyor...",
      FoundUpdate: (x: string) => `Yeni sürüm bulundu: ${x}`,
      GoToUpdate: "Güncellemeye git",
    
      "Success": "Güncelleme başarılı",
      "Failed": "Güncelleme başarısız",
    },
    SendKey: "Gönderme Tuşu",
    Theme: "Tema",
    TightBorder: "Sınır Yok Modu",
    SendPreviewBubble: {
      Title: "Önizleme Balonu",
      SubTitle: "Markdown içeriğini önizleme balonunda görüntüle",
    },
    AutoGenerateTitle: {
      Title: "Başlığı Otomatik Oluştur",
      SubTitle: "Sohbet içeriğine göre uygun başlık oluştur",
    },
    Sync: {
      CloudState: "Bulut Verisi",
      NotSyncYet: "Henüz senkronize edilmedi",
      Success: "Senkronizasyon başarılı",
      Fail: "Senkronizasyon başarısız",

      Config: {
        Modal: {
          Title: "Bulut Senkronizasyonu Yapılandır",
          Check: "Kullanılabilirliği kontrol et",
        },
        SyncType: {
          Title: "Senkronizasyon Türü",
          SubTitle: "Tercih ettiğiniz senkronizasyon sunucusunu seçin",
        },
        Proxy: {
          Title: "Proxy'yi Etkinleştir",
          SubTitle:
            "Tarayıcıda senkronize ederken proxy'yi etkinleştirin, aksi takdirde çapraz kaynak kısıtlamalarıyla karşılaşabilirsiniz",
        },
        ProxyUrl: {
          Title: "Proxy Adresi",
          SubTitle: "Sadece bu projeye ait çapraz kaynak proxy için",
        },

        WebDav: {
          Endpoint: "WebDAV Adresi",
          UserName: "Kullanıcı Adı",
          Password: "Şifre",
        },

        UpStash: {
          Endpoint: "UpStash Redis REST Url",
          UserName: "Yedekleme Adı",
          Password: "UpStash Redis REST Token",
        },
      },

      LocalState: "Yerel Veri",
      Overview: (overview: any) => {
        return `${overview.chat} konuşma, ${overview.message} mesaj, ${overview.prompt} ipucu, ${overview.mask} maske`;
      },
      ImportFailed: "İçeri aktarma başarısız",
    },
    Mask: {
      Splash: {
        Title: "Maske Başlangıç Sayfası",
        SubTitle:
          "Yeni sohbet başlatıldığında maske başlangıç sayfasını göster",
      },
      Builtin: {
        Title: "Yerleşik Maskeleri Gizle",
        SubTitle: "Tüm maskeler listesindeki yerleşik maskeleri gizle",
      },
    },
    Prompt: {
      Disable: {
        Title: "İpucu Tamamlamayı Devre Dışı Bırak",
        SubTitle:
          "Giriş kutusunun başına / yazarak otomatik tamamlamayı tetikle",
      },
      List: "Özelleştirilmiş İpucu Listesi",
      ListCount: (builtin: number, custom: number) =>
        `Yerleşik ${builtin} tane, kullanıcı tanımlı ${custom} tane`,
      Edit: "Düzenle",
      Modal: {
        Title: "İpucu Listesi",
        Add: "Yeni Ekle",
        Search: "İpucu Ara",
      },
      EditModal: {
        Title: "İpucu Düzenle",
      },
    },
    HistoryCount: {
      Title: "Ekli Geçmiş Mesaj Sayısı",
      SubTitle: "Her istekte taşınan geçmiş mesaj sayısı",
    },
    CompressThreshold: {
      Title: "Geçmiş Mesaj Uzunluğu Sıkıştırma Eşiği",
      SubTitle:
        "Sıkıştırılmamış geçmiş mesaj bu değeri aştığında sıkıştırma yapılır",
    },

    Usage: {
      Title: "Bakiye Sorgulama",
      SubTitle(used: any, total: any) {
        return `Bu ay kullanılan $${used}, toplam abonelik ücreti $${total}`;
      },
      IsChecking: "Kontrol ediliyor…",
      Check: "Yeniden kontrol et",
      NoAccess:
        "Bakiye görüntülemek için API Anahtarı veya erişim şifresi girin",
    },

    Access: {
      SaasStart: {
        Title: "NextChat AI kullanın",
        Label: "(En maliyet etkin çözüm)",
        SubTitle:
          "NextChat tarafından resmi olarak yönetilmektedir, yapılandırma olmadan hemen kullanıma hazırdır, OpenAI o1, GPT-4o, Claude-3.5 gibi en son büyük modelleri destekler",
        ChatNow: "Şimdi sohbet et",
      },

      AccessCode: {
        Title: "Erişim Şifresi",
        SubTitle: "Yönetici şifreli erişimi etkinleştirdi",
        Placeholder: "Erişim şifrenizi girin",
      },
      CustomEndpoint: {
        Title: "Özelleştirilmiş API",
        SubTitle:
          "Özelleştirilmiş Azure veya OpenAI hizmeti kullanmak ister misiniz?",
      },
      Provider: {
        Title: "Model Sağlayıcısı",
        SubTitle: "Farklı sağlayıcılara geçiş yapın",
      },
      OpenAI: {
        ApiKey: {
          Title: "OpenAI API Key",
          SubTitle:
            "Özelleştirilmiş OpenAI Anahtarı kullanarak şifreli erişim kısıtlamalarını atlayın",
          Placeholder: "OpenAI API Anahtarı",
        },

        Endpoint: {
          Title: "API Adresi",
          SubTitle: "Varsayılan adres dışında, http(s):// içermelidir",
        },
      },
      Azure: {
        ApiKey: {
          Title: "Azure API Key",
          SubTitle:
            "Özelleştirilmiş Azure Anahtarı kullanarak şifreli erişim kısıtlamalarını atlayın",
          Placeholder: "Azure API Anahtarı",
        },

        Endpoint: {
          Title: "API Adresi",
          SubTitle: "Örnek:",
        },

        ApiVerion: {
          Title: "API Versiyonu (azure api version)",
          SubTitle: "Belirli bir versiyonu seçin",
        },
      },
      Anthropic: {
        ApiKey: {
          Title: "Anthropic API Key",
          SubTitle:
            "Özelleştirilmiş Anthropic Anahtarı kullanarak şifreli erişim kısıtlamalarını atlayın",
          Placeholder: "Anthropic API Anahtarı",
        },

        Endpoint: {
          Title: "API Adresi",
          SubTitle: "Örnek:",
        },

        ApiVerion: {
          Title: "API Versiyonu (claude api version)",
          SubTitle: "Belirli bir API versiyonunu seçin",
        },
      },
      Google: {
        ApiKey: {
          Title: "Google API Key",
          SubTitle: "Google AI'den API Anahtarınızı alın",
          Placeholder: "Google AI Studio API Anahtarınızı girin",
        },

        Endpoint: {
          Title: "Uç Nokta Adresi",
          SubTitle: "Örnek:",
        },

        ApiVersion: {
          Title: "API Versiyonu (sadece gemini-pro)",
          SubTitle: "Belirli bir API versiyonunu seçin",
        },
        GoogleSafetySettings: {
          Title: "Google Güvenlik Filtreleme Seviyesi",
          SubTitle: "İçerik filtreleme seviyesini ayarlayın",
        },
      },
      Baidu: {
        ApiKey: {
          Title: "Baidu API Key",
          SubTitle: "Özelleştirilmiş Baidu API Anahtarı kullanın",
          Placeholder: "Baidu API Anahtarı",
        },
        SecretKey: {
          Title: "Secret Anahtarı",
          SubTitle: "Özelleştirilmiş Baidu Secret Anahtarı kullanın",
          Placeholder: "Baidu Secret Anahtarı",
        },
        Endpoint: {
          Title: "API Adresi",
          SubTitle: "Özelleştirilmiş yapılandırma için .env'ye gidin",
        },
      },
      ByteDance: {
        ApiKey: {
          Title: "ByteDance API Key",
          SubTitle: "Özelleştirilmiş ByteDance API Anahtarı kullanın",
          Placeholder: "ByteDance API Anahtarı",
        },
        Endpoint: {
          Title: "API Adresi",
          SubTitle: "Örnek:",
        },
      },
      Alibaba: {
        ApiKey: {
          Title: "Alibaba API Key",
          SubTitle: "Özelleştirilmiş Alibaba Cloud API Anahtarı kullanın",
          Placeholder: "Alibaba Cloud API Anahtarı",
        },
        Endpoint: {
          Title: "API Adresi",
          SubTitle: "Örnek:",
        },
      },
      CustomModel: {
        Title: "Özelleştirilmiş Model Adı",
        SubTitle:
          "Özelleştirilmiş model seçenekleri ekleyin, İngilizce virgül ile ayırın",
      },
    
      "Tencent": {
        "ApiKey": {
          "Title": "Tencent API Key",
          "SubTitle": "Özel API Key kullan",
          "Placeholder": "Tencent API Key",
        },
        "SecretKey": {
          "Title": "Tencent Secret Key",
          "SubTitle": "Özel kimlik bilgileri kullan — Secret Key",
          "Placeholder": "Tencent Secret Key",
        },
        "Endpoint": {
          "Title": "Arayüz adresi",
          "SubTitle": "Bu değeri .env içinde yapılandırın",
        },
      },
      "Moonshot": {
        "ApiKey": {
          "Title": "Moonshot API Key",
          "SubTitle": "Özel API Key kullan",
          "Placeholder": "Moonshot API Key",
        },
        "Endpoint": {
          "Title": "Arayüz adresi",
          "SubTitle": "Örnek: ",
        },
      },
      "DeepSeek": {
        "ApiKey": {
          "Title": "DeepSeek API Key",
          "SubTitle": "Özel API Key kullan",
          "Placeholder": "DeepSeek API Key",
        },
        "Endpoint": {
          "Title": "Arayüz adresi",
          "SubTitle": "Örnek: ",
        },
      },
      "XAI": {
        "ApiKey": {
          "Title": "XAI API Key",
          "SubTitle": "Özel API Key kullan",
          "Placeholder": "XAI API Key",
        },
        "Endpoint": {
          "Title": "Arayüz adresi",
          "SubTitle": "Örnek: ",
        },
      },
      "ChatGLM": {
        "ApiKey": {
          "Title": "ChatGLM API Key",
          "SubTitle": "Özel API Key kullan",
          "Placeholder": "ChatGLM API Key",
        },
        "Endpoint": {
          "Title": "Arayüz adresi",
          "SubTitle": "Örnek: ",
        },
      },
      "SiliconFlow": {
        "ApiKey": {
          "Title": "SiliconFlow API Key",
          "SubTitle": "Özel API Key kullan",
          "Placeholder": "SiliconFlow API Key",
        },
        "Endpoint": {
          "Title": "Arayüz adresi",
          "SubTitle": "Örnek: ",
        },
      },
      "Stability": {
        "ApiKey": {
          "Title": "Stability API Key",
          "SubTitle": "Özel API Key kullan",
          "Placeholder": "Stability API Key",
        },
        "Endpoint": {
          "Title": "Arayüz adresi",
          "SubTitle": "Örnek: ",
        },
      },
      "Iflytek": {
        "ApiKey": {
          "Title": "Iflytek API Key",
          "SubTitle": "Özel API Key kullan",
          "Placeholder": "Iflytek API Key",
        },
        "ApiSecret": {
          "Title": "Iflytek API Secret",
          "SubTitle": "Özel kimlik bilgileri kullan — API Secret",
          "Placeholder": "Iflytek API Secret",
        },
        "Endpoint": {
          "Title": "Arayüz adresi",
          "SubTitle": "Örnek: ",
        },
      },
    },

    Model: "Model (model)",
    CompressModel: {
      Title: "Sıkıştırma Modeli",
      SubTitle: "Geçmişi sıkıştırmak için kullanılan model",
    },
    Temperature: {
      Title: "Rastgelelik (temperature)",
      SubTitle: "Değer arttıkça yanıt daha rastgele olur",
    },
    TopP: {
      Title: "Nükleer Örnekleme (top_p)",
      SubTitle:
        "Rastgeleliğe benzer, ancak rastgelelik ile birlikte değiştirmeyin",
    },
    MaxTokens: {
      Title: "Tek Yanıt Limiti (max_tokens)",
      SubTitle: "Tek etkileşimde kullanılan maksimum Token sayısı",
    },
    PresencePenalty: {
      Title: "Konu Tazeliği (presence_penalty)",
      SubTitle: "Değer arttıkça, yeni konulara geçiş olasılığı artar",
    },
    FrequencyPenalty: {
      Title: "Frekans Cezası (frequency_penalty)",
      SubTitle:
        "Değer arttıkça, tekrar eden kelimelerin azalması olasılığı artar",
    },
  
    "ShowPassword": "Parolayı göster",
    "LocalizationInfo": {
      "Edition": "NextChat özel sürüm",
      "Timeout": "Bağlantı testi 30 saniye sonra zaman aşımına uğradı. Ağı ve API adresini kontrol edin.",
      "Success": "Bağlantı başarılı",
      "NoResponse": "Sağlayıcı geçerli bir yanıt vermedi. Model ve arayüz ayarlarını kontrol edin.",
      "Upstream": "Kaynak temel sürüm",
      "Details": "Ayrıntılı sürüm bilgileri",
      "Security": "Güvenlik bakım kimliği",
      "Commit": "Derleme commit’i",
      "Official": "Resmî referans sürüm",
      "Unavailable": "Henüz alınamadı",
      "Note": "Seçilmiş düzeltmeleri içerir; resmî v2.16.1 sürümünün tamamı değildir. Resmî sürüm bilgileri yalnızca referans içindir.",
    },
    "ProviderSetup": {
      "ModelIdPlaceholder": "Model ID@sağlayıcı",
      "Provider": "Sağlayıcı",
      "ProviderHelp": "Varsayılan modeli kullanmak için sağlayıcı seçip API Key girin",
      "ProviderKeyPlaceholder": "Bu sağlayıcının API Key değerini girin",
      "CurrentModel": "Geçerli sohbet modeli",
      "DefaultModel": "Varsayılan model",
      "ModelHelp": "Arayüzü ve özel modelleri gelişmiş ayarlarda düzenleyin",
      "TestModel": "Geçerli sohbet modelini test et",
      "TestHelp": "API ücreti doğurabilecek kısa bir istek gönderir; sohbet geçmişine kaydetmez",
      "TestConnection": "Bağlantıyı test et",
      "Testing": "Test ediliyor…",
      "Advanced": "Gelişmiş ayarlar",
      "OfficialURL": "Resmî adres",
      "DefaultRoute": "Varsayılan olarak bu sitenin yolunu kullanır",
    },
    "TTS": {
      "Enable": {
        "Title": "TTS etkinleştir",
        "SubTitle": "Metinden konuşmaya dönüştürmeyi etkinleştir",
      },
      "Autoplay": {
        "Title": "Otomatik oynatmayı etkinleştir",
        "SubTitle": "Sesi otomatik üret ve oynat; önce TTS etkinleştirilmeli",
      },
      "Model": "Model (model)",
      "Engine": "TTS motoru",
      "Voice": {
        "Title": "Ses",
        "SubTitle": "Üretilen seste kullanılacak ses",
      },
      "Speed": {
        "Title": "Hız",
        "SubTitle": "Üretilen sesin hızı",
      },
    },
    "Realtime": {
      "Enable": {
        "Title": "Gerçek zamanlı sohbet",
        "SubTitle": "Gerçek zamanlı sohbeti etkinleştir",
      },
      "Provider": {
        "Title": "Model sağlayıcısı",
        "SubTitle": "Sağlayıcı değiştir",
      },
      "Model": {
        "Title": "Model (model)",
        "SubTitle": "Model seç",
      },
      "ApiKey": {
        "Title": "API Key",
        "SubTitle": "API Key",
        "Placeholder": "API Key",
      },
      "Azure": {
        "Endpoint": {
          "Title": "Arayüz adresi",
          "SubTitle": "Arayüz adresi",
        },
        "Deployment": {
          "Title": "Dağıtım adı",
          "SubTitle": "Dağıtım adı",
        },
      },
      "Temperature": {
        "Title": "Rastgelelik (temperature)",
        "SubTitle": "Değer arttıkça yanıt daha rastgele olur",
      },
    },
    "SafetyLabels": {
      "BLOCK_NONE": "Yok",
      "BLOCK_ONLY_HIGH": "Yalnızca yüksek",
      "BLOCK_MEDIUM_AND_ABOVE": "Orta ve üzeri",
      "BLOCK_LOW_AND_ABOVE": "Düşük ve üzeri",
    },
  },
  Store: {
    DefaultTopic: "Yeni Sohbet",
    BotHello: "Size nasıl yardımcı olabilirim?",
    Error: "Bir hata oluştu, lütfen daha sonra tekrar deneyin",
    Prompt: {
      History: (content: string) => "Bu, geçmiş sohbetin özeti: " + content,
      Topic:
        "Bu cümlenin dört ila beş kelimelik kısa başlığını doğrudan verin, açıklama yapmayın, noktalama işareti, duygu kelimesi veya fazla metin eklemeyin, kalın yapmayın. Başlık yoksa, doğrudan 'Sohbet' yanıtını verin.",
      Summarize:
        "Sohbet içeriğini kısaca özetleyin, bu özet sonraki bağlam ipucu olarak kullanılacaktır, 200 kelime içinde tutun",
    },
  },
  Copy: {
    Success: "Panoya yazıldı",
    Failed: "Kopyalama başarısız, lütfen panoya erişim izni verin",
  },
  Download: {
    Success: "İçerik dizininize indirildi.",
    Failed: "İndirme başarısız.",
  },
  Context: {
    Toast: (x: any) => `${x} tane önceden tanımlı ipucu içeriyor`,
    Edit: "Mevcut sohbet ayarları",
    Add: "Yeni bir sohbet ekle",
    Clear: "Bağlam temizlendi",
    Revert: "Bağlamı geri getir",
  },
  Plugin: {
    Name: "Eklenti",
  
    "Accessibility": {
      "Create": "Yeni oluştur: Eklenti",
      "Edit": "Düzenle: Eklenti",
      "Save": "Kaydet: Eklenti",
      "SchemaUrl": "Eklenti Schema URL",
      "LoadSchema": "URL’den yükle: Eklenti Schema",
      "Schema": "Eklenti Schema",
    },
    "Page": {
      "Title": "Eklentiler",
      "SubTitle": (count: number) => "Eklentiler: " + count,
      "Search": "Mesajları ara — Eklentiler",
      "Create": "Yeni oluştur",
      "Find": "GitHub’da eklenti bulun: ",
    },
    "Item": {
      "Info": (count: number) => "Yöntemler: " + count,
      "View": "Görünüm",
      "Edit": "Düzenle",
      "Delete": "Sil",
      "DeleteConfirm": "Silmek istediğinizden emin misiniz?",
    },
    "Auth": {
      "None": "Kimlik doğrulama yok",
      "Basic": "Basic",
      "Bearer": "Bearer",
      "Custom": "Özel",
      "CustomHeader": "Parametre adı",
      "Token": "Token",
      "Proxy": "Vekil sunucu kullan",
      "ProxyDescription": "CORS kısıtlamalarını aşmak için vekil sunucu kullan",
      "Location": "Konum",
      "LocationHeader": "Header",
      "LocationQuery": "Query",
      "LocationBody": "Body",
    },
    "EditModal": {
      "Title": (readonly: boolean) => "Düzenle: Eklenti" + (readonly ? " (Salt okunur)" : ""),
      "Download": "İndir",
      "Auth": "Kimlik doğrulama türü",
      "Content": "OpenAPI Schema",
      "Load": "URL’den yükle",
      "Method": "Yöntemler",
      "Error": "Geçersiz OpenAPI Schema",
    },
  },
  FineTuned: {
    Sysmessage: "Sen bir asistansın",
  },
  SearchChat: {
    Name: "Ara",
    Page: {
      Title: "Sohbet geçmişini ara",
      Search: "Arama anahtar kelimelerini girin",
      NoResult: "Sonuç bulunamadı",
      NoData: "Veri yok",
      Loading: "Yükleniyor",

      SubTitle: (count: number) => `${count} sonuç bulundu`,
    },
    Item: {
      View: "Görüntüle",
    },
  },
  Mask: {
    Name: "Maske",
    Page: {
      Title: "Önceden Tanımlı Karakter Maskeleri",
      SubTitle: (count: number) =>
        `${count} tane önceden tanımlı karakter tanımı`,
      Search: "Karakter maskesi ara",
      Create: "Yeni oluştur",
    },
    Item: {
      Info: (count: number) => `${count} tane önceden tanımlı sohbet içeriyor`,
      Chat: "Sohbet",
      View: "Görüntüle",
      Edit: "Düzenle",
      Delete: "Sil",
      DeleteConfirm: "Silmek istediğinizden emin misiniz?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Önceden Tanımlı Maskeyi Düzenle ${readonly ? " (Salt Okunur)" : ""}`,
      Download: "Önceden Tanımlı Maskeyi İndir",
      Clone: "Önceden Tanımlı Maskeyi Kopyala",
    },
    Config: {
      Avatar: "Karakter Profil Resmi",
      Name: "Karakter Adı",
      Sync: {
        Title: "Küresel Ayarları Kullan",
        SubTitle: "Mevcut sohbet küresel model ayarlarını mı kullanacak?",
        Confirm:
          "Mevcut sohbetin özelleştirilmiş ayarları otomatik olarak üzerine yazılacaktır, küresel ayarları etkinleştirmek istediğinizden emin misiniz?",
      },
      HideContext: {
        Title: "Önceden Tanımlı Sohbetleri Gizle",
        SubTitle:
          "Gizlendiğinde, önceden tanımlı sohbetler sohbet ekranında görünmeyecek",
      },
      Share: {
        Title: "Bu Maskeyi Paylaş",
        SubTitle: "Bu maskenin doğrudan bağlantısını oluştur",
        Action: "Bağlantıyı Kopyala",
      },
    
      "Artifacts": {
        "Title": "Artifacts etkinleştir",
        "SubTitle": "Artifacts ile HTML sayfaları görüntüle",
      },
      "CodeFold": {
        "Title": "Kod katlamayı etkinleştir",
        "SubTitle": "Uzun kod bloklarını otomatik katla",
      },
    },
  },
  NewChat: {
    Return: "Geri dön",
    Skip: "Doğrudan başla",
    NotShow: "Bir daha gösterme",
    ConfirmNoShow:
      "Devre dışı bırakmak istediğinizden emin misiniz? Devre dışı bıraktıktan sonra ayarlardan tekrar etkinleştirebilirsiniz.",
    Title: "Bir Maske Seçin",
    SubTitle:
      "Şimdi başlayın ve maskenin arkasındaki zihinle etkileşimde bulunun",
    More: "Tümünü Gör",
  },

  URLCommand: {
    Code: "Bağlantıda erişim kodu bulundu, otomatik olarak doldurulsun mu?",
    Settings:
      "Bağlantıda önceden tanımlı ayarlar bulundu, otomatik olarak doldurulsun mu?",
  },

  UI: {
    Confirm: "Onayla",
    Cancel: "İptal et",
    Close: "Kapat",
    Create: "Yeni oluştur",
    Edit: "Düzenle",
    Export: "Dışa Aktar",
    Import: "İçe Aktar",
    Sync: "Senkronize et",
    Config: "Yapılandır",
  
    "Save": "Kaydet",
    "Loading": "Yükleniyor…",
    "Seed": "Rastgelelik tohumu",
    "User": "Kullanıcı",
    "Assistant": "Asistan",
    "System": "Sistem",
    "Text": "Metin",
    "Image": "Görsel",
    "Standard": "Standart",
    "Vivid": "Canlı",
    "Natural": "Doğal",
    "ErrorTitle": "Bir hata oluştu",
    "ReportError": "Bu hatayı bildir",
    "ClearData": "Tüm verileri temizle",
    "AssistantTagline": "Kendi yapay zekâ asistanınızı oluşturun.",
    "EmptyPrompt": "Yeni istem",
    "EmptyPromptContent": "İstem içeriğini girin",
    "AllFiles": "Tüm dosyalar",
  
    "Refresh": "Yeniden yükle",
    "HidePassword": "Parolayı gizle",
  },
  Exporter: {
    Description: {
      Title: "Sadece bağlam temizlendikten sonraki mesajlar gösterilecektir",
    },
    Model: "Model",
    Messages: "Mesajlar",
    Topic: "Konu",
    Time: "Zaman",
  },

  "Discovery": {
    "Name": "Keşfet",
  },
  "Mcp": {
    "Name": "MCP",
    "UI": {
      "Market": "MCP pazarı",
      "PresetLoadFailed": "Ön ayarlı sunucular yüklenemedi",
      "InitFailed": "Başlangıç durumu yüklenemedi",
      "ConfigSaved": "Sunucu yapılandırması kaydedildi",
      "ConfigSaveFailed": "Yapılandırma kaydedilemedi",
      "ToolsFailed": "Araçlar yüklenemedi",
      "Stopped": "Durduruldu",
      "StopFailed": "Sunucu durdurulamadı",
      "StartFailed": "Sunucu başlatılamadı; günlükleri kontrol edin",
      "RestartingClients": "Tüm istemciler yeniden başlatılıyor",
      "RestartFailed": "İstemciler yeniden başlatılamadı",
      "Initializing": "Başlatılıyor",
      "NoServers": "Kullanılabilir sunucu yok",
      "OpenRepo": "Depoyu aç",
      "Start": "Başlat",
      "Tools": "Araçlar",
      "Add": "Ekle",
      "RestartAll": "Tümünü yeniden başlat",
      "Search": "MCP sunucusu ara",
      "ConfigureServer": "Sunucuyu yapılandır",
      "ServerDetails": "Sunucu ayrıntıları",
      "NoTools": "Kullanılabilir araç yok",
      "LoadingPresets": "Ön ayarlı sunucu listesi yükleniyor…",
      "ConfiguredServers": "Yapılandırılmış sunucular",
      "UpdatingConfig": "Yapılandırma güncelleniyor…",
      "CreatingClient": "MCP istemcisi oluşturuluyor…",
      "Stopping": "Sunucu durduruluyor…",
      "Starting": "Sunucu başlatılıyor…",
      "RestartingServers": "Tüm sunucular yeniden başlatılıyor…",
      "ExecutionFailed": "MCP yürütmesi başarısız",
    },
  },
  "SdPanel": {
    "Prompt": "Görsel istemi",
    "NegativePrompt": "Olumsuz istem",
    "PleaseInput": (name: string) => name + " — Bir değer girin",
    "AspectRatio": "En boy oranı",
    "ImageStyle": "Görsel stili",
    "OutFormat": "Çıktı biçimi",
    "AIModel": "Model (model)",
    "ModelVersion": "Model sürümü",
    "Submit": "Üret",
    "ParamIsRequired": (name: string) => name + ": Gerekli",
    "Styles": {
      "D3Model": "3D model",
      "AnalogFilm": "Analog film",
      "Anime": "Japon animasyonu",
      "Cinematic": "Sinematik",
      "ComicBook": "Çizgi roman",
      "DigitalArt": "Dijital sanat",
      "Enhance": "Geliştirilmiş",
      "FantasyArt": "Fantastik sanat",
      "Isometric": "İzometrik",
      "LineArt": "Çizgi sanatı",
      "LowPoly": "Düşük poligon",
      "ModelingCompound": "Model hamuru",
      "NeonPunk": "Neon punk",
      "Origami": "Kâğıt katlama",
      "Photographic": "Fotoğrafik",
      "PixelArt": "Piksel sanatı",
      "TileTexture": "Karo dokusu",
    },
  },
  "Sd": {
    "SubTitle": (count: number) => "Görseller: " + count,
    "Actions": {
      "Params": "Parametreleri göster",
      "Copy": "Kopyala: Görsel istemi",
      "Delete": "Sil",
      "Retry": "Yeniden dene",
      "ReturnHome": "Ana sayfaya dön",
      "History": "Geçmiş",
    },
    "EmptyRecord": "Henüz görsel yok",
    "Status": {
      "Name": "Durum",
      "Success": "Başarılı",
      "Error": "Hata",
      "Wait": "Bekliyor",
      "Running": "Çalışıyor",
    },
    "Danger": {
      "Delete": "Silmek istediğinizden emin misiniz?",
    },
    "GenerateParams": "Üretim parametreleri",
    "Detail": "Ayrıntılar",
  },
  "ApiError": {
    "Timeout": "İstek zaman aşımına uğradı. Yeniden deneyin veya gelişmiş ayarlarda adresi kontrol edin.",
    "Quota": "Sağlayıcı kotası yetersiz. Bakiye, ödeme durumu ve kullanım sınırlarını kontrol edin.",
    "AccessCode": "Site erişim kodu geçersiz. Kodunuzu kontrol edin.",
    "InvalidKey": "API Key geçersiz veya süresi dolmuş. Seçili sağlayıcının Key değerini kontrol edin.",
    "Permission": "Erişim reddedildi. Model izinlerini ve bölge kısıtlamalarını kontrol edin.",
    "Model": "Model veya arayüz bulunamadı. Gelişmiş ayarlarda model ID ve adresi kontrol edin.",
    "RateLimit": "Çok fazla istek veya kullanım sınırına ulaşıldı. Daha sonra deneyip kotayı kontrol edin.",
    "Parameters": "İstek parametreleri uyumsuz. Gelişmiş ayarlarda model ID ve parametreleri kontrol edin.",
    "Unavailable": "Sağlayıcı geçici olarak kullanılamıyor. Daha sonra yeniden deneyin.",
    "Empty": "Geçerli içerik dönmedi. Model durumunu kontrol edip yeniden deneyin.",
    "Network": "Ağ bağlantısı başarısız. Ağı, adresi ve üçüncü taraf CORS ayarlarını kontrol edin.",
    "Generic": "İstek başarısız. Sağlayıcının API Key, model ve arayüz ayarlarını kontrol edin.",
  },
};

export default tr;
