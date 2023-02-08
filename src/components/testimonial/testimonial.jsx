import { useQuery } from '@tanstack/react-query';
import TestimonialCard from './testimonialCard';
import 'swiper/css';
import axios from 'axios';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination } from 'swiper';

// const testimoniers = [
//   {
//     id: 0,
//     name: 'John Doe',
//     pictureUrl:
//       'https://res.cloudinary.com/dqzqbgi8e/image/upload/v1674032871/naqos/testimoniers/photo7_wpiydh.png',
//     testimonial:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce egestas bibendum fringilla.',
//     kos: {
//       name: 'Nama kos',
//       address: 'Alamat kos',
//     },
//   },
//   {
//     id: 1,
//     name: 'John Doe',
//     pictureUrl:
//       'https://res.cloudinary.com/dqzqbgi8e/image/upload/v1674032869/naqos/testimoniers/photo1_pcgeob.png',
//     testimonial:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce egestas bibendum fringilla.',
//     kos: {
//       name: 'Nama kos',
//       address: 'Alamat kos',
//     },
//   },
//   {
//     id: 2,
//     name: 'John Doe',
//     pictureUrl:
//       'https://res.cloudinary.com/dqzqbgi8e/image/upload/v1674032868/naqos/testimoniers/photo6_aovuaf.png',
//     testimonial:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce egestas bibendum fringilla.',
//     kos: {
//       name: 'Nama kos',
//       address: 'Alamat kos',
//     },
//   },
//   {
//     id: 3,
//     name: 'John Doe',
//     pictureUrl:
//       'https://res.cloudinary.com/dqzqbgi8e/image/upload/v1674032867/naqos/testimoniers/photo3_ujk2u1.png',
//     testimonial:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce egestas bibendum fringilla.',
//     kos: {
//       name: 'Nama kos',
//       address: 'Alamat kos',
//     },
//   },
//   {
//     id: 4,
//     name: 'John Doe',
//     pictureUrl:
//       'https://res.cloudinary.com/dqzqbgi8e/image/upload/v1674032867/naqos/testimoniers/photo2_a40zw6.png',
//     testimonial:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce egestas bibendum fringilla.',
//     kos: {
//       name: 'Nama kos',
//       address: 'Alamat kos',
//     },
//   },
//   {
//     id: 5,
//     name: 'John Doe',
//     pictureUrl:
//       'https://res.cloudinary.com/dqzqbgi8e/image/upload/v1674032871/naqos/testimoniers/photo7_wpiydh.png',
//     testimonial:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce egestas bibendum fringilla.',
//     kos: {
//       name: 'Nama kos',
//       address: 'Alamat kos',
//     },
//   },
//   {
//     id: 6,
//     name: 'John Doe',
//     pictureUrl:
//       'https://res.cloudinary.com/dqzqbgi8e/image/upload/v1674032866/naqos/testimoniers/photo4_nkwjhc.png',
//     testimonial:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce egestas bibendum fringilla.',
//     kos: {
//       name: 'Nama kos',
//       address: 'Alamat kos',
//     },
//   },
//   {
//     id: 7,
//     name: 'John Doe',
//     pictureUrl:
//       'https://res.cloudinary.com/dqzqbgi8e/image/upload/v1674032871/naqos/testimoniers/photo7_wpiydh.png',
//     testimonial:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce egestas bibendum fringilla.',
//     kos: {
//       name: 'Nama kos',
//       address: 'Alamat kos',
//     },
//   },
// ];
const Testimonial = () => {
  const { isLoading, data } = useQuery({
    queryKey: ['testimoni'],
    queryFn: async () =>
      await axios.get(`https://be-naqos.up.railway.app/api/public/kost_review/bec580b2-fc3a-479c-a00b-c71afe6c171c`)
  });

  const kostDetail = useQuery({
    queryKey: ['kostDetail'],
    queryFn: async () =>
      await axios.get(`https://be-naqos.up.railway.app/api/public/kost?search=%5B%22bec580b2-fc3a-479c-a00b-c71afe6c171c%22%5D&fields=%5B%22id%22%5D`)
  });

  if (isLoading === false){
    const testimoniers = data?.data?.data
    const dataKos = kostDetail?.data?.data?.data
    

    const testimoniersOne = [];
    for (let i = 0; i < testimoniers.length; i++) {
      testimoniersOne.push(
        <TestimonialCard
          key={testimoniers[i].id}
          name={testimoniers[i].userId.fullname}
          testimonial={testimoniers[i].reviewText}
          pictureUrl={testimoniers[i].userId.imgUrl}
          kosAddress={dataKos[0].city.city}
          kosName={dataKos[0].name}
        />,
      );
    }

    const testimoniersTwo = [];
    for (let i = 0; i < testimoniers.length; i++) {
      testimoniersTwo.push(
        <TestimonialCard
        key={testimoniers[i].id}
        name={testimoniers[i].userId.fullname}
        testimonial={testimoniers[i].reviewText}
        pictureUrl={testimoniers[i].userId.imgUrl}
        kosAddress={dataKos[0].city.city}
        kosName={dataKos[0].name}
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
  
}

export default Testimonial;
