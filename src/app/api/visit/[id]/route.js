import { NextResponse } from "next/server";
import { getPool } from "@/lib/db";
import fs from "fs";
import path from "path";

const deleteFileIfExists = (fileName) => {
  if (!fileName) return;
  const fullPath = path.join(process.cwd(), "public", "uploads", "visit", fileName);
  try {
    if (fs.existsSync(fullPath)) fs.unlinkSync(fullPath);
  } catch (err) {
    console.error("Xóa file lỗi:", fullPath, err);
  }
};

// ✅ GET chi tiết theo ID
export async function GET(req, context) {
  try {
    const params = await context.params; // **unwrap params**
    const id = Number(params.id);
    if (!id) return NextResponse.json({ error: "ID không hợp lệ" }, { status: 400 });

    const pool = await getPool();
    const result = await pool.request()
      .input("id", id)
      .query("SELECT * FROM visit WHERE id=@id");

    const visit = result.recordset[0];
    if (!visit) return NextResponse.json({ error: "Không tìm thấy dữ liệu" }, { status: 404 });

    return NextResponse.json(visit);
  } catch (err) {
    console.error("GET visit lỗi:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// ✅ PUT cập nhật
export async function PUT(req, context) {
  try {
    const params = await context.params;
    const id = Number(params.id);
    if (!id) return NextResponse.json({ error: "ID không hợp lệ" }, { status: 400 });

    const body = await req.json();
    const pool = await getPool();

    const oldDataResult = await pool.request().input("id", id).query("SELECT * FROM visit WHERE id=@id");
    const oldData = oldDataResult.recordset[0];
    if (!oldData) return NextResponse.json({ error: "Không tìm thấy dữ liệu" }, { status: 404 });

    ["image_1", "image_2", "image_3"].forEach(key => {
      if (body[key] && body[key] !== oldData[key]) deleteFileIfExists(oldData[key]);
    });

    const request = pool.request().input("id", id);
    Object.keys(body).forEach(key => request.input(key, body[key] ?? null));
    await request.query(`
      UPDATE visit SET
        name=@name, name_en=@name_en,
        image_1=@image_1, image_2=@image_2, image_3=@image_3,
        title_1=@title_1, title_2=@title_2, title_3=@title_3, title_4=@title_4,
        title_1_en=@title_1_en, title_2_en=@title_2_en, title_3_en=@title_3_en, title_4_en=@title_4_en
      WHERE id=@id
    `);

    return NextResponse.json({ message: "Updated successfully" });
  } catch (err) {
    console.error("PUT visit lỗi:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// ✅ DELETE bản ghi
export async function DELETE(req, context) {
  try {
    const params = await context.params;
    const id = Number(params.id);
    if (!id) return NextResponse.json({ error: "ID không hợp lệ" }, { status: 400 });

    const pool = await getPool();
    const oldDataResult = await pool.request().input("id", id).query("SELECT * FROM visit WHERE id=@id");
    const oldData = oldDataResult.recordset[0];
    if (!oldData) return NextResponse.json({ error: "Không tìm thấy dữ liệu" }, { status: 404 });

    ["image_1", "image_2", "image_3"].forEach(key => deleteFileIfExists(oldData[key]));

    await pool.request().input("id", id).query("DELETE FROM visit WHERE id=@id");

    return NextResponse.json({ message: "Deleted successfully" });
  } catch (err) {
    console.error("DELETE visit lỗi:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
