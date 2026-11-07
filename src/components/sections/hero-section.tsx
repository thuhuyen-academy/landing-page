// Phần mở đầu (Section 01 Hero) và câu chuyện giáo viên Huyền Hannah (#top, #about)
import { siteConfig } from "@/config/site";
import { PAGE_COPY, STATS_COPY } from "@/lib/i18n/translations";
import type { LanguageCode } from "@/types";

interface HeroSectionProps {
  language: LanguageCode;
}

export function HeroSection({ language }: HeroSectionProps) {
  const x = PAGE_COPY[language] || PAGE_COPY.en;
  const a = x.about;
  const stats = STATS_COPY[language] || STATS_COPY.en;

  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <span className="step-number">01</span>
          <div className="eyebrow">{x.hero[0]}</div>
          <h1>{x.hero[1]}</h1>
          <p className="lead">{x.hero[2]}</p>
          <div className="actions">
            <a
              className="btn btn-yellow"
              href="#register"
              data-cta="hero-trial"
            >
              {x.hero[3]}
            </a>
            <a className="btn btn-outline" href="#course">
              {x.hero[4]}
            </a>
          </div>
          <p className="hint">{x.hero[5]}</p>
        </div>

        <div className="portrait">
          <div className="caption portrait-caption">
            <strong>{siteConfig.teacher.name}</strong>
            <span>{siteConfig.teacher.role}</span>
          </div>
          <img
            src={siteConfig.images.portrait}
            width={1200}
            height={1500}
            alt={a[1]}
          />
        </div>
      </div>

      <div className="teacher-story" id="about">
        <div className="teacher-story-copy">
          <div className="eyebrow">{a[0]}</div>
          <h2>{a[1]}</h2>
          <p>{a[2]}</p>
          <p>{a[3]}</p>
        </div>
        <div className="teacher-story-facts">
          <div className="fact">
            <strong>{stats[0]}</strong>
            <span>{stats[1]}</span>
          </div>
          <div className="fact">
            <strong>{stats[2]}</strong>
            <span>{stats[3]}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

