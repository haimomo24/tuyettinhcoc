

import FooterPageEn from "../component/en/layout/FooterPageEn";
import HeaderPageen from "../component/en/layout/HeaderPageen";
import "../globals.css";


export const metadata = {
  title: "Tuyệt Tịnh Cốc ",
  icons: {
    icon: [
      { url: "/images/logo-bai-dinh.png", type: "image/png" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
  },
};

export default function ViLayout({ children }) {
  return (
    <html lang="vi">
      <body>

        <HeaderPageen />

        <div>
          <div className="h-[100px] w-full"></div>
          {children}
        </div>
        <FooterPageEn />

      </body>
    </html>
  );
}
