"use client";
import React, { useEffect, useState } from "react";

const TableVissit = () => {
   const [data, setData] = useState([]);
  
    // Lấy dữ liệu
    const fetchData = async () => {
      const res = await fetch("/api/visit");
      const json = await res.json();
      setData(json);
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  
    // Xoá record
    const handleDelete = async (id) => {
      if (!confirm("Bạn có chắc muốn xoá mục này không?")) return;
  
      const res = await fetch(`/api/visit/${id}`, {
        method: "DELETE",
      });
  
      if (res.ok) {
        alert("Đã xoá thành công!");
        fetchData();
      } else {
        alert("Xoá thất bại!");
      }
    };
  return (
    <div className="p-4">
      <div className="flex justify-between mb-3">
        <h2 className="text-xl font-bold">Quản lý điểm tham quan</h2>
        <a
          href="/dashboard/nodevisit/add"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + Thêm mới
        </a>
      </div>

      <div className="relative overflow-x-auto bg-white rounded shadow">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th className="px-6 py-3">Tên điểm</th>
              <th className="px-6 py-3">Thông tin</th>
              <th className="px-6 py-3">Bài viết</th>
              <th className="px-6 py-3">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-600">
                  Không có dữ liệu
                </td>
              </tr>
            )}
            {data.map((item) => (
              <tr key={item.id} className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">{item.name}</td>
                <td className="px-6 py-4">{item.title_1?.slice(0, 50)}...</td>
                <td className="px-6 py-4">{item.title_1_en?.slice(0, 50)}...</td>
                <td className="px-6 py-4 flex gap-3">
                  <a
                    href={`/dashboard/nodevisit/edit/${item.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    Sửa
                  </a>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-red-600 hover:underline"
                  >
                    Xoá
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TableVissit