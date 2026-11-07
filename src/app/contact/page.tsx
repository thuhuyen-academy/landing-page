// Trang Liên hệ trực tiếp (/contact) với đầy đủ 6 kênh hỗ trợ của cô Huyền Hannah
import { ContactChannelsPanel } from "@/components/checkout/contact-channels";
import { StoreFooter } from "@/components/layout/footer";
import { StoreHeader } from "@/components/layout/header";
import { siteConfig } from "@/config/site";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--paper)] text-[var(--ink)]">
      <StoreHeader />
      <main className="section flex-1">
        <div className="wrap">
          <div className="head">
            <div className="eyebrow">DIRECT CONTACT</div>
            <h2>Contact {siteConfig.teacher.name}</h2>
            <p>
              Have questions about trial lessons, online scheduling, or meeting
              in person in Da Nang? Reach out directly through any channel
              below.
            </p>
          </div>
          <div className="card pay" style={{ maxWidth: 680 }}>
            <ContactChannelsPanel title="Prefer to message directly?" />
          </div>
        </div>
      </main>
      <StoreFooter />
    </div>
  );
}

