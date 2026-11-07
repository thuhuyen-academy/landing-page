# Vietnamese with Huyền Hannah — Landing Page & Cổng Đăng Ký Học Thử

Website giới thiệu khóa học tiếng Việt (Online toàn cầu & Trực tiếp tại Đà Nẵng) của cô **Huyền Hannah**, hỗ trợ 7 ngôn ngữ (`en`, `zh`, `ja`, `fr`, `ko`, `ru`, `de`) và tự động lưu thông tin học viên đăng ký học thử vào Google Sheets kèm thông báo Gmail.

---

## 1. Cấu trúc Thư mục Dự án (Chuẩn Next.js App Router + TypeScript)

```text
landing-page/
├── public/                     # Tài nguyên tĩnh công khai
│   ├── assets/                 # Bản sao toàn bộ tài nguyên phục vụ đường dẫn tĩnh
│   ├── documents/              # Tài liệu PDF lộ trình V1-V6 & Hướng dẫn LMS (.docx)
│   ├── fonts/                  # Thư mục lưu trữ font chữ
│   ├── icons/                  # Logo SVG & App Icon
│   ├── images/
│   │   ├── app/                # Ảnh minh họa bài học & quiz tương tác
│   │   ├── students/           # Ảnh thực tế lớp học & hoạt động cùng học viên
│   │   └── teacher/            # Ảnh chân dung, văn hóa & ảnh chia sẻ OpenGraph
│   ├── videos/                 # Thư mục video hướng dẫn
│   └── favicon.ico
├── scripts/                    # Các script tiện ích & tự động hóa
│   ├── export-static.ts        # Script kiểm tra & đồng bộ tài nguyên tĩnh
│   └── google-sheets-webhook.gs# Google Apps Script lưu đăng ký học viên + gửi Gmail
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (store)/            # Nhóm trang chính cho học viên
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx        # Trang chủ Landing Page (Sections 01–10)
│   │   ├── api/
│   │   │   └── bookings/       # POST /api/bookings (Xác thực Zod & đẩy Google Sheets)
│   │   ├── contact/            # Trang liên hệ trực tiếp (/contact)
│   │   ├── privacy/            # Trang chính sách bảo mật (/privacy)
│   │   ├── terms/              # Trang điều khoản khóa học (/terms)
│   │   ├── favicon.ico
│   │   ├── globals.css         # Toàn bộ hệ thống CSS & biến màu sắc
│   │   ├── icon.svg
│   │   └── layout.tsx          # Root Layout với font Be Vietnam Pro & Metadata
│   ├── components/
│   │   ├── checkout/           # Biểu mẫu đăng ký học thử & bảng 6 kênh liên hệ
│   │   ├── layout/             # Header (chọn 7 ngôn ngữ) & Footer + Sticky CTA
│   │   ├── products/           # Lộ trình V1–V6 & Bảng học phí ưu đãi đăng ký sớm
│   │   ├── sections/           # Các phân đoạn nội dung trên Landing Page (01–10)
│   │   └── ui/                 # Các component UI cơ sở (Button, Badge, Card, Input, Table)
│   ├── config/
│   │   └── site.ts             # Cấu hình thông tin cố định, link LMS, Webhook & Liên hệ
│   ├── lib/
│   │   ├── i18n/               # Từ điển đa ngôn ngữ (PAGE_COPY, PROOF_COPY, LMS_COPY...)
│   │   ├── security/           # Rate Limiter giới hạn tần suất gọi API theo IP
│   │   ├── utils/              # Các hàm tiện ích (cn, formatUsd, formatDateTime, slugify)
│   │   └── validation/         # Schema kiểm tra dữ liệu đầu vào bằng Zod
│   ├── services/
│   │   ├── booking.service.ts  # Dịch vụ gửi đăng ký học thử (Google Sheets + FormSubmit)
│   │   └── course.service.ts   # Dịch vụ lấy thông tin cấp độ V1–V6 & tính giảm giá học phí
│   ├── types/
│   │   └── index.ts            # Định nghĩa TypeScript interfaces dùng chung
│   └── middleware.ts           # Middleware bảo vệ các route /api/*
├── .env.example
├── .gitignore
├── KICKSTART.md
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

---

## 2. Khởi chạy Dự án ở Môi trường Phát triển (Local)

```powershell
# 1. Cài đặt các gói phụ thuộc
npm install

# 2. Chạy máy chủ phát triển (http://localhost:3000)
npm run dev

# 3. Kiểm tra kiểu dữ liệu & đóng gói bản Production
npm run build
```

---

## 3. Liên kết & Kênh Liên hệ Chính thức

- **Cổng học trực tuyến (LMS — tặng 15 ngày miễn phí)**: `https://lms.xinchaovietnam.education/learning`
- **Webhook Google Sheets**: Cấu hình tại `src/config/site.ts` (`siteConfig.links.googleSheetsWebhookUrl`) hoặc biến môi trường `NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL`.
- **Mã nguồn Apps Script**: `scripts/google-sheets-webhook.gs`.

