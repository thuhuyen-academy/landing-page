// Trang Điều khoản khóa học (/terms) cho học viên Vietnamese with Huyền Hannah
import { StoreFooter } from "@/components/layout/footer";
import { StoreHeader } from "@/components/layout/header";
import { siteConfig } from "@/config/site";

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--paper)] text-[var(--ink)]">
      <StoreHeader />
      <main className="section flex-1">
        <div className="wrap">
          <div className="card" style={{ maxWidth: 820 }}>
            <div className="eyebrow">TERMS OF SERVICE</div>
            <h1 style={{ font: "500 2.2rem/1.15 var(--serif)", margin: "10px 0 18px" }}>
              Trial Lessons &amp; Enrolment Terms
            </h1>
            <p>
              <strong>1. Free Trial Lesson:</strong> Every new learner is
              eligible for one free 60-minute trial lesson with{" "}
              {siteConfig.teacher.name} (online or in person in Da Nang). No
              payment is required for the trial lesson.
            </p>
            <p>
              <strong>2. Flexible Scheduling:</strong> Study hours and lesson
              lengths (60 or 90 minutes) are arranged together based on your
              goals and schedule.
            </p>
            <p>
              <strong>3. Tuition &amp; Payment:</strong> Payment details are
              shared directly after you confirm your lesson format, schedule,
              and total study hours.
            </p>
          </div>
        </div>
      </main>
      <StoreFooter />
    </div>
  );
}

