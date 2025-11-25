"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const CarListvi = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const servicesPerPage = 6; // Số mục mỗi trang
  const router = useRouter();

  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const SERVICE_ENDPOINT = `${API_URL}/api/service`;
  const BASE_URL = API_URL.replace("/api", "");

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch(SERVICE_ENDPOINT);
        if (!res.ok) throw new Error("Fetch API lỗi");
        const data = await res.json();
        setServices(data);
      } catch (err) {
        console.error("Lỗi khi lấy dịch vụ:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, [SERVICE_ENDPOINT]);

  if (loading)
    return <div className="text-center py-12">Đang tải dữ liệu...</div>;

  // Tính toán phân trang
  const indexOfLastService = currentPage * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = services.slice(indexOfFirstService, indexOfLastService);
  const totalPages = Math.ceil(services.length / servicesPerPage);

  return (
    <div className="bg-[#fdf6f0] py-16">
      <div className="text-center mb-12">
        <h2 className="font-['Playfair_Display'] font-semibold text-[#8a6d46] mb-8 text-3xl sm:text-3xl lg:text-3xl text-center hover:text-blue-600">
          TUYỆT TỊNH CỐC
        </h2>
        <p className="text-[#6b6b6b] italic mt-2">~ Bản giao hưởng miền nhiệt đới ~</p>
      </div>

      <div className="max-w-[80%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
        {currentServices.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 h-full flex flex-col"
          >
            {service.image_1 && (
              <img
                src={`${BASE_URL}/uploads/service/${service.image_1}`}
                alt={service.name}
                className="w-full h-64 object-cover rounded-t-lg"
              />
            )}
            <div className="p-6 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="text-xl font-semibold text-[#9a6536] mb-3">{service.name}</h3>
                {service.title_1 && (
                  <p className="text-gray-600 mb-4 line-clamp-3">{service.title_1}</p>
                )}
              </div>
              <div className="flex justify-end mt-auto">
             <button
  onClick={() => router.push(`/vi/service/${service.id}`)}
  className="relative flex items-center cursor-pointer overflow-hidden group w-fit"
>
  {/* Vòng tròn nền mở rộng */}
  <span
    className="absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full border-2 border-[#b86d29]
    transition-all duration-500 ease-out group-hover:w-full group-hover:left-0 group-hover:right-0
    group-hover:rounded-xl group-hover:bg-[#b86d29]/20"
  >
    {/* Mũi tên → */}
    <span
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl text-[#b86d29]
      transition-opacity duration-300 group-hover:opacity-0"
    >
      →
    </span>
  </span>

  {/* Nội dung chữ */}
  <span className="relative flex items-center pl-4 pr-4">
    {/* Khoảng trống cho vòng tròn */}
    <span className="w-10 h-10 flex-shrink-0"></span>

    {/* Chữ */}
    <span
      className="text-[#7a4b2f] font-medium transition-all duration-500 ease-out group-hover:ml-2"
    >
      Xem chi tiết
    </span>
  </span>
</button>


              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Phân trang */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-10 gap-3">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-2 rounded-md border ${currentPage === i + 1 ? "bg-[#f5d1bb] text-[#7a4b2f]" : "bg-white text-gray-700"
                } hover:bg-[#eec2a5] transition`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CarListvi;
