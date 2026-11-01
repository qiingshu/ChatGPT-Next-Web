import { SubmitKey } from "../store/config";
import { LocaleType } from "../locales/index";
import { getClientConfig } from "../config/client";
import { SAAS_CHAT_UTM_URL } from "@/app/constant";
const isApp = !!getClientConfig()?.isApp;

const pt: LocaleType = {
  WIP: "Em breve...",
  Error: {
    Unauthorized: isApp
      ? `😆 A conversa encontrou alguns problemas, não se preocupe:
   \\ 1️⃣ Se você quiser começar sem configuração, [clique aqui para começar a conversar imediatamente 🚀](${SAAS_CHAT_UTM_URL})
   \\ 2️⃣ Se você deseja usar seus próprios recursos OpenAI, clique [aqui](/#/settings) para modificar as configurações ⚙️`
      : `😆 A conversa encontrou alguns problemas, não se preocupe:
   \ 1️⃣ Se você quiser começar sem configuração, [clique aqui para começar a conversar imediatamente 🚀](${SAAS_CHAT_UTM_URL})
   \ 2️⃣ Se você estiver usando uma versão de implantação privada, clique [aqui](/#/auth) para inserir a chave de acesso 🔑
   \ 3️⃣ Se você deseja usar seus próprios recursos OpenAI, clique [aqui](/#/settings) para modificar as configurações ⚙️
`,
  },
  Auth: {
    Title: "Necessário Código de Acesso",
    Tips: "Por favor, insira o código de acesso abaixo",
    SubTips: "Ou insira sua Chave API OpenAI",
    Input: "código de acesso",
    Confirm: "Confirmar",
    Later: "Depois",
    Return: "Voltar",
    SaasTips: "A configuração é muito complicada, quero usá-la imediatamente",
    TopTips:
      "🥳 Oferta de Lançamento do NextChat AI, desbloqueie o OpenAI o1, GPT-4o, Claude-3.5 e os mais recentes grandes modelos agora",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} mensagens`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} mensagens`,
    EditMessage: {
      Title: "Editar Todas as Mensagens",
      Topic: {
        Title: "Tópico",
        SubTitle: "Mudar o tópico atual",
      },
    },
    Actions: {
      ChatList: "Ir Para Lista de Chat",
      CompressedHistory: "Prompt de Memória Histórica Comprimida",
      Export: "Exportar Todas as Mensagens como Markdown",
      Copy: "Copiar",
      Stop: "Parar",
      Retry: "Tentar Novamente",
      Pin: "Fixar",
      PinToastContent: "Fixada 1 mensagem para prompts contextuais",
      PinToastAction: "Visualizar",
      Delete: "Deletar",
      Edit: "Editar",
      RefreshTitle: "Atualizar Título",
      RefreshToast: "Solicitação de atualização de título enviada",
    
      "FullScreen": "Ecrã inteiro",
      "Speech": "Ler",
      "StopSpeech": "Parar",
    },
    Commands: {
      new: "Iniciar um novo chat",
      newm: "Iniciar um novo chat com máscara",
      next: "Próximo Chat",
      prev: "Chat Anterior",
      clear: "Limpar Contexto",
      del: "Deletar Chat",
    
      "fork": "Copiar conversa",
    },
    InputActions: {
      Stop: "Parar",
      ToBottom: "Para o Mais Recente",
      Theme: {
        auto: "Automático",
        light: "Tema Claro",
        dark: "Tema Escuro",
      },
      Prompt: "Prompts",
      Masks: "Máscaras",
      Clear: "Limpar Contexto",
      Settings: "Configurações",
    
      "UploadImage": "Imagens",
    },
    Rename: "Renomear Chat",
    Typing: "Digitando…",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} para enviar`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Shift + Enter para quebrar linha";
      }
      return inputHints + ", / para buscar prompts, : para usar comandos";
    },
    Send: "Enviar",
    Config: {
      Reset: "Redefinir para Padrão",
      SaveAs: "Salvar como Máscara",
    },
    IsContext: "Prompt Contextual",
  
    "StartSpeak": "Começar a falar",
    "StopSpeak": "Parar",
    "ShortcutKey": {
      "Title": "Atalhos de teclado",
      "newChat": "Abrir nova conversa",
      "focusInput": "Focar campo de entrada",
      "copyLastMessage": "Copiar última resposta",
      "copyLastCode": "Copiar último bloco de código",
      "showShortcutKey": "Mostrar atalhos",
      "clearContext": "Limpar Contexto",
    },
  },
  Export: {
    Title: "Exportar Mensagens",
    Copy: "Copiar Tudo",
    Download: "Baixar",
    MessageFromYou: "Mensagem De Você",
    MessageFromChatGPT: "Mensagem De ChatGPT",
    Share: "Compartilhar para ShareGPT",
    Format: {
      Title: "Formato de Exportação",
      SubTitle: "Markdown ou Imagem PNG",
    },
    IncludeContext: {
      Title: "Incluindo Contexto",
      SubTitle: "Exportar prompts de contexto na máscara ou não",
    },
    Steps: {
      Select: "Selecionar",
      Preview: "Pré-visualizar",
    },
    Image: {
      Toast: "Capturando Imagem...",
      Modal:
        "Pressione longamente ou clique com o botão direito para salvar a imagem",
    },
  
    "Artifacts": {
      "Title": "Partilhar Artifacts",
      "Error": "Partilhar Artifacts — Erro",
    },
  },
  Select: {
    Search: "Buscar",
    All: "Selecionar Tudo",
    Latest: "Selecionar Mais Recente",
    Clear: "Limpar",
  },
  Memory: {
    Title: "Prompt de Memória",
    EmptyContent: "Nada ainda.",
    Send: "Enviar Memória",
    Copy: "Copiar Memória",
    Reset: "Resetar Sessão",
    ResetConfirm:
      "Resetar irá limpar o histórico de conversa atual e a memória histórica. Você tem certeza que quer resetar?",
  },
  Home: {
    NewChat: "Novo Chat",
    DeleteChat: "Confirmar para deletar a conversa selecionada?",
    DeleteToast: "Chat Deletado",
    Revert: "Reverter",
  },
  Settings: {
    Title: "Configurações",
    SubTitle: "Todas as Configurações",
    Danger: {
      Reset: {
        Title: "Resetar Todas as Configurações",
        SubTitle: "Resetar todos os itens de configuração para o padrão",
        Action: "Resetar",
        Confirm: "Confirmar para resetar todas as configurações para o padrão?",
      },
      Clear: {
        Title: "Limpar Todos os Dados",
        SubTitle: "Limpar todas as mensagens e configurações",
        Action: "Limpar",
        Confirm: "Confirmar para limpar todas as mensagens e configurações?",
      },
    },
    Lang: {
      Name: "Idioma",
      All: "Todos os Idiomas",
    },
    Avatar: "Avatar",
    FontSize: {
      Title: "Tamanho da Fonte",
      SubTitle: "Ajustar o tamanho da fonte do conteúdo do chat",
    },
    FontFamily: {
      Title: "Fonte do Chat",
      SubTitle:
        "Fonte do conteúdo do chat, deixe vazio para aplicar a fonte padrão global",
      Placeholder: "Nome da Fonte",
    },
    InjectSystemPrompts: {
      Title: "Inserir Prompts de Sistema",
      SubTitle: "Inserir um prompt de sistema global para cada requisição",
    },
    InputTemplate: {
      Title: "Modelo de Entrada",
      SubTitle: "A mensagem mais recente será preenchida neste modelo",
    },

    Update: {
      Version: (x: string) => `Versão: ${x}`,
      IsLatest: "Última versão",
      CheckUpdate: "Verificar Atualização",
      IsChecking: "Verificando atualização...",
      FoundUpdate: (x: string) => `Nova versão encontrada: ${x}`,
      GoToUpdate: "Atualizar",
    
      "Success": "Atualização concluída",
      "Failed": "Falha na atualização",
    },
    SendKey: "Tecla de Envio",
    Theme: "Tema",
    TightBorder: "Borda Ajustada",
    SendPreviewBubble: {
      Title: "Bolha de Pré-visualização de Envio",
      SubTitle: "Pré-visualizar markdown na bolha",
    },
    AutoGenerateTitle: {
      Title: "Gerar Título Automaticamente",
      SubTitle: "Gerar um título adequado baseado no conteúdo da conversa",
    },
    Sync: {
      CloudState: "Última Atualização",
      NotSyncYet: "Ainda não sincronizado",
      Success: "Sincronização bem sucedida",
      Fail: "Falha na sincronização",

      Config: {
        Modal: {
          Title: "Configurar Sincronização",
          Check: "Verificar Conexão",
        },
        SyncType: {
          Title: "Tipo de Sincronização",
          SubTitle: "Escolha seu serviço de sincronização favorito",
        },
        Proxy: {
          Title: "Habilitar Proxy CORS",
          SubTitle: "Habilitar um proxy para evitar restrições de cross-origin",
        },
        ProxyUrl: {
          Title: "Endpoint de Proxy",
          SubTitle: "Apenas aplicável ao proxy CORS embutido para este projeto",
        },

        WebDav: {
          Endpoint: "Endpoint WebDAV",
          UserName: "Nome de Usuário",
          Password: "Senha",
        },

        UpStash: {
          Endpoint: "URL REST Redis UpStash",
          UserName: "Nome do Backup",
          Password: "Token REST Redis UpStash",
        },
      },

      LocalState: "Dados Locais",
      Overview: (overview: any) => {
        return `${overview.chat} chats，${overview.message} mensagens，${overview.prompt} prompts，${overview.mask} máscaras`;
      },
      ImportFailed: "Falha ao importar do arquivo",
    },
    Mask: {
      Splash: {
        Title: "Tela de Início da Máscara",
        SubTitle:
          "Mostrar uma tela de início da máscara antes de iniciar novo chat",
      },
      Builtin: {
        Title: "Esconder Máscaras Embutidas",
        SubTitle: "Esconder máscaras embutidas na lista de máscaras",
      },
    },
    Prompt: {
      Disable: {
        Title: "Desabilitar auto-completar",
        SubTitle: "Digite / para acionar auto-completar",
      },
      List: "Lista de Prompts",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} embutidos, ${custom} definidos pelo usuário`,
      Edit: "Editar",
      Modal: {
        Title: "Lista de Prompts",
        Add: "Adicionar Um",
        Search: "Buscar Prompts",
      },
      EditModal: {
        Title: "Editar Prompt",
      },
    },
    HistoryCount: {
      Title: "Contagem de Mensagens Anexadas",
      SubTitle: "Número de mensagens enviadas anexadas por requisição",
    },
    CompressThreshold: {
      Title: "Limite de Compressão de Histórico",
      SubTitle:
        "Irá comprimir se o comprimento das mensagens não comprimidas exceder o valor",
    },

    Usage: {
      Title: "Saldo da Conta",
      SubTitle(used: any, total: any) {
        return `Usado este mês ${used}, assinatura ${total}`;
      },
      IsChecking: "Verificando...",
      Check: "Verificar",
      NoAccess: "Insira a Chave API para verificar o saldo",
    },
    Access: {
      SaasStart: {
        Title: "Usar NextChat AI",
        Label: "(A solução mais econômica)",
        SubTitle:
          "Mantido oficialmente pelo NextChat, pronto para uso sem configuração, suporta os mais recentes grandes modelos como OpenAI o1, GPT-4o e Claude-3.5",
        ChatNow: "Conversar agora",
      },

      AccessCode: {
        Title: "Código de Acesso",
        SubTitle: "Controle de Acesso Habilitado",
        Placeholder: "Insira o Código",
      },
      CustomEndpoint: {
        Title: "Endpoint Personalizado",
        SubTitle: "Use serviço personalizado Azure ou OpenAI",
      },
      Provider: {
        Title: "Provedor do Modelo",
        SubTitle: "Selecione Azure ou OpenAI",
      },
      OpenAI: {
        ApiKey: {
          Title: "OpenAI API Key",
          SubTitle: "Usar Chave API OpenAI personalizada",
          Placeholder: "OpenAI API Key",
        },

        Endpoint: {
          Title: "Endpoint OpenAI",
          SubTitle:
            "Deve começar com http(s):// ou usar /api/openai como padrão",
        },
      },
      Azure: {
        ApiKey: {
          Title: "Azure API Key",
          SubTitle: "Verifique sua chave API do console Azure",
          Placeholder: "Chave API Azure",
        },

        Endpoint: {
          Title: "Endpoint Azure",
          SubTitle: "Exemplo: ",
        },

        ApiVerion: {
          Title: "Versão API Azure",
          SubTitle: "Verifique sua versão API do console Azure",
        },
      },
      Anthropic: {
        ApiKey: {
          Title: "Anthropic API Key",
          SubTitle: "Verifique sua chave API do console Anthropic",
          Placeholder: "Chave API Anthropic",
        },

        Endpoint: {
          Title: "Endereço da interface",
          SubTitle: "Exemplo: ",
        },

        ApiVerion: {
          Title: "Versão API (Versão api claude)",
          SubTitle: "Verifique sua versão API do console Anthropic",
        },
      },
      CustomModel: {
        Title: "Modelos Personalizados",
        SubTitle: "Opções de modelo personalizado, separados por vírgula",
      },
    
      "Google": {
        "ApiKey": {
          "Title": "Google API Key",
          "SubTitle": "Usar uma API Key personalizada",
          "Placeholder": "Google API Key",
        },
        "Endpoint": {
          "Title": "Endereço da interface",
          "SubTitle": "Exemplo: ",
        },
        "ApiVersion": {
          "Title": "Versão da API (gemini-pro)",
          "SubTitle": "Selecionar versão da API",
        },
        "GoogleSafetySettings": {
          "Title": "Definições de segurança Google",
          "SubTitle": "Selecionar nível de filtragem",
        },
      },
      "Baidu": {
        "ApiKey": {
          "Title": "Baidu API Key",
          "SubTitle": "Usar uma API Key personalizada",
          "Placeholder": "Baidu API Key",
        },
        "SecretKey": {
          "Title": "Baidu Secret Key",
          "SubTitle": "Usar credenciais personalizadas — Secret Key",
          "Placeholder": "Baidu Secret Key",
        },
        "Endpoint": {
          "Title": "Endereço da interface",
          "SubTitle": "Configurar este valor em .env",
        },
      },
      "Tencent": {
        "ApiKey": {
          "Title": "Tencent API Key",
          "SubTitle": "Usar uma API Key personalizada",
          "Placeholder": "Tencent API Key",
        },
        "SecretKey": {
          "Title": "Tencent Secret Key",
          "SubTitle": "Usar credenciais personalizadas — Secret Key",
          "Placeholder": "Tencent Secret Key",
        },
        "Endpoint": {
          "Title": "Endereço da interface",
          "SubTitle": "Configurar este valor em .env",
        },
      },
      "ByteDance": {
        "ApiKey": {
          "Title": "ByteDance API Key",
          "SubTitle": "Usar uma API Key personalizada",
          "Placeholder": "ByteDance API Key",
        },
        "Endpoint": {
          "Title": "Endereço da interface",
          "SubTitle": "Exemplo: ",
        },
      },
      "Alibaba": {
        "ApiKey": {
          "Title": "Alibaba API Key",
          "SubTitle": "Usar uma API Key personalizada",
          "Placeholder": "Alibaba API Key",
        },
        "Endpoint": {
          "Title": "Endereço da interface",
          "SubTitle": "Exemplo: ",
        },
      },
      "Moonshot": {
        "ApiKey": {
          "Title": "Moonshot API Key",
          "SubTitle": "Usar uma API Key personalizada",
          "Placeholder": "Moonshot API Key",
        },
        "Endpoint": {
          "Title": "Endereço da interface",
          "SubTitle": "Exemplo: ",
        },
      },
      "DeepSeek": {
        "ApiKey": {
          "Title": "DeepSeek API Key",
          "SubTitle": "Usar uma API Key personalizada",
          "Placeholder": "DeepSeek API Key",
        },
        "Endpoint": {
          "Title": "Endereço da interface",
          "SubTitle": "Exemplo: ",
        },
      },
      "XAI": {
        "ApiKey": {
          "Title": "XAI API Key",
          "SubTitle": "Usar uma API Key personalizada",
          "Placeholder": "XAI API Key",
        },
        "Endpoint": {
          "Title": "Endereço da interface",
          "SubTitle": "Exemplo: ",
        },
      },
      "ChatGLM": {
        "ApiKey": {
          "Title": "ChatGLM API Key",
          "SubTitle": "Usar uma API Key personalizada",
          "Placeholder": "ChatGLM API Key",
        },
        "Endpoint": {
          "Title": "Endereço da interface",
          "SubTitle": "Exemplo: ",
        },
      },
      "SiliconFlow": {
        "ApiKey": {
          "Title": "SiliconFlow API Key",
          "SubTitle": "Usar uma API Key personalizada",
          "Placeholder": "SiliconFlow API Key",
        },
        "Endpoint": {
          "Title": "Endereço da interface",
          "SubTitle": "Exemplo: ",
        },
      },
      "Stability": {
        "ApiKey": {
          "Title": "Stability API Key",
          "SubTitle": "Usar uma API Key personalizada",
          "Placeholder": "Stability API Key",
        },
        "Endpoint": {
          "Title": "Endereço da interface",
          "SubTitle": "Exemplo: ",
        },
      },
      "Iflytek": {
        "ApiKey": {
          "Title": "Iflytek API Key",
          "SubTitle": "Usar uma API Key personalizada",
          "Placeholder": "Iflytek API Key",
        },
        "ApiSecret": {
          "Title": "Iflytek API Secret",
          "SubTitle": "Usar credenciais personalizadas — API Secret",
          "Placeholder": "Iflytek API Secret",
        },
        "Endpoint": {
          "Title": "Endereço da interface",
          "SubTitle": "Exemplo: ",
        },
      },
    },

    Model: "Modelo",
    CompressModel: {
      Title: "Modelo de Compressão",
      SubTitle: "Modelo usado para comprimir o histórico",
    },
    Temperature: {
      Title: "Temperatura",
      SubTitle: "Um valor maior torna a saída mais aleatória",
    },
    TopP: {
      Title: "Top P",
      SubTitle: "Não altere este valor junto com a temperatura",
    },
    MaxTokens: {
      Title: "Máximo de Tokens",
      SubTitle: "Comprimento máximo de tokens de entrada e tokens gerados",
    },
    PresencePenalty: {
      Title: "Penalidade de Presença",
      SubTitle:
        "Um valor maior aumenta a probabilidade de falar sobre novos tópicos",
    },
    FrequencyPenalty: {
      Title: "Penalidade de Frequência",
      SubTitle:
        "Um valor maior diminui a probabilidade de repetir a mesma linha",
    },
  
    "ShowPassword": "Mostrar palavra-passe",
    "LocalizationInfo": {
      "Edition": "NextChat – edição personalizada",
      "Timeout": "A ligação excedeu os 30 segundos. Verifique a rede e o endereço da API.",
      "Success": "Ligação bem-sucedida",
      "NoResponse": "O fornecedor não devolveu uma resposta válida. Verifique o modelo e a interface.",
      "Upstream": "Versão base do projeto original",
      "Details": "Informação detalhada da versão",
      "Security": "Identificador de manutenção de segurança",
      "Commit": "Commit de compilação",
      "Official": "Versão oficial de referência",
      "Unavailable": "Indisponível",
      "Note": "Inclui correções selecionadas, não a versão oficial v2.16.1 completa. A versão oficial é apresentada apenas como referência.",
    },
    "ProviderSetup": {
      "ModelIdPlaceholder": "ID do modelo@fornecedor",
      "Provider": "Fornecedor",
      "ProviderHelp": "Escolha um fornecedor e introduza o respetivo API Key para usar o modelo predefinido",
      "ProviderKeyPlaceholder": "Introduza a API Key deste fornecedor",
      "CurrentModel": "Modelo da conversa atual",
      "DefaultModel": "Modelo predefinido",
      "ModelHelp": "Ajuste a interface e os modelos personalizados nas definições avançadas",
      "TestModel": "Testar modelo atual",
      "TestHelp": "Envia um pedido curto que pode gerar custos de API; não guarda o histórico",
      "TestConnection": "Testar ligação",
      "Testing": "A testar…",
      "Advanced": "Definições avançadas",
      "OfficialURL": "Endereço oficial",
      "DefaultRoute": "Usa por predefinição a rota deste site",
    },
    "TTS": {
      "Enable": {
        "Title": "Ativar TTS",
        "SubTitle": "Ativar síntese de voz",
      },
      "Autoplay": {
        "Title": "Ativar reprodução automática",
        "SubTitle": "Gerar e reproduzir voz automaticamente; ative TTS primeiro",
      },
      "Model": "Modelo",
      "Engine": "Motor TTS",
      "Voice": {
        "Title": "Voz",
        "SubTitle": "Voz usada no áudio gerado",
      },
      "Speed": {
        "Title": "Velocidade",
        "SubTitle": "Velocidade do áudio gerado",
      },
    },
    "Realtime": {
      "Enable": {
        "Title": "Conversa em tempo real",
        "SubTitle": "Ativar conversa em tempo real",
      },
      "Provider": {
        "Title": "Fornecedor do modelo",
        "SubTitle": "Mudar de fornecedor",
      },
      "Model": {
        "Title": "Modelo",
        "SubTitle": "Selecionar modelo",
      },
      "ApiKey": {
        "Title": "API Key",
        "SubTitle": "API Key",
        "Placeholder": "API Key",
      },
      "Azure": {
        "Endpoint": {
          "Title": "Endereço da interface",
          "SubTitle": "Endereço da interface",
        },
        "Deployment": {
          "Title": "Nome da implementação",
          "SubTitle": "Nome da implementação",
        },
      },
      "Temperature": {
        "Title": "Temperatura",
        "SubTitle": "Um valor maior torna a saída mais aleatória",
      },
    },
    "SafetyLabels": {
      "BLOCK_NONE": "Nenhum",
      "BLOCK_ONLY_HIGH": "Apenas alto",
      "BLOCK_MEDIUM_AND_ABOVE": "Médio ou superior",
      "BLOCK_LOW_AND_ABOVE": "Baixo ou superior",
    },
  },
  Store: {
    DefaultTopic: "Nova Conversa",
    BotHello: "Olá! Como posso ajudá-lo hoje?",
    Error: "Algo deu errado, por favor tente novamente mais tarde.",
    Prompt: {
      History: (content: string) =>
        "Este é um resumo do histórico de chat como um recapitulativo: " +
        content,
      Topic:
        "Por favor, gere um título de quatro a cinco palavras resumindo nossa conversa sem qualquer introdução, pontuação, aspas, períodos, símbolos ou texto adicional. Remova as aspas que o envolvem.",
      Summarize:
        "Resuma a discussão brevemente em 200 palavras ou menos para usar como um prompt para o contexto futuro.",
    },
  },
  Copy: {
    Success: "Copiado para a área de transferência",
    Failed:
      "Falha na cópia, por favor conceda permissão para acessar a área de transferência",
  },
  Download: {
    Success: "Conteúdo baixado para seu diretório.",
    Failed: "Falha no download.",
  },
  Context: {
    Toast: (x: any) => `Com ${x} prompts contextuais`,
    Edit: "Configurações do Chat Atual",
    Add: "Adicionar um Prompt",
    Clear: "Contexto Limpo",
    Revert: "Reverter",
  },
  Plugin: {
    Name: "Extensão",
  
    "Accessibility": {
      "Create": "Criar: Extensão",
      "Edit": "Editar: Extensão",
      "Save": "Guardar: Extensão",
      "SchemaUrl": "Extensão Schema URL",
      "LoadSchema": "Carregar de URL: Extensão Schema",
      "Schema": "Extensão Schema",
    },
    "Page": {
      "Title": "Extensões",
      "SubTitle": (count: number) => "Extensões: " + count,
      "Search": "Buscar — Extensões",
      "Create": "Criar",
      "Find": "Encontrar extensões no GitHub: ",
    },
    "Item": {
      "Info": (count: number) => "Métodos: " + count,
      "View": "Visualizar",
      "Edit": "Editar",
      "Delete": "Deletar",
      "DeleteConfirm": "Confirmar para deletar?",
    },
    "Auth": {
      "None": "Sem autenticação",
      "Basic": "Basic",
      "Bearer": "Bearer",
      "Custom": "Personalizado",
      "CustomHeader": "Nome do parâmetro",
      "Token": "Token",
      "Proxy": "Usar proxy",
      "ProxyDescription": "Usar um proxy para evitar restrições CORS",
      "Location": "Localização",
      "LocationHeader": "Header",
      "LocationQuery": "Query",
      "LocationBody": "Body",
    },
    "EditModal": {
      "Title": (readonly: boolean) => "Editar: Extensão" + (readonly ? " (Só de leitura)" : ""),
      "Download": "Descarregar",
      "Auth": "Tipo de autenticação",
      "Content": "OpenAPI Schema",
      "Load": "Carregar de URL",
      "Method": "Métodos",
      "Error": "OpenAPI Schema inválido",
    },
  },
  FineTuned: {
    Sysmessage: "Você é um assistente que",
  },
  SearchChat: {
    Name: "Pesquisar",
    Page: {
      Title: "Pesquisar histórico de chat",
      Search: "Digite palavras-chave para pesquisa",
      NoResult: "Nenhum resultado encontrado",
      NoData: "Sem dados",
      Loading: "Carregando",

      SubTitle: (count: number) => `Encontrado ${count} resultados`,
    },
    Item: {
      View: "Ver",
    },
  },
  Mask: {
    Name: "Máscara",
    Page: {
      Title: "Template de Prompt",
      SubTitle: (count: number) => `${count} templates de prompt`,
      Search: "Buscar Templates",
      Create: "Criar",
    },
    Item: {
      Info: (count: number) => `${count} prompts`,
      Chat: "Chat",
      View: "Visualizar",
      Edit: "Editar",
      Delete: "Deletar",
      DeleteConfirm: "Confirmar para deletar?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Editar Template de Prompt ${readonly ? "(somente leitura)" : ""}`,
      Download: "Baixar",
      Clone: "Clonar",
    },
    Config: {
      Avatar: "Avatar do Bot",
      Name: "Nome do Bot",
      Sync: {
        Title: "Usar Configuração Global",
        SubTitle: "Usar configuração global neste chat",
        Confirm:
          "Confirmar para substituir a configuração personalizada pela configuração global?",
      },
      HideContext: {
        Title: "Esconder Prompts de Contexto",
        SubTitle: "Não mostrar prompts de contexto no chat",
      },
      Share: {
        Title: "Compartilhar Esta Máscara",
        SubTitle: "Gerar um link para esta máscara",
        Action: "Copiar Link",
      },
    
      "Artifacts": {
        "Title": "Ativar Artifacts",
        "SubTitle": "Apresentar páginas HTML com Artifacts",
      },
      "CodeFold": {
        "Title": "Ativar recolha de código",
        "SubTitle": "Recolher automaticamente blocos de código longos",
      },
    },
  },
  NewChat: {
    Return: "Retornar",
    Skip: "Apenas Começar",
    Title: "Escolher uma Máscara",
    SubTitle: "Converse com a Alma por trás da Máscara",
    More: "Encontre Mais",
    NotShow: "Nunca Mostrar Novamente",
    ConfirmNoShow:
      "Confirmar para desabilitar？Você pode habilitar nas configurações depois.",
  },

  UI: {
    Confirm: "Confirmar",
    Cancel: "Cancelar",
    Close: "Fechar",
    Create: "Criar",
    Edit: "Editar",
    Export: "Exportar",
    Import: "Importar",
    Sync: "Sincronizar",
    Config: "Configurar",
  
    "Save": "Guardar",
    "Loading": "A carregar…",
    "Seed": "Semente aleatória",
    "User": "Utilizador",
    "Assistant": "Assistente",
    "System": "Sistema",
    "Text": "Texto",
    "Image": "Imagem",
    "Standard": "Padrão",
    "Vivid": "Vívido",
    "Natural": "Natural",
    "ErrorTitle": "Ocorreu um erro",
    "ReportError": "Comunicar este erro",
    "ClearData": "Limpar todos os dados",
    "AssistantTagline": "Crie o seu próprio assistente de IA.",
    "EmptyPrompt": "Nova instrução",
    "EmptyPromptContent": "Introduza o conteúdo da instrução",
    "AllFiles": "Todos os ficheiros",
  
    "Refresh": "Recarregar",
    "HidePassword": "Ocultar palavra-passe",
  },
  Exporter: {
    Description: {
      Title: "Apenas mensagens após a limpeza do contexto serão exibidas",
    },
    Model: "Modelo",
    Messages: "Mensagens",
    Topic: "Tópico",
    Time: "Tempo",
  },

  URLCommand: {
    Code: "Código de acesso detectado a partir da url, confirmar para aplicar? ",
    Settings:
      "Configurações detectadas a partir da url, confirmar para aplicar?",
  },

  "Discovery": {
    "Name": "Descobrir",
  },
  "Mcp": {
    "Name": "MCP",
    "UI": {
      "Market": "Catálogo MCP",
      "PresetLoadFailed": "Falha ao carregar os servidores predefinidos",
      "InitFailed": "Falha ao carregar o estado inicial",
      "ConfigSaved": "Configuração do servidor guardada",
      "ConfigSaveFailed": "Falha ao guardar a configuração",
      "ToolsFailed": "Falha ao carregar as ferramentas",
      "Stopped": "Parado",
      "StopFailed": "Falha ao parar o servidor",
      "StartFailed": "Falha ao iniciar; consulte os registos",
      "RestartingClients": "A reiniciar todos os clientes",
      "RestartFailed": "Falha ao reiniciar os clientes",
      "Initializing": "A inicializar",
      "NoServers": "Nenhum servidor disponível",
      "OpenRepo": "Abrir repositório",
      "Start": "Iniciar",
      "Tools": "Ferramentas",
      "Add": "Adicionar",
      "RestartAll": "Reiniciar todos",
      "Search": "Procurar servidores MCP",
      "ConfigureServer": "Configurar servidor",
      "ServerDetails": "Detalhes do servidor",
      "NoTools": "Nenhuma ferramenta disponível",
      "LoadingPresets": "A carregar servidores predefinidos…",
      "ConfiguredServers": "Servidores configurados",
      "UpdatingConfig": "A atualizar a configuração…",
      "CreatingClient": "A criar cliente MCP…",
      "Stopping": "A parar o servidor…",
      "Starting": "A iniciar o servidor…",
      "RestartingServers": "A reiniciar todos os servidores…",
      "ExecutionFailed": "Falha na execução MCP",
    },
  },
  "SdPanel": {
    "Prompt": "Descrição da imagem",
    "NegativePrompt": "Descrição negativa",
    "PleaseInput": (name: string) => name + " — Introduzir um valor",
    "AspectRatio": "Proporção",
    "ImageStyle": "Estilo da imagem",
    "OutFormat": "Formato de saída",
    "AIModel": "Modelo",
    "ModelVersion": "Versão do modelo",
    "Submit": "Gerar",
    "ParamIsRequired": (name: string) => name + ": Obrigatório",
    "Styles": {
      "D3Model": "Modelo 3D",
      "AnalogFilm": "Filme analógico",
      "Anime": "Animação japonesa",
      "Cinematic": "Cinematográfico",
      "ComicBook": "Banda desenhada",
      "DigitalArt": "Arte digital",
      "Enhance": "Melhorado",
      "FantasyArt": "Arte fantástica",
      "Isometric": "Isométrico",
      "LineArt": "Desenho a traço",
      "LowPoly": "Poucos polígonos",
      "ModelingCompound": "Massa de modelar",
      "NeonPunk": "Punk néon",
      "Origami": "Dobradura",
      "Photographic": "Fotográfico",
      "PixelArt": "Arte em píxeis",
      "TileTexture": "Textura de mosaico",
    },
  },
  "Sd": {
    "SubTitle": (count: number) => "Imagens: " + count,
    "Actions": {
      "Params": "Ver parâmetros",
      "Copy": "Copiar: Descrição da imagem",
      "Delete": "Deletar",
      "Retry": "Tentar Novamente",
      "ReturnHome": "Voltar ao início",
      "History": "Histórico",
    },
    "EmptyRecord": "Ainda não há imagens",
    "Status": {
      "Name": "Estado",
      "Success": "Sucesso",
      "Error": "Erro",
      "Wait": "Em espera",
      "Running": "Em execução",
    },
    "Danger": {
      "Delete": "Confirmar para deletar?",
    },
    "GenerateParams": "Parâmetros de geração",
    "Detail": "Detalhes",
  },
  "ApiError": {
    "Timeout": "O pedido excedeu o tempo limite. Tente novamente ou verifique a interface nas definições avançadas.",
    "Quota": "Quota do fornecedor insuficiente. Verifique o saldo, a faturação e os limites.",
    "AccessCode": "Código de acesso ao site inválido. Verifique o código.",
    "InvalidKey": "API Key inválida ou expirada. Verifique o Key do fornecedor selecionado.",
    "Permission": "Acesso negado. Verifique as permissões do modelo e as restrições regionais.",
    "Model": "Modelo ou interface indisponível. Verifique o ID e o endereço nas definições avançadas.",
    "RateLimit": "Demasiados pedidos ou limite atingido. Tente mais tarde e verifique a quota.",
    "Parameters": "Parâmetros incompatíveis. Verifique o ID do modelo e os parâmetros avançados.",
    "Unavailable": "Fornecedor temporariamente indisponível. Tente mais tarde.",
    "Empty": "Não foi recebido conteúdo válido. Verifique o estado do modelo e tente novamente.",
    "Network": "Falha de rede. Verifique a rede, o endereço e as definições CORS do serviço.",
    "Generic": "Pedido falhado. Verifique o API Key, o modelo e a interface do fornecedor.",
  },
};

export default pt;
