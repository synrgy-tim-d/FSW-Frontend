import React from 'react';
import './profile.css';

const Changepass = () => {
  return (
    <>
      <ul className='breadcrumb ml-24 m-4'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>Profil</a>
        </li>
        <li>
          <a href='#'>Edit Profil</a>
        </li>
      </ul>

      <div className='w-screen grid p-6'>
        <div className='w-1/2'>
          <form action='|' className='grid justify-center gap-3'>
            <p className='font-bold text-3xl pb-6'>Ganti Password</p>
            <div className='grid gap-4 font-bold text-black p-4'>
              <div className=''>
                <label htmlFor='inline-password'>
                  Password
                </label>
              </div>
              <div className='w-3/5'>
                <input
                  className='w-full rounded-full border-2 border-blue-700 bg-inherit pl-5 p-1'
                  type='text'
                  id='inline-password'
                  placeholder='Masukkan Password Lama'
                />
              </div>
            </div>

            <div className='grid gap-4 font-bold text-black p-4'>
              <div className=''>
                <label htmlFor='inline-new-password'>
                  Buat Password Baru
                </label>
              </div>
              <div className='w-3/5'>
                <input
                  className='w-full rounded-full border-2 border-blue-700 bg-inherit pl-5 p-1'
                  type='text'
                  id='inline-new-password'
                  placeholder='Minimal 6 Karakter'
                />
              </div>
            </div>

            <div className='flex justify-center'>
              <button className='w-2/5 rounded-full bg-blue-700'>
                <strong className='text-white'>Reset Password</strong>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Changepass;
