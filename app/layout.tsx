import type { Metadata } from "next";
import { Playfair_Display, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Playfair_Display({
  variable: "--font-display",
  weight: ["400", "500", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dave Parker Painting — Fresno, CA · Since 1997",
  description:
    "A Fresno painter at the same Dayton Avenue address since 1997. Interior and exterior residential painting, owner-operated by David Parker Sr.",
  openGraph: {
    title: "Dave Parker Painting — Fresno",
    description: "Twenty-eight years of Fresno paint. Same painter. Same address.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} antialiased`}
    >
      <body className="min-h-[100dvh] flex flex-col bg-newsprint text-ink relative">
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
