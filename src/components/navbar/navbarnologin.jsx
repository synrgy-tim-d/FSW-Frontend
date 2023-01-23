import React from 'react'
import { Link } from 'react-router-dom'

const Navbarsign = () => {
    return (
    <div className='navbar bg-base-100'>
        <div className='flex-1'>
            <a href='/landingPage'>
                <img src='src/assets/LogoNaqosFix.png'></img>
            </a>
        </div>

        <div className='flex-none'>
            <button className='btn btn-outline'>Masuk</button>
            <button className='btn btn-active'>Daftar</button>
        </div>
    </div>
    )
}

export default Navbarsign
