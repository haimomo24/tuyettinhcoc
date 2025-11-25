"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const VisitPage = () => {
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

  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 4,
      spacing: 15,
    },
    breakpoints: {
      "(max-width: 1024px)": { slides: { perView: 2, spacing: 10 } },
      "(max-width: 640px)": { slides: { perView: 1, spacing: 5 } },
    },
  });

  if (loading) return <p className="text-center py-12">Đang tải dữ liệu...</p>;

  return (
    <div className="bg-gray-50 py-12 md:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-['Playfair_Display'] hover:text-blue-600 font-semibold text-[#8a6d46] mb-8 text-3xl text-center lg:text-left">
          CÁC ĐIỂM CHECK IN
        </h2>

        <div className="relative">
          {/* Slider */}
          <div ref={sliderRef} className="keen-slider">
            {checkins.map((item) => (
              <div
                key={item.id}
                className="keen-slider__slide bg-white rounded-xl shadow-lg overflow-hidden flex flex-col border border-gray-100"
              >
                {item.image_1 && (
                  <img
                    src={`${BASE_URL}/uploads/checkin/${item.image_1}`}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6 flex flex-col flex-grow">
                  <p className="font-semibold text-lg truncate">{item.name}</p>
                  {item.title_1 && (
                    <p className="text-gray-700 line-clamp-3 mt-2">{item.title_1}</p>
                  )}
                  <Link
                    href={`/vi/checkin/${item.id}`}
                    className="mt-4 inline-block text-[#8a6d46] hover:text-[#a08a6d]"
                  >
                    Xem chi tiết
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Nút trái */}
          <button
            onClick={() => instanceRef.current?.prev()}
            className="absolute top-1/2 -left-15 transform -translate-y-1/2 z-20 bg-[#f5d1bb] text-[#7a4b2f] p-3 rounded-full hover:bg-[#eec2a5] transition shadow-lg"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>

          {/* Nút phải */}
          <button
            onClick={() => instanceRef.current?.next()}
            className="absolute top-1/2 -right-15 transform -translate-y-1/2 z-20 bg-[#f5d1bb] text-[#7a4b2f] p-3 rounded-full hover:bg-[#eec2a5] transition shadow-lg"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VisitPage;
