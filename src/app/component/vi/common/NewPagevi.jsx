"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const NewPagevi = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6; // Số blog mỗi trang

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

  // Tính toán phân trang
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  return (
    <div className="bg-gray-50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="font-['Playfair_Display'] hover:text-blue-600 font-semibold text-[#8a6d46] mb-8 text-3xl sm:text-3xl lg:text-3xl text-center lg:text-left">
          SỰ KIỆN
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentBlogs.map((item) => (
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
                  <p className="text-gray-600 line-clamp-3">{item.title_1}</p>
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

        {/* Phân trang */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-10 gap-3">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-2  rounded-md border ${
                  currentPage === i + 1 ? "bg-[#f5d1bb] text-[#7a4b2f]" : "bg-white text-gray-700"
                } hover:bg-[#eec2a5] transition`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default NewPagevi;
