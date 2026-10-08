import { Sora, Manrope } from "next/font/google";
import "./globals.css";

const display = Sora({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = Manrope({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata = {
  title: "Soumodip Ghosh — Data & AI/ML Engineer | Backend Developer",
  description:
    "Portfolio of Soumodip Ghosh: data-driven and AI-powered applications built with Python, machine learning, and scalable backend technologies.",
};

export const viewport = { themeColor: "#05070c" };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="bg-ink font-body text-white antialiased">{children}</body>
    </html>
  );
}
