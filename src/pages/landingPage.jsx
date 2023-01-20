import React from 'react';
import Banner from '../components/banner/banner';
import Carousel from '../components/carousel/carousel';
import Cta from '../components/cta/cta';
import Footer from '../components/footer/footer';
// import Navbar from '../components/navbar/navbar';
import Whyus from '../components/whyus/whyus';
import Popular from '../components/popular/popular';
import Testimonial from '../components/testimonial/testimonial';

function LandingPage() {
  return (
    <>
    <div className='w-full mx-auto'>
      {/* <Navbar /> */}
      <Banner />
      <Whyus />
      <Carousel />
      <div className='bg-[#0A008A]  overflow-hidden py-10 '>
      <Testimonial />
      <Cta />
      </div>
      <Carousel />
      <Popular />
    </div>
    </>
  );
}

export default LandingPage;
