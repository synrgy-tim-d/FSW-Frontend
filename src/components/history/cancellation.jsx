import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import imagefour from '../../assets/img_kosFour.png';
import imagefive from '../../assets/img_kosFive.png';
import imagesix from '../../assets/img_kosSix.png';
import iconlocation from '../../assets/icon_location.svg';
import iconarrowright from '../../assets/icon_arrow-right-2.svg';
import iconcancel from '../../assets/icon_cancel.svg';
import iconarrowdown from '../../assets/icon_arrow-down.svg';

const CancellationHistory = () => {
  const [cancels, setCancels] = useState([]);

  useEffect(() => {
    const cancelList = [
      {
        id: 1,
        name: 'Kos Jahe',
        location: {
          name: 'Tanggerang',
        },
        bookId: '00000001',
        inDate: 'April 01, 23',
        outDate: 'April 30,23',
        date: 'Fri, 24 March 2023',
        img: imagefour,
      },
      {
        id: 2,
        name: 'Kos Timun',
        location: {
          name: 'Bogor',
        },
        bookId: '00000002',
        inDate: 'April 01, 23',
        outDate: 'May 01, 23',
        date: 'Sat, 25 March 2023',
        img: imagefive,
      },
      {
        id: 3,
        name: 'Kos Wortel',
        location: {
          name: 'Bogor',
        },
        bookId: '00000003',
        inDate: 'April 11, 23',
        outDate: 'May 11, 23',
        date: 'Sun, 26 March 2023',
        img: imagesix,
      },
    ];
    setCancels(cancelList);
  }, []);

  return (
    <div className='lg:px-[70px] px-[20px] pt-[25px] font-[Montserrat] bg-[#FAFAFA] min-h-[700px]'>
      {/* --- Breadcrumb --- */}
      <div className='flex flex-row'>
        <nav className='flex' aria-label='Breadcrumb'>
          <ol className='inline-flex items-center space-x-1 lg:space-x-3'>
            <li className='inline-flex items-center'>
              <Link to='/'>
                <p className='text-[16px] lg:text-[20px] font-[600] text-[#000000] opacity-[.38] hover:text-[#0A008A] hover:opacity-100 hover:underline'>
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
                  <p className='ml-1 lg:ml-2 text-[16px] lg:text-[20px] font-[600] text-[#000000] opacity-[.38] hover:text-[#0A008A] hover:opacity-100 hover:underline'>
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
                  Pembatalan
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      {/* --- Options & Content --- */}

      {/* --- DISPLAY PC --- */}
      <div className='flex flex-col lg:flex-row'>
        {/* --- Options --- */}
        <div className='flex flex-col text-black mt-[20px] lg:mt-[60px] lg:w-1/4'>
          <div className='hidden lg:block'>
            <Link to='/history'>
              <p className='text-[#9b9b9b] hover:text-[#9b9b9b] text-[25px] font-[500] mb-[20px] text-left'>
                Pemesanan Kos
              </p>
            </Link>
            <hr className='mb-[20px]'></hr>
            <Link to='/history/confirmation'>
              <p className='text-[#9b9b9b] hover:text-[#0A008A] text-[25px] font-[500] mb-[20px] text-left'>
                Menunggu Konfirmasi
              </p>
            </Link>
            <hr className='mb-[20px]'></hr>
            <Link to='/history/payment'>
              <p className='text-[#9b9b9b] hover:text-[#0A008A] text-[25px] font-[500] mb-[20px] text-left'>
                Pembayaran
              </p>
            </Link>
            <hr className='mb-[20px]'></hr>
            <Link to='/history/cancellation'>
              <p className='text-[#0A008A] hover:text-[#0A008A] text-[25px] font-[500] mb-[20px] text-left'>
                Pembatalan
              </p>
            </Link>
            <hr className='mb-[20px]'></hr>
          </div>
          {/* --- Dropdown Navigasi Mobile --- */}
          <div className='dropdown lg:hidden'>
            <label
              tabIndex={0}
              className='justify-between cursor-pointer inline-flex items-center w-full h-[48px] mb-[20px] px-4 p-0 bg-white border-2 border-[#0A008A] rounded-[8px] outline-none text-[20px] font-[500] text-[#0A008A] hover:bg-[#f3f4ff] hover:border-[#0A008A] hover:text-[#0A008A] active:bg-[#0A008A] active:text-white'
            >
              Navigasi Riwayat
              <img className='' alt='' src={iconarrowdown} />
            </label>
            <ul
              tabIndex={0}
              className='dropdown-content mt-[-10px] menu py-0 px-0 shadow bg-base-100 rounded-box w-full drop-shadow-md'
            >
              <Link to='/history'>
                <p className='text-[#9b9b9b] hover:text-[#0A008A] text-[20px] font-[500] m-[15px]'>
                  Pemesanan Kos
                </p>
              </Link>
              <hr className=''></hr>
              <Link to='/history/confirmation'>
                <p className='text-[#9b9b9b] hover:text-[#0A008A] text-[20px] font-[500] m-[15px]'>
                  Menunggu Konfirmasi
                </p>
              </Link>
              <hr className=''></hr>
              <Link to='/history/payment'>
                <p className='text-[#9b9b9b] hover:text-[#0A008A] text-[20px] font-[500] m-[15px]'>
                  Pembayaran
                </p>
              </Link>
              <hr className=''></hr>
              <Link to='/history/cancellation'>
                <p className='text-[#0A008A] hover:text-[#0A008A] text-[20px] font-[500] m-[15px]'>
                  Pembatalan
                </p>
              </Link>
            </ul>
          </div>
        </div>

        {/* --- Content if Empty --- */}
        {/* <div className='flex flex-col text-center text-black ml-[80px] mt-[181px] mb-[100px]'>
          <img
            className='w-[273px] h-[254px] self-center mb-[44px]'
            alt=''
            src='src/assets/img_noCancelHistory.png'
          />
          <h1 className='text-[31px] font-[600] mb-[20px] w-[558px]'>Belum ada pembatalan baru</h1>
          <p className='text-[20px] font-[500] mb-[50px] w-[558px]'>
            Belum ada informasi terkait pembatalan pemesanan kos
          </p>
          <button
            className='border-0 bg-[#0A008A] self-center rounded-[150px] outline-none text-white font-[600] text-[16px] w-[419px] h-[43px] hover:bg-[#A0A3FF] hover:text-[#0A008A] focus:bg-black focus:text-white focus:outline-none'
            type='submit'
          >
            Kembali
          </button>
        </div> */}

        {/* --- Content if there is Data --- */}
        <div className='flex flex-col lg:mx-[70px] lg:mt-[60px] mt-[10px] mb-[100px] lg:w-3/4'>
          {cancels.map((cancel, index) => {
            return (
              <React.Fragment key={index}>
                <div>
                  <div className='flex flex-row py-2 lg:py-4 text-black'>
                    <img className='w-[130px] lg:w-[200px] self-center' alt='' src={cancel.img} />
                    <div className='flex flex-col ml-[20px] lg:ml-[40px] text-left lg:w-[265px] space-y-[-5px] lg:space-y-0'>
                      <h1 className='text-[14px] lg:text-[20px] font-[600]'>{cancel.name}</h1>
                      <div className='flex flex-row'>
                        <img className='w-[10px] lg:w-auto' alt='' src={iconlocation} />
                        <p className='text-[12px] lg:text-[16px] font-[500] ml-1 lg:ml-2 lg:my-1'>
                          {cancel.location.name}
                        </p>
                      </div>
                      <p className='text-[12px] lg:text-[16px] font-[500] lg:mb-3'>
                        Booking ID: {cancel.bookId}
                      </p>
                      <div className='flex flex-row'>
                        <div className='flex flex-col text-center'>
                          <p className='text-[10px] lg:text-[12px] font-[400] lg:mb-1'>Check in</p>
                          <p className='text-[10px] lg:text-[16px] font-[600] lg:font-[400]'>
                            {cancel.inDate}
                          </p>
                        </div>
                        <div className='flex flex-col mx-[10px] lg:mx-[12px] justify-center'>
                          <img className='w-[16px] lg:w-auto' alt='' src={iconarrowright} />
                        </div>
                        <div className='flex flex-col text-center'>
                          <p className='text-[10px] lg:text-[12px] font-[400] lg:mb-1'>Check out</p>
                          <p className='text-[10px] lg:text-[16px] font-[600] lg:font-[400]'>
                            {cancel.outDate}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='lg:flex flex-col flex-1 w-[150px] text-right hidden'>
                      <p className='mt-[85px] text-[#4A4A4A] text-[12px] font-[400]'>
                        {cancel.date}
                      </p>
                      <div className='flex flex-row justify-end'>
                        <img className='' alt='' src={iconcancel} />
                        <p className='text-[12px] font-[600] text-[#BA1A1A] ml-2 mb-[4px] mt-1'>
                          Cancelled
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* --- Status di Mobile */}
                  <div className='flex flex-col flex-1 lg:hidden'>
                    <p className='text-[#4A4A4A] text-[12px] font-[400]'>{cancel.date}</p>
                    <div className='flex flex-row gap-1 mb-2'>
                      <img className='w-[14px]' alt='' src={iconcancel} />
                      <p className='text-[12px] font-[600] text-[#BA1A1A]'>Cancelled</p>
                    </div>
                  </div>
                  <hr className='mb-4 lg:mb-8'></hr>
                </div>
              </React.Fragment>
            );
          })}
          <h1 className='text-center text-black text-[16px] lg:text-[20px] font-[600] opacity-[.38]'>
            Lihat lebih banyak lagi
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CancellationHistory;
