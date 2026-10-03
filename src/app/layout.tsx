import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jahid-codegittu.vercel.app"),
  title: "Jahid Hossen | Full Stack Developer • React • Next.js • Node.js",
  description:
    "Portfolio of Jahid Hossen (Code Gittu) — Full Stack Web Developer experienced in building modern, responsive, and visually engaging web applications using React, Next.js, TypeScript, Tailwind CSS, and Node.js.",
  keywords: [
    "Jahid Hossen",
    "Code Gittu",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Node.js",
    "Meta Infinity BD",
    "Web Developer Bogura Bangladesh",
  ],
  authors: [{ name: "Jahid Hossen" }],
  openGraph: {
    title: "Jahid Hossen | Full Stack Developer • React • Next.js • Node.js",
    description:
      "Portfolio of Jahid Hossen — Full Stack Developer building modern, high-performance web applications with React, Next.js, TypeScript, and Node.js.",
    url: "https://jahid-codegittu.vercel.app",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <body className="signika-font">{children}</body>
    </html>
  );
}
