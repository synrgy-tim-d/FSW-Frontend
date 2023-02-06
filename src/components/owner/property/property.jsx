import React, { useEffect, useState } from 'react';
import { SidebarOwner } from '../sidebar';
import { Draft, CardWarning, ButtonCompleting, ButtonEditing } from './propertyComponent';
import iconlocation from '../../../assets/icon_locationBlue.svg';
import iconplus from '../../../assets/icon_plus.svg';
import kostone from '../../../assets/img_kosOne.png';

export const PropertyOwner = () => {
  const [properties, setproperties] = useState([]);
  useEffect(() => {
    const propertyList = [
      {
        name: 'Kos Lily',
        type: 'Campuran',
        location: 'Yogyakarta',
        kostImg: kostone,
        data: 'pending',
      },
    ];
    setproperties(propertyList);
  }, []);
  return (
    <div className='grid grid-cols-5'>
      {/* ---Sidebar--- */}
      <div className='col-span-1 bg-[#0A008A] text-white h-screen px-8 py-16'>
        <SidebarOwner />
      </div>
      {/* ---Content--- */}
      <div className='col-span-4 h-screen py-8 pl-10 pr-20'>
        {/* Button Tambah Properti */}
        <button
          type='button'
          className='inline-flex self-center justify-center gap-2 mt-8 rounded-[4px] px-5 py-2 font-[600] text-[16px] text-white border-2 border-[#0A008A] bg-[#0A008A] hover:bg-[#A0A3FF] hover:text-[#0A008A] focus:bg-black focus:text-white focus:outline-none'
        >
          <img className='w-[12px] lg:w-auto' alt='' src={iconplus} /> Tambah Properti
        </button>
        {/* Card Properti */}
        <div className='flex flex-row mt-16'>
          <div className='w-1/3 absolute z-30 bg-white px-8 py-8 rounded-[16px] drop-shadow-[4px_4px_12px_rgba(0,0,0,0.15)]'>
            {properties.map((property, index) => {
              let draft = null;
              let warningcard = null;
              let button = null;
              if (property.data === 'complete') {
                button = <ButtonEditing />;
              } else {
                draft = <Draft />;
                warningcard = <CardWarning />;
                button = <ButtonCompleting />;
              }
              return (
                <React.Fragment key={index}>
                  <div className='flex flex-row justify-between'>
                    <div className='flex flex-col'>
                      <div className='flex flex-row gap-5'>
                        <div className='px-2 py-1 self-center w-fit rounded-[70px] border-[1px] border-[#0A008A]'>
                          <p className='text-[12px] font-[600]'>{property.type}</p>
                        </div>
                        {draft}
                      </div>
                      <p className='text-[25px] font-[700] mt-4'>{property.name}</p>
                      <p className='text-[12px] font-[400]'>
                        Rincian alamat kos secara lengkap dan kode pos
                      </p>
                      <div className='flex flex-row gap-2 mt-3'>
                        <img className='w-[12px] lg:w-auto' alt='' src={iconlocation} />
                        <p className='text-[16px] font-[600] text-[#4A4A4A]'>{property.location}</p>
                      </div>
                    </div>
                    <div className='flex flex-col'>
                      <img className='w-[100px] lg:w-auto' alt='' src={property.kostImg} />
                    </div>
                  </div>
                  {warningcard}
                  <div className='flex flex-row mt-5 gap-10'>
                    <button
                      type='button'
                      className='inline-flex self-center justify-center w-full rounded-[4px] py-2 font-[600] text-[16px] text-[#0A008A] border-2 border-[#0A008A] bg-white hover:bg-[#A0A3FF] hover:text-[#0A008A] focus:bg-black focus:text-white focus:outline-none'
                    >
                      Hapus Kos
                    </button>
                    {button}
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
