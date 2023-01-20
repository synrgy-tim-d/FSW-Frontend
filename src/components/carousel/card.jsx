import React from 'react';
import Frame from '../../assets/Carousel3_frame.png';
import Star from '../../assets/Carousel4_star.png';
import Pin from '../../assets/Carousel5_pin.png';

const Card = () => {
  return (
    <div>
      <div className='relative'>
        <div className='absolute rounded-2xl text-xs bg-slate-300 py-2 px-5 font-montserrat mt-2'>
          Tipe kos
        </div>
        <div className='w-[310px] space-y-4 '>
          <img className='h-[211px]' src={Frame} />
          <div className='flex justify-between  items-center'>
            <h2 className='font-semibold text-2xl font-montserrat'>Nama Kos</h2>
            <div className='flex space-x-3 '>
              <div className='flex items-center'>
                <img className='w-full' src={Star} />
              </div>
              <p className='text-2xl font-montserrat'>4.5</p>
            </div>
          </div>
          <p className='font-montserrat text-start'>
            Rincian alamat kos secara lengkap dan kode pos
          </p>
          <div className='flex space-x-3 '>
            <div className='flex items-center'>
              <img className='w-[14px] h-[20px] ' src={Pin} />
            </div>
            <h3 className='font-montserrat text-xl font-semibold'>Kota</h3>
          </div>
          <p className='text-start'>
            <span className='font-montserrat font-bold text-2xl'>Harga</span> /bulan
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
