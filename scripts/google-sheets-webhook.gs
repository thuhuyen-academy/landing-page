/**
 * GOOGLE APPS SCRIPT: TỰ ĐỘNG LƯU ĐĂNG KÝ HỌC VIÊN VÀO GOOGLE SHEETS + BÁO VỀ GMAIL
 * Trang web: https://thuhuyen-academy.github.io/landing-page/
 *
 * HƯỚNG DẪN CÀI ĐẶT (Chỉ mất 1 phút):
 * 1. Mở Google Sheets mới tại: https://sheets.new (đặt tên ví dụ: "Danh sách Học viên Đăng ký - Huyền Hannah")
 * 2. Trên thanh menu, chọn: Tiện ích mở rộng (Extensions) -> Apps Script
 * 3. Xóa đoạn mã mặc định, dán toàn bộ nội dung file này vào và bấm biểu tượng Lưu (Ctrl + S).
 * 4. Bấm nút "Triển khai" (Deploy) ở góc trên bên phải -> chọn " Tùy chọn triển khai mới" (New deployment):
 *    - Chọn loại (Select type): Ứng dụng web (Web app)
 *    - Thực thi dưới dạng (Execute as): Tôi (Me - lethithuhuyen2104@gmail.com)
 *    - Ai có quyền truy cập (Who has access): Bất kỳ ai (Anyone)  <-- RẤT QUAN TRỌNG
 * 5. Bấm "Triển khai" (Deploy) -> Cấp quyền truy cập (Authorize access -> Advanced -> Go to project)
 * 6. Copy đường link "URL ứng dụng web" (có dạng https://script.google.com/macros/s/.../exec)
 *    và gửi lại vào khung chat để gắn vào trang Landing Page!
 */

const NOTIFY_EMAIL = "lethithuhuyen2104@gmail.com";
const SHEET_NAME = "Học viên đăng ký";

function ensureSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME) || ss.getSheets()[0];
  if (sheet.getLastRow() === 0) {
    const headers = [
      "Thời gian (VN)",
      "Họ và tên",
      "Email học viên",
      "Quốc gia / Thành phố",
      "Trình độ hiện tại",
      "Hình thức học",
      "Ngôn ngữ giải thích",
      "Mục tiêu học tập",
      "Ngôn ngữ Web",
      "Trạng thái"
    ];
    sheet.appendRow(headers);
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setBackground("#173a70")
               .setFontColor("#ffffff")
               .setFontWeight("bold");
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function doPost(e) {
  try {
    let data = {};
    if (e && e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    const sheet = ensureSheet_();
    const timestamp = Utilities.formatDate(new Date(), "Asia/Ho_Chi_Minh", "dd/MM/yyyy HH:mm:ss");

    const row = [
      timestamp,
      data.name || "",
      data.email || "",
      data.country || "",
      data.level || "",
      data.format || "",
      data.support || "",
      data.goal || "",
      data.websiteLanguage || "",
      "Mới đăng ký"
    ];
    sheet.appendRow(row);

    // Gửi email thông báo ngay lập tức về Gmail của cô Huyền Hannah
    const subject = "🎉 Học viên mới đăng ký học thử: " + (data.name || "Không tên") + " (" + (data.country || "Quốc tế") + ")";
    const htmlBody = [
      '<div style="font-family:Segoe UI,Arial,sans-serif;max-width:600px;border:1px solid #d9e4f2;border-radius:12px;overflow:hidden">',
      '<div style="background:#173a70;color:#ffffff;padding:16px 20px"><h2 style="margin:0;font-size:18px">Học viên mới đăng ký Học thử (Landing Page)</h2></div>',
      '<div style="padding:20px;background:#f8fbff;color:#172b45;line-height:1.6">',
      '<p><strong>Thời gian:</strong> ' + timestamp + '</p>',
      '<p><strong>Họ và tên:</strong> ' + (data.name || "—") + '</p>',
      '<p><strong>Email:</strong> <a href="mailto:' + (data.email || "") + '">' + (data.email || "—") + '</a></p>',
      '<p><strong>Quốc gia / Thành phố:</strong> ' + (data.country || "—") + '</p>',
      '<p><strong>Trình độ hiện tại:</strong> ' + (data.level || "—") + '</p>',
      '<p><strong>Hình thức học:</strong> ' + (data.format || "—") + '</p>',
      '<p><strong>Ngôn ngữ giải thích:</strong> ' + (data.support || "—") + '</p>',
      '<p><strong>Mục tiêu học tập:</strong><br>' + String(data.goal || "—").replace(/\n/g, "<br>") + '</p>',
      '<p><strong>Ngôn ngữ trang web:</strong> ' + (data.websiteLanguage || "—") + '</p>',
      '<hr style="border:none;border-top:1px solid #d9e4f2;margin:16px 0">',
      '<p style="font-size:13px;color:#5c6d82">💡 Mẹo: Chị có thể bấm <b>Trả lời (Reply)</b> ngay trên email này để phản hồi trực tiếp cho học viên.</p>',
      '</div></div>'
    ].join("");

    MailApp.sendEmail({
      to: NOTIFY_EMAIL,
      replyTo: data.email || NOTIFY_EMAIL,
      subject: subject,
      htmlBody: htmlBody
    });

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true, timestamp: timestamp }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "active", service: "Huyền Hannah Landing Page Webhook" }))
    .setMimeType(ContentService.MimeType.JSON);
}
