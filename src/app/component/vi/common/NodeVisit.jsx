"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const NodeVisit = () => {
  const [visits, setVisits] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const VISIT_ENDPOINT = `${API_URL}/api/visit`;
  const BASE_URL = API_URL.replace("/api", "");

  useEffect(() => {
    const fetchVisits = async () => {
      try {
        const res = await fetch(VISIT_ENDPOINT);
        if (!res.ok) throw new Error("Fetch API lỗi");
        const data = await res.json();
        setVisits(data);
      } catch (err) {
        console.error("Lỗi khi lấy dữ liệu:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchVisits();
  }, [VISIT_ENDPOINT]);

  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 15,
    },
    breakpoints: {
      "(max-width: 1024px)": { slides: { perView: 2, spacing: 10 } },
      "(max-width: 640px)": { slides: { perView: 1, spacing: 5 } },
    },
  });

  if (loading) return <p className="text-center py-12">Đang tải dữ liệu...</p>;

  return (
    <div className="bg-white py-12 md:py-16 relative">
      <div className="max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-['Playfair_Display'] hover:text-blue-600 font-semibold text-[#8a6d46] mb-8 text-3xl text-center lg:text-left">
          SỔ TAY DU LỊCH
        </h2>

        <div className="relative">
          {/* Slider */}
          <div ref={sliderRef} className="keen-slider">
            {visits.map((item) => (
              <div
                key={item.id}
                className="keen-slider__slide bg-white rounded-xl shadow-lg overflow-hidden flex flex-col border border-gray-100 transform transition-transform duration-300 ease-in-out  hover:scale-105 "
              >
                {item.image_1 && (
                  <img
                    src={`${BASE_URL}/uploads/visit/${item.image_1}`}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-4 flex flex-col flex-grow">
                  <p className="font-semibold text-lg truncate">{item.name}</p>
                  <p className="text-gray-500 mb-2 truncate">{item.name_en}</p>
                  {item.title_1 && (
                    <p className="text-gray-700 line-clamp-2">{item.title_1}</p>
                  )}
                  <Link
                    href={`vi/visit/${item.id}`}
                    className="mt-4 inline-block text-[#8a6d46] hover:text-blue-600"
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

export default NodeVisit;
