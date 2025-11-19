"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const AddVisit = () => {
  const router = useRouter();

  const API_URL = process.env.NEXT_PUBLIC_API_URL; // Lấy từ .env.local

  const [form, setForm] = useState({
    name: "", name_en: "",
    title_1: "", title_2: "", title_3: "", title_4: "",
    title_1_en: "", title_2_en: "", title_3_en: "", title_4_en: ""
  });

  const [images, setImages] = useState({ image_1: null, image_2: null, image_3: null });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleImageChange = (e) => setImages({ ...images, [e.target.name]: e.target.files[0] });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();

      // Thêm file ảnh
      Object.keys(images).forEach((key) => {
        if (images[key]) formData.append(key, images[key]);
      });

      // Thêm dữ liệu form
      Object.keys(form).forEach((key) => {
        formData.append(key, form[key]);
      });

      // Gọi API backend
      const res = await fetch(`${API_URL}/api/visit`, {
        method: "POST",
        body: formData,
      });

      const text = await res.text();
      let data;
      try { data = text ? JSON.parse(text) : {}; } catch { data = {}; }

      if (!res.ok) throw new Error(data.error || data.message || "Thêm mới thất bại");

      alert("Thêm mới thành công!");
      router.push("/dashboard/nodevisit");
    } catch (err) {
      console.error(err);
      alert("Lỗi: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Thêm mới điểm tham quan</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Tên điểm (VN)</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Tên điểm (EN)</label>
          <input
            type="text"
            name="name_en"
            value={form.name_en}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div className="flex gap-4">
          {["image_1", "image_2", "image_3"].map((img, idx) => (
            <div key={idx}>
              <label className="block font-medium">Ảnh {idx + 1}</label>
              <input
                type="file"
                name={img}
                onChange={handleImageChange}
                accept="image/*"
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4">
          {["title_1", "title_2", "title_3", "title_4"].map((t, idx) => (
            <React.Fragment key={idx}>
              <input
                type="text"
                name={t}
                placeholder={`Tiêu đề ${idx + 1} (VN)`}
                value={form[t]}
                onChange={handleChange}
                className="border px-3 py-2 rounded"
              />
              <input
                type="text"
                name={`${t}_en`}
                placeholder={`Tiêu đề ${idx + 1} (EN)`}
                value={form[`${t}_en`]}
                onChange={handleChange}
                className="border px-3 py-2 rounded"
              />
            </React.Fragment>
          ))}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          {loading ? "Đang thêm..." : "Thêm mới"}
        </button>
      </form>
    </div>
  );
};

export default AddVisit;
