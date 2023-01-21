import React from 'react';
import Star from '../../assets/Carousel4_star.svg';
import Pin from '../../assets/Carousel5_pin.svg';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'IDR',

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

const Card = ({ type, pictureUrl, name, rate, details, location, price }) => {
  return (
    <div className='bg-white rounded-2xl font-montserrat'>
      <div className='relative'>
        <div className='absolute rounded-2xl text-xs bg-white py-2 px-5 font-montserrat mt-2 ml-2 font-bold'>
          {type}
        </div>
        <div className='w-[310px] space-y-4 '>
          <img className='h-[211px] mx-auto rounded-2xl' src={pictureUrl} />
          <div className='flex justify-between  items-center'>
            <h2 className='font-semibold text-2xl font-montserrat'>{name}</h2>
            <div className='flex space-x-3 '>
              <div className='flex items-center'>
                <img className='w-full' src={Star} />
              </div>
              <p className='text-2xl font-montserrat'>{rate}</p>
            </div>
          </div>
          <p className='font-montserrat text-start'>{details}</p>
          <div className='flex space-x-3 '>
            <div className='flex items-center'>
              <img className='w-full' src={Pin} />
            </div>
            <h3 className='font-montserrat text-xl font-semibold'>{location}</h3>
          </div>
          <p className='text-start'>
            <span className='font-montserrat font-bold text-2xl'>{formatter.format(price)}</span>
            {''}
            /bulan
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
