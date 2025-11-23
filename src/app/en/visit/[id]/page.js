"use client";
import React from 'react';

import { useParams } from "next/navigation";
import VisitDetailEn from '@/app/component/en/common/VisitDetailEn';

const page = () => {
    const params = useParams(); 
      const id = params.id;
    
      if (!id) return <p>Không tìm thấy ID</p>;
  return (
     <div>
          <VisitDetailEn id={id} />
        </div>
  )
}

export default page