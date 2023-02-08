import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoNaqos from '../../assets/LogoNaqosPolos.png';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';

const Navbarsign = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className='navbar grid grid-cols-6 bg-[#FAFAFA] font-[Montserrat] font-[600]'>
      <div className='cols-span-1 pl-4'>
        <a href='/landingPage'>
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
        <Drawer open={isOpen} onClose={toggleDrawer} direction='right' className='grid grid-flow-row auto-rows-max gap-8 px-8 py-4 lg:hidden'>
          {/* <div>Hello World</div> */}
          <Link to='/auth/login'>
            <button
              type='button'
              className='btn btn-outline border-2 border-[#0A008A] rounded-[4px] text-[#0A008A] text-[16px] px-6 w-full'
            >
              Masuk
            </button>
          </Link>
          <Link to='/auth/register'>
            <button
              type='button'
              className='btn btn-active text-[16px] bg-[#0A008A] text-white rounded-[4px] px-6 w-full'
            >
              Daftar
            </button>
          </Link>
        </Drawer>
        <Link to='/auth/login' className='hidden lg:block'>
          <button
            type='button'
            className='btn btn-outline border-2 border-[#0A008A] rounded-[4px] text-[#0A008A] text-[16px] px-6 '
          >
            Masuk
          </button>
        </Link>
        <Link to='/auth/register' className='hidden lg:block'>
          <button
            type='button'
            className='btn btn-active text-[16px] bg-[#0A008A] text-white rounded-[4px] px-6'
          >
            Daftar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbarsign;
