import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ButtonDisabled, ButtonPayment, ButtonReview } from './buttonsHistory';
import imageone from '../../assets/img_kosOne.png';
import imagetwo from '../../assets/img_kosTwo.png';
import imagethree from '../../assets/img_kosThree.png';
import iconlocation from '../../assets/icon_location.svg';
import iconarrowright from '../../assets/icon_arrow-right-2.svg';
import iconclose from '../../assets/icon_close.svg';

const History = () => {
  const [histories, sethistories] = useState([]);

  useEffect(() => {
    const historyList = [
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
        btn: 'disabled',
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
        <div className='flex flex-col ml-[70px] mt-[61px] mb-[100px]'>
          {histories.map((history, index) => {
            let component = null;
            switch (history.btn) {
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
                    {component}
                  </div>
                  <hr className='w-[870px] mb-[30px]'></hr>
                </div>
              </React.Fragment>
            );
          })}
          <h1 className='text-center text-black text-[20px] font-[600] opacity-[.38]'>
            Lihat lebih banyak lagi
          </h1>
        </div>

        <input type='checkbox' id='my-modal' className='modal-toggle' />
        <div className='modal'>
          <div className='modal-box max-w-5xl w-[895px] rounded-[32px] bg-white drop-shadow-[4px_4px_8px_rgba(0,0,0,0.15)]'>
            <div className='flex flex-row justify-between mt-[20px] mx-[20px]'>
              <div className='w-[20px]'></div> {/* dummy */}
              <img className='w-[200px] h-[142.58px]' alt='' src={imagethree} />
              <label htmlFor='my-modal'>
                <img className='mb-[115px] cursor-pointer' alt='' src={ iconclose } />
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
            <div className='flex flex-row justify-center text-center'>
              <div className='w-[695px] h-[180px] rounded-[8px] bg-[#F2EFFF] py-[18px] mt-[30px]'>
                <textarea
                  placeholder='Tambahkan komentar...'
                  className='w-[650px] h-[145px] rounded-[8px] px-3 py-2 focus:outline-none'
                />
              </div>
            </div>
            <div className='flex flex-row justify-end gap-5 mr-[75px] mt-[20px] mb-[20px]'>
              <label
                htmlFor='my-modal'
                className='cursor-pointer inline-flex items-center justify-center w-[151px] h-[43px] p-0 bg-white border-2 border-[#0A008A] self-end rounded-[4px] outline-none text-[16px] font-[600] text-[#0A008A] hover:bg-[#f3f4ff] hover:border-[#0A008A] hover:text-[#0A008A] active:bg-[#0A008A] active:text-white'
              >
                Batalkan
              </label>
              <label
                htmlFor='my-modal'
                className='cursor-pointer inline-flex items-center justify-center w-[151px] h-[43px] p-0 bg-[#0A008A] border-2 border-[#0A008A] self-end rounded-[4px] outline-none text-[16px] font-[600] text-white hover:bg-[#A0A3FF] hover:border-[#A0A3FF] hover:text-[#0A008A] active:bg-black active:text-white'
              >
                Kirim
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
