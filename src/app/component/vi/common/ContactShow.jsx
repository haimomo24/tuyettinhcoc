"use client";

import React, { useState } from "react";

const ContactShow = () => {
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
    <div className="min-h-screen bg-stone-200   py-10 px-4">
        <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl text-center font-bold text-[#8a6d46]  mb-6">
              Thông tin liên hệ 
            </h2>
            <p className="text-sm text-center font-bold  leading-relaxed">
                Địa chỉ: Phường Tây Hoa Lư - Ninh Bình    
                
                
              </p>
              <br></br>

              <p className="text-sm text-center font-bold  leading-relaxed mt-[-20px]" >
                Email:  <span className=" font-bold">tuyettinhcocnb35@gmail.com</span>
              </p>
      <div className="max-w-7xl mx-auto mt-[50px] grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* ===== CỘT TRÁI ===== */}
       <div className="   p-5 md:p-10 lg:p-25 w-full  shadow-2xl backdrop-blur-md  bg-stone-100">
          <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl text-center font-bold text-[#8a6d46]  mb-6">
              Đặt lịch online
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

              <p className="text-sm  leading-relaxed">
                Nhân viên tư vấn sẽ gọi xác nhận.  
                
                
              </p>

              <p className="text-sm  leading-relaxed mt-[-20px]" >
                Hotline:  <span className=" font-semibold">0966163701</span>
              </p>
              

              <button
                type="submit"
                className="w-full bg-[#8a6d46] hover:bg-[#a08a6d] text-white font-bold py-3 rounded-lg transition duration-300"
              >
                Đặt lịch / Nhận tư vấn
              </button>
            </form>
          </div>

        {/* ===== CỘT PHẢI - GOOGLE MAP ===== */}
        <div className=" shadow-2xl rounded-2xl border border-gray-200">
          <iframe
            title="Google Map"
            className="w-full h-full min-h-[650px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1dxxxxxx!2d105.9158125!3d20.2795625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3136797f33977e99%3A0x129f526e69979bed!2zQuG7h24gVOG7iyBDw6FjaCBD4bqvIEFtIFRpw6pu!5e0!3m2!1svi!2s!4v0000000000000"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactShow;
