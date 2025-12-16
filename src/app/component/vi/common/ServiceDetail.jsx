"use client";
import { useEffect, useState } from "react";

const ServiceDetail = ({ id }) => {
  const [visit, setVisit] = useState(null);
  const [loading, setLoading] = useState(true);

  // FORM STATE (GIỐNG CONTACT PAGE)
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    date: "",
    room_type: "",
  });

  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (!id) return;

    const fetchVisit = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/service/${id}`
        );
        if (!res.ok) throw new Error("Không lấy được dữ liệu");
        const data = await res.json();
        setVisit(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchVisit();
  }, [id]);

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
        setMsg("Đặt lịch thành công! Chúng tôi sẽ liên hệ với quý khách trong thời gian sớm nhất.");
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
      setMsg("Lỗi server, vui lòng thử lại sau.");
    }
  };

  if (loading)
    return (
      <div className="text-center py-20 text-gray-500">
        Đang tải dữ liệu...
      </div>
    );

  if (!visit)
    return (
      <div className="text-center py-20 text-gray-500">
        Không tìm thấy dữ liệu
      </div>
    );

  const sections = [
    { title: visit.title_1, image: visit.image_1 },
    { title: visit.title_2, image: visit.image_2 },
    { title: visit.title_3, image: visit.image_3 },
    { title: visit.title_4, image: visit.image_4 },
  ].filter((s) => s.title || s.image);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-8 lg:grid lg:grid-cols-3 lg:gap-8">
        {/* ARTICLE */}
        <article className="lg:col-span-2 space-y-8">
          <h1 className="text-4xl font-bold leading-tight text-gray-900 mb-6 border-b pb-4">
            {visit.name}
          </h1>

          {sections.map((section, index) => (
            <div key={index} className="space-y-4">
              {section.title && (
                <p className="text-lg leading-7 text-gray-800 text-justify">
                  {section.title}
                </p>
              )}
              {section.image && (
                <img
                  src={`${process.env.NEXT_PUBLIC_API_URL}/uploads/service/${section.image}`}
                  alt={`Ảnh ${index + 1}`}
                  className="w-full h-auto rounded-lg shadow-md border"
                />
              )}
            </div>
          ))}

          <div className="text-right mt-10 italic text-gray-600">
            — End of article —
          </div>
        </article>

        {/* SIDEBAR FORM */}
        <aside className="sticky w-[120%] top-54 self-start">
          <div className="bg-white p-5 rounded-xl shadow-md border space-y-4 max-h-[620px] overflow-y-auto">
            <h2 className="text-xl font-semibold border-b pb-2 mb-3 text-gray-800">
              Đặt Lịch Online
            </h2>

            {msg && (
              <p className="text-center text-red-600 font-medium">
                {msg}
              </p>
            )}

            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* NAME */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full p-2 rounded-lg border focus:ring focus:ring-green-300 outline-none"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* PHONE */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Phone number
                </label>
                <input
                  type="text"
                  id="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full p-2 rounded-lg border focus:ring focus:ring-green-300 outline-none"
                  placeholder="Enter phone number"
                  required
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full p-2 rounded-lg border focus:ring focus:ring-green-300 outline-none"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* ADDRESS */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Địa chỉ
                </label>
                <input
                  type="text"
                  id="address"
                  value={form.address}
                  onChange={handleChange}
                  className="w-full p-2 rounded-lg border focus:ring focus:ring-green-300 outline-none"
                  placeholder="Enter your address"
                />
              </div>

              {/* DATE */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Choose date
                </label>
                <input
                  type="date"
                  id="date"
                  value={form.date}
                  onChange={handleChange}
                  className="w-full p-2 rounded-lg border focus:ring focus:ring-green-300 outline-none"
                />
              </div>

              {/* SERVICE */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Select service
                </label>
                <select
                  id="room_type"
                  value={form.room_type}
                  onChange={handleChange}
                  className="w-full p-2 rounded-lg border focus:ring focus:ring-green-300 outline-none"
                >
                  <option value="">Chọn dịch vụ</option>
                  <option value={`Thăm quan ${visit.name_en}`}>
                    Thăm quan {visit.name_en}
                  </option>
                  <option value="Team-building">Team-building</option>
                  <option value="Cắm trại">Cắm trại</option>
                  <option value="Dịch vụ khác">Dịch vụ khác</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Book now
              </button>
            </form>
          </div>
        </aside>
      </div>
    </>
  );
};

export default ServiceDetail;
