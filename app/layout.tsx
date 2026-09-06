import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Sensus Vitae", template: "%s · Sensus Vitae" },
  description: "Психология, философия и осознанное мышление — учебные материалы Екатерины Ионовой и клуба Sensus Vitae.",
  icons: {
    icon: "/sensus-vitae-mark.png",
    shortcut: "/sensus-vitae-mark.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
