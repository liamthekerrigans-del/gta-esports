import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GTA Esports",
  description: "Greater Toronto Area esports league platform.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}