"use client";
import React, { useState, useEffect } from "react";

const HeaderPagevi = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-transparent backdrop-blur-md shadow-none py-4"
          : "bg-white shadow-md py-8"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6">

        {/* MOBILE MENU BUTTON (ẩn trên desktop) */}
        <button
          className="lg:hidden text-gray-700"
          onClick={() => setOpenMenu(true)}
        >
          {/* Icon Menu */}
          <svg width="32" height="32" fill="currentColor">
            <path d="M4 8h24M4 16h24M4 24h24" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </button>

        {/* DESKTOP LEFT NAV - giữ nguyên 100% */}
        <nav className="hidden lg:flex gap-30 text-gray-700 font-medium items-center">

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

          {/* Dropdown */}
          <div className="relative group">
            <a
              className="hover:text-blue-600 font-semibold hover:scale-105 text-[18px] transition cursor-pointer"
            >
              Dịch vụ
            </a>

            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg 
              opacity-0 invisible group-hover:opacity-100 group-hover:visible 
              transition-all duration-300">
              <ul className="flex flex-col py-2 text-gray-700">
                <li><a href="/vi/service/7" className="block px-4 py-2 hover:bg-blue-100">Tham quan</a></li>
                <li><a href="/vi/service/3" className="block px-4 py-2 hover:bg-blue-100">Team Building</a></li>
                <li><a href="/vi/service/7" className="block px-4 py-2 hover:bg-blue-100">Xe Đạp</a></li>
                <li><a href="/vi/service/5" className="block px-4 py-2 hover:bg-blue-100">Cắm trại</a></li>
                <li><a href="/vi/service/8" className="block px-4 py-2 hover:bg-blue-100">Dịch vụ khác</a></li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Logo giữa - giữ nguyên */}
        <div className="text-3xl font-bold text-blue-700 tracking-wide">
          <a href="/">
            <img
              src="/image/logo/505107164797192833.jpg"
              alt="Logo"
              className="w-15 h-auto object-contain"
            />
          </a>
        </div>

        {/* DESKTOP RIGHT NAV - giữ nguyên */}
        <nav className="hidden lg:flex gap-30 text-gray-700 font-medium">
          <a href="#new" className="hover:text-blue-600 font-semibold hover:scale-105 text-[18px]">
            Tin tức
          </a>
          <a href="/vi/contact" className="hover:text-blue-600 hover:scale-105 font-semibold text-[18px]">
            Liên hệ
          </a>
          <a href="/en" className="hover:text-blue-600 hover:scale-105 text-[15px]">
            EN
          </a>
        </nav>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 left-0 w-72 h-full bg-white shadow-lg z-[9999] 
        transform ${openMenu ? "translate-x-0" : "-translate-x-full"} 
        transition-transform duration-300`}
      >
        {/* Header */}
        <div className="p-5 flex justify-between items-center border-b">
          <span className="text-xl font-bold">Menu</span>

          <button onClick={() => setOpenMenu(false)}>
            <svg width="32" height="32" fill="currentColor">
              <path d="M8 8l16 16M24 8L8 24" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </button>
        </div>

        {/* Items */}
        <nav className="flex flex-col p-5 text-gray-700">

          <a href="/vi" className="py-3 border-b">Trang chủ</a>
          <a href="/vi/new/1" className="py-3 border-b">Giới thiệu</a>

          <div className="border-b">
            <p className="py-3 font-semibold">Dịch vụ</p>
            <div className="pl-3 flex flex-col">
              <a href="/vi/service/7" className="py-2">Tham quan</a>
              <a href="/vi/service/3" className="py-2">Team Building</a>
              <a href="/vi/service/7" className="py-2">Xe Đạp</a>
              <a href="/vi/service/5" className="py-2">Cắm trại</a>
              <a href="/vi/service/8" className="py-2">Dịch vụ khác</a>
            </div>
          </div>

          <a href="#new" className="py-3 border-b">Tin tức</a>
          <a href="/vi/contact" className="py-3 border-b">Liên hệ</a>
          <a href="/en" className="py-3">EN</a>
        </nav>
      </div>
    </header>
  );
};

export default HeaderPagevi;
