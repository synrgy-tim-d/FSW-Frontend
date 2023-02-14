import React, { useEffect, useRef, useState } from 'react';
import LogoNaqos from '../../assets/LogoNaqosPolos.png';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { Link, useNavigate } from 'react-router-dom';
import NotificationBody from '../notification/NotificationBody';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import appConfig from '../../config';
const useOutsideAlerter = (ref, setIsNotificationHidden) => {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsNotificationHidden(true);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}


const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('AUTH_TOKEN');
    localStorage.removeItem('REFRESH_TOKEN');
    navigate("/")
    window.location.reload(false);
  };

  const [isOpen, setIsOpen] = useState(false);
  
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };


  const [isNotificationHidden, setIsNotificationHidden] = useState(true)
  const onClickNotificationHandler = (e) => {
    e.preventDefault();
    setIsNotificationHidden(false);
  }

  const [notifications,setNotifications] = useState([]);

  useQuery({
    queryKey:['notifications'],
    queryFn: async () => {
        const token = localStorage.getItem("AUTH_TOKEN")
        return await axios.get(
          `${appConfig.BE_URL}/notifications/get`,
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );
    },
    onSuccess: (res) => {
        setNotifications(res?.data?.notificationResponses)
    },
    onError: () => {
        setNotifications([false])
    }
  })

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef,setIsNotificationHidden)
  // useEffect(() => {
  //   const handleClickOutside = (e) => {
  //     if (ref.current && !ref.current.contains(e.target)) {
  //       setIsNotificationHidden(true);
  //     }
  //   }

  //   document.addEventListener("mousedown", handleClickOutside);
  // })


  return (
    <React.Fragment>
      <div className='fixed drop-shadow-xl px-4  drop-shadow-black/[0.38] z-[100] navbar grid grid-cols-6 bg-[#FAFAFA] font-[Montserrat] font-[400] w-full '>
        <div className='col-span-1 max-w-[170px] translate-x-[18%] py-3'>
          <Link to='/'>
            <img className='w-full h-auto' src={LogoNaqos} />
          </Link>
        </div>
        <div className='col-span-5 flex justify-end pr-4'>
          <button
            onClick={toggleDrawer}
            className={` ${isOpen ? '' : ''} 
            lg:hidden px-4 py-2 rounded-lg `}
          >
            {isOpen ? (
              <svg
                className='w-6 h-6 fill-current'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
              >
                <path
                  d='M10 8.586L2.929 1.515 1.415 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z'
                  fill='currentColor'
                />
              </svg>
            ) : (
              <svg
                className='w-6 h-6 fill-current'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
              >
                <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
              </svg>
            )}
          </button>
          <Drawer open={isOpen} onClose={toggleDrawer} direction='right' className='block lg:hidden'>
            <ul
              className='menu menu-horizontal grid grid-flow-row gap-6 
            text-[#000000]/[0.38] text-[20px] lg:bg-inherit px-8 py-4'
            >
              <li>
                <Link to='/wishlist' className='font-[600]'>
                  Wishlist
                </Link>
              </li>
              <li>
                <Link to='/history' className='font-[600]'>
                  Riwayat
                </Link>
              </li>
              <li>
                <a className='font-[600]'>Notifikasi</a>
              </li>
              <li>
                <Link to='/profil' className='font-[600] hover:bg-[#F2EFFF]'>
                  Profil
                </Link>
              </li>
              <li>
                <a onClick={handleLogout} className='font-[600] hover:bg-[#F2EFFF]'>
                  Logout
                </a>
              </li>
            </ul>
          </Drawer>
          <ul
            className='menu menu-horizontal hidden lg:grid grid-flow-col gap-6 lg:w-auto 
            text-[#000000]/[0.38] text-[20px] lg:bg-inherit px-8 py-4 lg:p-0 '
          >
            <li>
              <Link to='/wishlist' className='font-[600]'>
                Wishlist
              </Link>
            </li>
            <li>
              <Link to='/history' className='font-[600]'>
                Riwayat
              </Link>
            </li>
            <li className=''>
              <a className='font-[600]' onClick={(e) => {onClickNotificationHandler(e)}} >Notifikasi</a>
              <div className='w-full' ref={wrapperRef} >
                <NotificationBody  notifications = {notifications} isNotificationHiddenState={{isNotificationHidden, setIsNotificationHidden}}/>
              </div>
            </li>
            <li tabIndex={0}>
              <a className='font-[600]'>
                Profil
                <svg
                  className='fill-current'
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                >
                  <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
                </svg>
              </a>
              <ul className='p-2 bg-base-100'>
                <li>
                  <Link to='/profile' className='font-[600] hover:bg-[#F2EFFF]'>
                    Profil
                  </Link>
                </li>
                <li>
                  <a onClick={handleLogout} className='font-[600] hover:bg-[#F2EFFF]'>
                    Logout
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className='w-full h-[80px] md:h-[105px] lg:h-[130px] bg-[#FAFAFA]'></div>
    </React.Fragment>
  );
};

export default Navbar;
