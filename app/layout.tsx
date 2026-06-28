import type { Metadata, Viewport } from "next";
import { Sora, Plus_Jakarta_Sans, Geist, Poppins } from "next/font/google";

import { siteConfig } from "@/lib/site";
import { IntroProvider } from "@/components/intro-provider";
import "@/styles/globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

// Used for numerals (`.tnum`)
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

// Brand wordmark typography (matches the official SafarSafe lockup)
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  // For a pixel-perfect favicon add app/icon.png and app/apple-icon.png
  // exported at 32px and 180px from the SVG.
  icons: {
    icon: [{ url: "/images/logo/safarsafe-logo.svg", type: "image/svg+xml" }],
    shortcut: [{ url: "/images/logo/safarsafe-logo.svg", type: "image/svg+xml" }],
    apple: [{ url: "/images/logo/safarsafe-logo.svg" }],
  },
  keywords: [
    "SafarSafe",
    "travel safety",
    "safe travel",
    "journey safety",
    "travel technology",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} brand preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#FCFBFE",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${jakarta.variable} ${sora.variable} ${geist.variable} ${poppins.variable} min-h-dvh font-sans antialiased`}
      >
        <IntroProvider>{children}</IntroProvider>
      </body>
    </html>
  );
}
