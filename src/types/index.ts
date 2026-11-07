// Định nghĩa các kiểu dữ liệu dùng chung cho toàn bộ hệ thống Vietnamese with Huyền Hannah

export type LanguageCode = "en" | "zh" | "ja" | "fr" | "ko" | "ru" | "de";

export type ContactMethodKey =
  | "Messenger"
  | "WhatsApp"
  | "Zalo"
  | "Email"
  | "Phone";

export type ProficiencyLevelCode = "V1" | "V2" | "V3" | "V4" | "V5" | "V6";

// Bản dịch nội dung chính của từng ngôn ngữ trên Landing Page
export interface LocalePageCopy {
  locale: string;
  title: string;
  nav: string[];
  hero: string[];
  pain: string[];
  future: string[];
  course: string[];
  method: string[];
  benefits: string[];
  about: string[];
  gifts: string[];
  tuition: string[];
  faq: string[];
  register: string[];
  footer: string;
}

// Cấu hình từng phương thức liên hệ trong biểu mẫu đăng ký học thử
export type ContactMethodTuple = [
  label: string,
  fieldLabel: string,
  placeholder: string,
  inputType: "text" | "tel" | "email",
];

export interface ContactFormCopyItem {
  how: string;
  consent: string;
  methods: Record<ContactMethodKey, ContactMethodTuple>;
}

export interface SubmitCopyItem {
  sending: string;
  ok: string;
  err: string;
}

// Dữ liệu học viên gửi từ biểu mẫu đăng ký học thử miễn phí
export interface TrialBookingPayload {
  name: string;
  email: string;
  contactMethod: ContactMethodKey;
  contactValue: string;
  country: string;
  level: string;
  format: string;
  support: string;
  goal: string;
  websiteLanguage: string;
}

// Thông tin từng cấp độ trong lộ trình V1–V6
export interface CourseLevelInfo {
  code: ProficiencyLevelCode;
  title: string;
  description: string;
  hours: number;
}

// Thông tin một giai đoạn học (Phase 1, 2, 3)
export interface CoursePhaseInfo {
  label: string;
  title: string;
  description: string;
  levels: [CourseLevelInfo, CourseLevelInfo];
}

// Bảng học phí ưu đãi đăng ký sớm
export interface TuitionRateCard {
  title: string;
  earlyRateUsd: number;
  regularRateUsd: number;
  unitLabel: string;
  discountPercent: number;
}

