// Phần 08: Quà tặng học thử 1 giờ + 15 ngày học miễn phí trên LMS + Quyền lợi & Bảng học phí (#gifts, #tuition)
import { TuitionPricingBlock } from "@/components/products/tuition-pricing";
import { siteConfig } from "@/config/site";
import { LMS_COPY, PAGE_COPY, SUPPORT_COPY } from "@/lib/i18n/translations";
import type { LanguageCode } from "@/types";

interface GiftsAndTuitionSectionProps {
  language: LanguageCode;
}

export function GiftsAndTuitionSection({
  language,
}: GiftsAndTuitionSectionProps) {
  const x = PAGE_COPY[language] || PAGE_COPY.en;
  const g = x.gifts;
  const lms = LMS_COPY[language] || LMS_COPY.en;
  const support = SUPPORT_COPY[language] || SUPPORT_COPY.en;
  const supportItems = [...support.slice(1, 6), lms[5]];

  return (
    <section className="section" id="gifts">
      <div className="wrap">
        <span className="step-number">08</span>
        <div className="head">
          <div className="eyebrow">{g[0]}</div>
          <h2>{g[1]}</h2>
          <p>{g[2]}</p>
        </div>

        <div className="giftbox" style={{ marginBottom: 20 }}>
          <div>
            <div className="eyebrow">{g[3]}</div>
            <p>{g[4]}</p>
          </div>
          <a className="btn btn-yellow" href="#register" data-cta="gift-trial">
            {g[5]}
          </a>
        </div>

        <div className="guide-download" style={{ margin: "0 0 38px" }}>
          <div>
            <div className="eyebrow">{lms[0]}</div>
            <h3>{lms[1]}</h3>
            <p>
              {lms[2]}{" "}
              <a
                href={siteConfig.links.lmsUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "var(--blue)",
                  fontWeight: 800,
                  textDecoration: "underline",
                }}
              >
                lms.xinchaovietnam.education/learning
              </a>
            </p>
          </div>
          <div className="actions" style={{ marginTop: 0, flexShrink: 0 }}>
            <a
              className="btn btn-yellow"
              href={siteConfig.links.lmsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {lms[3]}
            </a>
            <a
              className="btn btn-outline"
              href={siteConfig.links.lmsGuideDocx}
              download="LMS_Vietnamese_Learning_Guide_EN.docx"
            >
              {lms[4]}
            </a>
          </div>
        </div>

        <div className="support">
          <h3>{support[0]}</h3>
          <ul>
            {supportItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <div className="actions">
            <a className="btn btn-outline" href="#register">
              {support[6]}
            </a>
            <a className="btn" href="#register">
              {support[7]}
            </a>
          </div>
        </div>

        <TuitionPricingBlock language={language} />
      </div>
    </section>
  );
}

