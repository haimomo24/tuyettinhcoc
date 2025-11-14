"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const CarListvi = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch("/api/service");
        const data = await res.json();
        setServices(data);
      } catch (err) {
        console.error("Lỗi khi lấy dịch vụ:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) return <div className="flex justify-center items-center h-64">Đang tải...</div>;

  return (
    <div className="bg-[#fdf6f0] py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-[#a32b44]">TUYỆT TỊNH CỐC</h2>
        <p className="text-[#6b6b6b] italic mt-2">~ Bản giao hưởng miền nhiệt đới ~</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
        {services.map((service) => (
          <div key={service.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 h-full flex flex-col">
            <img
              src={service.image_1 || "/placeholder.jpg"}
              alt={service.name}
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="p-6 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="text-xl font-semibold text-[#9a6536] mb-3">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.title_1 ? service.title_1.substring(0, 100) + "..." : "Không có mô tả"}</p>
              </div>
              <div className="flex justify-end mt-auto">
                <button
                  onClick={() => router.push(`/vi/service/${service.id}`)}
                  className="bg-[#f5d1bb] text-[#7a4b2f] px-4 py-2 rounded-md hover:bg-[#eec2a5] transition"
                >
                  Xem chi tiết
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarListvi;
