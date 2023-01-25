import React from 'react';
import { Link } from 'react-router-dom';

const changepass = () => {
  return (
    <>
      <ul className='breadcrumb pl-[70px] pt-[25px] font-[Montserrat] font-[600]'>
        <li>
          <Link to='/' className='text-[20px] font-[600] hover:underline'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/profil' className='text-[20px] font-[600] hover:underline'>
            Profile
          </Link>
        </li>
        <li>
          <Link to='/gantipassword' className='text-[20px] font-[600] hover:underline'>
            Ganti Password
          </Link>
        </li>
      </ul>
      <div className='w-screen grid grid-cols-2 grid-flow-col font-[Montserrat] font-[600]'>
        <div className='col-span-1'>
          <form action='|' className='w-full grid gap-12 m-12'>
            <div className='text-[25px] weight-[600]'>Ganti Password</div>
            <div
              className='grid grid-rows-2 grid-flow-row gap-6
            text-[20px] font-[500] px-16'
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
              <Link to='/profil' className='w-[70%]'>
                <button
                  id='reset-password'
                  type='button'
                  className='w-full bg-[#0A008A] text-white rounded-[150px] text-center'
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
