import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prathmesh Salunke | AI/ML Engineer",
  description:
    "Portfolio of Prathmesh Salunke, an AI/ML engineer and full-stack developer building intelligent and data-driven applications.",
  keywords: [
    "Prathmesh Salunke",
    "AI Engineer",
    "Machine Learning Engineer",
    "Full Stack Developer",
    "Next.js Developer",
    "Portfolio",
  ],
  authors: [
    {
      name: "Prathmesh Salunke",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
