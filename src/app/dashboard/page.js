"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    // Lấy token từ localStorage
    const token = localStorage.getItem("token");

    if (!token) {
      // Nếu chưa login → chuyển về /login
      router.replace("/login");
    }
  }, [router]);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Trang dành cho người đã đăng nhập</h1>
      <p>Chỉ có thể xem khi bạn đã đăng nhập thành công.</p>
    </div>
  );
};

export default Page;
