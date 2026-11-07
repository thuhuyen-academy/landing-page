// Component hiển thị bảng học phí ưu đãi đăng ký sớm theo từng hình thức học (#tuition)
import {
  formatEarlyEnrolmentBadge,
  PAGE_COPY,
  REGULAR_LABEL_COPY,
} from "@/lib/i18n/translations";
import { getTuitionRates } from "@/services/course.service";
import type { LanguageCode } from "@/types";

interface TuitionPricingBlockProps {
  language: LanguageCode;
}

export function TuitionPricingBlock({ language }: TuitionPricingBlockProps) {
  const x = PAGE_COPY[language] || PAGE_COPY.en;
  const t = x.tuition;
  const regularLabel = REGULAR_LABEL_COPY[language] || REGULAR_LABEL_COPY.en;
  const prices = getTuitionRates(language);

  return (
    <div className="offer-tuition" id="tuition">
      <div className="head">
        <div className="eyebrow">{t[0]}</div>
        <h2>{t[1]}</h2>
        <p>{t[2]}</p>
      </div>
      <div className="price-grid">
        {prices.map((item) => (
          <article className="price" key={item.title}>
            <span className="early">
              {formatEarlyEnrolmentBadge(language, item.discountPercent)}
            </span>
            <h3>{item.title}</h3>
            <div className="money">
              ${Number(item.earlyRateUsd).toFixed(2)}{" "}
              <small>{item.unitLabel}</small>
            </div>
            <p className="regular">
              <span>{regularLabel}: </span>
              <del>${Number(item.regularRateUsd).toFixed(2)}</del>
            </p>
          </article>
        ))}
      </div>
      <p className="note">
        {t[8]} {t[9]}
      </p>
    </div>
  );
}

