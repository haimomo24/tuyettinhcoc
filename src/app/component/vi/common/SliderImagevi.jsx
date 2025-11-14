"use client";
import React, { useState, useEffect } from "react";

const images = [
  "/image/slider/c2cd548478bdf4e3adac.jpg",
  "/image/slider/de34283b0402885cd113.jpg",
  "/image/slider/e54ec461eb5867063e49.jpg",
];

const SliderImagevi = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Tự động chuyển ảnh mỗi 4 giây
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mt-[50px] w-full h-[80vh] md:h-[90vh] overflow-hidden">
      {/* Ảnh */}
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Slide ${index}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Nút điều hướng */}
      <button
        onClick={() =>
          setCurrentIndex(
            currentIndex === 0 ? images.length - 1 : currentIndex - 1
          )
        }
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60"
      >
        ❮
      </button>

      <button
        onClick={() =>
          setCurrentIndex(
            currentIndex === images.length - 1 ? 0 : currentIndex + 1
          )
        }
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60"
      >
        ❯
      </button>

      {/* Dấu chấm chỉ vị trí */}
      <div className="absolute bottom-4 w-full flex justify-center gap-3">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderImagevi;
