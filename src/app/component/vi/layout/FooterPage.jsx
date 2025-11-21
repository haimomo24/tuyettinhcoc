import React from 'react'

const FooterPage = () => {
  return (
    <footer className="w-full  bg-gradient-to-t from-green-900 via-green-700/70 to-green-500/50">
  <div className="mx-auto  px-4 sm:px-6 lg:px-8">
    {/*Grid*/}
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
      <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
        <a
          href="https://pagedone.io/"
          className="font-['Playfair_Display'] font-semibold text-[#8a6d46] mb-8 text-1xl sm:text-1xl lg:text-2xl text-center lg:text-left"
        >
         KDL TUYỆT TỊNH CỐC
        </a>
        <p className="py-8 text-sm text-gray-500 lg:max-w-xs text-center lg:text-left">
          Trusted in more than 100 countries &amp; 5 million customers. Have any
          query ?
        </p>
        <a
          href="javascript:;"
          className="py-2.5 px-5 h-9 block w-fit bg-indigo-600 rounded-full shadow-sm text-xs text-white mx-auto transition-all  duration-500 hover:bg-indigo-700 lg:mx-0"
        >
          Contact us
        </a>
      </div>
      {/*End Col*/}
      <div className="lg:mx-auto text-left ">
        <h4 className="text-lg text-gray-900 font-medium mb-7"></h4>
        <ul className="text-sm  transition-all duration-500">
          <li className="mb-6">
            <a
              href="javascript:;"
              className="text-gray-600 hover:text-gray-900"
            >
              Địa chỉ : Phường Tây Hoa Lư, Tỉnh Ninh Bình 
            </a>
          </li>
          <li className="mb-6">
            <a
              href="javascript:;"
              className=" text-gray-600 hover:text-gray-900"
            >
              SĐT : 0123456789
            </a>
          </li>
          <li className="mb-6">
            <a
              href="javascript:;"
              className=" text-gray-600 hover:text-gray-900"
            >
              Email:abc@gmail.com
            </a>
          </li>
          
        </ul>
      </div>
      {/*End Col*/}
     
      {/*End Col*/}
      
      {/*End Col*/}
     
    </div>
    {/*Grid*/}
   
  </div>
</footer>

  )
}

export default FooterPage