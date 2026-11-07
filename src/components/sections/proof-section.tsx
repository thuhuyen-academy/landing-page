// Phần 07: Hình ảnh thực tế của giáo viên & học viên quốc tế tại Đà Nẵng (#proof)
import { siteConfig } from "@/config/site";
import { PROOF_COPY } from "@/lib/i18n/translations";
import type { LanguageCode } from "@/types";

const STUDENT_TESTIMONIALS: Array<[string, string]> = [
  ["Larry Lenard", "USA"],
  ["Joe", "USA"],
  ["Daniel", "Canada"],
  ["Vjay Victor", "Philippines"],
];

interface ProofSectionProps {
  language: LanguageCode;
}

export function ProofSection({ language }: ProofSectionProps) {
  const proof = PROOF_COPY[language] || PROOF_COPY.en;

  return (
    <section className="section dark" id="proof">
      <div className="wrap">
        <span className="step-number">07</span>
        <div className="proof-layout">
          <div className="proof-intro">
            <div className="eyebrow">{proof[0]}</div>
            <h3>{proof[1]}</h3>
            <p>{proof[2]}</p>
          </div>

          <div className="learner-photo-grid">
            <figure>
              <img src={siteConfig.images.studentDinner} alt={proof[10]} />
              <figcaption>{proof[10]}</figcaption>
            </figure>
            <figure>
              <img src={siteConfig.images.studentGroup} alt={proof[11]} />
              <figcaption>{proof[11]}</figcaption>
            </figure>
            <figure>
              <img src={siteConfig.images.studentCafeStudy} alt={proof[12]} />
              <figcaption>{proof[12]}</figcaption>
            </figure>
            <figure>
              <img src={siteConfig.images.studentCommunity} alt={proof[13]} />
              <figcaption>{proof[13]}</figcaption>
            </figure>
            <figure className="photo-pair">
              <img src={siteConfig.images.studentCafePair} alt={proof[14]} />
              <figcaption>{proof[14]}</figcaption>
            </figure>
            <figure>
              <img src={siteConfig.images.studentCafeGroup} alt={proof[15]} />
              <figcaption>{proof[15]}</figcaption>
            </figure>
          </div>
        </div>

        <div className="student-feedback">
          <div className="eyebrow">{proof[5]}</div>
          <div className="feedback-grid">
            {STUDENT_TESTIMONIALS.map(([studentName, country]) => (
              <article className="feedback-card" key={studentName}>
                <strong>{studentName}</strong>
                <span>{country}</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

