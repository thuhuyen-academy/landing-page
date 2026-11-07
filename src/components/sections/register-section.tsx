// Phần 10: Biểu mẫu đăng ký học thử miễn phí và 6 kênh liên hệ trực tiếp (#register)
import { ContactChannelsPanel } from "@/components/checkout/contact-channels";
import { TrialBookingForm } from "@/components/checkout/trial-booking-form";
import { PAGE_COPY } from "@/lib/i18n/translations";
import type { LanguageCode } from "@/types";

interface RegisterSectionProps {
  language: LanguageCode;
}

export function RegisterSection({ language }: RegisterSectionProps) {
  const x = PAGE_COPY[language] || PAGE_COPY.en;
  const r = x.register;

  return (
    <section className="section dark final" id="register">
      <div className="wrap">
        <div className="final-head">
          <span className="step-number">10</span>
          <div className="eyebrow">{r[0]}</div>
          <h2>{r[1]}</h2>
          <p>{r[2]}</p>
        </div>

        <div className="register-grid">
          <TrialBookingForm language={language} />

          <aside className="card pay">
            <div className="eyebrow">{r[24]}</div>
            <h3>{r[25]}</h3>
            <p>{r[26]}</p>
            <p className="warning">{r[30]}</p>
            <ContactChannelsPanel title={r[31]} />
          </aside>
        </div>
      </div>
    </section>
  );
}

