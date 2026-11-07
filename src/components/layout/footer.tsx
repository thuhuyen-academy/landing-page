// Chân trang (Footer) và thanh nút nổi (Sticky CTA) trên thiết bị di động
"use client";

import { PAGE_COPY } from "@/lib/i18n/translations";
import type { LanguageCode } from "@/types";

interface StoreFooterProps {
  language?: LanguageCode;
}

export function StoreFooter({ language = "en" }: StoreFooterProps) {
  const x = PAGE_COPY[language] || PAGE_COPY.en;

  return (
    <>
      <footer className="foot" id="footer">
        <div className="wrap footrow">
          <a className="brand" href="#top">
            {x.title}
          </a>
          <span>{x.footer}</span>
        </div>
      </footer>
      <div className="sticky" id="sticky">
        <a className="btn btn-yellow" href="#register">
          {x.nav[4]}
        </a>
      </div>
    </>
  );
}

