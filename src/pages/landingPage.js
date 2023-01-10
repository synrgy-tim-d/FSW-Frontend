import React from 'react';
import Banner from '../components/banner/banner';
import Carousel from '../components/carousel/carousel';
import Cta from '../components/cta/cta';
import Footer from '../components/footer/footer';
import Navbar from '../components/navbar/navbar';
import Whyus from '../components/whyuse/bannerwhyuse';
import Popular from '../components/popular/popular';
import Testimonial from '../components/testimonial/testimonial';

function landingPage() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Whyus />
      <Carousel />
      <Testimonial />
      <Cta />
      <Carousel />
      <Popular />
      <Footer />
    </div>
  );
}

export default landingPage;
