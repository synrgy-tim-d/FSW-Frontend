import React from 'react'
import { Link } from 'react-router-dom'
import LogoNaqos from '../../assets/LogoNaqosPolos.png';

const Navbarsign = () => {
    return (
    <div className='navbar grid grid-cols-6 bg-[#FAFAFA] font-[Montserrat] font-[600]'>
        <div className='cols-span-1 pl-4'>
            <a href='/landingPage'>
                <img className='w-full h-auto' src={ LogoNaqos }></img>
            </a>
        </div>
        <div className='col-span-5 flex justify-end pr-4 space-x-6'>
            <Link to='/login'>
                <button type='button' className='btn btn-outline border-2 border-[#0A008A] rounded-[4px] text-[#0A008A] text-[16px] px-6 '>
                    Masuk
                </button>
            </Link>
            <Link to='/register'>
                <button type='button' className='btn btn-active text-[16px] bg-[#0A008A] text-white rounded-[4px] px-6'>
                    Daftar
                </button>
            </Link>
        </div>
    </div>
    )
}

export default Navbarsign
