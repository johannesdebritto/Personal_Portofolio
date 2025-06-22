// app/layout.tsx atau app/layout.js (Tergantung projectmu)
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Load font lokal
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Dynamic metadata function
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "JohannesWorks", // Bisa kamu ubah dinamis nanti via param jika mau
    description: "Personal portfolio of Johannes deBritto",
    icons: {
      icon: "/logos.png", // Pastikan file ini ada di public/logos.png
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
