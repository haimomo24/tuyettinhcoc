"use client";
import React, { useState, useEffect } from "react";

const HeaderPagevi = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Theo dõi sự kiện cuộn
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled
          ? "bg-transparent backdrop-blur-md shadow-none py-4"
          : "bg-white shadow-md py-8"
        }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6">

        {/* Bên trái */}
        <nav className="flex gap-30 text-gray-700 font-medium items-center">

          <a
            href="/vi"
            className="hover:text-blue-600 font-semibold text-[18px] transition hover:scale-105"
          >
            Trang chủ
          </a>

          <a
            href="/vi/new/1"
            className="hover:text-blue-600 font-semibold text-[18px] transition hover:scale-105"
          >
            Giới thiệu
          </a>

          {/* Dropdown DỊCH VỤ */}
          <div className="relative group ">
            <a
              href="#contact"
              className="hover:text-blue-600 font-semibold hover:scale-105 text-[18px] transition cursor-pointer"
            >
              Dịch vụ
            </a>

            {/* MENU xổ xuống */}
            <div
              className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible  group-hover:opacity-100 group-hover:visible transition-all duration-300"
             
            
             
            >

              <ul className="flex flex-col py-2 text-gray-700">
                <li>
                  <a
                    href="/vi/service/7"
                    className="block px-4 py-2 hover:bg-blue-100 transition"
                  >
                    Tham quan
                  </a>
                </li>

                <li>
                  <a
                    href="/vi/service/3"
                    className="block px-4 py-2 hover:bg-blue-100 transition"
                  >
                    Team Building
                  </a>
                </li>
                <li>
                  <a
                    href="/vi/service/7"
                    className="block px-4 py-2 hover:bg-blue-100 transition"
                  >
                    Xe Đạp
                  </a>
                </li>

                <li>
                  <a
                    href="/vi/service/5"
                    className="block px-4 py-2 hover:bg-blue-100 transition"
                  >
                    Cắm trại
                  </a>
                </li>



                <li>
                  <a
                    href="/vi/service/8"
                    className="block px-4 py-2 hover:bg-blue-100 transition"
                  >
                    Dịch vụ khác
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </nav>

        {/* Logo ở giữa */}
        <div className="text-3xl font-bold text-blue-700 tracking-wide">
          <a href="/">
            <img
              src="/image/logo/505107164797192833.jpg"
              alt="Logo"
              className="w-15 h-auto object-contain"
            />
          </a>
        </div>

        {/* Bên phải */}
        <nav className="flex gap-30 text-gray-700 font-medium">
          <a
            href="#new"
            className="hover:text-blue-600 font-semibold hover:scale-105 text-[18px] transition"
          >
            Tin tức
          </a>

          <a
            href="/vi/contact"
            className="hover:text-blue-600 hover:scale-105 font-semibold text-[18px] transition"
          >
            Liên hệ
          </a>

          <a
            href="/en"
            className="hover:text-blue-600 hover:scale-105 text-[15px] transition"
          >
            en
          </a>
        </nav>
      </div>
    </header>
  );
};

export default HeaderPagevi;
