"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrMsg("");
    setLoading(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        const data = await res.json();
        setErrMsg(data.error || "Đăng nhập thất bại");
        setLoading(false);
        return;
      }

      const data = await res.json();

      // Lưu user vào localStorage (nếu bạn có token thì dùng token)
      localStorage.setItem("user", JSON.stringify(data));

      router.push("/dashboard");
    } catch (err) {
      console.error(err);
      setErrMsg("Lỗi kết nối server. Hãy chắc chắn backend đang chạy trên port 5000");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-100">
      <div className="relative z-10 w-full max-w-md px-6">
        <div className="bg-white/90 backdrop-blur-xl p-10 rounded-2xl shadow-2xl border border-gray-100">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">Đăng Nhập</h1>
          <p className="text-center text-gray-500 mb-8">Chào mừng bạn quay trở lại 👋</p>

          {errMsg && <p className="text-red-600 text-center mb-4 font-medium">{errMsg}</p>}

          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Tên đăng nhập"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full h-12 px-4 mb-4 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              required
            />
            <input
              type="password"
              placeholder="Mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-12 px-4 mb-6 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              required
            />
            <button
              disabled={loading}
              className="w-full h-12 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:bg-indigo-700 transition duration-300"
            >
              {loading ? "Đang đăng nhập..." : "Đăng nhập"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
