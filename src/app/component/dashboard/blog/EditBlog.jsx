"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

const EditBlog = () => {
  const router = useRouter();
  const params = useParams();
  const id = params.id;

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const [form, setForm] = useState({
    name: "", 
    name_en: "",
    title_1: "", title_2: "", title_3: "", title_4: "",
    title_1_en: "", title_2_en: "", title_3_en: "", title_4_en: ""
  });

  const [images, setImages] = useState({ image_1: null, image_2: null, image_3: null });
  const [existingImages, setExistingImages] = useState({ image_1: "", image_2: "", image_3: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;
      try {
        const res = await fetch(`${API_URL}/api/new/${id}`);
        const data = await res.json();

        setForm({
          name: data.name || "",
          name_en: data.name_en || "",
          title_1: data.title_1 || "",
          title_2: data.title_2 || "",
          title_3: data.title_3 || "",
          title_4: data.title_4 || "",
          title_1_en: data.title_1_en || "",
          title_2_en: data.title_2_en || "",
          title_3_en: data.title_3_en || "",
          title_4_en: data.title_4_en || ""
        });

        setExistingImages({
          image_1: data.image_1 || "",
          image_2: data.image_2 || "",
          image_3: data.image_3 || ""
        });
      } catch (err) {
        alert("Lỗi lấy dữ liệu: " + err.message);
      }
    };
    fetchData();
  }, [id]);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleImageChange = e => setImages({ ...images, [e.target.name]: e.target.files[0] });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      // Thêm ảnh mới nếu có
      Object.keys(images).forEach(key => {
        if (images[key]) formData.append(key, images[key]);
      });
      // Thêm dữ liệu form
      Object.keys(form).forEach(key => formData.append(key, form[key]));

      const res = await fetch(`${API_URL}/api/new/${id}`, {
        method: "PUT",
        body: formData
      });

      let data;
      try {
        const text = await res.text();
        data = text ? JSON.parse(text) : {};
      } catch {
        data = {};
      }

      if (!res.ok) throw new Error(data.error || data.message || "Cập nhật thất bại");

      alert("Cập nhật thành công!");
      router.push("/dashboard/new");
    } catch (err) {
      alert("Lỗi: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-6">Sửa </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block font-medium mb-1">Tên điểm (VN)</label>
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
          <label className="block font-medium mb-1">Tên điểm (EN)</label>
          <input 
            type="text" 
            name="name_en" 
            value={form.name_en} 
            onChange={handleChange} 
            className="w-full border px-3 py-2 rounded" 
          />
        </div>

        <div className="flex gap-6">
          {["image_1","image_2","image_3"].map((img,key) => (
            <div key={key} className="flex flex-col items-start">
              <label className="block font-medium mb-1">Ảnh {key+1}</label>
              <input type="file" name={img} onChange={handleImageChange} accept="image/*" />
              {(images[img] || existingImages[img]) && (
                <img
                  src={images[img] ? URL.createObjectURL(images[img]) : `/uploads/new/${existingImages[img]}`}
                  className="w-32 h-32 object-cover mt-2 rounded"
                  alt=""
                />
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {["title_1","title_2","title_3","title_4"].map((t,key) => (
            <React.Fragment key={key}>
              <textarea
                name={t}
                placeholder={`Tiêu đề ${key+1} (VN)`}
                value={form[t]}
                onChange={handleChange}
                className="border px-3 py-2 rounded w-full min-h-[100px] resize-y"
              />
              <textarea
                name={`${t}_en`}
                placeholder={`Tiêu đề ${key+1} (EN)`}
                value={form[`${t}_en`]}
                onChange={handleChange}
                className="border px-3 py-2 rounded w-full min-h-[100px] resize-y"
              />
            </React.Fragment>
          ))}
        </div>

        <button 
          type="submit" 
          disabled={loading} 
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          {loading ? "Đang cập nhật..." : "Cập nhật"}
        </button>
      </form>
    </div>
  );
};

export default EditBlog;
