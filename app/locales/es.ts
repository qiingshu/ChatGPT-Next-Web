import { SubmitKey } from "../store/config";
import type { LocaleType } from "./index";
import { getClientConfig } from "../config/client";
import { SAAS_CHAT_UTM_URL } from "@/app/constant";
const isApp = !!getClientConfig()?.isApp;

const es: LocaleType = {
  WIP: "En construcción...",
  Error: {
    Unauthorized: isApp
      ? `😆 La conversación encontró algunos problemas, no te preocupes:
    \\ 1️⃣ Si deseas comenzar sin configuración, [haz clic aquí para empezar a chatear inmediatamente 🚀](${SAAS_CHAT_UTM_URL})
    \\ 2️⃣ Si deseas usar tus propios recursos de OpenAI, haz clic [aquí](/#/settings) para modificar la configuración ⚙️`
      : `😆 La conversación encontró algunos problemas, no te preocupes:
    \ 1️⃣ Si deseas comenzar sin configuración, [haz clic aquí para empezar a chatear inmediatamente 🚀](${SAAS_CHAT_UTM_URL})
    \ 2️⃣ Si estás utilizando una versión de implementación privada, haz clic [aquí](/#/auth) para ingresar la clave de acceso 🔑
    \ 3️⃣ Si deseas usar tus propios recursos de OpenAI, haz clic [aquí](/#/settings) para modificar la configuración ⚙️
 `,
  },
  Auth: {
    Title: "Se requiere contraseña",
    Tips: "El administrador ha habilitado la verificación de contraseña. Introduce el código de acceso a continuación",
    SubTips: "O ingresa tu clave API de OpenAI o Google",
    Input: "Introduce el código de acceso aquí",
    Confirm: "Confirmar",
    Later: "Más tarde",
    Return: "Regresar",
    SaasTips:
      "La configuración es demasiado complicada, quiero usarlo de inmediato",
    TopTips:
      "🥳 Oferta de lanzamiento de NextChat AI, desbloquea OpenAI o1, GPT-4o, Claude-3.5 y los últimos grandes modelos",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} conversaciones`,
  },
  Chat: {
    SubTitle: (count: number) => `Total de ${count} conversaciones`,
    EditMessage: {
      Title: "Editar registro de mensajes",
      Topic: {
        Title: "Tema de la conversación",
        SubTitle: "Cambiar el tema de la conversación actual",
      },
    },
    Actions: {
      ChatList: "Ver lista de mensajes",
      CompressedHistory: "Ver historial de Prompts comprimidos",
      Export: "Exportar historial de chat",
      Copy: "Copiar",
      Stop: "Detener",
      Retry: "Reintentar",
      Pin: "Fijar",
      PinToastContent:
        "Se ha fijado 1 conversación a los prompts predeterminados",
      PinToastAction: "Ver",
      Delete: "Eliminar",
      Edit: "Editar",
      RefreshTitle: "Actualizar título",
      RefreshToast: "Se ha enviado la solicitud de actualización del título",
    
      "FullScreen": "Pantalla completa",
      "Speech": "Leer",
      "StopSpeech": "Detener",
    },
    Commands: {
      new: "Nueva conversación",
      newm: "Nueva conversación desde la máscara",
      next: "Siguiente conversación",
      prev: "Conversación anterior",
      clear: "Limpiar contexto",
      del: "Eliminar conversación",
    
      "fork": "Copiar conversación",
    },
    InputActions: {
      Stop: "Detener respuesta",
      ToBottom: "Ir al más reciente",
      Theme: {
        auto: "Tema automático",
        light: "Modo claro",
        dark: "Modo oscuro",
      },
      Prompt: "Comandos rápidos",
      Masks: "Todas las máscaras",
      Clear: "Limpiar chat",
      Settings: "Configuración de conversación",
      UploadImage: "Subir imagen",
    },
    Rename: "Renombrar conversación",
    Typing: "Escribiendo…",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} para enviar`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += "，Shift + Enter para nueva línea";
      }
      return (
        inputHints + "，/ para activar autocompletado，: para activar comandos"
      );
    },
    Send: "Enviar",
    Config: {
      Reset: "Borrar memoria",
      SaveAs: "Guardar como máscara",
    },
    IsContext: "Prompt predeterminado",
  
    "StartSpeak": "Empezar a hablar",
    "StopSpeak": "Detener",
    "ShortcutKey": {
      "Title": "Atajos de teclado",
      "newChat": "Abrir conversación nueva",
      "focusInput": "Enfocar campo de entrada",
      "copyLastMessage": "Copiar última respuesta",
      "copyLastCode": "Copiar último bloque de código",
      "showShortcutKey": "Mostrar atajos",
      "clearContext": "Limpiar chat",
    },
  },
  Export: {
    Title: "Compartir historial de chat",
    Copy: "Copiar todo",
    Download: "Descargar archivo",
    Share: "Compartir en ShareGPT",
    MessageFromYou: "Usuario",
    MessageFromChatGPT: "ChatGPT",
    Format: {
      Title: "Formato de exportación",
      SubTitle: "Puedes exportar como texto Markdown o imagen PNG",
    },
    IncludeContext: {
      Title: "Incluir contexto de máscara",
      SubTitle: "Mostrar contexto de máscara en los mensajes",
    },
    Steps: {
      Select: "Seleccionar",
      Preview: "Vista previa",
    },
    Image: {
      Toast: "Generando captura de pantalla",
      Modal: "Mantén presionado o haz clic derecho para guardar la imagen",
    },
  
    "Artifacts": {
      "Title": "Compartir Artifacts",
      "Error": "Compartir Artifacts — Error",
    },
  },
  Select: {
    Search: "Buscar mensajes",
    All: "Seleccionar todo",
    Latest: "Últimos mensajes",
    Clear: "Limpiar selección",
  },
  Memory: {
    Title: "Resumen histórico",
    EmptyContent:
      "El contenido de la conversación es demasiado corto para resumir",
    Send: "Comprimir automáticamente el historial de chat y enviarlo como contexto",
    Copy: "Copiar resumen",
    Reset: "[no usado]",
    ResetConfirm: "¿Confirmar para borrar el resumen histórico?",
  },
  Home: {
    NewChat: "Nueva conversación",
    DeleteChat: "¿Confirmar la eliminación de la conversación seleccionada?",
    DeleteToast: "Conversación eliminada",
    Revert: "Deshacer",
  },
  Settings: {
    Title: "Configuración",
    SubTitle: "Todas las opciones de configuración",

    Danger: {
      Reset: {
        Title: "Restablecer todas las configuraciones",
        SubTitle:
          "Restablecer todas las configuraciones a los valores predeterminados",
        Action: "Restablecer ahora",
        Confirm: "¿Confirmar el restablecimiento de todas las configuraciones?",
      },
      Clear: {
        Title: "Eliminar todos los datos",
        SubTitle: "Eliminar todos los chats y datos de configuración",
        Action: "Eliminar ahora",
        Confirm:
          "¿Confirmar la eliminación de todos los chats y datos de configuración?",
      },
    },
    Lang: {
      Name: "Idioma", // ATENCIÓN: si deseas agregar una nueva traducción, por favor no traduzcas este valor, déjalo como `Language`
      All: "Todos los idiomas",
    },
    Avatar: "Avatar",
    FontSize: {
      Title: "Tamaño de fuente",
      SubTitle: "Tamaño de la fuente del contenido del chat",
    },
    FontFamily: {
      Title: "Fuente del Chat",
      SubTitle:
        "Fuente del contenido del chat, dejar vacío para aplicar la fuente predeterminada global",
      Placeholder: "Nombre de la Fuente",
    },
    InjectSystemPrompts: {
      Title: "Inyectar mensajes del sistema",
      SubTitle:
        "Forzar la adición de un mensaje del sistema simulado de ChatGPT al principio de cada lista de mensajes",
    },
    InputTemplate: {
      Title: "Preprocesamiento de entrada del usuario",
      SubTitle: "El último mensaje del usuario se rellenará en esta plantilla",
    },

    Update: {
      Version: (x: string) => `Versión actual: ${x}`,
      IsLatest: "Ya estás en la última versión",
      CheckUpdate: "Buscar actualizaciones",
      IsChecking: "Buscando actualizaciones...",
      FoundUpdate: (x: string) => `Nueva versión encontrada: ${x}`,
      GoToUpdate: "Ir a actualizar",
    
      "Success": "Actualización correcta",
      "Failed": "Error al actualizar",
    },
    SendKey: "Tecla de enviar",
    Theme: "Tema",
    TightBorder: "Modo sin borde",
    SendPreviewBubble: {
      Title: "Vista previa del globo",
      SubTitle:
        "Previsualiza el contenido Markdown en un globo de vista previa",
    },
    AutoGenerateTitle: {
      Title: "Generar título automáticamente",
      SubTitle: "Generar un título adecuado basado en el contenido del chat",
    },
    Sync: {
      CloudState: "Datos en la nube",
      NotSyncYet: "Aún no se ha sincronizado",
      Success: "Sincronización exitosa",
      Fail: "Sincronización fallida",

      Config: {
        Modal: {
          Title: "Configurar sincronización en la nube",
          Check: "Verificar disponibilidad",
        },
        SyncType: {
          Title: "Tipo de sincronización",
          SubTitle: "Selecciona el servidor de sincronización preferido",
        },
        Proxy: {
          Title: "Habilitar proxy",
          SubTitle:
            "Debes habilitar el proxy para sincronizar en el navegador y evitar restricciones de CORS",
        },
        ProxyUrl: {
          Title: "Dirección del proxy",
          SubTitle: "Solo para el proxy CORS incluido en este proyecto",
        },

        WebDav: {
          Endpoint: "Dirección WebDAV",
          UserName: "Nombre de usuario",
          Password: "Contraseña",
        },

        UpStash: {
          Endpoint: "URL de REST de UpStash Redis",
          UserName: "Nombre de respaldo",
          Password: "Token de REST de UpStash Redis",
        },
      },

      LocalState: "Datos locales",
      Overview: (overview: any) => {
        return `${overview.chat} conversaciones, ${overview.message} mensajes, ${overview.prompt} prompts, ${overview.mask} máscaras`;
      },
      ImportFailed: "Importación fallida",
    },
    Mask: {
      Splash: {
        Title: "Pantalla de inicio de máscara",
        SubTitle:
          "Mostrar la pantalla de inicio de la máscara al iniciar un nuevo chat",
      },
      Builtin: {
        Title: "Ocultar máscaras integradas",
        SubTitle:
          "Ocultar las máscaras integradas en todas las listas de máscaras",
      },
    },
    Prompt: {
      Disable: {
        Title: "Deshabilitar autocompletado de prompts",
        SubTitle:
          "Escribe / al principio del campo de entrada para activar el autocompletado",
      },
      List: "Lista de prompts personalizados",
      ListCount: (builtin: number, custom: number) =>
        `Integrados ${builtin}, definidos por el usuario ${custom}`,
      Edit: "Editar",
      Modal: {
        Title: "Lista de prompts",
        Add: "Nuevo",
        Search: "Buscar prompts",
      },
      EditModal: {
        Title: "Editar prompt",
      },
    },
    HistoryCount: {
      Title: "Número de mensajes históricos adjuntos",
      SubTitle: "Número de mensajes históricos enviados con cada solicitud",
    },
    CompressThreshold: {
      Title: "Umbral de compresión de mensajes históricos",
      SubTitle:
        "Cuando los mensajes históricos no comprimidos superan este valor, se realizará la compresión",
    },

    Usage: {
      Title: "Consulta de saldo",
      SubTitle(used: any, total: any) {
        return `Saldo usado este mes: $${used}, total suscrito: $${total}`;
      },
      IsChecking: "Verificando…",
      Check: "Revisar de nuevo",
      NoAccess:
        "Introduce la clave API o la contraseña de acceso para ver el saldo",
    },

    Access: {
      SaasStart: {
        Title: "Usar NextChat AI",
        Label: "(The most cost-effective solution)",
        SubTitle:
          "Officially maintained by NextChat, zero configuration ready to use, supports the latest large models like OpenAI o1, GPT-4o, and Claude-3.5",
        ChatNow: "Chat Now",
      },

      AccessCode: {
        Title: "Contraseña de acceso",
        SubTitle: "El administrador ha habilitado el acceso encriptado",
        Placeholder: "Introduce la contraseña de acceso",
      },
      CustomEndpoint: {
        Title: "Interfaz personalizada",
        SubTitle: "¿Usar servicios personalizados de Azure u OpenAI?",
      },
      Provider: {
        Title: "Proveedor de modelos",
        SubTitle: "Cambiar entre diferentes proveedores",
      },
      OpenAI: {
        ApiKey: {
          Title: "OpenAI API Key",
          SubTitle:
            "Usa una clave API de OpenAI personalizada para omitir la restricción de acceso por contraseña",
          Placeholder: "Clave API de OpenAI",
        },

        Endpoint: {
          Title: "Dirección del endpoint",
          SubTitle:
            "Debe incluir http(s):// además de la dirección predeterminada",
        },
      },
      Azure: {
        ApiKey: {
          Title: "Azure API Key",
          SubTitle:
            "Usa una clave de Azure personalizada para omitir la restricción de acceso por contraseña",
          Placeholder: "Clave API de Azure",
        },

        Endpoint: {
          Title: "Dirección del endpoint",
          SubTitle: "Ejemplo:",
        },

        ApiVerion: {
          Title: "Versión de la interfaz (versión de api de azure)",
          SubTitle: "Selecciona una versión específica",
        },
      },
      Anthropic: {
        ApiKey: {
          Title: "Anthropic API Key",
          SubTitle:
            "Usa una clave de Anthropic personalizada para omitir la restricción de acceso por contraseña",
          Placeholder: "Clave API de Anthropic",
        },

        Endpoint: {
          Title: "Dirección del endpoint",
          SubTitle: "Ejemplo:",
        },

        ApiVerion: {
          Title: "Versión de la interfaz (versión de claude api)",
          SubTitle: "Selecciona una versión específica de la API",
        },
      },
      Google: {
        ApiKey: {
          Title: "Google API Key",
          SubTitle: "Obtén tu clave API de Google AI",
          Placeholder: "Introduce tu clave API de Google AI Studio",
        },

        Endpoint: {
          Title: "Dirección del endpoint",
          SubTitle: "Ejemplo:",
        },

        ApiVersion: {
          Title: "Versión de la API (solo para gemini-pro)",
          SubTitle: "Selecciona una versión específica de la API",
        },
        GoogleSafetySettings: {
          Title: "Nivel de filtrado de seguridad de Google",
          SubTitle: "Configura el nivel de filtrado de contenido",
        },
      },
      Baidu: {
        ApiKey: {
          Title: "Baidu API Key",
          SubTitle: "Usa una clave API de Baidu personalizada",
          Placeholder: "Clave API de Baidu",
        },
        SecretKey: {
          Title: "Clave secreta",
          SubTitle: "Usa una clave secreta de Baidu personalizada",
          Placeholder: "Clave secreta de Baidu",
        },
        Endpoint: {
          Title: "Dirección del endpoint",
          SubTitle:
            "No admite personalización, dirígete a .env para configurarlo",
        },
      },
      ByteDance: {
        ApiKey: {
          Title: "ByteDance API Key",
          SubTitle: "Usa una clave API de ByteDance personalizada",
          Placeholder: "Clave API de ByteDance",
        },
        Endpoint: {
          Title: "Dirección del endpoint",
          SubTitle: "Ejemplo:",
        },
      },
      Alibaba: {
        ApiKey: {
          Title: "Alibaba API Key",
          SubTitle: "Usa una clave API de Alibaba Cloud personalizada",
          Placeholder: "Clave API de Alibaba Cloud",
        },
        Endpoint: {
          Title: "Dirección del endpoint",
          SubTitle: "Ejemplo:",
        },
      },
      CustomModel: {
        Title: "Nombre del modelo personalizado",
        SubTitle:
          "Agrega opciones de modelos personalizados, separados por comas",
      },
    
      "Tencent": {
        "ApiKey": {
          "Title": "Tencent API Key",
          "SubTitle": "Usar una API Key personalizada",
          "Placeholder": "Tencent API Key",
        },
        "SecretKey": {
          "Title": "Tencent Secret Key",
          "SubTitle": "Usar credenciales personalizadas — Secret Key",
          "Placeholder": "Tencent Secret Key",
        },
        "Endpoint": {
          "Title": "Dirección de la interfaz",
          "SubTitle": "Configurar este valor en .env",
        },
      },
      "Moonshot": {
        "ApiKey": {
          "Title": "Moonshot API Key",
          "SubTitle": "Usar una API Key personalizada",
          "Placeholder": "Moonshot API Key",
        },
        "Endpoint": {
          "Title": "Dirección de la interfaz",
          "SubTitle": "Ejemplo: ",
        },
      },
      "DeepSeek": {
        "ApiKey": {
          "Title": "DeepSeek API Key",
          "SubTitle": "Usar una API Key personalizada",
          "Placeholder": "DeepSeek API Key",
        },
        "Endpoint": {
          "Title": "Dirección de la interfaz",
          "SubTitle": "Ejemplo: ",
        },
      },
      "XAI": {
        "ApiKey": {
          "Title": "XAI API Key",
          "SubTitle": "Usar una API Key personalizada",
          "Placeholder": "XAI API Key",
        },
        "Endpoint": {
          "Title": "Dirección de la interfaz",
          "SubTitle": "Ejemplo: ",
        },
      },
      "ChatGLM": {
        "ApiKey": {
          "Title": "ChatGLM API Key",
          "SubTitle": "Usar una API Key personalizada",
          "Placeholder": "ChatGLM API Key",
        },
        "Endpoint": {
          "Title": "Dirección de la interfaz",
          "SubTitle": "Ejemplo: ",
        },
      },
      "SiliconFlow": {
        "ApiKey": {
          "Title": "SiliconFlow API Key",
          "SubTitle": "Usar una API Key personalizada",
          "Placeholder": "SiliconFlow API Key",
        },
        "Endpoint": {
          "Title": "Dirección de la interfaz",
          "SubTitle": "Ejemplo: ",
        },
      },
      "Stability": {
        "ApiKey": {
          "Title": "Stability API Key",
          "SubTitle": "Usar una API Key personalizada",
          "Placeholder": "Stability API Key",
        },
        "Endpoint": {
          "Title": "Dirección de la interfaz",
          "SubTitle": "Ejemplo: ",
        },
      },
      "Iflytek": {
        "ApiKey": {
          "Title": "Iflytek API Key",
          "SubTitle": "Usar una API Key personalizada",
          "Placeholder": "Iflytek API Key",
        },
        "ApiSecret": {
          "Title": "Iflytek API Secret",
          "SubTitle": "Usar credenciales personalizadas — API Secret",
          "Placeholder": "Iflytek API Secret",
        },
        "Endpoint": {
          "Title": "Dirección de la interfaz",
          "SubTitle": "Ejemplo: ",
        },
      },
    },

    Model: "Modelo (model)",
    CompressModel: {
      Title: "Modelo de compresión",
      SubTitle: "Modelo utilizado para comprimir el historial",
    },
    Temperature: {
      Title: "Aleatoriedad (temperature)",
      SubTitle: "Cuanto mayor sea el valor, más aleatorio será el resultado",
    },
    TopP: {
      Title: "Muestreo por núcleo (top_p)",
      SubTitle: "Similar a la aleatoriedad, pero no cambies ambos a la vez",
    },
    MaxTokens: {
      Title: "Límite de tokens por respuesta (max_tokens)",
      SubTitle: "Número máximo de tokens utilizados en una sola interacción",
    },
    PresencePenalty: {
      Title: "Novedad de temas (presence_penalty)",
      SubTitle:
        "Cuanto mayor sea el valor, más probable es que se amplíen a nuevos temas",
    },
    FrequencyPenalty: {
      Title: "Penalización de frecuencia (frequency_penalty)",
      SubTitle:
        "Cuanto mayor sea el valor, más probable es que se reduzcan las palabras repetidas",
    },
  
    "ShowPassword": "Mostrar contraseña",
    "LocalizationInfo": {
      "Edition": "NextChat – edición personalizada",
      "Timeout": "La conexión superó los 30 segundos. Comprueba la red y la dirección de la API.",
      "Success": "Conexión correcta",
      "NoResponse": "El proveedor no devolvió una respuesta válida. Comprueba el modelo y la interfaz.",
      "Upstream": "Versión base del proyecto original",
      "Details": "Información detallada de versión",
      "Security": "Identificador de mantenimiento de seguridad",
      "Commit": "Commit de compilación",
      "Official": "Versión oficial de referencia",
      "Unavailable": "No disponible",
      "Note": "Incluye correcciones seleccionadas, no la versión oficial v2.16.1 completa. La versión oficial se muestra solo como referencia.",
    },
    "ProviderSetup": {
      "ModelIdPlaceholder": "ID del modelo@proveedor",
      "Provider": "Proveedor",
      "ProviderHelp": "Elige un proveedor e introduce su API Key para usar el modelo predeterminado",
      "ProviderKeyPlaceholder": "Introduce la API Key de este proveedor",
      "CurrentModel": "Modelo de conversación actual",
      "DefaultModel": "Modelo predeterminado",
      "ModelHelp": "Ajusta la interfaz y los modelos personalizados en los ajustes avanzados",
      "TestModel": "Probar el modelo actual",
      "TestHelp": "Envía una solicitud breve que puede generar costes de API; no guarda el historial",
      "TestConnection": "Probar conexión",
      "Testing": "Probando…",
      "Advanced": "Ajustes avanzados",
      "OfficialURL": "Dirección oficial",
      "DefaultRoute": "Usa por defecto la ruta de este sitio",
    },
    "TTS": {
      "Enable": {
        "Title": "Activar TTS",
        "SubTitle": "Activar síntesis de voz",
      },
      "Autoplay": {
        "Title": "Activar reproducción automática",
        "SubTitle": "Genera y reproduce voz automáticamente; activa TTS primero",
      },
      "Model": "Modelo (model)",
      "Engine": "Motor TTS",
      "Voice": {
        "Title": "Voz",
        "SubTitle": "Voz usada para generar el audio",
      },
      "Speed": {
        "Title": "Velocidad",
        "SubTitle": "Velocidad del audio generado",
      },
    },
    "Realtime": {
      "Enable": {
        "Title": "Conversación en tiempo real",
        "SubTitle": "Activar conversación en tiempo real",
      },
      "Provider": {
        "Title": "Proveedor del modelo",
        "SubTitle": "Cambiar de proveedor",
      },
      "Model": {
        "Title": "Modelo (model)",
        "SubTitle": "Seleccionar modelo",
      },
      "ApiKey": {
        "Title": "API Key",
        "SubTitle": "API Key",
        "Placeholder": "API Key",
      },
      "Azure": {
        "Endpoint": {
          "Title": "Dirección de la interfaz",
          "SubTitle": "Dirección de la interfaz",
        },
        "Deployment": {
          "Title": "Nombre de implementación",
          "SubTitle": "Nombre de implementación",
        },
      },
      "Temperature": {
        "Title": "Aleatoriedad (temperature)",
        "SubTitle": "Cuanto mayor sea el valor, más aleatorio será el resultado",
      },
    },
    "SafetyLabels": {
      "BLOCK_NONE": "Ninguno",
      "BLOCK_ONLY_HIGH": "Solo alto",
      "BLOCK_MEDIUM_AND_ABOVE": "Medio o superior",
      "BLOCK_LOW_AND_ABOVE": "Bajo o superior",
    },
  },
  Store: {
    DefaultTopic: "Nuevo chat",
    BotHello: "¿En qué puedo ayudarte?",
    Error: "Hubo un error, inténtalo de nuevo más tarde",
    Prompt: {
      History: (content: string) =>
        "Este es un resumen del chat histórico como referencia: " + content,
      Topic:
        "Devuelve un tema breve de esta frase en cuatro a cinco palabras, sin explicación, sin puntuación, sin muletillas, sin texto adicional, sin negritas. Si no hay tema, devuelve 'charlas casuales'",
      Summarize:
        "Resume brevemente el contenido de la conversación para usar como un prompt de contexto, manteniéndolo dentro de 200 palabras",
    },
  },
  Copy: {
    Success: "Copiado al portapapeles",
    Failed: "Error al copiar, por favor otorga permisos al portapapeles",
  },
  Download: {
    Success: "Contenido descargado en tu directorio.",
    Failed: "Error al descargar.",
  },
  Context: {
    Toast: (x: any) => `Contiene ${x} prompts predefinidos`,
    Edit: "Configuración del chat actual",
    Add: "Agregar una conversación",
    Clear: "Contexto borrado",
    Revert: "Restaurar contexto",
  },
  Plugin: {
    Name: "Complemento",
  
    "Accessibility": {
      "Create": "Crear: Complemento",
      "Edit": "Editar: Complemento",
      "Save": "Guardar: Complemento",
      "SchemaUrl": "Complemento Schema URL",
      "LoadSchema": "Cargar desde URL: Complemento Schema",
      "Schema": "Complemento Schema",
    },
    "Page": {
      "Title": "Complementos",
      "SubTitle": (count: number) => "Complementos: " + count,
      "Search": "Buscar mensajes — Complementos",
      "Create": "Crear",
      "Find": "Buscar complementos en GitHub: ",
    },
    "Item": {
      "Info": (count: number) => "Métodos: " + count,
      "View": "Ver",
      "Edit": "Editar",
      "Delete": "Eliminar",
      "DeleteConfirm": "¿Confirmar eliminación?",
    },
    "Auth": {
      "None": "Sin autenticación",
      "Basic": "Basic",
      "Bearer": "Bearer",
      "Custom": "Personalizado",
      "CustomHeader": "Nombre del parámetro",
      "Token": "Token",
      "Proxy": "Usar proxy",
      "ProxyDescription": "Usar un proxy para evitar restricciones CORS",
      "Location": "Ubicación",
      "LocationHeader": "Header",
      "LocationQuery": "Query",
      "LocationBody": "Body",
    },
    "EditModal": {
      "Title": (readonly: boolean) => "Editar: Complemento" + (readonly ? " (Solo lectura)" : ""),
      "Download": "Descargar",
      "Auth": "Tipo de autenticación",
      "Content": "OpenAPI Schema",
      "Load": "Cargar desde URL",
      "Method": "Métodos",
      "Error": "OpenAPI Schema no válido",
    },
  },
  FineTuned: {
    Sysmessage: "Eres un asistente",
  },
  SearchChat: {
    Name: "Buscar",
    Page: {
      Title: "Buscar en el historial de chat",
      Search: "Ingrese la palabra clave de búsqueda",
      NoResult: "No se encontraron resultados",
      NoData: "Sin datos",
      Loading: "Cargando",

      SubTitle: (count: number) => `Se encontraron ${count} resultados`,
    },
    Item: {
      View: "Ver",
    },
  },
  Mask: {
    Name: "Máscara",
    Page: {
      Title: "Máscaras de rol predefinidas",
      SubTitle: (count: number) => `${count} definiciones de rol predefinidas`,
      Search: "Buscar máscara de rol",
      Create: "Crear nuevo",
    },
    Item: {
      Info: (count: number) => `Contiene ${count} conversaciones predefinidas`,
      Chat: "Chat",
      View: "Ver",
      Edit: "Editar",
      Delete: "Eliminar",
      DeleteConfirm: "¿Confirmar eliminación?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Editar máscara predefinida ${readonly ? "（solo lectura）" : ""}`,
      Download: "Descargar predefinido",
      Clone: "Clonar predefinido",
    },
    Config: {
      Avatar: "Avatar del rol",
      Name: "Nombre del rol",
      Sync: {
        Title: "Usar configuración global",
        SubTitle:
          "¿Usar la configuración global del modelo para la conversación actual?",
        Confirm:
          "La configuración personalizada de la conversación actual se sobrescribirá automáticamente, ¿confirmar habilitar la configuración global?",
      },
      HideContext: {
        Title: "Ocultar conversaciones predefinidas",
        SubTitle:
          "Las conversaciones predefinidas ocultas no aparecerán en la interfaz de chat",
      },
      Share: {
        Title: "Compartir esta máscara",
        SubTitle: "Generar un enlace directo a esta máscara",
        Action: "Copiar enlace",
      },
    
      "Artifacts": {
        "Title": "Activar Artifacts",
        "SubTitle": "Mostrar páginas HTML con Artifacts",
      },
      "CodeFold": {
        "Title": "Activar plegado de código",
        "SubTitle": "Plegar automáticamente bloques de código largos",
      },
    },
  },
  NewChat: {
    Return: "Regresar",
    Skip: "Comenzar ahora",
    NotShow: "No mostrar más",
    ConfirmNoShow:
      "¿Confirmar desactivación? Puedes reactivar en la configuración en cualquier momento.",
    Title: "Selecciona una máscara",
    SubTitle: "Comienza ahora y colisiona con la mente detrás de la máscara",
    More: "Ver todo",
  },

  URLCommand: {
    Code: "Detectado un código de acceso en el enlace, ¿deseas autocompletarlo?",
    Settings:
      "Detectada configuración predefinida en el enlace, ¿deseas autocompletarla?",
  },

  UI: {
    Confirm: "Confirmar",
    Cancel: "Cancelar",
    Close: "Cerrar",
    Create: "Crear",
    Edit: "Editar",
    Export: "Exportar",
    Import: "Importar",
    Sync: "Sincronizar",
    Config: "Configurar",
  
    "Save": "Guardar",
    "Loading": "Cargando…",
    "Seed": "Semilla aleatoria",
    "User": "Usuario",
    "Assistant": "Asistente",
    "System": "Sistema",
    "Text": "Texto",
    "Image": "Imagen",
    "Standard": "Estándar",
    "Vivid": "Vívido",
    "Natural": "Natural",
    "ErrorTitle": "Se ha producido un error",
    "ReportError": "Informar de este error",
    "ClearData": "Borrar todos los datos",
    "AssistantTagline": "Crea tu propio asistente de IA.",
    "EmptyPrompt": "Nueva instrucción",
    "EmptyPromptContent": "Introduce el contenido de la instrucción",
    "AllFiles": "Todos los archivos",
  
    "Refresh": "Recargar",
    "HidePassword": "Ocultar contraseña",
  },
  Exporter: {
    Description: {
      Title: "Solo se mostrarán los mensajes después de borrar el contexto",
    },
    Model: "Modelo",
    Messages: "Mensajes",
    Topic: "Tema",
    Time: "Hora",
  },

  "Discovery": {
    "Name": "Descubrir",
  },
  "Mcp": {
    "Name": "MCP",
    "UI": {
      "Market": "Catálogo MCP",
      "PresetLoadFailed": "No se pudieron cargar los servidores predefinidos",
      "InitFailed": "No se pudo cargar el estado inicial",
      "ConfigSaved": "Configuración del servidor guardada",
      "ConfigSaveFailed": "No se pudo guardar la configuración",
      "ToolsFailed": "No se pudieron cargar las herramientas",
      "Stopped": "Detenido",
      "StopFailed": "No se pudo detener el servidor",
      "StartFailed": "No se pudo iniciar; comprueba los registros",
      "RestartingClients": "Reiniciando todos los clientes",
      "RestartFailed": "Error al reiniciar los clientes",
      "Initializing": "Inicializando",
      "NoServers": "No hay servidores disponibles",
      "OpenRepo": "Abrir repositorio",
      "Start": "Iniciar",
      "Tools": "Herramientas",
      "Add": "Añadir",
      "RestartAll": "Reiniciar todos",
      "Search": "Buscar servidores MCP",
      "ConfigureServer": "Configurar servidor",
      "ServerDetails": "Detalles del servidor",
      "NoTools": "No hay herramientas disponibles",
      "LoadingPresets": "Cargando servidores predefinidos…",
      "ConfiguredServers": "Servidores configurados",
      "UpdatingConfig": "Actualizando configuración…",
      "CreatingClient": "Creando cliente MCP…",
      "Stopping": "Deteniendo servidor…",
      "Starting": "Iniciando servidor…",
      "RestartingServers": "Reiniciando todos los servidores…",
      "ExecutionFailed": "Error de ejecución MCP",
    },
  },
  "SdPanel": {
    "Prompt": "Descripción de imagen",
    "NegativePrompt": "Descripción negativa",
    "PleaseInput": (name: string) => name + " — Introducir un valor",
    "AspectRatio": "Relación de aspecto",
    "ImageStyle": "Estilo de imagen",
    "OutFormat": "Formato de salida",
    "AIModel": "Modelo (model)",
    "ModelVersion": "Versión del modelo",
    "Submit": "Generar",
    "ParamIsRequired": (name: string) => name + ": Obligatorio",
    "Styles": {
      "D3Model": "Modelo 3D",
      "AnalogFilm": "Película analógica",
      "Anime": "Animación japonesa",
      "Cinematic": "Cinematográfico",
      "ComicBook": "Cómic",
      "DigitalArt": "Arte digital",
      "Enhance": "Mejorado",
      "FantasyArt": "Arte fantástico",
      "Isometric": "Isométrico",
      "LineArt": "Dibujo lineal",
      "LowPoly": "Pocos polígonos",
      "ModelingCompound": "Plastilina",
      "NeonPunk": "Punk neón",
      "Origami": "Papiroflexia",
      "Photographic": "Fotográfico",
      "PixelArt": "Arte de píxeles",
      "TileTexture": "Textura de mosaico",
    },
  },
  "Sd": {
    "SubTitle": (count: number) => "Imágenes: " + count,
    "Actions": {
      "Params": "Ver parámetros",
      "Copy": "Copiar: Descripción de imagen",
      "Delete": "Eliminar",
      "Retry": "Reintentar",
      "ReturnHome": "Volver al inicio",
      "History": "Historial",
    },
    "EmptyRecord": "Aún no hay imágenes",
    "Status": {
      "Name": "Estado",
      "Success": "Correcto",
      "Error": "Error",
      "Wait": "En espera",
      "Running": "En ejecución",
    },
    "Danger": {
      "Delete": "¿Confirmar eliminación?",
    },
    "GenerateParams": "Parámetros de generación",
    "Detail": "Detalles",
  },
  "ApiError": {
    "Timeout": "Tiempo de espera agotado. Reintenta o comprueba la interfaz en los ajustes avanzados.",
    "Quota": "Cuota del proveedor insuficiente. Comprueba el saldo, la facturación y los límites.",
    "AccessCode": "Código de acceso al sitio no válido. Comprueba tu código.",
    "InvalidKey": "API Key no válida o caducada. Comprueba el Key del proveedor seleccionado.",
    "Permission": "Acceso denegado. Comprueba los permisos del modelo y las restricciones regionales.",
    "Model": "Modelo o interfaz no disponible. Comprueba el ID y la dirección en los ajustes avanzados.",
    "RateLimit": "Demasiadas solicitudes o límite alcanzado. Reintenta más tarde y comprueba la cuota.",
    "Parameters": "Parámetros incompatibles. Comprueba el ID del modelo y los ajustes avanzados.",
    "Unavailable": "Proveedor temporalmente no disponible. Reintenta más tarde.",
    "Empty": "No se recibió contenido válido. Comprueba el estado del modelo y reintenta.",
    "Network": "Error de conexión. Comprueba la red, la dirección y los ajustes CORS del tercero.",
    "Generic": "Solicitud fallida. Comprueba el API Key, el modelo y la interfaz del proveedor.",
  },
};

export default es;
