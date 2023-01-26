// import React from 'react';
import Card from './card';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { useQuery } from '@tanstack/react-query';

import Dropdown from '../../assets/Carousel6_dropdown.svg';

import './style.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// const entries = [
//   {
//     id: 0,
//     type: 'Putra',
//     name: 'Kos Merkurius',
//     rate: 4.5,
//     pictureUrl:
//       'https://res.cloudinary.com/duvswri22/image/upload/v1674287150/dillon-kydd-XGvwt544g8k-unsplash_1_muclim.jpg',
//     details: 'Rincian alamat kos secara lengkap dan kode pos',
//     location: 'Bekasi',
//     price: 600000,
//   },
//   {
//     id: 1,
//     type: 'Putra',
//     name: 'Kos Mawar',
//     rate: 4.8,
//     pictureUrl:
//       'https://res.cloudinary.com/duvswri22/image/upload/v1674287148/trinity-nguyen-xQhqS7OWEqE-unsplash_teh0af.jpg',
//     details: 'Rincian alamat kos secara lengkap dan kode pos',
//     location: 'Bekasi',
//     price: 600000,
//   },
//   {
//     id: 2,
//     type: 'Putra',
//     name: 'Kos Melati',
//     rate: 4.5,
//     pictureUrl:
//       'https://res.cloudinary.com/duvswri22/image/upload/v1674287148/julian-gentilezza-ctUWE7BUEzE-unsplash_mpwxrv.jpg',
//     details: 'Rincian alamat kos secara lengkap dan kode pos',
//     location: 'Bekasi',
//     price: 600000,
//   },
//   {
//     id: 3,
//     type: 'Putra',
//     name: 'Kos Melati',
//     rate: 4.0,
//     pictureUrl:
//       'https://res.cloudinary.com/duvswri22/image/upload/v1674287145/vlad-yuhimchuk-1S1mk3uDDDA-unsplash_dwtils.jpg',
//     details: 'Rincian alamat kos secara lengkap dan kode pos',
//     location: 'Bekasi',
//     price: 600000,
//   },
//   {
//     id: 4,
//     type: 'Putra',
//     name: 'Kos Merkurius',
//     rate: 4.5,
//     pictureUrl:
//       'https://res.cloudinary.com/duvswri22/image/upload/v1674287150/dillon-kydd-XGvwt544g8k-unsplash_1_muclim.jpg',
//     details: 'Rincian alamat kos secara lengkap dan kode pos',
//     location: 'Bekasi',
//     price: 600000,
//   },
//   {
//     id: 5,
//     type: 'Putra',
//     name: 'Kos Mawar',
//     rate: 4.5,
//     pictureUrl:
//       'https://res.cloudinary.com/duvswri22/image/upload/v1674287148/trinity-nguyen-xQhqS7OWEqE-unsplash_teh0af.jpg',
//     details: 'Rincian alamat kos secara lengkap dan kode pos',
//     location: 'Bekasi',
//     price: 600000,
//   },
//   {
//     id: 6,
//     type: 'Putra',
//     name: 'Kos Melati',
//     rate: 4.5,
//     pictureUrl:
//       'https://res.cloudinary.com/duvswri22/image/upload/v1674287148/julian-gentilezza-ctUWE7BUEzE-unsplash_mpwxrv.jpg',
//     details: 'Rincian alamat kos secara lengkap dan kode pos',
//     location: 'Bekasi',
//     price: 600000,
//   },
//   {
//     id: 7,
//     type: 'Putra',
//     name: 'Kos Melati',
//     rate: 4.5,
//     pictureUrl:
//       'https://res.cloudinary.com/duvswri22/image/upload/v1674287145/vlad-yuhimchuk-1S1mk3uDDDA-unsplash_dwtils.jpg',
//     details: 'Rincian alamat kos secara lengkap dan kode pos',
//     location: 'Bekasi',
//     price: 600000,
//   },
// ];

const CarouselCheap = () => {
  const kosResponse = useQuery({
    queryKey: ['kosMurah'],
    queryFn: () => axios.get("https://be-naqos.up.railway.app/api/kost")
  });

  const dataKos = kosResponse?.data?.data?.data;

  console.log(dataKos);

  const showDrop = (event) => {
    event.preventDefault();
    const tag = event.currentTarget.id + 'Item';
    console.log(event.currentTarget.id);
    const tagged = document.getElementById(tag);
    tagged.classList.contains('hidden')
      ? tagged.classList.remove('hidden')
      : tagged.classList.add('hidden');
  };
  const changePlace = (event, target) => {
    event.preventDefault();
    const tag = event.currentTarget.id;
    const tagged = document.getElementById(tag);
    const taggedText = tagged.innerText;
    const targeted = document.getElementById(target);
    targeted.innerText = taggedText;
    document.getElementById('dropCheapItem').classList.add('hidden');
  };

  return (
    <div className='space-y-12 mb-10 mt-20 font-montserrat'>
      <div className='relative'>
        <div className='flex space-x-3 items-center mb'>
          <h1 className='ml-2 lg:ml-0 text-lg lg:text-4xl font-bold  text-start '>Kos Murah di</h1>
          <div className='bg-[#FFBA2C] flex items-center px-1 lg:px-5 py-2 lg:py-4 rounded-full space-x-2'>
            <div className='font-montserrat font-bold text-xs lg:text-xl' id='locationCheap'>
              Bekasi
            </div>
            <button id='dropCheap' onClick={(event) => showDrop(event)}>
              <img src={Dropdown} />
            </button>
          </div>
          <div
            className='bg-white absolute z-40 left-[8rem] lg:left-[15rem] mt-[23rem] lg:mt-[30rem] font-montserrat font-bold text-center drop-shadow-md text-sm hidden'
            id='dropCheapItem'
          >
            <div
              className='px-20 lg:px-28 py-2 lg:py-3 hover:bg-[#FFDEAA] hover:cursor-pointer'
              onClick={(event) => changePlace(event, 'locationCheap')}
              id='jakarta'
            >
              Jakarta
            </div>
            <div
              className='px-20 lg:px-28 py-2 lg:py-3 hover:bg-[#FFDEAA] hover:cursor-pointer'
              onClick={(event) => changePlace(event, 'locationCheap')}
              id='bandung'
            >
              Bandung
            </div>
            <div
              className='px-20 lg:px-28 py-2 lg:py-3 hover:bg-[#FFDEAA] hover:cursor-pointer'
              onClick={(event) => changePlace(event, 'locationCheap')}
              id='surabaya'
            >
              Surabaya
            </div>
            <div
              className='px-20 lg:px-28 py-2 lg:py-3 hover:bg-[#FFDEAA] hover:cursor-pointer'
              onClick={(event) => changePlace(event, 'locationCheap')}
              id='bekasi'
            >
              Bekasi
            </div>
            <div
              className='px-20 lg:px-28 py-2 lg:py-3 hover:bg-[#FFDEAA] hover:cursor-pointer'
              onClick={(event) => changePlace(event, 'locationCheap')}
              id='tanggerang'
            >
              Tanggerang
            </div>
            <div
              className='px-20 lg:px-28 py-2 lg:py-3 hover:bg-[#FFDEAA] hover:cursor-pointer'
              onClick={(event) => changePlace(event, 'locationCheap')}
              id='depok'
            >
              Depok
            </div>
            <div
              className='px-20 lg:px-28 py-2 lg:py-3 hover:bg-[#FFDEAA] hover:cursor-pointer'
              onClick={(event) => changePlace(event, 'locationCheap')}
              id='semarang'
            >
              Semarang
            </div>
            <div
              className='px-20 lg:px-28 py-2 lg:py-3 hover:bg-[#FFDEAA] hover:cursor-pointer'
              onClick={(event) => changePlace(event, 'locationCheap')}
              id='bogor'
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
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {dataKos?.map((entry) => {
          return (
            <SwiperSlide key={entry.id}>
              <Card
                name={entry.name}
                pictureUrl={
                  'https://res.cloudinary.com/duvswri22/image/upload/v1674287150/dillon-kydd-XGvwt544g8k-unsplash_1_muclim.jpg'
                }
                type={entry.kostType}
                rate={0}
                details={entry.address}
                location={entry.city.city}
                price={10}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  );
};

export default CarouselCheap;
