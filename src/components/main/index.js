import React, { useState } from 'react';
import { OfferCard } from '@/components';
import banks from '@/mock/banks.js';
import Image from 'next/image';

function Index({ searchParams }) {
    const [offers, setOffers] = useState([]);

    const formatter = new Intl.NumberFormat('tr-TR', {
        style: 'decimal',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });

    const calculateOffers = () => {
        const { creditType, amount, duration } = searchParams;

        const offersList = banks.flatMap(bank => {
            const credit = bank.credits.find(c => c.credi_name === creditType);
            if (!credit) return [];

            const term = parseInt(duration.split(' ')[0]);
            const rate = credit.faiz.find(f => f.month === term);
            if (!rate) return [];

            const monthlyPayment = (amount * (rate.rate / 100)) / (1 - Math.pow(1 + rate.rate / 100, -term));
            const totalPayment = monthlyPayment * term;

            return {
                image: bank.bank_image,
                taksit: formatter.format(monthlyPayment),
                faiz: rate.rate.toFixed(2),
                toplam: formatter.format(totalPayment),
            };
        });

        setOffers(offersList);
    };

    React.useEffect(() => {
        if (searchParams) {
            calculateOffers();
        }
    }, [searchParams]);

    return (
        <div className='w-5/6 mx-auto mt-0'>
            <div className='text-4xl font-semibold'>
                {searchParams && (
                    <p>
                        {formatter.format(searchParams.amount)} TL {searchParams.duration} Vadeli {searchParams.creditType}
                    </p>
                )}
            </div>
            <div className='w-full flex my-10 md:flex-row flex-col'>
                <div className='w-full md:w-3/4 pr-0 md:pr-10'>
                    {offers.map((offer, index) => (
                        <OfferCard
                            key={index}
                            image={offer.image}
                            taksit={offer.taksit}
                            faiz={offer.faiz}
                            toplam={offer.toplam}
                        />
                    ))}
                </div>
                <div className='w-full md:w-1/4'>
                    <Image src='/google-ad.jpeg' className='w-full object-cover' width={400} height={400} alt='credit-card' />
                </div>
            </div>
        </div>
    );
}

export default Index;
