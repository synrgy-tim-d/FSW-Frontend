import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Draft, CardWarning, ButtonCompleting, ButtonEditing } from './propertyComponent';
import iconlocation from '../../../assets/icon_locationBlue.svg';
import iconplus from '../../../assets/icon_plus.svg';
import kostone from '../../../assets/img_kosOne.png';
import imagedelete from '../../../assets/img_delete.png';
import iconclose from '../../../assets/icon_close.svg';

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
    <div className='col-span-4 h-screen py-4 px-5 lg:py-8 lg:px-10'>
      {/* Button Tambah Properti */}
      <Link to='/owner/formdata'>
        <button
          type='button'
          className='inline-flex self-center justify-center gap-2 mt-0 lg:mt-8 rounded-[4px] px-3 lg:px-5 py-2 font-[600] text-[12px] lg:text-[16px] text-white border-2 border-[#0A008A] bg-[#0A008A] hover:bg-[#A0A3FF] hover:text-[#0A008A] focus:bg-black focus:text-white focus:outline-none'
        >
          <img className='w-[18px] lg:w-auto' alt='' src={iconplus} /> Tambah Properti
        </button>
      </Link>
      {/* Card Properti */}
      <div className='flex flex-row mt-8 lg:mt-16'>
        <div className='lg:w-1/3 mr-5 lg:mr-0 absolute z-30 bg-white p-4 lg:p-8 rounded-[16px] drop-shadow-[4px_4px_12px_rgba(0,0,0,0.15)]'>
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
                        <p className='text-[10px] lg:text-[12px] font-[600]'>{property.type}</p>
                      </div>
                      {draft}
                    </div>
                    {/* Name and Description Desktop */}
                    <div className='lg:flex flex-col hidden'>
                      <p className='text-[25px] font-[700] mt-4'>{property.name}</p>
                      <p className='text-[12px] font-[400]'>
                        Rincian alamat kos secara lengkap dan kode pos
                      </p>
                    </div>
                    {/* Name, Description, and Image Mobile */}
                    <div className='flex flex-row lg:hidden mt-4 gap-2'>
                      <img
                        className='w-[65px] h-[50px] self-center'
                        alt=''
                        src={property.kostImg}
                      />
                      <div className='flex flex-col'>
                        <p className='text-[20px] font-[700]'>{property.name}</p>
                        <p className='text-[10px] font-[500]'>
                          Rincian alamat kos secara lengkap dan kode pos
                        </p>
                      </div>
                    </div>
                    <div className='flex flex-row gap-2 mt-3'>
                      <img className='w-[10px] lg:w-auto' alt='' src={iconlocation} />
                      <p className='text-[12px] lg:text-[16px] font-[600] text-[#4A4A4A]'>
                        {property.location}
                      </p>
                    </div>
                  </div>
                  {/* Image Web Desktop */}
                  <div className='lg:flex flex-col hidden'>
                    <img className='w-[100px] lg:w-auto' alt='' src={property.kostImg} />
                  </div>
                </div>
                {warningcard}
                <div className='flex flex-row mt-5 gap-5 lg:gap-10'>
                  <label
                    htmlFor='my-modal'
                    className='inline-flex self-center justify-center cursor-pointer w-full rounded-[4px] py-1 lg:py-2 font-[600] text-[12px] lg:text-[16px] text-[#0A008A] border-2 border-[#0A008A] bg-white hover:bg-[#A0A3FF] hover:text-[#0A008A] focus:bg-black focus:text-white focus:outline-none'
                  >
                    Hapus Kos
                  </label>
                  {button}
                </div>
              </React.Fragment>
            );
          })}
        </div>
        <input type='checkbox' id='my-modal' className='modal-toggle' />
        <div className='modal'>
          <div className='modal-box lg:max-w-5xl lg:w-[790px] m-5 p-3 lg:p-0 rounded-[32px] bg-white drop-shadow-[4px_4px_8px_rgba(0,0,0,0.15)]'>
            <div className='flex flex-row justify-between mt-[20px] lg:mt-[60px] lg:mb-[30px] mx-[20px]'>
              <div className='w-[20px]'></div> {/* dummy */}
              <img className='lg:w-[160px] w-[120px]' alt='' src={imagedelete} />
              <label htmlFor='my-modal'>
                <img className='lg:mt-[-35px] cursor-pointer' alt='' src={iconclose} />
              </label>
            </div>
            <div className='flex flex-col justify-center items-center mt-4'>
              <p className='mb-1 lg:mb-2 text-[16px] lg:text-[25px] font-[700] lg:font-[600]'>
                Apakah kamu yakin menghapus kos?
              </p>
              <p className='mb-3 lg:mb-8 text-[12px] lg:text-[16px] font-[500] lg:w-[450px] text-center'>
                Seluruh data terkait kos akan dihapus dan kamu harus mendaftarkan kos ulang
              </p>
            </div>
            <div className='flex flex-row justify-center gap-5 my-4 lg:mt-[20px] lg:mb-[60px]'>
              <label
                htmlFor='my-modal'
                className='cursor-pointer inline-flex items-center justify-center w-[131px] h-[33px] lg:w-[151px] lg:h-[43px] p-0 bg-white border-2 border-[#0A008A] self-end rounded-[4px] outline-none text-[16px] font-[600] text-[#0A008A] hover:bg-[#f3f4ff] hover:border-[#0A008A] hover:text-[#0A008A] active:bg-[#0A008A] active:text-white'
              >
                Batalkan
              </label>
              <label
                htmlFor='my-modal'
                className='cursor-pointer inline-flex items-center justify-center w-[131px] h-[33px] lg:w-[151px] lg:h-[43px] p-0 bg-[#0A008A] border-2 border-[#0A008A] self-end rounded-[4px] outline-none text-[16px] font-[600] text-white hover:bg-[#A0A3FF] hover:border-[#A0A3FF] hover:text-[#0A008A] active:bg-black active:text-white'
              >
                Hapus
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
