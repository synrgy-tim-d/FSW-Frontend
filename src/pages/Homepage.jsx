import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
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

  const [search, setSearch] = useState(searchParams.get('city'));

  const navigate = useNavigate();

  const searchKost = useQuery({
    queryKey: ['searchKost'],
    queryFn: async () =>
      await axios.get(`https://be-naqos.up.railway.app/api/public/kost?start=0&limit=10&page=1&search=%5B%22${searchParams.get('city')}%22%5D&fields=%5B%22city.city%22%5D&filters=%5B%7B%22field%22%3A%22isAvailable%22%2C%22value%22%3A%22%22%2C%22op%22%3A%22in%22%2C%22valueIn%22%3A%5B%22true%22%5D%7D%5D`),
    enabled: false,
  });

  useEffect(() => {
    searchKost.refetch();
  }, [searchParams.get('city')]);

  const handleClick = () => {
    searchKost.refetch();
    if (search === '' || search === ' ') { 
      navigate(`/homepage`);
    } else {
      navigate(`/homepage?city=${search.replace(/\s/g, '%20')}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      searchKost.refetch();
      if (search === '' || search === ' ') { 
        navigate(`/homepage`);
      } else {
        navigate(`/homepage?city=${search.replace(/\s/g, '%20')}`);
      }
    }
  };

  // if (!searchKost.isLoading) {
  //   // for (let i = 0; i<searchKost?.data?.data?.data?.length; i++) {
  //   // }
  // }

  

  if (!searchKost.isLoading) {
    // const kostId = [].concat(searchKost?.data?.data?.data.map(id => id.id))
    // console.log(kostId)
    return (
      <React.Fragment>
        {localStorage.getItem('AUTH_TOKEN') === null ? <Navbarsign /> : <Navbar />}
        <div className='w-full font-[Montserrat] font-[400] text-[#000000] text-[16px] bg-[#FAFAFA] p-8'>
          <div
            className='sticky top-12 z-[1] grid grid-cols-6 lg:grid-cols-1 grid-flow-row gap-4
          lg:relative lg:top-auto lg:z-0 lg:flex lg:space-x-4 px-4'
          >
            <div className='col-span-5 lg:col-span-1 flex space-x-4 w-full border-2 bg-white rounded-[4px] lg:py-3'>
              <img className='ml-4 pointer-events-none sm:py-2' src={magnifier} />
              <input
                className='w-full text-black text-[9px] md:text-[16px] lg:text-[20px] focus:outline-none'
                type='search'
                name='search'
                placeholder='Masukkan nama kota yang diinginkan'
                value={search}
                onChange={(e) => {setSearch(e.target.value)}}
                onKeyDown={handleKeyDown}
              />
            </div>
            <button
              className='col-span-1 lg:col-span-1 lg:px-10 rounded-[4px] w-full lg:w-auto text-[10px] sm:text-[16px]
                  bg-[#0A008A] text-white hover:bg-[#A0A3FF] hover:text-[#FFFFFF] active:bg-black font-[600]'
              type='submit'
              onClick={handleClick}
            >
              Cari
            </button>
            <div className='col-span-1 col-start-6 flex justify-end lg:hidden'>
              <button
                type='button'
                className='py-1 sm:py-2 text-[10px] sm:text-[16px] rounded-[4px] w-full
                bg-[#0A008A] text-white hover:bg-[#A0A3FF] hover:text-[#FFFFFF] active:bg-black font-[600]'
                onClick={() => setIsOpen(!isOpen)}
              >
                Filter
              </button>
              {isOpen && (
                <div className='absolute top-20 sm:top-28'>
                  <Facilities />
                </div>
              )}
            </div>
          </div>
          <div className='breadcrumb py-2 md:py-4 lg:py-8'>
            <ul>
              <li>
                <Link
                  to='/'
                  className='text-[16px] sm:text-[20px] font-[600] hover:underline hover:text-[#0A008A]'
                >
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
              <Kostdata fetchData={searchKost?.data?.data?.data} />
            </div>
            <div className='row-start-1 lg:col-span-1 grid grid-cols-1 lg:grid-cols-1 justify-items-stretch'>
              <form action='|'>
                <div className='sticky top-36 hidden lg:block'>
                  <Facilities />
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
    
  }

};

export default Homepage;
