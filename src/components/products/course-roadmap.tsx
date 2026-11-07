// Component hiển thị lộ trình 6 cấp độ tiếng Việt V1–V6 và tài liệu PDF 16 trang (Section 04)
import { siteConfig } from "@/config/site";
import { PAGE_COPY, PROOF_COPY } from "@/lib/i18n/translations";
import { getCoursePhases } from "@/services/course.service";
import type { LanguageCode } from "@/types";

interface CourseRoadmapSectionProps {
  language: LanguageCode;
}

export function CourseRoadmapSection({ language }: CourseRoadmapSectionProps) {
  const x = PAGE_COPY[language] || PAGE_COPY.en;
  const c = x.course;
  const proof = PROOF_COPY[language] || PROOF_COPY.en;
  const phases = getCoursePhases(language);

  return (
    <section className="section" id="course">
      <div className="wrap">
        <span className="step-number">04</span>
        <div className="course-intro-grid">
          <div className="head">
            <div className="eyebrow">{c[0]}</div>
            <h2>{c[1]}</h2>
            <p>{c[2]}</p>
          </div>
          <figure className="course-culture">
            <img src={siteConfig.images.culture} alt={proof[7]} />
            <figcaption>{proof[7]}</figcaption>
          </figure>
        </div>

        <div className="phases">
          {phases.map((phaseItem) => (
            <article className="phase" key={phaseItem.label}>
              <div>
                <span className="phase-label">{phaseItem.label}</span>
                <h3>{phaseItem.title}</h3>
                <p>{phaseItem.description}</p>
              </div>
              <div className="levelrow">
                {phaseItem.levels.map((lv) => (
                  <div className="level" key={lv.code}>
                    <b>
                      <i>{lv.code}</i>
                      {lv.title}
                    </b>
                    <small>{lv.description}</small>
                    <span className="level-hours">{lv.hours} h</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="guide-download">
          <div>
            <div className="eyebrow">PDF · 16 PAGES</div>
            <h3>{c[25]}</h3>
            <p>{c[26]}</p>
          </div>
          <a
            className="btn btn-yellow"
            href={siteConfig.links.cefrPdfUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {c[25]} ↗
          </a>
        </div>

        <div className="guide-cta">
          <p>{c[27]}</p>
          <a className="btn btn-outline" href="#register">
            {x.hero[3]}
          </a>
        </div>

        <p className="note">{c[24]}</p>
      </div>
    </section>
  );
}

