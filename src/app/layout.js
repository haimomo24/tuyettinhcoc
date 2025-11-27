// app/layout.js
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

export const metadata = {
  title: "Khu Du Lịch Tuyệt Tịnh Cốc Ninh Bình",
  description: "Khu Du Lịch Tuyệt Tịnh Cốc Ninh Bình",
  keywords: ["Tuyệt Tịnh Cốc", "Ninh Bình", "Du Lịch", "Tour"],
  authors: [{ name: "Tuyệt Tịnh Cốc Ninh Bình" }],
  robots: { index: true, follow: true },

  openGraph: {
    title: "Khu Du Lịch Tuyệt Tịnh Cốc Ninh Bình",
    description: "Khu Du Lịch Tuyệt Tịnh Cốc Ninh Bình",
    url: "https://tuyettinhcocninhbinh.com",
    siteName: "Tuyệt Tịnh Cốc Ninh Bình",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "https://tuyettinhcocninhbinh.com/image/logo/505107164797192833.jpg",
        width: 1200,
        height: 630,
        alt: "Tuyệt Tịnh Cốc Ninh Bình",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Khu Du Lịch Tuyệt Tịnh Cốc Ninh Bình",
    description: "Khu Du Lịch Tuyệt Tịnh Cốc Ninh Bình",
    images: [
      "https://tuyettinhcocninhbinh.com/image/logo/505107164797192833.jpg",
    ],
  },

  icons: {
    icon: "https://tuyettinhcocninhbinh.com/image/logo/505107164797192833.jpg",
    apple: "https://tuyettinhcocninhbinh.com/image/logo/505107164797192833.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
