import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../../utils/http-interceptor';
import logout from '../../assets/Logout-img.svg';
import appConfig from '../../config';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const Password = ({ password }) => {
  const mask = '*'.repeat(password.length);
  return <span>{mask}</span>;
};

const Profile = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({});

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
      setUser(res?.data?.data)
    },
    onError:(err) => {
      navigate("/")
    }
  })
  
  // useEffect(() => {
  //   const fetchCurrentUserProfile = async () => {
  //     try {
  //       const currentUserRequest = await axiosInstance.get(`${appConfig.BE_URL}/users/get`);

  //       const currentUserResponse = currentUserRequest.data;
  //       if (currentUserResponse.code === 200) {
  //         console.log(currentUserResponse);
  //         setUser(currentUserResponse.data);
  //       } else {
  //         navigate('/auth/login');
  //       }
  //     } catch (err) {
  //       console.log(err);
  //       navigate("/auth/login")
  //     }
  //   };

  //   fetchCurrentUserProfile();
  // }, []);

  return (
    <React.Fragment>
      <ul className='breadcrumb pl-[32px] md:pl-[70px] pt-[30px] md:pt-[25px] font-[Montserrat] text-[20px] font-[600] bg-[#FAFAFA]'>
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
      </ul>
      <div className='w-full grid grid-rows-auto lg:grid-cols-6 grid-flow-row lg:grid-flow-col gap-6 font-[Montserrat] bg-[#FAFAFA]'>
        <div className='row-span-1 lg:col-span-2 grid grid-row-2 grid-flow-row justify-items-center content-center gap-16 p-20'>
          <div className='rounded-full overflow-hidden object-cover max-w-[200px]'>
            <img className='w-full h-auto' src={user.imgUrl} alt='avatar' />
          </div>
          <div className='text-[24px] sm:text-[30px] font-[600]'>{user.fullname}</div>
        </div>
        <div className='w-11/12 md:w-3/4 row-span-1 lg:col-span-4 justify-self-center grid gap-4'>
          <form className='grid gap-12 bg-[#C0C1FF]/[0.38] rounded-2xl p-8'>
            <div className='grid grid-cols-2'>
              <div className='text-[17px] sm:text-[25px] font-[600]'>Informasi Akun</div>
              <Link to='/editprofil' className='w-full flex justify-end'>
                <button
                  type='button'
                  className='rounded-[150px] bg-inherit text-[#000000]/[0.38] text-[20px] font-[600]'
                >
                  Edit profil
                </button>
              </Link>
            </div>

            <div className='grid gap-4 text-[12px] sm:text-[16px] font-[500] px-8 pb-12'>
              <div className='grid grid-cols-1 sm:grid-cols-3 grid-flow-row sm:grid-flow-col border-b-2 border-[#0A008A] pb-2 gap-y-2'>
                <div className='col-span-1 font-[700] text-[16px] sm:text-[16px] sm:font-[500]'>
                  Nama Pengguna
                </div>
                <div className='col-span-1 sm:col-span-2'>{user.fullname}</div>
              </div>
              <div className='grid grid-cols-1 sm:grid-cols-3 grid-flow-row sm:grid-flow-col border-b-2 border-[#0A008A] pb-2 gap-y-2'>
                <div className='col-span-1 font-[700] text-[16px] sm:text-[16px] sm:font-[500]'>
                  Nomor HP
                </div>
                <div className='col-span-1 sm:col-span-2'>{user.phoneNumber}</div>
              </div>
              <div className='grid grid-cols-1 sm:grid-cols-3 grid-flow-row sm:grid-flow-col border-b-2 border-[#0A008A] pb-2 gap-y-2'>
                <div className='col-span-1 font-[700] text-[16px] sm:text-[16px] sm:font-[500]'>
                  Email
                </div>
                <div className='col-span-1 sm:col-span-2'>{user.username}</div>
              </div>
            </div>
          </form>

          <form action='|' className='grid gap-12 bg-[#C0C1FF]/[0.38] rounded-2xl p-8'>
            <div className='grid grid-cols-2'>
              <div className='text-[17px] sm:text-[25px] font-[600]'>Login & Security</div>
              <Link to='/gantipassword' className='w-full flex justify-end'>
                <button
                  type='button'
                  className='rounded-[150px] bg-inherit text-[#000000]/[0.38] text-[16px] sm:text-[20px] font-[600]'
                >
                  Ganti Password
                </button>
              </Link>
            </div>
            <div className='text-[16px] font-[500] px-8'>
              <div className='grid grid-cols-1 sm:grid-cols-3 grid-flow-row sm:grid-flow-col border-b-2 border-[#0A008A] pb-2 gap-y-2'>
                <div className='col-span-1 sm:col-span-1 font-[700] text-[16px] sm:text-[16px] sm:font-[500]'>
                  Password
                </div>
                <Password password={'Password'} />
              </div>
            </div>
          </form>

          <div className='rounded-2xl'>
            <div className='flex justify-end'>
              <label
                htmlFor='profile-modal'
                className='btn no-animatio text-[#BA1A1A] text-[20px] font-[600] 
                bg-inherit border-none capitalize py-6 pb-20'
              >
                Log Out
              </label>
            </div>
            <input type='checkbox' id='profile-modal' className='modal-toggle' />
            <div className='modal inset-0 z-0 bg-black/50 p-7 lg:p-0'>
              <div className='modal-box bg-white p-16 rounded-[12px] text-[#000000] grid gap-4 shadow-2xl '>
                <div className='logout-img justify-self-center pb-8'>
                  <img src={logout} alt='' />
                </div>
                <h3 className='font-bold text-lg text-center'>Apakah kamu yakin ingin keluar</h3>
                <p className='text-center'>
                  Kamu akan memerlukan akses login untuk dapat masuk kembali
                </p>
                <div className='grid grid-flow-col auto-cols-max justify-center gap-4 font-[600] text-[16px]'>
                  <label
                    htmlFor='profile-modal'
                    className='btn no-animation rounded-[4px] bg-white text-[#0A008A] border-2 border-[#0A008A] hover:bg-white'
                  >
                    Batalkan
                  </label>
                  <Link to='/'>
                    <label
                      htmlFor='logout'
                      className='btn no-animation rounded-[4px] bg-[#0A008A] text-white border-2 border-white hover:bg-[#0A008A] hover:border-white'
                    >
                      Keluar
                    </label>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile;
