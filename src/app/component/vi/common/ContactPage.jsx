"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import { useRouter } from "next/navigation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ContactPage = () => {
  const router = useRouter();

  const slides = [
    {
      id: 1,
      img: "https://stcd02265632633.cloud.edgevnpay.vn/website-vnpay-public/fill/2023/10/0q62mo54ofpt1697864508657.jpg",
      link: "/vi/contact",
    },
    {
      id: 2,
      img: "https://thesinhtourism.vn/wp-content/uploads/2025/05/tour-du-lich-ninh-binh-tuyet-tinh-coc-ninh-binh-trang-an-du-lich-the-sinh-tourist-004-1200x540.jpg",
      link: "/vi/contact",
    },
    {
      id: 3,
      img: "https://mia.vn/media/uploads/blog-du-lich/tuyet-tinh-coc-ninh-binh-5-1690702332.jpg",
      link: "/vi/contact",
    },
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
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

      if (res.ok) {
        setMsg("Gửi liên hệ thành công!");
        setForm({
          name: "",
          phone: "",
          email: "",
          address: "",
          date: "",
          room_type: "",
        });
      } else {
        setMsg(data.error || "Gửi thất bại");
      }
    } catch (err) {
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
    <>
    
    <div className="relative w-full flex justify-center py-12 md:py-20">
      

      {/* WRAPPER BACKGROUND */}
      <div
        className="relative rounded-3xl shadow-xl bg-cover bg-center bg-no-repeat p-4 md:p-6 w-full"
        style={{
          backgroundImage: "url('/image/slider/e54ec461eb5867063e49.jpg')",
          maxWidth: "1350px", 
          backgroundSize: "100% auto",
        }}
      >
        
        {/* MAIN CONTENT */}
        <div className="w-full mx-auto px-3 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-start gap-10">
          

          {/* SLIDER */}
          <div className="rounded-xl p-4 md:p-6 lg:p-8 w-full lg:w-3/5 shadow-xl backdrop-blur-md bg-white/20">
            <Slider {...sliderSettings}>
              {slides.map((slide) => (
                <div
                  key={slide.id}
                  className="cursor-pointer"
                  onClick={() => router.push(slide.link)}
                >
                  <img
                    src={slide.img}
                    className="w-full h-64 md:h-96 lg:h-[480px] object-cover rounded-xl"
                  />
                </div>
              ))}
            </Slider>
          </div>

          {/* FORM */}
          <div className="  rounded-4xl p-5 md:p-10 lg:p-25 w-full  lg:w-2/5 shadow-xl backdrop-blur-md bg-white/20">
            <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl text-center font-bold text-[#FFFFFF] mb-6">
              Đặt Lịch Online
            </h2>

            {msg && (
              <p className="text-center mb-4 text-green-600 font-medium">
                {msg}
              </p>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* NAME + PHONE */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  id="name"
                  placeholder="Họ và tên*"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 pb-2 bg-transparent outline-none focus:border-[#8a6d46]"
                  required
                />
                <input
                  type="tel"
                  id="phone"
                  placeholder="Số điện thoại*"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 pb-2 bg-transparent outline-none focus:border-[#8a6d46]"
                  required
                />
              </div>

              {/* EMAIL + ADDRESS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="email"
                  id="email"
                  placeholder="Email*"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 pb-2 bg-transparent outline-none focus:border-[#8a6d46]"
                  required
                />
                <input
                  type="text"
                  id="address"
                  placeholder="Địa chỉ"
                  value={form.address}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 pb-2 bg-transparent outline-none focus:border-[#8a6d46]"
                />
              </div>

              {/* DATE + SELECT */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  id="date"
                  placeholder="mm/dd/yyyy"
                  value={form.date}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 pb-2 bg-transparent outline-none focus:border-[#8a6d46]"
                />

                <div className="relative">
                  <select
                    id="room_type"
                    value={form.room_type}
                    onChange={handleChange}
                    className="w-full border-b border-gray-300 pb-2 bg-transparent outline-none appearance-none pr-10 focus:border-[#8a6d46]"
                  >
                    <option value="">Dịch vụ</option>
                    <option value="Cắm trại">Cắm trại</option>
                    <option value="Thăm quan">Thăm quan</option>
                    <option value="Team building">Team building</option>
                    <option value="Dịch vụ khác">Dịch vụ khác</option>
                     <option value="Dịch vụ khác">Xe Đạp</option>
                  </select>

                  <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-700 pointer-events-none">
                    ▼
                  </span>
                </div>
              </div>

              <p className="text-sm text-[#FFFFFF] leading-relaxed">
                Nhân viên tư vấn sẽ gọi xác nhận.  
                Hotline: <span className="text-[#FFFFFF] font-semibold">0966163701</span> 
                
              </p>

              <button
                type="submit"
                className="w-full bg-[#8a6d46] hover:bg-[#a08a6d] text-white font-bold py-3 rounded-lg transition duration-300"
              >
                Đặt lịch / Nhận tư vấn
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default ContactPage;
