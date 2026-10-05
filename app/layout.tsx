import type { Metadata, Viewport } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import { PrefsScript } from "@/lib/i18n";
import "./globals.css";

const archivo = Archivo({ variable: "--font-archivo", subsets: ["latin"] });
const jetbrains = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"] });

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
    { media: "(prefers-color-scheme: light)", color: "#f3f3f3" },
    { media: "(prefers-color-scheme: dark)", color: "#1e1e1e" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      data-lang="pt"
      suppressHydrationWarning
      className={`${archivo.variable} ${jetbrains.variable} antialiased`}
    >
      <head>
        <PrefsScript />
      </head>
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
