import React from 'react'
const Header = () => {
  return (
    
    <div className="bg-gray-100 ">
   
    <nav className="bg-gray-800 text-white p-4 flex  items-center justify-between">
      
      <div className="flex items-center  mb-4 ">
        <img src="logo.png"  className="w-[60px] h-[60px] mt-[20px] ml-[20px]" />
        <span className="text-xl font-bold ml-[50px] mt-[20px]">LOGO</span>
      </div>

     
      <div className="flex items-center">
       
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Type here..."
            className="p-[10px] rounded bg-gray-700 text-white mr-[20px]"
          />
          <button className="p-2 bg-gray-700 rounded text-white  mr-[250px]">
          <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>

       
        <div>
          <a href="#" className="hover:text-gray-400 mr-[50px]">
            Home
          </a>
          <a href="#" className="hover:text-gray-400 mr-[50px]">
            About
          </a>
          <a href="#" className="hover:text-gray-400 mr-[100px]">
            Contact
          </a>
        </div>
      </div>
    </nav>

    
   
  </div>
)
}




export default Header