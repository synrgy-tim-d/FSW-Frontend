import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import kosimg from '../../assets/city-card.svg';

const OwnerDataKamar = () => {
  const [hariState, setHariState] = useState(false);
  const [mingguState, setMingguState] = useState(false);
  const [bulanState, setBulanState] = useState(false);

  const handleChange = (event) => {
    if (event.target.checked) {
      switch (event.target.id) {
        case 'sewaHari':
          setHariState(true);
          break;
        case 'sewaMinggu':
          setMingguState(true);
          break;
        case 'sewaBulan':
          setBulanState(true);
          break;
      }
    } else {
      switch (event.target.id) {
        case 'sewaHari':
          setHariState(false);
          break;
        case 'sewaMinggu':
          setMingguState(false);
          break;
        case 'sewaBulan':
          setBulanState(false);
          break;
      }
    }
  };

  const sewaPerHari = () => {
    return (
      <div className='gap-y-3 grid grid-flow-row text-[#B9B9BC]'>
        <p className='font-[600]'>Harga Sewa Per Hari</p>
        <input
          type='number'
          className='border-2 rounded-full font-[500] py-2 px-3'
          placeholder='Rp0'
        />
      </div>
    );
  };
  const sewaPerMinggu = () => {
    return (
      <div className='gap-y-3 grid grid-flow-row text-[#B9B9BC]'>
        <p className='font-[600]'>Harga Sewa Per Minggu</p>
        <input
          type='number'
          className='border-2 rounded-full font-[500] py-2 px-3'
          placeholder='Rp0'
        />
      </div>
    );
  };
  const sewaPerBulan = () => {
    return (
      <div className='gap-y-3 grid grid-flow-row text-[#B9B9BC]'>
        <p className='font-[600]'>Harga Sewa Per Bulan</p>
        <input
          type='number'
          className='border-2 rounded-full font-[500] py-2 px-3'
          placeholder='Rp0'
        />
      </div>
    );
  };

  return (
    <React.Fragment>
      <div className='grid grid-cols-5 text-[16px] font-[400] font-montserrat'>
        <div className='col-span-1 bg-[#0A008A] h-full'></div>

        <div className='col-span-4 flex justify-center'>
          <div className='w-11/12 grid grid-flow-row py-10 gap-y-6'>
            <div>
              <p className='font-[700] text-[38px]'>Silahkan Lengkapi Data Kamar</p>
              <p className='text-[20px] w-3/5'>
                Informasi dibawah merupakan data untuk tipe-tipe kamar
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
                <p className='font-[600]'>Aturan Jenis Kamar</p>
                <p>
                  Jenis kamar yang disediakan hanya 1, saran: gunakan kamar tipe reguler atau
                  default
                </p>
              </div>
            </div>

            <div className='grid grid-flow-row gap-y-6 auto-cols-max '>
              <div className='gap-y-3 grid grid-flow-row'>
                <p className='font-[600]'>Deskipsi Kamar</p>
                <p>Jabarkan secara rinci tentang kamar</p>
                <textarea
                  className='font-[600] text-gray-700  border-2 border-[#CECECE] rounded-[8px] px-2 py-2 w-[820px] h-[180px]'
                  placeholder='Tuliskan ukuran kamar, nomor kamar, dan lantai. Tuliskan pula hal menarik tentang kamar.'
                />
              </div>

              <div className='grid grid-flow-row gap-y-3'>
                <p className='font-[600]'>Fasilitas Kamar</p>
                <p>Fasilitas yang tersedia di kamar tipe ini</p>
                <ul className='grid grid-flow-row gap-y-3'>
                  <li className='flex items-center'>
                    <input type='checkbox' className='w-5 h-5 '></input>
                    <label className='font-[500] ml-2'>Wi-Fi</label>
                  </li>
                  <li className='flex items-center'>
                    <input type='checkbox' className='w-5 h-5 '></input>
                    <label className='font-[500] ml-2'>KM (Kamar Mandi) dalam</label>
                  </li>
                  <li className='flex items-center'>
                    <input type='checkbox' className='w-5 h-5 '></input>
                    <label className='font-[500] ml-2'>Air Panas</label>
                  </li>
                  <li className='flex items-center'>
                    <input type='checkbox' className='w-5 h-5 '></input>
                    <label className='font-[500] ml-2'>Lemari</label>
                  </li>
                  <li className='flex items-center'>
                    <input type='checkbox' className='w-5 h-5 '></input>
                    <label className='font-[500] ml-2'>Kasur</label>
                  </li>
                  <li className='flex items-center'>
                    <input type='checkbox' className='w-5 h-5 '></input>
                    <label className='font-[500] ml-2'>Meja</label>
                  </li>
                  <li className='flex items-center'>
                    <input type='checkbox' className='w-5 h-5 '></input>
                    <label className='font-[500] ml-2'>Kursi</label>
                  </li>
                  <li className='flex items-center'>
                    <input type='checkbox' className='w-5 h-5 '></input>
                    <label className='font-[500] ml-2'>Listrik</label>
                  </li>
                  <li className='flex items-center'>
                    <input type='checkbox' className='w-5 h-5 '></input>
                    <label className='font-[500] ml-2'>TV</label>
                  </li>
                  <li className='flex items-center'>
                    <input type='checkbox' className='w-5 h-5 '></input>
                    <label className='font-[500] ml-2'>Kipas Angin</label>
                  </li>
                  <li className='flex items-center'>
                    <input type='checkbox' className='w-5 h-5 '></input>
                    <label className='font-[500] ml-2'>AC</label>
                  </li>
                </ul>
              </div>

              <div className='gap-y-3 grid grid-flow-row'>
                <p className='font-[600]'>Berapa Jumlah Total Kamar?</p>
                <p>Jumlah total kamar harus diantara 1-500</p>
                <input
                  type='number'
                  className='border-2 rounded-full font-[500] py-2 px-3'
                  placeholder='Ketikkan jumlah kamar di sini'
                />
              </div>

              <div className='gap-y-3 grid grid-flow-row'>
                <p className='font-[600]'>Berapa Sisa Kamar yang Tersedia?</p>
                <p>Jumlah sisa kamar harus diantara 1-500</p>
                <input
                  type='number'
                  className='border-2 rounded-full font-[500] py-2 px-3'
                  placeholder='Ketikkan jumlah kamar yang tersedia di sini'
                />
              </div>

              <div className='grid grid-flow-row gap-y-3'>
                <p className='font-[600]'>Sewa Kamar</p>
                <p>Centang opsi kamar dapat disewa dalam rentang waktu apa saja</p>
                <ul className='grid grid-flow-row gap-y-3'>
                  <li className='flex items-center'>
                    <input
                      type='checkbox'
                      className='w-5 h-5 '
                      id='sewaHari'
                      onChange={handleChange}
                    ></input>
                    <label className='font-[500] ml-2'>Per Hari</label>
                  </li>
                  <li className='flex items-center'>
                    <input
                      type='checkbox'
                      className='w-5 h-5 '
                      id='sewaMinggu'
                      onChange={handleChange}
                    ></input>
                    <label className='font-[500] ml-2'>Per Minggu</label>
                  </li>
                  <li className='flex items-center'>
                    <input
                      type='checkbox'
                      className='w-5 h-5'
                      id='sewaBulan'
                      onChange={handleChange}
                    ></input>
                    <label className='font-[500] ml-2'>Per Bulan</label>
                  </li>
                </ul>
              </div>

              {hariState && sewaPerHari()}
              {mingguState && sewaPerMinggu()}
              {bulanState && sewaPerBulan()}

              <div className='grid grid-flow-row gap-y-3'>
                <p className='font-[600]'>Foto Kamar atau Ruangan</p>
                <p>Foto maksimal 4</p>

                <div className='max-w-xl'>
                  <label>
                    <img
                      src={kosimg}
                      className='border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none'
                    />
                    <input type='file' name='file_upload' className='hidden' multiple />
                  </label>
                </div>
              </div>
            </div>

            <div className='grid grid-flow-col place-content-between pt-24'>
              <Link to='/owner/kostphotos'>
                <button
                  className='border-2 border-[#0A008A] text=[#0A008A] bg-white font-[600] p-2 px-3'
                  type='button'
                >
                  Kembali
                </button>
              </Link>
              <div className='grid grid-flow-col'>
                <div className='flex  w-72 space-x-4'>
                  <input
                    id='link-checkbox'
                    type='checkbox'
                    value=''
                    className='w-7 h-7
                    text-blue-600 bg-gray-100 border-gray-300 rounded dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600'
                  />
                  <label
                    htmlFor='link-checkbox'
                    className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                    Saya setuju dengan{' '}
                    <span>
                      <a href='#' className='underline  hover:text-gray-500'>
                        syarat & ketentuan
                      </a>
                    </span>{' '}
                    yang berlaku
                  </label>
                </div>
                <a href='/ownerprofile'>
                  <button
                    className='border-2 border-[#0A008A] bg-[#0A008A] text-white font-[600] p-2 px-3'
                    type='button'
                  >
                    Simpan & Lanjutkan
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default OwnerDataKamar;
