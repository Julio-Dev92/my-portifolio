import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { PrefsScript } from "@/lib/i18n";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Julio Saldanha — Desenvolvedor Full-Stack",
  description:
    "Portfólio de Julio Saldanha, desenvolvedor full-stack (Next.js, React, Laravel, .NET) em Porto Alegre. Full-stack developer portfolio.",
  openGraph: {
    title: "Julio Saldanha — Full-Stack Developer",
    description: "Next.js · React · Laravel · .NET · React Native · AI integrations",
    type: "website",
    locale: "pt_BR",
    alternateLocale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f4ef" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1012" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      data-lang="pt"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${instrument.variable} antialiased`}
    >
      <head>
        <PrefsScript />
      </head>
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
