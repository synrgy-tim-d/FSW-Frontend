import React from 'react';
import './profile.css';
import { Link } from 'react-router-dom';

const changepass = () => {
  return (
    <>
      <ul className='breadcrumb ml-12 m-4'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/profil'>Profile</Link>
        </li>
        <li>
          <Link to='/gantipass'>Ganti Password</Link>
        </li>
      </ul>

      <div className='w-screen grid grid-cols-2 grid-flow-col'>
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
              <Link to='/' className='w-[70%] bg-[#0A008A] text-white rounded-[150px] text-center'>
                <button id='reset-password' type='button'>
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
