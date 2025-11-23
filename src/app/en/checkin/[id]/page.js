"use client";

import React from 'react'
import { useParams } from "next/navigation";
import CheckinDetaillEn from '@/app/component/en/common/CheckinDetaillEn';

const page = () => {
       const params = useParams(); // lấy dynamic params client-side
        const id = params.id;
       if (!id) return <p>Không tìm thấy ID</p>;
  return (
    <div>
        <CheckinDetaillEn id={id} />
    </div>
  )
}

export default page