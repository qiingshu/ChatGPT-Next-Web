import { getClientConfig } from "../config/client";
import type { LocaleType } from "./index";
import { SAAS_CHAT_UTM_URL } from "@/app/constant";
// if you are adding a new translation, please use LocaleType instead of LocaleType

const isApp = !!getClientConfig()?.isApp;
const sk: LocaleType = {
  WIP: "Už čoskoro...",
  Error: {
    Unauthorized: isApp
      ? `😆 Rozhovor narazil na nejaké problémy, nebojte sa:
    \\ 1️⃣ Ak chcete začať bez konfigurácie, [kliknite sem, aby ste okamžite začali chatovať 🚀](${SAAS_CHAT_UTM_URL})
    \\ 2️⃣ Ak chcete používať svoje vlastné zdroje OpenAI, kliknite [sem](/#/settings), aby ste upravili nastavenia ⚙️`
      : `😆 Rozhovor narazil na nejaké problémy, nebojte sa:
    \ 1️⃣ Ak chcete začať bez konfigurácie, [kliknite sem, aby ste okamžite začali chatovať 🚀](${SAAS_CHAT_UTM_URL})
    \ 2️⃣ Ak používate verziu súkromného nasadenia, kliknite [sem](/#/auth), aby ste zadali prístupový kľúč 🔑
    \ 3️⃣ Ak chcete používať svoje vlastné zdroje OpenAI, kliknite [sem](/#/settings), aby ste upravili nastavenia ⚙️
 `,
  },
  Auth: {
    Title: "Potrebný prístupový kód",
    Tips: "Prosím, zadajte prístupový kód nižšie",
    SubTips: "Alebo zadajte váš OpenAI alebo Google API kľúč",
    Input: "prístupový kód",
    Confirm: "Potvrdiť",
    Later: "Neskôr",
    Return: "Návrat",
    SaasTips: "Nastavenie je príliš zložité, chcem to okamžite použiť",
    TopTips:
      "🥳 Uvítacia ponuka NextChat AI, okamžite odomknite OpenAI o1, GPT-4o, Claude-3.5 a najnovšie veľké modely",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} správ`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} správ`,
    EditMessage: {
      Title: "Upraviť všetky správy",
      Topic: {
        Title: "Téma",
        SubTitle: "Zmeniť aktuálnu tému",
      },
    },
    Actions: {
      ChatList: "Prejsť na zoznam chatov",
      CompressedHistory: "Komprimovaná história výziev",
      Export: "Exportovať všetky správy ako Markdown",
      Copy: "Kopírovať",
      Stop: "Zastaviť",
      Retry: "Skúsiť znova",
      Pin: "Pripnúť",
      PinToastContent: "Pripnuté 1 správy do kontextových výziev",
      PinToastAction: "Zobraziť",
      Delete: "Vymazať",
      Edit: "Upraviť",
      RefreshTitle: "Obnoviť názov",
      RefreshToast: "Požiadavka na obnovenie názvu bola odoslaná",
    
      "FullScreen": "Celá obrazovka",
      "Speech": "Prečítať",
      "StopSpeech": "Zastaviť",
    },
    Commands: {
      new: "Začať nový chat",
      newm: "Začať nový chat s maskou",
      next: "Ďalší Chat",
      prev: "Predchádzajúci Chat",
      clear: "Vymazať kontext",
      del: "Vymazať Chat",
    
      "fork": "Kopírovať konverzáciu",
    },
    InputActions: {
      Stop: "Zastaviť",
      ToBottom: "Na najnovšie",
      Theme: {
        auto: "Automaticky",
        light: "Svetlý motív",
        dark: "Tmavý motív",
      },
      Prompt: "Výzvy",
      Masks: "Masky",
      Clear: "Vymazať kontext",
      Settings: "Nastavenia",
    
      "UploadImage": "Obrázky",
    },
    Rename: "Premenovať Chat",
    Typing: "Písanie…",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} na odoslanie`;
      if (submitKey === "Enter") {
        inputHints += ", Shift + Enter na zalomenie";
      }
      return inputHints + ", / na vyhľadávanie výziev, : na použitie príkazov";
    },
    Send: "Odoslať",
    Config: {
      Reset: "Resetovať na predvolené",
      SaveAs: "Uložiť ako masku",
    },
    IsContext: "Kontextová výzva",
  
    "StartSpeak": "Začať hovoriť",
    "StopSpeak": "Zastaviť",
    "ShortcutKey": {
      "Title": "Klávesové skratky",
      "newChat": "Otvoriť novú konverzáciu",
      "focusInput": "Prejsť do vstupného poľa",
      "copyLastMessage": "Kopírovať poslednú odpoveď",
      "copyLastCode": "Kopírovať posledný blok kódu",
      "showShortcutKey": "Zobraziť skratky",
      "clearContext": "Vymazať kontext",
    },
  },
  Export: {
    Title: "Export správ",
    Copy: "Kopírovať všetko",
    Download: "Stiahnuť",
    MessageFromYou: "Správa od vás",
    MessageFromChatGPT: "Správa od ChatGPT",
    Share: "Zdieľať na ShareGPT",
    Format: {
      Title: "Formát exportu",
      SubTitle: "Markdown alebo PNG obrázok",
    },
    IncludeContext: {
      Title: "Vrátane kontextu",
      SubTitle: "Exportovať kontextové výzvy v maske alebo nie",
    },
    Steps: {
      Select: "Vybrať",
      Preview: "Náhľad",
    },
    Image: {
      Toast: "Snímanie obrázka...",
      Modal:
        "Dlhým stlačením alebo kliknutím pravým tlačidlom myši uložte obrázok",
    },
  
    "Artifacts": {
      "Title": "Zdieľať Artifacts",
      "Error": "Zdieľať Artifacts — Chyba",
    },
  },
  Select: {
    Search: "Hľadať",
    All: "Vybrať všetko",
    Latest: "Vybrať najnovšie",
    Clear: "Vymazať",
  },
  Memory: {
    Title: "Výzva pamäti",
    EmptyContent: "Zatiaľ nič.",
    Send: "Odoslať pamäť",
    Copy: "Kopírovať pamäť",
    Reset: "Resetovať reláciu",
    ResetConfirm:
      "Resetovaním sa vymaže aktuálna história konverzácie a historická pamäť. Ste si istí, že chcete resetovať?",
  },
  Home: {
    NewChat: "Nový Chat",
    DeleteChat: "Potvrdiť vymazanie vybranej konverzácie?",
    DeleteToast: "Chat vymazaný",
    Revert: "Vrátiť späť",
  },
  Settings: {
    Title: "Nastavenia",
    SubTitle: "Všetky nastavenia",
    Danger: {
      Reset: {
        Title: "Resetovať všetky nastavenia",
        SubTitle: "Resetovať všetky položky nastavení na predvolené",
        Action: "Resetovať",
        Confirm: "Potvrdiť resetovanie všetkých nastavení na predvolené?",
      },
      Clear: {
        Title: "Vymazať všetky údaje",
        SubTitle: "Vymazať všetky správy a nastavenia",
        Action: "Vymazať",
        Confirm: "Potvrdiť vymazanie všetkých správ a nastavení?",
      },
    },
    Lang: {
      Name: "Jazyk", // POZOR: ak pridávate nový preklad, prosím neprekladajte túto hodnotu, nechajte ju ako "Jazyk"
      All: "Všetky jazyky",
    },
    Avatar: "Avatar",
    FontSize: {
      Title: "Veľkosť písma",
      SubTitle: "Nastaviť veľkosť písma obsahu chatu",
    },
    FontFamily: {
      Title: "Chatové Písmo",
      SubTitle:
        "Písmo obsahu chatu, ponechajte prázdne pre použitie globálneho predvoleného písma",
      Placeholder: "Názov Písma",
    },
    InjectSystemPrompts: {
      Title: "Vložiť systémové výzvy",
      SubTitle: "Vložiť globálnu systémovú výzvu pre každú požiadavku",
    },
    InputTemplate: {
      Title: "Šablóna vstupu",
      SubTitle: "Najnovšia správa bude vyplnená do tejto šablóny",
    },

    Update: {
      Version: (x: string) => `Verzia: ${x}`,
      IsLatest: "Najnovšia verzia",
      CheckUpdate: "Skontrolovať aktualizácie",
      IsChecking: "Kontrola aktualizácií...",
      FoundUpdate: (x: string) => `Nájdená nová verzia: ${x}`,
      GoToUpdate: "Aktualizovať",
    
      "Success": "Aktualizácia dokončená",
      "Failed": "Aktualizácia zlyhala",
    },
    SendKey: "Odoslať kľúč",
    Theme: "Motív",
    TightBorder: "Tesný okraj",
    SendPreviewBubble: {
      Title: "Bublina náhľadu odoslania",
      SubTitle: "Náhľad markdownu v bubline",
    },
    AutoGenerateTitle: {
      Title: "Automaticky generovať názov",
      SubTitle: "Generovať vhodný názov na základe obsahu konverzácie",
    },
    Sync: {
      CloudState: "Posledná aktualizácia",
      NotSyncYet: "Zatiaľ nesynchronizované",
      Success: "Synchronizácia úspešná",
      Fail: "Synchronizácia zlyhala",

      Config: {
        Modal: {
          Title: "Konfigurácia synchronizácie",
          Check: "Skontrolovať pripojenie",
        },
        SyncType: {
          Title: "Typ synchronizácie",
          SubTitle: "Vyberte svoju obľúbenú službu synchronizácie",
        },
        Proxy: {
          Title: "Povoliť CORS Proxy",
          SubTitle: "Povoliť proxy na obídenie obmedzení cross-origin",
        },
        ProxyUrl: {
          Title: "Koncový bod Proxy",
          SubTitle: "Platné len pre vstavaný CORS proxy tohto projektu",
        },

        WebDav: {
          Endpoint: "Koncový bod WebDAV",
          UserName: "Meno používateľa",
          Password: "Heslo",
        },

        UpStash: {
          Endpoint: "URL REST služby UpStash Redis",
          UserName: "Názov zálohy",
          Password: "Token REST služby UpStash Redis",
        },
      },

      LocalState: "Lokálne údaje",
      Overview: (overview: any) => {
        return `${overview.chat} chaty, ${overview.message} správy, ${overview.prompt} výzvy, ${overview.mask} masky`;
      },
      ImportFailed: "Import z súboru zlyhal",
    },
    Mask: {
      Splash: {
        Title: "Úvodná obrazovka masky",
        SubTitle: "Zobraziť úvodnú obrazovku masky pred začatím nového chatu",
      },
      Builtin: {
        Title: "Skryť vstavané masky",
        SubTitle: "Skryť vstavané masky v zozname masiek",
      },
    },
    Prompt: {
      Disable: {
        Title: "Zakázať automatické dopĺňanie",
        SubTitle: "Zadajte / na spustenie automatického dopĺňania",
      },
      List: "Zoznam výziev",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} vstavaných, ${custom} užívateľsky definovaných`,
      Edit: "Upraviť",
      Modal: {
        Title: "Zoznam výziev",
        Add: "Pridať jednu",
        Search: "Hľadať výzvy",
      },
      EditModal: {
        Title: "Upraviť výzvu",
      },
    },
    HistoryCount: {
      Title: "Počet pripojených správ",
      SubTitle: "Počet odoslaných správ pripojených na požiadavku",
    },
    CompressThreshold: {
      Title: "Práh kompresie histórie",
      SubTitle:
        "Bude komprimované, ak dĺžka nekomprimovaných správ presiahne túto hodnotu",
    },

    Usage: {
      Title: "Stav účtu",
      SubTitle(used: any, total: any) {
        return `Tento mesiac použité ${used}, predplatné ${total}`;
      },
      IsChecking: "Kontroluje sa...",
      Check: "Skontrolovať",
      NoAccess: "Zadajte API kľúč na skontrolovanie zostatku",
    },
    Access: {
      SaasStart: {
        Title: "Použite NextChat AI",
        Label: "(Najvýhodnejšie riešenie)",
        SubTitle:
          "Oficiálne udržiavané NextChat, pripravené na použitie bez konfigurácie, podporuje najnovšie veľké modely ako OpenAI o1, GPT-4o a Claude-3.5",
        ChatNow: "Chatovať teraz",
      },

      AccessCode: {
        Title: "Prístupový kód",
        SubTitle: "Povolený prístupový kód",
        Placeholder: "Zadajte kód",
      },
      CustomEndpoint: {
        Title: "Vlastný koncový bod",
        SubTitle: "Použiť vlastnú službu Azure alebo OpenAI",
      },
      Provider: {
        Title: "Poskytovateľ modelu",
        SubTitle: "Vyberte Azure alebo OpenAI",
      },
      OpenAI: {
        ApiKey: {
          Title: "OpenAI API Key",
          SubTitle: "Použiť vlastný API Key OpenAI",
          Placeholder: "OpenAI API Key",
        },

        Endpoint: {
          Title: "Koncový bod OpenAI",
          SubTitle:
            "Musí začínať http(s):// alebo použiť /api/openai ako predvolený",
        },
      },
      Azure: {
        ApiKey: {
          Title: "Azure API Key",
          SubTitle: "Skontrolujte svoj API Key v Azure konzole",
          Placeholder: "API Key Azure",
        },

        Endpoint: {
          Title: "Koncový bod Azure",
          SubTitle: "Príklad: ",
        },

        ApiVerion: {
          Title: "Verzia API Azure",
          SubTitle: "Skontrolujte svoju verziu API v Azure konzole",
        },
      },
      Anthropic: {
        ApiKey: {
          Title: "Anthropic API Key",
          SubTitle: "Skontrolujte svoj API Key v Anthropic konzole",
          Placeholder: "API Key Anthropic",
        },

        Endpoint: {
          Title: "Adresa koncového bodu",
          SubTitle: "Príklad:",
        },

        ApiVerion: {
          Title: "Verzia API (claude verzia API)",
          SubTitle: "Vyberte špecifickú verziu časti",
        },
      },
      CustomModel: {
        Title: "Vlastné modely",
        SubTitle: "Možnosti vlastného modelu, oddelené čiarkou",
      },
      Google: {
        ApiKey: {
          Title: "Google API Key",
          SubTitle:
            "Obísť obmedzenia prístupu heslom pomocou vlastného API Keya Google AI Studio",
          Placeholder: "API Key Google AI Studio",
        },

        Endpoint: {
          Title: "Adresa koncového bodu",
          SubTitle: "Príklad:",
        },

        ApiVersion: {
          Title: "Verzia API (gemini-pro verzia API)",
          SubTitle: "Vyberte špecifickú verziu časti",
        },
      
        "GoogleSafetySettings": {
          "Title": "Bezpečnostné nastavenia Google",
          "SubTitle": "Vyberte úroveň bezpečnostného filtra",
        },
      },
    
      "Baidu": {
        "ApiKey": {
          "Title": "Baidu API Key",
          "SubTitle": "Použiť vlastný API Key",
          "Placeholder": "Baidu API Key",
        },
        "SecretKey": {
          "Title": "Baidu Secret Key",
          "SubTitle": "Použiť vlastné prihlasovacie údaje — Secret Key",
          "Placeholder": "Baidu Secret Key",
        },
        "Endpoint": {
          "Title": "Adresa rozhrania",
          "SubTitle": "Nastavte túto hodnotu v .env",
        },
      },
      "Tencent": {
        "ApiKey": {
          "Title": "Tencent API Key",
          "SubTitle": "Použiť vlastný API Key",
          "Placeholder": "Tencent API Key",
        },
        "SecretKey": {
          "Title": "Tencent Secret Key",
          "SubTitle": "Použiť vlastné prihlasovacie údaje — Secret Key",
          "Placeholder": "Tencent Secret Key",
        },
        "Endpoint": {
          "Title": "Adresa rozhrania",
          "SubTitle": "Nastavte túto hodnotu v .env",
        },
      },
      "ByteDance": {
        "ApiKey": {
          "Title": "ByteDance API Key",
          "SubTitle": "Použiť vlastný API Key",
          "Placeholder": "ByteDance API Key",
        },
        "Endpoint": {
          "Title": "Adresa rozhrania",
          "SubTitle": "Príklad: ",
        },
      },
      "Alibaba": {
        "ApiKey": {
          "Title": "Alibaba API Key",
          "SubTitle": "Použiť vlastný API Key",
          "Placeholder": "Alibaba API Key",
        },
        "Endpoint": {
          "Title": "Adresa rozhrania",
          "SubTitle": "Príklad: ",
        },
      },
      "Moonshot": {
        "ApiKey": {
          "Title": "Moonshot API Key",
          "SubTitle": "Použiť vlastný API Key",
          "Placeholder": "Moonshot API Key",
        },
        "Endpoint": {
          "Title": "Adresa rozhrania",
          "SubTitle": "Príklad: ",
        },
      },
      "DeepSeek": {
        "ApiKey": {
          "Title": "DeepSeek API Key",
          "SubTitle": "Použiť vlastný API Key",
          "Placeholder": "DeepSeek API Key",
        },
        "Endpoint": {
          "Title": "Adresa rozhrania",
          "SubTitle": "Príklad: ",
        },
      },
      "XAI": {
        "ApiKey": {
          "Title": "XAI API Key",
          "SubTitle": "Použiť vlastný API Key",
          "Placeholder": "XAI API Key",
        },
        "Endpoint": {
          "Title": "Adresa rozhrania",
          "SubTitle": "Príklad: ",
        },
      },
      "ChatGLM": {
        "ApiKey": {
          "Title": "ChatGLM API Key",
          "SubTitle": "Použiť vlastný API Key",
          "Placeholder": "ChatGLM API Key",
        },
        "Endpoint": {
          "Title": "Adresa rozhrania",
          "SubTitle": "Príklad: ",
        },
      },
      "SiliconFlow": {
        "ApiKey": {
          "Title": "SiliconFlow API Key",
          "SubTitle": "Použiť vlastný API Key",
          "Placeholder": "SiliconFlow API Key",
        },
        "Endpoint": {
          "Title": "Adresa rozhrania",
          "SubTitle": "Príklad: ",
        },
      },
      "Stability": {
        "ApiKey": {
          "Title": "Stability API Key",
          "SubTitle": "Použiť vlastný API Key",
          "Placeholder": "Stability API Key",
        },
        "Endpoint": {
          "Title": "Adresa rozhrania",
          "SubTitle": "Príklad: ",
        },
      },
      "Iflytek": {
        "ApiKey": {
          "Title": "Iflytek API Key",
          "SubTitle": "Použiť vlastný API Key",
          "Placeholder": "Iflytek API Key",
        },
        "ApiSecret": {
          "Title": "Iflytek API Secret",
          "SubTitle": "Použiť vlastné prihlasovacie údaje — API Secret",
          "Placeholder": "Iflytek API Secret",
        },
        "Endpoint": {
          "Title": "Adresa rozhrania",
          "SubTitle": "Príklad: ",
        },
      },
    },

    Model: "Model",
    CompressModel: {
      Title: "Kompresný model",
      SubTitle: "Model používaný na kompresiu histórie",
    },
    Temperature: {
      Title: "Teplota",
      SubTitle: "Vyššia hodnota robí výstup náhodnejším",
    },
    TopP: {
      Title: "Top P",
      SubTitle: "Neupravujte túto hodnotu spolu s teplotou",
    },
    MaxTokens: {
      Title: "Maximálny počet tokenov",
      SubTitle: "Maximálna dĺžka vstupných tokenov a generovaných tokenov",
    },
    PresencePenalty: {
      Title: "Penalizácia za prítomnosť",
      SubTitle:
        "Vyššia hodnota zvyšuje pravdepodobnosť hovorenia o nových témach",
    },
    FrequencyPenalty: {
      Title: "Penalizácia za frekvenciu",
      SubTitle:
        "Vyššia hodnota znižuje pravdepodobnosť opakovania rovnakej línie",
    },
  
    "ShowPassword": "Zobraziť heslo",
    "LocalizationInfo": {
      "Edition": "NextChat – vlastné vydanie",
      "Timeout": "Test pripojenia vypršal po 30 sekundách. Skontrolujte sieť a adresu API.",
      "Success": "Pripojenie úspešné",
      "NoResponse": "Poskytovateľ nevrátil platnú odpoveď. Skontrolujte model a rozhranie.",
      "Upstream": "Základná verzia pôvodného projektu",
      "Details": "Podrobné informácie o verzii",
      "Security": "Identifikátor bezpečnostnej údržby",
      "Commit": "Commit zostavy",
      "Official": "Oficiálna referenčná verzia",
      "Unavailable": "Zatiaľ nedostupné",
      "Note": "Obsahuje vybrané opravy, nie celé oficiálne vydanie v2.16.1. Oficiálna verzia je uvedená len na informáciu.",
    },
    "ProviderSetup": {
      "ModelIdPlaceholder": "ID modelu@poskytovateľ",
      "Provider": "Poskytovateľ",
      "ProviderHelp": "Vyberte poskytovateľa a zadajte jeho API Key na použitie predvoleného modelu",
      "ProviderKeyPlaceholder": "Zadajte API Key tohto poskytovateľa",
      "CurrentModel": "Aktuálny model konverzácie",
      "DefaultModel": "Predvolený model",
      "ModelHelp": "Upravte rozhranie a vlastné modely v pokročilých nastaveniach",
      "TestModel": "Otestovať aktuálny model",
      "TestHelp": "Odošle krátku požiadavku, ktorá môže byť spoplatnená; neukladá históriu",
      "TestConnection": "Otestovať pripojenie",
      "Testing": "Testuje sa…",
      "Advanced": "Pokročilé nastavenia",
      "OfficialURL": "Oficiálna adresa",
      "DefaultRoute": "Predvolene používa trasu tejto stránky",
    },
    "TTS": {
      "Enable": {
        "Title": "Povoliť TTS",
        "SubTitle": "Povoliť prevod textu na reč",
      },
      "Autoplay": {
        "Title": "Povoliť automatické prehrávanie",
        "SubTitle": "Automaticky vytvoriť a prehrať reč; najprv povoľte TTS",
      },
      "Model": "Model",
      "Engine": "Modul TTS",
      "Voice": {
        "Title": "Hlas",
        "SubTitle": "Hlas použitý pre vytvorený zvuk",
      },
      "Speed": {
        "Title": "Rýchlosť",
        "SubTitle": "Rýchlosť vytvoreného zvuku",
      },
    },
    "Realtime": {
      "Enable": {
        "Title": "Konverzácia v reálnom čase",
        "SubTitle": "Povoliť konverzáciu v reálnom čase",
      },
      "Provider": {
        "Title": "Poskytovateľ modelu",
        "SubTitle": "Zmeniť poskytovateľa",
      },
      "Model": {
        "Title": "Model",
        "SubTitle": "Vyberte model",
      },
      "ApiKey": {
        "Title": "API Key",
        "SubTitle": "API Key",
        "Placeholder": "API Key",
      },
      "Azure": {
        "Endpoint": {
          "Title": "Adresa rozhrania",
          "SubTitle": "Adresa rozhrania",
        },
        "Deployment": {
          "Title": "Názov nasadenia",
          "SubTitle": "Názov nasadenia",
        },
      },
      "Temperature": {
        "Title": "Teplota",
        "SubTitle": "Vyššia hodnota robí výstup náhodnejším",
      },
    },
    "SafetyLabels": {
      "BLOCK_NONE": "Žiadne",
      "BLOCK_ONLY_HIGH": "Len vysoké",
      "BLOCK_MEDIUM_AND_ABOVE": "Stredné a vyššie",
      "BLOCK_LOW_AND_ABOVE": "Nízke a vyššie",
    },
  },
  Store: {
    DefaultTopic: "Nová konverzácia",
    BotHello: "Ahoj! Ako vám dnes môžem pomôcť?",
    Error: "Niečo sa pokazilo, skúste to prosím neskôr znova.",
    Prompt: {
      History: (content: string) =>
        "Toto je zhrnutie histórie chatu ako rekapitulácia: " + content,
      Topic:
        "Prosím, vygenerujte štvor- až päťslovný titul, ktorý zhrnie našu konverzáciu bez akéhokoľvek úvodu, interpunkcie, úvodzoviek, bodiek, symbolov, tučného textu alebo ďalšieho textu. Odstráňte uzatváracie úvodzovky.",
      Summarize:
        "Stručne zhrňte diskusiu na menej ako 200 slov, aby ste ju mohli použiť ako výzvu pre budúci kontext.",
    },
  },
  Copy: {
    Success: "Skopírované do schránky",
    Failed:
      "Kopírovanie zlyhalo, prosím udeľte povolenie na prístup k schránke",
  },
  Download: {
    Success: "Obsah stiahnutý do vášho adresára.",
    Failed: "Stiahnutie zlyhalo.",
  },
  Context: {
    Toast: (x: any) => `S ${x} kontextovými výzvami`,
    Edit: "Aktuálne nastavenia chatu",
    Add: "Pridať výzvu",
    Clear: "Kontext vyčistený",
    Revert: "Vrátiť späť",
  },
  Plugin: {
    Name: "Doplnok",
  
    "Accessibility": {
      "Create": "Vytvoriť: Doplnok",
      "Edit": "Upraviť: Doplnok",
      "Save": "Uložiť: Doplnok",
      "SchemaUrl": "Doplnok Schema URL",
      "LoadSchema": "Načítať z URL: Doplnok Schema",
      "Schema": "Doplnok Schema",
    },
    "Page": {
      "Title": "Doplnky",
      "SubTitle": (count: number) => "Doplnky: " + count,
      "Search": "Hľadať — Doplnky",
      "Create": "Vytvoriť",
      "Find": "Nájsť doplnky na GitHub: ",
    },
    "Item": {
      "Info": (count: number) => "Metódy: " + count,
      "View": "Zobraziť",
      "Edit": "Upraviť",
      "Delete": "Vymazať",
      "DeleteConfirm": "Potvrdiť vymazanie?",
    },
    "Auth": {
      "None": "Bez overenia",
      "Basic": "Basic",
      "Bearer": "Bearer",
      "Custom": "Vlastné",
      "CustomHeader": "Názov parametra",
      "Token": "Token",
      "Proxy": "Použiť proxy",
      "ProxyDescription": "Použiť proxy na obídenie obmedzení CORS",
      "Location": "Umiestnenie",
      "LocationHeader": "Header",
      "LocationQuery": "Query",
      "LocationBody": "Body",
    },
    "EditModal": {
      "Title": (readonly: boolean) => "Upraviť: Doplnok" + (readonly ? " (Len na čítanie)" : ""),
      "Download": "Stiahnuť",
      "Auth": "Typ overenia",
      "Content": "OpenAPI Schema",
      "Load": "Načítať z URL",
      "Method": "Metódy",
      "Error": "Neplatná OpenAPI Schema",
    },
  },
  FineTuned: {
    Sysmessage: "Ste asistent, ktorý",
  },
  SearchChat: {
    Name: "Hľadať",
    Page: {
      Title: "Hľadať v histórii chatu",
      Search: "Zadajte kľúčové slová na vyhľadávanie",
      NoResult: "Nenašli sa žiadne výsledky",
      NoData: "Žiadne údaje",
      Loading: "Načítava sa",

      SubTitle: (count: number) => `Nájdených ${count} výsledkov`,
    },
    Item: {
      View: "Zobraziť",
    },
  },
  Mask: {
    Name: "Maska",
    Page: {
      Title: "Šablóna výziev",
      SubTitle: (count: number) => `${count} šablón výziev`,
      Search: "Hľadať šablóny",
      Create: "Vytvoriť",
    },
    Item: {
      Info: (count: number) => `${count} výziev`,
      Chat: "Chat",
      View: "Zobraziť",
      Edit: "Upraviť",
      Delete: "Vymazať",
      DeleteConfirm: "Potvrdiť vymazanie?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Upraviť šablónu výziev ${readonly ? "(iba na čítanie)" : ""}`,
      Download: "Stiahnuť",
      Clone: "Klonovať",
    },
    Config: {
      Avatar: "Avatar robota",
      Name: "Meno robota",
      Sync: {
        Title: "Použiť globálne nastavenia",
        SubTitle: "Použiť globálne nastavenia v tomto chate",
        Confirm: "Potvrdiť prepísanie vlastného nastavenia globálnym?",
      },
      HideContext: {
        Title: "Skryť kontextové výzvy",
        SubTitle: "Nezobrazovať kontextové výzvy v chate",
      },
      Share: {
        Title: "Zdieľať túto masku",
        SubTitle: "Vygenerovať odkaz na túto masku",
        Action: "Kopírovať odkaz",
      },
    
      "Artifacts": {
        "Title": "Povoliť Artifacts",
        "SubTitle": "Zobrazovať stránky HTML pomocou Artifacts",
      },
      "CodeFold": {
        "Title": "Povoliť skladanie kódu",
        "SubTitle": "Automaticky zbaliť dlhé bloky kódu",
      },
    },
  },
  NewChat: {
    Return: "Vrátiť sa",
    Skip: "Len začať",
    Title: "Vybrať masku",
    SubTitle: "Chatovať s dušou za maskou",
    More: "Nájsť viac",
    NotShow: "Už nezobrazovať",
    ConfirmNoShow:
      "Potvrdiť deaktiváciu? Môžete ju neskôr znova povoliť v nastaveniach.",
  },

  UI: {
    Confirm: "Potvrdiť",
    Cancel: "Zrušiť",
    Close: "Zavrieť",
    Create: "Vytvoriť",
    Edit: "Upraviť",
    Export: "Exportovať",
    Import: "Importovať",
    Sync: "Synchronizovať",
    Config: "Konfigurácia",
  
    "Save": "Uložiť",
    "Loading": "Načítava sa…",
    "Seed": "Náhodné semienko",
    "User": "Používateľ",
    "Assistant": "Asistent",
    "System": "Systém",
    "Text": "Text",
    "Image": "Obrázok",
    "Standard": "Štandardný",
    "Vivid": "Živý",
    "Natural": "Prirodzený",
    "ErrorTitle": "Vyskytla sa chyba",
    "ReportError": "Nahlásiť túto chybu",
    "ClearData": "Vymazať všetky údaje",
    "AssistantTagline": "Vytvorte si vlastného AI asistenta.",
    "EmptyPrompt": "Nový pokyn",
    "EmptyPromptContent": "Zadajte obsah pokynu",
    "AllFiles": "Všetky súbory",
  
    "Refresh": "Znova načítať",
    "HidePassword": "Skryť heslo",
  },
  Exporter: {
    Description: {
      Title: "Zobrazia sa len správy po vyčistení kontextu",
    },
    Model: "Model",
    Messages: "Správy",
    Topic: "Téma",
    Time: "Čas",
  },

  URLCommand: {
    Code: "Zistený prístupový kód z URL, potvrdiť na aplikovanie?",
    Settings: "Zistené nastavenia z URL, potvrdiť na aplikovanie?",
  },

  "Discovery": {
    "Name": "Objavovať",
  },
  "Mcp": {
    "Name": "MCP",
    "UI": {
      "Market": "Katalóg MCP",
      "PresetLoadFailed": "Nemožno načítať prednastavené servery",
      "InitFailed": "Nemožno načítať počiatočný stav",
      "ConfigSaved": "Konfigurácia servera uložená",
      "ConfigSaveFailed": "Nemožno uložiť konfiguráciu",
      "ToolsFailed": "Nemožno načítať nástroje",
      "Stopped": "Zastavené",
      "StopFailed": "Nemožno zastaviť server",
      "StartFailed": "Nemožno spustiť server; skontrolujte protokoly",
      "RestartingClients": "Reštartujú sa všetci klienti",
      "RestartFailed": "Nemožno reštartovať klientov",
      "Initializing": "Inicializácia",
      "NoServers": "Žiadne dostupné servery",
      "OpenRepo": "Otvoriť úložisko",
      "Start": "Spustiť",
      "Tools": "Nástroje",
      "Add": "Pridať",
      "RestartAll": "Reštartovať všetko",
      "Search": "Hľadať servery MCP",
      "ConfigureServer": "Nastaviť server",
      "ServerDetails": "Podrobnosti servera",
      "NoTools": "Žiadne dostupné nástroje",
      "LoadingPresets": "Načítavajú sa prednastavené servery…",
      "ConfiguredServers": "Nastavené servery",
      "UpdatingConfig": "Aktualizuje sa konfigurácia…",
      "CreatingClient": "Vytvára sa klient MCP…",
      "Stopping": "Zastavuje sa server…",
      "Starting": "Spúšťa sa server…",
      "RestartingServers": "Reštartujú sa všetky servery…",
      "ExecutionFailed": "Spustenie MCP zlyhalo",
    },
  },
  "SdPanel": {
    "Prompt": "Popis obrázka",
    "NegativePrompt": "Negatívny popis",
    "PleaseInput": (name: string) => name + " — Zadajte hodnotu",
    "AspectRatio": "Pomer strán",
    "ImageStyle": "Štýl obrázka",
    "OutFormat": "Výstupný formát",
    "AIModel": "Model",
    "ModelVersion": "Verzia modelu",
    "Submit": "Vytvoriť",
    "ParamIsRequired": (name: string) => name + ": Povinné",
    "Styles": {
      "D3Model": "3D model",
      "AnalogFilm": "Analógový film",
      "Anime": "Japonská animácia",
      "Cinematic": "Filmový",
      "ComicBook": "Komiks",
      "DigitalArt": "Digitálne umenie",
      "Enhance": "Vylepšený",
      "FantasyArt": "Fantazijné umenie",
      "Isometric": "Izometrický",
      "LineArt": "Čiarová kresba",
      "LowPoly": "Málo polygónov",
      "ModelingCompound": "Modelovacia hmota",
      "NeonPunk": "Neónový punk",
      "Origami": "Skladanie papiera",
      "Photographic": "Fotografický",
      "PixelArt": "Pixelové umenie",
      "TileTexture": "Dlaždicová textúra",
    },
  },
  "Sd": {
    "SubTitle": (count: number) => "Obrázky: " + count,
    "Actions": {
      "Params": "Zobraziť parametre",
      "Copy": "Kopírovať: Popis obrázka",
      "Delete": "Vymazať",
      "Retry": "Skúsiť znova",
      "ReturnHome": "Späť na úvod",
      "History": "História",
    },
    "EmptyRecord": "Zatiaľ žiadne obrázky",
    "Status": {
      "Name": "Stav",
      "Success": "Úspech",
      "Error": "Chyba",
      "Wait": "Čaká sa",
      "Running": "Spustené",
    },
    "Danger": {
      "Delete": "Potvrdiť vymazanie?",
    },
    "GenerateParams": "Parametre generovania",
    "Detail": "Podrobnosti",
  },
  "ApiError": {
    "Timeout": "Čas požiadavky vypršal. Zopakujte ju alebo skontrolujte adresu v pokročilých nastaveniach.",
    "Quota": "Nedostatočná kvóta poskytovateľa. Skontrolujte zostatok, platby a limity.",
    "AccessCode": "Neplatný prístupový kód stránky. Skontrolujte kód.",
    "InvalidKey": "API Key je neplatný alebo vypršal. Skontrolujte Key zvoleného poskytovateľa.",
    "Permission": "Prístup zamietnutý. Skontrolujte oprávnenia modelu a regionálne obmedzenia.",
    "Model": "Model alebo rozhranie sa nenašlo. Skontrolujte ID a adresu v pokročilých nastaveniach.",
    "RateLimit": "Príliš veľa požiadaviek alebo dosiahnutý limit. Skúste neskôr a skontrolujte kvótu.",
    "Parameters": "Nekompatibilné parametre. Skontrolujte ID modelu a pokročilé nastavenia.",
    "Unavailable": "Poskytovateľ je dočasne nedostupný. Skúste to neskôr.",
    "Empty": "Nebol vrátený platný obsah. Skontrolujte stav modelu a zopakujte požiadavku.",
    "Network": "Zlyhalo sieťové pripojenie. Skontrolujte sieť, adresu a nastavenia CORS tretej strany.",
    "Generic": "Požiadavka zlyhala. Skontrolujte API Key, model a rozhranie poskytovateľa.",
  },
};

export default sk;
