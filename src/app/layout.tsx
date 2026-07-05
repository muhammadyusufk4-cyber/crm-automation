import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SITE_URL, SITE_NAME } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — CRM Automation, AI Agents & Revenue Operations`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Converge builds CRM automation, AI agents, and revenue operations systems that eliminate manual sales work so your team spends more time closing deals.",
  keywords: [
    "CRM automation",
    "AI agents",
    "revenue operations",
    "RevOps consulting",
    "sales automation",
    "HubSpot automation",
    "Salesforce automation",
    "GoHighLevel automation",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — CRM Automation, AI Agents & Revenue Operations`,
    description:
      "We build systems that automate your sales operations so your team spends less time on manual work and more time closing deals.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — CRM Automation, AI Agents & Revenue Operations`,
    description:
      "We build systems that automate your sales operations so your team spends less time on manual work and more time closing deals.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                name: SITE_NAME,
                url: SITE_URL,
                logo: `${SITE_URL}/opengraph-image`,
                description:
                  "Revenue automation partner specializing in CRM automation, AI agents, workflow automation, and RevOps consulting.",
                sameAs: ["https://linkedin.com", "https://twitter.com"],
              }),
            }}
          />
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-navy focus:px-4 focus:py-2 focus:text-sm focus:text-white"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
