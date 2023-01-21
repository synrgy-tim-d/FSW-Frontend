import React from 'react';
import Card from './card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import Dropdown from '../../assets/Carousel6_dropdown.svg';
import './style.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const entries = [
  {
    id: 0,
    type: 'Putra',
    name: 'Kos Merkurius',
    rate: 4.5,
    pictureUrl:
      'https://res.cloudinary.com/duvswri22/image/upload/v1674287150/dillon-kydd-XGvwt544g8k-unsplash_1_muclim.jpg',
    details: 'Rincian alamat kos secara lengkap dan kode pos',
    location: 'Bekasi',
    price: 600000,
  },
  ,
  {
    id: 1,
    type: 'Putra',
    name: 'Kos Mawar',
    rate: 4.8,
    pictureUrl:
      'https://res.cloudinary.com/duvswri22/image/upload/v1674287148/trinity-nguyen-xQhqS7OWEqE-unsplash_teh0af.jpg',
    details: 'Rincian alamat kos secara lengkap dan kode pos',
    location: 'Bekasi',
    price: 600000,
  },
  {
    id: 2,
    type: 'Putra',
    name: 'Kos Melati',
    rate: 4.5,
    pictureUrl:
      'https://res.cloudinary.com/duvswri22/image/upload/v1674287148/julian-gentilezza-ctUWE7BUEzE-unsplash_mpwxrv.jpg',
    details: 'Rincian alamat kos secara lengkap dan kode pos',
    location: 'Bekasi',
    price: 600000,
  },
  {
    id: 3,
    type: 'Putra',
    name: 'Kos Melati',
    rate: 4.0,
    pictureUrl:
      'https://res.cloudinary.com/duvswri22/image/upload/v1674287145/vlad-yuhimchuk-1S1mk3uDDDA-unsplash_dwtils.jpg',
    details: 'Rincian alamat kos secara lengkap dan kode pos',
    location: 'Bekasi',
    price: 600000,
  },
  {
    id: 4,
    type: 'Putra',
    name: 'Kos Merkurius',
    rate: 4.5,
    pictureUrl:
      'https://res.cloudinary.com/duvswri22/image/upload/v1674287150/dillon-kydd-XGvwt544g8k-unsplash_1_muclim.jpg',
    details: 'Rincian alamat kos secara lengkap dan kode pos',
    location: 'Bekasi',
    price: 600000,
  },
  ,
  {
    id: 5,
    type: 'Putra',
    name: 'Kos Mawar',
    rate: 4.5,
    pictureUrl:
      'https://res.cloudinary.com/duvswri22/image/upload/v1674287148/trinity-nguyen-xQhqS7OWEqE-unsplash_teh0af.jpg',
    details: 'Rincian alamat kos secara lengkap dan kode pos',
    location: 'Bekasi',
    price: 600000,
  },
  {
    id: 6,
    type: 'Putra',
    name: 'Kos Melati',
    rate: 4.5,
    pictureUrl:
      'https://res.cloudinary.com/duvswri22/image/upload/v1674287148/julian-gentilezza-ctUWE7BUEzE-unsplash_mpwxrv.jpg',
    details: 'Rincian alamat kos secara lengkap dan kode pos',
    location: 'Bekasi',
    price: 600000,
  },
  {
    id: 7,
    type: 'Putra',
    name: 'Kos Melati',
    rate: 4.5,
    pictureUrl:
      'https://res.cloudinary.com/duvswri22/image/upload/v1674287145/vlad-yuhimchuk-1S1mk3uDDDA-unsplash_dwtils.jpg',
    details: 'Rincian alamat kos secara lengkap dan kode pos',
    location: 'Bekasi',
    price: 600000,
  },
];

const CarouselCheap = () => {
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
    document.getElementById('dropItem').classList.add('hidden');
  };
  return (
    <div className='space-y-12 my-20 font-montserrat'>
      <div className='relative'>
        <div className='flex space-x-3 items-center mb'>
          <h1 className='ml-4 lg:ml-0 text-2xl lg:text-4xl font-bold  text-start nb-'>
            Kos Bulanan Paling Murah di
          </h1>
          <div className='bg-[#FFBA2C] flex items-center px-5 py-2 lg:py-4 rounded-full space-x-2'>
            <div className='font-montserrat font-bold lg:text-xl' id='location'>
              Bekasi
            </div>
            <button id='drop' onClick={(event) => showDrop(event)}>
              <img src={Dropdown} />
            </button>
          </div>
          <div
            className='bg-white absolute z-40 left-[17rem] lg:left-[29rem] mt-[30rem] font-montserrat font-bold text-center drop-shadow-md hidden'
            id='dropItem'
          >
            <div
              className='px-28 py-3 hover:bg-[#FFDEAA] hover:cursor-pointer'
              onClick={(event) => changePlace(event, 'location')}
              id='jakarta'
            >
              Jakarta
            </div>
            <div
              className='px-28 py-3 hover:bg-[#FFDEAA] hover:cursor-pointer'
              onClick={(event) => changePlace(event, 'location')}
              id='bandung'
            >
              Bandung
            </div>
            <div
              className='px-28 py-3 hover:bg-[#FFDEAA] hover:cursor-pointer'
              onClick={(event) => changePlace(event, 'location')}
              id='surabaya'
            >
              Surabaya
            </div>
            <div
              className='px-28 py-3 hover:bg-[#FFDEAA] hover:cursor-pointer'
              onClick={(event) => changePlace(event, 'location')}
              id='bekasi'
            >
              Bekasi
            </div>
            <div
              className='px-28 py-3 hover:bg-[#FFDEAA] hover:cursor-pointer'
              onClick={(event) => changePlace(event, 'location')}
              id='tanggerang'
            >
              Tanggerang
            </div>
            <div
              className='px-28 py-3 hover:bg-[#FFDEAA] hover:cursor-pointer'
              onClick={(event) => changePlace(event, 'location')}
              id='depok'
            >
              Depok
            </div>
            <div
              className='px-28 py-3 hover:bg-[#FFDEAA] hover:cursor-pointer'
              onClick={(event) => changePlace(event, 'location')}
              id='semarang'
            >
              Semarang
            </div>
            <div
              className='px-28 py-3 hover:bg-[#FFDEAA] hover:cursor-pointer'
              onClick={(event) => changePlace(event, 'location')}
              id='bogor'
            >
              Bogor
            </div>
          </div>
        </div>
      </div>
      <Swiper
        breakpoints={{
          640: {
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
        {entries.map((entry) => {
          return (
            <SwiperSlide>
              <Card
                key={entry.id}
                name={entry.name}
                pictureUrl={entry.pictureUrl}
                type={entry.type}
                rate={entry.rate}
                details={entry.details}
                location={entry.location}
                price={entry.price}
              />
              ;
            </SwiperSlide>
          );
        })}
        ...
      </Swiper>
    </div>
  );
};

export default CarouselCheap;
