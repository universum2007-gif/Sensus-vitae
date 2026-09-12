import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import { isLanguage } from "@/lib/site-content";

export const metadata: Metadata = {
  metadataBase: new URL("https://sensusvitae.club"),
  title: { default: "Sensus Vitae", template: "%s · Sensus Vitae" },
  description: "Психология, философия и осознанное мышление — учебные материалы Екатерины Ионовой и клуба Sensus Vitae.",
  icons: {
    icon: "/sensus-vitae-mark.png",
    shortcut: "/sensus-vitae-mark.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const requestHeaders = await headers();
  const requestedLanguage = requestHeaders.get("x-sensus-vitae-language") ?? "ru";
  const language = isLanguage(requestedLanguage) ? requestedLanguage : "ru";

  return (
    <html lang={language}>
      <body>{children}</body>
    </html>
  );
}
