import React from 'react';
import profile from '../../assets//Profile.svg';
import { Link } from 'react-router-dom';
import { SidebarOwner } from '../owner/sidebar';

const ChangePassOwner = () => {
  return (
    <React.Fragment>
      <div className='grid grid-cols-5'>
        <div className='col-span-1 bg-[#0A008A] h-full px-8 py-16'>
          <SidebarOwner />
        </div>
        <div className='col-span-4 grid grid-rows-auto w-2/3 justify-self-center gap-y-12 py-12'>
          <div className='grid grid-flow-row justify-self-center gap-y-4'>
            <img className='' src={profile} alt='' />
            <p className='text-center text-[24px] sm:text-[30px] font-[600]'>Ibu Kos</p>
          </div>

          <div className='grid grid-flow-col font-[Montserrat] font-[600]'>
            <div className='col-span-2 md:col-span-1'>
              <form action='|' className='w-full grid gap-12 mt-12 md:m-12'>
                <div className='text-[20px] md:text-[25px] weight-[600] ml-4'>Ganti Password</div>
                <div
                  className='grid grid-rows-2 grid-flow-row gap-2 md:gap-6
                             text-[16px] lg:text-[20px] font-[500] px-16'
                >
                  <div>
                    <label htmlFor='inline-password'>Password</label>
                  </div>
                  <div>
                    <input
                      className='w-full rounded-[526px] pl-5 p-2 border-2 border-[#46464F]/[0.20] bg-inherit'
                      id='inline-password'
                      type='password'
                      placeholder='Masukkan password lama'
                    />
                  </div>
                  <div>
                    <label htmlFor='inline-new-password'>Buat Password Baru</label>
                  </div>
                  <div>
                    <input
                      className='w-full rounded-[526px] pl-5 p-2 border-2 border-[#46464F]/[0.20] bg-inherit'
                      id='inline-new-password'
                      type='password'
                      placeholder='Minimal 6 karakter'
                    />
                  </div>
                </div>
                <div className='flex justify-center'>
                  <Link to='/profilpemilik' className='w-[60%] md:w-[70%]'>
                    <button
                      id='reset-password'
                      type='button'
                      className='w-full rounded-[150px] text-center py-2 text-[14px] sm:text-[16px] 
                  text-white bg-[#0A008A] hover:bg-[#A0A3FF] hover:text-[#FFFFFF] active:bg-black'
                    >
                      Reset Password
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ChangePassOwner;
