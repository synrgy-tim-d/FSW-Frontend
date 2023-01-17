import React from 'react';
import './profile.css';
import { Link } from 'react-router-dom';

const EditProfile = () => {
  return (
    <>
      {/* <ul className='breadcrumb ml-24 m-4'>
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
            <form action='|' className='grid p-6 bg-slate-300 rounded-2xl gap-6'>
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
                  <label htmlFor='inline-full-name' className='flex justify-start'>
                    Nomor HP*
                  </label>
                </div>
                <div className='w-3/5'>
                  <input
                    className='w-full rounded-full border-2 border-blue-700 bg-inherit pl-5 p-1'
                    type='text'
                    id='inline-full-name'
                    placeholder='+62 8xxx xxxx xxxx'
                  />
                </div>
              </div>

              <div className='flex text-black p-4'>
                <div className='w-1/5'>
                  <label htmlFor='inline-full-name' className='flex justify-start'>
                    Email*
                  </label>
                </div>
                <div className='w-3/5'>
                  <input
                    className='w-full rounded-full border-2 border-blue-700 bg-inherit pl-5 p-1'
                    type=''
                    id='inline-full-name'
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
      </div> */}

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
              <Link to='profil' >
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
