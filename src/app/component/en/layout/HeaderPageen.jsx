"use client";
import React, { useState, useEffect } from "react";

const HeaderPagevi = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Theo dõi sự kiện cuộn
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // khi cuộn xuống >50px thì đổi màu
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full  z-50 transition-all duration-500 ${
        isScrolled ? "bg-transparent backdrop-blur-md shadow-none py-4" : "bg-white shadow-md py-8"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6">
        {/* Bên trái */}
        <nav className="flex gap-30 text-gray-700 font-medium">
          <a href="/en" className="hover:text-blue-600  font-semibold  text-[18px] transition">
           HOME
          </a>
          <a href="#serviceE" className="hover:text-blue-600  font-semibold  text-[18px] transition">
            INTRODUCE
          </a>
          <a href="#contacten" className="hover:text-blue-600  font-semibold  text-[18px] transition">
            SERVICES
          </a>
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
          <a href="#newen" className="hover:text-blue-600  font-semibold  text-[18px] transition">
            NEWS
          </a>
          <a href="/en/contact" className="hover:text-blue-600  font-semibold  text-[18px] transition">
            CONTACT
          </a>
          <a href="/vi" className="hover:text-blue-600   text-[15px] transition">
            VI
          </a>
        </nav>
      </div>
    </header>
  );
};

export default HeaderPagevi;
