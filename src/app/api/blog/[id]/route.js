import { getPool } from "@/lib/db";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// 🔹 Hàm xóa file nếu tồn tại
const deleteFileIfExists = (fileName) => {
  if (!fileName) return;
  const fullPath = path.join(process.cwd(), "public", "uploads", "blog", fileName);
  if (fs.existsSync(fullPath)) {
    fs.unlinkSync(fullPath);
    console.log("Đã xoá file:", fullPath);
  }
};

// 🔹 GET tất cả checkin
export async function GET(req) {
  const url = new URL(req.url);
  if (url.pathname.endsWith("/blog")) {
    const pool = await getPool();
    const result = await pool.request().query("SELECT * FROM blog ORDER BY id DESC");
    return NextResponse.json(result.recordset || []);
  }
}

// 🔹 GET 1 bản ghi theo ID
export async function GET_ID(req) {
  const url = new URL(req.url);
  const id = url.pathname.split("/").pop();

  const pool = await getPool();
  const result = await pool.request()
    .input("id", id)
    .query("SELECT * FROM blog WHERE id=@id");
  return NextResponse.json(result.recordset[0] || {});
}

// 🔹 PUT cập nhật bản ghi
export async function PUT(req) {
  const url = new URL(req.url);
  const id = url.pathname.split("/").pop();
  const body = await req.json();

  const pool = await getPool();

  // Lấy dữ liệu cũ để xóa ảnh nếu upload mới
  const oldDataResult = await pool.request().input("id", id)
    .query("SELECT * FROM blog WHERE id=@id");
  const oldData = oldDataResult.recordset[0] || {};

  ["image_1", "image_2", "image_3"].forEach(key => {
    if (body[key] && body[key] !== oldData[key]) {
      deleteFileIfExists(oldData[key]);
    }
  });

  const sqlQuery = `
    UPDATE blog SET
      name=@name, name_en=@name_en,
      image_1=@image_1, image_2=@image_2, image_3=@image_3,
      title_1=@title_1, title_2=@title_2, title_3=@title_3, title_4=@title_4,
      title_1_en=@title_1_en, title_2_en=@title_2_en, title_3_en=@title_3_en, title_4_en=@title_4_en
    WHERE id=@id
  `;

  const request = pool.request().input("id", id);
  Object.keys(body).forEach(key => request.input(key, body[key] ?? null));
  await request.query(sqlQuery);

  return NextResponse.json({ message: "Updated successfully" });
}

// 🔹 DELETE bản ghi
export async function DELETE(req) {
  const url = new URL(req.url);
  const id = url.pathname.split("/").pop();

  const pool = await getPool();

  // Lấy dữ liệu cũ để xóa ảnh
  const oldDataResult = await pool.request().input("id", id)
    .query("SELECT * FROM blog WHERE id=@id");
  const oldData = oldDataResult.recordset[0] || {};

  ["image_1", "image_2", "image_3"].forEach(key => deleteFileIfExists(oldData[key]));

  // Xóa bản ghi
  await pool.request().input("id", id)
    .query("DELETE FROM blog WHERE id=@id");

  return NextResponse.json({ message: "Deleted successfully" });
}
