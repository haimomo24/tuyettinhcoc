import React from 'react'

const FooterPage = () => {
  return (
    <footer className="w-full bg-gradient-to-t from-green-900 via-green-700/70 to-green-500/50 py-10">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* FLEX CHỈNH 2 BÊN */}
        <div className="flex flex-col lg:flex-row justify-between items-start">

          {/* BÊN TRÁI */}
          <div className="max-w-sm">
            <h2 className="font-['Playfair_Display'] font-semibold text-[#8a6d46] text-2xl mb-6">
              KDL TUYỆT TỊNH CỐC
            </h2>

            <p className="text-sm text-gray-600 mb-6">
              Trusted in more than 100 countries &amp; 5 million customers.
              Have any query?
            </p>

            <a
              href="/vi/contact"
              className="py-2.5 px-5 bg-indigo-600 rounded-full shadow-sm text-xs text-white transition-all duration-500 hover:bg-indigo-700"
            >
              Contact us
            </a>
          </div>

          {/* BÊN PHẢI */}
          <div className="text-left mt-10 lg:mt-0">
            <ul className="text-sm text-gray-600">
              <li className="mb-4">
                Địa chỉ: Phường Tây Hoa Lư, Tỉnh Ninh Bình
              </li>

              <li className="mb-4">
                SĐT: 0966163701
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

export default FooterPage
