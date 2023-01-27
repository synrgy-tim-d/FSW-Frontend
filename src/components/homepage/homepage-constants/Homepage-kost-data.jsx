import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import image from '../../../assets/Homepage-Kos1.svg';

const Kostdata = () => {
  const [kosts, setKosts] = useState([]);
  useEffect(() => {
    const kostList = [
      {
        id: 1,
        name: 'Kos Alamanda',
        type: 'Campur',
        room: 5,
        description:
          'Rincian alamat kos secara lengkap dan kode pos Rincian alamat kos secara lengkap dan kode pos',
        review: 5,
        location: {
          name: 'Yogyakarta',
        },
        facilities: [
          {
            name: 'Wi-Fi',
          },
          {
            name: 'AC',
          },
          {
            name: 'KM Dalam',
          },
        ],
        price: '1.000.000',
      },
      {
        id: 2,
        name: 'Kos Cendana',
        type: 'Putri',
        room: 12,
        description:
          'Rincian alamat kos secara lengkap dan kode pos Rincian alamat kos secara lengkap dan kode pos',
        review: 4.5,
        location: {
          name: 'Surakarta',
        },
        facilities: [
          {
            name: 'Listrik',
          },
          {
            name: 'AC',
          },
          {
            name: 'TV',
          },
        ],
        price: '1.000.000',
      },
      {
        id: 3,
        name: 'Kos Jupiter',
        type: 'Putra',
        room: 2,
        description:
          'Rincian alamat kos secara lengkap dan kode pos Rincian alamat kos secara lengkap dan kode pos',
        review: 2.7,
        location: {
          name: 'Jakarta Timur',
        },
        facilities: [
          {
            name: 'Listrik',
          },
          {
            name: 'Wifi',
          },
          {
            name: 'AC',
          },
        ],
        price: '3.000.000',
      },
      {
        id: 4,
        name: 'Kos Saturnus',
        type: 'Putri',
        room: 9,
        description:
          'Rincian alamat kos secara lengkap dan kode pos Rincian alamat kos secara lengkap dan kode pos',
        review: 4.2,
        location: {
          name: 'Surabaya',
        },
        facilities: [
          {
            name: 'KM Dalam',
          },
          {
            name: 'Wifi',
          },
          {
            name: 'Kipas Angin',
          },
        ],
        price: '600.000',
      },
    ];
    setKosts(kostList);
  }, []);

  return (
    <div className='text-[20px] font-[Montserrat] text-[#000000] col-span-3 grid grid-cols-auto auto-rows-max gap-8 px-4'>
      {kosts.map((kost, index) => {
        return (
          <React.Fragment key={index}>
            <div className='grid grid-cols-3 grid-flow-col bg-white rounded-[16px]'>
              <div className='col-span-1 rounded-[16px]'>
                <img className='w-full h-auto' src={image} alt='' />
              </div>
              <div className='col-span-2 grid grid-rows-auto grid-flow-row gap-2 p-4'>
                <div className='grid grid-flow-col'>
                  <div className='grid grid-cols-auto grid-flow-col auto-cols-max content-center'>
                    <div className='w-[85px] border-2 border-[#0A008A] rounded-[150px] flex justify-center text-[16px] font-[600]'>
                      {kost.type}
                    </div>
                    <span className='text-[#BA1A1A] italic pl-2 self-center'>
                      sisa {kost.room} kamar
                    </span>
                  </div>
                  <div className='flex justify-end self-center pr-4'>
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M21 8.25C21 5.76472 18.9013 3.75 16.3125 3.75C14.3769 3.75 12.7153 4.87628 12 6.48342C11.2847 4.87628 9.62312 3.75 7.6875 3.75C5.09867 3.75 3 5.76472 3 8.25C3 15.4706 12 20.25 12 20.25C12 20.25 21 15.4706 21 8.25Z'
                        stroke='#3C3C3C'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                </div>

                <div className='grid grid-rows-auto'>
                  <p>{kost.name}</p>
                  <p>
                    Rincian alamat kos secara lengkap dan kode pos Rincian alamat kos secara lengkap
                    dan kode pos
                    <span className='text-[#000000]/[0.38] pl-2'>
                      <Link to='/kos' >
                        ...selengkapnya
                      </Link>
                    </span>
                  </p>
                </div>

                <div className='grid grid-cols-auto grid-flow-col auto-cols-max gap-2 content-center'>
                  <span className='self-center'>
                    <svg
                      width='12'
                      height='12'
                      viewBox='0 0 12 12'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M5.23196 0.582073C5.47408 -0.194024 6.52571 -0.194024 6.76703 0.582073L7.63061 3.35614C7.68337 3.52508 7.78593 3.67229 7.92363 3.77672C8.06134 3.88114 8.22714 3.93745 8.39733 3.93758H11.1914C11.9735 3.93758 12.298 4.98249 11.666 5.46281L9.40618 7.1768C9.2682 7.28131 9.16545 7.42876 9.11268 7.59801C9.0599 7.76725 9.05981 7.9496 9.11241 8.1189L9.97598 10.893C10.2181 11.6691 9.36664 12.3154 8.73308 11.8351L6.47325 10.1211C6.33541 10.0166 6.16943 9.96032 5.99909 9.96032C5.82875 9.96032 5.66277 10.0166 5.52493 10.1211L3.2651 11.8351C2.63235 12.3154 1.78169 11.6691 2.023 10.893L2.88658 8.1189C2.93918 7.9496 2.93909 7.76725 2.88631 7.59801C2.83354 7.42876 2.73079 7.28131 2.5928 7.1768L0.333783 5.46365C-0.298162 4.98333 0.0270921 3.93842 0.808347 3.93842H3.60166C3.77199 3.93847 3.93797 3.88225 4.07583 3.77781C4.2137 3.67337 4.31639 3.52606 4.36919 3.35698L5.23196 0.582073Z'
                        fill='#FFBA2C'
                      />
                    </svg>
                  </span>
                  <p className='font-[500]'>
                    {kost.review}
                    <span className='italic pl-1 text-[12px]'>(7 reviews)</span>
                  </p>
                  <span className='self-center'>
                    <svg
                      width='12'
                      height='15'
                      viewBox='0 0 12 15'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M1.75747 2.01515C2.88267 0.889947 4.40878 0.257813 6.00006 0.257812C7.59135 0.257813 9.11745 0.889947 10.2427 2.01515C11.3679 3.14036 12 4.66647 12 6.25775C12 7.84903 11.3679 9.37514 10.2427 10.5003L6.00006 14.7429L1.75747 10.5003C1.20029 9.94322 0.758301 9.2818 0.456753 8.55385C0.155205 7.8259 0 7.04568 0 6.25775C0 5.46981 0.155205 4.6896 0.456753 3.96165C0.758301 3.2337 1.20029 2.57228 1.75747 2.01515ZM6.00006 7.97193C6.45469 7.97193 6.8907 7.79133 7.21217 7.46986C7.53364 7.14839 7.71424 6.71238 7.71424 6.25775C7.71424 5.80312 7.53364 5.36711 7.21217 5.04564C6.8907 4.72417 6.45469 4.54357 6.00006 4.54357C5.54543 4.54357 5.10943 4.72417 4.78796 5.04564C4.46648 5.36711 4.28588 5.80312 4.28588 6.25775C4.28588 6.71238 4.46648 7.14839 4.78796 7.46986C5.10943 7.79133 5.54543 7.97193 6.00006 7.97193Z'
                        fill='#0A008A'
                      />
                    </svg>
                  </span>
                  <p className='font-[500]'>{kost.location.name}</p>
                </div>

                <div className='grid grid-flow-col'>
                  <div className='grid grid-flow-col auto-cols-max gap-4 text-[#0A008A] font-[600]'>
                    {kost.facilities.map((facility, index) => {
                      return (
                        <React.Fragment key={index}>
                          <div className='border-2 rounded-[4px] border-[#0A008A] p-2 self-center'>
                            {facility.name}
                          </div>
                        </React.Fragment>
                      );
                    })}
                  </div>
                  <div className='flex justify-end'>
                    <p className='text-[20px] font-[700]'>
                      Rp {kost.price}
                      <span className='text-[16px] font-[400]'>/bulan</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Kostdata;
