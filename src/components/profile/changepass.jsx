import React from 'react';
import { Link } from 'react-router-dom';

const changepass = () => {
  return (
    <>
      <ul className='breadcrumb pl-[32px] md:pl-[70px] pt-[30px] md:pt-[25px] font-[Montserrat] font-[600] bg-[#FAFAFA]'>
        <li>
          <Link to='/' className='text-[16px] sm:text-[20px] font-[600] hover:underline'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/profil' className='text-[16px] sm:text-[20px] font-[600] hover:underline'>
            Profile
          </Link>
        </li>
        <li>
          <Link
            to='/gantipassword'
            className='text-[16px] sm:text-[20px] font-[600] hover:underline'
          >
            Ganti Password
          </Link>
        </li>
      </ul>
      <div className='w-full grid grid-cols-2 grid-flow-col font-[Montserrat] font-[600] bg-[#FAFAFA]'>
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
              <Link to='/profil' className='w-[60%] md:w-[70%]'>
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
    </>
  );
};

export default changepass;
