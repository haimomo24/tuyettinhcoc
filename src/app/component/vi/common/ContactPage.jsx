import React from 'react';

const ContactPage = () => {
  return (
    // Container chính với background image và overlay
    <div 
      className="relative  bg-cover bg-center"
     
    >
      {/* Overlay màu xanh lá trong suốt */}
      <div className="absolute inset-0 opacity-60"></div>
      
      {/* Container chứa nội dung chính */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col lg:flex-row justify-center items-start lg:space-x-12">
        
        {/* Phần Combo thông tin bên trái */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 md:p-8 lg:p-10 w-full lg:w-2/3 max-w-3xl mb-12 lg:mb-0 text-white shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <img src="https://via.placeholder.com/100x40/FFFFFF/000000?text=LOGO" alt="Logo Thung Nham" className="h-10" />
            <span className="text-sm">Vừa được cập nhật: 20.11.2023</span>
          </div>

         
          <button className="bg-yellow-500 hover:bg-yellow-600 text-green-900 font-bold py-3 px-8 rounded-full transition duration-300 shadow-md">
            TRỌN GÓI BAO GỒM
          </button>

          <div className="grid grid-cols-3 gap-6 mt-8 text-center">
            <div className="flex flex-col items-center">
              <img src="https://via.placeholder.com/60x60/FFFFFF/000000?text=I1" alt="Icon 1" className="w-16 h-16 mb-2 rounded-full border-2 border-green-300" />
              <p className="text-sm">VỀ TRẠM QUÁN</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://via.placeholder.com/60x60/FFFFFF/000000?text=I2" alt="Icon 2" className="w-16 h-16 mb-2 rounded-full border-2 border-green-300" />
              <p className="text-sm">ĐỀN ĐIỆN CHÍNH</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://via.placeholder.com/60x60/FFFFFF/000000?text=I3" alt="Icon 3" className="w-16 h-16 mb-2 rounded-full border-2 border-green-300" />
              <p className="text-sm">KHU RỪNG CỔ</p>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center justify-center mt-12 space-x-4 text-sm">
            <span className="flex items-center mr-4 mb-2">
              <img src="https://via.placeholder.com/20x20/FFFFFF/000000?text=L" alt="Location" className="w-5 h-5 mr-2" />
              Ninh Bình
            </span>
            <span className="flex items-center mr-4 mb-2">
              <img src="https://via.placeholder.com/20x20/FFFFFF/000000?text=E" alt="Email" className="w-5 h-5 mr-2" />
              Tuyettinhcoc.com
            </span>
            <span className="flex items-center mb-2">
              <img src="https://via.placeholder.com/20x20/FFFFFF/000000?text=P" alt="Phone" className="w-5 h-5 mr-2" />
              (+84) 123456789
            </span>
          </div>

          {/* Các chấm điều hướng */}
          <div className="flex justify-center space-x-2 mt-8">
            <span className="w-2.5 h-2.5 bg-white rounded-full opacity-70"></span>
            <span className="w-2.5 h-2.5 bg-white rounded-full opacity-30"></span>
            <span className="w-2.5 h-2.5 bg-white rounded-full opacity-30"></span>
          </div>

          <p className="text-xl font-semibold mt-10 text-center">Các ưu đãi đang áp dụng</p> {/* Đây chỉ là text, không phải phần thực tế */}
        </div>

        {/* Phần Đặt lịch online bên phải */}
        <div className="bg-white rounded-xl p-6 md:p-8 lg:p-10 w-full lg:w-1/3 max-w-md shadow-xl">
          <h2 className="font-['Playfair_Display'] text-3xl font-bold text-gray-800 mb-8">Đặt lịch online</h2>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="sr-only">Họ và tên*</label>
                <input type="text" id="name" placeholder="Họ và tên*" className="w-full border-b border-gray-300 focus:border-[#8a6d46] focus:ring-0 outline-none pb-2 text-gray-700 placeholder-gray-400 transition-colors duration-200" />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">Số điện thoại*</label>
                <input type="tel" id="phone" placeholder="Số điện thoại*" className="w-full border-b border-gray-300 focus:border-[#8a6d46] focus:ring-0 outline-none pb-2 text-gray-700 placeholder-gray-400 transition-colors duration-200" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="sr-only">Email*</label>
                <input type="email" id="email" placeholder="Email*" className="w-full border-b border-gray-300 focus:border-[#8a6d46] focus:ring-0 outline-none pb-2 text-gray-700 placeholder-gray-400 transition-colors duration-200" />
              </div>
              <div>
                <label htmlFor="address" className="sr-only">Địa chỉ</label>
                <input type="text" id="address" placeholder="Địa chỉ" className="w-full border-b border-gray-300 focus:border-[#8a6d46] focus:ring-0 outline-none pb-2 text-gray-700 placeholder-gray-400 transition-colors duration-200" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <label htmlFor="date" className="sr-only">mm/dd/yyyy</label>
                <input type="text" id="date" placeholder="mm/dd/yyyy" className="w-full border-b border-gray-300 focus:border-[#8a6d46] focus:ring-0 outline-none pb-2 text-gray-700 placeholder-gray-400 transition-colors duration-200" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-400 absolute right-0 bottom-2.5 pointer-events-none">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 015.25 21h13.5A2.25 2.25 0 0121 18.75m-18 0v-7.5m18 7.5v-7.5" />
                </svg>
              </div>
              <div className="relative">
                <label htmlFor="room_type" className="sr-only">Chọn phòng/dịch vụ</label>
                <select id="room_type" className="w-full border-b border-gray-300 focus:border-[#8a6d46] focus:ring-0 outline-none pb-2 text-gray-700 placeholder-gray-400 appearance-none bg-white pr-6 transition-colors duration-200">
                  <option value="">Chọn phòng/dịch vụ</option>
                  <option value="single">Phòng đơn</option>
                  <option value="double">Phòng đôi</option>
                  <option value="suite">Phòng Suite</option>
                  <option value="combo">Combo Du lịch</option>
                </select>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-400 absolute right-0 bottom-2.5 pointer-events-none">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed pt-4">
              Vui lòng điền thông tin, tư vấn viên sẽ gọi cho bạn để xác nhận, để được hỗ trợ nhanh nhất, bạn liên hệ hotline: <span className="text-[#8a6d46] font-semibold">0912.900.897</span> hoặc: <span className="text-[#8a6d46] font-semibold">0911.999.007</span>. Xin cảm ơn.
            </p>

            <button type="submit" className="w-full bg-[#8a6d46] hover:bg-[#a08a6d] text-white font-bold py-3 rounded-lg transition duration-300 shadow-md">
              Đặt lịch / Nhận tư vấn
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;