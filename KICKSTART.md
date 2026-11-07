# FULL TECH STACK – VIETNAMESE WITH HUYỀN HANNAH

Dự án Landing Page đa ngôn ngữ giới thiệu khóa học tiếng Việt (Online toàn cầu & Trực tiếp tại Đà Nẵng) và tiếp nhận đăng ký học thử tự động.

## 1. Tổng quan công nghệ

- **Next.js 15 (App Router) + React 19 + TypeScript**: Frontend, đa ngôn ngữ (`?lang=en|zh|ja|fr|ko|ru|de`) và API Route Handlers.
- **Tailwind CSS + Custom CSS Variables**: Hệ thống giao diện chuẩn xác, tối ưu trải nghiệm đọc và tương thích mọi kích thước màn hình (Desktop, Tablet, Mobile).
- **Zod Validation + Rate Limiter**: Kiểm tra dữ liệu biểu mẫu và chống spam trên tầng `/api/*`.
- **Google Apps Script + Google Sheets + Gmail**: Tự động ghi nhận học viên đăng ký học thử vào bảng tính và gửi email thông báo tức thì.

## 2. Các phân đoạn chính trên Landing Page (`src/components/`)

1. **Section 01 (`HeroSection`)**: Thông điệp mở đầu, ảnh chân dung cô Huyền Hannah và câu chuyện giảng dạy (6+ năm kinh nghiệm, 1.000+ học viên).
2. **Section 02 (`PainSection`)**: 6 rào cản phổ biến khi người nước ngoài học tiếng Việt.
3. **Section 03 (`FutureSection`)**: 6 kết quả thực tế học viên đạt được khi luyện tập đều đặn.
4. **Section 04 (`CourseRoadmapSection`)**: Lộ trình 3 giai đoạn / 6 cấp độ (`V1`–`V6`) kèm nút tải tài liệu PDF 16 trang.
5. **Section 05 & 06 (`MethodAndBenefitsSection`)**: Quy trình học 4 bước (*Listen. Look. Repeat. Use it in real life.*) và lợi ích thực tiễn.
6. **Section 07 (`ProofSection`)**: Thư viện ảnh thực tế cùng học viên quốc tế tại Đà Nẵng.
7. **Section 08 (`GiftsAndTuitionSection`)**: Quà tặng 1 giờ học thử miễn phí + 15 ngày trải nghiệm phần mềm LMS (`lms.xinchaovietnam.education/learning`) + Bảng học phí ưu đãi đăng ký sớm.
8. **Section 09 (`FaqSection`)**: Giải đáp 7 câu hỏi thường gặp.
9. **Section 10 (`RegisterSection`)**: Biểu mẫu đăng ký học thử miễn phí (`TrialBookingForm`) và 6 kênh liên hệ trực tiếp (`ContactChannelsPanel`).

