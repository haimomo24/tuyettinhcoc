import FooterPage from "../component/vi/layout/FooterPage";
import HeaderPagevi from "../component/vi/layout/HeaderPagevi";
import "../globals.css";

export const metadata = {
  title: "Khu Du Lịch Tuyệt Tịnh Cốc Ninh Bình",
  description: "Khu Du Lịch Tuyệt Tịnh Cốc Ninh Bình",

  openGraph: {
    title: "Khu Du Lịch Tuyệt Tịnh Cốc Ninh Bình",
    description: "Khu Du Lịch Tuyệt Tịnh Cốc Ninh Bình",
    url: "https://tuyettinhcocninhbinh.com/vi",
    siteName: "Tuyệt Tịnh Cốc Ninh Bình",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "https://tuyettinhcocninhbinh.com/og.jpg", // thay bằng ảnh thật
        width: 1200,
        height: 630,
        alt: "Tuyệt Tịnh Cốc Ninh Bình",
      },
    ],
  },

  icons: {
    icon: [
      { url: "/images/logo-bai-dinh.png", type: "image/png" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
  },
};

export default function ViLayout({ children }) {
  return (
    <>
      <HeaderPagevi />
      <div className="h-[100px] w-full"></div>
      {children}
      <FooterPage />
    </>
  );
}
