import { getPool } from "@/lib/db";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const deleteFileIfExists = (fileName) => {
  if (!fileName) return;
  const fullPath = path.join(process.cwd(), "public", "uploads", "service", fileName);
  if (fs.existsSync(fullPath)) {
    fs.unlinkSync(fullPath);
  }
};

// ========================== GET /api/service/:id ==========================
export async function GET(req, context) {
  const { id } = await context.params;

  const pool = await getPool();
  const result = await pool
    .request()
    .input("id", id)
    .query("SELECT * FROM service WHERE id=@id");

  return NextResponse.json(result.recordset[0] || {});
}

// ========================== PUT /api/service/:id ==========================
export async function PUT(req, context) {
  const { id } = await context.params;
  const body = await req.json();

  const pool = await getPool();

  const oldDataResult = await pool
    .request()
    .input("id", id)
    .query("SELECT * FROM service WHERE id=@id");

  const oldData = oldDataResult.recordset[0] || {};

  ["image_1", "image_2", "image_3"].forEach((key) => {
    if (body[key] && body[key] !== oldData[key]) {
      deleteFileIfExists(oldData[key]);
    }
  });

  const sqlQuery = `
    UPDATE service SET
      name=@name, name_en=@name_en,
      image_1=@image_1, image_2=@image_2, image_3=@image_3,
      title_1=@title_1, title_2=@title_2, title_3=@title_3, title_4=@title_4,
      title_1_en=@title_1_en, title_2_en=@title_2_en, title_3_en=@title_3_en, title_4_en=@title_4_en
    WHERE id=@id
  `;

  const request = pool.request().input("id", id);
  Object.keys(body).forEach((key) => request.input(key, body[key] ?? null));

  await request.query(sqlQuery);

  return NextResponse.json({ message: "Updated successfully" });
}

// ========================== DELETE /api/service/:id ==========================
export async function DELETE(req, context) {
  const { id } = await context.params;
  const pool = await getPool();

  const oldDataResult = await pool
    .request()
    .input("id", id)
    .query("SELECT * FROM service WHERE id=@id");

  const oldData = oldDataResult.recordset[0] || {};

  ["image_1", "image_2", "image_3"].forEach((key) => {
    deleteFileIfExists(oldData[key]);
  });

  await pool.request().input("id", id).query("DELETE FROM service WHERE id=@id");

  return NextResponse.json({ message: "Deleted successfully" });
}
