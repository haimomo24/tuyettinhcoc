
import FooterPage from "../component/vi/layout/FooterPage";
import HeaderPagevi from "../component/vi/layout/HeaderPagevi";
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
       <HeaderPagevi/>
        {children}
        <FooterPage/>
       
       
      </body>
    </html>
  );
}
