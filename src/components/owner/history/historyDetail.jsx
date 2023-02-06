import React, { useEffect, useState } from 'react';
import { ButtonConfirm, ButtonConfirmDisabled } from './ownerButtonsHistory';
import avatarone from '../../../assets/img_avatar.png';
import kostone from '../../../assets/img_kosOne.png';
import iconlocation from '../../../assets/icon_location.svg';
import iconarrowright from '../../../assets/icon_arrow-right-2.svg';
import iconwhatsapp from '../../../assets/icon_whatsapp.svg';
import icondownload from '../../../assets/icon_downloadBlue.svg';
import imagesuccess from '../../../assets/img_success.png';
import iconclose from '../../../assets/icon_close.svg';

export const HistoryDetailOwner = () => {
  const [bookings, setbookings] = useState([]);
  useEffect(() => {
    const bookingList = [
      {
        phoneNumber: '081234567891',
        name: 'Kos Lily',
        bookId: '00000000',
        rentor: 'Hihang Hoheng',
        date: 'Fri, 24 March 2022 18:07 WIB',
        inDate: 'Jan 17, 23',
        outDate: 'Jan 24, 23',
        location: 'Yogyakarta',
        duration: '1 Bulan',
        price: '1.000.000',
        avatar: avatarone,
        kostImg: kostone,
        status: 'pending',
      },
    ];
    setbookings(bookingList);
  }, []);
  return (
    <div className='col-span-4 min-h-screen h-full py-8 pl-10 pr-20'>
      <p className='text-[25px] font-[600]'>Dipesan oleh</p>
      {bookings.map((booking, index) => {
        let component = null;
        if (booking.status === 'done') {
          component = <ButtonConfirmDisabled />;
        } else {
          component = <ButtonConfirm />;
        }
        return (
          <React.Fragment key={index}>
            {/* Rincian Pemesan */}
            <div className='flex flex-row gap-5 mt-5'>
              <img
                className='w-[50px] lg:w-auto self-start rounded-full'
                alt=''
                src={booking.avatar}
              />
              <div className='flex flex-col text-left space-y-[-5px] lg:space-y-0'>
                <p className='text-[14px] lg:text-[20px] font-[600] mt-3 pb-1'>{booking.rentor}</p>
                <p className='text-[12px] lg:text-[14px] font-[400] pb-3'>{booking.date}</p>
                <button
                  type='button'
                  className='inline-flex self-center gap-2 rounded-[4px] px-4 py-2 font-[600] text-[16px] text-[#0A008A] border-2 border-[#0A008A] bg-white'
                >
                  <img className='w-[14px] lg:w-auto' alt='' src={iconwhatsapp} />
                  {booking.phoneNumber}
                </button>
              </div>
            </div>
            {/* Rincian Kos */}
            <p className='mt-16 text-[20px] lg:text-[25px] font-[600]'>Rincian Pemesanan</p>
            <div className='flex flex-row gap-10 mt-5'>
              <img
                className='w-[50px] lg:w-auto self-start rounded-[8px]'
                alt=''
                src={booking.kostImg}
              />
              <div className='flex flex-col'>
                <p className='text-[14px] lg:text-[20px] font-[600] pb-1'>{booking.name}</p>
                <div className='flex flex-row gap-2 pb-1'>
                  <img className='w-[12px] lg:w-auto' alt='' src={iconlocation} />
                  <p className='text-[12px] lg:text-[16px] font-[500] text-[#4A4A4A]'>
                    {booking.location}
                  </p>
                </div>
                <p className='text-[12px] lg:text-[16px] font-[400] pb-3'>
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
            </div>
            {/* Rincian Pembayaran */}
            <p className='mt-16 text-[20px] lg:text-[25px] font-[600]'>Rincian Pembayaran</p>
            <div className='mt-5 mb-4 lg:mb-10 p-4 lg:p-6 rounded-[16px] bg-[#e4e4fc] text-black'>
              <div className='flex flex-row justify-between lg:mb-4'>
                <div className='flex flex-col lg:space-y-1'>
                  <p className='mb-3 text-[14px] lg:text-[20px] font-[500]'>Harga kos</p>
                  <p className='mb-3 text-[14px] lg:text-[20px] font-[500]'>Waktu sewa</p>
                </div>
                <div className='flex flex-col text-right lg:space-y-1'>
                  <p className='mb-3 text-[10px] lg:text-[14px] font-[500]'>
                    <strong className='text-[14px] lg:text-[20px] font-[600]'>
                      Rp{booking.price}
                    </strong>
                    /Bulan
                  </p>
                  <p className='mb-3 text-[14px] lg:text-[20px] font-[500]'>{booking.duration}</p>
                </div>
              </div>
              <hr className='mb-3 lg:mb-4 border-[1px] border-[#0A008A]'></hr>
              <div className='flex flex-row justify-between'>
                <div className='flex flex-col'>
                  <p className='text-[14px] lg:text-[20px] font-[700]'>Total Pembayaran</p>
                </div>
                <div className='flex flex-col text-right'>
                  <p className='text-[14px] lg:text-[20px] font-[700]'>Rp{booking.price}</p>
                </div>
              </div>
            </div>
            {/* Button Opsi */}
            <div className='flex flex-col mt-16 gap-5 items-center'>
              <button
                type='button'
                className='inline-flex self-center justify-center gap-2 rounded-[4px] w-2/6 py-2 font-[600] text-[16px] text-[#0A008A] border-2 border-[#0A008A] bg-white hover:bg-[#A0A3FF] hover:text-[#0A008A] focus:bg-white focus:text-[#0A008A] focus:outline-none'
              >
                <img className='w-[14px] lg:w-auto' alt='' src={icondownload} />
                Download Bukti Pembayaran
              </button>
              {component}
            </div>
          </React.Fragment>
        );
      })}
      <input type='checkbox' id='my-modal' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box lg:max-w-5xl lg:w-[790px] m-5 p-3 lg:p-0 rounded-[32px] bg-white drop-shadow-[4px_4px_8px_rgba(0,0,0,0.15)]'>
          <div className='flex flex-row justify-between mt-[20px] lg:mt-[60px] lg:mb-[30px] mx-[20px]'>
            <div className='w-[20px]'></div> {/* dummy */}
            <img className='lg:w-[160px] w-[120px]' alt='' src={imagesuccess} />
            <label htmlFor='my-modal'>
              <img className='lg:mt-[-35px] cursor-pointer' alt='' src={iconclose} />
            </label>
          </div>
          <div className='flex flex-col justify-center items-center mt-4'>
            <p className='mb-1 lg:mb-2 text-[16px] lg:text-[25px] font-[700] lg:font-[600]'>
              Pembayaran berhasil dikonfirmasi
            </p>
            <p className='mb-3 lg:mb-8 text-[12px] lg:text-[16px] font-[500] lg:w-[500px] text-center'>
              Pembayaran sudah diterima dan dikonfirmasi, kamar dapat ditempati sesuai jadwal
              pesanan oleh pengguna.
            </p>
          </div>
          <div className='flex flex-row justify-center gap-5 my-4 lg:mt-[20px] lg:mb-[60px]'>
            <label
              htmlFor='my-modal'
              className='cursor-pointer inline-flex items-center justify-center w-full lg:w-1/2 h-[33px] lg:h-[43px] p-0 bg-[#0A008A] border-2 border-[#0A008A] self-end rounded-[150px] outline-none text-[16px] font-[600] text-white hover:bg-[#A0A3FF] hover:border-[#A0A3FF] hover:text-[#0A008A] active:bg-black active:text-white'
            >
              Kembali ke Riwayat Transaksi
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
