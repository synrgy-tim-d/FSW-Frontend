// import React from 'react';
import { useState, useEffect } from 'react';
import Card from './card';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { useQuery } from '@tanstack/react-query';

import Dropdown from '../../assets/Carousel6_dropdown.svg';

import './style.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CarouselCheap = () => {
  const [place, setPlace] = useState('Bekasi');
  const [isClosed, setIsClosed] = useState(true);

  const changePlace = (event) => {
    setPlace(event.target.id);
    toggle();
  };

  const toggle = () => setIsClosed(!isClosed);

  const kosResponse = useQuery({
    queryKey: ['kos_murah'],
    queryFn: async () =>
      await axios.get(
        `https://be-naqos.up.railway.app/api/public/kost?start=0&limit=10&page=1&search=%5B%22${place}%22%5D&fields=%5B%22city.city%22%5D&filters=%5B%7B%22field%22%3A%22isAvailable%22%2C%22value%22%3A%22%22%2C%22op%22%3A%22in%22%2C%22valueIn%22%3A%5B%22true%22%5D%7D%5D`
      ),
  });

  useEffect(() => {
    kosResponse.refetch();
  }, [place]);

  return (
    <div className='space-y-12 p-4 py-12 font-montserrat bg-[#FAFAFA]'>
      <div className='relative'>
        <div className='flex space-x-3 items-center mb'>
          <h1 className='ml-2 lg:ml-0 text-lg lg:text-4xl font-bold  text-start '>
            Kos Bulanan Paling Murah di
          </h1>
          <div className='bg-[#FFBA2C] flex items-center px-1 lg:px-5 py-2 lg:py-4 rounded-full space-x-2'>
            <div className='font-montserrat font-bold text-xs lg:text-xl' id='location'>
              {place}
            </div>
            <button id='drop' onClick={toggle}>
              <img src={Dropdown} />
            </button>
          </div>
          <div
            className={
              isClosed
                ? 'bg-white absolute z-40 left-[8rem] lg:left-[29rem] mt-[23rem] lg:mt-[30rem] font-montserrat font-bold text-center drop-shadow-md text-sm hidden'
                : 'bg-white absolute z-40 left-[8rem] lg:left-[29rem] mt-[23rem] lg:mt-[30rem] font-montserrat font-bold text-center drop-shadow-md text-sm'
            }
            id='dropItem'
          >
            <div
              className='px-20 lg:px-28 py-2 lg:py-3 hover:bg-[#FFDEAA] hover:cursor-pointer'
              onClick={(event) => changePlace(event, 'location')}
              id='Jakarta'
            >
              Jakarta
            </div>
            <div
              className='px-20 lg:px-28 py-2 lg:py-3 hover:bg-[#FFDEAA] hover:cursor-pointer'
              onClick={(event) => changePlace(event, 'location')}
              id='Bandung'
            >
              Bandung
            </div>
            <div
              className='px-20 lg:px-28 py-2 lg:py-3 hover:bg-[#FFDEAA] hover:cursor-pointer'
              onClick={(event) => changePlace(event, 'location')}
              id='Surabaya'
            >
              Surabaya
            </div>
            <div
              className='px-20 lg:px-28 py-2 lg:py-3 hover:bg-[#FFDEAA] hover:cursor-pointer'
              onClick={(event) => changePlace(event, 'location')}
              id='Bekasi'
            >
              Bekasi
            </div>
            <div
              className='px-20 lg:px-28 py-2 lg:py-3 hover:bg-[#FFDEAA] hover:cursor-pointer'
              onClick={(event) => changePlace(event, 'location')}
              id='Tangerang'
            >
              Tangerang
            </div>
            <div
              className='px-20 lg:px-28 py-2 lg:py-3 hover:bg-[#FFDEAA] hover:cursor-pointer'
              onClick={(event) => changePlace(event, 'location')}
              id='Depok'
            >
              Depok
            </div>
            <div
              className='px-20 lg:px-28 py-2 lg:py-3 hover:bg-[#FFDEAA] hover:cursor-pointer'
              onClick={(event) => changePlace(event, 'location')}
              id='Semarang'
            >
              Semarang
            </div>
            <div
              className='px-20 lg:px-28 py-2 lg:py-3 hover:bg-[#FFDEAA] hover:cursor-pointer'
              onClick={(event) => changePlace(event, 'location')}
              id='Bogor'
            >
              Bogor
            </div>
          </div>
        </div>
      </div>
      <Swiper
        breakpoints={{
          400: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
      >
        {kosResponse?.data?.data.data.map((entry) => {
          return (
            <SwiperSlide key={entry.id}>
              <Link to={`/kos/${entry.id}/${entry.rooms[0]?.id}`}>
                <Card
                  name={entry?.name}
                  pictureUrl={entry?.imageKosts[0]?.url}
                  type={entry?.kostType?.slice(4)}
                  rate={0}
                  details={`${entry?.address}, ${entry?.subdistrict}, ${entry?.district}, ${entry?.city?.city}, ${entry?.city?.province?.province} (${entry?.postalCode})`}
                  location={entry?.city?.city}
                  price={entry?.pricePerMonthly}
                />
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CarouselCheap;
