import type { LocaleType } from "./index";
import { getClientConfig } from "../config/client";
import { SAAS_CHAT_UTM_URL } from "@/app/constant";
const isApp = !!getClientConfig()?.isApp;

const fr: LocaleType = {
  WIP: "Prochainement...",
  Error: {
    Unauthorized: isApp
      ? `😆 La conversation a rencontré quelques problèmes, pas de panique :
    \\ 1️⃣ Si vous souhaitez commencer sans configuration, [cliquez ici pour démarrer la conversation immédiatement 🚀](${SAAS_CHAT_UTM_URL})
    \\ 2️⃣ Si vous souhaitez utiliser vos propres ressources OpenAI, cliquez [ici](/#/settings) pour modifier les paramètres ⚙️`
      : `😆 La conversation a rencontré quelques problèmes, pas de panique :
    \ 1️⃣ Si vous souhaitez commencer sans configuration, [cliquez ici pour démarrer la conversation immédiatement 🚀](${SAAS_CHAT_UTM_URL})
    \ 2️⃣ Si vous utilisez une version déployée privée, cliquez [ici](/#/auth) pour entrer la clé d'accès 🔑
    \ 3️⃣ Si vous souhaitez utiliser vos propres ressources OpenAI, cliquez [ici](/#/settings) pour modifier les paramètres ⚙️
 `,
  },
  Auth: {
    Title: "Mot de passe requis",
    Tips: "L'administrateur a activé la vérification par mot de passe. Veuillez entrer le code d'accès ci-dessous",
    SubTips: "Ou entrez votre clé API OpenAI ou Google",
    Input: "Entrez le code d'accès ici",
    Confirm: "Confirmer",
    Later: "Plus tard",
    Return: "Retour",
    SaasTips:
      "La configuration est trop compliquée, je veux l'utiliser immédiatement",
    TopTips:
      "🥳 Offre de lancement NextChat AI, débloquez OpenAI o1, GPT-4o, Claude-3.5 et les derniers grands modèles",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} conversations`,
  },
  Chat: {
    SubTitle: (count: number) => `Total de ${count} conversations`,
    EditMessage: {
      Title: "Modifier l'historique des messages",
      Topic: {
        Title: "Sujet de la discussion",
        SubTitle: "Modifier le sujet de la discussion actuel",
      },
    },
    Actions: {
      ChatList: "Voir la liste des messages",
      CompressedHistory: "Voir l'historique des prompts compressés",
      Export: "Exporter l'historique de la discussion",
      Copy: "Copier",
      Stop: "Arrêter",
      Retry: "Réessayer",
      Pin: "Épingler",
      PinToastContent: "1 conversation épinglée aux prompts prédéfinis",
      PinToastAction: "Voir",
      Delete: "Supprimer",
      Edit: "Modifier",
      RefreshTitle: "Actualiser le titre",
      RefreshToast: "Demande d'actualisation du titre envoyée",
    
      "FullScreen": "Plein écran",
      "Speech": "Lire",
      "StopSpeech": "Arrêter",
    },
    Commands: {
      new: "Nouvelle discussion",
      newm: "Créer une discussion à partir du masque",
      next: "Discussion suivante",
      prev: "Discussion précédente",
      clear: "Effacer le contexte",
      del: "Supprimer la discussion",
    
      "fork": "Copier la conversation",
    },
    InputActions: {
      Stop: "Arrêter la réponse",
      ToBottom: "Aller au plus récent",
      Theme: {
        auto: "Thème automatique",
        light: "Mode clair",
        dark: "Mode sombre",
      },
      Prompt: "Commandes rapides",
      Masks: "Tous les masques",
      Clear: "Effacer la discussion",
      Settings: "Paramètres de la discussion",
      UploadImage: "Télécharger une image",
    },
    Rename: "Renommer la discussion",
    Typing: "En train d'écrire…",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} pour envoyer`;
      if (submitKey === "Enter") {
        inputHints += "，Shift + Enter pour passer à la ligne";
      }
      return inputHints + "，/ pour compléter, : pour déclencher des commandes";
    },
    Send: "Envoyer",
    Config: {
      Reset: "Effacer la mémoire",
      SaveAs: "Enregistrer comme masque",
    },
    IsContext: "Prompt prédéfini",
  
    "StartSpeak": "Commencer à parler",
    "StopSpeak": "Arrêter",
    "ShortcutKey": {
      "Title": "Raccourcis clavier",
      "newChat": "Ouvrir une conversation",
      "focusInput": "Activer le champ de saisie",
      "copyLastMessage": "Copier la dernière réponse",
      "copyLastCode": "Copier le dernier bloc de code",
      "showShortcutKey": "Afficher les raccourcis",
      "clearContext": "Effacer la discussion",
    },
  },
  Export: {
    Title: "Partager l'historique des discussions",
    Copy: "Tout copier",
    Download: "Télécharger le fichier",
    Share: "Partager sur ShareGPT",
    MessageFromYou: "Utilisateur",
    MessageFromChatGPT: "ChatGPT",
    Format: {
      Title: "Format d'exportation",
      SubTitle: "Vous pouvez exporter en texte Markdown ou en image PNG",
    },
    IncludeContext: {
      Title: "Inclure le contexte du masque",
      SubTitle: "Afficher le contexte du masque dans les messages",
    },
    Steps: {
      Select: "Sélectionner",
      Preview: "Aperçu",
    },
    Image: {
      Toast: "Génération de la capture d'écran",
      Modal:
        "Appuyez longuement ou faites un clic droit pour enregistrer l'image",
    },
  
    "Artifacts": {
      "Title": "Partager les Artifacts",
      "Error": "Partager les Artifacts — Erreur",
    },
  },
  Select: {
    Search: "Rechercher des messages",
    All: "Tout sélectionner",
    Latest: "Derniers messages",
    Clear: "Effacer la sélection",
  },
  Memory: {
    Title: "Résumé historique",
    EmptyContent: "Le contenu de la discussion est trop court pour être résumé",
    Send: "Compresser automatiquement l'historique des discussions et l'envoyer comme contexte",
    Copy: "Copier le résumé",
    Reset: "[unused]",
    ResetConfirm: "Confirmer la suppression du résumé historique ?",
  },
  Home: {
    NewChat: "Nouvelle discussion",
    DeleteChat: "Confirmer la suppression de la discussion sélectionnée ?",
    DeleteToast: "Discussion supprimée",
    Revert: "Annuler",
  },
  Settings: {
    Title: "Paramètres",
    SubTitle: "Toutes les options de configuration",

    Danger: {
      Reset: {
        Title: "Réinitialiser tous les paramètres",
        SubTitle:
          "Réinitialiser toutes les options de configuration aux valeurs par défaut",
        Action: "Réinitialiser maintenant",
        Confirm: "Confirmer la réinitialisation de tous les paramètres ?",
      },
      Clear: {
        Title: "Effacer toutes les données",
        SubTitle:
          "Effacer toutes les discussions et les données de configuration",
        Action: "Effacer maintenant",
        Confirm:
          "Confirmer l'effacement de toutes les discussions et données de configuration ?",
      },
    },
    Lang: {
      Name: "Langue", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "Toutes les langues",
    },
    Avatar: "Avatar",
    FontSize: {
      Title: "Taille de la police",
      SubTitle: "Taille de la police pour le contenu des discussions",
    },
    FontFamily: {
      Title: "Police de Chat",
      SubTitle:
        "Police du contenu du chat, laissez vide pour appliquer la police par défaut globale",
      Placeholder: "Nom de la Police",
    },
    InjectSystemPrompts: {
      Title: "Injecter des invites système",
      SubTitle:
        "Ajouter de manière forcée une invite système simulée de ChatGPT au début de chaque liste de messages",
    },
    InputTemplate: {
      Title: "Prétraitement des entrées utilisateur",
      SubTitle:
        "Le dernier message de l'utilisateur sera intégré dans ce modèle",
    },

    Update: {
      Version: (x: string) => `Version actuelle : ${x}`,
      IsLatest: "Vous avez la dernière version",
      CheckUpdate: "Vérifier les mises à jour",
      IsChecking: "Vérification des mises à jour en cours...",
      FoundUpdate: (x: string) => `Nouvelle version trouvée : ${x}`,
      GoToUpdate: "Aller à la mise à jour",
    
      "Success": "Mise à jour réussie",
      "Failed": "Échec de la mise à jour",
    },
    SendKey: "Touche d'envoi",
    Theme: "Thème",
    TightBorder: "Mode sans bordure",
    SendPreviewBubble: {
      Title: "Bulle d'aperçu",
      SubTitle: "Aperçu du contenu Markdown dans la bulle d'aperçu",
    },
    AutoGenerateTitle: {
      Title: "Génération automatique de titres",
      SubTitle:
        "Générer un titre approprié en fonction du contenu de la discussion",
    },
    Sync: {
      CloudState: "Données cloud",
      NotSyncYet: "Pas encore synchronisé",
      Success: "Synchronisation réussie",
      Fail: "Échec de la synchronisation",

      Config: {
        Modal: {
          Title: "Configurer la synchronisation cloud",
          Check: "Vérifier la disponibilité",
        },
        SyncType: {
          Title: "Type de synchronisation",
          SubTitle: "Choisissez le serveur de synchronisation préféré",
        },
        Proxy: {
          Title: "Activer le proxy",
          SubTitle:
            "Lors de la synchronisation dans le navigateur, le proxy doit être activé pour éviter les restrictions de domaine croisé",
        },
        ProxyUrl: {
          Title: "Adresse du proxy",
          SubTitle:
            "Uniquement pour le proxy de domaine croisé fourni par le projet",
        },

        WebDav: {
          Endpoint: "Adresse WebDAV",
          UserName: "Nom d'utilisateur",
          Password: "Mot de passe",
        },

        UpStash: {
          Endpoint: "URL REST Redis UpStash",
          UserName: "Nom de sauvegarde",
          Password: "Token REST Redis UpStash",
        },
      },

      LocalState: "Données locales",
      Overview: (overview: any) => {
        return `${overview.chat} discussions, ${overview.message} messages, ${overview.prompt} invites, ${overview.mask} masques`;
      },
      ImportFailed: "Échec de l'importation",
    },
    Mask: {
      Splash: {
        Title: "Page de démarrage du masque",
        SubTitle:
          "Afficher la page de démarrage du masque lors de la création d'une nouvelle discussion",
      },
      Builtin: {
        Title: "Masquer les masques intégrés",
        SubTitle:
          "Masquer les masques intégrés dans toutes les listes de masques",
      },
    },
    Prompt: {
      Disable: {
        Title: "Désactiver la complétion automatique des invites",
        SubTitle:
          "Saisir / au début de la zone de texte pour déclencher la complétion automatique",
      },
      List: "Liste des invites personnalisées",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} intégrées, ${custom} définies par l'utilisateur`,
      Edit: "Modifier",
      Modal: {
        Title: "Liste des invites",
        Add: "Créer",
        Search: "Rechercher des invites",
      },
      EditModal: {
        Title: "Modifier les invites",
      },
    },
    HistoryCount: {
      Title: "Nombre de messages historiques",
      SubTitle: "Nombre de messages historiques envoyés avec chaque demande",
    },
    CompressThreshold: {
      Title: "Seuil de compression des messages historiques",
      SubTitle:
        "Compresser les messages historiques lorsque leur longueur dépasse cette valeur",
    },

    Usage: {
      Title: "Vérification du solde",
      SubTitle(used: any, total: any) {
        return `Utilisé ce mois-ci : $${used}, Total d'abonnement : $${total}`;
      },
      IsChecking: "Vérification en cours…",
      Check: "Re-vérifier",
      NoAccess:
        "Entrez la clé API ou le mot de passe d'accès pour vérifier le solde",
    },

    Access: {
      SaasStart: {
        Title: "Utiliser NextChat AI",
        Label: "(La solution la plus rentable)",
        SubTitle:
          "Officiellement maintenu par NextChat, prêt à l'emploi sans configuration, prend en charge les derniers grands modèles comme OpenAI o1, GPT-4o et Claude-3.5",
        ChatNow: "Discuter maintenant",
      },

      AccessCode: {
        Title: "Mot de passe d'accès",
        SubTitle: "L'administrateur a activé l'accès sécurisé",
        Placeholder: "Veuillez entrer le mot de passe d'accès",
      },
      CustomEndpoint: {
        Title: "Interface personnalisée",
        SubTitle: "Utiliser un service Azure ou OpenAI personnalisé",
      },
      Provider: {
        Title: "Fournisseur de modèle",
        SubTitle: "Changer de fournisseur de service",
      },
      OpenAI: {
        ApiKey: {
          Title: "OpenAI API Key",
          SubTitle:
            "Utiliser une clé OpenAI personnalisée pour contourner les restrictions d'accès par mot de passe",
          Placeholder: "API Key OpenAI",
        },

        Endpoint: {
          Title: "Adresse de l'interface",
          SubTitle: "Doit inclure http(s):// en dehors de l'adresse par défaut",
        },
      },
      Azure: {
        ApiKey: {
          Title: "Azure API Key",
          SubTitle:
            "Utiliser une clé Azure personnalisée pour contourner les restrictions d'accès par mot de passe",
          Placeholder: "API Key Azure",
        },

        Endpoint: {
          Title: "Adresse de l'interface",
          SubTitle: "Exemple :",
        },

        ApiVerion: {
          Title: "Version de l'interface (version API azure)",
          SubTitle: "Choisissez une version spécifique",
        },
      },
      Anthropic: {
        ApiKey: {
          Title: "Anthropic API Key",
          SubTitle:
            "Utiliser une clé Anthropic personnalisée pour contourner les restrictions d'accès par mot de passe",
          Placeholder: "API Key Anthropic",
        },

        Endpoint: {
          Title: "Adresse de l'interface",
          SubTitle: "Exemple :",
        },

        ApiVerion: {
          Title: "Version de l'interface (version API claude)",
          SubTitle: "Choisissez une version spécifique de l'API",
        },
      },
      Google: {
        ApiKey: {
          Title: "Google API Key",
          SubTitle: "Obtenez votre API Key Google AI",
          Placeholder: "Entrez votre API Key Google AI Studio",
        },

        Endpoint: {
          Title: "Adresse de l'interface",
          SubTitle: "Exemple :",
        },

        ApiVersion: {
          Title: "Version de l'API (pour gemini-pro uniquement)",
          SubTitle: "Choisissez une version spécifique de l'API",
        },
        GoogleSafetySettings: {
          Title: "Niveau de filtrage de sécurité Google",
          SubTitle: "Définir le niveau de filtrage du contenu",
        },
      },
      Baidu: {
        ApiKey: {
          Title: "Baidu API Key",
          SubTitle: "Utiliser une API Key Baidu personnalisée",
          Placeholder: "API Key Baidu",
        },
        SecretKey: {
          Title: "Clé secrète",
          SubTitle: "Utiliser une clé secrète Baidu personnalisée",
          Placeholder: "Clé secrète Baidu",
        },
        Endpoint: {
          Title: "Adresse de l'interface",
          SubTitle:
            "Non pris en charge pour les configurations personnalisées dans .env",
        },
      },
      ByteDance: {
        ApiKey: {
          Title: "ByteDance API Key",
          SubTitle: "Utiliser une API Key ByteDance personnalisée",
          Placeholder: "API Key ByteDance",
        },
        Endpoint: {
          Title: "Adresse de l'interface",
          SubTitle: "Exemple :",
        },
      },
      Alibaba: {
        ApiKey: {
          Title: "Alibaba API Key",
          SubTitle: "Utiliser une API Key Alibaba Cloud personnalisée",
          Placeholder: "API Key Alibaba Cloud",
        },
        Endpoint: {
          Title: "Adresse de l'interface",
          SubTitle: "Exemple :",
        },
      },
      CustomModel: {
        Title: "Nom du modèle personnalisé",
        SubTitle:
          "Ajouter des options de modèles personnalisés, séparées par des virgules",
      },
    
      "Tencent": {
        "ApiKey": {
          "Title": "Tencent API Key",
          "SubTitle": "Utiliser une API Key personnalisée",
          "Placeholder": "Tencent API Key",
        },
        "SecretKey": {
          "Title": "Tencent Secret Key",
          "SubTitle": "Utiliser des identifiants personnalisés — Secret Key",
          "Placeholder": "Tencent Secret Key",
        },
        "Endpoint": {
          "Title": "Adresse de l’interface",
          "SubTitle": "Configurer cette valeur dans .env",
        },
      },
      "Moonshot": {
        "ApiKey": {
          "Title": "Moonshot API Key",
          "SubTitle": "Utiliser une API Key personnalisée",
          "Placeholder": "Moonshot API Key",
        },
        "Endpoint": {
          "Title": "Adresse de l’interface",
          "SubTitle": "Exemple: ",
        },
      },
      "DeepSeek": {
        "ApiKey": {
          "Title": "DeepSeek API Key",
          "SubTitle": "Utiliser une API Key personnalisée",
          "Placeholder": "DeepSeek API Key",
        },
        "Endpoint": {
          "Title": "Adresse de l’interface",
          "SubTitle": "Exemple: ",
        },
      },
      "XAI": {
        "ApiKey": {
          "Title": "XAI API Key",
          "SubTitle": "Utiliser une API Key personnalisée",
          "Placeholder": "XAI API Key",
        },
        "Endpoint": {
          "Title": "Adresse de l’interface",
          "SubTitle": "Exemple: ",
        },
      },
      "ChatGLM": {
        "ApiKey": {
          "Title": "ChatGLM API Key",
          "SubTitle": "Utiliser une API Key personnalisée",
          "Placeholder": "ChatGLM API Key",
        },
        "Endpoint": {
          "Title": "Adresse de l’interface",
          "SubTitle": "Exemple: ",
        },
      },
      "SiliconFlow": {
        "ApiKey": {
          "Title": "SiliconFlow API Key",
          "SubTitle": "Utiliser une API Key personnalisée",
          "Placeholder": "SiliconFlow API Key",
        },
        "Endpoint": {
          "Title": "Adresse de l’interface",
          "SubTitle": "Exemple: ",
        },
      },
      "Stability": {
        "ApiKey": {
          "Title": "Stability API Key",
          "SubTitle": "Utiliser une API Key personnalisée",
          "Placeholder": "Stability API Key",
        },
        "Endpoint": {
          "Title": "Adresse de l’interface",
          "SubTitle": "Exemple: ",
        },
      },
      "Iflytek": {
        "ApiKey": {
          "Title": "Iflytek API Key",
          "SubTitle": "Utiliser une API Key personnalisée",
          "Placeholder": "Iflytek API Key",
        },
        "ApiSecret": {
          "Title": "Iflytek API Secret",
          "SubTitle": "Utiliser des identifiants personnalisés — API Secret",
          "Placeholder": "Iflytek API Secret",
        },
        "Endpoint": {
          "Title": "Adresse de l’interface",
          "SubTitle": "Exemple: ",
        },
      },
    },

    Model: "Modèle",
    CompressModel: {
      Title: "Modèle de compression",
      SubTitle: "Modèle utilisé pour compresser l'historique",
    },
    Temperature: {
      Title: "Aléatoire (temperature)",
      SubTitle: "Plus la valeur est élevée, plus les réponses sont aléatoires",
    },
    TopP: {
      Title: "Échantillonnage par noyau (top_p)",
      SubTitle:
        "Semblable à l'aléatoire, mais ne pas modifier en même temps que l'aléatoire",
    },
    MaxTokens: {
      Title: "Limite de réponse unique (max_tokens)",
      SubTitle: "Nombre maximal de tokens utilisés pour une interaction unique",
    },
    PresencePenalty: {
      Title: "Nouveauté du sujet (presence_penalty)",
      SubTitle:
        "Plus la valeur est élevée, plus il est probable d'élargir aux nouveaux sujets",
    },
    FrequencyPenalty: {
      Title: "Pénalité de fréquence (frequency_penalty)",
      SubTitle:
        "Plus la valeur est élevée, plus il est probable de réduire les répétitions",
    },
  
    "ShowPassword": "Afficher le mot de passe",
    "LocalizationInfo": {
      "Edition": "NextChat – édition personnalisée",
      "Timeout": "Délai de connexion dépassé après 30 secondes. Vérifiez le réseau et l’adresse de l’API.",
      "Success": "Connexion réussie",
      "NoResponse": "Le fournisseur n’a renvoyé aucune réponse valide. Vérifiez le modèle et l’interface.",
      "Upstream": "Version amont de base",
      "Details": "Informations détaillées sur la version",
      "Security": "Identifiant de maintenance de sécurité",
      "Commit": "Commit de compilation",
      "Official": "Version officielle de référence",
      "Unavailable": "Indisponible",
      "Note": "Inclut des rétroportages sélectionnés, pas la version officielle v2.16.1 complète. La version officielle est indiquée à titre de référence.",
    },
    "ProviderSetup": {
      "ModelIdPlaceholder": "ID de modèle@fournisseur",
      "Provider": "Fournisseur",
      "ProviderHelp": "Choisissez un fournisseur et saisissez son API Key pour utiliser le modèle par défaut",
      "ProviderKeyPlaceholder": "Saisissez l’API Key de ce fournisseur",
      "CurrentModel": "Modèle de conversation actuel",
      "DefaultModel": "Modèle par défaut",
      "ModelHelp": "Réglez l’interface et les modèles personnalisés dans les paramètres avancés",
      "TestModel": "Tester le modèle actuel",
      "TestHelp": "Envoie une courte requête pouvant entraîner des frais API ; sans enregistrer l’historique",
      "TestConnection": "Tester la connexion",
      "Testing": "Test en cours…",
      "Advanced": "Paramètres avancés",
      "OfficialURL": "Adresse officielle",
      "DefaultRoute": "Utilise par défaut la route de ce site",
    },
    "TTS": {
      "Enable": {
        "Title": "Activer TTS",
        "SubTitle": "Activer la synthèse vocale",
      },
      "Autoplay": {
        "Title": "Activer la lecture automatique",
        "SubTitle": "Générer et lire automatiquement la voix ; activer TTS d’abord",
      },
      "Model": "Modèle",
      "Engine": "Moteur TTS",
      "Voice": {
        "Title": "Voix",
        "SubTitle": "Voix utilisée pour le son généré",
      },
      "Speed": {
        "Title": "Vitesse",
        "SubTitle": "Vitesse du son généré",
      },
    },
    "Realtime": {
      "Enable": {
        "Title": "Conversation en temps réel",
        "SubTitle": "Activer la conversation en temps réel",
      },
      "Provider": {
        "Title": "Fournisseur du modèle",
        "SubTitle": "Changer de fournisseur",
      },
      "Model": {
        "Title": "Modèle",
        "SubTitle": "Choisir un modèle",
      },
      "ApiKey": {
        "Title": "API Key",
        "SubTitle": "API Key",
        "Placeholder": "API Key",
      },
      "Azure": {
        "Endpoint": {
          "Title": "Adresse de l’interface",
          "SubTitle": "Adresse de l’interface",
        },
        "Deployment": {
          "Title": "Nom du déploiement",
          "SubTitle": "Nom du déploiement",
        },
      },
      "Temperature": {
        "Title": "Aléatoire (temperature)",
        "SubTitle": "Plus la valeur est élevée, plus les réponses sont aléatoires",
      },
    },
    "SafetyLabels": {
      "BLOCK_NONE": "Aucun",
      "BLOCK_ONLY_HIGH": "Élevé uniquement",
      "BLOCK_MEDIUM_AND_ABOVE": "Moyen et supérieur",
      "BLOCK_LOW_AND_ABOVE": "Faible et supérieur",
    },
  },
  Store: {
    DefaultTopic: "Nouvelle discussion",
    BotHello: "Comment puis-je vous aider ?",
    Error: "Une erreur est survenue, veuillez réessayer plus tard",
    Prompt: {
      History: (content: string) =>
        "Voici le résumé de la discussion précédente : " + content,
      Topic:
        "Utilisez quatre à cinq mots pour retourner le sujet succinct de cette phrase, sans explication, sans ponctuation, sans interjections, sans texte superflu, sans gras. Si aucun sujet, retournez simplement « discussion informelle »",
      Summarize:
        "Faites un résumé succinct de la discussion, à utiliser comme prompt de contexte ultérieur, en moins de 200 mots",
    },
  },
  Copy: {
    Success: "Copié dans le presse-papiers",
    Failed: "Échec de la copie, veuillez autoriser l'accès au presse-papiers",
  },
  Download: {
    Success: "Le contenu a été téléchargé dans votre répertoire.",
    Failed: "Échec du téléchargement.",
  },
  Context: {
    Toast: (x: any) => `Contient ${x} invites prédéfinies`,
    Edit: "Paramètres de la discussion actuelle",
    Add: "Ajouter une discussion",
    Clear: "Contexte effacé",
    Revert: "Restaurer le contexte",
  },
  Plugin: {
    Name: "Extension",
  
    "Accessibility": {
      "Create": "Créer: Extension",
      "Edit": "Modifier: Extension",
      "Save": "Enregistrer: Extension",
      "SchemaUrl": "Extension Schema URL",
      "LoadSchema": "Charger depuis une URL: Extension Schema",
      "Schema": "Extension Schema",
    },
    "Page": {
      "Title": "Extensions",
      "SubTitle": (count: number) => "Extensions: " + count,
      "Search": "Rechercher des messages — Extensions",
      "Create": "Créer",
      "Find": "Trouver des extensions sur GitHub: ",
    },
    "Item": {
      "Info": (count: number) => "Méthodes: " + count,
      "View": "Voir",
      "Edit": "Modifier",
      "Delete": "Supprimer",
      "DeleteConfirm": "Confirmer la suppression ?",
    },
    "Auth": {
      "None": "Aucune authentification",
      "Basic": "Basic",
      "Bearer": "Bearer",
      "Custom": "Personnalisé",
      "CustomHeader": "Nom du paramètre",
      "Token": "Token",
      "Proxy": "Utiliser un proxy",
      "ProxyDescription": "Utiliser un proxy pour éviter les restrictions CORS",
      "Location": "Emplacement",
      "LocationHeader": "Header",
      "LocationQuery": "Query",
      "LocationBody": "Body",
    },
    "EditModal": {
      "Title": (readonly: boolean) => "Modifier: Extension" + (readonly ? " (Lecture seule)" : ""),
      "Download": "Télécharger",
      "Auth": "Type d’authentification",
      "Content": "OpenAPI Schema",
      "Load": "Charger depuis une URL",
      "Method": "Méthodes",
      "Error": "OpenAPI Schema non valide",
    },
  },
  FineTuned: {
    Sysmessage: "Vous êtes un assistant",
  },
  SearchChat: {
    Name: "Recherche",
    Page: {
      Title: "Rechercher dans l'historique des discussions",
      Search: "Entrez le mot-clé de recherche",
      NoResult: "Aucun résultat trouvé",
      NoData: "Aucune donnée",
      Loading: "Chargement",

      SubTitle: (count: number) => `${count} résultats trouvés`,
    },
    Item: {
      View: "Voir",
    },
  },
  Mask: {
    Name: "Masque",
    Page: {
      Title: "Masques de rôle prédéfinis",
      SubTitle: (count: number) => `${count} définitions de rôle prédéfinies`,
      Search: "Rechercher des masques de rôle",
      Create: "Créer",
    },
    Item: {
      Info: (count: number) => `Contient ${count} discussions prédéfinies`,
      Chat: "Discussion",
      View: "Voir",
      Edit: "Modifier",
      Delete: "Supprimer",
      DeleteConfirm: "Confirmer la suppression ?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Modifier le masque prédéfini ${readonly ? " (lecture seule)" : ""}`,
      Download: "Télécharger le masque",
      Clone: "Cloner le masque",
    },
    Config: {
      Avatar: "Avatar du rôle",
      Name: "Nom du rôle",
      Sync: {
        Title: "Utiliser les paramètres globaux",
        SubTitle:
          "Cette discussion utilise-t-elle les paramètres du modèle globaux ?",
        Confirm:
          "Les paramètres personnalisés de cette discussion seront automatiquement remplacés. Confirmer l'activation des paramètres globaux ?",
      },
      HideContext: {
        Title: "Masquer les discussions prédéfinies",
        SubTitle:
          "Les discussions prédéfinies ne seront pas affichées dans l'interface de discussion après masquage",
      },
      Share: {
        Title: "Partager ce masque",
        SubTitle: "Générer un lien direct pour ce masque",
        Action: "Copier le lien",
      },
    
      "Artifacts": {
        "Title": "Activer les Artifacts",
        "SubTitle": "Afficher des pages HTML avec les Artifacts",
      },
      "CodeFold": {
        "Title": "Activer le repli du code",
        "SubTitle": "Replier automatiquement les longs blocs de code",
      },
    },
  },
  NewChat: {
    Return: "Retour",
    Skip: "Commencer directement",
    NotShow: "Ne plus afficher",
    ConfirmNoShow:
      "Confirmer la désactivation ? Vous pourrez réactiver cette option à tout moment dans les paramètres.",
    Title: "Choisir un masque",
    SubTitle: "Commencez maintenant, rencontrez les pensées derrière le masque",
    More: "Voir tout",
  },

  URLCommand: {
    Code: "Code d'accès détecté dans le lien, souhaitez-vous le remplir automatiquement ?",
    Settings:
      "Paramètres prédéfinis détectés dans le lien, souhaitez-vous les remplir automatiquement ?",
  },

  UI: {
    Confirm: "Confirmer",
    Cancel: "Annuler",
    Close: "Fermer",
    Create: "Créer",
    Edit: "Modifier",
    Export: "Exporter",
    Import: "Importer",
    Sync: "Synchroniser",
    Config: "Configurer",
  
    "Save": "Enregistrer",
    "Loading": "Chargement…",
    "Seed": "Graine aléatoire",
    "User": "Utilisateur",
    "Assistant": "Assistant",
    "System": "Système",
    "Text": "Texte",
    "Image": "Image",
    "Standard": "Standard",
    "Vivid": "Vif",
    "Natural": "Naturel",
    "ErrorTitle": "Une erreur est survenue",
    "ReportError": "Signaler cette erreur",
    "ClearData": "Effacer toutes les données",
    "AssistantTagline": "Créez votre propre assistant IA.",
    "EmptyPrompt": "Nouvelle invite",
    "EmptyPromptContent": "Saisissez le contenu de l’invite",
    "AllFiles": "Tous les fichiers",
  
    "Refresh": "Recharger",
    "HidePassword": "Masquer le mot de passe",
  },
  Exporter: {
    Description: {
      Title:
        "Seuls les messages après avoir effacé le contexte seront affichés",
    },
    Model: "Modèle",
    Messages: "Messages",
    Topic: "Sujet",
    Time: "Temps",
  },

  "Discovery": {
    "Name": "Découvrir",
  },
  "Mcp": {
    "Name": "MCP",
    "UI": {
      "Market": "Catalogue MCP",
      "PresetLoadFailed": "Échec du chargement des serveurs prédéfinis",
      "InitFailed": "Échec du chargement de l’état initial",
      "ConfigSaved": "Configuration du serveur enregistrée",
      "ConfigSaveFailed": "Échec de l’enregistrement de la configuration",
      "ToolsFailed": "Échec du chargement des outils",
      "Stopped": "Arrêté",
      "StopFailed": "Échec de l’arrêt du serveur",
      "StartFailed": "Échec du démarrage ; consultez les journaux",
      "RestartingClients": "Redémarrage de tous les clients",
      "RestartFailed": "Échec du redémarrage des clients",
      "Initializing": "Initialisation",
      "NoServers": "Aucun serveur disponible",
      "OpenRepo": "Ouvrir le dépôt",
      "Start": "Démarrer",
      "Tools": "Outils",
      "Add": "Ajouter",
      "RestartAll": "Tout redémarrer",
      "Search": "Rechercher des serveurs MCP",
      "ConfigureServer": "Configurer le serveur",
      "ServerDetails": "Détails du serveur",
      "NoTools": "Aucun outil disponible",
      "LoadingPresets": "Chargement des serveurs prédéfinis…",
      "ConfiguredServers": "Serveurs configurés",
      "UpdatingConfig": "Mise à jour de la configuration…",
      "CreatingClient": "Création du client MCP…",
      "Stopping": "Arrêt du serveur…",
      "Starting": "Démarrage du serveur…",
      "RestartingServers": "Redémarrage de tous les serveurs…",
      "ExecutionFailed": "Échec de l’exécution MCP",
    },
  },
  "SdPanel": {
    "Prompt": "Description de l’image",
    "NegativePrompt": "Description négative",
    "PleaseInput": (name: string) => name + " — Saisir une valeur",
    "AspectRatio": "Rapport d’aspect",
    "ImageStyle": "Style d’image",
    "OutFormat": "Format de sortie",
    "AIModel": "Modèle",
    "ModelVersion": "Version du modèle",
    "Submit": "Générer",
    "ParamIsRequired": (name: string) => name + ": Obligatoire",
    "Styles": {
      "D3Model": "Modèle 3D",
      "AnalogFilm": "Pellicule argentique",
      "Anime": "Animation japonaise",
      "Cinematic": "Cinématographique",
      "ComicBook": "Bande dessinée",
      "DigitalArt": "Art numérique",
      "Enhance": "Amélioré",
      "FantasyArt": "Art fantastique",
      "Isometric": "Isométrique",
      "LineArt": "Dessin au trait",
      "LowPoly": "Faible nombre de polygones",
      "ModelingCompound": "Pâte à modeler",
      "NeonPunk": "Punk néon",
      "Origami": "Pliage papier",
      "Photographic": "Photographique",
      "PixelArt": "Art pixel",
      "TileTexture": "Texture répétée",
    },
  },
  "Sd": {
    "SubTitle": (count: number) => "Images: " + count,
    "Actions": {
      "Params": "Voir les paramètres",
      "Copy": "Copier: Description de l’image",
      "Delete": "Supprimer",
      "Retry": "Réessayer",
      "ReturnHome": "Retour à l’accueil",
      "History": "Historique",
    },
    "EmptyRecord": "Aucune image pour le moment",
    "Status": {
      "Name": "État",
      "Success": "Réussite",
      "Error": "Erreur",
      "Wait": "En attente",
      "Running": "En cours",
    },
    "Danger": {
      "Delete": "Confirmer la suppression ?",
    },
    "GenerateParams": "Paramètres de génération",
    "Detail": "Détails",
  },
  "ApiError": {
    "Timeout": "Délai dépassé. Réessayez ou vérifiez l’interface dans les paramètres avancés.",
    "Quota": "Quota du fournisseur insuffisant. Vérifiez le solde, la facturation et les limites.",
    "AccessCode": "Code d’accès au site non valide. Vérifiez votre code.",
    "InvalidKey": "API Key non valide ou expirée. Vérifiez le Key du fournisseur choisi.",
    "Permission": "Accès refusé. Vérifiez les autorisations du modèle et les restrictions régionales.",
    "Model": "Modèle ou interface introuvable. Vérifiez l’ID du modèle et l’adresse dans les paramètres avancés.",
    "RateLimit": "Trop de requêtes ou limite atteinte. Réessayez plus tard et vérifiez le quota.",
    "Parameters": "Paramètres incompatibles. Vérifiez l’ID du modèle et les paramètres avancés.",
    "Unavailable": "Fournisseur temporairement indisponible. Réessayez plus tard.",
    "Empty": "Aucun contenu valide reçu. Vérifiez la disponibilité du modèle et réessayez.",
    "Network": "Échec de connexion réseau. Vérifiez le réseau, l’interface et les réglages CORS du tiers.",
    "Generic": "Échec de la requête. Vérifiez l’API Key, le modèle et l’interface du fournisseur.",
  },
};

export default fr;
