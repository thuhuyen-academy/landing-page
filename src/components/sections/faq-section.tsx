// Phần 09: Câu hỏi thường gặp (Section 09 FAQ)
import { PAGE_COPY } from "@/lib/i18n/translations";
import type { LanguageCode } from "@/types";

interface FaqSectionProps {
  language: LanguageCode;
}

export function FaqSection({ language }: FaqSectionProps) {
  const x = PAGE_COPY[language] || PAGE_COPY.en;
  const q = x.faq;

  return (
    <section className="section faq" id="faq">
      <div className="wrap faq-grid">
        <div>
          <span className="step-number">09</span>
          <div className="head">
            <div className="eyebrow">{q[0]}</div>
            <h2>{q[1]}</h2>
          </div>
        </div>
        <div>
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <details key={i}>
              <summary>{q[2 + i * 2]}</summary>
              <p>{q[3 + i * 2]}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

