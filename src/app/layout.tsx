import type { Metadata } from "next";
import { Anton, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poster = Anton({
  variable: "--font-poster",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Adrian Valdes Diaz — Software Engineer",
  description:
    "Portfolio of Adrian Valdes Diaz, a software engineer who loves building all kinds of software.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${poster.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
