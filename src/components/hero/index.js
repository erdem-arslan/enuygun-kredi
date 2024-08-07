import React, { useState } from 'react';
import { IoMdHome } from "react-icons/io";
import { IoArrowForward } from "react-icons/io5";

function Index({ onSearch }) {
    const [creditType, setCreditType] = useState('İhtiyaç Kredisi');
    const [amount, setAmount] = useState('');
    const [duration, setDuration] = useState('3 Ay');

    const formatter = new Intl.NumberFormat('tr-TR', {
        style: 'decimal',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });

    const formatAmount = (value) => {
        const numericValue = value.replace(/\D/g, '');
        return formatter.format(Number(numericValue));
    };

    const handleAmountChange = (e) => {
        const formattedAmount = formatAmount(e.target.value);
        setAmount(formattedAmount);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const numericAmount = parseFloat(amount.replace(/\D/g, ''));
        onSearch({ creditType, amount: numericAmount, duration });
    };

    return (
        <div className='w-full bg-gradient-to-r from-[#26336b24] from-0% via-[#2dc44d24] to-[#26336b24]'>
            <div className='w-full md:w-5/6 mx-auto py-10 px-4 md:px-0'>
                <div className='flex items-center'>
                    <IoMdHome className='text-xl text-black mr-px' />
                    <p className='text-xs'>&gt;  Finans  &gt;  Kredi  &gt; <span className='font-semibold'> İhtiyaç Kredisi</span></p>
                </div>
                <div className='mt-10'>
                    <p className='text-3xl font-semibold mb-6'>İhtiyaç Kredisi Hesaplama Aracı</p>

                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className='grid grid-rows-4 gap-y-6 md:grid-rows-1 md:grid-cols-4 py-8 px-4 grid-flow-col w-full bg-white'>
                                <div className='flex flex-col w-full border rounded-tl rounded-bl'>
                                    <label className='text-2xl font-semibold opacity-70 mb-2 ml-2 mt-1'>Kredi Tipi</label>
                                    <select 
                                        className='py-2 outline-none text-md font-light px-2' 
                                        value={creditType} 
                                        onChange={(e) => setCreditType(e.target.value)}
                                    >
                                        <option>İhtiyaç Kredisi</option>
                                        <option>Konut Kredisi</option>
                                        <option>Kobi & Esnaf Kredisi</option>
                                        <option>Taşıt Kredisi</option>
                                    </select>
                                </div>
                                <div className='flex flex-col w-full border-t border-b md:border-x-0 border-x'>
                                    <label className='text-2xl font-semibold opacity-70 mb-2 ml-2 mt-1 '>Kredi Tutarı</label>
                                    <div className='relative'>
                                        <input 
                                            type='text' 
                                            placeholder='500.000' 
                                            className='px-4 py-2 outline-none text-md font-light' 
                                            value={amount}
                                            onChange={handleAmountChange}
                                        />
                                        <p className='absolute top-2 right-4'>TL</p>
                                    </div>
                                </div>
                                <div className='flex flex-col w-full border rounded-tr rounded-br'>
                                    <label className='text-2xl font-semibold opacity-70 mb-2 ml-2 mt-1'>Vade Süresi</label>
                                    <select 
                                        className='py-2 outline-none text-md font-light px-2'
                                        value={duration}
                                        onChange={(e) => setDuration(e.target.value)}
                                    >
                                        <option>3 Ay</option>
                                        <option>6 Ay</option>
                                        <option>9 Ay</option>
                                        <option>12 Ay</option>
                                        <option>18 Ay</option>
                                        <option>24 Ay</option>
                                        <option>36 Ay</option>
                                    </select>
                                </div>
                                <div className='p-2 ml-2 flex items-center bg-[#2dc44d] rounded'>
                                    <button className='text-center mx-auto font-semibold text-lg text-white flex items-center'>En Uygun Krediyi Bul
                                        <IoArrowForward className='text-2xl ml-2 text-white' />
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
