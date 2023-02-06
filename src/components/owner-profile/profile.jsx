import React from 'react';
import profile from '../../assets//Profile.svg';
import logout from '../../assets/Logout-img.svg';
import { Link } from 'react-router-dom';
import { SidebarOwner } from '../owner/sidebar';

const Password = ({ password }) => {
  const mask = '*'.repeat(password.length);
  return <span>{mask}</span>;
};

const Ownerprofile = () => {
  return (
    <React.Fragment>
      <div className='grid grid-cols-5 bg-[#FAFAFA]'>
        <div className='col-span-1 bg-[#0A008A] h-full px-8 py-16'>
          <SidebarOwner />
        </div>

        <div className='col-span-4 grid grid-rows-auto w-2/3 justify-self-center gap-y-12 py-12'>
          <div className='grid grid-flow-row justify-self-center gap-y-4'>
            <img className='' src={profile} alt='' />
            <p className='text-center text-[24px] sm:text-[30px] font-[600]'>Ibu Kos</p>
          </div>
            <form className='grid gap-12 bg-[#C0C1FF]/[0.38] rounded-2xl p-8'>
              <div className='grid grid-cols-2'>
                <div className='text-[17px] sm:text-[25px] font-[600]'>Informasi Akun</div>
                <Link to='/editprofilowner/editprofilowner' className='w-full flex justify-end'>
                  <button
                    type='button'
                    className='rounded-[150px] bg-inherit text-[#000000]/[0.38] text-[20px] font-[600]'
                  >
                    Edit profil
                  </button>
                </Link>
              </div>
              <div className='grid gap-4 text-[12px] sm:text-[16px] font-[500] px-8 pb-12'>
                <div className='grid grid-cols-1 sm:grid-cols-3 grid-flow-row sm:grid-flow-col border-b-2 border-[#0A008A] pb-2 gap-y-2'>
                  <div className='col-span-1 font-[700] text-[16px] sm:text-[16px] sm:font-[500]'>
                    Nama Pengguna
                  </div>
                  <div className='col-span-1 sm:col-span-2'>Nama Lengkap</div>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-3 grid-flow-row sm:grid-flow-col border-b-2 border-[#0A008A] pb-2 gap-y-2'>
                  <div className='col-span-1 font-[700] text-[16px] sm:text-[16px] sm:font-[500]'>
                    Nomor HP
                  </div>
                  <div className='col-span-1 sm:col-span-2'>+62xxxxxxxxxxx</div>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-3 grid-flow-row sm:grid-flow-col border-b-2 border-[#0A008A] pb-2 gap-y-2'>
                  <div className='col-span-1 font-[700] text-[16px] sm:text-[16px] sm:font-[500]'>
                    Email
                  </div>
                  <div className='col-span-1 sm:col-span-2'>Namapengguna@gmail.com</div>
                </div>
              </div>
            </form>
            <form action='|' className='grid gap-12 bg-[#C0C1FF]/[0.38] rounded-2xl p-8'>
              <div className='grid grid-cols-2'>
                <div className='text-[17px] sm:text-[25px] font-[600]'>Login & Security</div>
                <Link to='/editprofilowner/gantipasswordowner' className='w-full flex justify-end'>
                  <button
                    type='button'
                    className='rounded-[150px] bg-inherit text-[#000000]/[0.38] text-[16px] sm:text-[20px] font-[600]'
                  >
                    Ganti Password
                  </button>
                </Link>
              </div>
              <div className='text-[16px] font-[500] px-8'>
                <div className='grid grid-cols-1 sm:grid-cols-3 grid-flow-row sm:grid-flow-col border-b-2 border-[#0A008A] pb-2 gap-y-2'>
                  <div className='col-span-1 sm:col-span-1 font-[700] text-[16px] sm:text-[16px] sm:font-[500]'>
                    Password
                  </div>
                  <Password password={'Password'} />
                </div>
              </div>
            </form>
            <div className='flex justify-end'>
              <label
                htmlFor='profile-modal'
                className='btn no-animation text-[#BA1A1A] text-[20px] font-[600] 
                bg-inherit border-none capitalize'
              >
                Log Out
              </label>
            </div>
            <input type='checkbox' id='profile-modal' className='modal-toggle' />
            <div className='modal inset-0 z-0 bg-black/50 p-7 lg:p-0'>
              <div className='modal-box bg-white p-16 rounded-[12px] text-[#000000] grid gap-4 shadow-2xl '>
                <div className='logout-img justify-self-center pb-8'>
                  <img src={logout} alt='' />
                </div>
                <h3 className='font-bold text-lg text-center'>Apakah kamu yakin ingin keluar</h3>
                <p className='text-center'>
                  Kamu akan memerlukan akses login untuk dapat masuk kembali
                </p>
                <div className='grid grid-flow-col auto-cols-max justify-center gap-4 font-[600] text-[16px]'>
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
    </React.Fragment>
  );
};

export default Ownerprofile;
