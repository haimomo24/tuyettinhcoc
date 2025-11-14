"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const VisitDetailPage = () => {
  const { id } = useParams();
  const [visit, setVisit] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchVisit = async () => {
      try {
        const res = await fetch(`/api/visit/${id}`);
        if (!res.ok) throw new Error("Không thể lấy dữ liệu");
        const data = await res.json();
        console.log("Visit data:", data);
        setVisit(data);
      } catch (err) {
        console.error("Lỗi khi fetch chi tiết:", err);
        setVisit(null);
      } finally {
        setLoading(false);
      }
    };

    fetchVisit();
  }, [id]);

  if (loading) {
    return <div className="text-center py-20 text-gray-500">Đang tải dữ liệu...</div>;
  }

  if (!visit || Object.keys(visit).length === 0) {
    return <div className="text-center py-20 text-gray-500">Không tìm thấy dữ liệu</div>;
  }

  const sections = [
    { title: visit.title_1, image: visit.image_1 },
    { title: visit.title_2, image: visit.image_2 },
    { title: visit.title_3, image: visit.image_3 },
    { title: visit.title_4, image: visit.image_4 },
    { title: visit.title_5, image: visit.image_5 },
  ].filter(sec => sec.title || sec.image);

  return (
    <>
     <div className="h-[100px] w-full"></div>

    <div className="max-w-6xl mx-auto px-4 py-8 lg:grid lg:grid-cols-3 lg:gap-8">
      <article className="lg:col-span-2 space-y-8">
        <h1 className="text-4xl font-bold leading-tight text-gray-900 mb-6 border-b pb-4">
          {visit.name || "Không có tiêu đề"}
        </h1>

        {sections.map((section, idx) => (
          <div key={idx} className="space-y-4">
            {section.title && (
              <p className="text-lg leading-7 text-gray-800 text-justify whitespace-pre-line">
                {section.title}
              </p>
            )}
            {section.image && (
              <img
                src={section.image || "https://via.placeholder.com/800x400?text=No+Image"}
                alt={`Ảnh ${idx + 1}`}
                className="w-full h-auto rounded-lg shadow-md border"
              />
            )}
          </div>
        ))}

        <div className="text-right mt-10 italic text-gray-600">— Kết thúc bài viết —</div>
      </article>

      <aside className="bg-gray-50 p-4 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold border-b pb-2 mb-4">Dịch vụ liên quan</h2>
        <p className="text-gray-500 text-sm">Các dịch vụ khác sẽ hiển thị ở đây.</p>
      </aside>
    </div>
    </>
    
  );
};

export default VisitDetailPage;
