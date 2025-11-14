import SiderbarDashboard from "../component/dashboard/SiderbarDashboard";
import "../globals.css";

export const metadata = {
  title: "Tuyệt Tịnh Cốc",
  icons: {
    icon: [
      { url: "/images/logo-bai-dinh.png", type: "image/png" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
  },
};

export default function Dashboard({ children }) {
  return (
    <html lang="vi">
      <body className="bg-gray-100 min-h-screen">
        {/* Sidebar cố định */}
        <SiderbarDashboard />

        {/* Nội dung chính */}
        <main className="pl-64 p-6"> 
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 min-h-[95vh]">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
