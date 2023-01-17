import React from 'react';
import './profile.css';

const EditProfile = () => {
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

      <div className='w-screen flex'>
        <div
          className='w-2/5'>
          <div>
            <div className='circle'></div>
            <div className='flex justify-center'>
              <p>Nama Pengguna</p>
            </div>
          </div>
        </div>

        <div className='w-3/5 grid'>
          <div className='w-3/4 h-auto justify-self-center grid gap-8'>
            <form action='|' className='grid p-6 bg-slate-300 rounded-2xl gap-2'>
              <div className='flex justify-start'>
                <p>
                  <strong>Informasi Akun</strong>
                </p>
              </div>

              <div className='flex text-black p-4'>
                <div className='w-1/5'>
                  <label htmlFor='inline-full-name' className='flex justify-start'>
                    Nama Lengkap*
                  </label>
                </div>
                <div className='w-3/5'>
                  <input
                    className='w-full rounded-full border-2 border-blue-700 bg-inherit pl-5 p-1'
                    type='text'
                    id='inline-full-name'
                    placeholder='Nama Pengguna'
                  />
                </div>
              </div>

              <div className='flex text-black p-4'>
                <div className='w-1/5'>
                  <label htmlFor='inline-phone-number' className='flex justify-start'>
                    Nomor HP*
                  </label>
                </div>
                <div className='w-3/5'>
                  <input
                    className='w-full rounded-full border-2 border-blue-700 bg-inherit pl-5 p-1'
                    type='text'
                    id='inline-phone-number'
                    placeholder='+62 8xxx xxxx xxxx'
                  />
                </div>
              </div>

              <div className='flex text-black p-4'>
                <div className='w-1/5'>
                  <label htmlFor='inline-email' className='flex justify-start'>
                    Email*
                  </label>
                </div>
                <div className='w-3/5'>
                  <input
                    className='w-full rounded-full border-2 border-blue-700 bg-inherit pl-5 p-1'
                    type=''
                    id='inline-email'
                    placeholder='namapengguna@mail.com'
                  />
                </div>
              </div>

              <div className='flex justify-end'>
                <button className='rounded-full bg-blue-700'>
                  <strong className='text-white'>Simpan</strong>
                </button>
              </div>
            </form>

            <div className='bg-slate-300 rounded-2xl'>
              <button type='button' className='w-full bg-inherit'>
                <strong className='text-black'>Ganti Password</strong>
              </button>
            </div>

            <div className='bg-slate-300 rounded-2xl'>
              <button type='button' className='w-full bg-inherit'>
                <strong className='text-red-700'>Log Out</strong>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
