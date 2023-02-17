import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';

export const SidebarOwner = () => {
  const activeLink =
    'w-full h-[68px] px-6 mb-5 text-[25px] font-[600] flex flex-row items-center rounded-[8px] text-[#0A008A] border-2 border-white bg-white hover:bg-[#0A008A] hover:text-white';
  const normalLink =
    'w-full h-[68px] px-6 mb-5 text-[25px] font-[600] flex flex-row items-center rounded-[8px] text-white border-2 border-[#0A008A] bg-[#0A008A] hover:bg-white hover:border-white hover:text-[#0A008A]';

  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div>
      <div className='lg:hidden'>
        <button onClick={toggleDrawer} className={` ${isOpen ? '' : ''} `}>
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
        <Drawer open={isOpen} onClose={toggleDrawer} direction='left' className=''>
          <ul
            className='bg-[#0A008A] text-white text-[20px] px-4 py-10 h-full text-start'
          >
            <li className='mb-5 border-2 rounded-[8px] pl-3 py-1 border-[#0A008A] hover:border-white'>
              <NavLink to='/owner/property' className='font-[600]'>
                Properti Saya
              </NavLink>
            </li>
            <li className='mb-5 border-2 rounded-[8px] pl-3 py-1 border-[#0A008A] hover:border-white'>
              <NavLink to='/owner/history' className='font-[600]'>
                Riwayat Transaksi
              </NavLink>
            </li>
            <li className='mb-5 border-2 rounded-[8px] pl-3 py-1 border-[#0A008A] hover:border-white'>
              <NavLink to='/ownerprofile' className='font-[600]'>
                Akun Profil
              </NavLink>
            </li>
          </ul>
        </Drawer>
      </div>
      <div className='hidden lg:block'>
        <NavLink
          to='/owner/property'
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          <button className='' type='button'>
            Properti Saya
          </button>
        </NavLink>
        <NavLink
          to='/owner/history'
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          <button className='' type='button'>
            Riwayat Transaksi
          </button>
        </NavLink>
        <NavLink
          to='/ownerprofile'
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          <button className='' type='button'>
            Akun Profil
          </button>
        </NavLink>
      </div>
    </div>
  );
};
