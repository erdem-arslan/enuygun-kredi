import React from 'react'
import { BannerCard } from '@/components'
import { MdInfoOutline } from "react-icons/md";


function index() {
  return (
    <div className='w-5/6 mx-auto my-20 '>
      <div className=' mb-16 text-3xl font-medium cursor-pointer '>
        <p>
          Enuygun&apos;a Özel Kredi Oranları
          <MdInfoOutline className='inline ml-2'/>
        </p>
      </div>
      <div className='grid grid-rows-4 gap-y-10 lg:grid-rows-1 lg:grid-cols-4 gap-x-12'>
        <BannerCard image={"/akbank-logo.png"} />
        <BannerCard image={"/vakifbank.png"} />
        <BannerCard image={"/yapikredi-logo.png"} />
        <BannerCard image={"/garanti-logo.png"} />
      </div>
    </div>
  )
}

export default index