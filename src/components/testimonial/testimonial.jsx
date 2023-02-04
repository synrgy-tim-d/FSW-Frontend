import React from 'react';
import TestimonialCard from './testimonialCard';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
const testimoniers = [
  {
    id: 0,
    name: 'John Doe',
    pictureUrl:
      'https://res.cloudinary.com/dqzqbgi8e/image/upload/v1674032871/naqos/testimoniers/photo7_wpiydh.png',
    testimonial:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce egestas bibendum fringilla.',
    kos: {
      name: 'Nama kos',
      address: 'Alamat kos',
    },
  },
  {
    id: 1,
    name: 'John Doe',
    pictureUrl:
      'https://res.cloudinary.com/dqzqbgi8e/image/upload/v1674032869/naqos/testimoniers/photo1_pcgeob.png',
    testimonial:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce egestas bibendum fringilla.',
    kos: {
      name: 'Nama kos',
      address: 'Alamat kos',
    },
  },
  {
    id: 2,
    name: 'John Doe',
    pictureUrl:
      'https://res.cloudinary.com/dqzqbgi8e/image/upload/v1674032868/naqos/testimoniers/photo6_aovuaf.png',
    testimonial:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce egestas bibendum fringilla.',
    kos: {
      name: 'Nama kos',
      address: 'Alamat kos',
    },
  },
  {
    id: 3,
    name: 'John Doe',
    pictureUrl:
      'https://res.cloudinary.com/dqzqbgi8e/image/upload/v1674032867/naqos/testimoniers/photo3_ujk2u1.png',
    testimonial:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce egestas bibendum fringilla.',
    kos: {
      name: 'Nama kos',
      address: 'Alamat kos',
    },
  },
  {
    id: 4,
    name: 'John Doe',
    pictureUrl:
      'https://res.cloudinary.com/dqzqbgi8e/image/upload/v1674032867/naqos/testimoniers/photo2_a40zw6.png',
    testimonial:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce egestas bibendum fringilla.',
    kos: {
      name: 'Nama kos',
      address: 'Alamat kos',
    },
  },
  {
    id: 5,
    name: 'John Doe',
    pictureUrl:
      'https://res.cloudinary.com/dqzqbgi8e/image/upload/v1674032871/naqos/testimoniers/photo7_wpiydh.png',
    testimonial:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce egestas bibendum fringilla.',
    kos: {
      name: 'Nama kos',
      address: 'Alamat kos',
    },
  },
  {
    id: 6,
    name: 'John Doe',
    pictureUrl:
      'https://res.cloudinary.com/dqzqbgi8e/image/upload/v1674032866/naqos/testimoniers/photo4_nkwjhc.png',
    testimonial:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce egestas bibendum fringilla.',
    kos: {
      name: 'Nama kos',
      address: 'Alamat kos',
    },
  },
  {
    id: 7,
    name: 'John Doe',
    pictureUrl:
      'https://res.cloudinary.com/dqzqbgi8e/image/upload/v1674032871/naqos/testimoniers/photo7_wpiydh.png',
    testimonial:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce egestas bibendum fringilla.',
    kos: {
      name: 'Nama kos',
      address: 'Alamat kos',
    },
  },
];
function Testimonial() {
  let testimoniersOne = [];
  for (let i = 0; i < 3; i++) {
    testimoniersOne.push(
      <TestimonialCard
        key={testimoniers[i].id}
        name={testimoniers[i].name}
        testimonial={testimoniers[i].testimonial}
        pictureUrl={testimoniers[i].pictureUrl}
        kosAddress={testimoniers[i].kos.address}
        kosName={testimoniers[i].kos.name}
      />,
    );
  }
  let testimoniersTwo = [];
  for (let i = 0; i < 4; i++) {
    testimoniersTwo.push(
      <TestimonialCard
        key={testimoniers[i].id}
        name={testimoniers[i].name}
        testimonial={testimoniers[i].testimonial}
        pictureUrl={testimoniers[i].pictureUrl}
        kosAddress={testimoniers[i].kos.address}
        kosName={testimoniers[i].kos.name}
      />,
    );
  }

  return (
    <div className='w-full lg:flex flex-wrap justify-center gap-5 overflow-hidden hidden bg-[#0A008A] py-6'>
      <div className='w-[120%] flex gap-6'>{testimoniersOne}</div>
      <div className='w-[180%] flex gap-6'>{testimoniersTwo}</div>
    </div>
  );
}

export default Testimonial;
