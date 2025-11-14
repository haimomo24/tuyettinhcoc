import React from 'react';

// Dữ liệu cho các thẻ
const cuisineData = [
  {
    imgSrc: 'https://via.placeholder.com/400x250/B0BEC5/FFFFFF?text=Tiệc+ngoài+trời',
    title: 'Tiệc ngoài trời',
    description: 'Bất kể là bữa tiệc gia đình ấm cúng, gala dinner, hay tiệc sự kiện đẳng cấp... thì không gian thoáng đãng ngoài trời của Thung Nham là sự chọn lý tưởng.'
  },
  {
    imgSrc: 'https://via.placeholder.com/400x250/8D6E63/FFFFFF?text=Nhà+hàng',
    title: 'Nhà hàng Thung Nham',
    description: 'Nhà hàng Thung Nham mang đến cho thực khách nền ẩm thực đặc sắc của vùng cố đô Hoa Lư Ninh Bình.'
  },
  {
    imgSrc: 'https://via.placeholder.com/400x250/7986CB/FFFFFF?text=Jade+Bar',
    title: 'Jade Bar',
    description: 'Được thiết kế ấn tượng và hài hòa với khung cảnh thiên nhiên của Thung Nham, Jade Bar như một viên ngọc được đặt lưng chừng bể bơi xanh trong, hứa hẹn sẽ đem lại cho bạn một trải nghiệm tuyệt vời nhất.'
  },
  {
    imgSrc: 'https://via.placeholder.com/400x250/81C784/FFFFFF?text=Hill+Coffee',
    title: 'Hill Coffee – Mộc An Viên',
    description: 'Nằm trên đỉnh ngọn đồi được phủ xanh bởi cây cối và thảm cỏ, Hill Coffee – Mộc An Viên có tầm nhìn ra sườn đồi thanh bình với những chỗ ngồi chòi lợp mái tranh duyên dáng mộc mạc.'
  }
];

const VisitPage = () => {
  return (
    // Section chính, với nền xám nhạt và padding
    <div className="bg-gray-50 py-12 md:py-16">
      
      {/* Container giới hạn chiều rộng và căn giữa */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tiêu đề "Ẩm thực" */}
        <h2 className="font-['Playfair_Display'] font-semibold text-[#8a6d46] mb-8 text-3xl sm:text-3xl lg:text-3xl text-center lg:text-left">
          CÁC ĐIỂM CHECK IN 
        </h2>
        
        {/* Lưới chứa 4 thẻ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {cuisineData.map((item, index) => (
            <div 
              key={index} 
              // Đây là class cho mỗi thẻ
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-xl"
            >
              
              {/* Hình ảnh */}
              <img 
                src={item.imgSrc} 
                alt={item.title} 
                className="w-full h-[220px] object-cover" // Dùng h-[220px] để custom chiều cao
              />
              
              {/* Nội dung text */}
              <div className="p-6 flex-grow">
                {/* Tiêu đề thẻ */}
                <h3 className="font-['Playfair_Display'] font-serif text-[#8a6d46] text-xl mb-4">
                  {item.title}
                </h3>
                {/* Mô tả thẻ */}
                <p className="font-sans text-gray-600 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default VisitPage;