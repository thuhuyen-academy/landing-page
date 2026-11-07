// Phần 05 & 06: Phương pháp học (Listen. Look. Repeat.) và Giá trị học viên nhận được
import { PAGE_COPY } from "@/lib/i18n/translations";
import type { LanguageCode } from "@/types";

interface MethodAndBenefitsSectionProps {
  language: LanguageCode;
}

export function MethodAndBenefitsSection({
  language,
}: MethodAndBenefitsSectionProps) {
  const x = PAGE_COPY[language] || PAGE_COPY.en;
  const m = x.method;
  const b = x.benefits;

  return (
    <>
      <section className="section method" id="method">
        <div className="wrap method-grid">
          <div>
            <span className="step-number">05</span>
            <div className="head">
              <div className="eyebrow">{m[0]}</div>
              <h2>{m[1]}</h2>
              <p>{m[2]}</p>
            </div>
            <div className="steps">
              {[0, 1, 2, 3].map((i) => (
                <article className="step" key={i}>
                  <div>
                    <h3>{m[3 + i * 2]}</h3>
                    <p>{m[4 + i * 2]}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <span className="step-number">06</span>
          <div className="head">
            <div className="eyebrow">{b[0]}</div>
            <h2>{b[1]}</h2>
            <p>{b[2]}</p>
          </div>
          <div className="benefits">
            {[0, 1, 2, 3].map((i) => (
              <article className="benefit" key={i}>
                <span className="check">✓</span>
                <div>
                  <h3>{b[3 + i * 2]}</h3>
                  <p>{b[4 + i * 2]}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

