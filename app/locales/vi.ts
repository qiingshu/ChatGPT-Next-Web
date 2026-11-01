import type { LocaleType } from "./index";
import { getClientConfig } from "../config/client";
import { SAAS_CHAT_UTM_URL } from "@/app/constant";
const isApp = !!getClientConfig()?.isApp;

const vi: LocaleType = {
  WIP: "Sắp ra mắt...",
  Error: {
    Unauthorized: isApp
      ? `😆 Cuộc trò chuyện gặp một số vấn đề, đừng lo lắng:
    \\ 1️⃣ Nếu bạn muốn bắt đầu mà không cần cấu hình, [nhấp vào đây để bắt đầu trò chuyện ngay lập tức 🚀](${SAAS_CHAT_UTM_URL})
    \\ 2️⃣ Nếu bạn muốn sử dụng tài nguyên OpenAI của riêng mình, hãy nhấp [vào đây](/#/settings) để thay đổi cài đặt ⚙️`
      : `😆 Cuộc trò chuyện gặp một số vấn đề, đừng lo lắng:
    \ 1️⃣ Nếu bạn muốn bắt đầu mà không cần cấu hình, [nhấp vào đây để bắt đầu trò chuyện ngay lập tức 🚀](${SAAS_CHAT_UTM_URL})
    \ 2️⃣ Nếu bạn đang sử dụng phiên bản triển khai riêng, hãy nhấp [vào đây](/#/auth) để nhập khóa truy cập 🔑
    \ 3️⃣ Nếu bạn muốn sử dụng tài nguyên OpenAI của riêng mình, hãy nhấp [vào đây](/#/settings) để thay đổi cài đặt ⚙️
 `,
  },
  Auth: {
    Title: "Cần mật khẩu",
    Tips: "Quản trị viên đã bật xác thực mật khẩu, vui lòng nhập mã truy cập ở dưới",
    SubTips: "Hoặc nhập khóa API OpenAI hoặc Google của bạn",
    Input: "Nhập mã truy cập tại đây",
    Confirm: "Xác nhận",
    Later: "Để sau",
    Return: "Trở lại",
    SaasTips: "Cấu hình quá phức tạp, tôi muốn sử dụng ngay lập tức",
    TopTips:
      "🥳 Ưu đãi ra mắt NextChat AI, mở khóa OpenAI o1, GPT-4o, Claude-3.5 và các mô hình lớn mới nhất ngay bây giờ",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} cuộc trò chuyện`,
  },
  Chat: {
    SubTitle: (count: number) => `Tổng cộng ${count} cuộc trò chuyện`,
    EditMessage: {
      Title: "Chỉnh sửa ghi chép tin nhắn",
      Topic: {
        Title: "Chủ đề trò chuyện",
        SubTitle: "Thay đổi chủ đề trò chuyện hiện tại",
      },
    },
    Actions: {
      ChatList: "Xem danh sách tin nhắn",
      CompressedHistory: "Xem lịch sử Prompt đã nén",
      Export: "Xuất khẩu ghi chép trò chuyện",
      Copy: "Sao chép",
      Stop: "Dừng lại",
      Retry: "Thử lại",
      Pin: "Ghim",
      PinToastContent: "Đã ghim 1 cuộc trò chuyện vào lời nhắc đã đặt sẵn",
      PinToastAction: "Xem",
      Delete: "Xóa",
      Edit: "Chỉnh sửa",
      RefreshTitle: "Làm mới tiêu đề",
      RefreshToast: "Đã gửi yêu cầu làm mới tiêu đề",
    
      "FullScreen": "Toàn màn hình",
      "Speech": "Đọc",
      "StopSpeech": "Dừng lại",
    },
    Commands: {
      new: "Tạo cuộc trò chuyện mới",
      newm: "Tạo cuộc trò chuyện từ mặt nạ",
      next: "Cuộc trò chuyện tiếp theo",
      prev: "Cuộc trò chuyện trước đó",
      clear: "Xóa ngữ cảnh",
      del: "Xóa cuộc trò chuyện",
    
      "fork": "Sao chép cuộc trò chuyện",
    },
    InputActions: {
      Stop: "Dừng phản hồi",
      ToBottom: "Cuộn đến tin nhắn mới nhất",
      Theme: {
        auto: "Chủ đề tự động",
        light: "Chế độ sáng",
        dark: "Chế độ tối",
      },
      Prompt: "Lệnh tắt",
      Masks: "Tất cả mặt nạ",
      Clear: "Xóa cuộc trò chuyện",
      Settings: "Cài đặt trò chuyện",
      UploadImage: "Tải lên hình ảnh",
    },
    Rename: "Đổi tên cuộc trò chuyện",
    Typing: "Đang nhập…",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} gửi`;
      if (submitKey === "Enter") {
        inputHints += "，Shift + Enter xuống dòng";
      }
      return inputHints + "，/ kích hoạt hoàn chỉnh, : kích hoạt lệnh";
    },
    Send: "Gửi",
    Config: {
      Reset: "Xóa trí nhớ",
      SaveAs: "Lưu dưới dạng mặt nạ",
    },
    IsContext: "Lời nhắc đã đặt sẵn",
  
    "StartSpeak": "Bắt đầu nói",
    "StopSpeak": "Dừng lại",
    "ShortcutKey": {
      "Title": "Phím tắt",
      "newChat": "Mở cuộc trò chuyện mới",
      "focusInput": "Đặt con trỏ vào ô nhập",
      "copyLastMessage": "Sao chép phản hồi cuối",
      "copyLastCode": "Sao chép khối mã cuối",
      "showShortcutKey": "Hiện phím tắt",
      "clearContext": "Xóa cuộc trò chuyện",
    },
  },
  Export: {
    Title: "Chia sẻ ghi chép trò chuyện",
    Copy: "Sao chép tất cả",
    Download: "Tải xuống tệp",
    Share: "Chia sẻ lên ShareGPT",
    MessageFromYou: "Người dùng",
    MessageFromChatGPT: "ChatGPT",
    Format: {
      Title: "Định dạng xuất khẩu",
      SubTitle: "Có thể xuất khẩu dưới dạng văn bản Markdown hoặc hình ảnh PNG",
    },
    IncludeContext: {
      Title: "Bao gồm ngữ cảnh mặt nạ",
      SubTitle: "Có hiển thị ngữ cảnh mặt nạ trong tin nhắn không",
    },
    Steps: {
      Select: "Chọn",
      Preview: "Xem trước",
    },
    Image: {
      Toast: "Đang tạo ảnh chụp màn hình",
      Modal: "Nhấn giữ hoặc nhấp chuột phải để lưu hình ảnh",
    },
  
    "Artifacts": {
      "Title": "Chia sẻ Artifacts",
      "Error": "Chia sẻ Artifacts — Lỗi",
    },
  },
  Select: {
    Search: "Tìm kiếm tin nhắn",
    All: "Chọn tất cả",
    Latest: "Một vài tin nhắn gần đây",
    Clear: "Xóa lựa chọn",
  },
  Memory: {
    Title: "Tóm tắt lịch sử",
    EmptyContent: "Nội dung trò chuyện quá ngắn, không cần tóm tắt",
    Send: "Tự động nén ghi chép trò chuyện và gửi dưới dạng ngữ cảnh",
    Copy: "Sao chép tóm tắt",
    Reset: "[unused]",
    ResetConfirm: "Xác nhận xóa tóm tắt lịch sử?",
  },
  Home: {
    NewChat: "Cuộc trò chuyện mới",
    DeleteChat: "Xác nhận xóa cuộc trò chuyện đã chọn?",
    DeleteToast: "Đã xóa cuộc trò chuyện",
    Revert: "Hoàn tác",
  },
  Settings: {
    Title: "Cài đặt",
    SubTitle: "Tất cả các tùy chọn cài đặt",

    Danger: {
      Reset: {
        Title: "Đặt lại tất cả cài đặt",
        SubTitle: "Đặt lại tất cả các mục cài đặt về giá trị mặc định",
        Action: "Đặt lại ngay",
        Confirm: "Xác nhận đặt lại tất cả cài đặt?",
      },
      Clear: {
        Title: "Xóa tất cả dữ liệu",
        SubTitle: "Xóa tất cả các cuộc trò chuyện và dữ liệu cài đặt",
        Action: "Xóa ngay",
        Confirm: "Xác nhận xóa tất cả cuộc trò chuyện và dữ liệu cài đặt?",
      },
    },
    Lang: {
      Name: "Ngôn ngữ", // CHÚ Ý: nếu bạn muốn thêm một bản dịch mới, vui lòng không dịch giá trị này, để nó là `Language`
      All: "Tất cả ngôn ngữ",
    },
    Avatar: "Hình đại diện",
    FontSize: {
      Title: "Kích thước chữ",
      SubTitle: "Kích thước chữ của nội dung trò chuyện",
    },
    FontFamily: {
      Title: "Phông Chữ Trò Chuyện",
      SubTitle:
        "Phông chữ của nội dung trò chuyện, để trống để áp dụng phông chữ mặc định toàn cầu",
      Placeholder: "Tên Phông Chữ",
    },
    InjectSystemPrompts: {
      Title: "Tiêm thông báo hệ thống",
      SubTitle:
        "Buộc thêm một thông báo hệ thống giả ChatGPT vào đầu danh sách tin nhắn mỗi lần yêu cầu",
    },
    InputTemplate: {
      Title: "Xử lý đầu vào của người dùng",
      SubTitle: "Tin nhắn mới nhất của người dùng sẽ được điền vào mẫu này",
    },

    Update: {
      Version: (x: string) => `Phiên bản hiện tại: ${x}`,
      IsLatest: "Đã là phiên bản mới nhất",
      CheckUpdate: "Kiểm tra cập nhật",
      IsChecking: "Đang kiểm tra cập nhật...",
      FoundUpdate: (x: string) => `Tìm thấy phiên bản mới: ${x}`,
      GoToUpdate: "Đi đến cập nhật",
    
      "Success": "Cập nhật thành công",
      "Failed": "Cập nhật thất bại",
    },
    SendKey: "Phím gửi",
    Theme: "Giao diện",
    TightBorder: "Chế độ không viền",
    SendPreviewBubble: {
      Title: "Bong bóng xem trước",
      SubTitle: "Xem nội dung Markdown trong bong bóng xem trước",
    },
    AutoGenerateTitle: {
      Title: "Tự động tạo tiêu đề",
      SubTitle: "Tạo tiêu đề phù hợp dựa trên nội dung cuộc trò chuyện",
    },
    Sync: {
      CloudState: "Dữ liệu đám mây",
      NotSyncYet: "Chưa thực hiện đồng bộ",
      Success: "Đồng bộ thành công",
      Fail: "Đồng bộ thất bại",

      Config: {
        Modal: {
          Title: "Cấu hình đồng bộ đám mây",
          Check: "Kiểm tra khả dụng",
        },
        SyncType: {
          Title: "Loại đồng bộ",
          SubTitle: "Chọn máy chủ đồng bộ ưa thích",
        },
        Proxy: {
          Title: "Kích hoạt proxy",
          SubTitle:
            "Khi đồng bộ qua trình duyệt, cần kích hoạt proxy để tránh hạn chế ngang miền",
        },
        ProxyUrl: {
          Title: "Địa chỉ proxy",
          SubTitle: "Chỉ áp dụng cho proxy ngang miền của dự án này",
        },

        WebDav: {
          Endpoint: "Địa chỉ WebDAV",
          UserName: "Tên người dùng",
          Password: "Mật khẩu",
        },

        UpStash: {
          Endpoint: "URL UpStash Redis REST",
          UserName: "Tên sao lưu",
          Password: "Token UpStash Redis REST",
        },
      },

      LocalState: "Dữ liệu cục bộ",
      Overview: (overview: any) => {
        return `${overview.chat} cuộc trò chuyện, ${overview.message} tin nhắn, ${overview.prompt} lệnh, ${overview.mask} mặt nạ`;
      },
      ImportFailed: "Nhập không thành công",
    },
    Mask: {
      Splash: {
        Title: "Trang khởi động mặt nạ",
        SubTitle: "Hiển thị trang khởi động mặt nạ khi tạo cuộc trò chuyện mới",
      },
      Builtin: {
        Title: "Ẩn mặt nạ tích hợp",
        SubTitle: "Ẩn mặt nạ tích hợp trong danh sách tất cả mặt nạ",
      },
    },
    Prompt: {
      Disable: {
        Title: "Vô hiệu hóa tự động hoàn thành lệnh",
        SubTitle: "Nhập / ở đầu ô nhập để kích hoạt tự động hoàn thành",
      },
      List: "Danh sách lệnh tùy chỉnh",
      ListCount: (builtin: number, custom: number) =>
        `Tích hợp ${builtin} mục, người dùng định nghĩa ${custom} mục`,
      Edit: "Chỉnh sửa",
      Modal: {
        Title: "Danh sách lệnh",
        Add: "Tạo mới",
        Search: "Tìm kiếm lệnh",
      },
      EditModal: {
        Title: "Chỉnh sửa lệnh",
      },
    },
    HistoryCount: {
      Title: "Số tin nhắn lịch sử kèm theo",
      SubTitle: "Số tin nhắn lịch sử kèm theo mỗi yêu cầu",
    },
    CompressThreshold: {
      Title: "Ngưỡng nén tin nhắn lịch sử",
      SubTitle:
        "Khi tin nhắn lịch sử chưa nén vượt quá giá trị này, sẽ thực hiện nén",
    },

    Usage: {
      Title: "Tra cứu số dư",
      SubTitle(used: any, total: any) {
        return `Đã sử dụng trong tháng: $${used}, Tổng số đăng ký: $${total}`;
      },
      IsChecking: "Đang kiểm tra…",
      Check: "Kiểm tra lại",
      NoAccess: "Nhập khóa API hoặc mật khẩu truy cập để xem số dư",
    },

    Access: {
      SaasStart: {
        Title: "Sử dụng NextChat AI",
        Label: "(Giải pháp tiết kiệm chi phí nhất)",
        SubTitle:
          "Được NextChat chính thức duy trì, sẵn sàng sử dụng mà không cần cấu hình, hỗ trợ các mô hình lớn mới nhất như OpenAI o1, GPT-4o và Claude-3.5",
        ChatNow: "Chat ngay",
      },

      AccessCode: {
        Title: "Mật khẩu truy cập",
        SubTitle: "Quản trị viên đã bật truy cập mã hóa",
        Placeholder: "Nhập mật khẩu truy cập",
      },
      CustomEndpoint: {
        Title: "Giao diện tùy chỉnh",
        SubTitle: "Có sử dụng dịch vụ Azure hoặc OpenAI tùy chỉnh không",
      },
      Provider: {
        Title: "Nhà cung cấp dịch vụ mô hình",
        SubTitle: "Chuyển đổi giữa các nhà cung cấp khác nhau",
      },
      OpenAI: {
        ApiKey: {
          Title: "OpenAI API Key",
          SubTitle:
            "Sử dụng khóa OpenAI tùy chỉnh để vượt qua hạn chế truy cập mật khẩu",
          Placeholder: "API Key OpenAI",
        },

        Endpoint: {
          Title: "Địa chỉ giao diện",
          SubTitle: "Ngoài địa chỉ mặc định, phải bao gồm http(s)://",
        },
      },
      Azure: {
        ApiKey: {
          Title: "Azure API Key",
          SubTitle:
            "Sử dụng khóa Azure tùy chỉnh để vượt qua hạn chế truy cập mật khẩu",
          Placeholder: "API Key Azure",
        },

        Endpoint: {
          Title: "Địa chỉ giao diện",
          SubTitle: "Ví dụ:",
        },

        ApiVerion: {
          Title: "Phiên bản giao diện (phiên bản API azure)",
          SubTitle: "Chọn phiên bản phần cụ thể",
        },
      },
      Anthropic: {
        ApiKey: {
          Title: "Anthropic API Key",
          SubTitle:
            "Sử dụng khóa Anthropic tùy chỉnh để vượt qua hạn chế truy cập mật khẩu",
          Placeholder: "API Key Anthropic",
        },

        Endpoint: {
          Title: "Địa chỉ giao diện",
          SubTitle: "Ví dụ:",
        },

        ApiVerion: {
          Title: "Phiên bản giao diện (phiên bản API claude)",
          SubTitle: "Chọn một phiên bản API cụ thể để nhập",
        },
      },
      Google: {
        ApiKey: {
          Title: "Google API Key",
          SubTitle: "Lấy API Key từ Google AI",
          Placeholder: "Nhập API Key Google AI Studio của bạn",
        },

        Endpoint: {
          Title: "Địa chỉ cuối",
          SubTitle: "Ví dụ:",
        },

        ApiVersion: {
          Title: "Phiên bản API (chỉ áp dụng cho gemini-pro)",
          SubTitle: "Chọn một phiên bản API cụ thể",
        },
        GoogleSafetySettings: {
          Title: "Mức độ lọc an toàn Google",
          SubTitle: "Cài đặt mức độ lọc nội dung",
        },
      },
      Baidu: {
        ApiKey: {
          Title: "Baidu API Key",
          SubTitle: "Sử dụng khóa Baidu API tùy chỉnh",
          Placeholder: "API Key Baidu",
        },
        SecretKey: {
          Title: "Secret Key",
          SubTitle: "Sử dụng khóa bí mật Baidu tùy chỉnh",
          Placeholder: "Khóa bí mật Baidu",
        },
        Endpoint: {
          Title: "Địa chỉ giao diện",
          SubTitle: "Không hỗ trợ tùy chỉnh, hãy cấu hình trong .env",
        },
      },
      ByteDance: {
        ApiKey: {
          Title: "ByteDance API Key",
          SubTitle: "Sử dụng khóa ByteDance API tùy chỉnh",
          Placeholder: "API Key ByteDance",
        },
        Endpoint: {
          Title: "Địa chỉ giao diện",
          SubTitle: "Ví dụ:",
        },
      },
      Alibaba: {
        ApiKey: {
          Title: "Alibaba API Key",
          SubTitle: "Sử dụng khóa Alibaba Cloud API tùy chỉnh",
          Placeholder: "API Key Alibaba Cloud",
        },
        Endpoint: {
          Title: "Địa chỉ giao diện",
          SubTitle: "Ví dụ:",
        },
      },
      CustomModel: {
        Title: "Tên mô hình tùy chỉnh",
        SubTitle:
          "Thêm tùy chọn mô hình tùy chỉnh, sử dụng dấu phẩy để phân cách",
      },
    
      "Tencent": {
        "ApiKey": {
          "Title": "Tencent API Key",
          "SubTitle": "Dùng API Key tùy chỉnh",
          "Placeholder": "Tencent API Key",
        },
        "SecretKey": {
          "Title": "Tencent Secret Key",
          "SubTitle": "Dùng thông tin xác thực tùy chỉnh — Secret Key",
          "Placeholder": "Tencent Secret Key",
        },
        "Endpoint": {
          "Title": "Địa chỉ giao diện",
          "SubTitle": "Cấu hình giá trị này trong .env",
        },
      },
      "Moonshot": {
        "ApiKey": {
          "Title": "Moonshot API Key",
          "SubTitle": "Dùng API Key tùy chỉnh",
          "Placeholder": "Moonshot API Key",
        },
        "Endpoint": {
          "Title": "Địa chỉ giao diện",
          "SubTitle": "Ví dụ: ",
        },
      },
      "DeepSeek": {
        "ApiKey": {
          "Title": "DeepSeek API Key",
          "SubTitle": "Dùng API Key tùy chỉnh",
          "Placeholder": "DeepSeek API Key",
        },
        "Endpoint": {
          "Title": "Địa chỉ giao diện",
          "SubTitle": "Ví dụ: ",
        },
      },
      "XAI": {
        "ApiKey": {
          "Title": "XAI API Key",
          "SubTitle": "Dùng API Key tùy chỉnh",
          "Placeholder": "XAI API Key",
        },
        "Endpoint": {
          "Title": "Địa chỉ giao diện",
          "SubTitle": "Ví dụ: ",
        },
      },
      "ChatGLM": {
        "ApiKey": {
          "Title": "ChatGLM API Key",
          "SubTitle": "Dùng API Key tùy chỉnh",
          "Placeholder": "ChatGLM API Key",
        },
        "Endpoint": {
          "Title": "Địa chỉ giao diện",
          "SubTitle": "Ví dụ: ",
        },
      },
      "SiliconFlow": {
        "ApiKey": {
          "Title": "SiliconFlow API Key",
          "SubTitle": "Dùng API Key tùy chỉnh",
          "Placeholder": "SiliconFlow API Key",
        },
        "Endpoint": {
          "Title": "Địa chỉ giao diện",
          "SubTitle": "Ví dụ: ",
        },
      },
      "Stability": {
        "ApiKey": {
          "Title": "Stability API Key",
          "SubTitle": "Dùng API Key tùy chỉnh",
          "Placeholder": "Stability API Key",
        },
        "Endpoint": {
          "Title": "Địa chỉ giao diện",
          "SubTitle": "Ví dụ: ",
        },
      },
      "Iflytek": {
        "ApiKey": {
          "Title": "Iflytek API Key",
          "SubTitle": "Dùng API Key tùy chỉnh",
          "Placeholder": "Iflytek API Key",
        },
        "ApiSecret": {
          "Title": "Iflytek API Secret",
          "SubTitle": "Dùng thông tin xác thực tùy chỉnh — API Secret",
          "Placeholder": "Iflytek API Secret",
        },
        "Endpoint": {
          "Title": "Địa chỉ giao diện",
          "SubTitle": "Ví dụ: ",
        },
      },
    },

    Model: "Mô hình (model)",
    CompressModel: {
      Title: "Mô hình nén",
      SubTitle: "Mô hình được sử dụng để nén lịch sử",
    },
    Temperature: {
      Title: "Độ ngẫu nhiên (temperature)",
      SubTitle: "Giá trị càng lớn, câu trả lời càng ngẫu nhiên",
    },
    TopP: {
      Title: "Lấy mẫu hạt nhân (top_p)",
      SubTitle: "Tương tự như độ ngẫu nhiên, nhưng không thay đổi cùng một lúc",
    },
    MaxTokens: {
      Title: "Giới hạn phản hồi (max_tokens)",
      SubTitle: "Số Token tối đa cho mỗi tương tác",
    },
    PresencePenalty: {
      Title: "Độ mới của chủ đề (presence_penalty)",
      SubTitle:
        "Giá trị càng lớn, khả năng mở rộng đến các chủ đề mới càng cao",
    },
    FrequencyPenalty: {
      Title: "Hình phạt tần suất (frequency_penalty)",
      SubTitle: "Giá trị càng lớn, khả năng giảm từ ngữ lặp lại càng cao",
    },
  
    "ShowPassword": "Hiện mật khẩu",
    "LocalizationInfo": {
      "Edition": "NextChat bản tùy chỉnh",
      "Timeout": "Kiểm tra kết nối quá thời gian 30 giây. Hãy kiểm tra mạng và địa chỉ API.",
      "Success": "Kết nối thành công",
      "NoResponse": "Nhà cung cấp không trả về phản hồi hợp lệ. Hãy kiểm tra mô hình và giao diện.",
      "Upstream": "Phiên bản gốc nền tảng",
      "Details": "Thông tin phiên bản chi tiết",
      "Security": "Mã bảo trì bảo mật",
      "Commit": "Commit bản dựng",
      "Official": "Phiên bản chính thức tham khảo",
      "Unavailable": "Chưa có",
      "Note": "Bao gồm các bản sửa được chọn lọc, không phải toàn bộ bản chính thức v2.16.1. Thông tin chính thức chỉ để tham khảo.",
    },
    "ProviderSetup": {
      "ModelIdPlaceholder": "ID mô hình@nhà cung cấp",
      "Provider": "Nhà cung cấp",
      "ProviderHelp": "Chọn nhà cung cấp và nhập API Key để dùng mô hình mặc định",
      "ProviderKeyPlaceholder": "Nhập API Key của nhà cung cấp này",
      "CurrentModel": "Mô hình trò chuyện hiện tại",
      "DefaultModel": "Mô hình mặc định",
      "ModelHelp": "Điều chỉnh giao diện và mô hình tùy chỉnh trong cài đặt nâng cao",
      "TestModel": "Kiểm tra mô hình hiện tại",
      "TestHelp": "Gửi yêu cầu ngắn có thể phát sinh phí API; không ghi lịch sử trò chuyện",
      "TestConnection": "Kiểm tra kết nối",
      "Testing": "Đang kiểm tra…",
      "Advanced": "Cài đặt nâng cao",
      "OfficialURL": "Địa chỉ chính thức",
      "DefaultRoute": "Mặc định dùng tuyến của trang này",
    },
    "TTS": {
      "Enable": {
        "Title": "Bật TTS",
        "SubTitle": "Bật chuyển văn bản thành giọng nói",
      },
      "Autoplay": {
        "Title": "Bật tự động phát",
        "SubTitle": "Tự tạo và phát giọng nói; cần bật TTS trước",
      },
      "Model": "Mô hình (model)",
      "Engine": "Bộ máy TTS",
      "Voice": {
        "Title": "Giọng nói",
        "SubTitle": "Giọng dùng để tạo âm thanh",
      },
      "Speed": {
        "Title": "Tốc độ",
        "SubTitle": "Tốc độ âm thanh được tạo",
      },
    },
    "Realtime": {
      "Enable": {
        "Title": "Trò chuyện thời gian thực",
        "SubTitle": "Bật trò chuyện thời gian thực",
      },
      "Provider": {
        "Title": "Nhà cung cấp mô hình",
        "SubTitle": "Chuyển nhà cung cấp",
      },
      "Model": {
        "Title": "Mô hình (model)",
        "SubTitle": "Chọn mô hình",
      },
      "ApiKey": {
        "Title": "API Key",
        "SubTitle": "API Key",
        "Placeholder": "API Key",
      },
      "Azure": {
        "Endpoint": {
          "Title": "Địa chỉ giao diện",
          "SubTitle": "Địa chỉ giao diện",
        },
        "Deployment": {
          "Title": "Tên triển khai",
          "SubTitle": "Tên triển khai",
        },
      },
      "Temperature": {
        "Title": "Độ ngẫu nhiên (temperature)",
        "SubTitle": "Giá trị càng lớn, câu trả lời càng ngẫu nhiên",
      },
    },
    "SafetyLabels": {
      "BLOCK_NONE": "Không chặn",
      "BLOCK_ONLY_HIGH": "Chỉ mức cao",
      "BLOCK_MEDIUM_AND_ABOVE": "Từ mức trung bình",
      "BLOCK_LOW_AND_ABOVE": "Từ mức thấp",
    },
  },
  Store: {
    DefaultTopic: "Trò chuyện mới",
    BotHello: "Có thể giúp gì cho bạn?",
    Error: "Đã xảy ra lỗi, vui lòng thử lại sau",
    Prompt: {
      History: (content: string) =>
        "Đây là tóm tắt cuộc trò chuyện lịch sử như tiền đề: " + content,
      Topic:
        'Sử dụng bốn đến năm từ để trả lại chủ đề tóm tắt của câu này, không giải thích, không dấu câu, không từ cảm thán, không văn bản thừa, không in đậm, nếu không có chủ đề, hãy trả lại "Tán gẫu"',
      Summarize:
        "Tóm tắt nội dung cuộc trò chuyện một cách ngắn gọn, dùng làm gợi ý ngữ cảnh cho các lần sau, giữ trong vòng 200 từ",
    },
  },
  Copy: {
    Success: "Đã sao chép vào clipboard",
    Failed: "Sao chép thất bại, vui lòng cấp quyền clipboard",
  },
  Download: {
    Success: "Nội dung đã được tải xuống thư mục của bạn.",
    Failed: "Tải xuống thất bại.",
  },
  Context: {
    Toast: (x: any) => `Bao gồm ${x} lệnh gợi ý đã định sẵn`,
    Edit: "Cài đặt cuộc trò chuyện hiện tại",
    Add: "Thêm một cuộc trò chuyện",
    Clear: "Ngữ cảnh đã được xóa",
    Revert: "Khôi phục ngữ cảnh",
  },
  Plugin: {
    Name: "Tiện ích",
  
    "Accessibility": {
      "Create": "Tạo mới: Tiện ích",
      "Edit": "Chỉnh sửa: Tiện ích",
      "Save": "Lưu: Tiện ích",
      "SchemaUrl": "Tiện ích Schema URL",
      "LoadSchema": "Tải từ URL: Tiện ích Schema",
      "Schema": "Tiện ích Schema",
    },
    "Page": {
      "Title": "Tiện ích",
      "SubTitle": (count: number) => "Tiện ích: " + count,
      "Search": "Tìm kiếm tin nhắn — Tiện ích",
      "Create": "Tạo mới",
      "Find": "Tìm tiện ích trên GitHub: ",
    },
    "Item": {
      "Info": (count: number) => "Phương thức: " + count,
      "View": "Xem",
      "Edit": "Chỉnh sửa",
      "Delete": "Xóa",
      "DeleteConfirm": "Xác nhận xóa?",
    },
    "Auth": {
      "None": "Không xác thực",
      "Basic": "Basic",
      "Bearer": "Bearer",
      "Custom": "Tùy chỉnh",
      "CustomHeader": "Tên tham số",
      "Token": "Token",
      "Proxy": "Dùng proxy",
      "ProxyDescription": "Dùng proxy để tránh giới hạn CORS",
      "Location": "Vị trí",
      "LocationHeader": "Header",
      "LocationQuery": "Query",
      "LocationBody": "Body",
    },
    "EditModal": {
      "Title": (readonly: boolean) => "Chỉnh sửa: Tiện ích" + (readonly ? " (Chỉ đọc)" : ""),
      "Download": "Tải xuống",
      "Auth": "Kiểu xác thực",
      "Content": "OpenAPI Schema",
      "Load": "Tải từ URL",
      "Method": "Phương thức",
      "Error": "OpenAPI Schema không hợp lệ",
    },
  },
  FineTuned: {
    Sysmessage: "Bạn là một trợ lý",
  },
  SearchChat: {
    Name: "Tìm kiếm",
    Page: {
      Title: "Tìm kiếm lịch sử trò chuyện",
      Search: "Nhập từ khóa tìm kiếm",
      NoResult: "Không tìm thấy kết quả",
      NoData: "Không có dữ liệu",
      Loading: "Đang tải",

      SubTitle: (count: number) => `Tìm thấy ${count} kết quả`,
    },
    Item: {
      View: "Xem",
    },
  },
  Mask: {
    Name: "Mặt nạ",
    Page: {
      Title: "Mặt nạ vai trò đã định sẵn",
      SubTitle: (count: number) => `${count} định nghĩa vai trò đã định sẵn`,
      Search: "Tìm kiếm mặt nạ vai trò",
      Create: "Tạo mới",
    },
    Item: {
      Info: (count: number) => `Bao gồm ${count} cuộc trò chuyện đã định sẵn`,
      Chat: "Trò chuyện",
      View: "Xem",
      Edit: "Chỉnh sửa",
      Delete: "Xóa",
      DeleteConfirm: "Xác nhận xóa?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Chỉnh sửa mặt nạ định sẵn ${readonly ? "(chỉ đọc)" : ""}`,
      Download: "Tải xuống mặt nạ",
      Clone: "Nhân bản mặt nạ",
    },
    Config: {
      Avatar: "Hình đại diện vai trò",
      Name: "Tên vai trò",
      Sync: {
        Title: "Sử dụng cài đặt toàn cục",
        SubTitle:
          "Cuộc trò chuyện hiện tại có sử dụng cài đặt mô hình toàn cục không",
        Confirm:
          "Cài đặt tùy chỉnh của cuộc trò chuyện hiện tại sẽ bị ghi đè tự động, xác nhận bật cài đặt toàn cục?",
      },
      HideContext: {
        Title: "Ẩn cuộc trò chuyện đã định sẵn",
        SubTitle:
          "Sau khi ẩn, cuộc trò chuyện đã định sẵn sẽ không xuất hiện trong giao diện trò chuyện",
      },
      Share: {
        Title: "Chia sẻ mặt nạ này",
        SubTitle: "Tạo liên kết trực tiếp đến mặt nạ này",
        Action: "Sao chép liên kết",
      },
    
      "Artifacts": {
        "Title": "Bật Artifacts",
        "SubTitle": "Hiển thị trang HTML bằng Artifacts",
      },
      "CodeFold": {
        "Title": "Bật thu gọn mã",
        "SubTitle": "Tự động thu gọn khối mã dài",
      },
    },
  },
  NewChat: {
    Return: "Trở lại",
    Skip: "Bắt đầu ngay",
    NotShow: "Không hiển thị nữa",
    ConfirmNoShow:
      "Xác nhận vô hiệu hóa? Sau khi vô hiệu hóa, bạn có thể bật lại bất cứ lúc nào trong cài đặt.",
    Title: "Chọn một mặt nạ",
    SubTitle: "Bắt đầu ngay, va chạm với suy nghĩ của linh hồn đứng sau mặt nạ",
    More: "Xem tất cả",
  },

  URLCommand: {
    Code: "Phát hiện mã truy cập trong liên kết, có tự động điền không?",
    Settings:
      "Phát hiện cài đặt định sẵn trong liên kết, có tự động điền không?",
  },

  UI: {
    Confirm: "Xác nhận",
    Cancel: "Hủy",
    Close: "Đóng",
    Create: "Tạo mới",
    Edit: "Chỉnh sửa",
    Export: "Xuất",
    Import: "Nhập",
    Sync: "Đồng bộ",
    Config: "Cấu hình",
  
    "Save": "Lưu",
    "Loading": "Đang tải…",
    "Seed": "Hạt giống ngẫu nhiên",
    "User": "Người dùng",
    "Assistant": "Trợ lý",
    "System": "Hệ thống",
    "Text": "Văn bản",
    "Image": "Hình ảnh",
    "Standard": "Tiêu chuẩn",
    "Vivid": "Sống động",
    "Natural": "Tự nhiên",
    "ErrorTitle": "Đã xảy ra lỗi",
    "ReportError": "Báo cáo lỗi này",
    "ClearData": "Xóa tất cả dữ liệu",
    "AssistantTagline": "Xây dựng trợ lý AI của riêng bạn.",
    "EmptyPrompt": "Lời nhắc mới",
    "EmptyPromptContent": "Nhập nội dung lời nhắc",
    "AllFiles": "Tất cả tệp",
  
    "Refresh": "Tải lại",
    "HidePassword": "Ẩn mật khẩu",
  },
  Exporter: {
    Description: {
      Title: "Chỉ tin nhắn sau khi xóa ngữ cảnh mới được hiển thị",
    },
    Model: "Mô hình",
    Messages: "Tin nhắn",
    Topic: "Chủ đề",
    Time: "Thời gian",
  },

  "Discovery": {
    "Name": "Khám phá",
  },
  "Mcp": {
    "Name": "MCP",
    "UI": {
      "Market": "Chợ MCP",
      "PresetLoadFailed": "Không tải được máy chủ thiết lập sẵn",
      "InitFailed": "Không tải được trạng thái ban đầu",
      "ConfigSaved": "Đã lưu cấu hình máy chủ",
      "ConfigSaveFailed": "Không lưu được cấu hình",
      "ToolsFailed": "Không tải được công cụ",
      "Stopped": "Đã dừng",
      "StopFailed": "Không dừng được máy chủ",
      "StartFailed": "Không khởi động được máy chủ; hãy kiểm tra nhật ký",
      "RestartingClients": "Đang khởi động lại mọi máy khách",
      "RestartFailed": "Không khởi động lại được máy khách",
      "Initializing": "Đang khởi tạo",
      "NoServers": "Không có máy chủ khả dụng",
      "OpenRepo": "Mở kho mã",
      "Start": "Khởi động",
      "Tools": "Công cụ",
      "Add": "Thêm",
      "RestartAll": "Khởi động lại tất cả",
      "Search": "Tìm máy chủ MCP",
      "ConfigureServer": "Cấu hình máy chủ",
      "ServerDetails": "Chi tiết máy chủ",
      "NoTools": "Không có công cụ khả dụng",
      "LoadingPresets": "Đang tải danh sách máy chủ thiết lập sẵn…",
      "ConfiguredServers": "Máy chủ đã cấu hình",
      "UpdatingConfig": "Đang cập nhật cấu hình…",
      "CreatingClient": "Đang tạo máy khách MCP…",
      "Stopping": "Đang dừng máy chủ…",
      "Starting": "Đang khởi động máy chủ…",
      "RestartingServers": "Đang khởi động lại mọi máy chủ…",
      "ExecutionFailed": "Thực thi MCP thất bại",
    },
  },
  "SdPanel": {
    "Prompt": "Lời nhắc hình ảnh",
    "NegativePrompt": "Lời nhắc phủ định",
    "PleaseInput": (name: string) => name + " — Nhập giá trị",
    "AspectRatio": "Tỷ lệ khung hình",
    "ImageStyle": "Phong cách hình ảnh",
    "OutFormat": "Định dạng đầu ra",
    "AIModel": "Mô hình (model)",
    "ModelVersion": "Phiên bản mô hình",
    "Submit": "Tạo",
    "ParamIsRequired": (name: string) => name + ": Bắt buộc",
    "Styles": {
      "D3Model": "Mô hình 3D",
      "AnalogFilm": "Phim nhựa",
      "Anime": "Hoạt hình Nhật",
      "Cinematic": "Điện ảnh",
      "ComicBook": "Truyện tranh",
      "DigitalArt": "Nghệ thuật số",
      "Enhance": "Tăng cường",
      "FantasyArt": "Nghệ thuật kỳ ảo",
      "Isometric": "Đẳng cự",
      "LineArt": "Nét vẽ",
      "LowPoly": "Đa giác thấp",
      "ModelingCompound": "Đất nặn",
      "NeonPunk": "Punk neon",
      "Origami": "Gấp giấy",
      "Photographic": "Nhiếp ảnh",
      "PixelArt": "Nghệ thuật điểm ảnh",
      "TileTexture": "Họa tiết lát",
    },
  },
  "Sd": {
    "SubTitle": (count: number) => "Hình ảnh: " + count,
    "Actions": {
      "Params": "Xem tham số",
      "Copy": "Sao chép: Lời nhắc hình ảnh",
      "Delete": "Xóa",
      "Retry": "Thử lại",
      "ReturnHome": "Về trang chủ",
      "History": "Lịch sử",
    },
    "EmptyRecord": "Chưa có hình ảnh",
    "Status": {
      "Name": "Trạng thái",
      "Success": "Thành công",
      "Error": "Lỗi",
      "Wait": "Đang chờ",
      "Running": "Đang chạy",
    },
    "Danger": {
      "Delete": "Xác nhận xóa?",
    },
    "GenerateParams": "Tham số tạo ảnh",
    "Detail": "Chi tiết",
  },
  "ApiError": {
    "Timeout": "Yêu cầu quá thời gian. Thử lại hoặc kiểm tra địa chỉ trong cài đặt nâng cao.",
    "Quota": "Hạn mức nhà cung cấp không đủ. Kiểm tra số dư, thanh toán và giới hạn sử dụng.",
    "AccessCode": "Mã truy cập trang không hợp lệ. Hãy kiểm tra mã.",
    "InvalidKey": "API Key không hợp lệ hoặc đã hết hạn. Kiểm tra Key của nhà cung cấp đã chọn.",
    "Permission": "Truy cập bị từ chối. Kiểm tra quyền mô hình và giới hạn khu vực.",
    "Model": "Không tìm thấy mô hình hoặc giao diện. Kiểm tra ID và địa chỉ trong cài đặt nâng cao.",
    "RateLimit": "Quá nhiều yêu cầu hoặc đã đạt giới hạn. Thử lại sau và kiểm tra hạn mức.",
    "Parameters": "Tham số không tương thích. Kiểm tra ID mô hình và tham số trong cài đặt nâng cao.",
    "Unavailable": "Nhà cung cấp tạm thời không khả dụng. Hãy thử lại sau.",
    "Empty": "Không có nội dung hợp lệ. Kiểm tra trạng thái mô hình rồi thử lại.",
    "Network": "Kết nối mạng thất bại. Kiểm tra mạng, địa chỉ và cài đặt CORS của bên thứ ba.",
    "Generic": "Yêu cầu thất bại. Kiểm tra API Key, mô hình và giao diện của nhà cung cấp.",
  },
};

export default vi;
