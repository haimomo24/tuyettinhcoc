import React from 'react'

const FooterPageEn = () => {
  return (
     <footer className="w-full bg-[#006545]   py-10">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* FLEX CHỈNH 2 BÊN */}
        <div className="flex flex-col lg:flex-row justify-between items-start">

          {/* BÊN TRÁI */}
          <div className="max-w-sm">
            <h2 className="font-['Playfair_Display'] font-semibold text-[#8a6d46] text-2xl mb-6">
              TINH COC LAND
            </h2>

          

            <a
              href="#"
              className="py-2.5 px-5 bg-[#8A6D46] rounded-full shadow-sm text-xs text-white transition-all duration-500 hover:bg-indigo-700"
            >
              Contact us
            </a>
          </div>

          {/* BÊN PHẢI */}
          <div className="text-right mt-10 lg:mt-0">
            <ul className="text-sm mt-10 text-[#FFFFFF]">
              <li className="mb-4">
               Address: Tay Hoa Lu Ward, Ninh Binh Province
              </li>

              <li className="mb-4">
                SĐT: 0123456789
              </li>

              <li className="mb-4">
                Email: abc@gmail.com
              </li>
            </ul>
          </div>

        </div>

      </div>
    </footer>
  )
}

export default FooterPageEn