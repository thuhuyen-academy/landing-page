// Dịch vụ xử lý gửi thông tin đăng ký học thử vào Google Sheets Webhook và FormSubmit
import { siteConfig } from "@/config/site";
import type { LanguageCode, TrialBookingPayload } from "@/types";
import { CONTACT_FORM_COPY, PAGE_COPY } from "@/lib/i18n/translations";

// Gửi đăng ký học thử từ trình duyệt (đồng thời gửi vào Google Sheets Webhook và FormSubmit)
export async function submitTrialBooking(
  payload: TrialBookingPayload,
  language: LanguageCode,
  customWebhookUrl?: string | null
): Promise<void> {
  const x = PAGE_COPY[language] || PAGE_COPY.en;
  const tasks: Promise<unknown>[] = [];

  const sheetUrl =
    customWebhookUrl || siteConfig.links.googleSheetsWebhookUrl || "";

  if (sheetUrl) {
    tasks.push(
      fetch(sheetUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
      })
    );
  }

  tasks.push(
    fetch(siteConfig.links.formSubmitAjaxUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _subject: `${x.register[0]} - ${payload.name} (${x.title})`,
        _template: "table",
        _captcha: "false",
        Name: payload.name,
        Contact_Method: payload.contactMethod,
        Contact_Details: payload.contactValue,
        Country_City: payload.country,
        Current_Level: payload.level,
        Preferred_Format: payload.format,
        Explanation_Language: payload.support,
        Learning_Goal: payload.goal,
        Website_Language: payload.websiteLanguage,
      }),
    })
  );

  await Promise.allSettled(tasks);
}

// Tạo đường dẫn mailto dự phòng trong trường hợp mất kết nối mạng
export function buildBackupMailtoUrl(
  payload: TrialBookingPayload,
  language: LanguageCode
): string {
  const x = PAGE_COPY[language] || PAGE_COPY.en;
  const cfCopy = CONTACT_FORM_COPY[language] || CONTACT_FORM_COPY.en;
  const body = [
    x.register[0],
    "",
    `${x.register[5]}: ${payload.name}`,
    `${cfCopy.how}: ${payload.email}`,
    `${x.register[7]}: ${payload.country}`,
    `${x.register[8]}: ${payload.level}`,
    `${x.register[9]}: ${payload.format}`,
    `${x.register[10]}: ${payload.support}`,
    `${x.register[11]}: ${payload.goal}`,
    `Website language: ${x.locale}`,
  ].join("\n");

  const subject = `${x.register[0]} - ${x.title}`;
  return `mailto:${siteConfig.support.email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
}

