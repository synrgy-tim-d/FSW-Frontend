import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../../assets/Profile.svg';
import logout from '../../assets/Logout-img.svg'

const Password = ({ password }) => {
  const mask = '*'.repeat(password.length);
  return <span>{mask}</span>;
};

const Profile = () => {
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
      </ul>
      <div className='w-screen grid grid-cols-6 grid-flow-col font-[Montserrat] bg-[#FAFAFA]'>
        <div className='col-span-2 grid grid-row-2 grid-flow-row justify-items-center content-center gap-16'>
          <div>
            <img className='w-full h-auto' src={profile} alt='' />
          </div>
          <div className='text-[31px] font-[600]'>Nama Pengguna</div>
        </div>
        <div className='w-3/4 col-span-4 justify-self-center grid gap-4'>
          <form className='grid gap-12 bg-[#C0C1FF]/[0.38] rounded-2xl p-8'>
            <div className='grid grid-cols-2'>
              <div className='text-[25px] font-[600]'>Informasi Akun</div>
              <Link to='/editprofil' className='w-full flex justify-end'>
                <button
                  type='button'
                  className='rounded-[150px] bg-inherit text-[#000000]/[0.38] text-[20px] font-[600]'
                >
                  Edit profil
                </button>
              </Link>
            </div>

            <div className='grid gap-4 text-[16px] font-[500] px-8 pb-12'>
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
          </form>

          <form action='|' className='grid gap-12 bg-[#C0C1FF]/[0.38] rounded-2xl p-8'>
            <div className='grid grid-cols-2'>
              <div className='text-[25px] font-[600]'>Login & Security</div>
              <Link to='/gantipassword' className='w-full flex justify-end'>
                <button
                  type='button'
                  className='rounded-[150px] bg-inherit text-[#000000]/[0.38] text-[20px] font-[600]'
                >
                  Ganti Password
                </button>
              </Link>
            </div>
            <div className='text-[16px] font-[500] px-8'>
              <div className='grid grid-flow-col grid-cols-3 border-b-2 border-[#0A008A] pb-2'>
                <div className='col-span-1'>Password</div>
                <Password password={'Password'} />
              </div>
            </div>
          </form>

          <div className='rounded-2xl'>
            <div className='flex justify-end'>
              <label
                htmlFor='profile-modal'
                className='btn no-animatio text-[#BA1A1A] text-[20px] font-[600] 
                bg-inherit border-none capitalize py-6 pb-20'
              >
                Log Out
              </label>
            </div>
            <input type='checkbox' id='profile-modal' className='modal-toggle' />
            <div className='modal'>
              <div className='modal-box bg-white p-16 rounded-[12px] text-[#000000] grid gap-4 shadow-2xl '>
                <div className='logout-img justify-self-center pb-8'>
                  <img src={ logout } alt="" />
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
      </div>
    </React.Fragment>
  );
};

export default Profile;
