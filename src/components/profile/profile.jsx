import React from 'react';
import './profile.css';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <>
      <ul className='breadcrumb ml-12 m-4'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/profil'>Profile</Link>
        </li>
      </ul>

      <div className='w-screen grid grid-cols-6 grid-flow-col'>
        <div className='col-span-2 grid grid-row-2 grid-flow-row justify-items-center content-center gap-16'>
          <div className='circle'></div>
          <div className='text-[31px] font-[600]'>Nama Pengguna</div>
        </div>

        <div className='w-3/4 col-span-4 justify-self-center grid gap-6'>
          <form className='grid gap-12 bg-[#C0C1FF]/[0.38] rounded-2xl p-8'>
            <div className='text-[25px] font-[600]'>Informasi Akun</div>

            <div className='grid gap-4 text-[16px] font-[500] px-8'>
              <div className='grid grid-flow-col grid-cols-3 border-b-2 border-[#0A008A] pb-2'>
                <div className='col-span-1'>Nama Pengguna</div>
                <div className='col-span-2'>Nama Pengguna</div>
              </div>

              <div className='grid grid-flow-col grid-cols-3 border-b-2 border-[#0A008A] pb-2'>
                <div className='col-span-1'>Nomor HP</div>
                <div className='col-span-2'>+62xxxxxxxxxxx</div>
              </div>

              <div className='grid grid-flow-col grid-cols-3 border-b-2 border-[#0A008A] pb-2'>
                <div className='col-span-1'>Email</div>
                <div className='col-span-2'>Namapengguna@gmail.com</div>
              </div>
            </div>

            <div className='flex justify-end'>
              <button type='button' className='rounded-[150px] bg-[#0A008A]'>
                Edit profil
              </button>
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

export default Profile;
