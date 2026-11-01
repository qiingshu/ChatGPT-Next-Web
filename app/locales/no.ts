import type { LocaleType } from "./index";
import { getClientConfig } from "../config/client";
import { SAAS_CHAT_UTM_URL } from "@/app/constant";
const isApp = !!getClientConfig()?.isApp;

const no: LocaleType = {
  WIP: "Arbeid pågår ...",
  Error: {
    Unauthorized: isApp
      ? `😆 Samtalen har støtt på noen problemer, ikke bekymre deg:
    \\ 1️⃣ Hvis du vil starte uten konfigurasjon, [klikk her for å begynne å chatte umiddelbart 🚀](${SAAS_CHAT_UTM_URL})
    \\ 2️⃣ Hvis du vil bruke dine egne OpenAI-ressurser, klikk [her](/#/settings) for å endre innstillingene ⚙️`
      : `😆 Samtalen har støtt på noen problemer, ikke bekymre deg:
    \ 1️⃣ Hvis du vil starte uten konfigurasjon, [klikk her for å begynne å chatte umiddelbart 🚀](${SAAS_CHAT_UTM_URL})
    \ 2️⃣ Hvis du bruker en privat distribusjonsversjon, klikk [her](/#/auth) for å skrive inn tilgangsnøkkelen 🔑
    \ 3️⃣ Hvis du vil bruke dine egne OpenAI-ressurser, klikk [her](/#/settings) for å endre innstillingene ⚙️
 `,
  },
  Auth: {
    Title: "Passord påkrevd",
    Tips: "Administrator har aktivert passordbeskyttelse. Vennligst skriv inn tilgangskoden nedenfor",
    SubTips: "Eller skriv inn din OpenAI eller Google API-nøkkel",
    Input: "Skriv tilgangskoden her",
    Confirm: "Bekreft",
    Later: "Kom tilbake senere",
    Return: "Tilbake",
    SaasTips:
      "Konfigurasjonen er for komplisert, jeg vil bruke det med en gang",
    TopTips:
      "🥳 NextChat AI lanseringstilbud, lås opp OpenAI o1, GPT-4o, Claude-3.5 og de nyeste store modellene nå",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} samtaler`,
  },
  Chat: {
    SubTitle: (count: number) => `Totalt ${count} samtaler`,
    EditMessage: {
      Title: "Rediger meldingshistorikk",
      Topic: {
        Title: "Samtaleemne",
        SubTitle: "Endre nåværende samtaleemne",
      },
    },
    Actions: {
      ChatList: "Vis meldingsliste",
      CompressedHistory: "Vis komprimert historikk",
      Export: "Eksporter samtaler",
      Copy: "Kopier",
      Stop: "Stopp",
      Retry: "Prøv igjen",
      Pin: "Fest",
      PinToastContent:
        "1 samtale er festet til forhåndsdefinerte oppfordringer",
      PinToastAction: "Se",
      Delete: "Slett",
      Edit: "Rediger",
      RefreshTitle: "Oppdater tittel",
      RefreshToast: "Forespørsel om titteloppdatering sendt",
    
      "FullScreen": "Fullskjerm",
      "Speech": "Les opp",
      "StopSpeech": "Stopp",
    },
    Commands: {
      new: "Ny samtale",
      newm: "Start samtale fra maske",
      next: "Neste samtale",
      prev: "Forrige samtale",
      clear: "Rydd kontekst",
      del: "Slett samtale",
    
      "fork": "Kopier samtale",
    },
    InputActions: {
      Stop: "Stopp respons",
      ToBottom: "Rull til nyeste",
      Theme: {
        auto: "Automatisk tema",
        light: "Lyst tema",
        dark: "Mørkt tema",
      },
      Prompt: "Hurtigkommando",
      Masks: "Alle masker",
      Clear: "Rydd samtale",
      Settings: "Samtaleinnstillinger",
      UploadImage: "Last opp bilde",
    },
    Rename: "Gi nytt navn til samtale",
    Typing: "Skriver…",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} send`;
      if (submitKey === "Enter") {
        inputHints += "，Shift + Enter for linjeskift";
      }
      return (
        inputHints + "，/ for å utløse autoutfylling, : for å utløse kommando"
      );
    },
    Send: "Send",
    Config: {
      Reset: "Fjern minne",
      SaveAs: "Lagre som maske",
    },
    IsContext: "Forhåndsdefinerte oppfordringer",
  
    "StartSpeak": "Byrj å snakke",
    "StopSpeak": "Stopp",
    "ShortcutKey": {
      "Title": "Tastatursnarvegar",
      "newChat": "Opne ny samtale",
      "focusInput": "Fokuser skrivefeltet",
      "copyLastMessage": "Kopier siste svar",
      "copyLastCode": "Kopier siste kodeblokk",
      "showShortcutKey": "Vis snarvegar",
      "clearContext": "Rydd samtale",
    },
  },
  Export: {
    Title: "Del samtalehistorikk",
    Copy: "Kopier alt",
    Download: "Last ned fil",
    Share: "Del til ShareGPT",
    MessageFromYou: "Bruker",
    MessageFromChatGPT: "ChatGPT",
    Format: {
      Title: "Eksporterformat",
      SubTitle: "Kan eksporteres som Markdown-tekst eller PNG-bilde",
    },
    IncludeContext: {
      Title: "Inkluder maske kontekst",
      SubTitle: "Skal maske kontekst vises i meldinger",
    },
    Steps: {
      Select: "Velg",
      Preview: "Forhåndsvis",
    },
    Image: {
      Toast: "Genererer skjermbilde",
      Modal: "Langtrykk eller høyreklikk for å lagre bilde",
    },
  
    "Artifacts": {
      "Title": "Del Artifacts",
      "Error": "Del Artifacts — Feil",
    },
  },
  Select: {
    Search: "Søk meldinger",
    All: "Velg alle",
    Latest: "Siste meldinger",
    Clear: "Fjern valg",
  },
  Memory: {
    Title: "Historisk sammendrag",
    EmptyContent: "Samtaleinnholdet er for kort, ingen oppsummering nødvendig",
    Send: "Automatisk komprimere samtalehistorikk og sende som kontekst",
    Copy: "Kopier sammendrag",
    Reset: "[unused]",
    ResetConfirm: "Er du sikker på at du vil tømme historisk sammendrag?",
  },
  Home: {
    NewChat: "Ny samtale",
    DeleteChat: "Er du sikker på at du vil slette den valgte samtalen?",
    DeleteToast: "Samtale slettet",
    Revert: "Angre",
  },
  Settings: {
    Title: "Innstillinger",
    SubTitle: "Alle innstillingsalternativer",

    Danger: {
      Reset: {
        Title: "Tilbakestill alle innstillinger",
        SubTitle:
          "Tilbakestill alle innstillingsalternativer til standardverdier",
        Action: "Tilbakestill nå",
        Confirm: "Bekreft tilbakestilling av alle innstillinger?",
      },
      Clear: {
        Title: "Slett alle data",
        SubTitle: "Slett alle samtaler og innstillingsdata",
        Action: "Slett nå",
        Confirm: "Bekreft sletting av alle samtaler og innstillingsdata?",
      },
    },
    Lang: {
      Name: "Språk", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "Alle språk",
    },
    Avatar: "Profilbilde",
    FontSize: {
      Title: "Skriftstørrelse",
      SubTitle: "Skriftstørrelse for samtaleinnhold",
    },
    FontFamily: {
      Title: "Chat-skrifttype",
      SubTitle:
        "Skrifttypen for chatinnhold, la stå tom for å bruke global standardskrifttype",
      Placeholder: "Skriftnavn",
    },
    InjectSystemPrompts: {
      Title: "Injiser systemprompter",
      SubTitle:
        "Tving inn et systemprompt som simulerer ChatGPT i starten av hver forespørsel",
    },
    InputTemplate: {
      Title: "Forhåndsbehandling av brukerinput",
      SubTitle:
        "Den nyeste meldingen fra brukeren vil bli fylt ut i denne malen",
    },

    Update: {
      Version: (x: string) => `Nåværende versjon: ${x}`,
      IsLatest: "Er den nyeste versjonen",
      CheckUpdate: "Sjekk oppdateringer",
      IsChecking: "Sjekker oppdateringer...",
      FoundUpdate: (x: string) => `Ny versjon oppdaget: ${x}`,
      GoToUpdate: "Gå til oppdatering",
    
      "Success": "Oppdateringa var vellukka",
      "Failed": "Oppdateringa mislukkast",
    },
    SendKey: "Send-knapp",
    Theme: "Tema",
    TightBorder: "Ingen ramme-modus",
    SendPreviewBubble: {
      Title: "Forhåndsvisningsboble",
      SubTitle: "Forhåndsvis Markdown-innhold i en forhåndsvisningsboble",
    },
    AutoGenerateTitle: {
      Title: "Automatisk generere tittel",
      SubTitle: "Generer en passende tittel basert på samtaleinnholdet",
    },
    Sync: {
      CloudState: "Skydatasynkronisering",
      NotSyncYet: "Har ikke blitt synkronisert ennå",
      Success: "Synkronisering vellykket",
      Fail: "Synkronisering mislyktes",

      Config: {
        Modal: {
          Title: "Konfigurer sky-synkronisering",
          Check: "Sjekk tilgjengelighet",
        },
        SyncType: {
          Title: "Synkroniseringstype",
          SubTitle: "Velg ønsket synkroniseringsserver",
        },
        Proxy: {
          Title: "Aktiver proxy",
          SubTitle:
            "Når du synkroniserer i nettleseren, må proxy være aktivert for å unngå CORS-restriksjoner",
        },
        ProxyUrl: {
          Title: "Proxy-URL",
          SubTitle: "Kun for prosjektets innebygde CORS-proxy",
        },

        WebDav: {
          Endpoint: "WebDAV-adresse",
          UserName: "Brukernavn",
          Password: "Passord",
        },

        UpStash: {
          Endpoint: "UpStash Redis REST-URL",
          UserName: "Sikkerhetskopinavn",
          Password: "UpStash Redis REST-token",
        },
      },

      LocalState: "Lokal data",
      Overview: (overview: any) => {
        return `${overview.chat} samtaler, ${overview.message} meldinger, ${overview.prompt} oppfordringer, ${overview.mask} masker`;
      },
      ImportFailed: "Import mislyktes",
    },
    Mask: {
      Splash: {
        Title: "Maskestartside",
        SubTitle: "Vis maskestartside når du oppretter en ny samtale",
      },
      Builtin: {
        Title: "Skjul innebygde masker",
        SubTitle: "Skjul innebygde masker i alle maskelister",
      },
    },
    Prompt: {
      Disable: {
        Title: "Deaktiver automatisk fullføring av oppfordringer",
        SubTitle: "Skriv / i tekstboksen for å utløse automatisk fullføring",
      },
      List: "Egendefinerte oppfordringer",
      ListCount: (builtin: number, custom: number) =>
        `Innebygde ${builtin}, brukerdedefinerte ${custom}`,
      Edit: "Rediger",
      Modal: {
        Title: "Oppfordringsliste",
        Add: "Ny",
        Search: "Søk oppfordringer",
      },
      EditModal: {
        Title: "Rediger oppfordring",
      },
    },
    HistoryCount: {
      Title: "Antall historiske meldinger",
      SubTitle: "Antall historiske meldinger som sendes med hver forespørsel",
    },
    CompressThreshold: {
      Title: "Kompressterskel for historiske meldinger",
      SubTitle:
        "Når ukomprimerte historiske meldinger overskrider denne verdien, vil de bli komprimert",
    },

    Usage: {
      Title: "Saldoforespørsel",
      SubTitle(used: any, total: any) {
        return `Brukt denne måneden $${used}, total abonnementsbeløp $${total}`;
      },
      IsChecking: "Sjekker...",
      Check: "Sjekk på nytt",
      NoAccess: "Skriv inn API-nøkkel eller tilgangspassord for å se saldo",
    },

    Access: {
      SaasStart: {
        Title: "Bruk NextChat AI",
        Label: "(Den mest kostnadseffektive løsningen)",
        SubTitle:
          "Offisielt vedlikeholdt av NextChat, klar til bruk uten konfigurasjon, støtter de nyeste store modellene som OpenAI o1, GPT-4o og Claude-3.5",
        ChatNow: "Chat nå",
      },

      AccessCode: {
        Title: "Adgangskode",
        SubTitle: "Administrator har aktivert kryptert tilgang",
        Placeholder: "Skriv inn tilgangskoden",
      },
      CustomEndpoint: {
        Title: "Egendefinert API",
        SubTitle: "Bruk egendefinerte Azure- eller OpenAI-tjenester",
      },
      Provider: {
        Title: "Modelltilbyder",
        SubTitle: "Bytt til forskjellige tilbydere",
      },
      OpenAI: {
        ApiKey: {
          Title: "OpenAI API Key",
          SubTitle:
            "Bruk egendefinert OpenAI-nøkkel for å omgå passordtilgangsbegrensninger",
          Placeholder: "OpenAI API Key",
        },

        Endpoint: {
          Title: "API-adresse",
          SubTitle: "Må inkludere http(s):// utenom standardadresse",
        },
      },
      Azure: {
        ApiKey: {
          Title: "Azure API Key",
          SubTitle:
            "Bruk egendefinert Azure-nøkkel for å omgå passordtilgangsbegrensninger",
          Placeholder: "Azure API Key",
        },

        Endpoint: {
          Title: "API-adresse",
          SubTitle: "Eksempel:",
        },

        ApiVerion: {
          Title: "API-versjon (azure api versjon)",
          SubTitle: "Velg en spesifikk delversjon",
        },
      },
      Anthropic: {
        ApiKey: {
          Title: "Anthropic API Key",
          SubTitle:
            "Bruk egendefinert Anthropic-nøkkel for å omgå passordtilgangsbegrensninger",
          Placeholder: "Anthropic API Key",
        },

        Endpoint: {
          Title: "API-adresse",
          SubTitle: "Eksempel:",
        },

        ApiVerion: {
          Title: "API-versjon (claude api versjon)",
          SubTitle: "Velg en spesifikk API-versjon",
        },
      },
      Google: {
        ApiKey: {
          Title: "Google API Key",
          SubTitle: "Hent din API Key fra Google AI",
          Placeholder: "Skriv inn din Google AI Studio API Key",
        },

        Endpoint: {
          Title: "Endepunktadresse",
          SubTitle: "Eksempel:",
        },

        ApiVersion: {
          Title: "API-versjon (kun for gemini-pro)",
          SubTitle: "Velg en spesifikk API-versjon",
        },
        GoogleSafetySettings: {
          Title: "Google sikkerhetsfiltreringsnivå",
          SubTitle: "Sett innholdsfiltreringsnivå",
        },
      },
      Baidu: {
        ApiKey: {
          Title: "Baidu API Key",
          SubTitle: "Bruk egendefinert Baidu API Key",
          Placeholder: "Baidu API Key",
        },
        SecretKey: {
          Title: "Hemmelig nøkkel",
          SubTitle: "Bruk egendefinert Baidu hemmelig nøkkel",
          Placeholder: "Baidu hemmelig nøkkel",
        },
        Endpoint: {
          Title: "API-adresse",
          SubTitle:
            "Støtter ikke egendefinerte konfigurasjoner. Se .env-konfigurasjon.",
        },
      },
      ByteDance: {
        ApiKey: {
          Title: "ByteDance API Key",
          SubTitle: "Bruk egendefinert ByteDance API Key",
          Placeholder: "ByteDance API Key",
        },
        Endpoint: {
          Title: "API-adresse",
          SubTitle: "Eksempel:",
        },
      },
      Alibaba: {
        ApiKey: {
          Title: "Alibaba API Key",
          SubTitle: "Bruk egendefinert Alibaba Cloud API Key",
          Placeholder: "Alibaba Cloud API Key",
        },
        Endpoint: {
          Title: "API-adresse",
          SubTitle: "Eksempel:",
        },
      },
      CustomModel: {
        Title: "Egendefinert modellnavn",
        SubTitle: "Legg til egendefinerte modellalternativer, skill med komma",
      },
    
      "Tencent": {
        "ApiKey": {
          "Title": "Tencent API Key",
          "SubTitle": "Bruk ein tilpassa API Key",
          "Placeholder": "Tencent API Key",
        },
        "SecretKey": {
          "Title": "Tencent Secret Key",
          "SubTitle": "Bruk tilpassa innloggingsopplysningar — Secret Key",
          "Placeholder": "Tencent Secret Key",
        },
        "Endpoint": {
          "Title": "Grensesnittadresse",
          "SubTitle": "Still inn denne verdien i .env",
        },
      },
      "Moonshot": {
        "ApiKey": {
          "Title": "Moonshot API Key",
          "SubTitle": "Bruk ein tilpassa API Key",
          "Placeholder": "Moonshot API Key",
        },
        "Endpoint": {
          "Title": "Grensesnittadresse",
          "SubTitle": "Døme: ",
        },
      },
      "DeepSeek": {
        "ApiKey": {
          "Title": "DeepSeek API Key",
          "SubTitle": "Bruk ein tilpassa API Key",
          "Placeholder": "DeepSeek API Key",
        },
        "Endpoint": {
          "Title": "Grensesnittadresse",
          "SubTitle": "Døme: ",
        },
      },
      "XAI": {
        "ApiKey": {
          "Title": "XAI API Key",
          "SubTitle": "Bruk ein tilpassa API Key",
          "Placeholder": "XAI API Key",
        },
        "Endpoint": {
          "Title": "Grensesnittadresse",
          "SubTitle": "Døme: ",
        },
      },
      "ChatGLM": {
        "ApiKey": {
          "Title": "ChatGLM API Key",
          "SubTitle": "Bruk ein tilpassa API Key",
          "Placeholder": "ChatGLM API Key",
        },
        "Endpoint": {
          "Title": "Grensesnittadresse",
          "SubTitle": "Døme: ",
        },
      },
      "SiliconFlow": {
        "ApiKey": {
          "Title": "SiliconFlow API Key",
          "SubTitle": "Bruk ein tilpassa API Key",
          "Placeholder": "SiliconFlow API Key",
        },
        "Endpoint": {
          "Title": "Grensesnittadresse",
          "SubTitle": "Døme: ",
        },
      },
      "Stability": {
        "ApiKey": {
          "Title": "Stability API Key",
          "SubTitle": "Bruk ein tilpassa API Key",
          "Placeholder": "Stability API Key",
        },
        "Endpoint": {
          "Title": "Grensesnittadresse",
          "SubTitle": "Døme: ",
        },
      },
      "Iflytek": {
        "ApiKey": {
          "Title": "Iflytek API Key",
          "SubTitle": "Bruk ein tilpassa API Key",
          "Placeholder": "Iflytek API Key",
        },
        "ApiSecret": {
          "Title": "Iflytek API Secret",
          "SubTitle": "Bruk tilpassa innloggingsopplysningar — API Secret",
          "Placeholder": "Iflytek API Secret",
        },
        "Endpoint": {
          "Title": "Grensesnittadresse",
          "SubTitle": "Døme: ",
        },
      },
    },

    Model: "Modell",
    CompressModel: {
      Title: "Komprimeringsmodell",
      SubTitle: "Modell brukt for å komprimere historikken",
    },
    Temperature: {
      Title: "Tilfeldighet (temperature)",
      SubTitle: "Høyere verdi gir mer tilfeldige svar",
    },
    TopP: {
      Title: "Kjerneprøvetaking (top_p)",
      SubTitle:
        "Ligner på tilfeldighet, men endre ikke sammen med tilfeldighet",
    },
    MaxTokens: {
      Title: "Maksimalt antall tokens per svar (max_tokens)",
      SubTitle: "Maksimalt antall tokens brukt i en enkelt interaksjon",
    },
    PresencePenalty: {
      Title: "Emnens ferskhet (presence_penalty)",
      SubTitle:
        "Høyere verdi gir større sannsynlighet for å utvide til nye emner",
    },
    FrequencyPenalty: {
      Title: "Frekvensstraff (frequency_penalty)",
      SubTitle:
        "Høyere verdi gir større sannsynlighet for å redusere gjentakende ord",
    },
  
    "ShowPassword": "Vis passord",
    "LocalizationInfo": {
      "Edition": "NextChat – tilpassa utgåve",
      "Timeout": "Tilkoplingstesten tok meir enn 30 sekund. Kontroller nettverk og API-adresse.",
      "Success": "Tilkoplinga verkar",
      "NoResponse": "Tilbydaren returnerte ikkje eit gyldig svar. Kontroller modell og grensesnitt.",
      "Upstream": "Opphavleg basisversjon",
      "Details": "Detaljert versjonsinformasjon",
      "Security": "Id for tryggleiksvedlikehald",
      "Commit": "Bygg-commit",
      "Official": "Offisiell referanseversjon",
      "Unavailable": "Ikkje tilgjengeleg",
      "Note": "Inneheld utvalde rettingar, ikkje heile den offisielle v2.16.1. Offisiell versjonsinformasjon er berre til orientering.",
    },
    "ProviderSetup": {
      "ModelIdPlaceholder": "Modell-id@tilbydar",
      "Provider": "Tilbydar",
      "ProviderHelp": "Vel ein tilbydar og skriv inn API Key for å bruke standardmodellen",
      "ProviderKeyPlaceholder": "Skriv inn API Key for denne tilbydaren",
      "CurrentModel": "Gjeldande samtalemodell",
      "DefaultModel": "Standardmodell",
      "ModelHelp": "Tilpass grensesnitt og eigne modellar i avanserte innstillingar",
      "TestModel": "Test gjeldande modell",
      "TestHelp": "Sender ein kort førespurnad som kan koste API-gebyr; lagrar ikkje samtalehistorikk",
      "TestConnection": "Test tilkopling",
      "Testing": "Testar…",
      "Advanced": "Avanserte innstillingar",
      "OfficialURL": "Offisiell adresse",
      "DefaultRoute": "Brukar som standard ruta til denne nettstaden",
    },
    "TTS": {
      "Enable": {
        "Title": "Slå på TTS",
        "SubTitle": "Slå på tekst til tale",
      },
      "Autoplay": {
        "Title": "Slå på automatisk avspeling",
        "SubTitle": "Lag og spel av tale automatisk; slå på TTS først",
      },
      "Model": "Modell",
      "Engine": "TTS-motor",
      "Voice": {
        "Title": "Røyst",
        "SubTitle": "Røysta som vert brukt i lyden",
      },
      "Speed": {
        "Title": "Fart",
        "SubTitle": "Farten på den genererte lyden",
      },
    },
    "Realtime": {
      "Enable": {
        "Title": "Sanntidssamtale",
        "SubTitle": "Slå på sanntidssamtale",
      },
      "Provider": {
        "Title": "Modelltilbydar",
        "SubTitle": "Byt tilbydar",
      },
      "Model": {
        "Title": "Modell",
        "SubTitle": "Vel ein modell",
      },
      "ApiKey": {
        "Title": "API Key",
        "SubTitle": "API Key",
        "Placeholder": "API Key",
      },
      "Azure": {
        "Endpoint": {
          "Title": "Grensesnittadresse",
          "SubTitle": "Grensesnittadresse",
        },
        "Deployment": {
          "Title": "Utrullingsnamn",
          "SubTitle": "Utrullingsnamn",
        },
      },
      "Temperature": {
        "Title": "Tilfeldighet (temperature)",
        "SubTitle": "Høyere verdi gir mer tilfeldige svar",
      },
    },
    "SafetyLabels": {
      "BLOCK_NONE": "Ingen",
      "BLOCK_ONLY_HIGH": "Berre høg",
      "BLOCK_MEDIUM_AND_ABOVE": "Middels og høgare",
      "BLOCK_LOW_AND_ABOVE": "Låg og høgare",
    },
  },
  Store: {
    DefaultTopic: "Ny samtale",
    BotHello: "Hva kan jeg hjelpe deg med?",
    Error: "Noe gikk galt, prøv igjen senere",
    Prompt: {
      History: (content: string) =>
        "Dette er oppsummeringen av historiske samtaler som bakgrunn:" +
        content,
      Topic:
        'Bruk fire til fem ord for å returnere en kort oppsummering av temaet, uten forklaring, uten tegnsetting, uten fyllord, uten ekstra tekst, uten fet skrift. Hvis det ikke er noe tema, returner bare "sladder".',
      Summarize:
        "Oppsummer samtalen kort som en kontekstuell prompt for fremtidige referanser, hold det innen 200 tegn",
    },
  },
  Copy: {
    Success: "Kopiert til utklippstavlen",
    Failed: "Kopiering mislyktes, vennligst gi tillatelse til utklippstavlen",
  },
  Download: {
    Success: "Innholdet er lastet ned til katalogen din.",
    Failed: "Nedlasting mislyktes.",
  },
  Context: {
    Toast: (x: any) => `Inneholder ${x} forhåndsinnstilte oppfordringer`,
    Edit: "Nåværende samtaleinnstillinger",
    Add: "Legg til en ny samtale",
    Clear: "Konteksten er tømt",
    Revert: "Gjenopprett konteksten",
  },
  Plugin: {
    Name: "Tillegg",
  
    "Accessibility": {
      "Create": "Opprett: Tillegg",
      "Edit": "Rediger: Tillegg",
      "Save": "Lagre: Tillegg",
      "SchemaUrl": "Tillegg Schema URL",
      "LoadSchema": "Last frå URL: Tillegg Schema",
      "Schema": "Tillegg Schema",
    },
    "Page": {
      "Title": "Tillegg",
      "SubTitle": (count: number) => "Tillegg: " + count,
      "Search": "Søk meldinger — Tillegg",
      "Create": "Opprett",
      "Find": "Finn tillegg på GitHub: ",
    },
    "Item": {
      "Info": (count: number) => "Metodar: " + count,
      "View": "Se",
      "Edit": "Rediger",
      "Delete": "Slett",
      "DeleteConfirm": "Bekreft sletting?",
    },
    "Auth": {
      "None": "Inga autentisering",
      "Basic": "Basic",
      "Bearer": "Bearer",
      "Custom": "Tilpassa",
      "CustomHeader": "Parameternamn",
      "Token": "Token",
      "Proxy": "Bruk mellomtenar",
      "ProxyDescription": "Bruk ein mellomtenar for å unngå CORS-avgrensingar",
      "Location": "Plassering",
      "LocationHeader": "Header",
      "LocationQuery": "Query",
      "LocationBody": "Body",
    },
    "EditModal": {
      "Title": (readonly: boolean) => "Rediger: Tillegg" + (readonly ? " (Skriveverna)" : ""),
      "Download": "Last ned",
      "Auth": "Autentiseringstype",
      "Content": "OpenAPI Schema",
      "Load": "Last frå URL",
      "Method": "Metodar",
      "Error": "Ugyldig OpenAPI Schema",
    },
  },
  FineTuned: {
    Sysmessage: "Du er en assistent",
  },
  SearchChat: {
    Name: "Søk",
    Page: {
      Title: "Søk i chatthistorikk",
      Search: "Skriv inn søkeord",
      NoResult: "Ingen resultater funnet",
      NoData: "Ingen data",
      Loading: "Laster inn",

      SubTitle: (count: number) => `Fant ${count} resultater`,
    },
    Item: {
      View: "Vis",
    },
  },
  Mask: {
    Name: "Maske",
    Page: {
      Title: "Forhåndsdefinerte rollemasker",
      SubTitle: (count: number) =>
        `${count} forhåndsdefinerte rolledefinisjoner`,
      Search: "Søk etter rollemasker",
      Create: "Opprett ny",
    },
    Item: {
      Info: (count: number) => `Inneholder ${count} forhåndsdefinerte samtaler`,
      Chat: "Samtale",
      View: "Vis",
      Edit: "Rediger",
      Delete: "Slett",
      DeleteConfirm: "Bekreft sletting?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Rediger forhåndsdefinert maske ${readonly ? "（kun lesing）" : ""}`,
      Download: "Last ned forhåndsdefinert",
      Clone: "Kopier forhåndsdefinert",
    },
    Config: {
      Avatar: "Rollebilde",
      Name: "Rolle navn",
      Sync: {
        Title: "Bruk globale innstillinger",
        SubTitle: "Bruker nåværende samtale globale modellinnstillinger",
        Confirm:
          "De tilpassede innstillingene for den nåværende samtalen vil bli overskrevet automatisk. Bekreft at du vil bruke globale innstillinger?",
      },
      HideContext: {
        Title: "Skjul forhåndsdefinerte samtaler",
        SubTitle:
          "Når skjult, vil forhåndsdefinerte samtaler ikke vises i chat-grensesnittet",
      },
      Share: {
        Title: "Del denne masken",
        SubTitle: "Generer en direkte lenke til denne masken",
        Action: "Kopier lenke",
      },
    
      "Artifacts": {
        "Title": "Slå på Artifacts",
        "SubTitle": "Vis HTML-sider med Artifacts",
      },
      "CodeFold": {
        "Title": "Slå på kodefalding",
        "SubTitle": "Slå automatisk saman lange kodeblokker",
      },
    },
  },
  NewChat: {
    Return: "Tilbake",
    Skip: "Start direkte",
    NotShow: "Vis ikke igjen",
    ConfirmNoShow:
      "Bekreft deaktivering? Du kan aktivere det igjen i innstillingene når som helst.",
    Title: "Velg en maske",
    SubTitle: "Start nå, og få tanker som kolliderer med sjelen bak masken",
    More: "Se alle",
  },

  URLCommand: {
    Code: "Oppdaget at lenken allerede inneholder tilgangskode. Ønsker du å fylle den ut automatisk?",
    Settings:
      "Oppdaget at lenken inneholder forhåndsinnstillinger. Ønsker du å fylle dem ut automatisk?",
  },

  UI: {
    Confirm: "Bekreft",
    Cancel: "Avbryt",
    Close: "Lukk",
    Create: "Opprett",
    Edit: "Rediger",
    Export: "Eksporter",
    Import: "Importer",
    Sync: "Synkroniser",
    Config: "Konfigurer",
  
    "Save": "Lagre",
    "Loading": "Lastar…",
    "Seed": "Tilfeldig startverdi",
    "User": "Brukar",
    "Assistant": "Assistent",
    "System": "System",
    "Text": "Tekst",
    "Image": "Bilete",
    "Standard": "Standard",
    "Vivid": "Livleg",
    "Natural": "Naturleg",
    "ErrorTitle": "Det oppstod ein feil",
    "ReportError": "Meld frå om feilen",
    "ClearData": "Tøm alle data",
    "AssistantTagline": "Lag din eigen KI-assistent.",
    "EmptyPrompt": "Ny instruksjon",
    "EmptyPromptContent": "Skriv inn instruksjonen",
    "AllFiles": "Alle filer",
  
    "Refresh": "Last på nytt",
    "HidePassword": "Skjul passord",
  },
  Exporter: {
    Description: {
      Title: "Bare meldinger etter at konteksten er ryddet vil bli vist",
    },
    Model: "Modell",
    Messages: "Meldinger",
    Topic: "Emne",
    Time: "Tid",
  },

  "Discovery": {
    "Name": "Oppdag",
  },
  "Mcp": {
    "Name": "MCP",
    "UI": {
      "Market": "MCP-marknad",
      "PresetLoadFailed": "Kunne ikkje laste førehandsvalde tenarar",
      "InitFailed": "Kunne ikkje laste starttilstanden",
      "ConfigSaved": "Tenaroppsettet er lagra",
      "ConfigSaveFailed": "Kunne ikkje lagre oppsettet",
      "ToolsFailed": "Kunne ikkje laste verktøy",
      "Stopped": "Stoppa",
      "StopFailed": "Kunne ikkje stoppe tenaren",
      "StartFailed": "Kunne ikkje starte tenaren; sjå loggane",
      "RestartingClients": "Startar alle klientar på nytt",
      "RestartFailed": "Kunne ikkje starte klientane på nytt",
      "Initializing": "Gjer klar",
      "NoServers": "Ingen tilgjengelege tenarar",
      "OpenRepo": "Opne kodelager",
      "Start": "Start",
      "Tools": "Verktøy",
      "Add": "Legg til",
      "RestartAll": "Start alle på nytt",
      "Search": "Søk etter MCP-tenarar",
      "ConfigureServer": "Still inn tenar",
      "ServerDetails": "Tenardetaljar",
      "NoTools": "Ingen tilgjengelege verktøy",
      "LoadingPresets": "Lastar førehandsvalde tenarar…",
      "ConfiguredServers": "Oppsette tenarar",
      "UpdatingConfig": "Oppdaterer oppsettet…",
      "CreatingClient": "Lagar MCP-klient…",
      "Stopping": "Stoppar tenaren…",
      "Starting": "Startar tenaren…",
      "RestartingServers": "Startar alle tenarar på nytt…",
      "ExecutionFailed": "MCP-køyring mislukkast",
    },
  },
  "SdPanel": {
    "Prompt": "Biletskildring",
    "NegativePrompt": "Negativ biletskildring",
    "PleaseInput": (name: string) => name + " — Skriv inn ein verdi",
    "AspectRatio": "Sideforhold",
    "ImageStyle": "Biletstil",
    "OutFormat": "Utformat",
    "AIModel": "Modell",
    "ModelVersion": "Modellversjon",
    "Submit": "Generer",
    "ParamIsRequired": (name: string) => name + ": Påkravd",
    "Styles": {
      "D3Model": "3D-modell",
      "AnalogFilm": "Analogfilm",
      "Anime": "Japansk animasjon",
      "Cinematic": "Filmstil",
      "ComicBook": "Teikneserie",
      "DigitalArt": "Digital kunst",
      "Enhance": "Forsterka",
      "FantasyArt": "Fantasikunst",
      "Isometric": "Isometrisk",
      "LineArt": "Strekteikning",
      "LowPoly": "Få polygon",
      "ModelingCompound": "Modellervoks",
      "NeonPunk": "Neonpunk",
      "Origami": "Papirbretting",
      "Photographic": "Fotografisk",
      "PixelArt": "Pikselkunst",
      "TileTexture": "Flisetekstur",
    },
  },
  "Sd": {
    "SubTitle": (count: number) => "Bilete: " + count,
    "Actions": {
      "Params": "Vis parametrar",
      "Copy": "Kopier: Biletskildring",
      "Delete": "Slett",
      "Retry": "Prøv igjen",
      "ReturnHome": "Til startsida",
      "History": "Historikk",
    },
    "EmptyRecord": "Ingen bilete enno",
    "Status": {
      "Name": "Status",
      "Success": "Vellukka",
      "Error": "Feil",
      "Wait": "Ventar",
      "Running": "Køyrer",
    },
    "Danger": {
      "Delete": "Bekreft sletting?",
    },
    "GenerateParams": "Genereringsparametrar",
    "Detail": "Detaljar",
  },
  "ApiError": {
    "Timeout": "Førespurnaden fekk tidsavbrot. Prøv igjen, eller kontroller adressa i avanserte innstillingar.",
    "Quota": "Kvoten til tilbydaren er utilstrekkeleg. Kontroller saldo, betaling og bruksgrenser.",
    "AccessCode": "Ugyldig tilgangskode til nettstaden. Kontroller koden.",
    "InvalidKey": "Ugyldig eller utgått API Key. Kontroller Key for den valde tilbydaren.",
    "Permission": "Tilgang nekta. Kontroller modellrettar og regionale avgrensingar.",
    "Model": "Modell eller grensesnitt er ikkje tilgjengeleg. Kontroller modell-id og adresse i avanserte innstillingar.",
    "RateLimit": "For mange førespurnader eller nådd grense. Prøv seinare og kontroller kvoten.",
    "Parameters": "Uforeinlege parametrar. Kontroller modell-id og parametrar i avanserte innstillingar.",
    "Unavailable": "Tilbydaren er mellombels utilgjengeleg. Prøv seinare.",
    "Empty": "Ikkje noko gyldig innhald vart returnert. Kontroller modellen og prøv igjen.",
    "Network": "Nettverkstilkoplinga mislukkast. Kontroller nettverket, adressa og CORS-innstillingane til tredjeparten.",
    "Generic": "Førespurnaden mislukkast. Kontroller API Key, modell og adresse for tilbydaren.",
  },
};

export default no;
