// Trang chủ Landing Page giới thiệu khóa học tiếng Việt cùng cô Huyền Hannah (Sections 01–10)
"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { StoreFooter } from "@/components/layout/footer";
import { StoreHeader } from "@/components/layout/header";
import { CourseRoadmapSection } from "@/components/products/course-roadmap";
import { FaqSection } from "@/components/sections/faq-section";
import { FutureSection } from "@/components/sections/future-section";
import { GiftsAndTuitionSection } from "@/components/sections/gifts-section";
import { HeroSection } from "@/components/sections/hero-section";
import { MethodAndBenefitsSection } from "@/components/sections/method-section";
import { PainSection } from "@/components/sections/pain-section";
import { ProofSection } from "@/components/sections/proof-section";
import { RegisterSection } from "@/components/sections/register-section";
import { LANG_CODES, PAGE_COPY } from "@/lib/i18n/translations";
import type { LanguageCode } from "@/types";

function LandingPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const rawLang = searchParams.get("lang") as LanguageCode | null;
  const initialLang: LanguageCode =
    rawLang && PAGE_COPY[rawLang] ? rawLang : "en";

  const [language, setLanguage] = useState<LanguageCode>(initialLang);

  useEffect(() => {
    if (rawLang && PAGE_COPY[rawLang] && rawLang !== language) {
      setLanguage(rawLang);
    }
  }, [rawLang, language]);

  useEffect(() => {
    const x = PAGE_COPY[language] || PAGE_COPY.en;
    document.documentElement.lang = LANG_CODES[language] || "en";
    document.title = `${x.title} | Da Nang`;
  }, [language]);

  const handleLanguageChange = (nextLang: LanguageCode) => {
    setLanguage(nextLang);
    router.replace(`/?lang=${encodeURIComponent(nextLang)}`, { scroll: false });
  };

  return (
    <>
      <StoreHeader
        language={language}
        onLanguageChange={handleLanguageChange}
      />
      <main id="main">
        <HeroSection language={language} />
        <PainSection language={language} />
        <FutureSection language={language} />
        <CourseRoadmapSection language={language} />
        <MethodAndBenefitsSection language={language} />
        <ProofSection language={language} />
        <GiftsAndTuitionSection language={language} />
        <FaqSection language={language} />
        <RegisterSection language={language} />
      </main>
      <StoreFooter language={language} />
    </>
  );
}

export default function HomePage() {
  return (
    <Suspense fallback={null}>
      <LandingPageContent />
    </Suspense>
  );
}

