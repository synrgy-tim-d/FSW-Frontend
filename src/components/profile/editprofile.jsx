import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../../utils/http-interceptor';
import appConfig from '../../config';
import axios from 'axios';
import { useMutation, useQuery } from '@tanstack/react-query';
const EditProfile = () => {
  const navigate = useNavigate();

  const [fullname, setFullname] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [username, setUsername] = useState();
  const [picture, setPicture] = useState();
  const [pictureUrl, setPictureUrl] = useState();
  const onChangeFullnameHandler = (e) => {
    const fullnameTemp = e.target.value;
    setFullname(fullnameTemp);
  };
  const onChangePhoneNumberHandler = (e) => {
    const phoneNumberTemp = e.target.value;
    setPhoneNumber(phoneNumberTemp);
  };
  const onChangeUsernameHandler = (e) => {
    const usernameTemp = e.target.value;
    setUsername(usernameTemp);
  };
  const onChangePictureHandler = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPictureUrl(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
      const pictureTemp = e.target.files[0];
      setPicture(pictureTemp);
    }
  };

  const fullnameRef = useRef();
  const phoneNumberRef = useRef();
  const usernameRef = useRef();
  const pictureRef = useRef();

  const onClickPictureButton = (e) => {
    pictureRef.current.click();
  };

  const onClickSaveHandler = async (e) => {
    e.preventDefault();
    try {
      const profilePayload = new FormData();
      profilePayload.append('fullname', fullname);
      profilePayload.append('phoneNumber', phoneNumber);

      const editProfileRequest = await axiosInstance.put(
        `${appConfig.BE_URL}/users/update_data`,
        profilePayload,
      );

      const avatarPayload = new FormData();

      avatarPayload.append('imageFile', picture);

      const editAvatarRequest = await axiosInstance.put(
        `${appConfig.BE_URL}/users/avatar`,
        avatarPayload,
      );

      const editProfileResponse = editProfileRequest.data;
      const editAvatarResponse = editAvatarRequest.data;
      if (editProfileResponse.code === 200 && editAvatarResponse.code === 200) {
        navigate('/profile');
      } else {
        navigate('/profile/editprofile');
      }
    } catch (err) {
      navigate('/profile/editprofile');
    }
  };

  useQuery({
    queryKey:["user"],
    queryFn: async () => {
      const token = localStorage.getItem("AUTH_TOKEN")
      return await axios.get(
        `${appConfig.BE_URL}/users/get`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
    },
    onSuccess: (res) => {
      fullnameRef.current.value = res?.data?.data.fullname;
      setFullname(res?.data?.data.fullname);

      phoneNumberRef.current.value = res?.data?.data.phoneNumber;
      setPhoneNumber(res?.data?.data.phoneNumber);

      usernameRef.current.value = res?.data?.data.username;
      setUsername(res?.data?.data.username);

      setPictureUrl(res?.data?.data.imgUrl)
    },
    onError: (err) => {
      navigate("/");
    }
  })

  return (
    <React.Fragment>
      <ul className='breadcrumb pl-[32px] md:pl-[70px] pt-[30px] md:pt-[25px] font-[Montserrat] font-[600] bg-[#FAFAFA]'>
        <li>
          <Link to='/' className='text-[16px] sm:text-[20px] font-[600] hover:underline'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/profile' className='text-[16px] sm:text-[20px] font-[600] hover:underline'>
            Profile
          </Link>
        </li>
        <li>
          <Link to='/profile/editprofile' className='text-[16px] sm:text-[20px] font-[600] hover:underline'>
            Profile Edit
          </Link>
        </li>
      </ul>
      <div className='w-full grid grid-cols-1 lg:grid-cols-6 grid-flow-row lg:grid-flow-col gap-6 font-[Montserrat] bg-[#FAFAFA] py-8 lg:py-[7.4rem] '>
        <div className='col-span-1 lg:col-span-2 grid grid-row-2 grid-flow-row justify-items-center content-center gap-16'>
          <div className='relative'>
            <div className='rounded-full overflow-hidden max-w-[200px]'>
              <img className='w-full h-auto' src={pictureUrl} alt='' />
            </div>
            <button
              className='absolute bg-[#898484] p-[14px] rounded-full bottom-[5%] right-[1%]'
              onClick={(e) => {
                onClickPictureButton(e);
              }}
            >
              <svg
                viewBox='0 0 20 18'
                fill='currentColor'
                className='w-[20px] h-[20px] fill-white'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M2.5 2.5C1.83696 2.5 1.20107 2.76339 0.732233 3.23223C0.263392 3.70107 0 4.33696 0 5V15C0 15.663 0.263392 16.2989 0.732233 16.7678C1.20107 17.2366 1.83696 17.5 2.5 17.5H17.5C18.163 17.5 18.7989 17.2366 19.2678 16.7678C19.7366 16.2989 20 15.663 20 15V5C20 4.33696 19.7366 3.70107 19.2678 3.23223C18.7989 2.76339 18.163 2.5 17.5 2.5H15.5175C15.186 2.49993 14.8681 2.36819 14.6337 2.13375L13.2325 0.7325C12.7638 0.263627 12.128 0.000141594 11.465 0H8.535C7.87201 0.000141594 7.23623 0.263627 6.7675 0.7325L5.36625 2.13375C5.13188 2.36819 4.81399 2.49993 4.4825 2.5H2.5ZM10 13.75C10.4925 13.75 10.9801 13.653 11.4351 13.4645C11.89 13.2761 12.3034 12.9999 12.6517 12.6517C12.9999 12.3034 13.2761 11.89 13.4645 11.4351C13.653 10.9801 13.75 10.4925 13.75 10C13.75 9.50754 13.653 9.01991 13.4645 8.56494C13.2761 8.10997 12.9999 7.69657 12.6517 7.34835C12.3034 7.00013 11.89 6.72391 11.4351 6.53545C10.9801 6.347 10.4925 6.25 10 6.25C9.00544 6.25 8.05161 6.64509 7.34835 7.34835C6.64509 8.05161 6.25 9.00544 6.25 10C6.25 10.9946 6.64509 11.9484 7.34835 12.6517C8.05161 13.3549 9.00544 13.75 10 13.75Z'
                  fill='white'
                />
              </svg>
            </button>
            <input
              type={'file'}
              className='hidden'
              ref={pictureRef}
              onChange={(e) => {
                onChangePictureHandler(e);
              }}
            />
          </div>
          <div className='text-[24px] sm:text-[30px] font-[600]'>{fullname}</div>
        </div>
        <div className='w-11/12 lg:w-3/4 col-span-1 lg:col-span-4 justify-self-center lg:justify-self-start grid gap-4'>
          <form action='|' className='grid gap-12 bg-inherit rounded-2xl p-8'>
            <div className='text-[20px] sm:text-[25px] font-[600] text-center lg:text-start'>
              Informasi Akun
            </div>
            <div className='grid gap-4 sm:gap-7 text-[12px] sm:text-[16px] font-[500] px-8'>
              <div className='grid grid-flow-row grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4'>
                <div className='col-span-1 font-[700] sm:font-[500]'>
                  <label htmlFor='inline-full-name'>
                    Nama Pengguna
                    <span className='text-[#BA1A1A]'>*</span>
                  </label>
                </div>
                <div className='sm:col-span-2'>
                  <input
                    className='w-full rounded-full border-2 border-blue-700 bg-inherit pl-5 p-1 text-start'
                    type='text'
                    id='inline-full-name'
                    placeholder='Nama Pengguna'
                    ref={fullnameRef}
                    onChange={(e) => {
                      onChangeFullnameHandler(e);
                    }}
                  />
                </div>
              </div>
              <div className='grid grid-flow-row grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4'>
                <div className='col-span-1 font-[700] sm:font-[500]'>
                  <label htmlFor='inline-phone-number'>
                    Nomor HP
                    <span className='text-[#BA1A1A]'>*</span>
                  </label>
                </div>
                <div className='sm:col-span-2'>
                  <input
                    className='w-full rounded-full border-2 border-blue-700 bg-inherit pl-5 p-1 text-start'
                    type='number'
                    id='inline-phone-number'
                    placeholder='+62xxxxxxxxxxx'
                    ref={phoneNumberRef}
                    onChange={(e) => {
                      onChangePhoneNumberHandler(e);
                    }}
                  />
                </div>
              </div>
              <div className='grid grid-flow-row grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4'>
                <div className='col-span-1 font-[700] sm:font-[500]'>
                  <label htmlFor='inline-email'>
                    Email
                    <span className='text-[#BA1A1A]'>*</span>
                  </label>
                </div>
                <div className='sm:col-span-2'>
                  <input
                    className='w-full rounded-full border-2 border-blue-700 bg-inherit pl-5 p-1 text-start'
                    type='email'
                    id='inline-email'
                    placeholder='namapengguna@gmail.com'
                    ref={usernameRef}
                    onChange={(e) => {
                      onChangeUsernameHandler(e);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className='flex'>
              <Link to='/profil' className='w-full grid grid-cols-3 px-8'>
                <button
                  type='button'
                  className='col-start-1 col-span-1 lg:col-span-full rounded-[150px] p-2 sm:py-2 text-[14px] sm:text-[16px]
                  text-white bg-[#0A008A] hover:bg-[#A0A3FF] hover:text-[#FFFFFF] active:bg-black'
                  onClick={(e) => {
                    onClickSaveHandler(e);
                  }}
                >
                  Simpan
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EditProfile;
