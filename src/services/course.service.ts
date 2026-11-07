// Dịch vụ truy xuất dữ liệu lộ trình học V1–V6 và bảng học phí ưu đãi đăng ký sớm
import { LEVEL_HOURS, PAGE_COPY } from "@/lib/i18n/translations";
import type {
  CourseLevelInfo,
  CoursePhaseInfo,
  LanguageCode,
  TuitionRateCard,
} from "@/types";

// Lấy danh sách 6 cấp độ tiếng Việt (V1–V6) theo ngôn ngữ đang chọn
export function getCourseLevels(language: LanguageCode): CourseLevelInfo[] {
  const c = PAGE_COPY[language]?.course || PAGE_COPY.en.course;
  return [
    { code: "V1", title: c[12], description: c[13], hours: LEVEL_HOURS.V1 },
    { code: "V2", title: c[14], description: c[15], hours: LEVEL_HOURS.V2 },
    { code: "V3", title: c[16], description: c[17], hours: LEVEL_HOURS.V3 },
    { code: "V4", title: c[18], description: c[19], hours: LEVEL_HOURS.V4 },
    { code: "V5", title: c[20], description: c[21], hours: LEVEL_HOURS.V5 },
    { code: "V6", title: c[22], description: c[23], hours: LEVEL_HOURS.V6 },
  ];
}

// Lấy 3 giai đoạn học (Foundations, Independence, Advanced expression)
export function getCoursePhases(language: LanguageCode): CoursePhaseInfo[] {
  const c = PAGE_COPY[language]?.course || PAGE_COPY.en.course;
  const levels = getCourseLevels(language);
  return [
    {
      label: c[3],
      title: c[4],
      description: c[5],
      levels: [levels[0], levels[1]],
    },
    {
      label: c[6],
      title: c[7],
      description: c[8],
      levels: [levels[2], levels[3]],
    },
    {
      label: c[9],
      title: c[10],
      description: c[11],
      levels: [levels[4], levels[5]],
    },
  ];
}

// Lấy 3 gói học phí kèm phần trăm giảm giá đăng ký sớm
export function getTuitionRates(language: LanguageCode): TuitionRateCard[] {
  const t = PAGE_COPY[language]?.tuition || PAGE_COPY.en.tuition;
  const rawRates: Array<[string, number, number, string]> = [
    [t[3], 12.9, 25, t[6]],
    [t[4], 15.5, 30, t[6]],
    [t[5], 8, 15, t[7]],
  ];

  return rawRates.map(([title, earlyRateUsd, regularRateUsd, unitLabel]) => ({
    title,
    earlyRateUsd,
    regularRateUsd,
    unitLabel,
    discountPercent: Math.round((1 - earlyRateUsd / regularRateUsd) * 100),
  }));
}

