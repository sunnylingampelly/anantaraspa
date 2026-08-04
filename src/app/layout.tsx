import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter, Manrope } from "next/font/google";

import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import { localBusinessSchema, organizationSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CommandMenuProvider } from "@/components/layout/command-menu";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MobileCtaBar } from "@/components/layout/mobile-cta-bar";
import { WhatsAppFloat } from "@/components/layout/whatsapp-float";
import { BackToTop } from "@/components/layout/back-to-top";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { CursorGlow } from "@/components/layout/cursor-glow";
import { SwRegister } from "@/components/providers/sw-register";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Luxury Spa in Gachibowli, Hyderabad`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.shortDescription,
  applicationName: siteConfig.name,
  keywords: [
    "spa in gachibowli",
    "spa in raidurg",
    "luxury spa gachibowli",
    "best spa in gachibowli",
    "massage centre gachibowli",
    "massage spa near raidurg metro",
    "body massage hyderabad",
    "thai massage hyderabad",
    "balinese massage hyderabad",
    "deep tissue massage hyderabad",
    "couple spa hyderabad",
    "spa near hitech city",
    "spa near financial district",
    "spa near mindspace madhapur",
    "spa near wipro circle gachibowli",
    "spa near dlf cyber city",
    "corporate spa membership hyderabad",
    "stress relief massage for IT professionals",
    "wellness spa hyderabad",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: `${siteConfig.name} | Luxury Spa in Gachibowli, Hyderabad`,
    description: siteConfig.shortDescription,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Luxury Spa in Gachibowli, Hyderabad`,
    description: siteConfig.shortDescription,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: siteConfig.name,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fcfcfa" },
    { media: "(prefers-color-scheme: dark)", color: "#1b1f1d" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      suppressHydrationWarning
      className={`${cormorant.variable} ${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd data={[localBusinessSchema(), organizationSchema()]} />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <TooltipProvider delay={150}>
            <SmoothScrollProvider>
              <CommandMenuProvider>
                <a
                  href="#main-content"
                  className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-5 focus:py-2.5 focus:text-primary-foreground"
                >
                  Skip to content
                </a>
                <ScrollProgress />
                <CursorGlow />
                <Header />
                <main id="main-content" className="flex-1">
                  {children}
                </main>
                <Footer />
                <MobileCtaBar />
                <WhatsAppFloat />
                <BackToTop />
                <SwRegister />
              </CommandMenuProvider>
            </SmoothScrollProvider>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
