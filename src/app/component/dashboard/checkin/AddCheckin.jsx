"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const AddCheckin = () => {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "", name_en: "",
    title_1: "", title_2: "", title_3: "", title_4: "",
    title_1_en: "", title_2_en: "", title_3_en: "", title_4_en: ""
  });

  const [images, setImages] = useState({ image_1: null, image_2: null, image_3: null });
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleImageChange = e => setImages({ ...images, [e.target.name]: e.target.files[0] });

  const uploadImages = async () => {
    const formData = new FormData();
    Object.keys(images).forEach(key => { if (images[key]) formData.append("files", images[key]); });

    const res = await fetch("/api/checkin/upload", { method: "POST", body: formData });

    if (!res.ok) {
      const text = await res.text();
      throw new Error("Upload failed: " + text);
    }

    const data = await res.json();
    return data.files;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      const uploadedFiles = await uploadImages();

      const payload = {
        ...form,
        image_1: uploadedFiles[0] || null,
        image_2: uploadedFiles[1] || null,
        image_3: uploadedFiles[2] || null
      };

      const res = await fetch("/api/checkin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message);
      }

      alert("Thêm mới thành công!");
      router.push("/dashboard/checkin");
    } catch (err) {
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
          <label className="block font-medium">Tên điểm (Tiếng Việt)</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} className="w-full border px-3 py-2 rounded" required />
        </div>
        <div>
          <label className="block font-medium">Tên điểm (Tiếng Anh)</label>
          <input type="text" name="name_en" value={form.name_en} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
        </div>

        <div className="flex gap-4">
          {["image_1","image_2","image_3"].map((img,key) => (
            <div key={key}>
              <label className="block font-medium">Ảnh {key+1}</label>
              <input type="file" name={img} onChange={handleImageChange} accept="image/*" />
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

        <button type="submit" disabled={loading} className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
          {loading ? "Đang thêm..." : "Thêm mới"}
        </button>
      </form>
    </div>
  );
};

export default AddCheckin;
