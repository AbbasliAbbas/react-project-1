import React from 'react'

const Card = () => {
  return (
    <div className="  gap-[60px] mt-[50px] flex text-white">
    
      <div className='bg-gray-800 rounded-[5px] w-[300px] h-[100px] pl-[20px] pt-[20px] ml-[50px]'>Card <br /><p className='text-gray-400 pt-[5px]'>This is my card.</p></div>
      <div className='bg-gray-800 rounded-[5px] w-[300px] h-[100px] pl-[20px] pt-[20px]'>Card <br /><p className='text-gray-400 pt-[5px]'>This is my card.</p></div>
      <div className='bg-gray-800 rounded-[5px] w-[300px] h-[100px] pl-[20px] pt-[20px]'>Card <br /><p className='text-gray-400 pt-[5px]'>This is my card.</p></div>
      <div className='bg-gray-800 rounded-[5px] w-[300px] h-[100px] pl-[20px] pt-[20px] mr-[50px]'>Card <br /><p className='text-gray-400 pt-[5px]'>This is my card.</p></div>
    </div>
  )
}

export default Card