import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const changepass = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onFormSubmitHandler = (data) => {
    console.log(data);
  };

  return (
    <>
      <ul className='breadcrumb pl-[32px] md:pl-[70px] pt-[30px] md:pt-[25px] font-[Montserrat] font-[600] bg-[#FAFAFA]'>
        <li>
          <Link to='/' className='text-[16px] sm:text-[20px] font-[600] hover:underline'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/profil' className='text-[16px] sm:text-[20px] font-[600] hover:underline'>
            Profile
          </Link>
        </li>
        <li>
          <Link
            to='/gantipassword'
            className='text-[16px] sm:text-[20px] font-[600] hover:underline'
          >
            Ganti Password
          </Link>
        </li>
      </ul>
      <div className='w-full grid grid-cols-2 grid-flow-col font-[Montserrat] font-[600] bg-[#FAFAFA]'>
        <div className='col-span-2 md:col-span-1'>
          <form
            action='|'
            className='w-full grid gap-12 mt-12 md:m-12'
            onSubmit={handleSubmit(onFormSubmitHandler)}
          >
            <div className='text-[20px] md:text-[25px] weight-[600] ml-4'>Ganti Password</div>
            <div
              className='grid grid-rows-2 grid-flow-row gap-2 md:gap-6
            text-[16px] lg:text-[20px] font-[500] px-16'
            >
              <div>
                <label htmlFor='inline-password'>Password Lama</label>
              </div>
              <div>
                <input
                  className='w-full rounded-[526px] pl-5 p-2 border-2 border-[#46464F]/[0.20] bg-inherit'
                  id='inline-password'
                  type='password'
                  placeholder='Masukkan password lama'
                  name='oldPassword'
                  {...register('oldPassword', {
                    required: true,
                    minLength: 6,
                  })}
                />
                {errors.oldPassword && errors.oldPassword.type === 'required' && (
                  <span className='text-red-500 text-sm'>Password harus diisi</span>
                )}

                {errors.oldPassword && errors.oldPassword.type === 'minLength' && (
                  <span className='text-red-500 text-sm'>Password minimal 6 karakter</span>
                )}
              </div>
              <div>
                <label htmlFor='inline-new-password'>Password Baru</label>
              </div>
              <div>
                <input
                  className='w-full rounded-[526px] pl-5 p-2 border-2 border-[#46464F]/[0.20] bg-inherit'
                  id='inline-new-password'
                  type='password'
                  placeholder='Minimal 6 karakter'
                  name='newPassword'
                  {...register('newPassword', {
                    required: true,
                    minLength: true,
                  })}
                />
                {errors.confirmPassword && errors.confirmPassword.type === 'required' && (
                  <span className='text-red-500 text-sm'>Password harus diisi</span>
                )}

                {errors.confirmPassword && errors.confirmPassword.type === 'minLength' && (
                  <span className='text-red-500 text-sm'>Password minimal 6 karakter</span>
                )}
              </div>
              <div>
                <label htmlFor='inline-confirm-password'>Masukkan Kembali Password Baru</label>
              </div>
              <div>
                <input
                  className='w-full rounded-[526px] pl-5 p-2 border-2 border-[#46464F]/[0.20] bg-inherit'
                  id='inline-confirm-password'
                  type='password'
                  placeholder='Sama dengan sebelumnya'
                  name='confirmPassword'
                  {...register('confirmPassword', {
                    required: true,
                    minLength: 6,
                  })}
                />
                {errors.confirmPassword && errors.confirmPassword.type === 'required' && (
                  <span className='text-red-500 text-sm'>Password harus diisi</span>
                )}

                {errors.confirmPassword && errors.confirmPassword.type === 'minLength' && (
                  <span className='text-red-500 text-sm'>Password minimal 6 karakter</span>
                )}
              </div>
            </div>
            <div className='flex justify-center'>
              {/* <Link to='/profil' className='w-[60%] md:w-[70%]'> */}
              <input
                id='reset-password'
                type='submit'
                className='w-full rounded-[150px] text-center py-2 text-[14px] sm:text-[16px] 
                  text-white bg-[#0A008A] hover:bg-[#A0A3FF] hover:text-[#FFFFFF] active:bg-black'
                value='Reset Password'
              ></input>
              {/* </Link> */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default changepass;
