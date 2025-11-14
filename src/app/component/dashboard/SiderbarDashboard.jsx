import React from "react";

const SiderbarDashboard = () => {
  return (
    <aside className="w-64 bg-white shadow-md p-4 flex flex-col justify-between fixed left-0 top-0 h-screen">
      <div>
        <div className="flex items-center gap-2 mb-8">
          <img
            src="/image/logo/505107164797192833.jpg"
            alt="Logo"
            className="w-10 h-10 flex items-center justify-center"
          />
        </div>

        <nav className="space-y-3">
          <a
            href="/dashboard"
            className="block px-4 py-2 rounded-md hover:bg-blue-100 hover:text-blue-600 transition"
          >
            Trang chủ
          </a>
          <a
            href="/dashboard/checkin"
            className="block px-4 py-2 rounded-md hover:bg-blue-100 hover:text-blue-600 transition"
          >
            Điểm checkin
          </a>
           <a
            href="/dashboard/service"
            className="block px-4 py-2 rounded-md hover:bg-blue-100 hover:text-blue-600 transition"
          >
           Dịch vụ
          </a>
          <a
            href="/dashboard/new"
            className="block px-4 py-2 rounded-md hover:bg-blue-100 hover:text-blue-600 transition"
          >
            Tin tức
          </a>
          <a
            href="/dashboard/nodevisit"
            className="block px-4 py-2 rounded-md hover:bg-blue-100 hover:text-blue-600 transition"
          >
            Sổ tay du lịch
          </a>
         
          <a
            href="/dashboard/contact"
            className="block px-4 py-2 rounded-md hover:bg-blue-100 hover:text-blue-600 transition"
          >
            Liên hệ
          </a>
        </nav>
      </div>

      <div className="border-t pt-4 mt-6">
        <button className="w-full text-left px-4 py-2 text-red-500 hover:bg-red-100 rounded-md">
          Đăng xuất
        </button>
      </div>
    </aside>
  );
};

export default SiderbarDashboard;
