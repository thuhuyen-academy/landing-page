// Layout gốc của toàn bộ ứng dụng Vietnamese with Huyền Hannah tích hợp Auth0Provider và bộ font Be Vietnam Pro
import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import { Auth0Provider } from "@auth0/nextjs-auth0/client";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "sonner";
import { siteConfig } from "@/config/site";
import { auth0 } from "@/lib/auth0";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["vietnamese", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#f8fbff",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Da Nang`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description:
      "Learn Vietnamese through clear lessons, active practice, and useful feedback.",
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        type: "image/png",
        alt: "Learn Vietnamese with Huyền Hannah — online worldwide and in person in Da Nang",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description:
      "Learn Vietnamese through clear lessons, active practice, and useful feedback.",
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: [
      { url: "/icons/app-icon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/icons/app-icon.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let initialUser = undefined;
  if (auth0) {
    try {
      const session = await auth0.getSession();
      initialUser = session?.user;
    } catch {
      initialUser = undefined;
    }
  }

  return (
    <html lang="en" className={beVietnamPro.variable}>
      <body className="min-h-screen bg-[var(--paper)] font-sans text-[var(--ink)] antialiased">
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Auth0Provider user={initialUser}>{children}</Auth0Provider>
        <Toaster position="top-right" richColors closeButton />
        <Analytics />
      </body>
    </html>
  );
}
