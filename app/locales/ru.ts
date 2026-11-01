import { LocaleType } from "../locales/index";
import { getClientConfig } from "../config/client";
import { SAAS_CHAT_UTM_URL } from "@/app/constant";
const isApp = !!getClientConfig()?.isApp;

const ru: LocaleType = {
  WIP: "Скоро...",
  Error: {
    Unauthorized: isApp
      ? `😆 В разговоре возникли некоторые проблемы, не переживайте:
    \\ 1️⃣ Если вы хотите начать без настройки, [нажмите здесь, чтобы немедленно начать разговор 🚀](${SAAS_CHAT_UTM_URL})
    \\ 2️⃣ Если вы хотите использовать свои ресурсы OpenAI, нажмите [здесь](/#/settings), чтобы изменить настройки ⚙️`
      : `😆 В разговоре возникли некоторые проблемы, не переживайте:
    \ 1️⃣ Если вы хотите начать без настройки, [нажмите здесь, чтобы немедленно начать разговор 🚀](${SAAS_CHAT_UTM_URL})
    \ 2️⃣ Если вы используете частную версию развертывания, нажмите [здесь](/#/auth), чтобы ввести ключ доступа 🔑
    \ 3️⃣ Если вы хотите использовать свои ресурсы OpenAI, нажмите [здесь](/#/settings), чтобы изменить настройки ⚙️
 `,
  },
  Auth: {
    Title: "Требуется пароль",
    Tips: "Администратор включил проверку пароля. Пожалуйста, введите код доступа ниже",
    SubTips: "Или введите ваш API-ключ OpenAI или Google",
    Input: "Введите код доступа здесь",
    Confirm: "Подтвердить",
    Later: "Позже",
    Return: "Назад",
    SaasTips: "Настройка слишком сложна, я хочу использовать это немедленно",
    TopTips:
      "🥳 Предложение по запуску NextChat AI: разблокируйте OpenAI o1, GPT-4o, Claude-3.5 и новейшие большие модели прямо сейчас",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} бесед`,
  },
  Chat: {
    SubTitle: (count: number) => `Всего ${count} бесед`,
    EditMessage: {
      Title: "Редактировать сообщение",
      Topic: {
        Title: "Тема чата",
        SubTitle: "Изменить текущую тему чата",
      },
    },
    Actions: {
      ChatList: "Просмотреть список сообщений",
      CompressedHistory: "Просмотреть сжатую историю подсказок",
      Export: "Экспортировать чат",
      Copy: "Копировать",
      Stop: "Остановить",
      Retry: "Повторить",
      Pin: "Закрепить",
      PinToastContent: "1 беседа закреплена в предустановленных подсказках",
      PinToastAction: "Просмотреть",
      Delete: "Удалить",
      Edit: "Редактировать",
      RefreshTitle: "Обновить заголовок",
      RefreshToast: "Запрос на обновление заголовка отправлен",
    
      "FullScreen": "Полный экран",
      "Speech": "Прочитать",
      "StopSpeech": "Остановить",
    },
    Commands: {
      new: "Новый чат",
      newm: "Создать чат из маски",
      next: "Следующий чат",
      prev: "Предыдущий чат",
      clear: "Очистить контекст",
      del: "Удалить чат",
    
      "fork": "Копировать чат",
    },
    InputActions: {
      Stop: "Остановить ответ",
      ToBottom: "Перейти к последнему",
      Theme: {
        auto: "Автоматическая тема",
        light: "Светлая тема",
        dark: "Темная тема",
      },
      Prompt: "Быстрая команда",
      Masks: "Все маски",
      Clear: "Очистить чат",
      Settings: "Настройки чата",
      UploadImage: "Загрузить изображение",
    },
    Rename: "Переименовать чат",
    Typing: "Печатает…",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} Отправить`;
      if (submitKey === "Enter") {
        inputHints += "，Shift + Enter для новой строки";
      }
      return inputHints + "，/ для автозаполнения，: для команд";
    },
    Send: "Отправить",
    Config: {
      Reset: "Очистить память",
      SaveAs: "Сохранить как маску",
    },
    IsContext: "Предустановленные подсказки",
  
    "StartSpeak": "Начать говорить",
    "StopSpeak": "Остановить",
    "ShortcutKey": {
      "Title": "Горячие клавиши",
      "newChat": "Открыть новый чат",
      "focusInput": "Перейти к полю ввода",
      "copyLastMessage": "Копировать последний ответ",
      "copyLastCode": "Копировать последний блок кода",
      "showShortcutKey": "Показать горячие клавиши",
      "clearContext": "Очистить чат",
    },
  },
  Export: {
    Title: "Поделиться историей чата",
    Copy: "Копировать все",
    Download: "Скачать файл",
    Share: "Поделиться в ShareGPT",
    MessageFromYou: "Пользователь",
    MessageFromChatGPT: "ChatGPT",
    Format: {
      Title: "Формат экспорта",
      SubTitle: "Можно экспортировать как Markdown текст или PNG изображение",
    },
    IncludeContext: {
      Title: "Включить контекст маски",
      SubTitle: "Показывать ли контекст маски в сообщениях",
    },
    Steps: {
      Select: "Выбрать",
      Preview: "Предпросмотр",
    },
    Image: {
      Toast: "Создание скриншота",
      Modal: "Длительное нажатие или правый клик для сохранения изображения",
    },
  
    "Artifacts": {
      "Title": "Поделиться Artifacts",
      "Error": "Поделиться Artifacts — Ошибка",
    },
  },
  Select: {
    Search: "Поиск сообщений",
    All: "Выбрать все",
    Latest: "Последние сообщения",
    Clear: "Очистить выбор",
  },
  Memory: {
    Title: "Историческое резюме",
    EmptyContent: "Содержимое чата слишком короткое, чтобы суммировать",
    Send: "Автоматически сжать историю чата и отправить как контекст",
    Copy: "Копировать резюме",
    Reset: "[не используется]",
    ResetConfirm: "Подтвердить очистку исторического резюме?",
  },
  Home: {
    NewChat: "Новый чат",
    DeleteChat: "Подтвердить удаление выбранного чата?",
    DeleteToast: "Беседа удалена",
    Revert: "Отменить",
  },
  Settings: {
    Title: "Настройки",
    SubTitle: "Все параметры настроек",

    Danger: {
      Reset: {
        Title: "Сброс всех настроек",
        SubTitle: "Сброс всех параметров до значений по умолчанию",
        Action: "Сбросить сейчас",
        Confirm: "Подтвердить сброс всех настроек?",
      },
      Clear: {
        Title: "Очистить все данные",
        SubTitle: "Очистить все чаты и данные настроек",
        Action: "Очистить сейчас",
        Confirm: "Подтвердить очистку всех чатов и данных настроек?",
      },
    },
    Lang: {
      Name: "Язык", // ATTENTION: если вы хотите добавить новый перевод, не переводите это значение, оставьте его как `Language`
      All: "Все языки",
    },
    Avatar: "Аватар",
    FontSize: {
      Title: "Размер шрифта",
      SubTitle: "Размер шрифта в чате",
    },
    FontFamily: {
      Title: "Шрифт чата",
      SubTitle:
        "Шрифт содержимого чата, оставьте пустым для применения глобального шрифта по умолчанию",
      Placeholder: "Название шрифта",
    },
    InjectSystemPrompts: {
      Title: "Вставить системные подсказки",
      SubTitle:
        "Принудительно добавлять системную подсказку, имитирующую ChatGPT, в начале каждого запроса",
    },
    InputTemplate: {
      Title: "Предварительная обработка пользовательского ввода",
      SubTitle:
        "Последнее сообщение пользователя будет подставлено в этот шаблон",
    },

    Update: {
      Version: (x: string) => `Текущая версия: ${x}`,
      IsLatest: "Установлена последняя версия",
      CheckUpdate: "Проверить обновления",
      IsChecking: "Проверка обновлений...",
      FoundUpdate: (x: string) => `Найдено новое обновление: ${x}`,
      GoToUpdate: "Перейти к обновлению",
    
      "Success": "Обновление завершено",
      "Failed": "Ошибка обновления",
    },
    SendKey: "Кнопка отправки",
    Theme: "Тема",
    TightBorder: "Режим без границ",
    SendPreviewBubble: {
      Title: "Предварительный просмотр пузырьков",
      SubTitle:
        "Просмотр содержимого Markdown в пузырьках предварительного просмотра",
    },
    AutoGenerateTitle: {
      Title: "Автоматическое создание заголовка",
      SubTitle: "Создание подходящего заголовка на основе содержания беседы",
    },
    Sync: {
      CloudState: "Облачные данные",
      NotSyncYet: "Синхронизация еще не проводилась",
      Success: "Синхронизация успешна",
      Fail: "Не удалось синхронизировать",

      Config: {
        Modal: {
          Title: "Настройки облачной синхронизации",
          Check: "Проверить доступность",
        },
        SyncType: {
          Title: "Тип синхронизации",
          SubTitle: "Выберите предпочитаемый сервер синхронизации",
        },
        Proxy: {
          Title: "Включить прокси",
          SubTitle:
            "При синхронизации в браузере необходимо включить прокси для предотвращения ограничений кросс-домена",
        },
        ProxyUrl: {
          Title: "Адрес прокси",
          SubTitle: "Только для встроенного прокси в проекте",
        },

        WebDav: {
          Endpoint: "WebDAV адрес",
          UserName: "Имя пользователя",
          Password: "Пароль",
        },

        UpStash: {
          Endpoint: "UpStash Redis REST Url",
          UserName: "Имя резервной копии",
          Password: "UpStash Redis REST Token",
        },
      },

      LocalState: "Локальные данные",
      Overview: (overview: any) => {
        return `${overview.chat} бесед, ${overview.message} сообщений, ${overview.prompt} подсказок, ${overview.mask} масок`;
      },
      ImportFailed: "Не удалось импортировать",
    },
    Mask: {
      Splash: {
        Title: "Стартовая страница масок",
        SubTitle:
          "При создании нового чата отображать стартовую страницу масок",
      },
      Builtin: {
        Title: "Скрыть встроенные маски",
        SubTitle: "Скрыть встроенные маски во всех списках масок",
      },
    },
    Prompt: {
      Disable: {
        Title: "Отключить автозаполнение подсказок",
        SubTitle: "Введите / в начале строки для активации автозаполнения",
      },
      List: "Список пользовательских подсказок",
      ListCount: (builtin: number, custom: number) =>
        `Встроенные ${builtin}, пользовательские ${custom}`,
      Edit: "Редактировать",
      Modal: {
        Title: "Список подсказок",
        Add: "Создать",
        Search: "Поиск подсказок",
      },
      EditModal: {
        Title: "Редактировать подсказки",
      },
    },
    HistoryCount: {
      Title: "Количество истории сообщений",
      SubTitle: "Количество историй сообщений, отправляемых с каждым запросом",
    },
    CompressThreshold: {
      Title: "Порог сжатия длины истории сообщений",
      SubTitle:
        "Когда не сжатая история сообщений превышает это значение, происходит сжатие",
    },

    Usage: {
      Title: "Проверка баланса",
      SubTitle(used: any, total: any) {
        return `Использовано в этом месяце $${used}, всего по подписке $${total}`;
      },
      IsChecking: "Проверка…",
      Check: "Проверить снова",
      NoAccess: "Введите API-ключ или пароль доступа для просмотра баланса",
    },

    Access: {
      SaasStart: {
        Title: "Используйте NextChat AI",
        Label: "(Самое экономичное решение)",
        SubTitle:
          "Официально поддерживается NextChat, готов к использованию без настройки, поддерживает последние крупные модели, такие как OpenAI o1, GPT-4o и Claude-3.5",
        ChatNow: "Начать чат",
      },

      AccessCode: {
        Title: "Пароль доступа",
        SubTitle: "Администратор включил защиту паролем",
        Placeholder: "Введите пароль доступа",
      },
      CustomEndpoint: {
        Title: "Пользовательский интерфейс",
        SubTitle: "Использовать ли пользовательский Azure или OpenAI сервис",
      },
      Provider: {
        Title: "Провайдер модели",
        SubTitle: "Переключиться на другого провайдера",
      },
      OpenAI: {
        ApiKey: {
          Title: "OpenAI API Key",
          SubTitle:
            "Использовать пользовательский OpenAI-ключ для обхода ограничений пароля",
          Placeholder: "OpenAI API Key",
        },

        Endpoint: {
          Title: "Адрес интерфейса",
          SubTitle: "Кроме адреса по умолчанию, должен содержать http(s)://",
        },
      },
      Azure: {
        ApiKey: {
          Title: "Azure API Key",
          SubTitle:
            "Использовать пользовательский Azure-ключ для обхода ограничений пароля",
          Placeholder: "Azure API Key",
        },

        Endpoint: {
          Title: "Адрес интерфейса",
          SubTitle: "Пример:",
        },

        ApiVerion: {
          Title: "Версия интерфейса (azure api version)",
          SubTitle: "Выберите конкретную версию",
        },
      },
      Anthropic: {
        ApiKey: {
          Title: "Anthropic API Key",
          SubTitle:
            "Использовать пользовательский Anthropic-ключ для обхода ограничений пароля",
          Placeholder: "Anthropic API Key",
        },

        Endpoint: {
          Title: "Адрес интерфейса",
          SubTitle: "Пример:",
        },

        ApiVerion: {
          Title: "Версия интерфейса (claude api version)",
          SubTitle: "Выберите конкретную версию API",
        },
      },
      Google: {
        ApiKey: {
          Title: "Google API Key",
          SubTitle: "Получите ваш API Key Google AI",
          Placeholder: "Введите ваш API Key Google AI Studio",
        },

        Endpoint: {
          Title: "Адрес интерфейса",
          SubTitle: "Пример:",
        },

        ApiVersion: {
          Title: "Версия API (только для gemini-pro)",
          SubTitle: "Выберите конкретную версию API",
        },
        GoogleSafetySettings: {
          Title: "Уровень фильтрации Google",
          SubTitle: "Настроить уровень фильтрации контента",
        },
      },
      Baidu: {
        ApiKey: {
          Title: "Baidu API Key",
          SubTitle: "Использовать пользовательский Baidu API Key",
          Placeholder: "Baidu API Key",
        },
        SecretKey: {
          Title: "Секретный ключ",
          SubTitle: "Использовать пользовательский Baidu Secret Key",
          Placeholder: "Baidu Secret Key",
        },
        Endpoint: {
          Title: "Адрес интерфейса",
          SubTitle:
            "Не поддерживает пользовательскую настройку, перейдите в .env",
        },
      },
      ByteDance: {
        ApiKey: {
          Title: "ByteDance API Key",
          SubTitle: "Использовать пользовательский ByteDance API Key",
          Placeholder: "ByteDance API Key",
        },
        Endpoint: {
          Title: "Адрес интерфейса",
          SubTitle: "Пример:",
        },
      },
      Alibaba: {
        ApiKey: {
          Title: "Alibaba API Key",
          SubTitle: "Использовать пользовательский Alibaba Cloud API Key",
          Placeholder: "Alibaba Cloud API Key",
        },
        Endpoint: {
          Title: "Адрес интерфейса",
          SubTitle: "Пример:",
        },
      },
      CustomModel: {
        Title: "Название пользовательской модели",
        SubTitle:
          "Добавьте варианты пользовательских моделей, разделяя запятыми",
      },
    
      "Tencent": {
        "ApiKey": {
          "Title": "Tencent API Key",
          "SubTitle": "Использовать свой API Key",
          "Placeholder": "Tencent API Key",
        },
        "SecretKey": {
          "Title": "Tencent Secret Key",
          "SubTitle": "Использовать свои учётные данные — Secret Key",
          "Placeholder": "Tencent Secret Key",
        },
        "Endpoint": {
          "Title": "Адрес интерфейса",
          "SubTitle": "Задайте это значение в .env",
        },
      },
      "Moonshot": {
        "ApiKey": {
          "Title": "Moonshot API Key",
          "SubTitle": "Использовать свой API Key",
          "Placeholder": "Moonshot API Key",
        },
        "Endpoint": {
          "Title": "Адрес интерфейса",
          "SubTitle": "Пример: ",
        },
      },
      "DeepSeek": {
        "ApiKey": {
          "Title": "DeepSeek API Key",
          "SubTitle": "Использовать свой API Key",
          "Placeholder": "DeepSeek API Key",
        },
        "Endpoint": {
          "Title": "Адрес интерфейса",
          "SubTitle": "Пример: ",
        },
      },
      "XAI": {
        "ApiKey": {
          "Title": "XAI API Key",
          "SubTitle": "Использовать свой API Key",
          "Placeholder": "XAI API Key",
        },
        "Endpoint": {
          "Title": "Адрес интерфейса",
          "SubTitle": "Пример: ",
        },
      },
      "ChatGLM": {
        "ApiKey": {
          "Title": "ChatGLM API Key",
          "SubTitle": "Использовать свой API Key",
          "Placeholder": "ChatGLM API Key",
        },
        "Endpoint": {
          "Title": "Адрес интерфейса",
          "SubTitle": "Пример: ",
        },
      },
      "SiliconFlow": {
        "ApiKey": {
          "Title": "SiliconFlow API Key",
          "SubTitle": "Использовать свой API Key",
          "Placeholder": "SiliconFlow API Key",
        },
        "Endpoint": {
          "Title": "Адрес интерфейса",
          "SubTitle": "Пример: ",
        },
      },
      "Stability": {
        "ApiKey": {
          "Title": "Stability API Key",
          "SubTitle": "Использовать свой API Key",
          "Placeholder": "Stability API Key",
        },
        "Endpoint": {
          "Title": "Адрес интерфейса",
          "SubTitle": "Пример: ",
        },
      },
      "Iflytek": {
        "ApiKey": {
          "Title": "Iflytek API Key",
          "SubTitle": "Использовать свой API Key",
          "Placeholder": "Iflytek API Key",
        },
        "ApiSecret": {
          "Title": "Iflytek API Secret",
          "SubTitle": "Использовать свои учётные данные — API Secret",
          "Placeholder": "Iflytek API Secret",
        },
        "Endpoint": {
          "Title": "Адрес интерфейса",
          "SubTitle": "Пример: ",
        },
      },
    },

    Model: "Модель",
    CompressModel: {
      Title: "Модель сжатия",
      SubTitle: "Модель, используемая для сжатия истории",
    },
    Temperature: {
      Title: "Случайность (temperature)",
      SubTitle: "Чем больше значение, тем более случайные ответы",
    },
    TopP: {
      Title: "Ядро выборки (top_p)",
      SubTitle: "Похожие на случайность, но не изменяйте вместе с случайностью",
    },
    MaxTokens: {
      Title: "Ограничение на количество токенов за один раз (max_tokens)",
      SubTitle: "Максимальное количество токенов на одно взаимодействие",
    },
    PresencePenalty: {
      Title: "Наказание за новизну тем (presence_penalty)",
      SubTitle:
        "Чем больше значение, тем выше вероятность расширения на новые темы",
    },
    FrequencyPenalty: {
      Title: "Наказание за частоту (frequency_penalty)",
      SubTitle:
        "Чем больше значение, тем выше вероятность уменьшения повторяющихся слов",
    },
  
    "ShowPassword": "Показать пароль",
    "LocalizationInfo": {
      "Edition": "NextChat — пользовательская версия",
      "Timeout": "Тест соединения превысил 30 секунд. Проверьте сеть и адрес API.",
      "Success": "Соединение установлено",
      "NoResponse": "Провайдер не вернул корректный ответ. Проверьте модель и интерфейс.",
      "Upstream": "Базовая версия исходного проекта",
      "Details": "Подробные сведения о версии",
      "Security": "Идентификатор обслуживания безопасности",
      "Commit": "Commit сборки",
      "Official": "Официальная версия для справки",
      "Unavailable": "Пока недоступно",
      "Note": "Включает отдельные перенесённые исправления, а не полный официальный выпуск v2.16.1. Официальная версия указана для справки.",
    },
    "ProviderSetup": {
      "ModelIdPlaceholder": "ID модели@провайдер",
      "Provider": "Провайдер",
      "ProviderHelp": "Выберите провайдера и введите его API Key для использования модели по умолчанию",
      "ProviderKeyPlaceholder": "Введите API Key этого провайдера",
      "CurrentModel": "Текущая модель чата",
      "DefaultModel": "Модель по умолчанию",
      "ModelHelp": "Настройте интерфейс и свои модели в расширенных настройках",
      "TestModel": "Проверить текущую модель",
      "TestHelp": "Отправляет короткий запрос, который может тарифицироваться; не записывает историю",
      "TestConnection": "Проверить соединение",
      "Testing": "Проверка…",
      "Advanced": "Расширенные настройки",
      "OfficialURL": "Официальный адрес",
      "DefaultRoute": "По умолчанию использует маршрут этого сайта",
    },
    "TTS": {
      "Enable": {
        "Title": "Включить TTS",
        "SubTitle": "Включить синтез речи",
      },
      "Autoplay": {
        "Title": "Включить автовоспроизведение",
        "SubTitle": "Автоматически создавать и воспроизводить речь; сначала включите TTS",
      },
      "Model": "Модель",
      "Engine": "Движок TTS",
      "Voice": {
        "Title": "Голос",
        "SubTitle": "Голос для создаваемого аудио",
      },
      "Speed": {
        "Title": "Скорость",
        "SubTitle": "Скорость создаваемого аудио",
      },
    },
    "Realtime": {
      "Enable": {
        "Title": "Чат в реальном времени",
        "SubTitle": "Включить чат в реальном времени",
      },
      "Provider": {
        "Title": "Провайдер модели",
        "SubTitle": "Сменить провайдера",
      },
      "Model": {
        "Title": "Модель",
        "SubTitle": "Выберите модель",
      },
      "ApiKey": {
        "Title": "API Key",
        "SubTitle": "API Key",
        "Placeholder": "API Key",
      },
      "Azure": {
        "Endpoint": {
          "Title": "Адрес интерфейса",
          "SubTitle": "Адрес интерфейса",
        },
        "Deployment": {
          "Title": "Имя развёртывания",
          "SubTitle": "Имя развёртывания",
        },
      },
      "Temperature": {
        "Title": "Случайность (temperature)",
        "SubTitle": "Чем больше значение, тем более случайные ответы",
      },
    },
    "SafetyLabels": {
      "BLOCK_NONE": "Не блокировать",
      "BLOCK_ONLY_HIGH": "Только высокий",
      "BLOCK_MEDIUM_AND_ABOVE": "Средний и выше",
      "BLOCK_LOW_AND_ABOVE": "Низкий и выше",
    },
  },
  Store: {
    DefaultTopic: "Новый чат",
    BotHello: "Чем могу помочь?",
    Error: "Произошла ошибка, попробуйте позже",
    Prompt: {
      History: (content: string) =>
        "Это резюме истории чата как предыстория: " + content,
      Topic:
        "Укажите краткую тему этого сообщения в четырех-пяти словах, без объяснений, знаков препинания, междометий, лишнего текста или выделения. Если темы нет, просто напишите 'Болтовня'",
      Summarize:
        "Кратко подведите итоги содержимого беседы для использования в качестве последующего контекстного запроса, не более 200 слов",
    },
  },
  Copy: {
    Success: "Скопировано в буфер обмена",
    Failed: "Не удалось скопировать, предоставьте доступ к буферу обмена",
  },
  Download: {
    Success: "Содержимое успешно загружено в вашу директорию.",
    Failed: "Не удалось загрузить.",
  },
  Context: {
    Toast: (x: any) => `Содержит ${x} предустановленных подсказок`,
    Edit: "Текущие настройки чата",
    Add: "Добавить новый чат",
    Clear: "Контекст очищен",
    Revert: "Восстановить контекст",
  },
  Plugin: {
    Name: "Плагин",
  
    "Accessibility": {
      "Create": "Создать: Плагин",
      "Edit": "Редактировать: Плагин",
      "Save": "Сохранить: Плагин",
      "SchemaUrl": "Плагин Schema URL",
      "LoadSchema": "Загрузить по URL: Плагин Schema",
      "Schema": "Плагин Schema",
    },
    "Page": {
      "Title": "Плагины",
      "SubTitle": (count: number) => "Плагины: " + count,
      "Search": "Поиск сообщений — Плагины",
      "Create": "Создать",
      "Find": "Найти плагины на GitHub: ",
    },
    "Item": {
      "Info": (count: number) => "Методы: " + count,
      "View": "Просмотреть",
      "Edit": "Редактировать",
      "Delete": "Удалить",
      "DeleteConfirm": "Подтвердить удаление?",
    },
    "Auth": {
      "None": "Без аутентификации",
      "Basic": "Basic",
      "Bearer": "Bearer",
      "Custom": "Свой вариант",
      "CustomHeader": "Имя параметра",
      "Token": "Token",
      "Proxy": "Использовать прокси",
      "ProxyDescription": "Использовать прокси для обхода ограничений CORS",
      "Location": "Расположение",
      "LocationHeader": "Header",
      "LocationQuery": "Query",
      "LocationBody": "Body",
    },
    "EditModal": {
      "Title": (readonly: boolean) => "Редактировать: Плагин" + (readonly ? " (Только чтение)" : ""),
      "Download": "Скачать",
      "Auth": "Тип аутентификации",
      "Content": "OpenAPI Schema",
      "Load": "Загрузить по URL",
      "Method": "Методы",
      "Error": "Некорректная OpenAPI Schema",
    },
  },
  FineTuned: {
    Sysmessage: "Вы - помощник",
  },
  SearchChat: {
    Name: "Поиск",
    Page: {
      Title: "Поиск в истории чатов",
      Search: "Введите ключевые слова для поиска",
      NoResult: "Результатов не найдено",
      NoData: "Нет данных",
      Loading: "Загрузка",

      SubTitle: (count: number) => `Найдено ${count} результатов`,
    },
    Item: {
      View: "Просмотр",
    },
  },
  Mask: {
    Name: "Маска",
    Page: {
      Title: "Предустановленные роли",
      SubTitle: (count: number) => `${count} предустановленных ролей`,
      Search: "Поиск ролей",
      Create: "Создать",
    },
    Item: {
      Info: (count: number) => `Содержит ${count} предустановленных диалогов`,
      Chat: "Диалог",
      View: "Просмотреть",
      Edit: "Редактировать",
      Delete: "Удалить",
      DeleteConfirm: "Подтвердить удаление?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Редактирование предустановленной маски ${
          readonly ? "（только для чтения）" : ""
        }`,
      Download: "Скачать предустановку",
      Clone: "Клонировать предустановку",
    },
    Config: {
      Avatar: "Аватар роли",
      Name: "Название роли",
      Sync: {
        Title: "Использовать глобальные настройки",
        SubTitle:
          "Будет ли текущий чат использовать глобальные настройки модели",
        Confirm:
          "Пользовательские настройки текущего чата будут автоматически заменены, подтвердите активацию глобальных настроек?",
      },
      HideContext: {
        Title: "Скрыть предустановленные диалоги",
        SubTitle:
          "После скрытия предустановленные диалоги не будут отображаться в чате",
      },
      Share: {
        Title: "Поделиться этой маской",
        SubTitle: "Создать прямую ссылку на эту маску",
        Action: "Скопировать ссылку",
      },
    
      "Artifacts": {
        "Title": "Включить Artifacts",
        "SubTitle": "Отображать страницы HTML с помощью Artifacts",
      },
      "CodeFold": {
        "Title": "Включить сворачивание кода",
        "SubTitle": "Автоматически сворачивать длинные блоки кода",
      },
    },
  },
  NewChat: {
    Return: "Вернуться",
    Skip: "Начать сразу",
    NotShow: "Больше не показывать",
    ConfirmNoShow:
      "Подтвердить отключение? После отключения вы всегда сможете включить его снова в настройках.",
    Title: "Выберите маску",
    SubTitle: "Начните сейчас, столкнитесь с мыслями за маской",
    More: "Показать все",
  },

  URLCommand: {
    Code: "Обнаружен код доступа в ссылке, автоматически заполнить?",
    Settings:
      "Обнаружены предустановленные настройки в ссылке, автоматически заполнить?",
  },

  UI: {
    Confirm: "Подтвердить",
    Cancel: "Отмена",
    Close: "Закрыть",
    Create: "Создать",
    Edit: "Редактировать",
    Export: "Экспортировать",
    Import: "Импортировать",
    Sync: "Синхронизировать",
    Config: "Настройки",
  
    "Save": "Сохранить",
    "Loading": "Загрузка…",
    "Seed": "Начальное число",
    "User": "Пользователь",
    "Assistant": "Ассистент",
    "System": "Система",
    "Text": "Текст",
    "Image": "Изображение",
    "Standard": "Стандартное",
    "Vivid": "Яркое",
    "Natural": "Естественное",
    "ErrorTitle": "Произошла ошибка",
    "ReportError": "Сообщить об ошибке",
    "ClearData": "Удалить все данные",
    "AssistantTagline": "Создайте собственного ИИ-ассистента.",
    "EmptyPrompt": "Новая инструкция",
    "EmptyPromptContent": "Введите текст инструкции",
    "AllFiles": "Все файлы",
  
    "Refresh": "Перезагрузить",
    "HidePassword": "Скрыть пароль",
  },
  Exporter: {
    Description: {
      Title: "Только сообщения после очистки контекста будут отображаться",
    },
    Model: "Модель",
    Messages: "Сообщения",
    Topic: "Тема",
    Time: "Время",
  },

  "Discovery": {
    "Name": "Обзор",
  },
  "Mcp": {
    "Name": "MCP",
    "UI": {
      "Market": "Каталог MCP",
      "PresetLoadFailed": "Не удалось загрузить предустановленные серверы",
      "InitFailed": "Не удалось загрузить начальное состояние",
      "ConfigSaved": "Конфигурация сервера сохранена",
      "ConfigSaveFailed": "Не удалось сохранить конфигурацию",
      "ToolsFailed": "Не удалось загрузить инструменты",
      "Stopped": "Остановлен",
      "StopFailed": "Не удалось остановить сервер",
      "StartFailed": "Не удалось запустить сервер; проверьте журналы",
      "RestartingClients": "Перезапуск всех клиентов",
      "RestartFailed": "Не удалось перезапустить клиенты",
      "Initializing": "Инициализация",
      "NoServers": "Нет доступных серверов",
      "OpenRepo": "Открыть репозиторий",
      "Start": "Запустить",
      "Tools": "Инструменты",
      "Add": "Добавить",
      "RestartAll": "Перезапустить всё",
      "Search": "Поиск серверов MCP",
      "ConfigureServer": "Настроить сервер",
      "ServerDetails": "Сведения о сервере",
      "NoTools": "Нет доступных инструментов",
      "LoadingPresets": "Загрузка предустановленных серверов…",
      "ConfiguredServers": "Настроенные серверы",
      "UpdatingConfig": "Обновление конфигурации…",
      "CreatingClient": "Создание клиента MCP…",
      "Stopping": "Остановка сервера…",
      "Starting": "Запуск сервера…",
      "RestartingServers": "Перезапуск всех серверов…",
      "ExecutionFailed": "Ошибка выполнения MCP",
    },
  },
  "SdPanel": {
    "Prompt": "Описание изображения",
    "NegativePrompt": "Негативное описание",
    "PleaseInput": (name: string) => name + " — Введите значение",
    "AspectRatio": "Соотношение сторон",
    "ImageStyle": "Стиль изображения",
    "OutFormat": "Формат вывода",
    "AIModel": "Модель",
    "ModelVersion": "Версия модели",
    "Submit": "Создать",
    "ParamIsRequired": (name: string) => name + ": Обязательно",
    "Styles": {
      "D3Model": "3D-модель",
      "AnalogFilm": "Аналоговая плёнка",
      "Anime": "Аниме",
      "Cinematic": "Кинематографический",
      "ComicBook": "Комикс",
      "DigitalArt": "Цифровое искусство",
      "Enhance": "Улучшенный",
      "FantasyArt": "Фэнтези",
      "Isometric": "Изометрия",
      "LineArt": "Линейный рисунок",
      "LowPoly": "Мало полигонов",
      "ModelingCompound": "Пластилин",
      "NeonPunk": "Неоновый панк",
      "Origami": "Оригами",
      "Photographic": "Фотография",
      "PixelArt": "Пиксельная графика",
      "TileTexture": "Плиточная текстура",
    },
  },
  "Sd": {
    "SubTitle": (count: number) => "Изображения: " + count,
    "Actions": {
      "Params": "Посмотреть параметры",
      "Copy": "Копировать: Описание изображения",
      "Delete": "Удалить",
      "Retry": "Повторить",
      "ReturnHome": "На главную",
      "History": "История",
    },
    "EmptyRecord": "Изображений пока нет",
    "Status": {
      "Name": "Состояние",
      "Success": "Успешно",
      "Error": "Ошибка",
      "Wait": "Ожидание",
      "Running": "Выполняется",
    },
    "Danger": {
      "Delete": "Подтвердить удаление?",
    },
    "GenerateParams": "Параметры генерации",
    "Detail": "Подробности",
  },
  "ApiError": {
    "Timeout": "Время ожидания истекло. Повторите запрос или проверьте адрес в расширенных настройках.",
    "Quota": "Недостаточная квота провайдера. Проверьте баланс, оплату и лимиты.",
    "AccessCode": "Неверный код доступа к сайту. Проверьте код.",
    "InvalidKey": "API Key недействителен или просрочен. Проверьте Key выбранного провайдера.",
    "Permission": "Доступ запрещён. Проверьте права модели и региональные ограничения.",
    "Model": "Модель или интерфейс не найдены. Проверьте ID и адрес в расширенных настройках.",
    "RateLimit": "Слишком много запросов или достигнут лимит. Повторите позже и проверьте квоту.",
    "Parameters": "Несовместимые параметры. Проверьте ID модели и расширенные настройки.",
    "Unavailable": "Провайдер временно недоступен. Повторите позже.",
    "Empty": "Нет корректного содержимого. Проверьте состояние модели и повторите запрос.",
    "Network": "Ошибка сети. Проверьте сеть, адрес и настройки CORS стороннего сервиса.",
    "Generic": "Запрос не выполнен. Проверьте API Key, модель и интерфейс провайдера.",
  },
};

export default ru;
