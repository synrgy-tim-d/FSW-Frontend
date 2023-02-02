import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='w-screen navbar bg-base-100'>
      <div className='flex-1'>
        <Link to='/'>
          <img className='h-14' src='src/assets/LogoNaqosPolos.png'></img>
        </Link>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1 grid grid-flow-col gap-6 text-[#000000]/[0.38] text-[20px] '>
          <li>
            <a className='font-[600]'>Wishlist</a>
          </li>
          <li>
            <Link to='/history' className='font-[600]'>
              Riwayat
            </Link>
          </li>
          <li>
            <label htmlFor='notification-modal' className='font-[600]'>Notifikasi</label>
            <input type='checkbox' id='notification-modal' className='modal-toggle' />
              <div className="modal">
                <div className="modal-box bg-white relative">
                  <label htmlFor="notification-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                  <h3 className="text-lg font-bold">Notifikasi</h3>
                  <p className="py-4">Belum ada notifikasi untuk kamu</p>
                </div>
              </div>
          </li>
          <li tabIndex={0}>
            <a className='font-[600]'>
              Profil
              <svg
                className='fill-current'
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 24 24'
              >
                <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
              </svg>
            </a>
            <ul className='p-2 bg-base-100'>
              <li>
                <Link to='/editprofil' className='font-[600] hover:bg-[#F2EFFF]'>
                  Edit Profil
                </Link>
              </li>
              <li>
                <a className='font-[600] hover:bg-[#F2EFFF]'>Logout</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
