import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import LogoNaqosPolosWhite from '../../assets/LogoNaqosFixWhite.png'

export const SidebarForm = () => {
    const activeLink =
    'w-full h-[68px] px-4 mb-1.5 text-[22px] font-[600] flex flex-row items-center rounded-[8px] text-white hover:border-white';
    const normalLink =
    'w-full h-[68px] px-4 mb-1.5 text-[22px] font-[600] flex flex-row items-center rounded-[8px] text-[#FFFFFF61] border-2 border-[#0A008A] bg-[#0A008A] hover:bg-white hover:border-white hover:text-[#0A008A]';

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
        {/* <Drawer open={isOpen} onClose={toggleDrawer} direction='left' className=''>
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
                <NavLink to='/profilpemilik' className='font-[600]'>
                Akun Profil
                </NavLink>
            </li>
            </ul>
        </Drawer> */}
        </div>

        {/* Desktop version */}
        <div className='hidden lg:block'>
        {/* Image Naqos */}
        <img src={LogoNaqosPolosWhite} alt="" />

        {/* Data Pemilik */}
        <NavLink
            to='/owner/formdata'
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
            <button className='' type='button'>
                <button className='w-9 h-9 rounded-full bg-[#FFFFFF61] text-[#0A008A] text-[20px]'>
                    1
                </button>
                <span className='pl-6'>Data Pemilik</span>
            </button>
        </NavLink>

        {/* Data Kos */}
        <NavLink
            to='/owner/kostdata'
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
            <button className='' type='button'>
                <button className='w-9 h-9 rounded-full bg-[#FFFFFF61] text-[#0A008A] text-[20px]'>
                    2
                </button>
                <span className='pl-6'>Data Kos</span>
            </button>
        </NavLink>

        {/* Tentang Kos */}
        <NavLink
            to='/owner/kostfacility'
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
            <button className='' type='button'>
                <button className='w-9 h-9 rounded-full bg-[#FFFFFF61] text-[#0A008A] text-[20px]'>
                    3
                </button>
                <span className='pl-6'>Tentang Kos</span>
            </button>
        </NavLink>

        {/* Foto Kos */}
        <NavLink
            to='/fotokos'
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
            <button className='' type='button'>
                <button className='w-9 h-9 rounded-full bg-[#FFFFFF61] text-[#0A008A] text-[20px]'>
                    4
                </button>
                <span className='pl-6'>Foto Kos</span>
            </button>
        </NavLink>

        {/* Data Kamar */}
        <NavLink
            to='/owner/roomdetails'
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
            <button className='' type='button'>
                <button className='w-9 h-9 rounded-full bg-[#FFFFFF61] text-[#0A008A] text-[20px]'>
                    5
                </button>
                <span className='pl-6'>Data Kamar</span>
            </button>
        </NavLink>
        </div>
    </div>
    );
};