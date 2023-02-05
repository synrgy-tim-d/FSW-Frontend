import React from 'react';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import Logo from '../assets/img_Logo.svg';
import EditProfile from '../components/profile/editprofile';

const DataKamarPage = () => {
  return (
    <React.Fragment>
      <div className='min-w-[1440px] font-montserrat'>
        <div className='w-1/3 bg-[#0A008A] '>
          <div className='py-28'>
            <img src={Logo} className='mx-auto' />
          </div>
          <div className='w-6/12 mx-auto bg-red-800'>
            <div className='text-white text-2xl font-semibold'>1. Data Pemilik</div>
            <div className='text-white text-2xl font-semibold'>2. Data Kos</div>
            <div className='text-white text-2xl font-semibold'>3. Tentang Kos</div>
            <div className='text-white text-2xl font-semibold'>4. Foto Kos</div>
            <div className='text-white text-2xl font-semibold'>5. </div>
            <div className='text-white text-2xl font-semibold'>1. Data Pemilik</div>
          </div>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default DataKamarPage;
