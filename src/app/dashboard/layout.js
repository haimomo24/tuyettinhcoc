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

export default function DashboardLayout({ children }) {
  return (
    <div className="bg-gray-100 min-h-screen flex">
      {/* Sidebar */}
      <SiderbarDashboard />

      {/* Main content */}
      <main className="flex-1 p-6 ml-64">
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 min-h-[95vh]">
          {children}
        </div>
      </main>
    </div>
  );
}
