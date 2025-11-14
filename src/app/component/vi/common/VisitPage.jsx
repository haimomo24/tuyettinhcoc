"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const VisitPage = () => {
  const [checkins, setCheckins] = useState([]);
  const [loading, setLoading] = useState(true);

  // Lấy dữ liệu từ API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/checkin");
        const data = await res.json();
        setCheckins(data);
      } catch (err) {
        console.error("Lỗi khi fetch dữ liệu checkin:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p className="text-center py-12">Đang tải dữ liệu...</p>;

  return (
    <div className="bg-gray-50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-['Playfair_Display'] font-semibold text-[#8a6d46] mb-8 text-3xl sm:text-3xl lg:text-3xl text-center lg:text-left">
          CÁC ĐIỂM CHECK IN
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {checkins.map((item) => (
            <Link key={item.id} href={`/vi/visit/${item.id}`}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-xl cursor-pointer">
                {/* Ảnh */}
                <img
                  src={item.image_1 || "https://via.placeholder.com/400x250?text=No+Image"}
                  alt={item.name}
                  className="w-full h-[220px] object-cover"
                />
                {/* Nội dung */}
                <div className="p-6 flex-grow">
                  <h3 className="font-['Playfair_Display'] font-serif text-[#8a6d46] text-xl mb-2">
                    {item.name}
                  </h3>
                  <p className="font-sans text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {item.title_1}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VisitPage;
