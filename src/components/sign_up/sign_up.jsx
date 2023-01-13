import React from 'react'

const SignUp = () => {
  return (
    <div className='container bg-white font-[Montserrat]'>
      <div className='flex justify-center'>
        <img
          className='mt-[70px] w-[360px] h-[163.72px] object-cover'
          alt=''
          src='src/assets/LogoNaqosFix.png'
        />
      </div>
      <div className='flex flex-col justify-center mt-[48px] w-max mx-auto'>
        <span className='mb-[11px] w-[209px] h-[24px] text-black text-left text-[20px] font-[600]'>
          Nama Lengkap
        </span>
        <input
          className='px-4 w-[526px] h-[55px] text-black text-[20px] font-[600] bg-white rounded-[526px] placeholder-[#46464f]/40 border-2 border-[#46464f]/20 focus:outline-none focus:border-[#46464f]/40 block'
          type='text'
          placeholder='Ketikkan nama lengkapmu disini'
        />
      </div>
      <div className='flex flex-col justify-center mt-[20px] w-max mx-auto'>
        <span className='mb-[11px] w-[209px] h-[24px] text-black text-left text-[20px] font-[600]'>
          Nomor Handphone
        </span>
        <input
          className='px-4 w-[526px] h-[55px] text-black text-[20px] font-[600] bg-white rounded-[526px] placeholder-[#46464f]/40 border-2 border-[#46464f]/20 focus:outline-none focus:border-[#46464f]/40 block'
          type='text'
          placeholder='Isi nomor handphone Whatsapp aktif'
        />
      </div>
      <div className='flex flex-col justify-center mt-[20px] w-max mx-auto'>
        <span className='mb-[11px] w-[209px] h-[24px] text-black text-left text-[20px] font-[600]'>
          Email
        </span>
        <input
          className='px-4 w-[526px] h-[55px] text-black text-[20px] font-[600] bg-white rounded-[526px] placeholder-[#46464f]/40 border-2 border-[#46464f]/20 focus:outline-none focus:border-[#46464f]/40 block'
          type='text'
          placeholder='Ketikkan alamat email'
        />
      </div>
      <div className='flex flex-col justify-center mt-[20px] w-max mx-auto'>
        <span className='mb-[11px] w-[209px] h-[24px] text-black text-left text-[20px] font-[600]'>
          Password
        </span>
        <input
          className='px-4 w-[526px] h-[55px] text-black text-[20px] font-[600] bg-white rounded-[526px] placeholder-[#46464f]/40 border-2 border-[#46464f]/20 focus:outline-none focus:border-[#46464f]/40'
          type='password'
          placeholder='Minimal 6 karakter'
        />
        <img
          className='absolute pointer-events-none mt-8 ml-[480px]'
          src='src/assets/icon_eye-slash.svg'
        />
      </div>
      <div className='flex flex-row justify-center mt-[29px]'>
        <button
          className='w-[449px] h-[43px] bg-[#0A008A] rounded-[150px] outline-none text-[16px] font-[600] text-white hover:bg-[#0A008A]/75 hover:border-none focus:outline-none'
          type='submit'
        >
          Daftarkan akun
        </button>
      </div>
      <div className='flex flex-row justify-center mt-[21px]'>
        <hr className='mt-2 w-[195px] bg-[#999999] border-1 border-[#999999]' />
        <p className='mt-[-5px] w-[70px] h-[36px] text-center text-[24px] font-[600] text-[#999999]'>
          atau
        </p>
        <hr className='mt-2 w-[195px] bg-[#999999] border-1 border-[#999999]' />
      </div>
      <div className='flex flex-row justify-center mt-[16px]'>
        <button
          className='w-[481px] h-[44.96px] bg-white border-2 border-[#46464F] opacity-[.38] outline-none hover:border-[#46464F] hover:opacity-[.76] rounded-[150px] text-[16px] font-[600] text-[#46464F] focus:outline-none'
          type='submit'
        >
          Daftar dengan Google
        </button>
        <img className='absolute mt-3 mr-[230px]' src='src/assets/icon_google.svg' />
      </div>
      <div className='flex flex-row justify-center mt-[16px]'>
        <p className='text-center text-black text-[16px] font-[600] w-[250px] h-[36px]'>
          Sudah punya akun?{' '}
          <a className='text-black hover:text-black' href='/login'>
            Masuk
          </a>
        </p>
      </div>
    </div>
  )
}

export default SignUp