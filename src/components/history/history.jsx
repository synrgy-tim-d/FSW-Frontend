import React from 'react';

const History = () => {
  return (
    <div className='pl-[70px] pt-[25px] w-screen font-[Montserrat]'>
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
                <span className='ml-1 md:ml-2 text-[20px] font-[600] text-[#0A008A] underline'>
                  Pemesanan Kos
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
            className='text-[#0A008A] hover:text-[#9b9b9b] text-[25px] font-[500] mb-[20px] text-left'
          >
            Pemesanan Kos
          </a>
          <hr className='w-[350px] mb-[20px]'></hr>
          <a
            href='/paymenthistory'
            className='text-[#9b9b9b] hover:text-[#0A008A] text-[25px] font-[500] mb-[20px] text-left'
          >
            Pembayaran
          </a>
          <hr className='w-[350px] mb-[20px]'></hr>
          <a
            href='/cancellationhistory'
            className='text-[#9b9b9b] hover:text-[#0A008A] text-[25px] font-[500] mb-[20px] text-left'
          >
            Pembatalan
          </a>
          <hr className='w-[350px] mb-[20px]'></hr>
        </div>

        {/* --- Content if Empty --- */}
        {/* <div className='flex flex-col text-center text-black ml-[80px] mt-[181px]'>
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
        <div className='flex flex-col ml-[70px] mt-[61px]'>
          <div className='flex flex-row py-[16px] text-black'>
            <img
              className='w-[200px] h-[142.58px] self-center'
              alt=''
              src='src/assets/img_unavailable.png'
            />
            <div className='flex flex-col ml-[42.5px] text-left w-[265px]'>
              <h1 className='text-[20px] font-[600]'>Nama Kos</h1>
              <div className='flex flex-row'>
                <img className='' alt='' src='src/assets/icon_location.svg' />
                <p className='text-[16px] font-[500] ml-2 mb-[4px] mt-1'>Kota</p>
              </div>
              <p className='text-[16px] font-[500] mb-[12px]'>Booking ID: 00000000</p>
              <div className='flex flex-row'>
                <div className='flex flex-col text-center'>
                  <p className='text-[12px] font-[400] mb-[4px]'>Check in</p>
                  <p className='text-[16px] font-[400]'>April 01, 23</p>
                </div>
                <div className='flex flex-col mx-[12px] justify-center'>
                  <img className='' alt='' src='src/assets/icon_arrow-right-2.svg' />
                </div>
                <div className='flex flex-col text-center'>
                  <p className='text-[12px] font-[400] mb-[4px]'>Check out</p>
                  <p className='text-[16px] font-[400]'>April 30, 23</p>
                </div>
              </div>
            </div>
            <div className='flex flex-col ml-[175px] pr-[10px]'>
              <button
                disabled
                className='cursor-not-allowed w-[178px] h-[43px] mb-[65px] p-0 bg-[#e9e9ea] self-center rounded-[4px] outline-none text-[16px] font-[600] text-[#ababaf] hover:border-[#e9e9ea]'
                type='submit'
              >
                Bayar Sekarang
              </button>
              <div className='flex flex-row justify-end mr-[8px]'>
                <img className='' alt='' src='src/assets/icon_pending.svg' />
                <p className='text-[12px] font-[500] text-[#EA9A3D] ml-2 mb-[4px] mt-1'>Pending</p>
              </div>
            </div>
          </div>
          <hr className='w-[870px] mb-[15px]'></hr>

          <div className='flex flex-row py-[16px] text-black'>
            <img
              className='w-[200px] h-[142.58px] self-center'
              alt=''
              src='src/assets/img_unavailable.png'
            />
            <div className='flex flex-col ml-[42.5px] text-left w-[265px]'>
              <h1 className='text-[20px] font-[600]'>Nama Kos</h1>
              <div className='flex flex-row'>
                <img className='' alt='' src='src/assets/icon_location.svg' />
                <p className='text-[16px] font-[500] ml-2 mb-[4px] mt-1'>Kota</p>
              </div>
              <p className='text-[16px] font-[500] mb-[12px]'>Booking ID: 00000000</p>
              <div className='flex flex-row'>
                <div className='flex flex-col text-center'>
                  <p className='text-[12px] font-[400] mb-[4px]'>Check in</p>
                  <p className='text-[16px] font-[400]'>April 01, 23</p>
                </div>
                <div className='flex flex-col mx-[12px] justify-center'>
                  <img className='' alt='' src='src/assets/icon_arrow-right-2.svg' />
                </div>
                <div className='flex flex-col text-center'>
                  <p className='text-[12px] font-[400] mb-[4px]'>Check out</p>
                  <p className='text-[16px] font-[400]'>April 30, 23</p>
                </div>
              </div>
            </div>
            <div className='flex flex-col ml-[175px] pr-[10px]'>
              <button
                className='w-[178px] h-[43px] mb-[65px] p-0 bg-[#0A008A] border-0 self-center rounded-[4px] outline-none text-[16px] font-[600] text-white hover:bg-[#A0A3FF] hover:text-[#0A008A] focus:bg-black focus:text-white focus:outline-none'
                type='submit'
              >
                Bayar Sekarang
              </button>
              <div className='flex flex-row justify-end mr-[8px]'>
                <img className='' alt='' src='src/assets/icon_pending.svg' />
                <p className='text-[12px] font-[500] text-[#EA9A3D] ml-2 mb-[4px] mt-1'>Pending</p>
              </div>
            </div>
          </div>
          <hr className='w-[870px] mb-[15px]'></hr>

          <div className='flex flex-row py-[16px] text-black'>
            <img
              className='w-[200px] h-[142.58px] self-center'
              alt=''
              src='src/assets/img_unavailable.png'
            />
            <div className='flex flex-col ml-[42.5px] text-left w-[265px]'>
              <h1 className='text-[20px] font-[600]'>Nama Kos</h1>
              <div className='flex flex-row'>
                <img className='' alt='' src='src/assets/icon_location.svg' />
                <p className='text-[16px] font-[500] ml-2 mb-[4px] mt-1'>Kota</p>
              </div>
              <p className='text-[16px] font-[500] mb-[12px]'>Booking ID: 00000000</p>
              <div className='flex flex-row'>
                <div className='flex flex-col text-center'>
                  <p className='text-[12px] font-[400] mb-[4px]'>Check in</p>
                  <p className='text-[16px] font-[400]'>April 01, 23</p>
                </div>
                <div className='flex flex-col mx-[12px] justify-center'>
                  <img className='' alt='' src='src/assets/icon_arrow-right-2.svg' />
                </div>
                <div className='flex flex-col text-center'>
                  <p className='text-[12px] font-[400] mb-[4px]'>Check out</p>
                  <p className='text-[16px] font-[400]'>April 30, 23</p>
                </div>
              </div>
            </div>
            <div className='flex flex-col ml-[201px] pr-[10px]'>
              <button
                className='w-[151px] h-[43px] mb-[65px] p-0 bg-white border-2 border-[#0A008A] self-center rounded-[4px] outline-none text-[16px] font-[600] text-[#0A008A] hover:bg-[#f3f4ff] hover:border-[#0A008A] hover:text-[#0A008A] focus:bg-[#0A008A] focus:text-white focus:outline-none'
                type='submit'
              >
                Tulis Review
              </button>
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

export default History;
