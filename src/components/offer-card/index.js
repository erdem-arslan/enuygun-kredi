
import Image from 'next/image'
import React from 'react'
import { RiArrowRightSLine } from 'react-icons/ri'


function index({image, taksit, faiz, toplam}) {
    const imageSrc = image ? image : '/bank-image.png'
    return (
        <div>
            <div className='w-full my-8'>
                <div className='grid grid-cols-1 grid-rows-5 md:grid-rows-1 md:grid-cols-5 text-center md:text-left items-center w-full border border-[#0287ff] px-4 py-6 shadow-secondary rounded'>
                    <div className='w-2/3 mx-auto my-auto '>
                        <Image src={imageSrc} width={400} height={400} alt='credit-card' />
                    </div>
                    <div className='md:my-0 my-2'>
                        <p className='text-xl md:text-base font-thin'>Aylık Taksit Tutarı</p>
                        <p className='text-xl md:text-base font-medium'>{taksit} TL</p>
                    </div>
                    <div className='md:my-0 my-2'>
                        <p className='text-xl md:text-base font-thin'>Faiz Oranı</p>
                        <p className='text-xl md:text-base font-medium'>%{faiz}</p>
                    </div>
                    <div className='md:my-0 my-2'>
                        <p className='text-xl md:text-base font-thin'>Toplam Ödeme</p>
                        <p className='text-xl md:text-base font-medium'>{toplam} TL</p>
                    </div>
                    <div>
                        <button className='bg-[#0287ff] w-full px-6 py-4 rounded text-white font-semibold'>
                            Bankada Gör
                            <RiArrowRightSLine className='inline text-xl' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index

