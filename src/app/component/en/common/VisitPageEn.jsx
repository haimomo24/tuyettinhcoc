"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const VisitPageEn = () => {
    const [checkins, setCheckins] = useState([]);
      const [loading, setLoading] = useState(true);
    
      const API_URL = process.env.NEXT_PUBLIC_API_URL;
      const CHECKIN_ENDPOINT = `${API_URL}/api/checkin`;
      const BASE_URL = API_URL.replace("/api", "");
    
      useEffect(() => {
        const fetchCheckins = async () => {
          try {
            const res = await fetch(CHECKIN_ENDPOINT);
            if (!res.ok) throw new Error("Fetch API lỗi");
            const data = await res.json();
            setCheckins(data);
          } catch (err) {
            console.error("Lỗi khi lấy dữ liệu checkin:", err);
          } finally {
            setLoading(false);
          }
        };
        fetchCheckins();
      }, [CHECKIN_ENDPOINT]);
    
      if (loading) return <p className="text-center py-12">Đang tải dữ liệu...</p>;
  return (
    <div className="bg-gray-50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-['Playfair_Display'] font-semibold text-[#8a6d46] mb-8 text-3xl text-center lg:text-left">
          CHECK IN POINTS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {checkins.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col border border-gray-100"
            >
              {/* Ảnh chính */}
              {item.image_1 && (
                <img
                  src={`${BASE_URL}/uploads/checkin/${item.image_1}`}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
              )}

              <div className="p-6 flex flex-col flex-grow">
                <p className="font-semibold text-lg truncate">{item.name_en}</p>

                {/* Chỉ hiển thị title_1, cắt nếu dài */}
                {item.title_1 && (
                  <p className="text-gray-700 line-clamp-3 mt-2">{item.title_1_en}</p>
                )}

                <Link
                  href={`/en/checkin/${item.id}`}
                  className="mt-4 inline-block text-[#8a6d46] hover:text-[#a08a6d]"
                >
                  See details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default VisitPageEn