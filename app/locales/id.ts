import type { LocaleType } from "./index";
import { getClientConfig } from "../config/client";
import { SAAS_CHAT_UTM_URL } from "@/app/constant";
const isApp = !!getClientConfig()?.isApp;

const id: LocaleType = {
  WIP: "Segera hadir…",
  Error: {
    Unauthorized: isApp
      ? `😆 Percakapan mengalami beberapa masalah, tidak perlu khawatir:
   \\ 1️⃣ Jika Anda ingin memulai tanpa konfigurasi, [klik di sini untuk mulai mengobrol segera 🚀](${SAAS_CHAT_UTM_URL})
   \\ 2️⃣ Jika Anda ingin menggunakan sumber daya OpenAI Anda sendiri, klik [di sini](/#/settings) untuk mengubah pengaturan ⚙️`
      : `😆 Percakapan mengalami beberapa masalah, tidak perlu khawatir:
   \ 1️⃣ Jika Anda ingin memulai tanpa konfigurasi, [klik di sini untuk mulai mengobrol segera 🚀](${SAAS_CHAT_UTM_URL})
   \ 2️⃣ Jika Anda menggunakan versi penyebaran pribadi, klik [di sini](/#/auth) untuk memasukkan kunci akses 🔑
   \ 3️⃣ Jika Anda ingin menggunakan sumber daya OpenAI Anda sendiri, klik [di sini](/#/settings) untuk mengubah pengaturan ⚙️
`,
  },
  Auth: {
    Title: "Kebutuhan Kata Sandi",
    Tips: "Administrator telah mengaktifkan verifikasi kata sandi, silakan masukkan kode akses di bawah ini",
    SubTips: "Atau masukkan kunci API OpenAI atau Google Anda",
    Input: "Masukkan kode akses di sini",
    Confirm: "Konfirmasi",
    Later: "Nanti",
    Return: "Kembali",
    SaasTips: "Konfigurasi terlalu rumit, saya ingin menggunakannya segera",
    TopTips:
      "🥳 Penawaran Peluncuran NextChat AI, buka OpenAI o1, GPT-4o, Claude-3.5 dan model besar terbaru sekarang",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} percakapan`,
  },
  Chat: {
    SubTitle: (count: number) => `Total ${count} percakapan`,
    EditMessage: {
      Title: "Edit Riwayat Pesan",
      Topic: {
        Title: "Topik Obrolan",
        SubTitle: "Ubah topik obrolan saat ini",
      },
    },
    Actions: {
      ChatList: "Lihat daftar pesan",
      CompressedHistory: "Lihat riwayat Prompt yang dikompresi",
      Export: "Ekspor riwayat obrolan",
      Copy: "Salin",
      Stop: "Berhenti",
      Retry: "Coba lagi",
      Pin: "Sematkan",
      PinToastContent: "1 percakapan telah disematkan ke prompt default",
      PinToastAction: "Lihat",
      Delete: "Hapus",
      Edit: "Sunting",
      RefreshTitle: "Segarkan Judul",
      RefreshToast: "Permintaan penyegaran judul telah dikirim",
    
      "FullScreen": "Layar penuh",
      "Speech": "Bacakan",
      "StopSpeech": "Berhenti",
    },
    Commands: {
      new: "Obrolan Baru",
      newm: "Buat Obrolan Baru dari Masker",
      next: "Obrolan Berikutnya",
      prev: "Obrolan Sebelumnya",
      clear: "Hapus Konteks",
      del: "Hapus Obrolan",
    
      "fork": "Salin percakapan",
    },
    InputActions: {
      Stop: "Hentikan Respons",
      ToBottom: "Gulir ke bawah",
      Theme: {
        auto: "Tema Otomatis",
        light: "Mode Terang",
        dark: "Mode Gelap",
      },
      Prompt: "Perintah Cepat",
      Masks: "Semua Masker",
      Clear: "Hapus Obrolan",
      Settings: "Pengaturan Obrolan",
      UploadImage: "Unggah Gambar",
    },
    Rename: "Ganti Nama Obrolan",
    Typing: "Sedang Mengetik…",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} kirim`;
      if (submitKey === "Enter") {
        inputHints += "，Shift + Enter untuk baris baru";
      }
      return inputHints + "，/ untuk melengkapi, : untuk memicu perintah";
    },
    Send: "Kirim",
    Config: {
      Reset: "Hapus Memori",
      SaveAs: "Simpan sebagai Masker",
    },
    IsContext: "Prompt Default",
  
    "StartSpeak": "Mulai berbicara",
    "StopSpeak": "Berhenti",
    "ShortcutKey": {
      "Title": "Pintasan papan ketik",
      "newChat": "Buka percakapan baru",
      "focusInput": "Fokus ke kolom masukan",
      "copyLastMessage": "Salin balasan terakhir",
      "copyLastCode": "Salin blok kode terakhir",
      "showShortcutKey": "Tampilkan pintasan",
      "clearContext": "Hapus Obrolan",
    },
  },
  Export: {
    Title: "Bagikan Riwayat Obrolan",
    Copy: "Salin Semua",
    Download: "Unduh File",
    Share: "Bagikan ke ShareGPT",
    MessageFromYou: "Pengguna",
    MessageFromChatGPT: "ChatGPT",
    Format: {
      Title: "Format Ekspor",
      SubTitle: "Dapat mengekspor teks Markdown atau gambar PNG",
    },
    IncludeContext: {
      Title: "Sertakan Konteks Masker",
      SubTitle: "Apakah akan menampilkan konteks masker dalam pesan",
    },
    Steps: {
      Select: "Pilih",
      Preview: "Prabaca",
    },
    Image: {
      Toast: "Sedang Membuat Screenshot",
      Modal: "Tekan lama atau klik kanan untuk menyimpan gambar",
    },
  
    "Artifacts": {
      "Title": "Bagikan Artifacts",
      "Error": "Bagikan Artifacts — Kesalahan",
    },
  },
  Select: {
    Search: "Cari Pesan",
    All: "Pilih Semua",
    Latest: "Beberapa Terbaru",
    Clear: "Hapus Pilihan",
  },
  Memory: {
    Title: "Ringkasan Sejarah",
    EmptyContent: "Isi percakapan terlalu pendek, tidak perlu dirangkum",
    Send: "Otomatis kompres riwayat obrolan dan kirim sebagai konteks",
    Copy: "Salin Ringkasan",
    Reset: "[unused]",
    ResetConfirm: "Konfirmasi untuk menghapus ringkasan sejarah?",
  },
  Home: {
    NewChat: "Obrolan Baru",
    DeleteChat: "Konfirmasi untuk menghapus percakapan yang dipilih?",
    DeleteToast: "Percakapan telah dihapus",
    Revert: "Batalkan",
  },
  Settings: {
    Title: "Pengaturan",
    SubTitle: "Semua opsi pengaturan",

    Danger: {
      Reset: {
        Title: "Atur Ulang Semua Pengaturan",
        SubTitle: "Atur ulang semua opsi pengaturan ke nilai default",
        Action: "Atur Ulang Sekarang",
        Confirm: "Konfirmasi untuk mengatur ulang semua pengaturan?",
      },
      Clear: {
        Title: "Hapus Semua Data",
        SubTitle: "Hapus semua data obrolan dan pengaturan",
        Action: "Hapus Sekarang",
        Confirm:
          "Konfirmasi untuk menghapus semua data obrolan dan pengaturan?",
      },
    },
    Lang: {
      Name: "Bahasa", // PERHATIAN: jika Anda ingin menambahkan terjemahan baru, harap jangan terjemahkan nilai ini, biarkan sebagai `Language`
      All: "Semua Bahasa",
    },
    Avatar: "Avatar",
    FontSize: {
      Title: "Ukuran Font",
      SubTitle: "Ukuran font untuk konten obrolan",
    },
    FontFamily: {
      Title: "Font Obrolan",
      SubTitle:
        "Font dari konten obrolan, biarkan kosong untuk menerapkan font default global",
      Placeholder: "Nama Font",
    },
    InjectSystemPrompts: {
      Title: "Suntikkan Pesan Sistem",
      SubTitle:
        "Memaksa menambahkan pesan sistem simulasi ChatGPT di awal daftar pesan setiap permintaan",
    },
    InputTemplate: {
      Title: "Pra-pemrosesan Input Pengguna",
      SubTitle: "Pesan terbaru pengguna akan diisi ke template ini",
    },

    Update: {
      Version: (x: string) => `Versi Saat Ini: ${x}`,
      IsLatest: "Sudah versi terbaru",
      CheckUpdate: "Periksa Pembaruan",
      IsChecking: "Sedang memeriksa pembaruan...",
      FoundUpdate: (x: string) => `Versi Baru Ditemukan: ${x}`,
      GoToUpdate: "Pergi ke Pembaruan",
    
      "Success": "Pembaruan berhasil",
      "Failed": "Pembaruan gagal",
    },
    SendKey: "Kunci Kirim",
    Theme: "Tema",
    TightBorder: "Mode Tanpa Border",
    SendPreviewBubble: {
      Title: "Preview Bubble",
      SubTitle: "Pratinjau konten Markdown di bubble pratinjau",
    },
    AutoGenerateTitle: {
      Title: "Otomatis Membuat Judul",
      SubTitle: "Membuat judul yang sesuai berdasarkan konten obrolan",
    },
    Sync: {
      CloudState: "Data Cloud",
      NotSyncYet: "Belum disinkronkan",
      Success: "Sinkronisasi Berhasil",
      Fail: "Sinkronisasi Gagal",

      Config: {
        Modal: {
          Title: "Konfigurasi Sinkronisasi Cloud",
          Check: "Periksa Ketersediaan",
        },
        SyncType: {
          Title: "Jenis Sinkronisasi",
          SubTitle: "Pilih server sinkronisasi favorit",
        },
        Proxy: {
          Title: "Aktifkan Proxy",
          SubTitle:
            "Saat menyinkronkan di browser, proxy harus diaktifkan untuk menghindari pembatasan lintas domain",
        },
        ProxyUrl: {
          Title: "Alamat Proxy",
          SubTitle: "Hanya berlaku untuk proxy lintas domain bawaan proyek ini",
        },

        WebDav: {
          Endpoint: "Alamat WebDAV",
          UserName: "Nama Pengguna",
          Password: "Kata Sandi",
        },

        UpStash: {
          Endpoint: "Url REST Redis UpStash",
          UserName: "Nama Cadangan",
          Password: "Token REST Redis UpStash",
        },
      },

      LocalState: "Data Lokal",
      Overview: (overview: any) => {
        return `${overview.chat} percakapan, ${overview.message} pesan, ${overview.prompt} prompt, ${overview.mask} masker`;
      },
      ImportFailed: "Impor Gagal",
    },
    Mask: {
      Splash: {
        Title: "Halaman Awal Masker",
        SubTitle: "Tampilkan halaman awal masker saat memulai obrolan baru",
      },
      Builtin: {
        Title: "Sembunyikan Masker Bawaan",
        SubTitle: "Sembunyikan masker bawaan dari semua daftar masker",
      },
    },
    Prompt: {
      Disable: {
        Title: "Nonaktifkan Pelengkapan Prompt Otomatis",
        SubTitle:
          "Ketik / di awal kotak input untuk memicu pelengkapan otomatis",
      },
      List: "Daftar Prompt Kustom",
      ListCount: (builtin: number, custom: number) =>
        `Bawaan ${builtin} item, pengguna ${custom} item`,
      Edit: "Sunting",
      Modal: {
        Title: "Daftar Prompt",
        Add: "Baru",
        Search: "Cari Prompt",
      },
      EditModal: {
        Title: "Sunting prompt",
      },
    },
    HistoryCount: {
      Title: "Jumlah Pesan Sejarah",
      SubTitle: "Jumlah pesan sejarah yang dibawa setiap permintaan",
    },
    CompressThreshold: {
      Title: "Ambang Batas Kompresi Pesan Sejarah",
      SubTitle:
        "Ketika pesan sejarah yang tidak terkompresi melebihi nilai ini, akan dikompresi",
    },

    Usage: {
      Title: "Cek Saldo",
      SubTitle(used: any, total: any) {
        return `Digunakan bulan ini $${used}, total langganan $${total}`;
      },
      IsChecking: "Sedang memeriksa…",
      Check: "Periksa Lagi",
      NoAccess: "Masukkan API Key atau kata sandi akses untuk melihat saldo",
    },

    Access: {
      SaasStart: {
        Title: "Gunakan NextChat AI",
        Label: "(Solusi paling hemat biaya)",
        SubTitle:
          "Dikelola secara resmi oleh NextChat, siap digunakan tanpa konfigurasi, mendukung model besar terbaru seperti OpenAI o1, GPT-4o, dan Claude-3.5",
        ChatNow: "Chat Sekarang",
      },

      AccessCode: {
        Title: "Kata Sandi Akses",
        SubTitle: "Administrator telah mengaktifkan akses terenkripsi",
        Placeholder: "Masukkan kata sandi akses",
      },
      CustomEndpoint: {
        Title: "Antarmuka Kustom",
        SubTitle: "Apakah akan menggunakan layanan Azure atau OpenAI kustom",
      },
      Provider: {
        Title: "Penyedia Layanan Model",
        SubTitle: "Ganti penyedia layanan yang berbeda",
      },
      OpenAI: {
        ApiKey: {
          Title: "OpenAI API Key",
          SubTitle:
            "Gunakan OpenAI Key kustom untuk menghindari batasan akses kata sandi",
          Placeholder: "OpenAI API Key",
        },

        Endpoint: {
          Title: "Alamat Antarmuka",
          SubTitle: "Selain alamat default, harus menyertakan http(s)://",
        },
      },
      Azure: {
        ApiKey: {
          Title: "Azure API Key",
          SubTitle:
            "Gunakan Azure Key kustom untuk menghindari batasan akses kata sandi",
          Placeholder: "Azure API Key",
        },

        Endpoint: {
          Title: "Alamat Antarmuka",
          SubTitle: "Contoh:",
        },

        ApiVerion: {
          Title: "Versi Antarmuka (azure api version)",
          SubTitle: "Pilih versi parsial tertentu",
        },
      },
      Anthropic: {
        ApiKey: {
          Title: "Anthropic API Key",
          SubTitle:
            "Gunakan Anthropic Key kustom untuk menghindari batasan akses kata sandi",
          Placeholder: "Anthropic API Key",
        },

        Endpoint: {
          Title: "Alamat Antarmuka",
          SubTitle: "Contoh:",
        },

        ApiVerion: {
          Title: "Versi Antarmuka (claude api version)",
          SubTitle: "Pilih versi API tertentu",
        },
      },
      Google: {
        ApiKey: {
          Title: "Google API Key",
          SubTitle: "Dapatkan API Key Anda dari Google AI",
          Placeholder: "Masukkan API Key Studio Google AI Anda",
        },

        Endpoint: {
          Title: "Alamat Akhir",
          SubTitle: "Contoh:",
        },

        ApiVersion: {
          Title: "Versi API (hanya untuk gemini-pro)",
          SubTitle: "Pilih versi API tertentu",
        },
        GoogleSafetySettings: {
          Title: "Tingkat Filter Keamanan Google",
          SubTitle: "Atur tingkat filter konten",
        },
      },
      Baidu: {
        ApiKey: {
          Title: "Baidu API Key",
          SubTitle: "Gunakan Baidu API Key kustom",
          Placeholder: "Baidu API Key",
        },
        SecretKey: {
          Title: "Secret Key",
          SubTitle: "Gunakan Baidu Secret Key kustom",
          Placeholder: "Baidu Secret Key",
        },
        Endpoint: {
          Title: "Alamat Antarmuka",
          SubTitle: "Tidak mendukung kustom, pergi ke .env untuk konfigurasi",
        },
      },
      ByteDance: {
        ApiKey: {
          Title: "ByteDance API Key",
          SubTitle: "Gunakan ByteDance API Key kustom",
          Placeholder: "ByteDance API Key",
        },
        Endpoint: {
          Title: "Alamat Antarmuka",
          SubTitle: "Contoh:",
        },
      },
      Alibaba: {
        ApiKey: {
          Title: "Alibaba API Key",
          SubTitle: "Gunakan Alibaba Cloud API Key kustom",
          Placeholder: "Alibaba API Key",
        },
        Endpoint: {
          Title: "Alamat Antarmuka",
          SubTitle: "Contoh:",
        },
      },
      CustomModel: {
        Title: "Nama Model Kustom",
        SubTitle: "Tambahkan opsi model kustom, pisahkan dengan koma",
      },
    
      "Tencent": {
        "ApiKey": {
          "Title": "Tencent API Key",
          "SubTitle": "Gunakan API Key kustom",
          "Placeholder": "Tencent API Key",
        },
        "SecretKey": {
          "Title": "Tencent Secret Key",
          "SubTitle": "Gunakan kredensial kustom — Secret Key",
          "Placeholder": "Tencent Secret Key",
        },
        "Endpoint": {
          "Title": "Alamat antarmuka",
          "SubTitle": "Atur nilai ini di .env",
        },
      },
      "Moonshot": {
        "ApiKey": {
          "Title": "Moonshot API Key",
          "SubTitle": "Gunakan API Key kustom",
          "Placeholder": "Moonshot API Key",
        },
        "Endpoint": {
          "Title": "Alamat antarmuka",
          "SubTitle": "Contoh: ",
        },
      },
      "DeepSeek": {
        "ApiKey": {
          "Title": "DeepSeek API Key",
          "SubTitle": "Gunakan API Key kustom",
          "Placeholder": "DeepSeek API Key",
        },
        "Endpoint": {
          "Title": "Alamat antarmuka",
          "SubTitle": "Contoh: ",
        },
      },
      "XAI": {
        "ApiKey": {
          "Title": "XAI API Key",
          "SubTitle": "Gunakan API Key kustom",
          "Placeholder": "XAI API Key",
        },
        "Endpoint": {
          "Title": "Alamat antarmuka",
          "SubTitle": "Contoh: ",
        },
      },
      "ChatGLM": {
        "ApiKey": {
          "Title": "ChatGLM API Key",
          "SubTitle": "Gunakan API Key kustom",
          "Placeholder": "ChatGLM API Key",
        },
        "Endpoint": {
          "Title": "Alamat antarmuka",
          "SubTitle": "Contoh: ",
        },
      },
      "SiliconFlow": {
        "ApiKey": {
          "Title": "SiliconFlow API Key",
          "SubTitle": "Gunakan API Key kustom",
          "Placeholder": "SiliconFlow API Key",
        },
        "Endpoint": {
          "Title": "Alamat antarmuka",
          "SubTitle": "Contoh: ",
        },
      },
      "Stability": {
        "ApiKey": {
          "Title": "Stability API Key",
          "SubTitle": "Gunakan API Key kustom",
          "Placeholder": "Stability API Key",
        },
        "Endpoint": {
          "Title": "Alamat antarmuka",
          "SubTitle": "Contoh: ",
        },
      },
      "Iflytek": {
        "ApiKey": {
          "Title": "Iflytek API Key",
          "SubTitle": "Gunakan API Key kustom",
          "Placeholder": "Iflytek API Key",
        },
        "ApiSecret": {
          "Title": "Iflytek API Secret",
          "SubTitle": "Gunakan kredensial kustom — API Secret",
          "Placeholder": "Iflytek API Secret",
        },
        "Endpoint": {
          "Title": "Alamat antarmuka",
          "SubTitle": "Contoh: ",
        },
      },
    },

    Model: "Model",
    CompressModel: {
      Title: "Model Kompresi",
      SubTitle: "Model yang digunakan untuk mengompres riwayat",
    },
    Temperature: {
      Title: "Keacakan (temperature)",
      SubTitle: "Semakin tinggi nilainya, semakin acak responsnya",
    },
    TopP: {
      Title: "Sampling Inti (top_p)",
      SubTitle:
        "Mirip dengan randomness, tetapi jangan ubah bersama randomness",
    },
    MaxTokens: {
      Title: "Batas Token Per Respons",
      SubTitle: "Jumlah token maksimum yang digunakan per interaksi",
    },
    PresencePenalty: {
      Title: "Kedekatan Topik (presence_penalty)",
      SubTitle:
        "Semakin tinggi nilainya, semakin besar kemungkinan memperluas ke topik baru",
    },
    FrequencyPenalty: {
      Title: "Hukuman Frekuensi (frequency_penalty)",
      SubTitle:
        "Semakin tinggi nilainya, semakin besar kemungkinan mengurangi kata-kata yang berulang",
    },
  
    "ShowPassword": "Tampilkan kata sandi",
    "LocalizationInfo": {
      "Edition": "NextChat edisi kustom",
      "Timeout": "Koneksi melewati 30 detik. Periksa jaringan dan alamat API.",
      "Success": "Koneksi berhasil",
      "NoResponse": "Penyedia tidak mengembalikan respons yang valid. Periksa model dan antarmuka.",
      "Upstream": "Versi dasar proyek asal",
      "Details": "Informasi versi terperinci",
      "Security": "ID pemeliharaan keamanan",
      "Commit": "Commit build",
      "Official": "Versi resmi rujukan",
      "Unavailable": "Belum tersedia",
      "Note": "Mencakup perbaikan terpilih, bukan seluruh rilis resmi v2.16.1. Informasi versi resmi hanya untuk rujukan.",
    },
    "ProviderSetup": {
      "ModelIdPlaceholder": "ID model@penyedia",
      "Provider": "Penyedia",
      "ProviderHelp": "Pilih penyedia dan masukkan API Key untuk memakai model bawaan",
      "ProviderKeyPlaceholder": "Masukkan API Key penyedia ini",
      "CurrentModel": "Model percakapan saat ini",
      "DefaultModel": "Model bawaan",
      "ModelHelp": "Atur antarmuka dan model kustom di pengaturan lanjutan",
      "TestModel": "Uji model percakapan saat ini",
      "TestHelp": "Mengirim permintaan singkat yang mungkin dikenai biaya API; tidak menyimpan riwayat",
      "TestConnection": "Uji koneksi",
      "Testing": "Menguji…",
      "Advanced": "Pengaturan lanjutan",
      "OfficialURL": "Alamat resmi",
      "DefaultRoute": "Secara bawaan memakai rute situs ini",
    },
    "TTS": {
      "Enable": {
        "Title": "Aktifkan TTS",
        "SubTitle": "Aktifkan teks ke ucapan",
      },
      "Autoplay": {
        "Title": "Aktifkan putar otomatis",
        "SubTitle": "Buat dan putar ucapan otomatis; aktifkan TTS terlebih dahulu",
      },
      "Model": "Model",
      "Engine": "Mesin TTS",
      "Voice": {
        "Title": "Suara",
        "SubTitle": "Suara untuk audio yang dihasilkan",
      },
      "Speed": {
        "Title": "Kecepatan",
        "SubTitle": "Kecepatan audio yang dihasilkan",
      },
    },
    "Realtime": {
      "Enable": {
        "Title": "Percakapan waktu nyata",
        "SubTitle": "Aktifkan percakapan waktu nyata",
      },
      "Provider": {
        "Title": "Penyedia model",
        "SubTitle": "Ganti penyedia",
      },
      "Model": {
        "Title": "Model",
        "SubTitle": "Pilih model",
      },
      "ApiKey": {
        "Title": "API Key",
        "SubTitle": "API Key",
        "Placeholder": "API Key",
      },
      "Azure": {
        "Endpoint": {
          "Title": "Alamat antarmuka",
          "SubTitle": "Alamat antarmuka",
        },
        "Deployment": {
          "Title": "Nama penerapan",
          "SubTitle": "Nama penerapan",
        },
      },
      "Temperature": {
        "Title": "Keacakan (temperature)",
        "SubTitle": "Semakin tinggi nilainya, semakin acak responsnya",
      },
    },
    "SafetyLabels": {
      "BLOCK_NONE": "Tidak ada",
      "BLOCK_ONLY_HIGH": "Hanya tinggi",
      "BLOCK_MEDIUM_AND_ABOVE": "Sedang ke atas",
      "BLOCK_LOW_AND_ABOVE": "Rendah ke atas",
    },
  },
  Store: {
    DefaultTopic: "Obrolan Baru",
    BotHello: "Ada yang bisa saya bantu?",
    Error: "Terjadi kesalahan, coba lagi nanti",
    Prompt: {
      History: (content: string) =>
        "Ini adalah ringkasan obrolan sebelumnya sebagai latar belakang: " +
        content,
      Topic:
        "Gunakan empat hingga lima kata untuk langsung memberikan ringkasan topik kalimat ini, tanpa penjelasan, tanpa tanda baca, tanpa kata pengisi, tanpa teks tambahan, tanpa menebalkan. Jika tidak ada topik, langsung jawab 'Obrolan Santai'",
      Summarize:
        "Berikan ringkasan singkat tentang konten obrolan, untuk digunakan sebagai prompt konteks selanjutnya, dalam 200 kata atau kurang",
    },
  },
  Copy: {
    Success: "Telah disalin ke clipboard",
    Failed: "Gagal menyalin, mohon berikan izin clipboard",
  },
  Download: {
    Success: "Konten telah diunduh ke direktori Anda.",
    Failed: "Unduhan gagal.",
  },
  Context: {
    Toast: (x: any) => `Berisi ${x} prompt preset`,
    Edit: "Pengaturan Obrolan Saat Ini",
    Add: "Tambah Obrolan",
    Clear: "Konteks telah dihapus",
    Revert: "Kembalikan Konteks",
  },
  Plugin: {
    Name: "Pengaya",
  
    "Accessibility": {
      "Create": "Buat Baru: Pengaya",
      "Edit": "Edit: Pengaya",
      "Save": "Simpan: Pengaya",
      "SchemaUrl": "Pengaya Schema URL",
      "LoadSchema": "Muat dari URL: Pengaya Schema",
      "Schema": "Pengaya Schema",
    },
    "Page": {
      "Title": "Pengaya",
      "SubTitle": (count: number) => "Pengaya: " + count,
      "Search": "Cari Pesan — Pengaya",
      "Create": "Buat Baru",
      "Find": "Temukan pengaya di GitHub: ",
    },
    "Item": {
      "Info": (count: number) => "Metode: " + count,
      "View": "Lihat",
      "Edit": "Sunting",
      "Delete": "Hapus",
      "DeleteConfirm": "Konfirmasi penghapusan?",
    },
    "Auth": {
      "None": "Tanpa autentikasi",
      "Basic": "Basic",
      "Bearer": "Bearer",
      "Custom": "Kustom",
      "CustomHeader": "Nama parameter",
      "Token": "Token",
      "Proxy": "Gunakan proksi",
      "ProxyDescription": "Gunakan proksi untuk menghindari batasan CORS",
      "Location": "Lokasi",
      "LocationHeader": "Header",
      "LocationQuery": "Query",
      "LocationBody": "Body",
    },
    "EditModal": {
      "Title": (readonly: boolean) => "Edit: Pengaya" + (readonly ? " (Hanya baca)" : ""),
      "Download": "Unduh",
      "Auth": "Jenis autentikasi",
      "Content": "OpenAPI Schema",
      "Load": "Muat dari URL",
      "Method": "Metode",
      "Error": "OpenAPI Schema tidak valid",
    },
  },
  FineTuned: {
    Sysmessage: "Anda adalah seorang asisten",
  },
  SearchChat: {
    Name: "Cari",
    Page: {
      Title: "Cari riwayat obrolan",
      Search: "Masukkan kata kunci pencarian",
      NoResult: "Tidak ada hasil ditemukan",
      NoData: "Tidak ada data",
      Loading: "Memuat",

      SubTitle: (count: number) => `Ditemukan ${count} hasil`,
    },
    Item: {
      View: "Lihat",
    },
  },
  Mask: {
    Name: "Masker",
    Page: {
      Title: "Preset Karakter Masker",
      SubTitle: (count: number) => `${count} definisi karakter preset`,
      Search: "Cari Masker Karakter",
      Create: "Buat Baru",
    },
    Item: {
      Info: (count: number) => `Berisi ${count} obrolan preset`,
      Chat: "Obrolan",
      View: "Lihat",
      Edit: "Sunting",
      Delete: "Hapus",
      DeleteConfirm: "Konfirmasi penghapusan?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Edit Masker Preset ${readonly ? "(Hanya Baca)" : ""}`,
      Download: "Unduh Preset",
      Clone: "Klon Preset",
    },
    Config: {
      Avatar: "Avatar Karakter",
      Name: "Nama Karakter",
      Sync: {
        Title: "Gunakan Pengaturan Global",
        SubTitle:
          "Apakah obrolan saat ini akan menggunakan pengaturan model global?",
        Confirm:
          "Pengaturan kustom obrolan saat ini akan ditimpa secara otomatis, konfirmasi untuk mengaktifkan pengaturan global?",
      },
      HideContext: {
        Title: "Sembunyikan Obrolan Preset",
        SubTitle:
          "Setelah disembunyikan, obrolan preset tidak akan muncul di antarmuka obrolan",
      },
      Share: {
        Title: "Bagikan Masker Ini",
        SubTitle: "Hasilkan tautan langsung ke masker ini",
        Action: "Salin Tautan",
      },
    
      "Artifacts": {
        "Title": "Aktifkan Artifacts",
        "SubTitle": "Tampilkan halaman HTML dengan Artifacts",
      },
      "CodeFold": {
        "Title": "Aktifkan pelipatan kode",
        "SubTitle": "Lipat blok kode panjang secara otomatis",
      },
    },
  },
  NewChat: {
    Return: "Kembali",
    Skip: "Mulai Sekarang",
    NotShow: "Jangan Tampilkan Lagi",
    ConfirmNoShow:
      "Konfirmasi untuk menonaktifkan? Setelah dinonaktifkan, Anda dapat mengaktifkannya kembali kapan saja di pengaturan.",
    Title: "Pilih Masker",
    SubTitle: "Mulai sekarang, berinteraksi dengan pemikiran di balik masker",
    More: "Lihat Semua",
  },

  URLCommand: {
    Code: "Terdeteksi bahwa tautan sudah mengandung kode akses, apakah akan diisi secara otomatis?",
    Settings:
      "Terdeteksi bahwa tautan mengandung pengaturan preset, apakah akan diisi secara otomatis?",
  },

  UI: {
    Confirm: "Konfirmasi",
    Cancel: "Batal",
    Close: "Tutup",
    Create: "Buat Baru",
    Edit: "Sunting",
    Export: "Ekspor",
    Import: "Impor",
    Sync: "Sinkronkan",
    Config: "Konfigurasi",
  
    "Save": "Simpan",
    "Loading": "Memuat…",
    "Seed": "Benih acak",
    "User": "Pengguna",
    "Assistant": "Asisten",
    "System": "Sistem",
    "Text": "Teks",
    "Image": "Gambar",
    "Standard": "Standar",
    "Vivid": "Cerah",
    "Natural": "Alami",
    "ErrorTitle": "Terjadi kesalahan",
    "ReportError": "Laporkan kesalahan ini",
    "ClearData": "Hapus semua data",
    "AssistantTagline": "Buat asisten AI Anda sendiri.",
    "EmptyPrompt": "Prompt baru",
    "EmptyPromptContent": "Masukkan isi prompt",
    "AllFiles": "Semua berkas",
  
    "Refresh": "Muat ulang",
    "HidePassword": "Sembunyikan kata sandi",
  },
  Exporter: {
    Description: {
      Title: "Hanya pesan setelah menghapus konteks yang akan ditampilkan",
    },
    Model: "Model",
    Messages: "Pesan",
    Topic: "Topik",
    Time: "Waktu",
  },

  "Discovery": {
    "Name": "Jelajahi",
  },
  "Mcp": {
    "Name": "MCP",
    "UI": {
      "Market": "Pasar MCP",
      "PresetLoadFailed": "Gagal memuat server bawaan",
      "InitFailed": "Gagal memuat keadaan awal",
      "ConfigSaved": "Konfigurasi server disimpan",
      "ConfigSaveFailed": "Gagal menyimpan konfigurasi",
      "ToolsFailed": "Gagal memuat alat",
      "Stopped": "Dihentikan",
      "StopFailed": "Gagal menghentikan server",
      "StartFailed": "Gagal memulai server; periksa log",
      "RestartingClients": "Memulai ulang semua klien",
      "RestartFailed": "Gagal memulai ulang klien",
      "Initializing": "Menginisialisasi",
      "NoServers": "Tidak ada server tersedia",
      "OpenRepo": "Buka repositori",
      "Start": "Mulai",
      "Tools": "Alat",
      "Add": "Tambah",
      "RestartAll": "Mulai ulang semua",
      "Search": "Cari server MCP",
      "ConfigureServer": "Konfigurasi server",
      "ServerDetails": "Detail server",
      "NoTools": "Tidak ada alat tersedia",
      "LoadingPresets": "Memuat daftar server bawaan…",
      "ConfiguredServers": "Server terkonfigurasi",
      "UpdatingConfig": "Memperbarui konfigurasi…",
      "CreatingClient": "Membuat klien MCP…",
      "Stopping": "Menghentikan server…",
      "Starting": "Memulai server…",
      "RestartingServers": "Memulai ulang semua server…",
      "ExecutionFailed": "Eksekusi MCP gagal",
    },
  },
  "SdPanel": {
    "Prompt": "Prompt gambar",
    "NegativePrompt": "Prompt negatif",
    "PleaseInput": (name: string) => name + " — Masukkan nilai",
    "AspectRatio": "Rasio aspek",
    "ImageStyle": "Gaya gambar",
    "OutFormat": "Format keluaran",
    "AIModel": "Model",
    "ModelVersion": "Versi model",
    "Submit": "Buat",
    "ParamIsRequired": (name: string) => name + ": Wajib diisi",
    "Styles": {
      "D3Model": "Model 3D",
      "AnalogFilm": "Film analog",
      "Anime": "Animasi Jepang",
      "Cinematic": "Sinematik",
      "ComicBook": "Komik",
      "DigitalArt": "Seni digital",
      "Enhance": "Ditingkatkan",
      "FantasyArt": "Seni fantasi",
      "Isometric": "Isometrik",
      "LineArt": "Gambar garis",
      "LowPoly": "Poligon rendah",
      "ModelingCompound": "Tanah liat",
      "NeonPunk": "Punk neon",
      "Origami": "Lipat kertas",
      "Photographic": "Fotografis",
      "PixelArt": "Seni piksel",
      "TileTexture": "Tekstur ubin",
    },
  },
  "Sd": {
    "SubTitle": (count: number) => "Gambar: " + count,
    "Actions": {
      "Params": "Lihat parameter",
      "Copy": "Salin: Prompt gambar",
      "Delete": "Hapus",
      "Retry": "Coba lagi",
      "ReturnHome": "Kembali ke beranda",
      "History": "Riwayat",
    },
    "EmptyRecord": "Belum ada gambar",
    "Status": {
      "Name": "Status",
      "Success": "Berhasil",
      "Error": "Kesalahan",
      "Wait": "Menunggu",
      "Running": "Berjalan",
    },
    "Danger": {
      "Delete": "Konfirmasi penghapusan?",
    },
    "GenerateParams": "Parameter pembuatan",
    "Detail": "Detail",
  },
  "ApiError": {
    "Timeout": "Waktu permintaan habis. Coba lagi atau periksa alamat di pengaturan lanjutan.",
    "Quota": "Kuota penyedia tidak cukup. Periksa saldo, pembayaran dan batas penggunaan.",
    "AccessCode": "Kode akses situs tidak valid. Periksa kode Anda.",
    "InvalidKey": "API Key tidak valid atau kedaluwarsa. Periksa Key penyedia yang dipilih.",
    "Permission": "Akses ditolak. Periksa izin model dan batasan wilayah penyedia.",
    "Model": "Model atau antarmuka tidak ditemukan. Periksa ID model dan alamat di pengaturan lanjutan.",
    "RateLimit": "Terlalu banyak permintaan atau batas tercapai. Coba nanti dan periksa kuota.",
    "Parameters": "Parameter permintaan tidak kompatibel. Periksa ID model dan parameter di pengaturan lanjutan.",
    "Unavailable": "Penyedia sementara tidak tersedia. Coba lagi nanti.",
    "Empty": "Tidak ada konten valid. Periksa status model dan coba lagi.",
    "Network": "Koneksi jaringan gagal. Periksa jaringan, alamat dan pengaturan CORS pihak ketiga.",
    "Generic": "Permintaan gagal. Periksa API Key, model dan pengaturan antarmuka penyedia.",
  },
};

export default id;
