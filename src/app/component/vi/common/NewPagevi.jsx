"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const NewPagevi = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const BLOG_ENDPOINT = `${API_URL}/api/new`;
  const BASE_URL = API_URL.replace("/api", "");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(BLOG_ENDPOINT);
        const data = await res.json();
        setBlogs(data);
      } catch (err) {
        console.error("Lỗi khi lấy blog:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) return <p className="text-center py-12">Đang tải dữ liệu...</p>;

  return (
    <div className="bg-gray-50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="font-['Playfair_Display'] hover:text-blue-600 font-semibold text-[#8a6d46] mb-8 text-3xl sm:text-3xl lg:text-3xl text-center lg:text-left">
          SỰ KIỆN
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {blogs.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden border"
            >
              {item.image_1 && (
                <img
                  src={`${BASE_URL}/uploads/new/${item.image_1}`}
                  className="w-full h-[220px] object-cover"
                />
              )}

              <div className="p-6">
                <h3 className="font-['Playfair_Display'] text-[#8a6d46] text-xl mb-4">
                  {item.name}
                </h3>

                {item.title_1 && (
                  <p className="text-gray-600 line-clamp-3">
                    {item.title_1}
                  </p>
                )}

                <Link
                  href={`/vi/new/${item.id}`}
                  className="text-[#8a6d46] inline-block mt-4"
                >
                  Xem chi tiết
                </Link>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default NewPagevi;
