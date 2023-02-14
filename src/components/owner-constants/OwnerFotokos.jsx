import React, { useState } from 'react';
import kosimg from '../../assets/city-card.svg';
import { Link } from 'react-router-dom';

const OwnerFotokos = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <React.Fragment>
      <div className='grid grid-cols-5 text-[16px] font-[400] font-montserrat'>
        <div className='col-span-1 bg-[#0A008A] h-full'></div>
        <div className='col-span-4 flex justify-center'>
          <div className='w-11/12 grid grid-flow-row py-10 gap-y-6'>
            <div>
              <p className='font-[700] text-[38px]'>Pasang Foto Kos</p>
              <p className='text-[20px] w-3/5'>
                Foto kos tampak depan merupakan foto yang dilihat calon penyewa di halaman depan
              </p>
            </div>

            <div
              className='grid grid-flow-col auto-cols-max w-max content-center gap-x-2 py-1 px-3
            border-2 border-[#CECECE] rounded-[4px]'
            >
              <svg
                className='w-[26px] h-[26px] self-center'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M13.0001 9.7512V13.8137M2.9216 17.4706C1.9841 19.0956 3.15689 21.1262 5.03293 21.1262H20.9673C22.8433 21.1262 24.0161 19.0956 23.0786 17.4706L15.1114 3.66083C14.1734 2.03493 11.8268 2.03493 10.8888 3.66083L2.9216 17.4706ZM13.0001 17.0637H13.0082V17.0718H13.0001V17.0637Z'
                  stroke='#BA1A1A'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              <div className='text-[12px]'>
                <p className='font-[600]'>Aturan Foto</p>
                <p>Foto tidak terbalik , tidak ada teks dan logo, serta tidak berupa kolase</p>
              </div>
            </div>

            <div className='grid grid-flow-row gap-y-6 auto-cols-max'>
              <div className='grid grid-flow-row gap-y-3'>
                <p className='font-[600]'>Foto Bangunan Tampak Depan</p>
                <p>Foto bangunan dalam keadaan horizontal</p>
                <div className='relative'>
                  <div className='w-max h-auto'>
                    <img
                      src={kosimg}
                      alt=''
                      onClick={() => setShowModal(true)}
                      className='cursor-pointer w-max h-auto'
                    />
                    {/* Modal Pop Up */}
                    {showModal && (
                      <div className='absolute inset-0 w-[411px] bg-black bg-opacity-50 flex items-center justify-center'>
                        <div className='bg-white grid grid-flow-row gap-4 p-4 rounded-[8px]'>
                          <button
                            onClick={() => setShowModal(false)}
                            className='border-2 border-[#BA1A1A] rounded-[4px] text-[#BA1A1A] font-[600] p-2 px-4 flex space-x-2'
                          >
                            <svg
                              width='24'
                              height='24'
                              viewBox='0 0 24 24'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M14.7404 9L14.3942 18M9.60577 18L9.25962 9M19.2276 5.79057C19.5696 5.84221 19.9104 5.89747 20.25 5.95629M19.2276 5.79057L18.1598 19.6726C18.0696 20.8448 17.0921 21.75 15.9164 21.75H8.08357C6.90786 21.75 5.93037 20.8448 5.8402 19.6726L4.77235 5.79057M19.2276 5.79057C18.0812 5.61744 16.9215 5.48485 15.75 5.39432M3.75 5.95629C4.08957 5.89747 4.43037 5.84221 4.77235 5.79057M4.77235 5.79057C5.91878 5.61744 7.07849 5.48485 8.25 5.39432M15.75 5.39432V4.47819C15.75 3.29882 14.8393 2.31423 13.6606 2.27652C13.1092 2.25889 12.5556 2.25 12 2.25C11.4444 2.25 10.8908 2.25889 10.3394 2.27652C9.16065 2.31423 8.25 3.29882 8.25 4.47819V5.39432M15.75 5.39432C14.5126 5.2987 13.262 5.25 12 5.25C10.738 5.25 9.48744 5.2987 8.25 5.39432'
                                stroke='#BA1A1A'
                                strokeWidth='1.5'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                            </svg>
                            <p>Hapus</p>
                          </button>
                          <button
                            onClick={() => setShowModal(false)}
                            className='border-2 border-[#0A008A] rounded-[4px] text-[#0A008A] font-[600] p-2 flex space-x-2'
                          >
                            <svg
                              width='24'
                              height='24'
                              viewBox='0 0 24 24'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M6.82689 6.1749C6.46581 6.75354 5.86127 7.13398 5.186 7.22994C4.80655 7.28386 4.42853 7.34223 4.05199 7.40497C2.99912 7.58042 2.25 8.50663 2.25 9.57402V18C2.25 19.2426 3.25736 20.25 4.5 20.25H19.5C20.7426 20.25 21.75 19.2426 21.75 18V9.57403C21.75 8.50664 21.0009 7.58043 19.948 7.40498C19.5715 7.34223 19.1934 7.28387 18.814 7.22995C18.1387 7.13398 17.5342 6.75354 17.1731 6.17491L16.3519 4.85889C15.9734 4.25237 15.3294 3.85838 14.6155 3.82005C13.7496 3.77355 12.8775 3.75 12 3.75C11.1225 3.75 10.2504 3.77355 9.3845 3.82005C8.6706 3.85838 8.02658 4.25237 7.64809 4.85889L6.82689 6.1749Z'
                                stroke='#0A008A'
                                strokeWidth='1.5'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                              <path
                                d='M16.5 12.75C16.5 15.2353 14.4853 17.25 12 17.25C9.51472 17.25 7.5 15.2353 7.5 12.75C7.5 10.2647 9.51472 8.25 12 8.25C14.4853 8.25 16.5 10.2647 16.5 12.75Z'
                                stroke='#0A008A'
                                strokeWidth='1.5'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                              <path
                                d='M18.75 10.5H18.7575V10.5075H18.75V10.5Z'
                                stroke='#0A008A'
                                strokeWidth='1.5'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                            </svg>
                            <p>Ganti Foto</p>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <img src={kosimg} alt='' />
                </div>
              </div>
              <div className='grid grid-flow-row gap-y-3'>
                <p className='font-[600]'>Foto Tampilan Dalam Bangunan</p>
                <p>Foto fasilitas atau ruangan dalam bangunan dalam keadaan terang</p>
                <div>
                  <img src={kosimg} alt='' />
                </div>
              </div>
            </div>

            <div className='grid grid-flow-col place-content-between pt-24'>
              <Link to='/owner/kostfacility'>
                <button
                  className='border-2 border-[#0A008A] text=[#0A008A] bg-white font-[600] p-2 px-3'
                  type='button'
                >
                  Kembali
                </button>
              </Link>

              <Link to='/owner/roomdetails'>
                <button
                  className='border-2 border-[#0A008A] bg-[#0A008A] text-white font-[600] p-2 px-3'
                  type='button'
                >
                  Simpan & Lanjutkan
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default OwnerFotokos;
