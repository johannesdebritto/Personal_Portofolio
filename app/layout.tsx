// app/layout.tsx
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

// Metadata tetap boleh disediakan
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "JohannesWorks",
    description: "Personal portfolio of Johannes deBritto",
    icons: {
      icon: "/images/logos.ico", // Sesuaikan path favicon baru
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
      <head>
        {/* Tambahkan favicon secara manual */}
        <link rel="icon" href="/images/logos.ico" type="image/x-icon" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
