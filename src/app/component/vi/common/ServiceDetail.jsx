"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const ServiceDetail = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🟢 Lấy dữ liệu service theo ID
  useEffect(() => {
    if (!id) return;
    const fetchService = async () => {
      try {
        const res = await fetch(`/api/service/${id}`);
        const data = await res.json();
        setService(data);
      } catch (err) {
        console.error("Lỗi khi lấy dữ liệu:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchService();
  }, [id]);

  if (loading)
    return <div className="text-center py-20 text-gray-500">Đang tải dữ liệu...</div>;
  if (!service || !service.id)
    return <div className="text-center py-20 text-gray-500">Không tìm thấy dữ liệu</div>;

  // Gom các section (title + image) để hiển thị từng phần
  const sections = [
    { title: service.title_1, image: service.image_1 },
    { title: service.title_2, image: service.image_2 },
    { title: service.title_3, image: service.image_3 },
    { title: service.title_4, image: service.image_4 },
    { title: service.title_5, image: service.image_5 },
  ].filter(section => section.title || section.image);

  return (
    <>
      {/* Spacer để header fixed không che phần đầu */}
      <div className="h-[100px] w-full"></div>

      <div className="max-w-6xl mx-auto px-4 py-8 lg:grid lg:grid-cols-3 lg:gap-8">
        {/* Bài chính */}
        <article className="lg:col-span-2 space-y-8">
          <h1 className="text-4xl font-bold leading-tight text-gray-900 mb-6 border-b pb-4">
            {service.name}
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
                  src={section.image}
                  alt={`Ảnh ${index + 1}`}
                  className="w-full h-auto rounded-lg shadow-md border"
                />
              )}
            </div>
          ))}

          <div className="text-right mt-10 italic text-gray-600">— Kết thúc bài viết —</div>
        </article>

        {/* Placeholder dịch vụ liên quan */}
        <aside className="bg-gray-50 p-4 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold border-b pb-2 mb-4">Dịch vụ liên quan</h2>
          <p className="text-gray-500 text-sm">Các dịch vụ khác sẽ hiển thị ở đây.</p>
        </aside>
      </div>
    </>
  );
};

export default ServiceDetail;
