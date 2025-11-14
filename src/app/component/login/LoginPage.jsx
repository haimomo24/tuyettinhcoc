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
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrMsg(data.error || "Đăng nhập thất bại");
        setLoading(false);
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      router.push("/dashboard");
    } catch (error) {
      setErrMsg("Lỗi kết nối server");
    }

    setLoading(false);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-100">
      {/* Background blur image */}
      <img
        src="https://pagedone.io/asset/uploads/1702362010.png"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover opacity-60 blur-sm"
      />

      {/* Login Form */}
      <div className="relative z-10 w-full max-w-md px-6">
        <div className="bg-white/90 backdrop-blur-xl p-10 rounded-2xl shadow-2xl border border-gray-100">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
            Đăng Nhập
          </h1>
          <p className="text-center text-gray-500 mb-8">
            Chào mừng bạn quay trở lại 👋
          </p>

          {errMsg && (
            <p className="text-red-600 text-center mb-4 font-medium">
              {errMsg}
            </p>
          )}

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

          <p className="text-center text-gray-700 mt-6">
            Chưa có tài khoản?
            <span className="text-indigo-600 font-semibold ml-1 cursor-pointer hover:underline">
              Đăng ký ngay
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
