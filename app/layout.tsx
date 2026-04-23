import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flysoft — Full-Stack Developer",
  description: "全栈开发者，写 TypeScript，做全栈，偶尔钻进内核里折腾。",
  keywords: ["Flysoft", "Full-Stack", "TypeScript", "Next.js", "Developer"],
  authors: [{ name: "Flysoft", url: "https://flysoft.top" }],
  creator: "Flysoft",
  metadataBase: new URL("https://flysoft.top"),
  openGraph: {
    type: "website",
    url: "https://flysoft.top",
    title: "Flysoft — Full-Stack Developer",
    description: "全栈开发者，写 TypeScript，做全栈，偶尔钻进内核里折腾。",
    siteName: "Flysoft",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Flysoft — Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flysoft — Full-Stack Developer",
    description: "全栈开发者，写 TypeScript，做全栈，偶尔钻进内核里折腾。",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
