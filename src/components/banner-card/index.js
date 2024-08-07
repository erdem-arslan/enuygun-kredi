import Image from 'next/image'
import React from 'react'
import { IoIosArrowDown } from "react-icons/io";


function index({image}) {
    const imageSrc = image ? image : "/akbank-logo.png"
    return (
        <div className='w-full flex flex-col items-center bg-[#f5faff] py-2 px-6 rounded-xl border-2 border-[#0287ff]'>
            <div className='w-full text-left text-xs font-light text-[#0287ff] '>
                <p>Sponsor Banka</p>
            </div>
            <div className='w-2/3 mx-auto my-4'>
                <Image src={image} alt="akbank" width={400} height={400} />
            </div>
            <div className='w-full text-sm mb-4 flex justify-between'>
                <p className='font-light'>Yeni Müşterilere Özel</p>
                <p className='font-thin '>Detay &gt; </p>
            </div>
            <div>
                <div className='bg-white px-2 py-px border rounded border-black border-opacity-30'>
                    <label className='text-xs font-extralight'>
                        Kredi Tutarı
                    </label>
                    <div className='relative'>
                        <input type="text" className='bg-transparent text-lg pl-1' placeholder="Ara" disabled value={"10.000"} />
                        <p className='absolute right-0 top-0 text-lg'>TL</p>
                    </div>
                </div>
                <div className='bg-white px-2 py-px border rounded border-black border-opacity-30 mt-4'>
                    <label className='text-xs font-extralight'>
                        Vade
                    </label>
                    <div className='relative'>
                        <input type="text" className='bg-transparent text-lg pl-1' placeholder="Ara" disabled value={"12 Ay"} />
                        <IoIosArrowDown className='absolute right-0 top-0 text-lg'/>
                    </div>
                </div>
            </div>
            <div className='w-full my-4'>
                <div className='w-full flex justify-between text-xs py-2 bg-white'>
                    <p>Faiz Oranı</p>
                    <p className='font-medium'>%0,00</p>
                </div>
                <div className='w-full flex justify-between text-xs py-2'>
                    <p>Aylık Taksit</p>
                    <p className='font-medium'>1.667 TL</p>
                </div>
                <div className='w-full flex justify-between text-xs py-2 bg-white'>
                    <p>Toplam Ödeme</p>
                    <p className='font-medium'>10.000 TL</p>
                </div>
            </div>
            <div className='w-full bg-[#0287ff] text-center py-4 text-white font-semibold mb-4 rounded'>
                <button>Bankada Gör</button>
            </div>
        </div>
    )
}

export default index