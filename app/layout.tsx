import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "GTA Esports",
    template: "%s | GTA Esports",
  },
  description: "Greater Toronto Area esports league and tournament platform.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/gtaesports-logo.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/gtaesports-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}