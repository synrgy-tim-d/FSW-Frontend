import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../../utils/http-interceptor';
import './datakosstyle.css';
import kosimg from '../../assets/city-card.svg';
import putri from '../../assets/radio_Putri.svg';
import putra from '../../assets/radio_Putra.svg';
import campuran from '../../assets/radio_Campuran.svg';
import { useAddKost, AddKostActions } from '../../context/kost';
import { useQuery } from '@tanstack/react-query';
import appConfig from '../../config';

const OwnerDataKos = () => {
  const provincesData = useQuery({
    queryKey: ['provinces'],
    queryFn: async () => await axiosInstance.get(`${appConfig.BE_URL}/provinces`),
    keepPreviousData: true,
  });

  const citiesData = useQuery({
    queryKey: ['cities'],
    queryFn: async () => await axiosInstance.get(`${appConfig.BE_URL}/cities`),
    keepPreviousData: true,
  });

  const addKost = useAddKost();

  const kostNameRef = useRef(null);
  const onChangeKostName = (e) => {
    e.preventDefault();
    addKost.dispatch({
      type: AddKostActions.SET_KOST_NAME,
      payload: e.target.value,
    });
  };

  const kostAddressRef = useRef(null);
  const onChangeKostAddress = (e) => {
    e.preventDefault();
    addKost.dispatch({
      type: AddKostActions.SET_KOST_ADDRESS,
      payload: e.target.value,
    });
  };

  useEffect(() => {
    kostNameRef.current.value = addKost.kostName;
    kostAddressRef.current.value = addKost.kostAddress;
  }, []);

  const onChangeProvince = (e) => {
    e.preventDefault();
    addKost.dispatch({
      type: AddKostActions.SET_KOST_LOCATION_PROVINCE,
      payload: e.target.value,
    });
  };

  const onChangeCity = (e) => {
    e.preventDefault();
    addKost.dispatch({
      type: AddKostActions.SET_KOST_LOCATION_DISTRICT,
      payload: e.target.value,
    });
  };

  const onChangeSubDistrict = (e) => {
    e.preventDefault();
    addKost.dispatch({
      type: AddKostActions.SET_KOST_LOCATION_SUBDISTRICT,
      payload: e.target.value,
    });
  };

  const onChangeType = (e) => {
    e.preventDefault();
    addKost.dispatch({
      type: AddKostActions.SET_KOST_TYPE,
      payload: e.target.alt,
    });
  };
  // console.log(addKost);

  return (
    <React.Fragment>
      <div className='grid grid-cols-5 text-[16px] font-[400] font-montserrat'>
        <div className='col-span-1 bg-[#0A008A] h-full'></div>

        <div className='col-span-4 flex justify-center'>
          <div className='w-11/12 grid grid-flow-row py-10 gap-y-6'>
            <div>
              <p className='font-[700] text-[38px]'>Silahkan Lengkapi Data Kos</p>
              <p className='text-[20px] w-3/5'>Bantu calon penyewa mengetahui kosanmu!</p>
            </div>

            <div className='grid grid-flow-row gap-y-6 auto-cols-max py-20'>
              <div className='gap-y-3 grid grid-flow-row'>
                <p className='font-[600]'>Apa Nama Kos yang dikelola?</p>
                <p>
                  Ketik <span className='italic'>Kos</span> (spasi){' '}
                  <span className='italic'>Nama Kos</span> tanpa perlu ketik alamat atau nama daerah
                </p>
                <input
                  type='text'
                  className='border-2 rounded-full font-[500] py-2 px-3'
                  placeholder='Ketikkan nama kos beserta tipe kamar disini'
                  ref={kostNameRef}
                  onChange={(e) => onChangeKostName(e)}
                />
              </div>

              <div className='grid grid-flow-row gap-y-3'>
                <p className='font-[600]'>Kos Ada di mana?</p>
                <p>Tuliskan alamat kos secara rinci</p>
                <textarea
                  className='font-[600] text-gray-700  border-2 border-[#CECECE] rounded-[8px] px-2 py-2 w-[820px] h-[180px]'
                  placeholder='Tulis alamat kos hingga rincian patokan tertentu (misal: 300 meter dari UGM)'
                  ref={kostAddressRef}
                  onChange={(e) => onChangeKostAddress(e)}
                />
              </div>

              <div className='gap-y-3 grid grid-flow-row '>
                <p className='font-[600]'>Provinsi</p>
                <select
                  onChange={onChangeProvince}
                  className='border-2 border-[#B9B9BC] select select-bordered w-full max-w-xs rounded-xl text-black'
                >
                  {provincesData?.data?.data.data.map((data) => {
                    return (
                      <option value={data.province} key={data.id}>
                        {data.province}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className='gap-y-3 grid grid-flow-row'>
                <p className='font-[600]'>Kabupaten/Kota</p>
                <select
                  onChange={onChangeCity}
                  className='border-2 border-[#B9B9BC] select select-bordered w-full max-w-xs rounded-xl text-black'
                >
                  {citiesData?.data?.data.data
                    .filter((data) => data.province.province === addKost.kostLocationProvince)
                    .map((data) => {
                      return (
                        <option value={data.city} key={data.id} placeholder='Provinsi'>
                          {data.city}
                        </option>
                      );
                    })}
                </select>
              </div>

              <div className='gap-y-3 grid grid-flow-row'>
                <p className='font-[600]'>Kecamatan</p>
                {/* <select className='select select-bordered w-full max-w-xs rounded-xl text-[#B9B9BC]'>
                  <option disabled defaultValue>
                    Pilih Kecamatan
                  </option>
                </select> */}
                <input
                  className='border-2 border-[#B9B9BC] select select-bordered w-full max-w-xs rounded-xl text-black'
                  type='text'
                  placeholder='Ketik nama kecamatan'
                  onChange={onChangeSubDistrict}
                />
              </div>

              <div className='gap-y-3 grid grid-flow-row'>
                <p className='font-[600]'>Jenis Kos disewakan untuk?</p>
                <p>Pilih jenis kos yang sesuai</p>
                <ul onClick={onChangeType} className='flex space-x-5  '>
                  <li className='w-fit'>
                    <label>
                      <input
                        type='radio'
                        name='test'
                        className='w-0 h-0 absolute  active:border-2 active:border-black'
                      />
                      <img
                        src={putri}
                        alt='KOS_PUTRI'
                        className='cursor-pointer border-slate-200 border-2 rounded-xl '
                      />
                    </label>
                  </li>
                  <li className='w-fit'>
                    <label>
                      {/* <input
                        value='putra'
                        type='radio'
                        name='test'
                        className='w-0 h-0 absolute opacity-0'
                      /> */}
                      <img
                        src={putra}
                        alt='KOS_PUTRA'
                        className='cursor-pointer border-slate-200 border-2 rounded-xl '
                      />
                    </label>
                  </li>
                  <li className='w-fit '>
                    <label>
                      {/* <input type='radio' name='test' className='w-0 h-0 absolute opacity-0' /> */}
                      <img
                        src={campuran}
                        alt='KOS_CAMPURAN'
                        className='cursor-pointer border-slate-200 border-2 rounded-xl  '
                      />
                    </label>
                  </li>
                </ul>
              </div>
            </div>

            <div className='grid grid-flow-col place-content-between pt-24'>
              <Link to='/owner/formdata'>
                <button
                  className='border-2 border-[#0A008A] text=[#0A008A] bg-white font-[600] p-2 px-3'
                  type='button'
                >
                  Kembali
                </button>
              </Link>

              {/* <Link to='/owner/kostfacility'> */}
              <Link to='/owner/kostfacility'>
                <button
                  className='border-2 border-[#0A008A] bg-[#0A008A] text-white font-[600] p-2 px-3'
                  type='button'
                >
                  Simpan & Lanjutkan
                </button>
              </Link>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default OwnerDataKos;
