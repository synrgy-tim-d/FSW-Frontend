import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Navbar from '../components/navbar/navbar';
import Navbarsign from '../components/navbar/navbarnologin';
import Footer from '../components/footer/footer';
import Kostdata from '../components/homepage/homepage-constants/Homepage-kost-data';
import Facilities from '../components/homepage/homepage-constants/Facilities';
import magnifier from '../assets/Banner2_Magnifier.png';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const Homepage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [searchParams] = useSearchParams();
  // setSearchParams('city');

  const searchKost = useQuery({
    queryKey: ['searchKost'],
    queryFn: async () =>
      await axios.get(
        `https://be-naqos.up.railway.app/api/public/by-city-2/${searchParams.get(
          'city',
        )}?page=1&size=10&orderBy=id&orderType=desc`,
      ),
    enabled: false,
  });

  useEffect(() => {
    searchKost.refetch();
  }, [searchParams.get('city')]);

  const handleClick = () => {
    searchKost.refetch();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      searchKost.refetch();
    }
  };

  // usesearchparams to get query params from url
  // useEffect(() => {
  //   console.log(searchParams.get('city'));
  // }, [searchParams]);

  return (
    <React.Fragment>
      {localStorage.getItem('AUTH_TOKEN') === null ? <Navbarsign /> : <Navbar />}
      <div className='w-full font-[Montserrat] font-[400] text-[#000000] text-[16px] bg-[#FAFAFA] p-8'>
        <div
          className='sticky top-0 z-[1] grid grid-cols-6 lg:grid-cols-1 grid-flow-row gap-4
        lg:relative lg:top-auto lg:z-0 lg:flex lg:space-x-4 px-4'
        >
          <div className='col-span-5 lg:col-span-1 flex space-x-4 w-full border-2 bg-white rounded-[4px] lg:py-3'>
            <img className='ml-4 pointer-events-none' src={magnifier} />
            <input
              className='w-full text-black text-[9px] md:text-[16px] lg:text-[20px] focus:outline-none'
              type='search'
              name='search'
              placeholder='Masukkan nama kota yang diinginkan'
              onChange={(e) => {
                searchParams.set('city', e.target.value.replace(/\s/g, '%20'));
              }}
              onKeyDown={handleKeyDown}
            />
          </div>
          <div className='col-span-1 block lg:hidden'>
            <button
              type='button'
              className='px-3 py-2 bg-green-500'
              onClick={() => setIsOpen(!isOpen)}
            >
              Filter
            </button>
            {isOpen && (
              <div className='absolute'>
                <Facilities />
              </div>
            )}
          </div>
          <button
            className='col-span-6 lg:col-span-1 px-10 rounded-[4px] w-full lg:w-auto
              bg-[#0A008A] text-white hover:bg-[#A0A3FF] hover:text-[#FFFFFF] active:bg-black font-[600]'
            type='submit'
            // onClick=''
            onClick={handleClick}
          >
            Cari
          </button>
        </div>
        <div className='breadcrumb py-2 md:py-4 lg:py-8'>
          <ul>
            <li>
              <Link to='/' className='text-[16px] sm:text-[20px] font-[600] hover:underline hover:text-[#0A008A]'>
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/homepage'
                className='text-[16px] sm:text-[20px] font-[600] hover:underline hover:text-[#0A008A]'
              >
                Cari Kos
              </Link>
            </li>
          </ul>
        </div>

        <div className='sticky top-0 grid lg:grid-cols-4 grid-flow-row lg:grid-flow-col gap-4'>
          <div className='row-start-2 lg:row-start-1 lg:col-span-3 grid grid-cols-auto auto-rows-max gap-8'>
            <Kostdata />
          </div>
          <div className='row-start-1 lg:col-span-1 grid grid-cols-1 lg:grid-cols-1 justify-items-stretch'>
            <form action='|'>
              <div className='sticky top-8 hidden lg:block'>
                <Facilities />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Homepage;
