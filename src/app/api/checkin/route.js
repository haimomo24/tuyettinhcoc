import { NextResponse } from "next/server";
import { getPool } from "@/lib/db";

export const GET = async () => {
  const pool = await getPool();
  const result = await pool.request().query("SELECT * FROM checkin ORDER BY id DESC");
  return NextResponse.json(result.recordset);
};

export const POST = async (req) => {
  const body = await req.json();
  const pool = await getPool();

  const sqlQuery = `
    INSERT INTO checkin (
      name, name_en, image_1, image_2, image_3,
      title_1, title_2, title_3, title_4,
      title_1_en, title_2_en, title_3_en, title_4_en
    ) VALUES (
      @name, @name_en, @image_1, @image_2, @image_3,
      @title_1, @title_2, @title_3, @title_4,
      @title_1_en, @title_2_en, @title_3_en, @title_4_en
    )
  `;

  const request = pool.request();
  Object.keys(body).forEach(key => request.input(key, body[key] ?? null));
  await request.query(sqlQuery);

  return NextResponse.json({ message: "Created successfully" });
};
