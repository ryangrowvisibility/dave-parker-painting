import type { Metadata } from "next";
import { Libre_Caslon_Text, Manrope, JetBrains_Mono, Italianno } from "next/font/google";
import "./globals.css";

const display = Libre_Caslon_Text({ variable: "--font-display", subsets: ["latin"], weight: ["400", "700"], style: ["normal","italic"], display: "swap" });
const body = Manrope({ variable: "--font-body", subsets: ["latin"], display: "swap" });
const mono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"], display: "swap" });
const script = Italianno({ variable: "--font-script", subsets: ["latin"], weight: ["400"], display: "swap" });

export const metadata: Metadata = {
  title: "Dave Parker Painting — Fresno's Trusted Painter Since 1997",
  description:
    "Dave Parker Painting has been painting Fresno homes since 1997. High-quality interior, exterior, residential and custom painting from David Parker Sr. Twenty-eight years on Dayton Avenue.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable} ${script.variable} antialiased`}>
      <body className="min-h-[100dvh] bg-paper text-ink font-[family-name:var(--font-body)]">{children}</body>
    </html>
  );
}
