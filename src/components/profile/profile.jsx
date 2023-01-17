import React from 'react';
import './profile.css';
// import profileDefault from '../../assets/Profile'

const Profile = () => {
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
        <div className='w-2/5'>
          <div>
            <div className='circle'>
            </div>
            <div className='flex justify-center'>
              <p>Nama Pengguna</p>
            </div>
          </div>
        </div>

        <div className='w-3/5 grid'>
          <div className='w-3/4 h-auto justify-self-center grid gap-8'>
            <form action='|' className='grid p-6 bg-slate-300 rounded-2xl gap-1'>
              <div className='flex justify-start mb-4'>
                <p>
                  <strong>Informasi Akun</strong>
                </p>
              </div>

              <div className='flex justify-start text-black p-4 border-b-2 border-blue-900 w-5/6'>
                <div className='w-2/5'>Nama Lengkap</div>
                <div className='w-3/5'>Nama Pengguna</div>
              </div>

              <div className='flex justify-start text-black p-4 border-b-2 border-blue-900 w-5/6'>
                <div className='w-2/5'>Nomor HP</div>
                <div className='w-3/5'>+62 8xxx xxxx xxxx</div>
              </div>

              <div className='flex justify-start text-black p-4 border-b-2 border-blue-900 w-5/6'>
                <div className='w-2/5'>Email</div>
                <div className='w-3/5'>namapengguna@gmail.com</div>
              </div>

              <div className='flex justify-end pt-12'>
                <button className='rounded-full bg-blue-700'>
                  <strong className='text-white'>Edit Profil</strong>
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

export default Profile;
