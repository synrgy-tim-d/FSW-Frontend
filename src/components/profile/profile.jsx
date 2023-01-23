import React from 'react';
import './profile.css';
import { Link } from 'react-router-dom';
import camera from '../../assets/Profile-camera.svg';
import profile from '../../assets/Profile.svg';

const Profile = () => {
  return (
    <>
      <ul className='breadcrumb pl-[70px] pt-[25px] font-[Montserrat] text-[20px] font-[600]'>
        <li>
          <Link to='/' className='text-[20px] font-[600] hover:underline'>Home</Link>
        </li>
        <li>
          <Link to='/profil' className='text-[20px] font-[600] hover:underline'>Profile</Link>
        </li>
      </ul>
      <div className='w-screen grid grid-cols-6 grid-flow-col font-[Montserrat]'>
        <div className='col-span-2 grid grid-row-2 grid-flow-row justify-items-center content-center gap-16'>
          <div>
            <img className='w-full h-auto' src={profile} alt='' />
          </div>
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
            <div className='flex justify-end pt-8'>
              <Link to='/editprofil' className='w-full flex justify-end'>
                <button type='button' className='w-1/5 rounded-[150px] bg-[#0A008A]'>
                  Edit profil
                </button>
              </Link>
            </div>
          </form>
          <div className='bg-[#C0C1FF]/[0.38] rounded-2xl'>
            <Link to='/gantipassword'>
              <button
                type='button'
                className='w-full text-[#000000] text-[25px] font-[600] flex justify-center'
              >
                Ganti Password
              </button>
            </Link>
          </div>
          <div className='bg-[#C0C1FF]/[0.38] rounded-2xl'>
            <div>
              <label
                htmlFor='profile-modal'
                className='btn no-animation w-full text-[#BA1A1A] text-[25px] font-[600] flex justify-center 
                bg-inherit border-none capitalize hover:bg-[#A0A3FF] hover:text-[#0A008A]'
              >
                Log Out
              </label>
            </div>
            <input type='checkbox' id='profile-modal' className='modal-toggle' />
            <div className='modal'>
              <div className='modal-box text-[#000000] grid gap-4'>
                <div className='logout-img justify-self-center pb-8'></div>
                <h3 className='font-bold text-lg text-center'>Apakah kamu yakin ingin keluar</h3>
                <p className='text-center'>
                  Kamu akan memerlukan akses login untuk dapat masuk kembali
                </p>
                <div className='modal-action flex justify-center font-[600] text-[16px]'>
                  <label
                    htmlFor='profile-modal'
                    className='btn no-animation rounded-[4px] bg-white text-[#0A008A] border-2 border-[#0A008A] hover:bg-white'
                  >
                    Batalkan
                  </label>
                  <Link to='/'>
                    <label
                      htmlFor='logout'
                      className='btn no-animation rounded-[4px] bg-[#0A008A] text-white border-2 border-white hover:bg-[#0A008A] hover:border-white'
                    >
                      Keluar
                    </label>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
