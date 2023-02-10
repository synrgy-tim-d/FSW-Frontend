import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import imgsucess from '../../assets/img_success.png';

const PaySuccessHistory = () => {
  const navigate = useNavigate();

  const [timerState, setTimer] = useState(7);

  useEffect(() => {
    setTimer((prev) => prev - 1);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimer((prev) => prev - 1);
      timerState === 0 && navigate('/history');
    }, 1000);
    return () => clearTimeout(timer);
  }, [timerState]);

  return (
    <div className='lg:px-[70px] px-[20px] pt-[25px] lg:pt-[70px] font-[Montserrat] bg-[#FAFAFA] min-h-[700px]'>
      {/* --- Breadcrumb --- */}
      <div className='flex flex-row'>
        <nav className='flex' aria-label='Breadcrumb'>
          <ol className='inline-flex items-center space-x-1 lg:space-x-3'>
            <li className='inline-flex items-center'>
              <Link to='/'>
                <p className='text-[16px] lg:text-[20px] font-[600] text-[#000000] opacity-[.38] hover:text-[#0A008A] hover:underline hover:opacity-100'>
                  Home
                </p>
              </Link>
            </li>
            <li>
              <div className='flex items-center'>
                <svg
                  aria-hidden='true'
                  className='w-4 lg:w-6 text-gray-400'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                <Link to='/history'>
                  <p className='ml-1 lg:ml-2 text-[16px] lg:text-[20px] font-[600] text-[#000000] opacity-[.38] hover:text-[#0A008A] hover:underline hover:opacity-100'>
                    Riwayat
                  </p>
                </Link>
              </div>
            </li>
            <li aria-current='page'>
              <div className='flex items-center'>
                <svg
                  aria-hidden='true'
                  className='w-4 lg:w-6 text-gray-400'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                <span className='ml-1 lg:ml-2 text-[16px] lg:text-[20px] font-[600] text-[#000000] opacity-[.38] hover:text-[#0A008A] hover:underline hover:opacity-100'>
                  Pemesanan Kos
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      <div className='flex flex-row justify-center'>
        <div className='flex flex-col text-center text-black pt-20 lg:pt-32'>
          <img className='self-center mb-3' alt='' src={imgsucess} />
          <h1 className='lg:text-[25px] text-[20px] font-[600] mb-3'>Pembayaran berhasil</h1>
          <p className='lg:text-[16px] text-[12px] font-[500] mb-5 lg:mb-10 lg:w-[560px] mx-1 lg:mx-0'>
            Kami bakal kasih notif apabila pembayaran sudah di konfirmasi pemilik kos. Halaman akan
            ditutup dalam
            <strong className='lg:text-[20px] text-[16px] font-[700]'>
              {' '}
              {`${timerState} detik`}
            </strong>
          </p>
          <Link to='/history'>
            <button
              className='border-0 bg-[#0A008A] self-center rounded-[150px] py-1 lg:py-0 px-10 lg:px-0 outline-none text-white font-[600] text-[14px] lg:text-[16px] lg:w-[419px] lg:h-[43px] hover:bg-[#A0A3FF] hover:text-[#0A008A] focus:bg-black focus:text-white focus:outline-none'
              type='submit'
            >
              Kembali ke riwayat pesanan
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaySuccessHistory;
