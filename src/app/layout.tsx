import type { Metadata } from "next";
// import { Lexend } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Fortcythe - Your Partner in Scalable Business Growth | Digital Solutions...",
  description:
    "Your Partner in Scalable Business Growth | Digital Solutions...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
