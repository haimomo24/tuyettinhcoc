"use client";
import React from "react";

const rooms = [
    {
        id: 1,
        name: "Team Building - Tinh Coc Land",
        bed: "1 giường",
        area: "25m2",
        image:
            "https://static.vinwonders.com/production/tuyet-tinh-coc-banner.jpg",
        description:
            "Khu biệt thự song lập Thiên Điểu nằm bên sườn núi tuyệt đẹp của Thung Nham - là sự kết hợp trải nghiệm nghỉ dưỡng với thiên nhiên, ngắm mặt trời mọc, lắng nghe âm thanh của núi rừng, mang hơi thở của thiên nhiên.",
    },
    {
        id: 2,
        name: "Đạp xe ",
        bed: "2 giường",
        area: "32m2",
        image:
            "https://bizweb.dktcdn.net/100/101/075/files/toan-canh-tuyet-tinh-coc-ninh-binh.jpg?v=1631353627358",
        description:
            "Phòng Deluxe Twin rộng 32m2, trang trí nội thất hiện đại, có tầm nhìn tuyệt đẹp ra hồ và thiên nhiên Thung Nham mộng mơ.",
    },
    {
        id: 3,
        name: " Cổ phục",
        bed: "2 giường",
        area: "40m2",
        image:
            "https://thesinhtourism.vn/wp-content/uploads/2025/05/tour-du-lich-ninh-binh-tuyet-tinh-coc-ninh-binh-trang-an-du-lich-the-sinh-tourist-004-1200x540.jpg",
        description:
            "Phòng Grand Deluxe có diện tích lớn nhất, hướng ra hồ lung linh và các khu vườn hoa của khu nghỉ dưỡng.",
    },
];

const CarListvi = () => {
    return (
        <div className="bg-[#fdf6f0] py-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-semibold text-[#a32b44]">
                    TUYỆT TỊNH CỐC
                </h2>
                <p className="text-[#6b6b6b] italic mt-2">
                    ~ Bản giao hưởng miền nhiệt đới ~
                </p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
                {rooms.map((room) => (
                    <div
                        key={room.id}
                        className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 h-full flex flex-col"
                    >
                        <img
                            src={room.image}
                            alt={room.name}
                            className="w-full h-64 object-cover rounded-t-lg"
                        />
                        <div className="p-6 flex flex-col flex-1 justify-between">
                            <div>
                                <h3 className="text-xl font-semibold text-[#9a6536] mb-3">
                                    {room.name}
                                </h3>
                                <div className="flex justify-between text-sm text-gray-700 mb-3">
                                    <p>
                                        Số giường: <span className="text-green-700 font-medium">{room.bed}</span>
                                    </p>
                                    <p>
                                        Diện tích: <span className="text-green-700 font-medium">{room.area}</span>
                                    </p>
                                </div>
                                <p className="text-gray-600 mb-4">{room.description}</p>
                            </div>
                            <div className="flex justify-between items-center mt-auto">
                                <button className="bg-[#f5d1bb] text-[#7a4b2f] px-4 py-2 rounded-md hover:bg-[#eec2a5] transition">
                                    Xem chi tiết
                                </button>
                               
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    );
};

export default CarListvi;
