import React from 'react'
import forgetEmailSucces from "../../assets/ForgetEmailSuccess.png"
function ForgetSuccess() {
  return (
    <div className='w-full flex flex-wrap gap-2 lg:gap-5 justify-center '>
        <div className='w-full flex justify-center'>
            <img className='h-[120px] lg:h-[164px] translate-x-[16%]' src={forgetEmailSucces} />  
        </div>  
        <h1 className='w-full text-center text-lg lg:text-3xl font-bold lg:font-semibold pt-6'>Berhasil reset password!</h1>
        <div className='w-full flex justify-center'>
          <p className='lg:w-[44%] w-[80%] mx-auto lg:text-xl text-center font-semibold'>Sekarang kamu bisa pakai password baru untuk login ke akunmu</p>
        </div>
        <button className='btn mt-5 w-[90%] lg:w-1/2 rounded-full bg-[#0A008A] capitalize hover:bg-[#E1E0FF] hover:text-[#4D50C5] hover:border-2 hover:border-[#4D50C5]'>Login Kembali</button>
    </div>
  )
}

export default ForgetSuccess