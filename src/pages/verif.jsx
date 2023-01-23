import React from 'react'
import logo from "../assets/LogoNaqosFix.png"
import EmailPending from '../components/verif/pending'
import EmailSuccess from '../components/verif/success'
function Verif() {
  return (
    <div className='flex flex-wrap w-full lg:gap-28 gap-16 py-14'>
        <div className='w-full flex justify-center'>
            <img className='lg:w-[360px] w-[200px]' src={logo} alt="logo" />
        </div>
        {/* <EmailSuccess /> or <EmailPending /> */}
        <EmailPending />
    </div>
  )
}

export default Verif