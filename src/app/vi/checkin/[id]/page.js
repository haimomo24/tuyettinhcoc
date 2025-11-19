"use client";
import CheckinDetail from '@/app/component/vi/common/CheckinDetail'
import React from 'react'
import { useParams } from "next/navigation";


const page = () => {
    const params = useParams(); // lấy dynamic params client-side
    const id = params.id;
   if (!id) return <p>Không tìm thấy ID</p>;
  return (
    <div>
        <CheckinDetail id={id} />
    </div>
  )
}

export default page