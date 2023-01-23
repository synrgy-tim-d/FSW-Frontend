import React from 'react'

const Navbarsign = () => {
    return (
    <div className='navbar bg-base-100'>
        <div className='flex-1'>
            <a href='/landingPage'>
                <img src='src/assets/LogoNaqosFix.png'></img>
            </a>
        </div>

        <div className='flex-none'>
            {/* <button className='btn btn-outline'>Masuk</button> */}
            {/* <button className='btn btn-active'>Daftar</button> */}
            <Link to='/login' >
                <button type='button' className='btn btn-outline'>
                    Masuk
                </button>
            </Link>

            <Link to='/register' >
                <button type='button' className='btn btn-active'>
                    Daftar
                </button>
            </Link>
        </div>
    </div>
    )
}

export default Navbarsign
