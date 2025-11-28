"use client";

import FooterPage from "../component/vi/layout/FooterPage";
import HeaderPagevi from "../component/vi/layout/HeaderPagevi";
import "../globals.css";
import Head from "next/head";

export default function ViLayout({ children }) {
  const title = "Khu Du Lịch Tuyệt Tịnh Cốc Ninh Bình";
  const description = "Khu Du Lịch Tuyệt Tịnh Cốc Ninh Bình";
  const url = "https://tuyettinhcocninhbinh.com/vi";
  const image = "https://tuyettinhcocninhbinh.com/og.jpg";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content="Tuyệt Tịnh Cốc Ninh Bình" />
        <meta property="og:locale" content="vi_VN" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={title} />

        <link rel="icon" href="/images/logo-bai-dinh.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      <HeaderPagevi />
      <div className="h-[100px] w-full"></div>
      {children}
      <FooterPage />
    </>
  );
}
