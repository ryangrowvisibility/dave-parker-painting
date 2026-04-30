import type { Metadata } from "next";
import { Crimson_Pro, Albert_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

const display = Crimson_Pro({
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const body = Albert_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const mono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dave Parker Painting — Fresno, CA · Since 1997",
  description:
    "A Fresno painter at the same address since 1997. Interior and exterior residential painting, owner-operated by David Parker Sr.",
  openGraph: {
    title: "Dave Parker Painting — Fresno",
    description: "Fresno's painter, since 1997. Same painter, same Dayton Avenue.",
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
      <body className="min-h-[100dvh] flex flex-col bg-paper text-ink relative">
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
