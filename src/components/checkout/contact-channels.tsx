// Bảng 6 kênh liên hệ trực tiếp với cô Huyền Hannah (Email, Phone, WhatsApp, Zalo, Messenger, Fanpage)
import { siteConfig } from "@/config/site";

interface ContactChannelsPanelProps {
  title: string;
}

export function ContactChannelsPanel({ title }: ContactChannelsPanelProps) {
  return (
    <div className="contact-channel-panel">
      <div className="contact-channel-title">{title}</div>
      <div className="contact-channels">
        <a
          className="contact-channel"
          aria-label="Email Huyền Hannah"
          href={`mailto:${siteConfig.support.email}`}
        >
          <span className="contact-icon contact-email">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 6h18v12H3z"></path>
              <path d="m3 7 9 7 9-7"></path>
            </svg>
          </span>
          <span>Email</span>
        </a>

        <a
          className="contact-channel"
          aria-label="Call Huyền Hannah at +84 364 072 287"
          href={siteConfig.support.phoneHref}
        >
          <span className="contact-icon contact-phone">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.5 3.5h-2a2 2 0 0 0-2 2c0 9 6 15 15 15a2 2 0 0 0 2-2v-2l-4.5-2-2 2c-3.3-1.3-5.7-3.7-7-7l2-2z"></path>
            </svg>
          </span>
          <span>Phone</span>
        </a>

        <a
          className="contact-channel"
          aria-label="Message Huyền Hannah on WhatsApp"
          href={siteConfig.support.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="contact-icon contact-whatsapp">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.4-4A8 8 0 1 1 20 11.5Z"></path>
              <path d="M9 8.5c.4 2.7 2 4.3 4.7 5l1-1.2 2 .8c-.2 1.4-1.1 2-2.3 2-3.7-.5-6.8-3.6-7.2-7.2 0-1.1.7-2 2-2.2l.8 2z"></path>
            </svg>
          </span>
          <span>WhatsApp</span>
        </a>

        <a
          className="contact-channel"
          aria-label="Contact Huyền Hannah on Zalo"
          href={siteConfig.support.zaloUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="contact-icon contact-zalo" aria-hidden="true">
            <b>Z</b>
          </span>
          <span>Zalo</span>
        </a>

        <a
          className="contact-channel"
          aria-label="Message Huyền Hannah on Messenger"
          href={siteConfig.support.messengerUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="contact-icon contact-messenger">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 3a9 9 0 0 0-7.5 14l-.8 3 3.4-.9A9 9 0 1 0 12 3Z"></path>
              <path d="m7.5 14 3.2-3.4 2.3 1.8 3.5-3.4-3.2 4.8-2.4-1.8z"></path>
            </svg>
          </span>
          <span>Messenger</span>
        </a>

        <a
          className="contact-channel"
          aria-label="Visit the Vietnamese with Huyền Hannah Facebook page"
          href={siteConfig.support.facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="contact-icon contact-facebook">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M13.4 21v-7.3h2.5l.4-2.9h-2.9V9c0-.9.3-1.4 1.5-1.4h1.5V5.1c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2h-2.5v2.9h2.5V21z"></path>
            </svg>
          </span>
          <span>Fanpage</span>
        </a>
      </div>
    </div>
  );
}

