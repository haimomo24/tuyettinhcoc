import { getPool } from "@/lib/db";
import sql from "mssql";

// Lấy 1 user theo ID
export async function GET(req, { params }) {
  try {
    const pool = await getPool();
    const result = await pool
      .request()
      .input("id", sql.Int, params.id)
      .query("SELECT * FROM login WHERE id = @id");

    if (result.recordset.length === 0)
      return Response.json({ error: "Không tìm thấy user" }, { status: 404 });

    return Response.json(result.recordset[0]);
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}

// Sửa user
export async function PUT(req, { params }) {
  try {
    const body = await req.json();
    const { username, email, level } = body;

    const pool = await getPool();
    await pool
      .request()
      .input("id", sql.Int, params.id)
      .input("username", sql.NVarChar, username)
      .input("email", sql.NVarChar, email)
      .input("level", sql.NVarChar, level)
      .query(
        `UPDATE login
         SET username=@username, email=@email, level=@level
         WHERE id=@id`
      );

    return Response.json({ message: "Cập nhật thành công" });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}

// Xoá user
export async function DELETE(req, { params }) {
  try {
    const pool = await getPool();
    await pool
      .request()
      .input("id", sql.Int, params.id)
      .query("DELETE FROM login WHERE id=@id");

    return Response.json({ message: "Xoá thành công" });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
