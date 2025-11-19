"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export const useAuth = () => {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      // Nếu chưa login → redirect về login
      router.replace("/login");
    }
  }, [router]);
};
