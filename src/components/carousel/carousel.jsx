import React from 'react';
import Card from './card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import './style.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Carousel = () => {
  return (
    <div className='space-y-4 my-20'>
      <div className='flex space-x-3'>
        <h1 className='text-3xl font-bold font-montserrat text-start '>
          Rekomendasi Kos Bulanan di
        </h1>
        <div className='bg-[#FFBA2C] flex items-center px-5 rounded-2xl'>
          <div className='font-montserrat font-semibold'>Bekasi</div>
        </div>
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default Carousel;
