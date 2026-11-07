// Trang Chính sách bảo mật (/privacy) cho học viên đăng ký học thử
import { StoreFooter } from "@/components/layout/footer";
import { StoreHeader } from "@/components/layout/header";
import { siteConfig } from "@/config/site";

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--paper)] text-[var(--ink)]">
      <StoreHeader />
      <main className="section flex-1">
        <div className="wrap">
          <div className="card" style={{ maxWidth: 820 }}>
            <div className="eyebrow">PRIVACY POLICY</div>
            <h1 style={{ font: "500 2.2rem/1.15 var(--serif)", margin: "10px 0 18px" }}>
              Privacy &amp; Learner Information
            </h1>
            <p>
              When you submit the free trial booking form on{" "}
              <strong>{siteConfig.name}</strong>, your name, preferred contact
              method, current level, and learning goals are sent directly to{" "}
              {siteConfig.teacher.name} ({siteConfig.support.email}) solely to
              contact you and schedule your lessons.
            </p>
            <p>
              Your contact information is never sold or shared with third-party
              marketers. You may request to update or remove your details at any
              time by emailing{" "}
              <a href={`mailto:${siteConfig.support.email}`}>
                {siteConfig.support.email}
              </a>
              .
            </p>
          </div>
        </div>
      </main>
      <StoreFooter />
    </div>
  );
}

