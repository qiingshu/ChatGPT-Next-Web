import { getClientConfig } from "../config/client";
import { SAAS_CHAT_UTM_URL } from "@/app/constant";
import type { LocaleType } from "./index";

const isApp = !!getClientConfig()?.isApp;
const da: LocaleType = {
  WIP: "Der kommer snart mere...",
  Error: {
    Unauthorized: isApp
      ? `Hov, der skete en fejl. Sådan kan du komme videre:
       \\ 1️⃣ Er du ny her? [Tryk for at starte nu 🚀](${SAAS_CHAT_UTM_URL})
       \\ 2️⃣ Vil du bruge dine egne OpenAI-nøgler? [Tryk her](/#/settings) for at ændre indstillinger ⚙️`
      : `Hov, der skete en fejl. Lad os løse det:
       \\ 1️⃣ Er du ny her? [Tryk for at starte nu 🚀](${SAAS_CHAT_UTM_URL})
       \\ 2️⃣ Bruger du en privat opsætning? [Tryk her](/#/auth) for at taste din nøgle 🔑
       \\ 3️⃣ Vil du bruge dine egne OpenAI-nøgler? [Tryk her](/#/settings) for at ændre indstillinger ⚙️
       `,
  },
  Auth: {
    Return: "Tilbage",
    Title: "Adgangskode",
    Tips: "Skriv venligst koden herunder",
    SubTips: "Eller brug din egen OpenAI- eller Google-nøgle",
    Input: "Adgangskode",
    Confirm: "OK",
    Later: "Senere",
    SaasTips: "Hvis det er for svært, kan du starte nu",
  
    "TopTips": "Introduktionstilbud på NextChat AI",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} beskeder`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} beskeder`,
    EditMessage: {
      Title: "Rediger beskeder",
      Topic: {
        Title: "Emne",
        SubTitle: "Skift emne for denne chat",
      },
    },
    Actions: {
      ChatList: "Gå til chatliste",
      CompressedHistory: "Komprimeret historie",
      Export: "Eksporter alle beskeder som Markdown",
      Copy: "Kopiér",
      Stop: "Stop",
      Retry: "Prøv igen",
      Pin: "Fastgør",
      PinToastContent: "1 besked er nu fastgjort",
      PinToastAction: "Se",
      Delete: "Slet",
      Edit: "Rediger",
      FullScreen: "Fuld skærm",
      RefreshTitle: "Opdatér titel",
      RefreshToast: "Anmodning om ny titel sendt",
      Speech: "Afspil",
      StopSpeech: "Stop",
    },
    Commands: {
      new: "Ny chat",
      newm: "Ny chat med persona",
      next: "Næste chat",
      prev: "Forrige chat",
      clear: "Ryd alt før",
      fork: "Kopiér chat",
      del: "Slet chat",
    },
    InputActions: {
      Stop: "Stop",
      ToBottom: "Ned til nyeste",
      Theme: {
        auto: "Automatisk",
        light: "Lyst tema",
        dark: "Mørkt tema",
      },
      Prompt: "Prompts",
      Masks: "Personaer",
      Clear: "Ryd kontekst",
      Settings: "Indstillinger",
      UploadImage: "Upload billeder",
    },
    Rename: "Omdøb chat",
    Typing: "Skriver…",
    Input: (submitKey: string) => {
      let inputHints = `${submitKey} for at sende`;
      if (submitKey === "Enter") {
        inputHints += ", Shift + Enter for ny linje";
      }
      return (
        inputHints + ", / for at søge i prompts, : for at bruge kommandoer"
      );
    },
    Send: "Send",
    StartSpeak: "Start oplæsning",
    StopSpeak: "Stop oplæsning",
    Config: {
      Reset: "Nulstil til standard",
      SaveAs: "Gem som persona",
    },
    IsContext: "Ekstra prompt til baggrund",
    ShortcutKey: {
      Title: "Hurtigtaster",
      newChat: "Åbn ny chat",
      focusInput: "Fokus på tekstfeltet",
      copyLastMessage: "Kopiér sidste svar",
      copyLastCode: "Kopiér sidste kodeblok",
      showShortcutKey: "Vis hurtigtaster",
      clearContext: "Ryd kontekst",
    },
  },
  Export: {
    Title: "Eksportér beskeder",
    Copy: "Kopiér alt",
    Download: "Download",
    MessageFromYou: "Fra dig",
    MessageFromChatGPT: "Fra ChatGPT",
    Share: "Del til ShareGPT",
    Format: {
      Title: "Filformat",
      SubTitle: "Vælg enten Markdown eller PNG-billede",
    },
    IncludeContext: {
      Title: "Tag baggrund med",
      SubTitle: "Skal ekstra baggrund (persona) med i eksporten?",
    },
    Steps: {
      Select: "Vælg",
      Preview: "Forhåndsvis",
    },
    Image: {
      Toast: "Laver billede...",
      Modal: "Tryk længe eller højreklik for at gemme",
    },
    Artifacts: {
      Title: "Del side",
      Error: "Fejl ved deling",
    },
  },
  Select: {
    Search: "Søg",
    All: "Vælg alle",
    Latest: "Vælg nyeste",
    Clear: "Ryd alt",
  },
  Memory: {
    Title: "Huskesætning",
    EmptyContent: "Ingenting lige nu.",
    Send: "Send huskesætning",
    Copy: "Kopiér huskesætning",
    Reset: "Nulstil chat",
    ResetConfirm:
      "Dette sletter nuværende samtale og hukommelse. Er du sikker?",
  },
  Home: {
    NewChat: "Ny Chat",
    DeleteChat: "Vil du slette den valgte chat?",
    DeleteToast: "Chat slettet",
    Revert: "Fortryd",
  },
  Settings: {
    Title: "Indstillinger",
    SubTitle: "Alle indstillinger",
    ShowPassword: "Vis kodeord",
    Danger: {
      Reset: {
        Title: "Nulstil alle indstillinger",
        SubTitle: "Gendan alt til standard",
        Action: "Nulstil",
        Confirm: "Vil du virkelig nulstille alt?",
      },
      Clear: {
        Title: "Slet alle data",
        SubTitle: "Sletter alt om beskeder og indstillinger",
        Action: "Slet",
        Confirm: "Er du sikker på, at du vil slette alt?",
      },
    },
    Lang: {
      Name: "Sprog",
      All: "Alle sprog",
    },
    Avatar: "Avatar",
    FontSize: {
      Title: "Skriftstørrelse",
      SubTitle: "Vælg, hvor stor teksten skal være",
    },
    FontFamily: {
      Title: "Skrifttype",
      SubTitle: "Hvis tom, bruger den standard skrifttype",
      Placeholder: "Skrifttype-navn",
    },
    InjectSystemPrompts: {
      Title: "Tilføj system-prompt",
      SubTitle: "Læg altid en ekstra prompt først i anmodninger",
    },
    InputTemplate: {
      Title: "Tekstskabelon",
      SubTitle: "Den seneste besked placeres i denne skabelon",
    },
    Update: {
      Version: (x: string) => `Version: ${x}`,
      IsLatest: "Du har nyeste version",
      CheckUpdate: "Tjek efter opdatering",
      IsChecking: "Tjekker...",
      FoundUpdate: (x: string) => `Ny version fundet: ${x}`,
      GoToUpdate: "Opdatér",
      Success: "Opdatering lykkedes.",
      Failed: "Opdatering mislykkedes.",
    },
    SendKey: "Tast for send",
    Theme: "Tema",
    TightBorder: "Stram kant",
    SendPreviewBubble: {
      Title: "Forhåndsvisnings-boble",
      SubTitle: "Vis tekst, før den sendes",
    },
    AutoGenerateTitle: {
      Title: "Lav titel automatisk",
      SubTitle: "Foreslå en titel ud fra chatten",
    },
    Sync: {
      CloudState: "Seneste opdatering",
      NotSyncYet: "Endnu ikke synkroniseret",
      Success: "Synkronisering lykkedes",
      Fail: "Synkronisering mislykkedes",
      Config: {
        Modal: {
          Title: "Indstil synk",
          Check: "Tjek forbindelse",
        },
        SyncType: {
          Title: "Synk-type",
          SubTitle: "Vælg en synk-tjeneste",
        },
        Proxy: {
          Title: "Aktivér proxy",
          SubTitle: "Brug proxy for at undgå netværksproblemer",
        },
        ProxyUrl: {
          Title: "Proxy-adresse",
          SubTitle: "Bruges kun til projektets egen proxy",
        },
        WebDav: {
          Endpoint: "WebDAV-adresse",
          UserName: "Brugernavn",
          Password: "Kodeord",
        },
        UpStash: {
          Endpoint: "UpStash Redis REST URL",
          UserName: "Backup-navn",
          Password: "UpStash Redis REST Token",
        },
      },
      LocalState: "Lokale data",
      Overview: (overview: any) =>
        `${overview.chat} chats, ${overview.message} beskeder, ${overview.prompt} prompts, ${overview.mask} personaer`,
      ImportFailed: "Import mislykkedes",
    },
    Mask: {
      Splash: {
        Title: "Persona-forside",
        SubTitle: "Vis denne side, når du opretter ny chat",
      },
      Builtin: {
        Title: "Skjul indbyggede personaer",
        SubTitle: "Vis ikke de indbyggede personaer i listen",
      },
    },
    Prompt: {
      Disable: {
        Title: "Slå auto-forslag fra",
        SubTitle: "Tast / for at få forslag",
      },
      List: "Prompt-liste",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} indbygget, ${custom} brugerdefineret`,
      Edit: "Rediger",
      Modal: {
        Title: "Prompt-liste",
        Add: "Tilføj",
        Search: "Søg prompts",
      },
      EditModal: {
        Title: "Rediger prompt",
      },
    },
    HistoryCount: {
      Title: "Antal beskeder, der følger med",
      SubTitle: "Hvor mange af de tidligere beskeder, der sendes hver gang",
    },
    CompressThreshold: {
      Title: "Komprimeringsgrænse",
      SubTitle:
        "Hvis chatten bliver for lang, vil den komprimeres efter dette antal tegn",
    },
    Usage: {
      Title: "Brug og saldo",
      SubTitle(used: any, total: any) {
        return `Du har brugt $${used} i denne måned, og din grænse er $${total}.`;
      },
      IsChecking: "Tjekker...",
      Check: "Tjek igen",
      NoAccess: "Indtast API-nøgle for at se forbrug",
    },
    Access: {
      AccessCode: {
        Title: "Adgangskode",
        SubTitle: "Adgangskontrol er slået til",
        Placeholder: "Skriv kode her",
      },
      CustomEndpoint: {
        Title: "Brugerdefineret adresse",
        SubTitle: "Brug Azure eller OpenAI fra egen server",
      },
      Provider: {
        Title: "Model-udbyder",
        SubTitle: "Vælg Azure eller OpenAI",
      },
      OpenAI: {
        ApiKey: {
          Title: "OpenAI API Key",
          SubTitle: "Brug din egen nøgle",
          Placeholder: "OpenAI API Key",
        },
        Endpoint: {
          Title: "Grænsefladeadresse",
          SubTitle: "Skal starte med http(s):// eller /api/openai som standard",
        },
      },
      Azure: {
        ApiKey: {
          Title: "Azure API Key",
          SubTitle: "Hent din nøgle fra Azure-portalen",
          Placeholder: "Azure API Key",
        },
        Endpoint: {
          Title: "Grænsefladeadresse",
          SubTitle: "F.eks.: ",
        },
        ApiVerion: {
          Title: "Azure Api Version",
          SubTitle: "Hentet fra Azure-portalen",
        },
      },
      Anthropic: {
        ApiKey: {
          Title: "Anthropic API Key",
          SubTitle: "Brug din egen Anthropic-nøgle",
          Placeholder: "Anthropic API Key",
        },
        Endpoint: {
          Title: "Endpoint-adresse",
          SubTitle: "F.eks.: ",
        },
        ApiVerion: {
          Title: "API-version (Claude)",
          SubTitle: "Vælg den ønskede version",
        },
      },
      Baidu: {
        ApiKey: {
          Title: "Baidu API Key",
          SubTitle: "Din egen Baidu-nøgle",
          Placeholder: "Baidu API Key",
        },
        SecretKey: {
          Title: "Baidu hemmelig nøgle",
          SubTitle: "Din egen hemmelige nøgle fra Baidu",
          Placeholder: "Baidu Secret Key",
        },
        Endpoint: {
          Title: "Adresse",
          SubTitle: "Kan ikke ændres, se .env",
        },
      },
      Tencent: {
        ApiKey: {
          Title: "Tencent API Key",
          SubTitle: "Din egen nøgle fra Tencent",
          Placeholder: "Tencent API Key",
        },
        SecretKey: {
          Title: "Tencent hemmelig nøgle",
          SubTitle: "Din egen hemmelige nøgle fra Tencent",
          Placeholder: "Tencent Secret Key",
        },
        Endpoint: {
          Title: "Adresse",
          SubTitle: "Kan ikke ændres, se .env",
        },
      },
      ByteDance: {
        ApiKey: {
          Title: "ByteDance API Key",
          SubTitle: "Din egen nøgle til ByteDance",
          Placeholder: "ByteDance API Key",
        },
        Endpoint: {
          Title: "Adresse",
          SubTitle: "F.eks.: ",
        },
      },
      Alibaba: {
        ApiKey: {
          Title: "Alibaba API Key",
          SubTitle: "Din egen Alibaba Cloud-nøgle",
          Placeholder: "Alibaba API Key",
        },
        Endpoint: {
          Title: "Adresse",
          SubTitle: "F.eks.: ",
        },
      },
      Moonshot: {
        ApiKey: {
          Title: "Moonshot API Key",
          SubTitle: "Din egen Moonshot-nøgle",
          Placeholder: "Moonshot API Key",
        },
        Endpoint: {
          Title: "Adresse",
          SubTitle: "F.eks.: ",
        },
      },
      DeepSeek: {
        ApiKey: {
          Title: "DeepSeek API Key",
          SubTitle: "Din egen DeepSeek-nøgle",
          Placeholder: "DeepSeek API Key",
        },
        Endpoint: {
          Title: "Adresse",
          SubTitle: "F.eks.: ",
        },
      },
      XAI: {
        ApiKey: {
          Title: "XAI API Key",
          SubTitle: "Din egen XAI-nøgle",
          Placeholder: "XAI API Key",
        },
        Endpoint: {
          Title: "Adresse",
          SubTitle: "F.eks.: ",
        },
      },
      ChatGLM: {
        ApiKey: {
          Title: "ChatGLM API Key",
          SubTitle: "Din egen ChatGLM-nøgle",
          Placeholder: "ChatGLM API Key",
        },
        Endpoint: {
          Title: "Adresse",
          SubTitle: "F.eks.: ",
        },
      },
      SiliconFlow: {
        ApiKey: {
          Title: "SiliconFlow API Key",
          SubTitle: "Din egen SiliconFlow-nøgle",
          Placeholder: "SiliconFlow API Key",
        },
        Endpoint: {
          Title: "Adresse",
          SubTitle: "F.eks.: ",
        },
      },
      Stability: {
        ApiKey: {
          Title: "Stability API Key",
          SubTitle: "Din egen Stability-nøgle",
          Placeholder: "Stability API Key",
        },
        Endpoint: {
          Title: "Adresse",
          SubTitle: "F.eks.: ",
        },
      },
      Iflytek: {
        ApiKey: {
          Title: "Iflytek API Key",
          SubTitle: "Nøgle fra Iflytek",
          Placeholder: "Iflytek API Key",
        },
        ApiSecret: {
          Title: "Iflytek hemmelig nøgle",
          SubTitle: "Hentet fra Iflytek",
          Placeholder: "Iflytek API Secret",
        },
        Endpoint: {
          Title: "Adresse",
          SubTitle: "F.eks.: ",
        },
      },
      CustomModel: {
        Title: "Egne modelnavne",
        SubTitle: "Skriv komma-adskilte navne",
      },
      Google: {
        ApiKey: {
          Title: "Google API Key",
          SubTitle: "Få din nøgle hos Google AI",
          Placeholder: "Google API Key",
        },
        Endpoint: {
          Title: "Adresse",
          SubTitle: "F.eks.: ",
        },
        ApiVersion: {
          Title: "API-version (til gemini-pro)",
          SubTitle: "Vælg en bestemt version",
        },
        GoogleSafetySettings: {
          Title: "Google sikkerhedsindstillinger",
          SubTitle: "Vælg et niveau for indholdskontrol",
        },
      },
    
      "SaasStart": {
        "Title": "Brug NextChat AI",
        "Label": "Mest økonomiske mulighed",
        "SubTitle": "Vedligeholdt af NextChat; kræver ingen opsætning",
        "ChatNow": "Start nu",
      },
    },
    Model: "Model",
    CompressModel: {
      Title: "Opsummeringsmodel",
      SubTitle: "Bruges til at korte historik ned og lave titel",
    },
    Temperature: {
      Title: "Temperatur",
      SubTitle: "Jo højere tal, jo mere kreativt svar",
    },
    TopP: {
      Title: "Top P",
      SubTitle: "Skal ikke ændres sammen med temperatur",
    },
    MaxTokens: {
      Title: "Maks. længde",
      SubTitle: "Hvor mange tokens (ord/stykker tekst) der kan bruges",
    },
    PresencePenalty: {
      Title: "Nye emner",
      SubTitle: "Jo højere tal, jo mere nyt indhold",
    },
    FrequencyPenalty: {
      Title: "Gentagelsesstraf",
      SubTitle: "Jo højere tal, jo mindre gentagelse",
    },
    TTS: {
      Enable: {
        Title: "Tænd for oplæsning (TTS)",
        SubTitle: "Slå tekst-til-tale til",
      },
      Autoplay: {
        Title: "Automatisk oplæsning",
        SubTitle: "Laver lyd automatisk, hvis TTS er slået til",
      },
      Model: "Model",
      Voice: {
        Title: "Stemme",
        SubTitle: "Hvilken stemme der bruges til lyd",
      },
      Speed: {
        Title: "Hastighed",
        SubTitle: "Hvor hurtigt der oplæses",
      },
      Engine: "TTS-motor",
    },
    Realtime: {
      Enable: {
        Title: "Live-chat",
        SubTitle: "Slå live-svar til",
      },
      Provider: {
        Title: "Modeludbyder",
        SubTitle: "Vælg forskellig udbyder",
      },
      Model: {
        Title: "Model",
        SubTitle: "Vælg en model",
      },
      ApiKey: {
        Title: "API Key",
        SubTitle: "Din nøgle",
        Placeholder: "API Key",
      },
      Azure: {
        Endpoint: {
          Title: "Adresse",
          SubTitle: "Endpoint til Azure",
        },
        Deployment: {
          Title: "Udrulningsnavn",
          SubTitle: "Navn for dit Azure-setup",
        },
      },
      Temperature: {
        Title: "Temperatur",
        SubTitle: "Højere tal = mere varierede svar",
      },
    },
  
    "LocalizationInfo": {
      "Edition": "NextChat – tilpasset udgave",
      "Timeout": "Forbindelsen fik timeout efter 30 sekunder. Kontrollér netværk og API-adresse.",
      "Success": "Forbindelsen virker",
      "NoResponse": "Udbyderen returnerede ikke et gyldigt svar. Kontrollér model og grænseflade.",
      "Upstream": "Oprindelig basisversion",
      "Details": "Detaljerede versionsoplysninger",
      "Security": "Id for sikkerhedsvedligeholdelse",
      "Commit": "Build-commit",
      "Official": "Officiel referenceversion",
      "Unavailable": "Ikke tilgængelig",
      "Note": "Indeholder udvalgte rettelser, ikke hele den officielle v2.16.1. Officielle versionsoplysninger er kun til reference.",
    },
    "ProviderSetup": {
      "ModelIdPlaceholder": "Model-id@udbyder",
      "Provider": "Udbyder",
      "ProviderHelp": "Vælg en udbyder, og indtast dens API Key for at bruge standardmodellen",
      "ProviderKeyPlaceholder": "Indtast denne udbyders API Key",
      "CurrentModel": "Aktuel samtalemodel",
      "DefaultModel": "Standardmodel",
      "ModelHelp": "Tilpas grænseflade og egne modeller i avancerede indstillinger",
      "TestModel": "Test den aktuelle model",
      "TestHelp": "Sender en kort anmodning, der kan koste API-gebyrer; gemmer ikke samtalehistorik",
      "TestConnection": "Test forbindelse",
      "Testing": "Tester…",
      "Advanced": "Avancerede indstillinger",
      "OfficialURL": "Officiel adresse",
      "DefaultRoute": "Bruger som standard dette websteds rute",
    },
    "SafetyLabels": {
      "BLOCK_NONE": "Ingen",
      "BLOCK_ONLY_HIGH": "Kun høj",
      "BLOCK_MEDIUM_AND_ABOVE": "Middel og derover",
      "BLOCK_LOW_AND_ABOVE": "Lav og derover",
    },
  },
  Store: {
    DefaultTopic: "Ny samtale",
    BotHello: "Hej! Hvordan kan jeg hjælpe dig i dag?",
    Error: "Noget gik galt. Prøv igen senere.",
    Prompt: {
      History: (content: string) =>
        "Her er et kort resume af, hvad vi har snakket om: " + content,
      Topic:
        "Find en kort overskrift med 4-5 ord om emnet. Ingen tegnsætning eller anførselstegn.",
      Summarize:
        "Skriv et kort resumé (under 200 ord) af vores samtale til senere brug.",
    },
  },
  Copy: {
    Success: "Kopieret",
    Failed: "Kunne ikke kopiere. Giv adgang til udklipsholder.",
  },
  Download: {
    Success: "Filen er downloadet.",
    Failed: "Download fejlede.",
  },
  Context: {
    Toast: (x: any) => `Inkluderer ${x} ekstra prompts`,
    Edit: "Chatindstillinger",
    Add: "Tilføj prompt",
    Clear: "Kontekst ryddet",
    Revert: "Fortryd",
  },
  Discovery: {
    Name: "Søgning og plugins",
  },
  Mcp: {
    Name: "MCP",
  
    "UI": {
      "Market": "MCP-marked",
      "PresetLoadFailed": "Kunne ikke indlæse forudindstillede servere",
      "InitFailed": "Kunne ikke indlæse starttilstanden",
      "ConfigSaved": "Serverkonfiguration gemt",
      "ConfigSaveFailed": "Kunne ikke gemme konfiguration",
      "ToolsFailed": "Kunne ikke indlæse værktøjer",
      "Stopped": "Stoppet",
      "StopFailed": "Kunne ikke stoppe serveren",
      "StartFailed": "Kunne ikke starte serveren; se logfiler",
      "RestartingClients": "Genstarter alle klienter",
      "RestartFailed": "Kunne ikke genstarte klienter",
      "Initializing": "Initialiserer",
      "NoServers": "Ingen tilgængelige servere",
      "OpenRepo": "Åbn kodelager",
      "Start": "Start",
      "Tools": "Værktøjer",
      "Add": "Tilføj",
      "RestartAll": "Genstart alle",
      "Search": "Søg efter MCP-servere",
      "ConfigureServer": "Konfigurér server",
      "ServerDetails": "Serveroplysninger",
      "NoTools": "Ingen tilgængelige værktøjer",
      "LoadingPresets": "Indlæser forudindstillede servere…",
      "ConfiguredServers": "Konfigurerede servere",
      "UpdatingConfig": "Opdaterer konfiguration…",
      "CreatingClient": "Opretter MCP-klient…",
      "Stopping": "Stopper server…",
      "Starting": "Starter server…",
      "RestartingServers": "Genstarter alle servere…",
      "ExecutionFailed": "MCP-kørsel mislykkedes",
    },
  },
  FineTuned: {
    Sysmessage: "Du er en hjælper, der skal...",
  },
  SearchChat: {
    Name: "Søg",
    Page: {
      Title: "Søg i tidligere chats",
      Search: "Skriv her for at søge",
      NoResult: "Ingen resultater",
      NoData: "Ingen data",
      Loading: "Henter...",
      SubTitle: (count: number) => `Fandt ${count} resultater`,
    },
    Item: {
      View: "Vis",
    },
  },
  Plugin: {
    Name: "Udvidelse",
    Page: {
      Title: "Udvidelser",
      SubTitle: (count: number) => "Udvidelser: " + count,
      Search: "Søg plugin",
      Create: "Opret nyt",
      Find: "Du kan finde flere plugins på GitHub: ",
    },
    Item: {
      Info: (count: number) => `${count} metode`,
      View: "Vis",
      Edit: "Rediger",
      Delete: "Slet",
      DeleteConfirm: "Vil du slette?",
    },
    Auth: {
      None: "Ingen",
      Basic: "Basic",
      Bearer: "Bearer",
      Custom: "Tilpasset",
      CustomHeader: "Parameternavn",
      Token: "Token",
      Proxy: "Brug Proxy",
      ProxyDescription: "Løs CORS-problemer med Proxy",
      Location: "Sted",
      LocationHeader: "Header",
      LocationQuery: "Query",
      LocationBody: "Body",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Rediger Plugin ${readonly ? "(skrivebeskyttet)" : ""}`,
      Download: "Hent",
      Auth: "Godkendelsestype",
      Content: "OpenAPI Schema",
      Load: "Hent fra URL",
      Method: "Metode",
      Error: "Fejl i OpenAPI Schema",
    },
  
    "Accessibility": {
      "Create": "Opret: Udvidelse",
      "Edit": "Rediger: Udvidelse",
      "Save": "Gem: Udvidelse",
      "SchemaUrl": "Udvidelse Schema URL",
      "LoadSchema": "Indlæs fra URL: Udvidelse Schema",
      "Schema": "Udvidelse Schema",
    },
  },
  Mask: {
    Name: "Persona",
    Page: {
      Title: "Prompts som personaer",
      SubTitle: (count: number) => `${count} skabeloner`,
      Search: "Søg skabeloner",
      Create: "Opret ny",
    },
    Item: {
      Info: (count: number) => `${count} prompts`,
      Chat: "Chat",
      View: "Vis",
      Edit: "Rediger",
      Delete: "Slet",
      DeleteConfirm: "Vil du slette?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Rediger skabelon ${readonly ? "(skrivebeskyttet)" : ""}`,
      Download: "Download",
      Clone: "Klon",
    },
    Config: {
      Avatar: "Chat-avatar",
      Name: "Chat-navn",
      Sync: {
        Title: "Brug globale indstillinger",
        SubTitle: "Gældende for denne chat",
        Confirm: "Erstat nuværende indstillinger med globale?",
      },
      HideContext: {
        Title: "Skjul ekstra prompts",
        SubTitle: "Vis dem ikke på chat-skærmen",
      },
      Artifacts: {
        Title: "Brug Artefakter",
        SubTitle: "Gør det muligt at vise HTML-sider",
      },
      CodeFold: {
        Title: "Fold kode sammen",
        SubTitle: "Luk/åbn lange kodestykker automatisk",
      },
      Share: {
        Title: "Del denne persona",
        SubTitle: "Få et link til denne skabelon",
        Action: "Kopiér link",
      },
    },
  },
  NewChat: {
    Return: "Tilbage",
    Skip: "Start straks",
    Title: "Vælg en persona",
    SubTitle: "Chat med den persona, du vælger",
    More: "Se flere",
    NotShow: "Vis ikke igen",
    ConfirmNoShow:
      "Er du sikker på, at du ikke vil se det igen? Du kan altid slå det til under indstillinger.",
  },
  UI: {
    Confirm: "OK",
    Cancel: "Fortryd",
    Close: "Luk",
    Create: "Opret",
    Edit: "Rediger",
    Export: "Eksporter",
    Import: "Importér",
    Sync: "Synk",
    Config: "Konfigurer",
  
    "Save": "Gem",
    "Loading": "Indlæser…",
    "Seed": "Tilfældighedsfrø",
    "User": "Bruger",
    "Assistant": "Assistent",
    "System": "System",
    "Text": "Tekst",
    "Image": "Billede",
    "Standard": "Standard",
    "Vivid": "Livlig",
    "Natural": "Naturlig",
    "ErrorTitle": "Der opstod en fejl",
    "ReportError": "Rapportér fejlen",
    "ClearData": "Ryd alle data",
    "AssistantTagline": "Byg din egen AI-assistent.",
    "EmptyPrompt": "Ny prompt",
    "EmptyPromptContent": "Indtast promptens indhold",
    "AllFiles": "Alle filer",
  
    "Refresh": "Genindlæs",
    "HidePassword": "Skjul adgangskode",
  },
  Exporter: {
    Description: {
      Title: "Kun beskeder efter sidste rydning vises",
    },
    Model: "Model",
    Messages: "Beskeder",
    Topic: "Emne",
    Time: "Tid",
  },
  URLCommand: {
    Code: "Så ud til, at der var en kode i linket. Vil du bruge den?",
    Settings: "Så ud til, at der var indstillinger i linket. Vil du bruge dem?",
  },
  SdPanel: {
    Prompt: "Billedbeskrivelse",
    NegativePrompt: "Negativ prompt",
    PleaseInput: (name: string) => `Indtast: ${name}`,
    AspectRatio: "Billedformat",
    ImageStyle: "Stil",
    OutFormat: "Uddataformat",
    AIModel: "AI-model",
    ModelVersion: "Version",
    Submit: "Send",
    ParamIsRequired: (name: string) => `${name} er krævet`,
    Styles: {
      D3Model: "3D-model",
      AnalogFilm: "Analogfilm",
      Anime: "Japansk animation",
      Cinematic: "cinematisk",
      ComicBook: "tegneserie",
      DigitalArt: "Digital kunst",
      Enhance: "Forbedret",
      FantasyArt: "Fantasikunst",
      Isometric: "Isometrisk",
      LineArt: "Stregtegning",
      LowPoly: "Få polygoner",
      ModelingCompound: "Modellervoks",
      NeonPunk: "Neonpunk",
      Origami: "Papirfoldning",
      Photographic: "fotografisk",
      PixelArt: "Pixelkunst",
      TileTexture: "Flisetekstur",
    },
  },
  Sd: {
    SubTitle: (count: number) => `${count} billeder`,
    Actions: {
      Params: "Se indstillinger",
      Copy: "Kopiér prompt",
      Delete: "Slet",
      Retry: "Prøv igen",
      ReturnHome: "Til forsiden",
      History: "Historik",
    },
    EmptyRecord: "Ingen billeder endnu",
    Status: {
      Name: "Status",
      Success: "Ok",
      Error: "Fejl",
      Wait: "Venter",
      Running: "I gang",
    },
    Danger: {
      Delete: "Vil du slette?",
    },
    GenerateParams: "Genereringsvalg",
    Detail: "Detaljer",
  },

  "ApiError": {
    "Timeout": "Anmodningen fik timeout. Prøv igen, eller kontrollér adressen i avancerede indstillinger.",
    "Quota": "Udbyderens kvote er utilstrækkelig. Kontrollér saldo, betaling og forbrugsgrænser.",
    "AccessCode": "Ugyldig adgangskode til webstedet. Kontrollér din adgangskode.",
    "InvalidKey": "Ugyldig eller udløbet API Key. Kontrollér den valgte udbyders Key.",
    "Permission": "Adgang nægtet. Kontrollér modelrettigheder og regionale begrænsninger.",
    "Model": "Model eller grænseflade ikke tilgængelig. Kontrollér model-id og adresse i avancerede indstillinger.",
    "RateLimit": "For mange anmodninger eller grænse nået. Prøv senere, og kontrollér kvoten.",
    "Parameters": "Uforenelige parametre. Kontrollér model-id og parametre i avancerede indstillinger.",
    "Unavailable": "Udbyderen er midlertidigt utilgængelig. Prøv senere.",
    "Empty": "Intet gyldigt indhold returneret. Kontrollér modellen, og prøv igen.",
    "Network": "Netværksforbindelsen mislykkedes. Kontrollér netværk, adresse og tredjepartens CORS-indstillinger.",
    "Generic": "Anmodningen mislykkedes. Kontrollér udbyderens API Key, model og adresse.",
  },
};

export default da;
