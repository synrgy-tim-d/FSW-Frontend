import React from 'react';

const HistoryPay = () => {
  return (
    <div className='pl-[70px] pt-[25px] font-[Montserrat]'>
      {/* --- Breadcrumb --- */}
      <div className='flex flex-row'>
        <nav className='flex' aria-label='Breadcrumb'>
          <ol className='inline-flex items-center space-x-1 md:space-x-3'>
            <li className='inline-flex items-center'>
              <a
                href='#'
                className='text-[20px] font-[600] text-[#000000] opacity-[.38] hover:text-[#0A008A] hover:opacity-100'
              >
                Home
              </a>
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
                <a
                  href='#'
                  className='ml-1 md:ml-2 text-[20px] font-[600] text-[#000000] opacity-[.38] hover:text-[#0A008A] hover:opacity-100'
                >
                  Riwayat
                </a>
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
                <span className='ml-1 md:ml-2 text-[20px] font-[600]-medium text-[#0A008A] underline'>
                  Pembayaran
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      {/* --- Options & Content --- */}
      <div className='flex flex-row'>
        {/* --- Options --- */}
        <div className='flex flex-col text-black mt-[61px]'>
          <a
            href='/history'
            className='text-[#000000] opacity-[.38] hover:text-[#000000] hover:opacity-[.76] text-[25px] font-[500] mb-[20px] text-left'
          >
            Pemesanan Kos
          </a>
          <hr className='w-[350px] mb-[20px]'></hr>
          <a
            href='/paymenthistory'
            className='text-[#0A008A] hover:text-[#0A008A]/75 text-[25px] font-[500] mb-[20px] text-left'
          >
            Pembayaran
          </a>
          <hr className='w-[350px] mb-[20px]'></hr>
          <a
            href='/cancellationhistory'
            className='text-[#000000] opacity-[.38] hover:text-[#000000] hover:opacity-[.76] text-[25px] font-[500] mb-[20px] text-left'
          >
            Pembatalan
          </a>
          <hr className='w-[350px] mb-[20px]'></hr>
        </div>

        {/* --- Content if Empty --- */}
        {/* <div className='flex flex-col text-center text-black ml-[80px] mt-[225px]'>
          <img
            className='w-[127.4px] h-[193.91px] self-center mb-[39px]'
            alt=''
            src='src/assets/NoPaymentHistory.png'
          />
          <h1 className='text-[31px] font-[600] mb-[20px] w-[558px]'>Belum ada pembayaran baru</h1>
          <p className='text-[20px] font-[500] mb-[50px] w-[558px]'>
            Yuk, segera lakukan pemesanan kos dan selesaikan pembayaran dengan mudah!
          </p>
          <button
            className='w-[419px] h-[43px] bg-[#0A008A] self-center rounded-[150px] outline-none text-[16px] font-[600] text-white hover:bg-[#0A008A]/75 hover:border-none focus:outline-none'
            type='submit'
          >
            Telurusi Kos
          </button>
        </div> */}

        {/* --- Content if there is Data --- */}
        <div className='flex flex-col ml-[70px] mt-[61px]'>
          <div className='flex flex-row py-[16px] text-black'>
            <div className='flex flex-col text-left w-[280px]'>
              <h1 className='mb-1 text-[20px] font-[600]'>Booking ID: 00000000</h1>
              <p className='mb-2 text-[#4A4A4A] text-[12px] font-[400]'>
                Fri, 24 March 2023 18:07 WIB
              </p>
              <div className='flex flex-row'>
                <img className='' alt='' src='src/assets/icon_download.svg' />
                <p className='ml-4 text-[#46464F] opacity-[.38] text-[16px] font-[400]'>
                  Download bukti pembayaran
                </p>
              </div>
            </div>
            <div className='flex flex-col ml-[450px] pr-[15px]'>
              <h1 className='mb-2 text-[20px] font-[500]'>Rp1.000.000</h1>
              <div className='flex flex-row justify-end mr-[8px]'>
                <img className='' alt='' src='src/assets/icon_completed.svg' />
                <p className='text-[12px] font-[500] text-[#008A3F] ml-2 mb-[4px] mt-1'>
                  Completed
                </p>
              </div>
            </div>
          </div>
          <hr className='w-[870px] mb-[15px]'></hr>

          <div className='flex flex-row py-[16px] text-black'>
            <div className='flex flex-col text-left w-[280px]'>
              <h1 className='mb-1 text-[20px] font-[600]'>Booking ID: 00000000</h1>
              <p className='mb-2 text-[#4A4A4A] text-[12px] font-[400]'>
                Fri, 24 March 2023 18:07 WIB
              </p>
              <div className='flex flex-row'>
                <img className='' alt='' src='src/assets/icon_download.svg' />
                <p className='ml-4 text-[#46464F] opacity-[.38] text-[16px] font-[400]'>
                  Download bukti pembayaran
                </p>
              </div>
            </div>
            <div className='flex flex-col ml-[450px] pr-[15px]'>
              <h1 className='mb-2 text-[20px] font-[500]'>Rp1.000.000</h1>
              <div className='flex flex-row justify-end mr-[8px]'>
                <img className='' alt='' src='src/assets/icon_completed.svg' />
                <p className='text-[12px] font-[500] text-[#008A3F] ml-2 mb-[4px] mt-1'>
                  Completed
                </p>
              </div>
            </div>
          </div>
          <hr className='w-[870px] mb-[15px]'></hr>

          <div className='flex flex-row py-[16px] text-black'>
            <div className='flex flex-col text-left w-[280px]'>
              <h1 className='mb-1 text-[20px] font-[600]'>Booking ID: 00000000</h1>
              <p className='mb-2 text-[#4A4A4A] text-[12px] font-[400]'>
                Fri, 24 March 2023 18:07 WIB
              </p>
              <div className='flex flex-row'>
                <img className='' alt='' src='src/assets/icon_download.svg' />
                <p className='ml-4 text-[#46464F] opacity-[.38] text-[16px] font-[400]'>
                  Download bukti pembayaran
                </p>
              </div>
            </div>
            <div className='flex flex-col ml-[450px] pr-[15px]'>
              <h1 className='mb-2 text-[20px] font-[500]'>Rp1.000.000</h1>
              <div className='flex flex-row justify-end mr-[8px]'>
                <img className='' alt='' src='src/assets/icon_completed.svg' />
                <p className='text-[12px] font-[500] text-[#008A3F] ml-2 mb-[4px] mt-1'>
                  Completed
                </p>
              </div>
            </div>
          </div>
          <hr className='w-[870px] mb-[15px]'></hr>

          <div className='flex flex-row py-[16px] text-black'>
            <div className='flex flex-col text-left w-[280px]'>
              <h1 className='mb-1 text-[20px] font-[600]'>Booking ID: 00000000</h1>
              <p className='mb-2 text-[#4A4A4A] text-[12px] font-[400]'>
                Fri, 24 March 2023 18:07 WIB
              </p>
              <div className='flex flex-row'>
                <img className='' alt='' src='src/assets/icon_download.svg' />
                <p className='ml-4 text-[#46464F] opacity-[.38] text-[16px] font-[400]'>
                  Download bukti pembayaran
                </p>
              </div>
            </div>
            <div className='flex flex-col ml-[450px] pr-[15px]'>
              <h1 className='mb-2 text-[20px] font-[500]'>Rp1.000.000</h1>
              <div className='flex flex-row justify-end mr-[8px]'>
                <img className='' alt='' src='src/assets/icon_completed.svg' />
                <p className='text-[12px] font-[500] text-[#008A3F] ml-2 mb-[4px] mt-1'>
                  Completed
                </p>
              </div>
            </div>
          </div>
          <hr className='w-[870px] mb-[15px]'></hr>

          <div className='flex flex-row py-[16px] text-black'>
            <div className='flex flex-col text-left w-[280px]'>
              <h1 className='mb-1 text-[20px] font-[600]'>Booking ID: 00000000</h1>
              <p className='mb-2 text-[#4A4A4A] text-[12px] font-[400]'>
                Fri, 24 March 2023 18:07 WIB
              </p>
              <div className='flex flex-row'>
                <img className='' alt='' src='src/assets/icon_download.svg' />
                <p className='ml-4 text-[#46464F] opacity-[.38] text-[16px] font-[400]'>
                  Download bukti pembayaran
                </p>
              </div>
            </div>
            <div className='flex flex-col ml-[450px] pr-[15px]'>
              <h1 className='mb-2 text-[20px] font-[500]'>Rp1.000.000</h1>
              <div className='flex flex-row justify-end mr-[8px]'>
                <img className='' alt='' src='src/assets/icon_completed.svg' />
                <p className='text-[12px] font-[500] text-[#008A3F] ml-2 mb-[4px] mt-1'>
                  Completed
                </p>
              </div>
            </div>
          </div>
          <hr className='w-[870px] mb-[15px]'></hr>

          <h1 className='text-center text-black text-[20px] font-[600] opacity-[.38]'>
            Lihat lebih banyak lagi
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HistoryPay;
