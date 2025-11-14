import React from 'react';

// Dữ liệu mẫu cho các dịch vụ
const servicesData = [
  {
    imgSrc: 'https://via.placeholder.com/400x250/B0BEC5/FFFFFF?text=Thung+Nham+Eco+Gifts',
    title: 'Thung Nham Eco Gifts',
    description: 'Thung Nham Eco Gifts – một góc nhỏ xinh nằm giữa lòng Thung Nham là nơi những điều giản dị nhất được nâng niu để trao gửi.',
    link: '#' // Có thể thay bằng link chi tiết dịch vụ
  },
  {
    imgSrc: 'https://via.placeholder.com/400x250/8D6E63/FFFFFF?text=Hồ+bơi+Thung+Nham',
    title: 'Hồ bơi Thung Nham',
    description: 'Không chỉ là địa điểm bơi lội, vui chơi, giải trí, giải nhiệt mùa hè cho du khách, hồ bơi Thung Nham còn được xây dựng với mong muốn trở thành địa điểm lý tưởng để tổ chức các sự kiện tiệc cưới, sinh nhật, hội họp, kỷ niệm...',
    link: '#'
  },
  {
    imgSrc: 'https://via.placeholder.com/400x250/7986CB/FFFFFF?text=Thuê+xe+điện',
    title: 'Thuê xe điện',
    description: 'Di chuyển bằng xe điện giúp du khách dễ dàng tìm hiểu, khám phá, tận hưởng không khí trong lành và lưu giữ khoảnh khắc đáng nhớ bên gia đình, bạn bè và người thân.',
    link: '#'
  }
];

const NewPagevi = () => {
  return (
    // Section chính, với nền xám nhạt và padding
    <div className="bg-gray-50 py-12 md:py-16">
      
      {/* Container giới hạn chiều rộng và căn giữa */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tiêu đề "Dịch vụ" */}
        <h2 className="font-['Playfair_Display'] font-semibold text-[#8a6d46] text-3xl sm:text-3xl lg:text-3xl mb-8 text-center lg:text-left">
          SỰ KIỆN 
        </h2>
        
        {/* Lưới chứa các thẻ dịch vụ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {servicesData.map((item, index) => (
            <div 
              key={index} 
              // Class cho mỗi thẻ dịch vụ
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl border border-gray-100"
            >
              
              {/* Hình ảnh */}
              <img 
                src={item.imgSrc} 
                alt={item.title} 
                className="w-full h-[220px] object-cover" 
              />
              
              {/* Nội dung text */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  {/* Tiêu đề dịch vụ */}
                  <h3 className="font-['Playfair_Display'] text-[#8a6d46] text-xl mb-4 leading-tight">
                    {item.title}
                  </h3>
                  {/* Mô tả dịch vụ */}
                  <p className="font-sans text-gray-600 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
                
                {/* Nút "Xem chi tiết" */}
                <a 
                  href={item.link} 
                  className="flex items-center text-[#8a6d46] hover:text-[#a08a6d] mt-6 group transition-colors duration-200"
                >
                  {/* Icon mũi tên */}
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth="1.5" 
                    stroke="currentColor" 
                    className="w-6 h-6 mr-2 group-hover:translate-x-1 transition-transform duration-200"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                  Xem chi tiết
                </a>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default NewPagevi;