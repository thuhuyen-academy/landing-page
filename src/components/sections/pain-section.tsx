// Phần 02: Những khó khăn thường gặp khi học tiếng Việt (Section 02 Pain Points)
import { PAGE_COPY } from "@/lib/i18n/translations";
import type { LanguageCode } from "@/types";

interface PainSectionProps {
  language: LanguageCode;
}

export function PainSection({ language }: PainSectionProps) {
  const x = PAGE_COPY[language] || PAGE_COPY.en;
  const p = x.pain;

  return (
    <section className="section dark">
      <div className="wrap">
        <span className="step-number">02</span>
        <div className="head">
          <div className="eyebrow">{p[0]}</div>
          <h2>{p[1]}</h2>
          <p>{p[2]}</p>
        </div>
        <div className="pain-grid">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <article className="pain" key={i}>
              <b>0{i + 1}</b>
              <p>{p[3 + i]}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

