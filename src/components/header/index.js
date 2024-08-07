import React from 'react'

function index() {
  return (
    <div className='w-full border-b'>
      <div className='w-full md:w-5/6 mx-auto flex justify-between items-center py-2'>
        <div className='w-1/3 flex px-2 md:px-0'>
          <p className='text-4xl font-black text-[#2dc44d]'>ENUYGUN<span className='text-2xl text-[#26336b] font-extrabold'>Finans</span></p>
        </div>
        <div className='hidden lg:block w-3/5'>
          <ul className='flex text-sm justify-between font-light'>
            <li className='cursor-pointer hover:text-[#2dc44d]'>İhtiyaç</li>
            <li className='cursor-pointer hover:text-[#2dc44d]'>Kredi Kartı</li>
            <li className='cursor-pointer hover:text-[#2dc44d]'>Mevduat</li>
            <li className='cursor-pointer hover:text-[#2dc44d]'>Banka Müşterisi Ol</li>
            <li className='cursor-pointer hover:text-[#2dc44d]'>Konut</li>
            <li className='cursor-pointer hover:text-[#2dc44d]'>Taşıt</li>
            <li className='cursor-pointer hover:text-[#2dc44d]'>Kobi</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default index