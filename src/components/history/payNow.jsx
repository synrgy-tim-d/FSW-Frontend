import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import imagetwo from '../../assets/img_kosTwo.png';
import imageconfirm from '../../assets/img_confirmPayment.png';
import iconlocation from '../../assets/icon_location.svg';
import iconarrowright from '../../assets/icon_arrow-right-2.svg';
import iconclose from '../../assets/icon_close.svg';
import iconarrowdown from '../../assets/icon_arrow-down.svg';

import { useQuery, useMutation } from '@tanstack/react-query';
import axios from 'axios';
import BookingCard from './bookingCard';

const PayNowHistory = () => {
  const [paymentMethod, setpaymentMethod] = useState('BANK');

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

  const choosePayment = (e) => {
    setpaymentMethod(e.target.value);
  };

  const putWillPay = useMutation({
    mutationFn: async (data) => {
      await axios.put(
        `https://fsw-backend.up.railway.app/api/book?booking_id=${bookid}&willpay=true`,
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('AUTH_TOKEN')}`,
          },
        },
      );
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      method: paymentMethod,
    };
    putWillPay.mutate(data);

    navigate(`/history/booknow/receipt/${bookid}`);
  };

  return (
    <div className='lg:px-[70px] px-[20px] pt-[25px] lg:pt-[70px] font-[Montserrat] bg-[#FAFAFA] min-h-[700px]'>
      {/* --- Breadcrumb --- */}
      <div className='flex flex-row'>
        <nav className='flex' aria-label='Breadcrumb'>
          <ol className='inline-flex items-center space-x-1 md:space-x-3'>
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
                  className='w-6 h-6 text-gray-400'
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
                  className='w-6 h-6 text-gray-400'
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

                console.log();

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
          <h1 className='mb-2 lg:mb-5 text-black text-[16px] lg:text-[25px] font-[600]'>
            Rincian Pembayaran
          </h1>
          <div className='mb-4 lg:mb-10 p-4 lg:p-6 rounded-[16px] bg-[#e4e4fc] text-black'>
            <div className='flex flex-row justify-between lg:mb-4'>
              <div className='flex flex-col lg:space-y-1'>
                <p className='mb-3 text-[14px] lg:text-[20px] font-[500]'>Harga kos</p>
                <p className='mb-3 text-[14px] lg:text-[20px] font-[500]'>Waktu sewa</p>
              </div>
              <div className='flex flex-col text-right lg:space-y-1'>
                <p className='mb-3 text-[10px] lg:text-[14px] font-[500]'>
                  <strong className='text-[14px] lg:text-[20px] font-[600]'>{`Rp. ${new Intl.NumberFormat(
                    'en-DE',
                  ).format(price)}`}</strong>
                  {rentTime === 'HARIAN'
                    ? '/Hari'
                    : rentTime === 'MINGGUAN'
                    ? '/Minggu'
                    : rentTime === 'BULANAN'
                    ? '/Bulan'
                    : 99999999}
                </p>
                <p className='mb-3 text-[14px] lg:text-[20px] font-[500]'>{`1 ${
                  rentTime === 'HARIAN'
                    ? 'Hari'
                    : rentTime === 'MINGGUAN'
                    ? 'Minggu'
                    : rentTime === 'BULANAN'
                    ? 'Bulan'
                    : 99999999
                }`}</p>
              </div>
            </div>
            <hr className='mb-3 lg:mb-4 border-[1px] border-[#0A008A]'></hr>
            <div className='flex flex-row justify-between'>
              <div className='flex flex-col'>
                <p className='text-[14px] lg:text-[20px] font-[700]'>Total Pembayaran</p>
              </div>
              <div className='flex flex-col text-right'>
                <p className='text-[14px] lg:text-[20px] font-[700]'>{`Rp. ${new Intl.NumberFormat(
                  'en-DE',
                ).format(price)}`}</p>
              </div>
            </div>
          </div>
          <h1 className='mb-3 lg:mb-5 text-black text-[16px] lg:text-[25px] font-[600]'>
            Bayar Melalui
          </h1>
          {/* <div className='dropdown lg:mx-0 mb-3 lg:mb-5'>
            <label
              tabIndex={0}
              className='justify-between cursor-pointer inline-flex items-center w-full max-w-[300px] h-[38px] lg:h-[48px] px-4 p-0 bg-white border-2 border-[#0A008A] rounded-[8px] outline-none text-[16px] lg:text-[20px] font-[500] text-black hover:bg-[#f3f4ff] hover:border-[#0A008A] hover:text-[#0A008A] active:bg-[#0A008A] active:text-white'
            >
              Transfer Bank
              <img className='' alt='' src={iconarrowdown} />
            </label>
            <ul
              tabIndex={0}
              className='dropdown-content menu mt-2 p-2 shadow bg-base-100 rounded-box w-full max-w-[300px] drop-shadow-md'
            >
              <p className='m-[10px] text-[16px] lg:text-[20px] font-[600]'>Opsi Bayar</p>
              <hr></hr>
              <div className='form-control mb-[5px] pt-[10px] pl-[10px]'>
                <label className='label cursor-pointer'>
                  <span className='text-[16px] lg:text-[20px] font-[500]'>Transfer Bank</span>
                  <input type='radio' name='payOption' className='radio' checked />
                </label>
              </div>
              <div className='form-control pb-[10px] pl-[10px]'>
                <label className='label cursor-pointer'>
                  <span className='text-[16px] lg:text-[20px] font-[500]'>Tunai</span>
                  <input type='radio' name='payOption' className='radio' checked />
                </label>
              </div>
            </ul>
          </div> */}

          <select
            className=' border-2 border-[#0A008A] rounded-[8px] outline-none text-[16px]  lg:text-[20px] font-[500] lg:mx-0 mb-3 lg:mb-5 mt-2 p-2 shadow bg-base-100 w-full max-w-[300px] drop-shadow-md'
            name=''
            id='payOption'
            onChange={choosePayment}
          >
            <option className='' value='BANK'>
              Transfer Bank
            </option>
            <option className='' value='CASH'>
              Cash
            </option>
          </select>
          <p className='mb-10 text-[12px] lg:text-[16px] font-[400]'>
            *Pastikan memilih opsi dengan benar sebab opsi yang telah dipilih tidak dapat dirubah,
            setelah memilih opsi, segera lakukan pembayaran
          </p>
          <div className='text-center'>
            <label
              htmlFor='my-modal'
              className='lg:w-[400px] lg:h-[43px] lg:text-[16px] w-[262px] h-[36px] text-[14px] cursor-pointer inline-flex items-center justify-center p-0 rounded-[150px] outline-none font-[600] bg-[#0A008A] text-white hover:bg-[#A0A3FF] hover:text-[#0A008A] active:bg-[#000000] active:text-white'
            >
              Bayar kos
            </label>
          </div>
        </div>
      </div>

      {/* --- Modal --- */}
      <input type='checkbox' id='my-modal' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box lg:max-w-5xl lg:w-[790px] m-5 p-3 lg:p-0 rounded-[32px] bg-white drop-shadow-[4px_4px_8px_rgba(0,0,0,0.15)]'>
          <div className='flex flex-row justify-between mt-[20px] lg:mt-[60px] lg:mb-[30px] mx-[20px]'>
            <div className='w-[20px]'></div> {/* dummy */}
            <img className='lg:w-[160px] w-[120px]' alt='' src={imageconfirm} />
            <label htmlFor='my-modal'>
              <img className='lg:mt-[-35px] cursor-pointer' alt='' src={iconclose} />
            </label>
          </div>
          <div className='flex flex-col justify-center items-center mt-4'>
            <h3 className='mb-1 lg:mb-[20px] text-[16px] lg:text-[25px] font-[700] lg:font-[600]'>
              Apakah metode pembayaran benar?
            </h3>
            <p className='mb-3 lg:mb-[30px] text-[12px] lg:text-[16px] font-[500] lg:w-[450px] text-center'>
              Periksa lagi pesananmu! opsi pembayaran yang sudah dipilih sudah tidak dapat dirubah
            </p>
          </div>
          <div className='flex flex-row justify-center gap-5 my-4 lg:mt-[20px] lg:mb-[60px]'>
            <label
              htmlFor='my-modal'
              className='cursor-pointer inline-flex items-center justify-center w-[131px] h-[33px] lg:w-[151px] lg:h-[43px] p-0 bg-white border-2 border-[#0A008A] self-end rounded-[4px] outline-none text-[16px] font-[600] text-[#0A008A] hover:bg-[#f3f4ff] hover:border-[#0A008A] hover:text-[#0A008A] active:bg-[#0A008A] active:text-white'
            >
              Periksa lagi
            </label>

            <label
              htmlFor='my-modal'
              className='cursor-pointer inline-flex items-center justify-center w-[131px] h-[33px] lg:w-[151px] lg:h-[43px] p-0 bg-[#0A008A] border-2 border-[#0A008A] self-end rounded-[4px] outline-none text-[16px] font-[600] text-white hover:bg-[#A0A3FF] hover:border-[#A0A3FF] hover:text-[#0A008A] active:bg-black active:text-white'
              onClick={handleSubmit}
            >
              Lanjutkan
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayNowHistory;
