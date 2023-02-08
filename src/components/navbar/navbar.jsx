import { Link } from 'react-router-dom';
import LogoNaqos from '../../assets/LogoNaqosPolos.png';

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem('AUTH_TOKEN');
    window.location.reload(false);
  };

  return (
    <div className='navbar grid grid-cols-6 bg-[#FAFAFA] font-[Montserrat] font-[400]'>
      <div className='col-span-1 pl-4'>
        <Link to='/'>
          <img className='w-full h-auto' src={LogoNaqos} />
        </Link>
      </div>
      <div className='col-span-5 flex justify-end pr-4'>
        <ul className='menu menu-horizontal px-1 grid grid-flow-col gap-6 text-[#000000]/[0.38] text-[20px]'>
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
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
