"use client";

import React from 'react'
import { useParams } from "next/navigation";
import ServiceDetailEn from '@/app/component/en/common/ServiceDetailEn';

const page = () => {
    const params = useParams(); // lấy dynamic params client-side
          const id = params.id;
         if (!id) return <p>Không tìm thấy ID</p>;
  return (
   <div>
           <ServiceDetailEn id={id}/>
       </div>
  )
}

export default page