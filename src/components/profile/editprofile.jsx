import React from 'react';
import profile from '../../assets/Profile.svg';
import { Link } from 'react-router-dom';

const EditProfile = () => {
  return (
    <React.Fragment>
      <ul className='breadcrumb pl-[70px] pt-[25px] font-[Montserrat] text-[20px] font-[600] bg-[#FAFAFA]'>
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
          <Link to='/editprofil' className='text-[20px] font-[600] hover:underline'>
            Profile Edit
          </Link>
        </li>
      </ul>
      <div className='w-full grid grid-cols-6 grid-flow-col font-[Montserrat] items-center bg-[#FAFAFA] py-[7.4rem] '>
        <div className='col-span-2 grid grid-row-2 grid-flow-row justify-items-center content-center gap-16'>
          <div>
            <img className='w-full h-auto' src={profile} alt='' />
          </div>
          <div className='text-[31px] font-[600]'>Nama Pengguna</div>
        </div>
        <div className='w-3/4 col-span-4 justify-self-start grid gap-4'>
          <form action='|' className='grid gap-12 bg-inherit rounded-2xl p-8'>
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
                    type='email'
                    id='inline-email'
                    placeholder='namapengguna@gmail.com'
                  />
                </div>
              </div>
            </div>
            <div className='flex'>
              <Link to='/profil' className='w-full grid grid-cols-3 grid-flow-col px-8'>
                <button
                  type='button'
                  className='col-start-2 col-span-2 rounded-[150px] py-2 text-white bg-[#0A008A] hover:bg-[#A0A3FF] hover:text-[#FFFFFF] active:bg-black'
                >
                  Simpan
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EditProfile;
