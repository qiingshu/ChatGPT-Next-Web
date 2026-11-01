import { SubmitKey } from "../store/config";
import type { LocaleType } from "./index";
import { getClientConfig } from "../config/client";
import { SAAS_CHAT_UTM_URL } from "@/app/constant";
const isApp = !!getClientConfig()?.isApp;

const de: LocaleType = {
  WIP: "In Bearbeitung...",
  Error: {
    Unauthorized: isApp
      ? `😆 Das Gespräch hatte einige Probleme, keine Sorge:
    \\ 1️⃣ Wenn du ohne Konfiguration sofort starten möchtest, [klicke hier, um sofort zu chatten 🚀](${SAAS_CHAT_UTM_URL})
    \\ 2️⃣ Wenn du deine eigenen OpenAI-Ressourcen verwenden möchtest, klicke [hier](/#/settings), um die Einstellungen zu ändern ⚙️`
      : `😆 Das Gespräch hatte einige Probleme, keine Sorge:
    \ 1️⃣ Wenn du ohne Konfiguration sofort starten möchtest, [klicke hier, um sofort zu chatten 🚀](${SAAS_CHAT_UTM_URL})
    \ 2️⃣ Wenn du eine private Bereitstellung verwendest, klicke [hier](/#/auth), um den Zugriffsschlüssel einzugeben 🔑
    \ 3️⃣ Wenn du deine eigenen OpenAI-Ressourcen verwenden möchtest, klicke [hier](/#/settings), um die Einstellungen zu ändern ⚙️
 `,
  },
  Auth: {
    Title: "Passwort erforderlich",
    Tips: "Der Administrator hat die Passwortüberprüfung aktiviert. Bitte geben Sie den Zugangscode unten ein.",
    SubTips: "Oder geben Sie Ihren OpenAI oder Google API-Schlüssel ein.",
    Input: "Geben Sie hier den Zugangscode ein",
    Confirm: "Bestätigen",
    Later: "Später",
    Return: "Zurück",
    SaasTips:
      "Die Konfiguration ist zu kompliziert, ich möchte es sofort nutzen",
    TopTips:
      "🥳 NextChat AI Einführungsangebot, schalte jetzt OpenAI o1, GPT-4o, Claude-3.5 und die neuesten großen Modelle frei",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} Gespräche`,
  },
  Chat: {
    SubTitle: (count: number) => `Insgesamt ${count} Gespräche`,
    EditMessage: {
      Title: "Nachricht bearbeiten",
      Topic: {
        Title: "Chat-Thema",
        SubTitle: "Ändern Sie das aktuelle Chat-Thema",
      },
    },
    Actions: {
      ChatList: "Nachrichtliste anzeigen",
      CompressedHistory: "Komprimierte Historie anzeigen",
      Export: "Chatverlauf exportieren",
      Copy: "Kopieren",
      Stop: "Stoppen",
      Retry: "Erneut versuchen",
      Pin: "Anheften",
      PinToastContent: "1 Gespräch an den voreingestellten Prompt angeheftet",
      PinToastAction: "Ansehen",
      Delete: "Löschen",
      Edit: "Bearbeiten",
      RefreshTitle: "Titel aktualisieren",
      RefreshToast: "Anfrage zur Titelaktualisierung gesendet",
    
      "FullScreen": "Vollbild",
      "Speech": "Vorlesen",
      "StopSpeech": "Stoppen",
    },
    Commands: {
      new: "Neues Gespräch",
      newm: "Neues Gespräch aus Maske erstellen",
      next: "Nächstes Gespräch",
      prev: "Vorheriges Gespräch",
      clear: "Kontext löschen",
      del: "Gespräch löschen",
    
      "fork": "Chat kopieren",
    },
    InputActions: {
      Stop: "Antwort stoppen",
      ToBottom: "Zum neuesten Beitrag",
      Theme: {
        auto: "Automatisches Thema",
        light: "Helles Thema",
        dark: "Dunkles Thema",
      },
      Prompt: "Schnellbefehle",
      Masks: "Alle Masken",
      Clear: "Chat löschen",
      Settings: "Gesprächseinstellungen",
      UploadImage: "Bild hochladen",
    },
    Rename: "Gespräch umbenennen",
    Typing: "Tippt…",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} senden`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += "，Shift + Enter für Zeilenumbruch";
      }
      return inputHints + "，/ für Autovervollständigung, : für Befehle";
    },
    Send: "Senden",
    Config: {
      Reset: "Erinnerung löschen",
      SaveAs: "Als Maske speichern",
    },
    IsContext: "Voreingestellter Prompt",
  
    "StartSpeak": "Sprechen starten",
    "StopSpeak": "Stoppen",
    "ShortcutKey": {
      "Title": "Tastenkürzel",
      "newChat": "Neuen Chat öffnen",
      "focusInput": "Eingabefeld fokussieren",
      "copyLastMessage": "Letzte Antwort kopieren",
      "copyLastCode": "Letzten Codeblock kopieren",
      "showShortcutKey": "Tastenkürzel anzeigen",
      "clearContext": "Chat löschen",
    },
  },
  Export: {
    Title: "Chatverlauf teilen",
    Copy: "Alles kopieren",
    Download: "Datei herunterladen",
    Share: "Auf ShareGPT teilen",
    MessageFromYou: "Benutzer",
    MessageFromChatGPT: "ChatGPT",
    Format: {
      Title: "Exportformat",
      SubTitle: "Kann als Markdown-Text oder PNG-Bild exportiert werden",
    },
    IncludeContext: {
      Title: "Maske Kontext einbeziehen",
      SubTitle: "Soll der Maskenkontext in den Nachrichten angezeigt werden?",
    },
    Steps: {
      Select: "Auswählen",
      Preview: "Vorschau",
    },
    Image: {
      Toast: "Screenshot wird erstellt",
      Modal: "Lang drücken oder Rechtsklick, um Bild zu speichern",
    },
  
    "Artifacts": {
      "Title": "Artifacts teilen",
      "Error": "Artifacts teilen — Fehler",
    },
  },
  Select: {
    Search: "Nachrichten suchen",
    All: "Alles auswählen",
    Latest: "Neueste",
    Clear: "Auswahl aufheben",
  },
  Memory: {
    Title: "Historische Zusammenfassung",
    EmptyContent:
      "Gesprächsinhalte sind zu kurz, keine Zusammenfassung erforderlich",
    Send: "Chatverlauf automatisch komprimieren und als Kontext senden",
    Copy: "Zusammenfassung kopieren",
    Reset: "[nicht verwendet]",
    ResetConfirm: "Zusammenfassung löschen bestätigen?",
  },
  Home: {
    NewChat: "Neues Gespräch",
    DeleteChat: "Bestätigen Sie das Löschen des ausgewählten Gesprächs?",
    DeleteToast: "Gespräch gelöscht",
    Revert: "Rückgängig machen",
  },
  Settings: {
    Title: "Einstellungen",
    SubTitle: "Alle Einstellungsmöglichkeiten",

    Danger: {
      Reset: {
        Title: "Alle Einstellungen zurücksetzen",
        SubTitle: "Setzt alle Einstellungen auf die Standardwerte zurück",
        Action: "Jetzt zurücksetzen",
        Confirm: "Bestätigen Sie das Zurücksetzen aller Einstellungen?",
      },
      Clear: {
        Title: "Alle Daten löschen",
        SubTitle: "Löscht alle Chats und Einstellungsdaten",
        Action: "Jetzt löschen",
        Confirm:
          "Bestätigen Sie das Löschen aller Chats und Einstellungsdaten?",
      },
    },
    Lang: {
      Name: "Sprache", // ACHTUNG: Wenn Sie eine neue Übersetzung hinzufügen möchten, übersetzen Sie diesen Wert bitte nicht, lassen Sie ihn als `Sprache`
      All: "Alle Sprachen",
    },
    Avatar: "Avatar",
    FontSize: {
      Title: "Schriftgröße",
      SubTitle: "Schriftgröße des Chat-Inhalts",
    },
    FontFamily: {
      Title: "Chat-Schriftart",
      SubTitle:
        "Schriftart des Chat-Inhalts, leer lassen, um die globale Standardschriftart anzuwenden",
      Placeholder: "Schriftartname",
    },
    InjectSystemPrompts: {
      Title: "Systemweite Eingabeaufforderungen einfügen",
      SubTitle:
        "Fügt jeder Nachricht am Anfang der Nachrichtenliste eine simulierte ChatGPT-Systemaufforderung hinzu",
    },
    InputTemplate: {
      Title: "Benutzer-Eingabeverarbeitung",
      SubTitle:
        "Die neueste Nachricht des Benutzers wird in diese Vorlage eingefügt",
    },

    Update: {
      Version: (x: string) => `Aktuelle Version: ${x}`,
      IsLatest: "Bereits die neueste Version",
      CheckUpdate: "Auf Updates überprüfen",
      IsChecking: "Überprüfe auf Updates...",
      FoundUpdate: (x: string) => `Neue Version gefunden: ${x}`,
      GoToUpdate: "Zum Update gehen",
    
      "Success": "Aktualisierung erfolgreich",
      "Failed": "Aktualisierung fehlgeschlagen",
    },
    SendKey: "Sende-Taste",
    Theme: "Thema",
    TightBorder: "Randloser Modus",
    SendPreviewBubble: {
      Title: "Vorschau-Bubble",
      SubTitle: "Markdown-Inhalt in der Vorschau-Bubble anzeigen",
    },
    AutoGenerateTitle: {
      Title: "Titel automatisch generieren",
      SubTitle:
        "Basierend auf dem Chat-Inhalt einen passenden Titel generieren",
    },
    Sync: {
      CloudState: "Cloud-Daten",
      NotSyncYet: "Noch nicht synchronisiert",
      Success: "Synchronisation erfolgreich",
      Fail: "Synchronisation fehlgeschlagen",

      Config: {
        Modal: {
          Title: "Cloud-Synchronisation konfigurieren",
          Check: "Verfügbarkeit überprüfen",
        },
        SyncType: {
          Title: "Synchronisationstyp",
          SubTitle: "Wählen Sie den bevorzugten Synchronisationsserver aus",
        },
        Proxy: {
          Title: "Proxy aktivieren",
          SubTitle:
            "Beim Synchronisieren im Browser muss ein Proxy aktiviert werden, um Cross-Origin-Beschränkungen zu vermeiden",
        },
        ProxyUrl: {
          Title: "Proxy-Adresse",
          SubTitle: "Nur für projektinterne Cross-Origin-Proxy",
        },

        WebDav: {
          Endpoint: "WebDAV-Adresse",
          UserName: "Benutzername",
          Password: "Passwort",
        },

        UpStash: {
          Endpoint: "UpStash Redis REST-Url",
          UserName: "Sicherungsname",
          Password: "UpStash Redis REST-Token",
        },
      },

      LocalState: "Lokale Daten",
      Overview: (overview: any) => {
        return `${overview.chat} Chats, ${overview.message} Nachrichten, ${overview.prompt} Eingabeaufforderungen, ${overview.mask} Masken`;
      },
      ImportFailed: "Import fehlgeschlagen",
    },
    Mask: {
      Splash: {
        Title: "Masken-Startseite",
        SubTitle:
          "Zeige die Masken-Startseite beim Erstellen eines neuen Chats",
      },
      Builtin: {
        Title: "Eingebaute Masken ausblenden",
        SubTitle: "Blendet eingebaute Masken in allen Maskenlisten aus",
      },
    },
    Prompt: {
      Disable: {
        Title: "Automatische Eingabeaufforderung deaktivieren",
        SubTitle:
          "Geben Sie am Anfang des Eingabefelds / ein, um die automatische Vervollständigung auszulösen",
      },
      List: "Benutzerdefinierte Eingabeaufforderungsliste",
      ListCount: (builtin: number, custom: number) =>
        `Eingebaut ${builtin} Stück, Benutzerdefiniert ${custom} Stück`,
      Edit: "Bearbeiten",
      Modal: {
        Title: "Eingabeaufforderungsliste",
        Add: "Neu erstellen",
        Search: "Eingabeaufforderungen suchen",
      },
      EditModal: {
        Title: "Eingabeaufforderung bearbeiten",
      },
    },
    HistoryCount: {
      Title: "Anzahl der historischen Nachrichten",
      SubTitle:
        "Anzahl der historischen Nachrichten, die bei jeder Anfrage mitgesendet werden",
    },
    CompressThreshold: {
      Title: "Komprimierungsschwelle für historische Nachrichtenlänge",
      SubTitle:
        "Wenn die unkomprimierten historischen Nachrichten diesen Wert überschreiten, wird komprimiert",
    },

    Usage: {
      Title: "Guthabenabfrage",
      SubTitle(used: any, total: any) {
        return `In diesem Monat verwendet $${used}, Abonnement insgesamt $${total}`;
      },
      IsChecking: "Wird überprüft…",
      Check: "Erneut überprüfen",
      NoAccess:
        "Geben Sie API-Schlüssel oder Zugangspasswort ein, um das Guthaben einzusehen",
    },

    Access: {
      SaasStart: {
        Title: "NextChat AI verwenden",
        Label: "(Die kosteneffektivste Lösung)",
        SubTitle:
          "Offiziell von NextChat verwaltet, sofort einsatzbereit ohne Konfiguration, unterstützt die neuesten großen Modelle wie OpenAI o1, GPT-4o und Claude-3.5",
        ChatNow: "Jetzt chatten",
      },

      AccessCode: {
        Title: "Zugangscode",
        SubTitle:
          "Der Administrator hat die verschlüsselte Zugriffskontrolle aktiviert",
        Placeholder: "Geben Sie den Zugangscode ein",
      },
      CustomEndpoint: {
        Title: "Benutzerdefinierte Schnittstelle",
        SubTitle: "Benutzerdefinierte Azure- oder OpenAI-Dienste verwenden",
      },
      Provider: {
        Title: "Modellanbieter",
        SubTitle: "Wechseln Sie zu verschiedenen Anbietern",
      },
      OpenAI: {
        ApiKey: {
          Title: "OpenAI API Key",
          SubTitle:
            "Verwenden Sie benutzerdefinierten OpenAI-Schlüssel, um Passwortzugangsbeschränkungen zu umgehen",
          Placeholder: "OpenAI API-Schlüssel",
        },

        Endpoint: {
          Title: "Schnittstellenadresse",
          SubTitle: "Neben der Standardadresse muss http(s):// enthalten sein",
        },
      },
      Azure: {
        ApiKey: {
          Title: "Azure API Key",
          SubTitle:
            "Verwenden Sie benutzerdefinierten Azure-Schlüssel, um Passwortzugangsbeschränkungen zu umgehen",
          Placeholder: "Azure API-Schlüssel",
        },

        Endpoint: {
          Title: "Schnittstellenadresse",
          SubTitle: "Beispiel:",
        },

        ApiVerion: {
          Title: "Schnittstellenversion (azure api version)",
          SubTitle: "Wählen Sie eine spezifische Teilversion aus",
        },
      },
      Anthropic: {
        ApiKey: {
          Title: "Anthropic API Key",
          SubTitle:
            "Verwenden Sie benutzerdefinierten Anthropic-Schlüssel, um Passwortzugangsbeschränkungen zu umgehen",
          Placeholder: "Anthropic API-Schlüssel",
        },

        Endpoint: {
          Title: "Schnittstellenadresse",
          SubTitle: "Beispiel:",
        },

        ApiVerion: {
          Title: "Schnittstellenversion (claude api version)",
          SubTitle: "Wählen Sie eine spezifische API-Version aus",
        },
      },
      Google: {
        ApiKey: {
          Title: "Google API Key",
          SubTitle: "Holen Sie sich Ihren API-Schlüssel von Google AI",
          Placeholder: "Geben Sie Ihren Google AI Studio API-Schlüssel ein",
        },

        Endpoint: {
          Title: "Endpunktadresse",
          SubTitle: "Beispiel:",
        },

        ApiVersion: {
          Title: "API-Version (nur für gemini-pro)",
          SubTitle: "Wählen Sie eine spezifische API-Version aus",
        },
        GoogleSafetySettings: {
          Title: "Google Sicherheitsfilterstufe",
          SubTitle: "Inhaltfilterstufe einstellen",
        },
      },
      Baidu: {
        ApiKey: {
          Title: "Baidu API Key",
          SubTitle: "Verwenden Sie benutzerdefinierten Baidu API-Schlüssel",
          Placeholder: "Baidu API-Schlüssel",
        },
        SecretKey: {
          Title: "Geheimschlüssel",
          SubTitle: "Verwenden Sie benutzerdefinierten Baidu Geheimschlüssel",
          Placeholder: "Baidu Geheimschlüssel",
        },
        Endpoint: {
          Title: "Schnittstellenadresse",
          SubTitle:
            "Keine benutzerdefinierten Adressen unterstützen, konfigurieren Sie in .env",
        },
      },
      ByteDance: {
        ApiKey: {
          Title: "ByteDance API Key",
          SubTitle: "Verwenden Sie benutzerdefinierten ByteDance API-Schlüssel",
          Placeholder: "ByteDance API-Schlüssel",
        },
        Endpoint: {
          Title: "Schnittstellenadresse",
          SubTitle: "Beispiel:",
        },
      },
      Alibaba: {
        ApiKey: {
          Title: "Alibaba API Key",
          SubTitle:
            "Verwenden Sie benutzerdefinierten Alibaba Cloud API-Schlüssel",
          Placeholder: "Alibaba Cloud API-Schlüssel",
        },
        Endpoint: {
          Title: "Schnittstellenadresse",
          SubTitle: "Beispiel:",
        },
      },
      CustomModel: {
        Title: "Benutzerdefinierter Modellname",
        SubTitle:
          "Fügen Sie benutzerdefinierte Modelloptionen hinzu, getrennt durch Kommas",
      },
    
      "Tencent": {
        "ApiKey": {
          "Title": "Tencent API Key",
          "SubTitle": "Eigenen API Key verwenden",
          "Placeholder": "Tencent API Key",
        },
        "SecretKey": {
          "Title": "Tencent Secret Key",
          "SubTitle": "Eigene Zugangsdaten verwenden — Secret Key",
          "Placeholder": "Tencent Secret Key",
        },
        "Endpoint": {
          "Title": "Schnittstellenadresse",
          "SubTitle": "Diesen Wert in .env konfigurieren",
        },
      },
      "Moonshot": {
        "ApiKey": {
          "Title": "Moonshot API Key",
          "SubTitle": "Eigenen API Key verwenden",
          "Placeholder": "Moonshot API Key",
        },
        "Endpoint": {
          "Title": "Schnittstellenadresse",
          "SubTitle": "Beispiel: ",
        },
      },
      "DeepSeek": {
        "ApiKey": {
          "Title": "DeepSeek API Key",
          "SubTitle": "Eigenen API Key verwenden",
          "Placeholder": "DeepSeek API Key",
        },
        "Endpoint": {
          "Title": "Schnittstellenadresse",
          "SubTitle": "Beispiel: ",
        },
      },
      "XAI": {
        "ApiKey": {
          "Title": "XAI API Key",
          "SubTitle": "Eigenen API Key verwenden",
          "Placeholder": "XAI API Key",
        },
        "Endpoint": {
          "Title": "Schnittstellenadresse",
          "SubTitle": "Beispiel: ",
        },
      },
      "ChatGLM": {
        "ApiKey": {
          "Title": "ChatGLM API Key",
          "SubTitle": "Eigenen API Key verwenden",
          "Placeholder": "ChatGLM API Key",
        },
        "Endpoint": {
          "Title": "Schnittstellenadresse",
          "SubTitle": "Beispiel: ",
        },
      },
      "SiliconFlow": {
        "ApiKey": {
          "Title": "SiliconFlow API Key",
          "SubTitle": "Eigenen API Key verwenden",
          "Placeholder": "SiliconFlow API Key",
        },
        "Endpoint": {
          "Title": "Schnittstellenadresse",
          "SubTitle": "Beispiel: ",
        },
      },
      "Stability": {
        "ApiKey": {
          "Title": "Stability API Key",
          "SubTitle": "Eigenen API Key verwenden",
          "Placeholder": "Stability API Key",
        },
        "Endpoint": {
          "Title": "Schnittstellenadresse",
          "SubTitle": "Beispiel: ",
        },
      },
      "Iflytek": {
        "ApiKey": {
          "Title": "Iflytek API Key",
          "SubTitle": "Eigenen API Key verwenden",
          "Placeholder": "Iflytek API Key",
        },
        "ApiSecret": {
          "Title": "Iflytek API Secret",
          "SubTitle": "Eigene Zugangsdaten verwenden — API Secret",
          "Placeholder": "Iflytek API Secret",
        },
        "Endpoint": {
          "Title": "Schnittstellenadresse",
          "SubTitle": "Beispiel: ",
        },
      },
    },

    Model: "Modell",
    CompressModel: {
      Title: "Kompressionsmodell",
      SubTitle: "Modell zur Komprimierung des Verlaufs",
    },
    Temperature: {
      Title: "Zufälligkeit (temperature)",
      SubTitle: "Je höher der Wert, desto zufälliger die Antwort",
    },
    TopP: {
      Title: "Kern-Sampling (top_p)",
      SubTitle:
        "Ähnlich der Zufälligkeit, aber nicht zusammen mit Zufälligkeit ändern",
    },
    MaxTokens: {
      Title: "Maximale Token-Anzahl pro Antwort",
      SubTitle: "Maximale Anzahl der Tokens pro Interaktion",
    },
    PresencePenalty: {
      Title: "Themenfrische (presence_penalty)",
      SubTitle:
        "Je höher der Wert, desto wahrscheinlicher wird auf neue Themen eingegangen",
    },
    FrequencyPenalty: {
      Title: "Häufigkeitsstrafe (frequency_penalty)",
      SubTitle:
        "Je höher der Wert, desto wahrscheinlicher werden wiederholte Wörter reduziert",
    },
  
    "ShowPassword": "Passwort anzeigen",
    "LocalizationInfo": {
      "Edition": "NextChat – angepasste Ausgabe",
      "Timeout": "Verbindungstest nach 30 Sekunden abgebrochen. Netzwerk und Schnittstellenadresse prüfen.",
      "Success": "Verbindung erfolgreich",
      "NoResponse": "Keine gültige Antwort vom Anbieter. Modell und Schnittstelleneinstellungen prüfen.",
      "Upstream": "Upstream-Basis",
      "Details": "Detaillierte Versionsinformationen",
      "Security": "Kennung der Sicherheitswartung",
      "Commit": "Build-Commit",
      "Official": "Offizielle Referenzversion",
      "Unavailable": "Nicht verfügbar",
      "Note": "Enthält ausgewählte Rückportierungen, nicht die vollständige offizielle Version v2.16.1. Offizielle Versionsangaben dienen nur als Referenz.",
    },
    "ProviderSetup": {
      "ModelIdPlaceholder": "Modell-ID@Anbieter",
      "Provider": "Anbieter",
      "ProviderHelp": "Anbieter auswählen und dessen API Key eingeben, um das Standardmodell zu nutzen",
      "ProviderKeyPlaceholder": "API Key dieses Anbieters eingeben",
      "CurrentModel": "Aktuelles Chatmodell",
      "DefaultModel": "Standardmodell",
      "ModelHelp": "Schnittstelle und eigene Modelle in den erweiterten Einstellungen anpassen",
      "TestModel": "Aktuelles Chatmodell testen",
      "TestHelp": "Sendet eine kurze Anfrage, die API-Kosten verursachen kann; speichert keinen Chatverlauf",
      "TestConnection": "Verbindung testen",
      "Testing": "Test läuft…",
      "Advanced": "Erweiterte Einstellungen",
      "OfficialURL": "Offizielle Adresse",
      "DefaultRoute": "Verwendet standardmäßig die Route dieser Website",
    },
    "TTS": {
      "Enable": {
        "Title": "TTS aktivieren",
        "SubTitle": "Text in Sprache umwandeln",
      },
      "Autoplay": {
        "Title": "Automatische Wiedergabe aktivieren",
        "SubTitle": "Sprache automatisch erzeugen und abspielen; zuerst TTS aktivieren",
      },
      "Model": "Modell",
      "Engine": "TTS-Modul",
      "Voice": {
        "Title": "Stimme",
        "SubTitle": "Stimme für erzeugte Audiodaten",
      },
      "Speed": {
        "Title": "Geschwindigkeit",
        "SubTitle": "Geschwindigkeit der erzeugten Audiodaten",
      },
    },
    "Realtime": {
      "Enable": {
        "Title": "Echtzeitchat",
        "SubTitle": "Echtzeitchat aktivieren",
      },
      "Provider": {
        "Title": "Modellanbieter",
        "SubTitle": "Anbieter wechseln",
      },
      "Model": {
        "Title": "Modell",
        "SubTitle": "Modell auswählen",
      },
      "ApiKey": {
        "Title": "API Key",
        "SubTitle": "API Key",
        "Placeholder": "API Key",
      },
      "Azure": {
        "Endpoint": {
          "Title": "Schnittstellenadresse",
          "SubTitle": "Schnittstellenadresse",
        },
        "Deployment": {
          "Title": "Bereitstellungsname",
          "SubTitle": "Bereitstellungsname",
        },
      },
      "Temperature": {
        "Title": "Zufälligkeit (temperature)",
        "SubTitle": "Je höher der Wert, desto zufälliger die Antwort",
      },
    },
    "SafetyLabels": {
      "BLOCK_NONE": "Keine",
      "BLOCK_ONLY_HIGH": "Nur hoch",
      "BLOCK_MEDIUM_AND_ABOVE": "Mittel und höher",
      "BLOCK_LOW_AND_ABOVE": "Niedrig und höher",
    },
  },
  Store: {
    DefaultTopic: "Neuer Chat",
    BotHello: "Wie kann ich Ihnen helfen?",
    Error:
      "Ein Fehler ist aufgetreten, bitte versuchen Sie es später noch einmal",
    Prompt: {
      History: (content: string) =>
        "Dies ist eine Zusammenfassung des bisherigen Chats als Hintergrundinformation: " +
        content,
      Topic:
        "Geben Sie ein kurzes Thema in vier bis fünf Wörtern zurück, ohne Erklärungen, ohne Satzzeichen, ohne Füllwörter, ohne zusätzliche Texte und ohne Fettdruck. Wenn kein Thema vorhanden ist, geben Sie bitte „Allgemeines Gespräch“ zurück.",
      Summarize:
        "Fassen Sie den Gesprächsinhalt zusammen, um als Kontextaufforderung für den nächsten Schritt zu dienen, halten Sie es unter 200 Zeichen",
    },
  },
  Copy: {
    Success: "In die Zwischenablage geschrieben",
    Failed:
      "Kopieren fehlgeschlagen, bitte erlauben Sie Zugriff auf die Zwischenablage",
  },
  Download: {
    Success: "Inhalt wurde in Ihrem Verzeichnis heruntergeladen.",
    Failed: "Download fehlgeschlagen.",
  },
  Context: {
    Toast: (x: any) => `Beinhaltet ${x} vordefinierte Eingabeaufforderungen`,
    Edit: "Aktuelle Gesprächseinstellungen",
    Add: "Neues Gespräch hinzufügen",
    Clear: "Kontext gelöscht",
    Revert: "Kontext wiederherstellen",
  },
  Plugin: {
    Name: "Erweiterung",
  
    "Accessibility": {
      "Create": "Neu erstellen: Erweiterung",
      "Edit": "Bearbeiten: Erweiterung",
      "Save": "Speichern: Erweiterung",
      "SchemaUrl": "Erweiterung Schema URL",
      "LoadSchema": "Von URL laden: Erweiterung Schema",
      "Schema": "Erweiterung Schema",
    },
    "Page": {
      "Title": "Erweiterungen",
      "SubTitle": (count: number) => "Erweiterungen: " + count,
      "Search": "Nachrichten suchen — Erweiterungen",
      "Create": "Neu erstellen",
      "Find": "Erweiterungen auf GitHub finden: ",
    },
    "Item": {
      "Info": (count: number) => "Methoden: " + count,
      "View": "Ansehen",
      "Edit": "Bearbeiten",
      "Delete": "Löschen",
      "DeleteConfirm": "Bestätigen Sie das Löschen?",
    },
    "Auth": {
      "None": "Keine Authentifizierung",
      "Basic": "Basic",
      "Bearer": "Bearer",
      "Custom": "Benutzerdefiniert",
      "CustomHeader": "Parametername",
      "Token": "Token",
      "Proxy": "Proxy verwenden",
      "ProxyDescription": "Proxy zur Vermeidung von CORS-Beschränkungen verwenden",
      "Location": "Position",
      "LocationHeader": "Header",
      "LocationQuery": "Query",
      "LocationBody": "Body",
    },
    "EditModal": {
      "Title": (readonly: boolean) => "Bearbeiten: Erweiterung" + (readonly ? " (Schreibgeschützt)" : ""),
      "Download": "Herunterladen",
      "Auth": "Authentifizierungsart",
      "Content": "OpenAPI Schema",
      "Load": "Von URL laden",
      "Method": "Methoden",
      "Error": "Ungültiges OpenAPI Schema",
    },
  },
  FineTuned: {
    Sysmessage: "Du bist ein Assistent",
  },
  SearchChat: {
    Name: "Suche",
    Page: {
      Title: "Chatverlauf durchsuchen",
      Search: "Suchbegriff eingeben",
      NoResult: "Keine Ergebnisse gefunden",
      NoData: "Keine Daten",
      Loading: "Laden",

      SubTitle: (count: number) => `${count} Ergebnisse gefunden`,
    },
    Item: {
      View: "Ansehen",
    },
  },
  Mask: {
    Name: "Masken",
    Page: {
      Title: "Vordefinierte Rollenmasken",
      SubTitle: (count: number) =>
        `${count} vordefinierte Rollenbeschreibungen`,
      Search: "Rollenmasken suchen",
      Create: "Neu erstellen",
    },
    Item: {
      Info: (count: number) => `Beinhaltet ${count} vordefinierte Gespräche`,
      Chat: "Gespräch",
      View: "Anzeigen",
      Edit: "Bearbeiten",
      Delete: "Löschen",
      DeleteConfirm: "Bestätigen Sie das Löschen?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Vordefinierte Maske bearbeiten ${readonly ? "（Nur lesen）" : ""}`,
      Download: "Vorgabe herunterladen",
      Clone: "Vorgabe klonen",
    },
    Config: {
      Avatar: "Rollen-Avatar",
      Name: "Rollenname",
      Sync: {
        Title: "Globale Einstellungen verwenden",
        SubTitle:
          "Soll das aktuelle Gespräch die globalen Modelleinstellungen verwenden?",
        Confirm:
          "Die benutzerdefinierten Einstellungen des aktuellen Gesprächs werden automatisch überschrieben. Bestätigen Sie, dass Sie die globalen Einstellungen aktivieren möchten?",
      },
      HideContext: {
        Title: "Vordefinierte Gespräche ausblenden",
        SubTitle:
          "Nach dem Ausblenden werden vordefinierte Gespräche nicht mehr im Chat angezeigt",
      },
      Share: {
        Title: "Diese Maske teilen",
        SubTitle: "Generieren Sie einen Direktlink zu dieser Maske",
        Action: "Link kopieren",
      },
    
      "Artifacts": {
        "Title": "Artifacts aktivieren",
        "SubTitle": "HTML-Seiten mit Artifacts darstellen",
      },
      "CodeFold": {
        "Title": "Codefaltung aktivieren",
        "SubTitle": "Lange Codeblöcke automatisch einklappen",
      },
    },
  },
  NewChat: {
    Return: "Zurück",
    Skip: "Direkt beginnen",
    NotShow: "Nicht mehr anzeigen",
    ConfirmNoShow:
      "Bestätigen Sie die Deaktivierung? Nach der Deaktivierung können Sie jederzeit in den Einstellungen wieder aktivieren.",
    Title: "Wählen Sie eine Maske aus",
    SubTitle:
      "Starten Sie jetzt und lassen Sie sich von den Gedanken hinter der Maske inspirieren",
    More: "Alle anzeigen",
  },

  URLCommand: {
    Code: "Ein Zugangscode wurde im Link gefunden. Möchten Sie diesen automatisch einfügen?",
    Settings:
      "Vordefinierte Einstellungen wurden im Link gefunden. Möchten Sie diese automatisch einfügen?",
  },

  UI: {
    Confirm: "Bestätigen",
    Cancel: "Abbrechen",
    Close: "Schließen",
    Create: "Neu erstellen",
    Edit: "Bearbeiten",
    Export: "Exportieren",
    Import: "Importieren",
    Sync: "Synchronisieren",
    Config: "Konfigurieren",
  
    "Save": "Speichern",
    "Loading": "Wird geladen…",
    "Seed": "Zufallsstartwert",
    "User": "Benutzer",
    "Assistant": "Assistent",
    "System": "System",
    "Text": "Text",
    "Image": "Bild",
    "Standard": "Standard",
    "Vivid": "Lebhaft",
    "Natural": "Natürlich",
    "ErrorTitle": "Ein Fehler ist aufgetreten",
    "ReportError": "Diesen Fehler melden",
    "ClearData": "Alle Daten löschen",
    "AssistantTagline": "Erstelle deinen eigenen KI-Assistenten.",
    "EmptyPrompt": "Neue Vorlage",
    "EmptyPromptContent": "Vorlagentext eingeben",
    "AllFiles": "Alle Dateien",
  
    "Refresh": "Neu laden",
    "HidePassword": "Passwort verbergen",
  },
  Exporter: {
    Description: {
      Title: "Nur Nachrichten nach dem Löschen des Kontexts werden angezeigt",
    },
    Model: "Modell",
    Messages: "Nachrichten",
    Topic: "Thema",
    Time: "Zeit",
  },

  "Discovery": {
    "Name": "Entdecken",
  },
  "Mcp": {
    "Name": "MCP",
    "UI": {
      "Market": "MCP-Marktplatz",
      "PresetLoadFailed": "Voreingestellte Server konnten nicht geladen werden",
      "InitFailed": "Anfangszustand konnte nicht geladen werden",
      "ConfigSaved": "Serverkonfiguration gespeichert",
      "ConfigSaveFailed": "Konfiguration konnte nicht gespeichert werden",
      "ToolsFailed": "Werkzeuge konnten nicht geladen werden",
      "Stopped": "Angehalten",
      "StopFailed": "Server konnte nicht angehalten werden",
      "StartFailed": "Serverstart fehlgeschlagen; Protokolle prüfen",
      "RestartingClients": "Alle Clients werden neu gestartet",
      "RestartFailed": "Neustart der Clients fehlgeschlagen",
      "Initializing": "Initialisierung",
      "NoServers": "Keine Server verfügbar",
      "OpenRepo": "Repository öffnen",
      "Start": "Starten",
      "Tools": "Werkzeuge",
      "Add": "Hinzufügen",
      "RestartAll": "Alle neu starten",
      "Search": "MCP-Server suchen",
      "ConfigureServer": "Server konfigurieren",
      "ServerDetails": "Serverdetails",
      "NoTools": "Keine Werkzeuge verfügbar",
      "LoadingPresets": "Voreingestellte Server werden geladen…",
      "ConfiguredServers": "Konfigurierte Server",
      "UpdatingConfig": "Konfiguration wird aktualisiert…",
      "CreatingClient": "MCP-Client wird erstellt…",
      "Stopping": "Server wird angehalten…",
      "Starting": "Server wird gestartet…",
      "RestartingServers": "Alle Server werden neu gestartet…",
      "ExecutionFailed": "MCP-Ausführung fehlgeschlagen",
    },
  },
  "SdPanel": {
    "Prompt": "Bildbeschreibung",
    "NegativePrompt": "Negativbeschreibung",
    "PleaseInput": (name: string) => name + " — Wert eingeben",
    "AspectRatio": "Seitenverhältnis",
    "ImageStyle": "Bildstil",
    "OutFormat": "Ausgabeformat",
    "AIModel": "Modell",
    "ModelVersion": "Modellversion",
    "Submit": "Erzeugen",
    "ParamIsRequired": (name: string) => name + ": Erforderlich",
    "Styles": {
      "D3Model": "3D-Modell",
      "AnalogFilm": "Analogfilm",
      "Anime": "Anime",
      "Cinematic": "Filmisch",
      "ComicBook": "Comic",
      "DigitalArt": "Digitale Kunst",
      "Enhance": "Verstärkt",
      "FantasyArt": "Fantasiekunst",
      "Isometric": "Isometrisch",
      "LineArt": "Linienzeichnung",
      "LowPoly": "Wenige Polygone",
      "ModelingCompound": "Modelliermasse",
      "NeonPunk": "Neon-Punk",
      "Origami": "Faltkunst",
      "Photographic": "Fotografisch",
      "PixelArt": "Pixelkunst",
      "TileTexture": "Kacheltextur",
    },
  },
  "Sd": {
    "SubTitle": (count: number) => "Bilder: " + count,
    "Actions": {
      "Params": "Parameter anzeigen",
      "Copy": "Kopieren: Bildbeschreibung",
      "Delete": "Löschen",
      "Retry": "Erneut versuchen",
      "ReturnHome": "Zur Startseite",
      "History": "Verlauf",
    },
    "EmptyRecord": "Noch keine Bilder",
    "Status": {
      "Name": "Status",
      "Success": "Erfolgreich",
      "Error": "Fehler",
      "Wait": "Wartet",
      "Running": "Wird ausgeführt",
    },
    "Danger": {
      "Delete": "Bestätigen Sie das Löschen?",
    },
    "GenerateParams": "Erzeugungsparameter",
    "Detail": "Details",
  },
  "ApiError": {
    "Timeout": "Zeitüberschreitung. Erneut versuchen oder Schnittstelle in den erweiterten Einstellungen prüfen.",
    "Quota": "Anbieterkontingent unzureichend. Guthaben, Abrechnung und Nutzungslimits prüfen.",
    "AccessCode": "Ungültiger Zugangscode für diese Website. Bitte prüfen.",
    "InvalidKey": "API Key ungültig oder abgelaufen. Key des gewählten Anbieters prüfen.",
    "Permission": "Zugriff verweigert. Modellberechtigungen und regionale Beschränkungen prüfen.",
    "Model": "Modell oder Schnittstelle nicht verfügbar. Modell-ID und Adresse in den erweiterten Einstellungen prüfen.",
    "RateLimit": "Zu viele Anfragen oder Nutzungslimit erreicht. Später erneut versuchen und Kontingent prüfen.",
    "Parameters": "Unverträgliche Anfrageparameter. Modell-ID und Parameter in den erweiterten Einstellungen prüfen.",
    "Unavailable": "Anbieter vorübergehend nicht verfügbar. Später erneut versuchen.",
    "Empty": "Kein gültiger Inhalt zurückgegeben. Modellverfügbarkeit prüfen und erneut versuchen.",
    "Network": "Netzwerkverbindung fehlgeschlagen. Netzwerk, Schnittstellenadresse und CORS-Einstellungen prüfen.",
    "Generic": "Anfrage fehlgeschlagen. API Key, Modell und Schnittstelle des Anbieters prüfen.",
  },
};

export default de;
