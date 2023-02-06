import React, { useEffect, useState } from 'react';
import { ButtonPending, ButtonDetail } from '../../owner/history/ownerButtonsHistory';
import avatarzero from '../../../assets/img_avatarNone.svg';
import avatarone from '../../../assets/img_avatar.png';
import iconarrowdown from '../../../assets/icon_arrow-down.svg';
import icondownload from '../../../assets/icon_download.svg';

export const HistoryOwner = () => {
  const [months, setmonths] = useState([]);
  const [bookings, setbookings] = useState([]);
  const [dates, setdates] = useState([]);
  useEffect(() => {
    const monthList = [
      { name: 'Januari' },
      { name: 'Februari' },
      { name: 'Maret' },
      { name: 'April' },
      { name: 'Mei' },
      { name: 'Juni' },
      { name: 'July' },
      { name: 'Agustus' },
      { name: 'September' },
      { name: 'Oktober' },
      { name: 'November' },
      { name: 'Desember' },
    ];
    setmonths(monthList);

    const bookingList = [
      {
        date: '24 Maret 2022',
        name: 'Kos Lily',
        bookId: '00000000',
        rentor: 'Hihang Hoheng',
        fullDate: 'Fri, 24 March 2022 18:07 WIB',
        price: '1.000.000',
        avatar: avatarone,
        status: 'done',
      },
      {
        date: '24 Maret 2022',
        name: 'Kos Alamanda',
        bookId: '00000001',
        rentor: 'Astolfo',
        fullDate: 'Fri, 24 March 2022 18:07 WIB',
        price: '1.500.000',
        avatar: avatarzero,
        status: 'pending',
      },
      {
        date: '20 Februari 2022',
        name: 'Kos Alamanda',
        bookId: '00000002',
        rentor: 'Mutahar',
        fullDate: 'Fri, 20 Feb 2022 18:07 WIB',
        price: '3.700.000',
        avatar: avatarzero,
        status: 'pending',
      },
    ];
    setbookings(bookingList);

    const dateList = [
      {
        date: '24 Maret 2022',
      },
      {
        date: '20 Februari 2022',
      },
    ];
    setdates(dateList);
  }, []);
  return (
    <div className='col-span-4 min-h-screen h-full py-8 pl-10 pr-20'>
      {/* Filter */}
      <div className='flex flex-row gap-5 mb-4 lg:mb-8'>
        {/* Dropdown Bulan */}
        <div className='dropdown lg:mx-0'>
          <label
            tabIndex={0}
            className='justify-between cursor-pointer inline-flex items-center gap-2 w-full max-w-[300px] h-[38px] lg:h-[48px] px-4 p-0 bg-white border-2 border-[#0A008A] rounded-[8px] outline-none text-[16px] lg:text-[20px] font-[500] text-[#B9B9BC] hover:bg-[#f3f4ff] hover:border-[#0A008A] hover:text-[#0A008A] active:bg-[#0A008A] active:text-white'
          >
            Bulan
            <img className='' alt='' src={iconarrowdown} />
          </label>
          <ul
            tabIndex={0}
            className='dropdown-content menu mt-2 p-2 shadow bg-base-100 rounded-box w-[full] drop-shadow-md'
          >
            {months.map((month, index) => {
              return (
                <React.Fragment key={index}>
                  <div className='form-control p-2'>
                    <label className='flex select-none items-center cursor-pointer gap-3'>
                      <input type='radio' name='monthOption' className='radio' checked />
                      <span className='text-[16px] lg:text-[20px] font-[500]'>{month.name}</span>
                    </label>
                  </div>
                </React.Fragment>
              );
            })}
          </ul>
        </div>
        {/* Dropdown Tahun */}
        <div className='dropdown lg:mx-0'>
          <label
            tabIndex={0}
            className='justify-between cursor-pointer inline-flex items-center gap-2 w-full max-w-[300px] h-[38px] lg:h-[48px] px-4 p-0 bg-white border-2 border-[#0A008A] rounded-[8px] outline-none text-[16px] lg:text-[20px] font-[500] text-[#B9B9BC] hover:bg-[#f3f4ff] hover:border-[#0A008A] hover:text-[#0A008A] active:bg-[#0A008A] active:text-white'
          >
            Tahun
            <img className='' alt='' src={iconarrowdown} />
          </label>
          <ul
            tabIndex={0}
            className='dropdown-content menu mt-2 p-2 shadow bg-base-100 rounded-box w-[full] drop-shadow-md'
          >
            <div className='form-control p-2'>
              <label className='flex select-none items-center cursor-pointer gap-3'>
                <input type='radio' name='yearOption' className='radio' checked />
                <span className='text-[16px] lg:text-[20px] font-[500]'>2022</span>
              </label>
            </div>
            <div className='form-control p-2'>
              <label className='flex select-none items-center cursor-pointer gap-3'>
                <input type='radio' name='yearOption' className='radio' checked />
                <span className='text-[16px] lg:text-[20px] font-[500]'>2023</span>
              </label>
            </div>
          </ul>
        </div>
      </div>

      {/* Riwayat */}
      {/* Tanggal */}
      {dates.map((date, index) => {
        const temp = date.date;
        return (
          <React.Fragment key={index}>
            <div className='flex flex-row mb-2 lg:mb-4'>
              <p className='font-[600] text-[16px] text-[#0A008A]'>{date.date}</p>
            </div>
            {/* Konten Riwayat */}
            {bookings.map((booking, index) => {
              let component = null;
              if (booking.status === 'done') {
                component = <ButtonDetail />;
              } else {
                component = <ButtonPending />;
              }
              if (booking.date === temp) {
                return (
                  <React.Fragment key={index}>
                    <div className='flex flex-row gap-5'>
                      <img
                        className='w-[50px] lg:w-auto self-start rounded-full'
                        alt=''
                        src={booking.avatar}
                      />
                      <div className='flex flex-col text-left space-y-[-5px] lg:space-y-0'>
                        <h1 className='text-[14px] lg:text-[20px] font-[600] pb-2'>
                          {booking.name} [Booking ID: {booking.bookId}]
                        </h1>
                        <p className='text-[12px] lg:text-[16px] font-[600] pb-1 text-[#4A4A4A]'>
                          Dipesan oleh {booking.rentor}
                        </p>
                        <p className='text-[10px] lg:text-[12px] font-[400] text-[#4A4A4A]'>
                          {booking.fullDate}
                        </p>
                        <div className='flex flex-row gap-2'>
                          <img className='w-[16px] lg:w-auto' alt='' src={icondownload} />
                          <p className='text-[12px] lg:text-[16px] font-[600] text-[#b6b6b9]'>
                            Download detail pembayaran
                          </p>
                        </div>
                      </div>
                      <div className='flex flex-col flex-1 gap-2 items-end'>
                        <p className='text-[14px] lg:text-[20px] font-[500] lg:mb-1'>
                          Rp{booking.price}
                        </p>
                        {/* <button
                            className='px-6 py-3 text-[16px] font-[600] border-0 rounded-[4px] outline-none bg-[#0A008A] text-white hover:bg-[#A0A3FF] hover:text-[#0A008A] focus:bg-black focus:text-white focus:outline-none'
                            type='button'
                          >
                            Konfirmasi
                          </button> */}
                        {component}
                      </div>
                    </div>
                    <hr className='mt-3 ml-[110px] mb-10'></hr>
                  </React.Fragment>
                );
              } else {
                return <React.Fragment key={index}></React.Fragment>;
              }
            })}
          </React.Fragment>
        );
      })}
    </div>
  );
};
