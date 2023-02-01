import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import imglogo from '../../assets/LogoNaqosFix.png';
import iconeye from '../../assets/icon_eye-slash.svg';
import icongoogle from '../../assets/icon_google.svg';

const SignUp = () => {
  const postRegister = useMutation((data) => {
    return axios.post('https://be-naqos.up.railway.app/api/user-register/register', data);
  });

  const [register, setRegister] = useState({
    fullname: '',
    username: '',
    phoneNumber: '',
    password: '',
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
    <div className='px-[15px] font-[Montserrat]'>
      <div className='flex flex-row justify-center'>
        <img
          className='lg:mt-[70px] lg:w-[360px] lg:h-[163.72px] mt-[27px] w-[171px] h-[78px]'
          alt=''
          src={ imglogo }
        />
      </div>
      <div className='flex flex-col justify-center mx-auto lg:mt-[48px] lg:w-[526px] mt-[18px]'>
        <span className='lg:mb-[10px] lg:w-[209px] lg:h-[24px] lg:text-[20px] text-[14px] w-[175px] mb-[10px] text-black text-left font-[600]'>
          Nama Lengkap
        </span>
        <input
          className='lg:h-[55px] lg:text-[20px] h-[48px] text-[12px] px-4 text-black font-[600] bg-white rounded-[526px] placeholder-[#b9b9bc] border-2 border-[#dadadc] focus:outline-none focus:border-[#0A008A]'
          type='text'
          name='fullname'
          onChange={handleChange}
          placeholder='Ketikkan nama lengkapmu disini'
        />
        <span className='lg:mt-[20px] lg:mb-[10px] lg:w-[209px] lg:h-[24px] lg:text-[20px] text-[14px] w-[175px] mt-[15px] mb-[10px] text-black text-left font-[600]'>
          Nomor Handphone
        </span>
        <input
          className='lg:h-[55px] lg:text-[20px] h-[48px] text-[12px] px-4 text-black font-[600] bg-white rounded-[526px] placeholder-[#b9b9bc] border-2 border-[#dadadc] focus:outline-none focus:border-[#0A008A]'
          type='text'
          name='phoneNumber'
          onChange={handleChange}
          placeholder='Isi nomor handphone Whatsapp aktif'
        />
        <span className='lg:mt-[20px] lg:mb-[10px] lg:w-[209px] lg:h-[24px] lg:text-[20px] text-[14px] w-[175px] mt-[15px] mb-[10px] text-black text-left font-[600]'>
          Email
        </span>
        <input
          className='lg:h-[55px] lg:text-[20px] h-[48px] text-[12px] px-4 text-black font-[600] bg-white rounded-[526px] placeholder-[#b9b9bc] border-2 border-[#dadadc] focus:outline-none focus:border-[#0A008A]'
          type='text'
          name='username'
          onChange={handleChange}
          placeholder='Ketikkan alamat email'
        />
        <span className='lg:mt-[20px] lg:mb-[10px] lg:w-[209px] lg:h-[24px] lg:text-[20px] text-[14px] w-[175px] mt-[15px] mb-[10px] text-black text-left font-[600]'>
          Password
        </span>
        <input
          className='lg:h-[55px] lg:text-[20px] h-[48px] text-[12px] px-4 text-black font-[600] bg-white rounded-[526px] placeholder-[#b9b9bc] border-2 border-[#dadadc] focus:outline-none focus:border-[#0A008A]'
          type='password'
          name='password'
          onChange={handleChange}
          placeholder='Minimal 6 karakter'
        />
        <img
          className='absolute right-0 lg:right-auto pointer-events-none lg:mt-[365px] lg:ml-[480px] mt-[325px] mr-[30px]'
          src={ iconeye }
        />
      </div>
      <div className='flex flex-row justify-center lg:mt-[29px] mt-[20px]'>
        <Link to='/auth/login'>
          <button
            className='lg:w-[481px] lg:h-[43px] lg:text-[16px] w-[302px] h-[36px] text-[14px] bg-[#0A008A] rounded-[150px] outline-none font-[600] text-white hover:bg-[#A0A3FF] hover:text-[#0A008A] focus:bg-[#000000] focus:text-white focus:outline-none disabled:bg-[#e8e8e9] disabled:text-[#ababaf]'
            type='submit'
            onClick={handleSubmit}
            disabled={postRegister.isLoading || isFormEmpty()}
          >
            Daftarkan akun
          </button>
        </Link>
      </div>
      <div className='flex flex-row justify-center lg:mt-[21px] mt-[5px]'>
        <hr className='lg:mt-3 lg:w-[195px] w-[130px] mt-3 bg-[#999999] border-1 border-[#999999]' />
        <p className='lg:text-[24px] text-[12px] w-max mx-2 font-[600] text-[#999999]'>
          atau
        </p>
        <hr className='lg:mt-3 lg:w-[195px] w-[130px] mt-3 bg-[#999999] border-1 border-[#999999]' />
      </div>
      <div className='flex flex-row justify-center lg:mt-[16px] mt-[5px]'>
        <Link to='/auth/login'>
          <button
            className='lg:w-[481px] lg:h-[44.96px] lg:text-[16px] w-[302px] h-[36px] text-[14px] bg-white border-2 border-[#b9b9bc] outline-none rounded-[150px] font-[600] text-[#B9B9BC] hover:bg-[#E9E9EA] hover:text-white hover:border-[#E9E9EA] focus:border-[#0A008A] focus:bg-white focus:text-[#0A008A] focus:outline-none'
            type='submit'
          >
            Daftar dengan Google
          </button>
        </Link>
        <img
          className='absolute lg:mt-[11px] lg:mr-[230px] mt-2 mr-[200px]'
          src={ icongoogle }
        />
      </div>
      <div className='flex flex-row justify-center lg:mt-[16px] mt-[20px] mb-[70px] gap-2'>
        <p className='lg:text-[16px] text-[14px] text-center text-black font-[600]'>
          Sudah punya akun?
        </p>
        <Link to='/auth/login'>
          <p className='lg:text-[16px] text-[14px] text-center text-[#0A008A] font-[600]'>
            Masuk
          </p>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
