// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <Head>
        {/* Bỏ meta generator mặc định */}
        <meta name="generator" content="" />

        {/* Meta chuẩn SEO & Social */}
        <title>Khu Du Lịch Tuyệt Tịnh Cốc Ninh Bình</title>
        <meta name="description" content="Khu Du Lịch Tuyệt Tịnh Cốc Ninh Bình" />

        {/* Open Graph */}
        <meta property="og:title" content="Khu Du Lịch Tuyệt Tịnh Cốc Ninh Bình" />
        <meta property="og:description" content="Khu Du Lịch Tuyệt Tịnh Cốc Ninh Bình" />
        <meta property="og:image" content="https://tuyettinhcocninhbinh.com/image/logo/505107164797192833.jpg" />
        <meta property="og:url" content="https://tuyettinhcocninhbinh.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Khu Du Lịch Tuyệt Tịnh Cốc Ninh Bình" />
        <meta name="twitter:description" content="Khu Du Lịch Tuyệt Tịnh Cốc Ninh Bình" />
        <meta name="twitter:image" content="https://tuyettinhcocninhbinh.com/image/logo/505107164797192833.jpg" />

        {/* Favicon */}
        <link rel="icon" href="https://tuyettinhcocninhbinh.com/image/logo/505107164797192833.jpg" />
        <link rel="apple-touch-icon" href="https://tuyettinhcocninhbinh.com/image/logo/505107164797192833.jpg" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
