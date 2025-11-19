"use client";
import { useAuth } from "@/hooks/useAuth";
import React from "react";


const DashboardPage = () => {
  useAuth(); 

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Trang dành cho người đã đăng nhập</h1>
      <p>Chỉ có thể xem khi bạn đã đăng nhập thành công.</p>
    </div>
  );
};

export default DashboardPage;
