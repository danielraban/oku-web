import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oku — Your mind deserves a gentle space",
  description:
    "A mental health companion for mood tracking, focus sessions, medication reminders, journaling, and community support. Join the early access waitlist.",
  keywords: [
    "mental health",
    "mood tracking",
    "focus timer",
    "medication reminders",
    "journaling",
    "wellness app",
  ],
  openGraph: {
    title: "Oku — Your mind deserves a gentle space",
    description:
      "A mental health companion for mood tracking, focus sessions, medication reminders, and more.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
