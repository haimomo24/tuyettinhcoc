"use client";
import ServiceDetail from '@/app/component/vi/common/ServiceDetail'
import React from 'react'
import { useParams } from "next/navigation";

const page = () => {
  const params = useParams(); // lấy dynamic params client-side
      const id = params.id;
     if (!id) return <p>Không tìm thấy ID</p>;
  return (
    <div>
        <ServiceDetail id={id}/>
    </div>
  )
}

export default page