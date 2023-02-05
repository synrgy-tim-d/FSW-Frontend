import React, { useEffect, useState } from 'react';
import { ButtonConfirm, ButtonConfirmDisabled } from './ownerButtonsHistory';
import { SidebarOwner } from '../sidebar';
import avatarone from '../../../assets/img_avatar.png';
import kostone from '../../../assets/img_kosOne.png';
import iconlocation from '../../../assets/icon_location.svg';
import iconarrowright from '../../../assets/icon_arrow-right-2.svg';
import iconwhatsapp from '../../../assets/icon_whatsapp.svg';
import icondownload from '../../../assets/icon_downloadBlue.svg';

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
    <div className='grid grid-cols-5'>
      {/* ---Sidebar--- */}
      <div className='col-span-1 bg-[#0A008A] text-white min-h-screen h-full px-8 py-16'>
        <SidebarOwner />
      </div>
      {/* ---Content--- */}
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
                  <p className='text-[14px] lg:text-[20px] font-[600] mt-3 pb-1'>
                    {booking.rentor}
                  </p>
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
      </div>
    </div>
  );
};
