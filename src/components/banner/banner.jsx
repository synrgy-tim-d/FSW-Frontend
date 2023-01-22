import React from 'react';
import bannerImg from '../../assets/Banner1.png';
import magnifier from '../../assets/Banner2_Magnifier.png';
import BgImage from '../../assets/Banner3_bgImage.jpg';

function Banner() {
  return (
    <div className=''>
      <div className='relative overflow-hidden '>
        <img className='absolute -z-50 mt-24 lg:mt-28' src={BgImage} />
        <div className='lg:flex ml-12 mr-12 py-14 lg:py-44 '>
          <div className=' lg:w-1/2  flex items-center justify-start '>
            <div className='space-y-6 lg:space-y-12'>
              <div className='space-y-4 lg:space-y-6'>
                <h1 className='text-start font-bold text-2xl lg:text-6xl'>
                  Cari Kos Lengkap Aman di Kantong
                </h1>
                <p className='text-start text-xl lg:text-3xl'>Lorem ipsum dolor sit amet</p>
              </div>
              <div className='flex space-x-4'>
                <div className='relative flex items-center w-11/12'>
                  <img className='absolute ml-4 pointer-events-none' src={magnifier} />
                  <input
                    type='search'
                    className='w-full pl-12 py-1 lg:py-5 text-l lg:text-2xl font-normal text-gray-700 bg-white border-none ring-2 ring-gray-300 focus:ring-none rounded transition ease-in-out '
                    placeholder='Mau Kos di Mana?'
                  />
                </div>
                <button className='bg-[#0A008A] text-l lg:text-2xl text-white rounded w-1/4 py-1 lg:py-2 px-2 hover:bg-blue-600 active:bg-blue-700'>
                  Cari
                </button>
              </div>
            </div>
          </div>

          <div className='lg:w-1/2'></div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
