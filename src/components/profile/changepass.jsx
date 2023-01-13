import React from 'react'
import './profile.css'

const changepass = () => {
  return (
    <div className='p-10'>
      <ul className='breadcrumb'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>Profil</a>
        </li>
        <li>
          <a href='#'>Ganti Password</a>
        </li>
      </ul>
      <div className='grid grid-cols-6 p-6'>
        <div className='col-span-2 grid grid-flow-row grid-rows-4 gap-4 p-2'>
          <div>
            <p className='text-2xl'>Ganti Password</p>
          </div>
          <div>Password</div>
          <div className='w-full rounded-3xl border-2 p-2'>
            <input type='password' placeholder='Masukkan password lama' />
          </div>
          <div>Buat Password Baru</div>
          <div className='w-full rounded-3xl border-2 p-2'>
            <input type='password' placeholder='Minimal 6 karakter' />
          </div>
          <div className='flex w-96 justify-center justify-self-center rounded-3xl border-2 bg-blue-900 p-2'>
            <button type='button' className='text-white'>
              Reset Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default changepass;
