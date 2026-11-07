// Định nghĩa các schema kiểm tra dữ liệu đầu vào bằng Zod cho API đăng ký học thử
import { z } from "zod";

export const trialBookingSchema = z.object({
  name: z
    .string({ required_error: "Vui lòng nhập họ và tên" })
    .trim()
    .min(1, "Họ và tên không được để trống")
    .max(120, "Họ và tên quá dài"),
  email: z.string().trim().max(254).optional().default(""),
  contactMethod: z
    .enum(["Messenger", "WhatsApp", "Zalo", "Email", "Phone"])
    .default("WhatsApp"),
  contactValue: z
    .string({ required_error: "Vui lòng nhập thông tin liên hệ" })
    .trim()
    .min(2, "Thông tin liên hệ không hợp lệ")
    .max(200, "Thông tin liên hệ quá dài"),
  country: z.string().trim().max(120).optional().default(""),
  level: z.string().trim().max(120).optional().default(""),
  format: z.string().trim().max(120).optional().default(""),
  support: z.string().trim().max(120).optional().default(""),
  goal: z.string().trim().max(2000).optional().default(""),
  websiteLanguage: z.string().trim().max(50).optional().default("English"),
});

export type TrialBookingInput = z.infer<typeof trialBookingSchema>;

