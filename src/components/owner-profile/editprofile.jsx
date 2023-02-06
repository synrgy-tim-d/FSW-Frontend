import React from 'react';
import profile from '../../assets//Profile.svg';
import { Link } from 'react-router-dom';
import { SidebarOwner } from '../owner/sidebar';

const Password = ({ password }) => {
  const mask = '*'.repeat(password.length);
  return <span>{mask}</span>;
};

const EditOwnerProfile = () => {
  return (
    <React.Fragment>
      <div className='grid grid-cols-5 bg-[#FAFAFA]'>
        <div className='col-span-1 bg-[#0A008A] h-full px-8 py-16'>
          <SidebarOwner />
        </div>

        <div className='col-span-4 grid grid-rows-auto w-2/3 justify-self-center gap-y-12 py-12'>
          <div className='grid grid-flow-row justify-self-center gap-y-4'>
            <img className='' src={profile} alt='' />
            <p className='text-center text-[24px] sm:text-[30px] font-[600]'>Ibu Kos</p>
          </div>
          <div className='grid gap-4'>
            <form action='|' className='grid gap-12 bg-inherit rounded-2xl p-8'>
              <div className='text-[20px] sm:text-[25px] font-[600] text-center lg:text-start'>
                Informasi Akun
              </div>
              <div className='grid gap-4 sm:gap-7 text-[12px] sm:text-[16px] font-[500] px-8'>
                <div className='grid grid-flow-row grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4'>
                  <div className='col-span-1 font-[700] sm:font-[500]'>
                    <label htmlFor='inline-full-name'>
                      Nama Pengguna
                      <span className='text-[#BA1A1A]'>*</span>
                    </label>
                  </div>
                  <div className='sm:col-span-2'>
                    <input
                      className='w-full rounded-full border-2 border-blue-700 bg-inherit pl-5 p-1 text-start'
                      type='text'
                      id='inline-full-name'
                      placeholder='Nama Pengguna'
                    />
                  </div>
                </div>
                <div className='grid grid-flow-row grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4'>
                  <div className='col-span-1 font-[700] sm:font-[500]'>
                    <label htmlFor='inline-phone-number'>
                      Nomor HP
                      <span className='text-[#BA1A1A]'>*</span>
                    </label>
                  </div>
                  <div className='sm:col-span-2'>
                    <input
                      className='w-full rounded-full border-2 border-blue-700 bg-inherit pl-5 p-1 text-start'
                      type='number'
                      id='inline-phone-number'
                      placeholder='+62xxxxxxxxxxx'
                    />
                  </div>
                </div>
                <div className='grid grid-flow-row grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4'>
                  <div className='col-span-1 font-[700] sm:font-[500]'>
                    <label htmlFor='inline-email'>
                      Email
                      <span className='text-[#BA1A1A]'>*</span>
                    </label>
                  </div>
                  <div className='sm:col-span-2'>
                    <input
                      className='w-full rounded-full border-2 border-blue-700 bg-inherit pl-5 p-1 text-start'
                      type='email'
                      id='inline-email'
                      placeholder='namapengguna@gmail.com'
                    />
                  </div>
                </div>
              </div>
              <div className='flex'>
                <Link to='/profilpemilik' className='w-full grid grid-cols-3 px-8'>
                  <button
                    type='button'
                    className='col-start-1 col-span-1 lg:col-span-full rounded-[150px] p-2 sm:py-2 text-[14px] sm:text-[16px]
                  text-white bg-[#0A008A] hover:bg-[#A0A3FF] hover:text-[#FFFFFF] active:bg-black'
                  >
                    Simpan
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EditOwnerProfile;
