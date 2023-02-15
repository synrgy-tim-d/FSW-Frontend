import React, { useState, useRef } from 'react';
import kosimg from '../../assets/city-card.svg';
import { Link } from 'react-router-dom';
import { AddKostActions, useAddKost } from '../../context/kost';

const OwnerFotokos = () => {
  const [showModal, setShowModal] = useState(false);

  const addKost = useAddKost();

  const kosPhotoFront1Ref = useRef(null);
  const onChangeKosPhotoFront1 = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        addKost.dispatch({
          type: AddKostActions.SET_KOST_FRONT_PHOTO_URL,
          payload: e.target.result,
        });
      };
      reader.readAsDataURL(e.target.files[0]);
      const pictureTemp = e.target.files[0];
      addKost.dispatch({
        type: AddKostActions.SET_KOST_FRONT_PHOTO,
        payload: pictureTemp,
      });
    }
  };

  const kosPhotoFront2Ref = useRef(null);
  const onChangeKosPhotoFront2 = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        addKost.dispatch({
          type: AddKostActions.SET_KOST_FRONT_PHOTO_URL_2,
          payload: e.target.result,
        });
      };
      reader.readAsDataURL(e.target.files[0]);
      const pictureTemp = e.target.files[0];
      addKost.dispatch({
        type: AddKostActions.SET_KOST_FRONT_PHOTO_2,
        payload: pictureTemp,
      });
    }
  };

  const kosPhotoBackRef = useRef(null);
  const onChangeKosPhotoBack = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        addKost.dispatch({
          type: AddKostActions.SET_KOST_BACK_PHOTO_URL,
          payload: e.target.result,
        });
      };
      reader.readAsDataURL(e.target.files[0]);
      const pictureTemp = e.target.files[0];
      addKost.dispatch({
        type: AddKostActions.SET_KOST_BACK_PHOTO,
        payload: pictureTemp,
      });
    }
  };

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
                  <label className='w-max h-auto'>
                    <img
                      src={addKost.kostFrontPhotoURL != null ? addKost.kostFrontPhotoURL : kosimg}
                      alt=''
                      className='max-w-4xl border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none'
                    />
                    <input
                      type='file'
                      name='file_upload'
                      ref={kosPhotoFront1Ref}
                      onChange={onChangeKosPhotoFront1}
                      className='hidden'
                    />
                  </label>
                </div>
                <label className='w-max h-auto'>
                  <img
                    src={addKost.kostFrontPhotoURL2 != null ? addKost.kostFrontPhotoURL2 : kosimg}
                    alt=''
                    className='max-w-4xl border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none'
                  />
                  <input
                    type='file'
                    name='file_upload'
                    ref={kosPhotoFront2Ref}
                    onChange={onChangeKosPhotoFront2}
                    className='hidden'
                  />
                </label>
              </div>
              <div className='grid grid-flow-row gap-y-3'>
                <p className='font-[600]'>Foto Tampilan Dalam Bangunan</p>
                <p>Foto fasilitas atau ruangan dalam bangunan dalam keadaan terang</p>
                <label className='w-max h-auto'>
                  <img
                    src={addKost.kostBackPhotoURL != null ? addKost.kostBackPhotoURL : kosimg}
                    alt=''
                    className='max-w-4xl border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none'
                  />
                  <input
                    type='file'
                    name='file_upload'
                    ref={kosPhotoBackRef}
                    onChange={onChangeKosPhotoBack}
                    className='hidden'
                  />
                </label>
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
