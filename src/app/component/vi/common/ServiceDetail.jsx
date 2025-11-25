"use client";
import { useEffect, useState } from "react";

const ServiceDetail = ({ id }) => {
  const [visit, setVisit] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchVisit = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/service/${id}`);
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

  if (loading)
    return <div className="text-center py-20 text-gray-500">Đang tải dữ liệu...</div>;
  if (!visit) return <div className="text-center py-20 text-gray-500">Không tìm thấy dữ liệu</div>;

  const sections = [
    { title: visit.title_1, image: visit.image_1 },
    { title: visit.title_2, image: visit.image_2 },
    { title: visit.title_3, image: visit.image_3 },
    { title: visit.title_4, image: visit.image_4 },
  ].filter(section => section.title || section.image);

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-8 lg:grid lg:grid-cols-3 lg:gap-8">
        
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
        <aside className="sticky top-54  self-start">
          <div className="bg-white p-5 rounded-xl shadow-md border space-y-4 max-h-[620px] overflow-y-auto">
            
            <h2 className="text-xl font-semibold border-b pb-2 mb-3 text-gray-800">
              Đặt Lịch Online
            </h2>

            <form className="space-y-4">

              {/* NAME */}
              <div>
                <label className="text-sm font-medium text-gray-700">Your name</label>
                <input
                  type="text"
                  className="w-full p-2 rounded-lg border focus:ring focus:ring-green-300 outline-none"
                  placeholder="Enter your name"
                />
              </div>

              {/* PHONE */}
              <div>
                <label className="text-sm font-medium text-gray-700">Phone number</label>
                <input
                  type="text"
                  className="w-full p-2 rounded-lg border focus:ring focus:ring-green-300 outline-none"
                  placeholder="Enter phone number"
                />
              </div>

              {/* EMAIL (NEW) */}
              <div>
                <label className="text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full p-2 rounded-lg border focus:ring focus:ring-green-300 outline-none"
                  placeholder="Enter your email"
                />
              </div>

              {/* ADDRESS */}
              <div>
                <label className="text-sm font-medium text-gray-700">Địa chỉ</label>
                <input
                  type="text"
                  className="w-full p-2 rounded-lg border focus:ring focus:ring-green-300 outline-none"
                  placeholder="Enter your address"
                />
              </div>

              {/* DATE */}
              <div>
                <label className="text-sm font-medium text-gray-700">Choose date</label>
                <input
                  type="date"
                  className="w-full p-2 rounded-lg border focus:ring focus:ring-green-300 outline-none"
                />
              </div>

              {/* SERVICE */}
              <div>
                <label className="text-sm font-medium text-gray-700">Select service</label>
                <select className="w-full p-2 rounded-lg border focus:ring focus:ring-green-300 outline-none">
                  <option>Thăm quan {visit.name_en}</option>
                  <option>Team-building</option>
                  <option>Cắm trại</option>
                  <option>Dịch vụ khác</option>
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
