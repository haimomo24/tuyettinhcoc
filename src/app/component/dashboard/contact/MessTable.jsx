"use client";

import React, { useEffect, useState } from "react";

const MessTable = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Lấy dữ liệu từ API
  const fetchMessages = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/mes`);
      const data = await res.json();
      setMessages(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  // Xác nhận đã xem
  const handleConfirm = async (id) => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/mes/${id}/viewed`, {
        method: "PUT",
      });

      // Cập nhật state ngay lập tức để đổi màu
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === id ? { ...msg, status: 1 } : msg
        )
      );
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p>Đang tải dữ liệu...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Danh sách liên hệ</h2>
      <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 border-b">ID</th>
            <th className="p-3 border-b">Họ và tên</th>
            <th className="p-3 border-b">Email</th>
            <th className="p-3 border-b">Số điện thoại</th>
            <th className="p-3 border-b">Nội dung</th>
            <th className="p-3 border-b">Trạng thái</th>
            <th className="p-3 border-b">Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((msg) => (
            <tr key={msg.id} className={msg.status ? "bg-red-100" : "bg-white"}>
              <td className="p-3 border-b text-center">{msg.id}</td>
              <td className="p-3 border-b">{msg.name}</td>
              <td className="p-3 border-b">{msg.email}</td>
              <td className="p-3 border-b">{msg.phone}</td>
              <td className="p-3 border-b">{msg.content}</td>
              <td className="p-3 border-b text-center">
                {msg.status ? "Đã xem" : "Chưa xem"}
              </td>
              <td className="p-3 border-b text-center">
                {!msg.status && (
                  <button
                    onClick={() => handleConfirm(msg.id)}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
                  >
                    Xác nhận
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MessTable;
