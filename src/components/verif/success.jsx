import React from 'react'
import successEmail from "../../assets/VerifEmailSuccess.png"
function EmailSuccess() {
  return (
    <div className='w-full flex flex-wrap gap-5 justify-center '>
        <div className='w-full flex justify-center'>
            <img className='h-[237px] translate-x-[8%]' src={successEmail} />  
        </div>  
        <h1 className='w-full text-center text-3xl font-semibold pt-6'>Verifikasi berhasil!</h1>
        <div className='w-full flex justify-center'>
          <p className='w-[44%] mx-auto text-xl text-center font-semibold'>Selamat! Akunmu sudah berhasil terverifikasi. Klik tombol dibawah untuk masuk ke akun kamu</p>
        </div>
        <button className='btn mt-5 w-2/6 rounded-full bg-[#0A008A] capitalize hover:bg-[#E1E0FF] hover:text-[#4D50C5] hover:border-2 hover:border-[#4D50C5]'>Login</button>
    </div>
  )
}

export default EmailSuccess