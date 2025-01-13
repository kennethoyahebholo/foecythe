import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

// Import Lexend font with desired weights and subsets
const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Include the font weights you need
});

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
      <body className={`${lexend.variable}`}>{children}</body>
    </html>
  );
}
