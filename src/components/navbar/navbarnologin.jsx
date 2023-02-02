import React from 'react'
import { Link } from 'react-router-dom'
import LogoNaqos from '../../assets/LogoNaqosPolos.png';

const Navbarsign = () => {
    return (
    <div className='navbar grid grid-cols-6 bg-[#FAFAFA] font-[Montserrat] font-[600]'>
        <div className='col-span-1 pl-4'>
            <a href='/landingPage'>
                <img className='w-full h-auto' src={ LogoNaqos } alt="" />
            </a>
        </div>

        <div className='col-span-5 flex justify-end pr-4 space-x-6'>
            {/* Button Masuk */}
            <label htmlFor='login-modal' className='btn btn-outline border-2 border-[#0A008A] rounded-[4px] text-[#0A008A] text-[16px] px-6'>
                Masuk
            </label>
            <input type='checkbox' id='login-modal' className='modal-toggle' />
            <div className='modal'>
                {/* <div className='modal-box w-[664px] h-[491px] absolute drop-shadow bg-white top-4'>
                    <label htmlFor='login-modal' className='btn btn-sm btn-circle absolute right-2 top-2'>✕</label>
                    <h3 className='text-lg font-bold text-center'>Masuk sebagai</h3>
                </div> */}
                <div className='modal-box absolute drop-shadow bg-white p-12 rounded-[12px] grid gap-4'>
                    <label htmlFor='login-modal' className='btn btn-sm btn-circle absolute right-2 top-2'>✕</label>
                    <h3 className='text-lg font-bold text-center'>Masuk sebagai</h3>
                    <Link to='/login'><button className='btn btn-outline'>Pencari Kos</button></Link>
                    <Link to='/login'><button className='btn btn-outline'>Pemilik Kos</button></Link>
                </div>
            </div>

            {/* Button Daftar */}
            <label htmlFor='signup-modal' className='btn btn-active bg-[#0A008A] rounded-[4px] text-white text-[16px] px-6'>
                Daftar
            </label>
            <input type='checkbox' id='signup-modal' className='modal-toggle' />
            <div className='modal'>
                <div className='modal-box absolute drop-shadow bg-white p-12 rounded-[12px] grid gap-4'>
                    <label htmlFor='signup-modal' className='btn btn-sm btn-circle absolute right-2 top-2'>✕</label>
                    <h3 className='text-lg font-bold text-center'>Daftar sebagai</h3>
                    <Link to='/register'><button className='btn btn-outline'>Pencari Kos</button></Link>
                    <Link to='/register'><button className='btn btn-outline'>Pemilik Kos</button></Link>
                </div>

            </div>
        </div>
    </div>
    )
}

export default Navbarsign
