"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import { useRouter } from "next/navigation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ContactPage = () => {
  const router = useRouter();

  const slides = [
    { id: 1, img: "https://stcd02265632633.cloud.edgevnpay.vn/website-vnpay-public/fill/2023/10/0q62mo54ofpt1697864508657.jpg", link: "/vi/contact" },
    { id: 2, img: "https://thesinhtourism.vn/wp-content/uploads/2025/05/tour-du-lich-ninh-binh-tuyet-tinh-coc-ninh-binh-trang-an-du-lich-the-sinh-tourist-004-1200x540.jpg", link: "/vi/contact" },
    { id: 3, img: "https://mia.vn/media/uploads/blog-du-lich/tuyet-tinh-coc-ninh-binh-5-1690702332.jpg", link: "/vi/contact" },
  ];

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    date: "",
    room_type: "",
  });
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (res.ok) {
        setMsg("Gửi liên hệ thành công!");
        setForm({ name: "", phone: "", email: "", address: "", date: "", room_type: "" });
      } else {
        setMsg(data.error || "Gửi thất bại");
      }
    } catch (err) {
      console.error(err);
      setMsg("Lỗi server, thử lại sau.");
    }
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="relative bg-cover bg-center">

      <div className="absolute max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 inset-0 opacity-60">
        <h2 className="font-['Playfair_Display'] font-semibold text-[#8a6d46] text-3xl text-center lg:text-left">
          LIÊN HỆ ĐẶT LỊCH
        </h2>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col lg:flex-row justify-center items-start lg:space-x-12">

        {/* Slider bên trái */}
        <div className="bg-gray-300 backdrop-blur-sm rounded-xl p-6 md:p-8 lg:p-10 w-full lg:w-2/3 max-w-3xl mb-12 lg:mb-0 shadow-xl">
          <Slider {...sliderSettings}>
            {slides.map((slide) => (
              <div key={slide.id} onClick={() => router.push(slide.link)} className="w-full cursor-pointer">
                <img src={slide.img} alt={`Slide ${slide.id}`} className="w-full h-98 object-cover rounded-xl" />
              </div>
            ))}
          </Slider>
        </div>

        {/* Form bên phải */}
        <div className="bg-gray-300 rounded-xl p-6 md:p-8 lg:p-10  w-full lg:w-1/3 max-w-md shadow-xl">
          <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#8a6d46] mb-8">Đặt lịch online</h2>
          {msg && <p className="text-center mb-4 text-green-600 font-medium">{msg}</p>}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                id="name"
                placeholder="Họ và tên*"
                value={form.name}
                onChange={handleChange}
                className="w-full border-b bg-gray-300 border-gray-300 focus:border-[#8a6d46] focus:ring-0 outline-none pb-2 text-gray-700 placeholder-gray-400 transition-colors duration-200"
                required
              />
              <input
                type="tel"
                id="phone"
                placeholder="Số điện thoại*"
                value={form.phone}
                onChange={handleChange}
                className="w-full border-b bg-gray-300 border-gray-300 focus:border-[#8a6d46] focus:ring-0 outline-none pb-2 text-gray-700 placeholder-gray-400 transition-colors duration-200"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="email"
                id="email"
                placeholder="Email*"
                value={form.email}
                onChange={handleChange}
                className="w-full border-b bg-gray-300 border-gray-300 focus:border-[#8a6d46] focus:ring-0 outline-none pb-2 text-gray-700 placeholder-gray-400 transition-colors duration-200"
                required
              />
              <input
                type="text"
                id="address"
                placeholder="Địa chỉ"
                value={form.address}
                onChange={handleChange}
                className="w-full border-b bg-gray-300 border-gray-300 focus:border-[#8a6d46] focus:ring-0 outline-none pb-2 text-gray-700 placeholder-gray-400 transition-colors duration-200"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                id="date"
                placeholder="mm/dd/yyyy"
                value={form.date}
                onChange={handleChange}
                className="w-full border-b bg-gray-300 border-gray-300 focus:border-[#8a6d46] focus:ring-0 outline-none pb-2 text-gray-700 placeholder-gray-400 transition-colors duration-200"
              />
              <div className="relative">
                <select
                  id="room_type"
                  value={form.room_type}
                  onChange={handleChange}
                  className="w-full border-b bg-gray-300 border-gray-300 focus:border-[#8a6d46] 
               focus:ring-0 outline-none pb-2 text-gray-700 placeholder-gray-400
               appearance-none pr-10"
                >
                  <option className="bg-gray-300 text-gray-700" value="">Dịch vụ</option>
                  <option className="bg-gray-300 text-gray-700" value="Cắm trại">Cắm trại</option>
                  <option className="bg-gray-300 text-gray-700" value="Thăm quan">Thăm quan</option>
                  <option className="bg-gray-300 text-gray-700" value="Team building">Team building</option>
                  <option className="bg-gray-300 text-gray-700" value="Dịch vụ khác">Dịch vụ khác</option>
                </select>

                {/* Mũi tên */}
                <span className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-700">
                  ▼
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed pt-4">
              Vui lòng điền thông tin, tư vấn viên sẽ gọi cho bạn để xác nhận. Hotline: <span className="text-[#8a6d46] font-semibold">0912.900.897</span> hoặc <span className="text-[#8a6d46] font-semibold">0911.999.007</span>.
            </p>

            <button type="submit" className="w-full bg-[#8a6d46] hover:bg-[#a08a6d] text-white font-bold py-3 rounded-lg transition duration-300 shadow-md">
              Đặt lịch / Nhận tư vấn
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
