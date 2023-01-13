import React from 'react'
import './profile.css'

const profile = () => {
  return (
    <div className='p-4'>
      <ul className='breadcrumb pl-10'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>Profil</a>
        </li>
      </ul>
      <div className='grid grid-cols-12 p-12'>
        <div className='col-span-4 grid justify-center'>
          <div className='circle' />
          <div className='flex justify-center'>
            <h1>Nama Pengguna</h1>
          </div>
        </div>
        <div className='col-span-8 grid gap-6'>
          <div
            className='flex flex-col rounded-xl p-3 pb-16'
            style={{ backgroundColor: '#EFEFEF' }}
          >
            <div className='grid grid-cols-12 p-3'>
              <div className='col-start-1 col-end-4 flex pl-3 pb-8'>
                <h4 id='head'>
                  <strong> Informasi Akun </strong>
                </h4>
              </div>
              <div className='col-span-2 col-end-13 flex justify-end'>
                <button>
                  <p className='edit_profil pr-4 text-end'>Edit Profil</p>
                </button>
              </div>
            </div>
            <div className='grid grid-cols-8'>
              <div className='col-span-2 col-start-1 grid gap-4 pl-8'>
                <p>Nama Lengkap</p>
                <p>Nomor HP</p>
                <p>Email</p>
                <p>Username</p>
              </div>

              <div className='col-span-4 col-start-3 grid gap-4'>
                <div className='w-full bg-inherit'>Nama Pengguna</div>
                <div className='w-full bg-inherit'>+62 8xxx xxxx xxxx</div>
                <div className='w-full bg-inherit'>namapengguna@mail.com</div>
                <div className='w-full bg-inherit'>namapengguna</div>
              </div>
              
            </div>
          </div>
          <div
            className='flex justify-center rounded-xl p-3'
            id='change_pass'
            style={{ backgroundColor: '#EFEFEF' }}
          >
            <button>
              <div>
                <p className='change_pass text-2xl'>Ganti Password</p>
              </div>
            </button>
          </div>
          <div
            className='flex justify-center rounded-xl p-3'
            id='logout'
            style={{ backgroundColor: '#EFEFEF' }}
          >
            <button>
              <p className='logout text-2xl'>
                <i>Log Out</i>
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default profile;
