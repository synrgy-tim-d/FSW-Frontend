import React from 'react';
import successEmail from '../../assets/VerifEmailSuccess.png';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function EmailSuccess() {
  const navigate = useNavigate();
  const { otp } = useParams();

  const getOtp = useQuery({
    queryKey: ['otp'],
    queryFn: () =>
      axios.get(`https://be-naqos.up.railway.app/api/auth/register-confirm-otp/${otp}`),
  });

  if (getOtp.isLoading) {
    return <h1>loading...</h1>;
  }

  if (getOtp.isError) {
    return <h1>Error</h1>;
  }

  return (
    <div className='w-full flex flex-wrap gap-2 lg:gap-5 justify-center '>
      <div className='w-full flex justify-center'>
        <img className='h-[120px] lg:h-[237px] translate-x-[8%]' src={successEmail} />
      </div>
      <h1 className='w-full text-center text-lg lg:text-3xl font-bold lg:font-semibold pt-6'>
        Verifikasi Berhasil!
      </h1>
      <div className='w-full flex justify-center'>
        <p className='lg:w-[44%] w-[80%] mx-auto lg:text-xl text-center font-semibold'>
          Selamat! Akunmu sudah berhasil terverifikasi. Klik tombol dibawah untuk masuk ke akun kamu
        </p>
      </div>

      <button
        onClick={() => navigate('/login')}
        className='btn mt-5 w-[90%] lg:w-2/6 rounded-full text-white bg-[#0A008A] capitalize hover:bg-[#E1E0FF] hover:text-[#4D50C5] hover:border-2 hover:border-[#4D50C5]'
      >
        Kembali ke Login
      </button>
    </div>
  );
}

export default EmailSuccess;
