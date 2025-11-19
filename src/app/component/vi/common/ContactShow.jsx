"use client";

import React, { useState } from "react";

const ContactShow = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    content: "",
  });
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/mes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setMsg("Gửi liên hệ thành công!");
        setForm({ name: "", email: "", phone: "", content: "" });
      } else {
        setMsg(data.error || "Gửi thất bại");
      }
    } catch (err) {
      console.error(err);
      setMsg("Lỗi server, thử lại sau.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* ===== CỘT TRÁI ===== */}
        <div className="bg-white p-10 shadow-xl rounded-2xl border border-gray-200 overflow-auto max-h-screen">
          <h2 className="text-3xl font-bold mb-8 text-green-700">
            Liên hệ với chúng tôi
          </h2>

          {msg && <p className="text-center mb-4 text-green-600 font-medium">{msg}</p>}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="font-semibold text-gray-700">Họ và tên</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full mt-2 px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-500 transition"
                placeholder="Nhập họ tên..."
                required
              />
            </div>

            <div>
              <label className="font-semibold text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full mt-2 px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-500 transition"
                placeholder="Nhập email..."
                required
              />
            </div>

            <div>
              <label className="font-semibold text-gray-700">Số điện thoại</label>
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full mt-2 px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-500 transition"
                placeholder="Nhập số điện thoại..."
                required
              />
            </div>

            <div>
              <label className="font-semibold text-gray-700">Nội dung đánh giá</label>
              <textarea
                name="content"
                value={form.content}
                onChange={handleChange}
                rows="5"
                className="w-full mt-2 px-4 py-3 border rounded-lg outline-none resize-none focus:ring-2 focus:ring-green-500 transition"
                placeholder="Nhập nội dung..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-green-700 hover:bg-green-800  py-3 rounded-lg font-semibold transition"
            >
              Gửi liên hệ
            </button>
          </form>
        </div>

        {/* ===== CỘT PHẢI - GOOGLE MAP ===== */}
        <div className="bg-white shadow-xl rounded-2xl border border-gray-200">
          <iframe
            title="Google Map"
            className="w-full h-full min-h-[650px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3726.3212758985043!2d105.975262!3d20.240991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135d4cbe264fd5d%3A0x61af2f657e0f684e!2zQsOhbyDEkMOtbmggLSBOaW5oIELDrG5o!5e0!3m2!1svi!2s!4v1683633734427!5m2!1svi!2s"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactShow;
