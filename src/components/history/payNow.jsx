import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PayNow = () => {
  const [histories, sethistories] = useState([]);

  useEffect(() => {
    const historyList = [
      {
        id: 2,
        name: 'Kos Beringin',
        location: {
          name: 'Yogyakarta',
        },
        bookId: '00000002',
        inDate: 'April 03, 23',
        outDate: 'May 03, 23',
        img: 'src/assets/img_kosTwo.png',
        btn: 'payment',
      },
    ];
    sethistories(historyList);
  }, []);

  return (
    <div className='pl-[70px] pt-[25px] w-screen font-[Montserrat]'>
      {/* --- Breadcrumb --- */}
      <div className='flex flex-row'>
        <nav className='flex' aria-label='Breadcrumb'>
          <ol className='inline-flex items-center space-x-1 md:space-x-3'>
            <li className='inline-flex items-center'>
              <Link to='/'>
                <p className='text-[20px] font-[600] text-[#000000] opacity-[.38] hover:text-[#0A008A] hover:opacity-100'>
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
          <Link to='/history'>
            <p className='text-[#0A008A] hover:text-[#9b9b9b] text-[25px] font-[500] mb-[20px] text-left'>
              Pemesanan Kos
            </p>
          </Link>
          <hr className='w-[350px] mb-[20px]'></hr>
          <Link to=''>
            <p className='text-[#9b9b9b] hover:text-[#0A008A] text-[25px] font-[500] mb-[20px] text-left'>
              Menunggu Konfirmasi
            </p>
          </Link>
          <hr className='w-[350px] mb-[20px]'></hr>
          <Link to='/paymenthistory'>
            <p className='text-[#9b9b9b] hover:text-[#0A008A] text-[25px] font-[500] mb-[20px] text-left'>
              Pembayaran
            </p>
          </Link>
          <hr className='w-[350px] mb-[20px]'></hr>
          <Link to='/cancellationhistory'>
            <p className='text-[#9b9b9b] hover:text-[#0A008A] text-[25px] font-[500] mb-[20px] text-left'>
              Pembatalan
            </p>
          </Link>
          <hr className='w-[350px] mb-[20px]'></hr>
        </div>

        <div className='flex flex-col ml-[70px] mt-[61px]'>
          {histories.map((history, index) => {
            return (
              <React.Fragment key={index}>
                <div>
                  <div className='flex flex-row py-[16px] text-black'>
                    <img className='w-[200px] h-[142.58px] self-center' alt='' src={history.img} />
                    <div className='flex flex-col ml-[42.5px] text-left w-[265px]'>
                      <h1 className='text-[20px] font-[600]'>{history.name}</h1>
                      <div className='flex flex-'>
                        <img className='' alt='' src='src/assets/icon_location.svg' />
                        <p className='text-[16px] font-[500] ml-2 mb-[4px] mt-1'>
                          {history.location.name}
                        </p>
                      </div>
                      <p className='text-[16px] font-[500] mb-[12px]'>
                        Booking ID: {history.bookId}
                      </p>
                      <div className='flex flex-row'>
                        <div className='flex flex-col text-center'>
                          <p className='text-[12px] font-[400] mb-[4px]'>Check in</p>
                          <p className='text-[16px] font-[400]'>{history.inDate}</p>
                        </div>
                        <div className='flex flex-col mx-[12px] justify-center'>
                          <img className='' alt='' src='src/assets/icon_arrow-right-2.svg' />
                        </div>
                        <div className='flex flex-col text-center'>
                          <p className='text-[12px] font-[400] mb-[4px]'>Check out</p>
                          <p className='text-[16px] font-[400]'>{history.outDate}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className='w-[870px] mb-[30px]'></hr>
                </div>
              </React.Fragment>
            );
          })}
          <h1 className='mb-[20px] text-black text-[25px] font-[600]'>Rincian Pembayaran</h1>
          <div className='mb-[50px] w-[870px] h-[210px] py-[28px] px-[40px] rounded-[16px] bg-[#e4e4fc] text-black'>
            <div className='flex flex-row justify-between'>
              <div className='flex flex-col'>
                <p className='mb-[20px] text-[20px] font-[500]'>Harga kos</p>
                <p className='mb-[20px] text-[20px] font-[500]'>Waktu sewa</p>
              </div>
              <div className='flex flex-col text-right'>
                <p className='mb-[20px] text-[14px] font-[500]'>
                  <strong className='text-[20px] font-[600]'>Rp300.000</strong>/minggu
                </p>
                <p className='mb-[20px] text-[20px] font-[500]'>1 minggu</p>
              </div>
            </div>
            <hr className='mb-[20px] border-[1px] border-[#0A008A]'></hr>
            <div className='flex flex-row justify-between'>
              <div className='flex flex-col'>
                <p className='text-[20px] font-[600]'>Total Pembayaran</p>
              </div>
              <div className='flex flex-col text-right'>
                <p className='text-[20px] font-[600]'>Rp300.000</p>
              </div>
            </div>
          </div>
          <h1 className='mb-[20px] text-black text-[25px] font-[600]'>Bayar Melalui</h1>
          <div className='dropdown'>
            <label
              tabIndex={0}
              className='justify-between cursor-pointer inline-flex items-center w-[294px] h-[48px] mb-[20px] px-4 p-0 bg-white border-2 border-[#0A008A] rounded-[8px] outline-none text-[20px] font-[500] text-black hover:bg-[#f3f4ff] hover:border-[#0A008A] hover:text-[#0A008A] active:bg-[#0A008A] active:text-white'
            >
              Transfer Bank
              <img className='' alt='' src='src/assets/icon_arrow-down.svg' />
            </label>
            <ul
              tabIndex={0}
              className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'
            >
              <p>
                Opsi Bayar <hr></hr>
              </p>
              <li>
                Transfer Bank
              </li>
              <li>
                Tunai
              </li>
            </ul>
          </div>
          <p className='w-[867px] mb-[80px] text-[16px] font-[400]'>
            *Pastikan memilih opsi dengan benar sebab opsi yang telah dipilih tidak dapat dirubah,
            setelah memilih opsi, segera lakukan pembayaran
          </p>
          <div className='text-center'>
            <Link to=''>
              <button
                className='md:w-[400px] md:h-[43px] md:text-[16px] md:pt-2 min-[393px]:w-[362px] min-[393px]:h-[36px] min-[393px]:text-[14px] min-[393px]:pt-1 bg-[#0A008A] rounded-[150px] outline-none font-[600] text-white hover:bg-[#A0A3FF] hover:text-[#0A008A] focus:bg-[#000000] focus:text-white focus:outline-none'
                type='submit'
              >
                Bayar kos
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayNow;
