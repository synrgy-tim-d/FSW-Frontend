import React from 'react'
import logo from "../assets/LogoNaqosFix.png"
import EmailPending from '../components/verif/pending'
import EmailSuccess from '../components/verif/success'
function Verif() {
  return (
    <div className='flex flex-wrap w-full gap-28 py-14'>
        <div className='w-full flex justify-center'>
            <img className='w-[360px]' src={logo} alt="logo" />
        </div>
        {/* <EmailSuccess /> or <EmailPending /> */}
        <EmailSuccess />
    </div>
  )
}

export default Verif