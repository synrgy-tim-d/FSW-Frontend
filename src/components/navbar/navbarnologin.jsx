import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Drawer from 'react-modern-drawer';
import LogoNaqos from '../../assets/LogoNaqosPolos.png';
import Pencari from '../../assets/pencari.svg';
import Pemilik from '../../assets/pemilik.svg';
import 'react-modern-drawer/dist/index.css';

const Navbarsign = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className='w-full navbar grid grid-cols-6 bg-[#FAFAFA] font-[Montserrat] text-[#000000] font-[600]'>
      <div className='cols-span-1 pl-4'>
        <a href='/'>
          <img className='w-full h-auto' src={LogoNaqos}></img>
        </a>
      </div>
      <div className='col-span-5 flex justify-end pr-4 space-x-6'>
        <button
          onClick={toggleDrawer}
          className={` ${isOpen ? '' : ''} 
            lg:hidden px-4 py-2 rounded-lg `}
        >
          {isOpen ? (
            <svg
              className='w-6 h-6 fill-current'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
            >
              <path
                d='M10 8.586L2.929 1.515 1.415 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z'
                fill='currentColor'
              />
            </svg>
          ) : (
            <svg
              className='w-6 h-6 fill-current'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
            >
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
            </svg>
          )}
        </button>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction='right'
          className='grid grid-flow-row auto-rows-max gap-8 px-8 py-4 lg:hidden'
        >
          <Link to='/auth/login'>
            <button
              type='button'
              className='btn btn-outline border-2 border-[#0A008A] rounded-[4px] text-[#0A008A] text-[16px] px-6 w-full'
            >
              Masuk
            </button>
          </Link>
          {/* <Link to='/auth/register'>
            <button
              type='button'
              className='btn btn-active text-[16px] bg-[#0A008A] text-white rounded-[4px] px-6 w-full'
            >
              Daftar
            </button>
          </Link> */}
          <label
            htmlFor='signin-modal-sidebar'
            className='py-3.5 px-6 btn rounded-[4px] border-2 
            text-white bg-[#0A008A] hover:bg-[#A0A3FF] active:bg-black'
          >
            Daftar
          </label>
          <input type='checkbox' id='signin-modal-sidebar' className='modal-toggle' />
          <div className='modal bg-[#000000]/50 w-full'>
            <div
              className=' bg-white p-8
          grid grid-flow-row auto-rows-max gap-8 rounded-[16px] shadow'
            >
              <p className='text-center text-[16px] font-[600]'>
                Daftar sebagai
                <span className='absolute pl-4'>
                  <label htmlFor='signin-modal-sidebar'>X</label>
                </span>
              </p>
              <Link to='auth/register'>
                <label
                  htmlFor='signin-modal-sidebar'
                  className='grid grid-flow-col auto-cols-max gap-4
              border-2 border-[#0A008A] rounded-[8px] px-4 py-2'
                >
                  <p className='self-center'>Pencari Kos</p>
                </label>
              </Link>
              <Link to='/owner/property'>
                <label
                  htmlFor='signin-modal-sidebar'
                  className='grid grid-flow-col auto-cols-max gap-4
              border-2 border-[#0A008A] rounded-[8px] px-4 py-2'
                >
                  <p className='self-center'>Pemilik Kos</p>
                </label>
              </Link>
            </div>
          </div>
        </Drawer>
        <Link to='/auth/login' className='hidden lg:block'>
          <button
            type='button'
            className='btn btn-outline 
            border-2 border-[#0A008A] rounded-[4px] active:bg-[#0A008A] 
            text-[#0A008A] active:text-white text-[16px] px-6 '
          >
            Masuk
          </button>
        </Link>
        <label
          htmlFor='signin-modal'
          className='hidden lg:block py-3.5
          px-6 btn rounded-[4px] border-2 text-white bg-[#0A008A] hover:bg-[#A0A3FF] active:bg-black'
        >
          Daftar
        </label>
        <input type='checkbox' id='signin-modal' className='modal-toggle' />
        <div className='modal bg-[#000000]/50 w-full'>
          <div
            className='modal-box bg-white px-32 py-8
          grid grid-flow-row auto-rows-max gap-8 rounded-[32px] shadow'
          >
            <p className='text-center text-[16px] font-[600]'>
              Daftar sebagai
              <span className='absolute pl-48'>
                <label htmlFor='signin-modal' className='pointer-events-auto'>X</label>
              </span>
            </p>
            <Link to='auth/register'>
              <label
                htmlFor='signin-modal'
                className='grid grid-flow-col auto-cols-max gap-4
              border-2 border-[#0A008A] rounded-[8px] py-6 px-20 '
              >
                <img src={Pencari} alt='Pencari Kos' />
                <p className='self-center'>Pencari Kos</p>
              </label>
            </Link>
            <Link to='/owner/property'>
              <label
                htmlFor='signin-modal'
                className='grid grid-flow-col auto-cols-max gap-4
              border-2 border-[#0A008A] rounded-[8px] py-8 px-20'
              >
                <img src={Pemilik} alt='Pemilik Kos' />
                <p className='self-center'>Pemilik Kos</p>
              </label>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbarsign;
