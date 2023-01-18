import React from 'react'
import TestimonialCard from './testimonialCard'
import "swiper/css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
const testimoniers = [{
  id:0,
  name:"John Doe",
  pictureUrl:"https://res.cloudinary.com/dqzqbgi8e/image/upload/v1674032871/naqos/testimoniers/photo7_wpiydh.png",
  testimonial:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce egestas bibendum fringilla.",
  kos:{
    name:"Nama kos",
    address:"Alamat kos"
  }
},{
  id:1,
  name:"John Doe",
  pictureUrl:"https://res.cloudinary.com/dqzqbgi8e/image/upload/v1674032869/naqos/testimoniers/photo1_pcgeob.png",
  testimonial:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce egestas bibendum fringilla.",
  kos:{
    name:"Nama kos",
    address:"Alamat kos"
  }
},{
  id:2,
  name:"John Doe",
  pictureUrl:"https://res.cloudinary.com/dqzqbgi8e/image/upload/v1674032868/naqos/testimoniers/photo6_aovuaf.png",
  testimonial:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce egestas bibendum fringilla.",
  kos:{
    name:"Nama kos",
    address:"Alamat kos"
  }
},{
  id:3,
  name:"John Doe",
  pictureUrl:"https://res.cloudinary.com/dqzqbgi8e/image/upload/v1674032867/naqos/testimoniers/photo3_ujk2u1.png",
  testimonial:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce egestas bibendum fringilla.",
  kos:{
    name:"Nama kos",
    address:"Alamat kos"
  }
},{
  id:4,
  name:"John Doe",
  pictureUrl:"https://res.cloudinary.com/dqzqbgi8e/image/upload/v1674032867/naqos/testimoniers/photo2_a40zw6.png",
  testimonial:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce egestas bibendum fringilla.",
  kos:{
    name:"Nama kos",
    address:"Alamat kos"
  }
},{
  id:5,
  name:"John Doe",
  pictureUrl:"https://res.cloudinary.com/dqzqbgi8e/image/upload/v1674032871/naqos/testimoniers/photo7_wpiydh.png",
  testimonial:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce egestas bibendum fringilla.",
  kos:{
    name:"Nama kos",
    address:"Alamat kos"
  }
},{
  id:6,
  name:"John Doe",
  pictureUrl:"https://res.cloudinary.com/dqzqbgi8e/image/upload/v1674032866/naqos/testimoniers/photo4_nkwjhc.png",
  testimonial:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce egestas bibendum fringilla.",
  kos:{
    name:"Nama kos",
    address:"Alamat kos"
  }
},{
  id:7,
  name:"John Doe",
  pictureUrl:"https://res.cloudinary.com/dqzqbgi8e/image/upload/v1674032871/naqos/testimoniers/photo7_wpiydh.png",
  testimonial:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce egestas bibendum fringilla.",
  kos:{
    name:"Nama kos",
    address:"Alamat kos"
  }
}]
function Testimonial() {
  const testimonialsComponents = testimoniers.map((e,i) => {
    return (<SwiperSlide><TestimonialCard name={e.name} testimonial={e.testimonial} pictureUrl={e.pictureUrl} kosAddress={e.kos.address} kosName={e.kos.name} /></SwiperSlide>)
  })

  return (
    
    // <div className='w-full flex flex-wrap gap-5 py-3'>
    //     <div className='flex gap-6'>
    //       {(() => {
    //         let testimonials = [];
    //         for (let i = 0; i < testinomialsCount; i++) {
    //           testimonials.push(
    //             <TestimonialCard move={"move-right"}/>) 
    //         }
    //         return testimonials
    //       })()}
    //     </div>
    //     <div className='flex gap-6'>
    //       {(() => {
    //         let testimonials = [];
    //         for (let i = 0; i < testinomialsCount; i++) {
    //           testimonials.push(
    //             <TestimonialCard move={"move-left"}/>) 
    //         }
    //         return testimonials
    //       })()}
    //     </div>
    // </div>.
  //   <div className='flex flex-wrap gap-5'>
  //   <div className='overflow-hidden w-full relative gap-5 '>
  //   <Swiper
  //   // className='flex flex-wrap justify-center'
  //   className='w-[122%] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center'
  //   modules={[Autoplay,Pagination]}
  //   spaceBetween={1}
  //   slidesPerView={3}
  //   centeredSlides={true}
  //   centerInsufficientSlides={true}
  //   centeredSlidesBounds={true}
  //   loop={true}
  //   autoplay={
  //     {delay:800,
  //     disableOnInteraction:false,
  //     pauseOnMouseEnter:false
  //   }
  //   }
    
  // >
  //   {testimonialsComponents}
  // </Swiper></div>
  //   <div className='overflow-hidden relative gap-5'>
  //   <Swiper
  //   // className='flex flex-wrap justify-center'
  //   className='w-[172%] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center'
  //   modules={[Autoplay,Pagination]}
  //   spaceBetween={1}
  //   slidesPerView={4}
  //   centeredSlides={true}
  //   centerInsufficientSlides={true}
  //   centeredSlidesBounds={true}
  //   loop={true}
  //   autoplay={
  //     {delay:800,
  //     disableOnInteraction:false,
  //     pauseOnMouseEnter:false
  //   }
  //   }
    
  // >
  //   {testimonialsComponents}
  // </Swiper></div></div>
  <div className='w-full lg:flex flex-wrap justify-center gap-5 overflow-visible hidden'>
    <div className='w-[150%]'>
      <Swiper 
        allowTouchMove={false}
        modules={[Autoplay]}
        slidesPerView={4}
        spaceBetween={170}
        speed={2000}
        autoplay={
          {
            delay:100
          }
        }
        loop={true}
      >
        {testimonialsComponents}
      </Swiper>
    </div>
    <div className='w-[190%]'>
      <Swiper 
        allowTouchMove={false}
        modules={[Autoplay]}
        slidesPerView={5}
        spaceBetween={170}
        speed={2000}
        autoplay={
          {
            delay:100,
            reverseDirection:true
          }
        }
        loop={true}
        
      >
        {testimonialsComponents}
      </Swiper>
    </div>
  </div>
  )
}

export default Testimonial
