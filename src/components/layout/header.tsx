// Thanh điều hướng phía trên kèm bộ chọn 7 ngôn ngữ, nút Đăng nhập Google (Auth0) và nút đặt lịch học thử
"use client";

import { UserAuthButton } from "@/components/layout/user-auth-button";
import { LANGUAGE_NAMES, PAGE_COPY } from "@/lib/i18n/translations";
import type { LanguageCode } from "@/types";

interface StoreHeaderProps {
  language?: LanguageCode;
  onLanguageChange?: (lang: LanguageCode) => void;
}

export function StoreHeader({
  language = "en",
  onLanguageChange,
}: StoreHeaderProps) {
  const x = PAGE_COPY[language] || PAGE_COPY.en;

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLang = e.target.value as LanguageCode;
    if (onLanguageChange) {
      onLanguageChange(nextLang);
    } else if (typeof window !== "undefined") {
      window.location.search = `?lang=${encodeURIComponent(nextLang)}`;
    }
  };

  return (
    <header className="bar" id="header">
      <div className="wrap nav">
        <a className="brand" href="#top">
          {x.title}
        </a>
        <nav className="links" aria-label="Main navigation">
          <a href="#method">{x.nav[0]}</a>
          <a href="#gifts">{x.nav[1]}</a>
          <a href="#about">{x.nav[2]}</a>
          <a href="#tuition">{x.nav[3]}</a>
        </nav>
        <div className="nav-actions">
          <label className="skip" htmlFor="language">
            Language
          </label>
          <select
            className="lang"
            id="language"
            aria-label="Choose page language"
            value={language}
            onChange={handleSelectChange}
          >
            {(
              Object.entries(LANGUAGE_NAMES) as Array<[LanguageCode, string]>
            ).map(([code, label]) => (
              <option key={code} value={code}>
                {label}
              </option>
            ))}
          </select>
          <UserAuthButton language={language} returnTo="/#register" />
          <a className="btn btn-yellow nav-cta" href="#register">
            {x.nav[4]}
          </a>
        </div>
      </div>
    </header>
  );
}
