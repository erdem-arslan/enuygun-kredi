import Image from 'next/image';
import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";

function index() {
    return (
        <div className='w-full border-t border-black border-opacity-25'>
            <div className='w-5/6 mx-auto flex flex-col'>
                <div className='flex  flex-col md:flex-row justify-between py-6 items-center border-b border-gray-400 border-opacity-15'>
                    <p className='text-4xl md:mb-0 mb-4 font-black text-[#2dc44d]'>ENUYGUN</p>
                    <div className='flex items-center text-sm font-semibold'>
                        <p>
                            Bizi Takip Edin!
                        </p>
                        <div className='flex ml-2'>
                            <FaFacebook className='text-2xl mr-1' />
                            <FaInstagram className='text-2xl mr-1' />
                            <FaTwitter className='text-2xl mr-1' />
                            <FaYoutube className='text-2xl mr-1' />
                            <FaLinkedin className='text-2xl mr-1' />
                        </div>
                    </div>
                </div>
                <div className='my-10 flex flex-col md:flex-row items-center justify-between '>
                    <div className=''>
                        <Image src="/guven-damgasi.png" alt="logo" width={100} height={100} />
                    </div>
                    <div className='flex flex-col items-center md:items-end md:mt-0 mt-8'>
                        <p className='text-sm font-medium'>Enuygun Mobil Uygulamasını İndirin</p>
                        <div className='flex flex-col md:flex-row my-4 gap-y-4'>
                            <Image src="/app-store.png" className='mx-1' alt="appstore" width={100} height={100} />
                            <Image src="/play-store.png" className='mx-1' alt="googleplay" width={100} height={100} />
                            <Image src="/appgallery.png" className='mx-1' alt="googleplay" width={100} height={100} />
                        </div>
                        <div className='flex flex-row text-xs md:text-sm font-light text-center'>
                            <p>Kişisel Verilerin Korunması</p>
                            <p className='hidden md:block mx-4'>|</p>
                            <p>Kullanım Koşulları</p>
                            <p className='hidden md:block  mx-4'>|</p>
                            <p>Kurumsal Biletleme Koşulları</p>
                        </div>
                    </div>
                </div>
                <div className='text-center text-xs font-light my-4 opacity-60 mx-4 md:mx-32'>
                    <p className='mb-10 md:mb-2'>© 2008-2024 Tüm Hakları Saklıdır. Enuygun.com</p>
                    <p className=''>Bu sayfada sunulan verilerin doğruluğu ve güncelliği konusunda herhangi bir garanti verilmemekte olup, finansal enstrümanlara ait bilgilerin gerçek zamanlı olmayabileceği ve belirli bir gecikmeyle sunulduğu dikkate alınmalıdır.</p>
                </div>
            </div>
        </div>
    )
}

export default index