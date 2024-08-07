"use client"
import { useState } from 'react';
import { Header, Hero, Banner, Footer, Main } from '@/components';

export default function Home() {
  const [searchParams, setSearchParams] = useState(null);

  const handleSearch = (params) => {
    setSearchParams(params);
  };

  return (
    <div>
      <Header />
      <Hero onSearch={handleSearch} />
      <Banner />
      <Main searchParams={searchParams} />
      <Footer />
    </div>
  );
}
