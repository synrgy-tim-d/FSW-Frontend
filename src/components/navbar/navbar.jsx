import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoNaqos from '../../assets/LogoNaqosPolos.png';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='navbar grid grid-cols-6 bg-[#FAFAFA] font-montserrat font-[400] lg:max-w-7xl lg:mx-auto max-w-full'>
      {/* Logo Brand */}
      <div className='col-span-1 pl-4'>
        <Link to='/'>
          <img className='w-full h-auto' src={LogoNaqos} />
        </Link>
      </div>

      {/* Button hamburger menu */}
      <button className='btn-square rounded-lg md:hidden focus:outline-none focus:shadow-outline' onClick={() => setOpen(!open)}>
        {open ? (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                />
            </svg>
        ) : (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                />
            </svg>
        )}
      </button>

      {/* Navigation */}
      <div className='lg:block hidden col-span-5 flex justify-end pr-4'>
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
              <div className='modal'>
                <div className='modal-box w-[433px] h-[610px] bg-white drop-shadow-md absolute top-20 right-44'>
                  <label htmlFor='notification-modal' className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                  <h2 className='text-lg font-bold absolute left-4 top-2'>Notifikasi</h2>
                    <div className='absolute text-center h-5 top-[295px] left-12'>Belum ada notifikasi buat kamu</div>
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

    // <header className='bg-[#FAFAFA] font-montserrat font-[400'>
    //   <div className='flex items-center justify-between max-w-7xl mx-auto'>
    //     <div className='col-span-1 pl-4'>
    //       <Link to='/'>
    //         <img className='w-full h-auto' src={LogoNaqos} />
    //       </Link>
    //     </div>


    //       <nav className='flex items-center w-auto'>
    //         <ul className='text-base flex justify-between'>
    //           <li>
    //             <a className='px-5 py-2' href="">Wishlist</a>
    //           </li>
    //           <li>
    //             <a className='px-5 py-2' href="">Riwayat</a>
    //         </li>
    //         <li>
    //             <a className='px-5 py-2' href="">Notifikasi</a>
    //         </li>
    //         <li tabIndex={0}>
    //           <a className='px-5 py-2 font-[600]'>
    //             Profil
    //             <svg
    //             className='fill-current'
    //             xmlns='http://www.w3.org/2000/svg'
    //             width='20'
    //             height='20'
    //             viewBox='0 0 24 24'
    //           >
    //             <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
    //           </svg>
    //         </a>
    //         <ul className='p-2 bg-base-100'>
    //           <li>
    //             <Link to='/editprofil' className='font-[600] hover:bg-[#F2EFFF]'>
    //               Edit Profil
    //             </Link>
    //           </li>
    //           <li>
    //             <a className='font-[600] hover:bg-[#F2EFFF]'>Logout</a>
    //           </li>
    //         </ul>
    //       </li>
    //       </ul>

    //       </nav>
    //     </div>
    // </header>
  );
};

export default Navbar;
