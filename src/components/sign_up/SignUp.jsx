import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const postRegister = useMutation((data) => {
    return axios.post('https://be-naqos.up.railway.app/api/user-register/register', data);
  });

  const [register, setRegister] = useState({
    fullname: '',
    username: '',
    phoneNumber: '',
    password: '',
    role: 'PENYEWA',
  });

  const handleChange = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };

  const isFormEmpty = () => {
    return (
      !register.fullname.length ||
      !register.username.length ||
      !register.phoneNumber.length ||
      !register.password.length
    );
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    postRegister.mutate(register);
    navigate('/verif');
  };

  return (
    <div className='px-[15px] w-screen font-[Montserrat] '>
      <div className='flex flex-row justify-center'>
        <img
          className='md:mt-[70px] md:w-[360px] md:h-[163.72px] min-[393px]:mt-[27px] min-[393px]:w-[171px] min-[393px]:h-[78px]'
          alt=''
          src='src/assets/LogoNaqosFix.png'
        />
      </div>
      <div className='flex flex-col justify-center mx-auto md:mt-[48px] md:w-[526px] min-[393px]:mt-[18px]'>
        <span className='md:mb-[11px] md:w-[209px] md:h-[24px] md:text-[20px] min-[393px]:text-[14px] min-[393px]:w-[175px] min-[393px]:mb-[14px] text-black text-left font-[600]'>
          Nama Lengkap
        </span>
        <input
          className='md:h-[55px] md:text-[20px] min-[393px]:h-[48px] min-[393px]:text-[12px] px-4 text-black font-[600] bg-white rounded-[526px] placeholder-[#b9b9bc] border-2 border-[#dadadc] focus:outline-none focus:border-[#0A008A]'
          type='text'
          name='fullname'
          onChange={handleChange}
          placeholder='Ketikkan nama lengkapmu disini'
        />
        <span className='md:mt-[20px] md:mb-[11px] md:w-[209px] md:h-[24px] md:text-[20px] min-[393px]:text-[14px] min-[393px]:w-[175px] min-[393px]:mt-[14px] min-[393px]:mb-[14px] text-black text-left font-[600]'>
          Nomor Handphone
        </span>
        <input
          className='md:h-[55px] md:text-[20px] min-[393px]:h-[48px] min-[393px]:text-[12px] px-4 text-black font-[600] bg-white rounded-[526px] placeholder-[#b9b9bc] border-2 border-[#dadadc] focus:outline-none focus:border-[#0A008A]'
          type='text'
          name='phoneNumber'
          onChange={handleChange}
          placeholder='Isi nomor handphone Whatsapp aktif'
        />
        <span className='md:mt-[20px] md:mb-[11px] md:w-[209px] md:h-[24px] md:text-[20px] min-[393px]:text-[14px] min-[393px]:w-[175px] min-[393px]:mt-[14px] min-[393px]:mb-[14px] text-black text-left font-[600]'>
          Email
        </span>
        <input
          className='md:h-[55px] md:text-[20px] min-[393px]:h-[48px] min-[393px]:text-[12px] px-4 text-black font-[600] bg-white rounded-[526px] placeholder-[#b9b9bc] border-2 border-[#dadadc] focus:outline-none focus:border-[#0A008A]'
          type='text'
          name='username'
          onChange={handleChange}
          placeholder='Ketikkan alamat email'
        />
        <span className='md:mt-[20px] md:mb-[11px] md:w-[209px] md:h-[24px] md:text-[20px] min-[393px]:text-[14px] min-[393px]:w-[175px] min-[393px]:mt-[14px] min-[393px]:mb-[14px] text-black text-left font-[600]'>
          Password
        </span>
        <input
          className='md:h-[55px] md:text-[20px] min-[393px]:h-[48px] min-[393px]:text-[12px] px-4 text-black font-[600] bg-white rounded-[526px] placeholder-[#b9b9bc] border-2 border-[#dadadc] focus:outline-none focus:border-[#0A008A]'
          type='password'
          name='password'
          onChange={handleChange}
          placeholder='Minimal 6 karakter'
        />
        <img
          className='absolute pointer-events-none md:mt-[365px] md:ml-[480px] min-[393px]:mt-[340px] min-[393px]:ml-[330px]'
          src='src/assets/icon_eye-slash.svg'
        />
      </div>
      <div className='flex flex-row justify-center md:mt-[29px] min-[393px]:mt-[20px]'>
        <Link to='/login'>
          <button
            className='md:w-[481px] md:h-[43px] md:text-[16px] md:pt-2 min-[393px]:w-[362px] min-[393px]:h-[36px] min-[393px]:text-[14px] min-[393px]:pt-1 bg-[#0A008A] rounded-[150px] outline-none font-[600] text-white hover:bg-[#A0A3FF] hover:text-[#0A008A] focus:bg-[#000000] focus:text-white focus:outline-none disabled:bg-[#e8e8e9] disabled:text-[#ababaf]'
            type='submit'
            onClick={handleSubmit}
            disabled={postRegister.isLoading || isFormEmpty()}
          >
            Daftarkan akun
          </button>
        </Link>
      </div>
      <div className='flex flex-row justify-center md:mt-[21px] min-[393px]:mt-[5px]'>
        <hr className='md:mt-3 md:w-[195px] min-[393px]:w-[160px] min-[393px]:mt-3 bg-[#999999] border-1 border-[#999999]' />
        <p className='md:text-[24px] min-[393px]:text-[12px] w-max mx-2 font-[600] text-[#999999]'>
          atau
        </p>
        <hr className='md:mt-3 md:w-[195px] min-[393px]:w-[160px] min-[393px]:mt-3 bg-[#999999] border-1 border-[#999999]' />
      </div>
      <div className='flex flex-row justify-center md:mt-[16px] min-[393px]:mt-[5px]'>
        <Link to='/login'>
          <button
            className='md:w-[481px] md:h-[44.96px] md:text-[16px] md:pt-2 min-[393px]:w-[362px] min-[393px]:h-[36px] min-[393px]:text-[14px] min-[393px]:pt-1 bg-white border-2 border-[#E9E9EA] outline-none rounded-[150px] font-[600] text-[#B9B9BC] hover:bg-[#E9E9EA] hover:text-white hover:border-[#E9E9EA] focus:border-[#0A008A] focus:bg-white focus:text-[#0A008A] focus:outline-none'
            type='submit'
          >
            Daftar dengan Google
          </button>
        </Link>
        <img
          className='absolute md:mt-3 md:mr-[230px] min-[393px]:mt-2 min-[393px]:mr-[200px]'
          src='src/assets/icon_google.svg'
        />
      </div>
      <div className='flex flex-row justify-center md:mt-[16px] min-[393px]:mt-[20px] gap-2'>
        <p className='md:text-[16px] min-[393px]:text-[14px] text-center text-black font-[600]'>
          Sudah punya akun?
        </p>
        <Link to='/login'>
          <p className='md:text-[16px] min-[393px]:text-[14px] text-center text-[#0A008A] font-[600]'>
            Masuk
          </p>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
