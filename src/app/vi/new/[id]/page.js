"use client";
import NewDetail from '@/app/component/vi/common/NewDetail'
import React from 'react'
import { useParams } from "next/navigation";

const page = () => {
     const params = useParams(); 
      const id = params.id;
      if (!id) return <p>Không tìm thấy ID</p>;
  return (
    <div>
        <NewDetail id={id}/>
    </div>
  )
}

export default page