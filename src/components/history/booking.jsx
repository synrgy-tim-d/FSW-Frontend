import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ButtonDisabled, ButtonPayment, ButtonReview } from './buttonsHistory';
import imageone from '../../assets/img_kosOne.png';
import imagetwo from '../../assets/img_kosTwo.png';
import imagethree from '../../assets/img_kosThree.png';
import iconlocation from '../../assets/icon_location.svg';
import iconarrowright from '../../assets/icon_arrow-right-2.svg';
import iconarrowdown from '../../assets/icon_arrow-down.svg';
import iconclose from '../../assets/icon_close.svg';

const BookingHistory = () => {
  const [booking, setbooking] = useState([]);

  useEffect(() => {
    const bookingList = [
      {
        id: 1,
        name: 'Kos Alamanda',
        location: {
          name: 'Yogyakarta',
        },
        bookId: '00000001',
        inDate: 'April 01, 23',
        outDate: 'April 30, 23',
        img: imageone,
        btn: 'payment',
      },
      {
        id: 2,
        name: 'Kos Beringin',
        location: {
          name: 'Yogyakarta',
        },
        bookId: '00000002',
        inDate: 'April 03, 23',
        outDate: 'May 03, 23',
        img: imagetwo,
        btn: 'payment',
      },
      {
        id: 3,
        name: 'Kos Semak-Semak',
        location: {
          name: 'Yogyakarta',
        },
        bookId: '00000003',
        inDate: 'April 11, 23',
        outDate: 'May 11, 23',
        img: imagethree,
        btn: 'review',
      },
      {
        id: 4,
        name: 'Kos Guntung',
        location: {
          name: 'Yogyakarta',
        },
        bookId: '00000004',
        inDate: 'April 12, 23',
        outDate: 'May 13, 23',
        img: imagethree,
        btn: 'payment',
      },
    ];
    setbooking(bookingList);
  }, []);

  return (
    <div className='lg:px-[70px] px-[20px] pt-[25px] font-[Montserrat] bg-[#FAFAFA] min-h-[700px]'>
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

      {/* --- Options & Content --- */}
      <div className='flex flex-col lg:flex-row'>
        {/* --- Options --- */}
        <div className='flex flex-col text-black mt-[20px] lg:mt-[60px] lg:w-1/4'>
          <div className='hidden lg:block'>
            <Link to='/history'>
              <p className='text-[#0A008A] hover:text-[#9b9b9b] text-[25px] font-[500] mb-[20px] text-left'>
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
                <p className='text-[#0A008A] hover:text-[#0A008A] text-[20px] font-[500] m-[15px]'>
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
                <p className='text-[#9b9b9b] hover:text-[#0A008A] text-[20px] font-[500] m-[15px]'>
                  Pembatalan
                </p>
              </Link>
            </ul>
          </div>
        </div>

        {/* --- Content if Empty --- */}
        {/* <div className='flex flex-col text-center text-black ml-[80px] mt-[181px] mb-[100px]'>
          <img
            className='w-[350px] h-[226.84px] self-center mb-[50px]'
            alt=''
            src='src/assets/img_noHistory.png'
          />
          <h1 className='text-[31px] font-[600] mb-[20px] w-[558px]'>
            Riwayat pemesanan masih kosong
          </h1>
          <p className='text-[20px] font-[500] mb-[50px] w-[558px]'>
            Kamu belum pernah melakukan pemesanan kos, yuk mulai cari kos idaman kamu!
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
          {booking.map((booking, index) => {
            let component = null;
            switch (booking.btn) {
              case 'disabled':
                component = <ButtonDisabled />;
                break;
              case 'payment':
                component = <ButtonPayment />;
                break;
              case 'review':
                component = <ButtonReview />;
                break;
              default:
                component = <ButtonDisabled />;
            }
            return (
              <React.Fragment key={index}>
                <div>
                  <div className='flex flex-row py-2 lg:py-4 text-black'>
                    <img className='w-[130px] lg:w-[200px] self-center' alt='' src={booking.img} />
                    <div className='flex flex-col ml-[20px] lg:ml-[40px] text-left lg:w-[265px] space-y-[-5px] lg:space-y-0'>
                      <h1 className='text-[14px] lg:text-[20px] font-[600]'>{booking.name}</h1>
                      <div className='flex flex-row'>
                        <img className='w-[10px] lg:w-auto' alt='' src={iconlocation} />
                        <p className='text-[12px] lg:text-[16px] font-[500] ml-1 lg:ml-2 lg:my-1'>
                          {booking.location.name}
                        </p>
                      </div>
                      <p className='text-[12px] lg:text-[16px] font-[500] lg:mb-3'>
                        Booking ID: {booking.bookId}
                      </p>
                      <div className='flex flex-row'>
                        <div className='flex flex-col text-center'>
                          <p className='text-[10px] lg:text-[12px] font-[400] lg:mb-1'>Check in</p>
                          <p className='text-[10px] lg:text-[16px] font-[600] lg:font-[400]'>
                            {booking.inDate}
                          </p>
                        </div>
                        <div className='flex flex-col mx-[10px] lg:mx-[12px] justify-center'>
                          <img className='w-[16px] lg:w-auto' alt='' src={iconarrowright} />
                        </div>
                        <div className='flex flex-col text-center'>
                          <p className='text-[10px] lg:text-[12px] font-[400] lg:mb-1'>Check out</p>
                          <p className='text-[10px] lg:text-[16px] font-[600] lg:font-[400]'>
                            {booking.outDate}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='lg:flex flex-1 hidden'>{component}</div>
                  </div>
                  <div className='flex flex-1 lg:hidden'>{component}</div>
                  <hr className='w-full mb-4 lg:mb-8'></hr>
                </div>
              </React.Fragment>
            );
          })}
          <h1 className='text-center text-black text-[16px] lg:text-[20px] font-[600] opacity-[.38]'>
            Lihat lebih banyak lagi
          </h1>
        </div>
      </div>

      {/* --- Modal --- */}
      <input type='checkbox' id='my-modal' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box lg:max-w-5xl lg:w-[895px] w-full m-5 p-3 lg:p-0 rounded-[32px] bg-white drop-shadow-[4px_4px_8px_rgba(0,0,0,0.15)]'>
          <div className='flex flex-row justify-between mt-[20px] mx-[20px]'>
            <div className='w-[20px]'></div> {/* dummy */}
            <img className='w-[150px] h-[100px]' alt='' src={imagethree} />
            <label htmlFor='my-modal'>
              <img className='lg:mb-[115px] cursor-pointer' alt='' src={iconclose} />
            </label>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <h3 className='font-bold text-lg mt-[5px]'>Kos Semak-Semak</h3>
            <div className='rating gap-2 mt-[5px]'>
              <input type='radio' name='rating-2' className='mask mask-star-2 bg-[#EA9A3D]' />
              <input type='radio' name='rating-2' className='mask mask-star-2 bg-[#EA9A3D]' />
              <input
                type='radio'
                name='rating-2'
                className='mask mask-star-2 bg-[#EA9A3D]'
                checked
              />
              <input type='radio' name='rating-2' className='mask mask-star-2 bg-[#EA9A3D]' />
              <input type='radio' name='rating-2' className='mask mask-star-2 bg-[#EA9A3D]' />
            </div>
          </div>
          <div className='flex flex-row justify-center text-center mt-4 lg:mt-[30px]'>
            <div className='lg:w-[695px] lg:h-[180px] w-full mx-5 lg:mx-0 rounded-[8px] bg-[#F2EFFF] px-3 py-3 lg:py-5'>
              <textarea
                placeholder='Tambahkan komentar...'
                className='lg:max-w-[650px] lg:h-[145px] w-full h-[250px] rounded-[8px] px-3 py-2 focus:outline-none'
              />
            </div>
          </div>
          <div className='flex flex-row justify-center my-4 lg:justify-end gap-3 lg:gap-5 lg:mr-[100px] lg:mt-[20px] lg:mb-[20px]'>
            <label
              htmlFor='my-modal'
              className='cursor-pointer inline-flex items-center justify-center w-[133px] h-[33px] lg:w-[151px] lg:h-[43px] p-0 bg-white border-2 border-[#0A008A] self-end rounded-[4px] outline-none text-[16px] font-[600] text-[#0A008A] hover:bg-[#f3f4ff] hover:border-[#0A008A] hover:text-[#0A008A] active:bg-[#0A008A] active:text-white'
            >
              Batalkan
            </label>
            <label
              htmlFor='my-modal'
              className='cursor-pointer inline-flex items-center justify-center w-[133px] h-[33px] lg:w-[151px] lg:h-[43px] p-0 bg-[#0A008A] border-2 border-[#0A008A] self-end rounded-[4px] outline-none text-[16px] font-[600] text-white hover:bg-[#A0A3FF] hover:border-[#A0A3FF] hover:text-[#0A008A] active:bg-black active:text-white'
            >
              Kirim
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingHistory;
