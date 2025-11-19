
'use client';
import React, { useEffect, useState } from "react";

const TableContact = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Lấy danh sách contact
  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/contact");
      const data = await res.json();
      setContacts(data);
      setLoading(false);
    } catch (e) {
      console.log("Error:", e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Xoá contact
  const deleteContact = async (id) => {
    if (!window.confirm("Bạn chắc chắn muốn xoá?")) return;

    try {
      await fetch(`http://localhost:5000/api/contact/${id}`, {
        method: "DELETE",
      });

      // Cập nhật lại danh sách
      setContacts((prev) => prev.filter((c) => c.id !== id));
    } catch (e) {
      console.log("Delete error:", e);
    }
  };

  if (loading) return <p className="text-center mt-10">Đang tải...</p>;

  return (
    <div className="p-5">
      <h2 className="text-2xl font-semibold mb-5">Danh sách liên hệ</h2>

      <div className=" ">
        <table className="  ">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 border">ID</th>
              <th className="p-3 border">Họ tên</th>
              <th className="p-3 border">Số điện thoại</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">Địa chỉ</th>
              <th className="p-3 border">Ngày</th>
              <th className="p-3 border">Loại phòng</th>
              <th className="p-3 border">Hành động</th>
            </tr>
          </thead>

          <tbody>
            {contacts.length === 0 ? (
              <tr>
                <td colSpan="8" className="text-center p-4">
                  Không có dữ liệu
                </td>
              </tr>
            ) : (
              contacts.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-100">
                  <td className="p-3 border">{item.id}</td>
                  <td className="p-3 border">{item.name}</td>
                  <td className="p-3 border">{item.phone}</td>
                  <td className="p-3 border">{item.email}</td>
                  <td className="p-3 border">{item.address}</td>
                  <td className="p-3 border">{item.date}</td>
                  <td className="p-3 border">{item.room_type}</td>

                  <td className="p-3 border text-center">
                    <button
                      onClick={() => deleteContact(item.id)}
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                      style={{ backgroundColor: "red", color: "white", padding: "5px 10px" }}
                    >
                      xoá 
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableContact;
