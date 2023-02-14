import { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

import imagebri from '../../assets/img_bri.png';

import iconupload from '../../assets/icon_upload.svg';
import iconarrowdown from '../../assets/icon_arrow-down.svg';

import { useQuery, useMutation } from '@tanstack/react-query';
import axios from 'axios';
import BookingCard from './bookingCard';

const PayUploadHistory = () => {
  const navigate = useNavigate();

  const { bookid } = useParams();
  const getBooking = useQuery({
    queryKey: ['booking'],
    queryFn: async () =>
      await axios.get('https://fsw-backend.up.railway.app/api/book', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('AUTH_TOKEN')}`,
        },
      }),
  });

  let price;
  let rentTime;

  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const postImage = useMutation({
    mutationKey: ['image'],
    mutationFn: async () => {
      const formData = new FormData();
      formData.append('files', file);
      await axios.put(
        `https://fsw-backend.up.railway.app/api/book/payment?booking_id=${bookid}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('AUTH_TOKEN')}`,
            'Content-Type': 'multipart/form-data',
          },
        },
      );
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    postImage.mutate();
    navigate(`/history/booknow/receipt/success`);
  };

  return (
    <div className='lg:px-[70px] px-[20px] pt-[25px] lg:pt-[70px] font-[Montserrat] bg-[#FAFAFA] min-h-[700px]'>
      {/* --- Breadcrumb --- */}
      <div className='flex flex-row'>
        <nav className='flex' aria-label='Breadcrumb'>
          <ol className='inline-flex items-center space-x-1 md:space-x-3'>
            <li className='inline-flex items-center'>
              <Link to='/'>
                <p className='text-[16px] lg:text-[20px] font-[600] text-[#000000] opacity-[.38] hover:underline hover:text-[#0A008A] hover:opacity-100'>
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
                  <p className='ml-1 md:ml-2 text-[16px] lg:text-[20px] font-[600] text-[#000000] opacity-[.38] hover:underline hover:text-[#0A008A] hover:opacity-100'>
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
                <span className='ml-1 md:ml-2 text-[16px] lg:text-[20px] font-[600] text-[#000000] opacity-[.38] hover:text-[#0A008A] hover:underline hover:opacity-100'>
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

        <div className='flex flex-col lg:mx-[70px] lg:mt-[60px] mt-[10px] mb-[100px] lg:w-3/4'>
          {getBooking.isLoading && <>Loading ...</>}
          {getBooking.isSuccess &&
            getBooking?.data.data
              .filter((booking) => booking.booking_id == bookid)
              .map((booking) => {
                price = booking.BookingDetail.rent_price;
                rentTime = booking.BookingDetail.rent_time;

                return (
                  <BookingCard
                    key={booking.booking_id}
                    image={booking.Kost.SetupImages[0].url}
                    kosName={booking.Kost.name}
                    locationName={booking.Kost.SetupCity.city}
                    bookingId={booking.booking_id}
                    isPaid={booking.BookingDetail.is_paid}
                    willPay={booking.BookingDetail.will_pay}
                    isConfirmed={booking.BookingDetail.is_confirmed}
                    isCancelled={booking.BookingDetail.is_cancelled}
                    bookingStartDate={booking.booking_date_start}
                    bookingEndDate={booking.booking_date_end}
                    showButton={false}
                  />
                );
              })}
          <h1 className='mb-1 lg:mb-2 text-black text-[16px] lg:text-[25px] font-[600]'>
            Detail Pembayaran
          </h1>
          <p className='mb-3 lg:mb-8 text-[#BA1A1A] text-[12px] lg:text-[16px] font-[500]'>
            *Pembayaran akan hangus dalam 3 hari
          </p>
          <div className='lg:mb-5 mb-3 py-3 px-5 lg:py-6 lg:px-10 rounded-[16px] bg-[#e4e4fc] text-black'>
            <div className='flex flex-row justify-between'>
              <div className='flex flex-col'>
                <p className='text-[16px] lg:text-[20px] font-[700]'>Total Pembayaran</p>
              </div>
              <div className='flex flex-col text-right'>
                <p className='text-[16px] lg:text-[20px] font-[700]'>
                  <text className='text-[20px] lg:text-[30px]'>{`Rp. ${new Intl.NumberFormat(
                    'en-DE',
                  ).format(price)}`}</text>
                </p>
              </div>
            </div>
          </div>
          <div className='mb-10 py-3 px-3 lg:py-5 lg:px-6 rounded-[16px] bg-[#e4e4fc] text-black'>
            <div className='flex flex-row gap-2 lg:gap-8'>
              <div className='flex flex-col'>
                <img className='rounded-[16px] max-w-[100px] lg:max-w-none' alt='' src={imagebri} />
              </div>
              <div className='flex flex-col gap-0 lg:gap-2'>
                <p className='text-[12px] lg:text-[16px] font-[500]'>
                  ke rekening Bank BRI berikut
                </p>
                <p className='text-[20px] lg:text-[30px] font-[700]'>123-456-789-101-121</p>
                <p className='text-[14px] lg:text-[20px] font-[600]'>atas nama RISMA EKAWATI</p>
              </div>
            </div>
          </div>
          <div className='flex flex-row gap-3 lg:gap-5 justify-center lg:justify-start'>
            <label
              className='cursor-pointer inline-flex items-center justify-center gap-2 w-[138px] h-[33px] lg:w-[178px] lg:h-[43px] mb-[65px] p-0 bg-white border-2 border-[#0A008A] rounded-[4px] outline-none text-[14px] lg:text-[16px] font-[600] text-[#0A008A] hover:bg-[#f3f4ff] hover:border-[#0A008A] hover:text-[#0A008A] active:bg-[#0A008A] active:text-white'
              htmlFor='getFile'
            >
              <img className='w-[14px] lg:w-auto' alt='' src={iconupload} />
              {file?.name ? file.name : 'Upload Bukti '}
            </label>
            <input
              id='getFile'
              className='hidden'
              type='file'
              name='file'
              onChange={handleFileChange}
            />
            {/* <button
              disabled
              className='cursor-not-allowed w-[148px] h-[33px] lg:w-[178px] lg:h-[43px] mb-[65px] p-0 bg-[#e9e9ea] rounded-[4px] outline-none text-[14px] lg:text-[16px] font-[600] text-[#ababaf] hover:border-[#e9e9ea] hover:bg-[#e9e9ea] hover:text-[#ababaf]'
              type='button'
            >
              Sudah Bayar
            </button> */}

            <button
              className='w-[148px] h-[33px] lg:w-[178px] lg:h-[43px] mb-[65px] p-0 bg-[#0A008A] rounded-[4px] outline-none text-[14px] lg:text-[16px] font-[600] text-white hover:bg-[#A0A3FF] hover:text-[#0A008A] focus:bg-black focus:text-white'
              type='button'
              onClick={handleSubmit}
            >
              Sudah Bayar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayUploadHistory;
