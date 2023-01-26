import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import imagetwo from '../../assets/img_kosTwo.png';
import imageconfirm from '../../assets/img_confirmPayment.png';
import iconlocation from '../../assets/icon_location.svg';
import iconarrowright from '../../assets/icon_arrow-right-2.svg';
import iconclose from '../../assets/icon_close.svg';
import iconarrowdown from '../../assets/icon_arrow-down.svg';


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
        img: imagetwo,
        btn: 'payment',
      },
    ];
    sethistories(historyList);
  }, []);

  return (
    <div className='pl-[70px] pt-[25px] font-[Montserrat]'>
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
                <Link to='/history'>
                  <p className='ml-1 md:ml-2 text-[20px] font-[600] text-[#000000] opacity-[.38] hover:text-[#0A008A] hover:opacity-100'>
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
          <Link to='/history/payment'>
            <p className='text-[#9b9b9b] hover:text-[#0A008A] text-[25px] font-[500] mb-[20px] text-left'>
              Pembayaran
            </p>
          </Link>
          <hr className='w-[350px] mb-[20px]'></hr>
          <Link to='/history/cancellation'>
            <p className='text-[#9b9b9b] hover:text-[#0A008A] text-[25px] font-[500] mb-[20px] text-left'>
              Pembatalan
            </p>
          </Link>
          <hr className='w-[350px] mb-[20px]'></hr>
        </div>

        <div className='flex flex-col ml-[70px] mt-[61px] mb-[100px]'>
          {histories.map((history, index) => {
            return (
              <React.Fragment key={index}>
                <div>
                  <div className='flex flex-row py-[16px] text-black'>
                    <img className='w-[200px] h-[142.58px] self-center' alt='' src={history.img} />
                    <div className='flex flex-col ml-[42.5px] text-left w-[265px]'>
                      <h1 className='text-[20px] font-[600]'>{history.name}</h1>
                      <div className='flex flex-'>
                        <img className='' alt='' src={ iconlocation } />
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
                          <img className='' alt='' src={ iconarrowright } />
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
              <img className='' alt='' src={ iconarrowdown } />
            </label>
            <ul
              tabIndex={0}
              className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-[400px] drop-shadow-md'
            >
              <p className='m-[10px] text-[24px] font-[600]'>Opsi Bayar</p>
              <hr></hr>
              <div className='form-control mb-[5px] pt-[10px] pl-[10px]'>
                <label className='label cursor-pointer'>
                  <span className='text-[20x] font-[500]'>Transfer Bank</span>
                  <input type='radio' name='payOption' className='radio' checked />
                </label>
              </div>
              <div className='form-control pb-[10px] pl-[10px]'>
                <label className='label cursor-pointer'>
                  <span className='text-[20x] font-[500]'>Tunai</span>
                  <input type='radio' name='payOption' className='radio' checked />
                </label>
              </div>
            </ul>
          </div>
          <p className='w-[867px] mb-[80px] text-[16px] font-[400]'>
            *Pastikan memilih opsi dengan benar sebab opsi yang telah dipilih tidak dapat dirubah,
            setelah memilih opsi, segera lakukan pembayaran
          </p>
          <div className='text-center'>
            <label
              htmlFor='my-modal'
              className='md:w-[400px] md:h-[43px] md:text-[16px] min-[393px]:w-[362px] min-[393px]:h-[36px] min-[393px]:text-[14px] cursor-pointer inline-flex items-center justify-center p-0 rounded-[150px] outline-none font-[600] bg-[#0A008A] text-white hover:bg-[#A0A3FF] hover:text-[#0A008A] active:bg-[#000000] active:text-white'
            >
              Bayar kos
            </label>
          </div>
        </div>

        <input type='checkbox' id='my-modal' className='modal-toggle' />
        <div className='modal'>
          <div className='modal-box max-w-5xl w-[790px] rounded-[32px] bg-white drop-shadow-md'>
            <div className='flex flex-row justify-between mt-[60px] mb-[30px] mx-[20px]'>
              <div className='w-[20px]'></div> {/* dummy */}
              <img className='' alt='' src={imageconfirm} />
              <label htmlFor='my-modal'>
                <img className='mt-[-35px] cursor-pointer' alt='' src={ iconclose } />
              </label>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <h3 className='mb-[20px] text-[25px] font-[600]'>Apakah metode pembayaran benar?</h3>
              <p className='mb-[30px] text-[16px] font-[500] w-[450px] text-center'>
                Periksa lagi pesananmu! opsi pembayaran yang sudah dipilih sudah tidak dapat dirubah
              </p>
            </div>
            <div className='flex flex-row justify-center gap-5 mt-[20px] mb-[60px]'>
              <label
                htmlFor='my-modal'
                className='cursor-pointer inline-flex items-center justify-center w-[151px] h-[43px] p-0 bg-white border-2 border-[#0A008A] self-end rounded-[4px] outline-none text-[16px] font-[600] text-[#0A008A] hover:bg-[#f3f4ff] hover:border-[#0A008A] hover:text-[#0A008A] active:bg-[#0A008A] active:text-white'
              >
                Periksa lagi
              </label>
              <Link to='/history/booknow/receipt'>
                <label
                  htmlFor='my-modal'
                  className='cursor-pointer inline-flex items-center justify-center w-[151px] h-[43px] p-0 bg-[#0A008A] border-2 border-[#0A008A] self-end rounded-[4px] outline-none text-[16px] font-[600] text-white hover:bg-[#A0A3FF] hover:border-[#A0A3FF] hover:text-[#0A008A] active:bg-black active:text-white'
                >
                  Lanjutkan
                </label>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayNow;
