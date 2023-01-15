import React from 'react';
import bannerImg from '../../assets/Banner1.png';
import magnifier from '../../assets/Banner2_Magnifier.png';

function Banner() {
  return (
    <div className='bg-slate-300'>
      <div className='lg:flex ml-12 mr-12 py-20'>
        <div className=' lg:w-1/2  flex items-center justify-start '>
          <div className='space-y-6'>
            <div className='space-y-4'>
              <h1 className='text-start font-bold text-6xl'>Cari Kos Lengkap Aman Di Kantong</h1>
              <p className='text-start text-3xl'>Lorem ipsum dolor sit amet</p>
            </div>
            <div className='flex space-x-4'>
              <div className='relative flex items-center w-11/12'>
                <img className='absolute ml-4 pointer-events-none' src={magnifier} />
                <input
                  type='search'
                  className='w-full pl-12 py-5 text-xl font-normal text-gray-700 bg-white border-none ring-2 ring-gray-300 focus:ring-none rounded transition ease-in-out '
                  placeholder='Mau Kos di Mana?'
                />
              </div>
              <button className='bg-slate-700 text-xl text-white border rounded w-1/4 py-2 px-2 hover:bg-blue-600 active:bg-blue-700'>
                Cari
              </button>
            </div>
          </div>
        </div>

        <div className='lg:w-1/2'>
          <img src={bannerImg}></img>
        </div>
      </div>
    </div>
  );
}

export default Banner;
