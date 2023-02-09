import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import icondownload from '../../assets/icon_download.svg';
import iconcompleted from '../../assets/icon_completed.svg';
import iconarrowdown from '../../assets/icon_arrow-down.svg';

const PaymentHistory = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const paymentList = [
      {
        id: 1,
        name: 'Kos Alamanda',
        bookId: '00000001',
        date: 'Fri, 24 March 2023 18:07 WIB',
        price: '1.000.000',
      },
      {
        id: 2,
        bookId: '00000002',
        name: 'Kos Beringin',
        date: 'Sat, 26 March 2023 23:17 WIB',
        price: '1.500.000',
      },
      {
        id: 3,
        bookId: '00000003',
        name: 'Kos Semak-Semak',
        date: 'Sun, 27 March 2023 13:42 WIB',
        price: '1.200.000',
      },
      {
        id: 4,
        bookId: '00000004',
        name: 'Kos Guntung',
        date: 'Tue, 29 March 2023 07:13 WIB',
        price: '1.350.000',
      },
    ];
    setPayments(paymentList);
  }, []);

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
                  Pembayaran
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      {/* --- Options & Content --- */}

      {/* --- DISPLAY PC ---- */}
      <div className='flex flex-col lg:flex-row'>
        {/* --- Options --- */}
        <div className='flex flex-col text-black mt-[20px] lg:mt-[60px] lg:w-1/4'>
          <div className='hidden lg:block'>
            <Link to='/history'>
              <p className='text-[#9b9b9b] hover:text-[#0A008A] text-[25px] font-[500] mb-[20px] text-left'>
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
              <p className='text-[#0A008A] hover:text-[#9b9b9b] text-[25px] font-[500] mb-[20px] text-left'>
                Pembayaran
              </p>
            </Link>
            <hr className='mb-[20px]'></hr>
            <Link to='/history/cancellation'>
              <p className='text-[#9b9b9b] hover:text-[#0A008A] text-[25px] font-[500] mb-[20px] text-left'>
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
                <p className='text-[#0A008A] hover:text-[#0A008A] text-[20px] font-[500] m-[15px]'>
                  Pembayaran
                </p>
              </Link>
              <hr className=''></hr>
              <Link to='/history/cancellation'>
                <p className='text-[#9b9b9b] hover:text-[#0A008A] text-[20px] font-[500] m-[15px]'>
                  Pembatalan
                </p>
              </Link>
            </ul>
          </div>
        </div>

        {/* --- Content if Empty --- */}
        {/* <div className='flex flex-col text-center text-black ml-[80px] mt-[225px] mb-[100px]'>
          <img
            className='w-[127.4px] h-[193.91px] self-center mb-[39px]'
            alt=''
            src='src/assets/img_noPaymentHistory.png'
          />
          <h1 className='text-[31px] font-[600] mb-[20px] w-[558px]'>Belum ada pembayaran baru</h1>
          <p className='text-[20px] font-[500] mb-[50px] w-[558px]'>
            Yuk, segera lakukan pemesanan kos dan selesaikan pembayaran dengan mudah!
          </p>
          <button
            className='border-0 bg-[#0A008A] self-center rounded-[150px] outline-none text-white font-[600] text-[16px] w-[419px] h-[43px] hover:bg-[#A0A3FF] hover:text-[#0A008A] focus:bg-black focus:text-white focus:outline-none'
            type='submit'
          >
            Telurusi Kos
          </button>
        </div> */}

        {/* --- Content if there is Data --- */}
        <div className='flex flex-col lg:mx-[70px] lg:mt-[60px] mt-[10px] mb-[100px] lg:w-3/4'>
          {payments.map((payment, index) => {
            return (
              <React.Fragment key={index}>
                <div>
                  <div className='flex flex-row py-2 lg:py-4 text-black'>
                    <div className='flex flex-col text-left'>
                      <h1 className='lg:mb-1 text-[14px] lg:text-[20px] font-[600]'>
                        {payment.name} [Booking ID: {payment.bookId}]
                      </h1>
                      <p className='mb-2 text-[#4A4A4A] text-[12px] font-[400]'>
                        {payment.date}
                      </p>
                      <div className='flex flex-row cursor-pointer'>
                        <img className='w-[12px] lg:w-auto' alt='' src={icondownload} />
                        <p className='ml-2 text-[#46464F] opacity-[.38] text-[12px] lg:text-[16px] font-[600]'>
                          Download detail pembayaran
                        </p>
                      </div>
                    </div>
                    <div className='flex flex-col flex-1 lg:pt-[20px] text-right'>
                      <h1 className='lg:mb-2 text-[14px] lg:text-[20px] font-[500]'>Rp {payment.price}</h1>
                      <div className='flex flex-row justify-end gap-2'>
                        <img className='w-[14px] lg:w-auto' alt='' src={iconcompleted} />
                        <p className='text-[12px] font-[600] text-[#008A3F]'>Completed</p>
                      </div>
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

export default PaymentHistory;
