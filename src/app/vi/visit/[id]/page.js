"use client";
import React from 'react';
import VisitDetailClient from '@/app/component/vi/common/VisitDetail';
import { useParams } from "next/navigation";


const Page = () => {
  const params = useParams(); 
  const id = params.id;

  if (!id) return <p>Không tìm thấy ID</p>;
  
  return (
    <div>
      <VisitDetailClient id={id} />
    </div>
  );
};

export default Page;
