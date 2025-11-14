import { getPool } from "@/lib/db";
import sql from "mssql";

export async function POST(req) {
  try {
    const { username, password } = await req.json();

    if (!username || !password) {
      return Response.json({ error: "Thiếu username hoặc password" }, { status: 400 });
    }

    const pool = await getPool();
    const result = await pool
      .request()
      .input("username", sql.NVarChar, username)
      .query("SELECT * FROM login WHERE username = @username");

    const user = result.recordset[0];

    if (!user) {
      return Response.json({ error: "Sai tài khoản" }, { status: 401 });
    }

    // So sánh mật khẩu (vì bạn đang lưu mật khẩu TEXT)
    if (user.password !== password) {
      return Response.json({ error: "Sai mật khẩu" }, { status: 401 });
    }

    // Tạo token đơn giản (nếu bạn chưa dùng JWT)
    const token = "token_" + user.id + "_" + Date.now();

    return Response.json({
      message: "Đăng nhập thành công",
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        level: user.level,
      }
    });

  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
