"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

const EditBlog = () => {
     const router = useRouter();
      const params = useParams(); // lấy params từ URL
      const id = params.id;
    
      const [form, setForm] = useState({
        name: "", name_en: "",
        title_1: "", title_2: "", title_3: "", title_4: "",
        title_1_en: "", title_2_en: "", title_3_en: "", title_4_en: ""
      });
    
      const [images, setImages] = useState({ image_1: null, image_2: null, image_3: null });
      const [existingImages, setExistingImages] = useState({ image_1: "", image_2: "", image_3: "" });
      const [loading, setLoading] = useState(false);
    
      // 🔹 Load dữ liệu cũ
      useEffect(() => {
        const fetchData = async () => {
          if (!id) return;
          const res = await fetch(`/api/blog/${id}`);
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
        };
        fetchData();
      }, [id]);
    
      // 🔹 Handle input
      const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
      const handleImageChange = e => setImages({ ...images, [e.target.name]: e.target.files[0] });
    
      // 🔹 Upload ảnh mới
      const uploadImages = async () => {
        const formData = new FormData();
        Object.keys(images).forEach(key => {
          if (images[key]) formData.append("files", images[key]);
        });
    
        if (Object.values(images).every(i => !i)) return {};
    
        const res = await fetch("/api/blog/upload", { method: "POST", body: formData });
        if (!res.ok) throw new Error("Upload thất bại");
    
        const data = await res.json();
        return {
          image_1: data.files[0] || existingImages.image_1,
          image_2: data.files[1] || existingImages.image_2,
          image_3: data.files[2] || existingImages.image_3
        };
      };
    
      // 🔹 Submit form
      const handleSubmit = async e => {
        e.preventDefault();
        setLoading(true);
        try {
          const uploadedFiles = await uploadImages();
    
          const payload = { ...form, ...uploadedFiles };
    
          const res = await fetch(`/api/blog/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
          });
    
          if (!res.ok) throw new Error("Cập nhật thất bại");
    
          alert("Cập nhật thành công!");
          router.push("/dashboard/blog");
        } catch (err) {
          alert("Lỗi: " + err.message);
        } finally {
          setLoading(false);
        }
      };
  return (
     <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded">
          <h2 className="text-2xl font-bold mb-4">Sửa điểm tham quan</h2>
    
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-medium">Tên điểm (VN)</label>
              <input type="text" name="name" value={form.name} onChange={handleChange} className="w-full border px-3 py-2 rounded" required />
            </div>
    
            <div>
              <label className="block font-medium">Tên điểm (EN)</label>
              <input type="text" name="name_en" value={form.name_en} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
            </div>
    
            <div className="flex gap-4">
              {["image_1","image_2","image_3"].map((img,key) => (
                <div key={key}>
                  <label className="block font-medium">Ảnh {key+1}</label>
                  <input type="file" name={img} onChange={handleImageChange} accept="image/*" />
                  {(images[img] || existingImages[img]) && (
                    <img
                      src={images[img] ? URL.createObjectURL(images[img]) : existingImages[img]}
                      className="w-24 h-24 object-cover mt-2"
                      alt=""
                    />
                  )}
                </div>
              ))}
            </div>
    
            <div className="grid grid-cols-2 gap-4">
              {["title_1","title_2","title_3","title_4"].map((t,key) => (
                <React.Fragment key={key}>
                  <input type="text" name={t} placeholder={`Tiêu đề ${key+1} (VN)`} value={form[t]} onChange={handleChange} className="border px-3 py-2 rounded"/>
                  <input type="text" name={`${t}_en`} placeholder={`Tiêu đề ${key+1} (EN)`} value={form[`${t}_en`]} onChange={handleChange} className="border px-3 py-2 rounded"/>
                </React.Fragment>
              ))}
            </div>
    
            <button type="submit" disabled={loading} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
              {loading ? "Đang cập nhật..." : "Cập nhật"}
            </button>
          </form>
        </div>
  )
}

export default EditBlog