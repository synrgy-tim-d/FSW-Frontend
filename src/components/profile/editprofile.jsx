import React from 'react';
import './profile.css';
import { Link } from 'react-router-dom';

const EditProfile = () => {
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
          <Link to='/editprofil'>Profile Edit</Link>
        </li>
      </ul>

      <div className='w-screen grid grid-cols-6 grid-flow-col'>
        <div className='col-span-2 grid grid-row-2 grid-flow-row justify-items-center content-center gap-16'>
          <div className='circle'></div>
          <div className='text-[31px] font-[600]'>Nama Pengguna</div>
        </div>

        <div className='w-3/4 col-span-4 justify-self-center grid gap-6'>
          <form action='|' className='grid gap-12 bg-[#C0C1FF]/[0.38] rounded-2xl p-8'>
            <div className='text-[25px] font-[600]'>Informasi Akun</div>

            <div className='grid gap-7 text-[16px] font-[500] px-8'>
              <div className='grid grid-flow-col grid-cols-3'>
                <div className='col-span-1'>
                  <label htmlFor='inline-full-name'>
                    Nama Pengguna
                    <span className='text-[#BA1A1A]'>*</span>
                  </label>
                </div>
                <div className='col-span-2'>
                  <input
                    className='w-full rounded-full border-2 border-blue-700 bg-inherit pl-5 p-1'
                    type='text'
                    id='inline-full-name'
                    placeholder='Nama Pengguna'
                  />
                </div>
              </div>

              <div className='grid grid-flow-col grid-cols-3'>
                <div className='col-span-1'>
                  <label htmlFor='inline-phone-number'>
                    Nomor HP
                    <span className='text-[#BA1A1A]'>*</span>
                  </label>
                </div>
                <div className='col-span-2'>
                  <input
                    className='w-full rounded-full border-2 border-blue-700 bg-inherit pl-5 p-1'
                    type='number'
                    id='inline-phone-number'
                    placeholder='+62xxxxxxxxxxx'
                  />
                </div>
              </div>

              <div className='grid grid-flow-col grid-cols-3'>
                <div className='col-span-1'>
                  <label htmlFor='inline-email'>
                    Email
                    <span className='text-[#BA1A1A]'>*</span>
                  </label>
                </div>
                <div className='col-span-2'>
                  <input
                    className='w-full rounded-full border-2 border-blue-700 bg-inherit pl-5 p-1'
                    type='number'
                    id='inline-email'
                    placeholder='namapengguna@gmail.com'
                  />
                </div>
              </div>
            </div>

            <div className='flex justify-end'>
              <Link to='profil'>
                <button type='button' className='rounded-[150px] bg-[#0A008A]'>
                  Simpan
                </button>
              </Link>
            </div>
          </form>

          <div className='bg-[#C0C1FF]/[0.38] rounded-2xl'>
            <Link to='/'>
              <button
                type='button'
                className='w-full text-[#000000] text-[25px] font-[600] flex justify-center'
              >
                Ganti Password
              </button>
            </Link>
          </div>

          <div className='bg-[#C0C1FF]/[0.38] rounded-2xl'>
            <Link to='/'>
              <button
                type='button'
                className='w-full text-[#BA1A1A] text-[25px] font-[600] flex justify-center'
              >
                Log Out
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
