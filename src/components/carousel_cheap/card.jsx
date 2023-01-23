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
    <div className='bg-white rounded-2xl  font-montserrat'>
      <div className='relative'>
        <div className='absolute rounded-2xl text-xs bg-white py-1 lg:py-2 px-3 lg:px-5 font-montserrat mt-2 ml-4 font-bold'>
          {type}
        </div>
        <div className='lg:w-[310px] space-y-4 '>
          <img className='h-[120.8px] lg:h-[211px] mx-auto rounded-2xl' src={pictureUrl} />
          <div className='flex justify-between  items-center'>
            <h2 className='font-semibold ml-1 text-base lg:text-2xl font-montserrat'>{name}</h2>
            <div className='flex space-x-3 '>
              <div className='flex items-center'>
                <img className='w-full' src={Star} />
              </div>
              <p className='text-base lg:text-2xl font-montserrat'>{rate}</p>
            </div>
          </div>
          <p className='font-montserrat text-start ml-1 text-sm lg:text-base'>{details}</p>
          <div className='flex space-x-3 ml-1'>
            <div className='flex items-center'>
              <img className='w-full' src={Pin} />
            </div>
            <h3 className='font-montserrat text-base lg:text-xl font-semibold'>{location}</h3>
          </div>
          <p className='text-start text-sm lg:text-base ml-1'>
            <span className='font-montserrat font-bold text-base lg:text-2xl'>
              {formatter.format(price)}
            </span>
            /bulan
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
