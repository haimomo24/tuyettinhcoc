import React from 'react';

// Dữ liệu mẫu cho các bài viết du lịch
const travelGuideData = [
  {
    imgSrc: 'https://via.placeholder.com/400x250/B0BEC5/FFFFFF?text=Thiên+đường+hoa',
    title: 'THIÊN ĐƯỜNG HOA THUNG NHAM – Khi thiên nhiên nở rộ những sắc màu cuối năm',
    description: 'Thung Nham cuối năm thật sự là một điểm đến lý tưởng dành cho những ai yêu thích thiên nhiên. Sự kết hợp giữa núi non hùng vĩ và hoa cỏ xinh đẹp sẽ mang đến cho bạn trải nghiệm không thể nào quên.',
    link: '#' // Có thể thay bằng link bài viết chi tiết
  },
  {
    imgSrc: 'https://via.placeholder.com/400x250/8D6E63/FFFFFF?text=Tiệc+cưới',
    title: 'TIỆC CƯỚI BÊN HỒ BƠI THUNG NHAM – Khi thiên nhiên viết khúc giao hòa của hạnh phúc',
    description: 'Nằm giữa lòng núi non hùng vĩ, được bao quanh bởi thảm thực vật xanh mướt, và mặt nước trong xanh, tiệc cưới tại hồ bơi Thung Nham là sự kết hợp hoàn hảo giữa thiên nhiên và tiện nghi.',
    link: '#'
  },
  {
    imgSrc: 'https://via.placeholder.com/400x250/7986CB/FFFFFF?text=Hill+Coffee',
    title: 'HILL COFFEE & JADE BAR hai khoảng lặng giữa thiên nhiên THUNG NHAM',
    description: 'Giữa khuôn viên rợp bóng cây và hồ nước xanh mát của Thung Nham, HILL COFFEE & JADE BAR là hai góc nhỏ bình yên giữa thiên nhiên.',
    link: '#'
  },
  // Bạn có thể thêm nhiều bài viết khác vào đây
  {
    imgSrc: 'https://via.placeholder.com/400x250/81C784/FFFFFF?text=Hang+Bụt',
    title: 'KHÁM PHÁ HANG BỤT - VẺ ĐẸP HUYỀN BÍ TRONG LÒNG NÚI',
    description: 'Hang Bụt là một hang động tự nhiên với vẻ đẹp hoang sơ và huyền bí, là điểm đến lý tưởng cho những ai yêu thích khám phá và trải nghiệm thiên nhiên hùng vĩ.',
    link: '#'
  },
  {
    imgSrc: 'https://via.placeholder.com/400x250/64B5F6/FFFFFF?text=Động+Tiên',
    title: 'ĐỘNG TIÊN - NƠI HỘI TỤ VẺ ĐẸP CỦA HUYỀN THOẠI',
    description: 'Động Tiên mang trong mình những câu chuyện cổ tích và cảnh quan tuyệt đẹp với những khối đá vôi lấp lánh, tạo nên một không gian kỳ ảo, cuốn hút.',
    link: '#'
  },
];

const NodeVisit = () => {
  // Để đơn giản, chúng ta sẽ hardcode phân trang một chút.
  // Trong thực tế, bạn sẽ dùng state và logic để xử lý trang hiện tại.
  const currentPage = 1; // Trang hiện tại (mặc định)
  const totalPages = 5; // Tổng số trang
  const visiblePageNumbers = [1, 2, 3, 4, 5]; // Các số trang hiển thị

  return (
    // Section chính, với nền trắng và padding
    <div className="bg-white py-12 md:py-16">
      
      {/* Container giới hạn chiều rộng và căn giữa */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tiêu đề "Sổ tay du lịch" */}
        <h2 className="font-['Playfair_Display'] font-semibold text-[#8a6d46] mb-8 text-3xl sm:text-3xl lg:text-3xl text-center lg:text-left">
          SỔ TAY DU LỊCH
        </h2>
        {/* Mô tả ngắn */}
        <p className="text-gray-600 text-lg mb-8 sm:mb-10 text-center lg:text-left">
          Cùng khám phá Thung Nham và Ninh Bình qua màn ảnh nhỏ nhé!
        </p>
        
        {/* Lưới chứa các thẻ bài viết */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {travelGuideData.slice(0, 3).map((item, index) => ( // Hiển thị 3 bài viết đầu tiên cho demo
            <div 
              key={index} 
              // Class cho mỗi thẻ bài viết
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
                  {/* Tiêu đề bài viết */}
                  <h3 className="font-['Playfair_Display'] text-[#8a6d46] text-xl mb-4 leading-tight">
                    {item.title}
                  </h3>
                  {/* Mô tả ngắn */}
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

        {/* Phần phân trang (Pagination) */}
        <div className="flex justify-center items-center mt-12 space-x-2">
          {/* Nút Previous */}
          <button 
            className="px-4 py-2 text-gray-500 hover:text-[#8a6d46] transition-colors duration-200"
            disabled={currentPage === 1} // Vô hiệu hóa khi ở trang đầu
          >
            &laquo; Previous
          </button>

          {/* Các số trang */}
          {visiblePageNumbers.map((pageNumber) => (
            <button
              key={pageNumber}
              className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                pageNumber === currentPage
                  ? 'bg-[#8a6d46] text-white shadow-md' // Trang hiện tại
                  : 'text-gray-700 hover:bg-gray-100' // Các trang khác
              }`}
            >
              {pageNumber}
            </button>
          ))}

          {/* Nút Next */}
          <button 
            className="px-4 py-2 text-gray-500 hover:text-[#8a6d46] transition-colors duration-200"
            disabled={currentPage === totalPages} // Vô hiệu hóa khi ở trang cuối
          >
            Next &raquo;
          </button>
        </div>

      </div>
    </div>
  );
};

export default NodeVisit;