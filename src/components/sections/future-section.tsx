// Phần 03: Hình dung sự tiến bộ khi giao tiếp tiếng Việt tự tin (Section 03 Future Outcomes)
import { PAGE_COPY } from "@/lib/i18n/translations";
import type { LanguageCode } from "@/types";

interface FutureSectionProps {
  language: LanguageCode;
}

export function FutureSection({ language }: FutureSectionProps) {
  const x = PAGE_COPY[language] || PAGE_COPY.en;
  const f = x.future;

  return (
    <section className="section future">
      <div className="wrap">
        <span className="step-number">03</span>
        <div className="head">
          <div className="eyebrow">{f[0]}</div>
          <h2>{f[1]}</h2>
          <p>{f[2]}</p>
        </div>
        <div className="future-grid">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <article className="future-card" key={i}>
              <b>0{i + 1}</b>
              <div>
                <h3>{f[3 + i * 2]}</h3>
                <p>{f[4 + i * 2]}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

