import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import kosimg from '../../assets/city-card.svg';
import { AddKostActions, useAddKost } from '../../context/kost';
import axios from 'axios';
// import { fasilitasKamar } from '../homepage/homepage-constants/Dropdown';
import { useMutation } from '@tanstack/react-query';
// import axios from 'axios';
import axiosInstance from '../../utils/http-interceptor';
import appConfig from '../../config';

const fasilitasKamar = [
  'Wi-Fi',
  'KM (Kamar Mandi) dalam',
  'Air Panas',
  'Lemari',
  'Kasur',
  'Meja',
  'Kursi',
  'Listrik',
  'TV',
  'Kipas Angin',
  'AC',
];
const sewaKamar = ['Per Hari', 'Per Minggu', 'Per Bulan'];
const OwnerDataKamar = () => {
  const addKost = useAddKost();

  const roomDescriptionRef = useRef(null);
  const onChangeRoomDescription = (e) => {
    e.preventDefault();
    addKost.dispatch({
      type: AddKostActions.SET_ROOM_DESCRIPTION,
      payload: e.target.value,
    });
  };

  const [fasilitasKamarCheckedState, setFasilitasKamarCheckedState] = useState(
    new Array(fasilitasKamar.length).fill(false),
  );
  const fasilitasKamarOnChangeHandler = (position) => {
    const updatedCheckedState = fasilitasKamarCheckedState.map((item, index) =>
      index === position ? !item : item,
    );
    addKost.dispatch({
      type: AddKostActions.SET_ROOM_FACILITIES,
      payload: updatedCheckedState.map((e, i) => {
        if (e) {
          return fasilitasKamar[i];
        }
      }),
    });
    setFasilitasKamarCheckedState(updatedCheckedState);
  };

  const roomTotalRef = useRef(null);
  const onChangeRoomTotal = (e) => {
    e.preventDefault();
    addKost.dispatch({
      type: AddKostActions.SET_ROOM_TOTAL,
      payload: e.target.value,
    });
  };

  const roomRemainsRef = useRef(null);
  const onChangeRoomRemains = (e) => {
    e.preventDefault();
    addKost.dispatch({
      type: AddKostActions.SET_ROOM_REMAINS,
      payload: e.target.value,
    });
  };

  const [sewaKamarCheckedState, setSewaKamarCheckedState] = useState(
    new Array(sewaKamar.length).fill(false),
  );
  const sewaKamarOnChangeHandler = (position) => {
    const updatedCheckedState = sewaKamarCheckedState.map((item, index) =>
      index === position ? !item : item,
    );
    addKost.dispatch({
      type: AddKostActions.SET_ROOM_OPTION,
      payload: updatedCheckedState.map((e, i) => {
        if (e) {
          return sewaKamar[i];
        }
      }),
    });
    setSewaKamarCheckedState(updatedCheckedState);
  };

  const roomCostDayRef = useRef(null);
  const onChangeRoomCostDay = (e) => {
    e.preventDefault();
    addKost.dispatch({
      type: AddKostActions.SET_ROOM_COST_DAY,
      payload: e.target.value,
    });
  };

  const roomCostWeekRef = useRef(null);
  const onChangeRoomCostWeek = (e) => {
    e.preventDefault();
    addKost.dispatch({
      type: AddKostActions.SET_ROOM_COST_WEEK,
      payload: e.target.value,
    });
  };

  const roomCostMonthRef = useRef(null);
  const onChangeRoomCostMonth = (e) => {
    e.preventDefault();
    addKost.dispatch({
      type: AddKostActions.SET_ROOM_COST_MONTH,
      payload: e.target.value,
    });
  };

  const roomPhoto1Ref = useRef(null);
  const onChangeRoomPhoto1 = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        addKost.dispatch({
          type: AddKostActions.SET_ROOM_PHOTOS_URL_1,
          payload: e.target.result,
        });
      };
      reader.readAsDataURL(e.target.files[0]);
      const pictureTemp = e.target.files[0];
      addKost.dispatch({
        type: AddKostActions.SET_ROOM_PHOTOS_1,
        payload: pictureTemp,
      });
    }
  };

  const roomPhoto2Ref = useRef(null);
  const onChangeRoomPhoto2 = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        addKost.dispatch({
          type: AddKostActions.SET_ROOM_PHOTOS_URL_2,
          payload: e.target.result,
        });
      };
      reader.readAsDataURL(e.target.files[0]);
      const pictureTemp = e.target.files[0];
      addKost.dispatch({
        type: AddKostActions.SET_ROOM_PHOTOS_URL_2,
        payload: pictureTemp,
      });
    }
  };

  const roomPhoto3Ref = useRef(null);
  const onChangeRoomPhoto3 = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        addKost.dispatch({
          type: AddKostActions.SET_ROOM_PHOTOS_URL_3,
          payload: e.target.result,
        });
      };
      reader.readAsDataURL(e.target.files[0]);
      const pictureTemp = e.target.files[0];
      addKost.dispatch({
        type: AddKostActions.SET_ROOM_PHOTOS_URL_3,
        payload: pictureTemp,
      });
    }
  };

  const roomPhoto4Ref = useRef(null);
  const onChangeRoomPhoto4 = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        addKost.dispatch({
          type: AddKostActions.SET_ROOM_PHOTOS_URL_4,
          payload: e.target.result,
        });
      };
      reader.readAsDataURL(e.target.files[0]);
      const pictureTemp = e.target.files[0];
      addKost.dispatch({
        type: AddKostActions.SET_ROOM_PHOTOS_4,
        payload: pictureTemp,
      });
    }
  };

  useEffect(() => {
    roomDescriptionRef.current.value = addKost.roomDescription;
    if (addKost.roomFacilities != null) {
      setFasilitasKamarCheckedState(
        addKost.roomFacilities.map((e, i) => {
          return e != undefined;
        }),
      );
    }

    roomTotalRef.current.value = addKost.roomTotal;

    roomRemainsRef.current.value = addKost.roomRemains;

    if (addKost.roomOption != null) {
      setSewaKamarCheckedState(
        addKost.roomOption.map((e, i) => {
          return e != undefined;
        }),
      );
    }
    if (addKost.roomCostDay != null) {
      roomCostDayRef.current.value = addKost.roomCostDay;
    }
    if (addKost.roomCostWeek != null) {
      roomCostWeekRef.current.value = addKost.roomCostWeek;
    }
    if (addKost.roomCostMonth != null) {
      roomCostMonthRef.current.value = addKost.roomCostMonth;
    }
  }, []);

  const sewaPerHari = () => {
    return (
      <div className='gap-y-3 grid grid-flow-row text-[#B9B9BC]'>
        <p className='font-[600]'>Harga Sewa Per Hari</p>
        <input
          type='number'
          className='border-2 rounded-full font-[500] py-2 px-3'
          placeholder='Rp0'
          ref={roomCostDayRef}
          onChange={(e) => onChangeRoomCostDay(e)}
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
          ref={roomCostWeekRef}
          onChange={(e) => onChangeRoomCostWeek(e)}
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
          ref={roomCostMonthRef}
          onChange={(e) => onChangeRoomCostMonth(e)}
        />
      </div>
    );
  };

  const kostParam = {
    name: addKost.kostName,
    description: addKost.kostDescription,
    kostType: addKost.kostType,
    isAvailable: 'true',
    latitude: '0',
    longitude: '0',
    address: addKost.kostAddress,
    subdistrict: addKost.kostLocationSubdistrict,
    district: addKost.kostLocationDistrict,
    postalCode: '0',
    cityId: addKost.kostLocationDistrictID,
    fQuestion1: addKost.kostFaq,
    fAnswer1: addKost.kostFaqAnswer,
    pricePerDaily: addKost.roomCostDay,
    pricePerWeekly: addKost.roomCostWeek,
    pricePerMonthly: addKost.roomCostMonth,
    rules: addKost.kostRules,
  };

  const postKost = useMutation({
    mutationKey: ['postKost'],
    mutationFn: async () => {
      const formData = new FormData();
      formData.append('imageFiles', addKost.kostFrontPhoto);
      formData.append('imageFiles', addKost.kostBackPhoto);
      for (const key in kostParam) {
        if (Object.hasOwnProperty.call(kostParam, key)) {
          formData.append(key,kostParam[key])
        }
      }
      await axiosInstance.post(
        `${appConfig.BE_URL}/kost/add`,
        formData
      );
      // await axiosInstance.post(`${appConfig.BE_URL}/api/kost/add`,formData);
      console.log("masuk")
    //   axiosInstance.post(`https://be-naqos.up.railway.app/api/kost/add?name=Kost%20Binar%20Academy&description=Description%20Binar%20Academy&kostType=KOS_CAMPURAN&isAvailable=true&latitude=163&longitude=-12&address=Jl%20Medan%20Merdeka%20No%2069&subdistrict=Pengasinan&district=Rawalumbu&postalCode=18116&cityId=44&fQuestion1=Apakah%20Kost%20ini%20bersih%3F&fAnswer1=Iya&fQuestion2=Apakah%20Kost%20ini%20bersih%3F&fAnswer2=Iya&fQuestion3=Apakah%20Kost%20ini%20bersih%3F&fAnswer3=Iya&pricePerDaily=Iya&pricePerWeekly=Iya&pricePerMonthly=Iya&rules=Iya
    // `);
    },
    onError: (err) => {
      console.log(err)
    }
  });

  const onClickSubmit = async (e) => {
    e.preventDefault;
    await postKost.mutateAsync();
  }

  console.log(addKost);

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
                  ref={roomDescriptionRef}
                  onChange={(e) => onChangeRoomDescription(e)}
                />
              </div>

              <div className='grid grid-flow-row gap-y-3'>
                <p className='font-[600]'>Fasilitas Kamar</p>
                <p>Fasilitas yang tersedia di kamar tipe ini</p>
                <ul className='grid grid-flow-row gap-y-3'>
                  {fasilitasKamar.map((name, index) => {
                    return (
                      <li className='flex items-center' key={index}>
                        <input
                          type='checkbox'
                          className='w-5 h-5 '
                          name={name}
                          value={name}
                          checked={fasilitasKamarCheckedState[index]}
                          onChange={() => fasilitasKamarOnChangeHandler(index)}
                        ></input>
                        <label className='font-[500] ml-2'>{name}</label>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className='gap-y-3 grid grid-flow-row'>
                <p className='font-[600]'>Berapa Jumlah Total Kamar?</p>
                <p>Jumlah total kamar harus diantara 1-500</p>
                <input
                  type='number'
                  className='border-2 rounded-full font-[500] py-2 px-3'
                  placeholder='Ketikkan jumlah kamar di sini'
                  ref={roomTotalRef}
                  onChange={(e) => onChangeRoomTotal(e)}
                />
              </div>

              <div className='gap-y-3 grid grid-flow-row'>
                <p className='font-[600]'>Berapa Sisa Kamar yang Tersedia?</p>
                <p>Jumlah sisa kamar harus diantara 1-500</p>
                <input
                  type='number'
                  className='border-2 rounded-full font-[500] py-2 px-3'
                  placeholder='Ketikkan jumlah kamar yang tersedia di sini'
                  ref={roomRemainsRef}
                  onChange={(e) => onChangeRoomRemains(e)}
                />
              </div>

              <div className='grid grid-flow-row gap-y-3'>
                <p className='font-[600]'>Sewa Kamar</p>
                <p>Centang opsi kamar dapat disewa dalam rentang waktu apa saja</p>
                <ul className='grid grid-flow-row gap-y-3'>
                  {sewaKamar.map((name, index) => {
                    return (
                      <li className='flex items-center' key={index}>
                        <input
                          type='checkbox'
                          className='w-5 h-5 '
                          name={name}
                          value={name}
                          checked={sewaKamarCheckedState[index]}
                          onChange={() => sewaKamarOnChangeHandler(index)}
                        ></input>
                        <label className='font-[500] ml-2'>{name}</label>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {addKost.roomOption != null && addKost.roomOption[0] && sewaPerHari()}
              {addKost.roomOption != null && addKost.roomOption[1] && sewaPerMinggu()}
              {addKost.roomOption != null && addKost.roomOption[2] && sewaPerBulan()}

              <div className='grid grid-flow-row gap-y-3'>
                <p className='font-[600]'>Foto Kamar atau Ruangan</p>
                <p>Foto maksimal 4</p>

                <div className='max-w-xl'>
                  <label>
                    <img
                      src={addKost.roomPhotosUrl1 != null ? addKost.roomPhotosUrl1 : kosimg}
                      className='border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none'
                    />
                    <input
                      type='file'
                      name='file_upload'
                      className='hidden'
                      ref={roomPhoto1Ref}
                      onChange={(e) => onChangeRoomPhoto1(e)}
                    />
                  </label>
                </div>
                <div className='max-w-xl'>
                  <label>
                    <img
                      src={addKost.roomPhotosUrl2 != null ? addKost.roomPhotosUrl2 : kosimg}
                      className='border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none'
                    />
                    <input
                      type='file'
                      name='file_upload'
                      className='hidden'
                      ref={roomPhoto2Ref}
                      onChange={(e) => onChangeRoomPhoto2(e)}
                    />
                  </label>
                </div>
                <div className='max-w-xl'>
                  <label>
                    <img
                      src={addKost.roomPhotosUrl3 != null ? addKost.roomPhotosUrl3 : kosimg}
                      className='border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none'
                    />
                    <input
                      type='file'
                      name='file_upload'
                      className='hidden'
                      ref={roomPhoto3Ref}
                      onChange={(e) => onChangeRoomPhoto3(e)}
                    />
                  </label>
                </div>
                <div className='max-w-xl'>
                  <label>
                    <img
                      src={addKost.roomPhotosUrl4 != null ? addKost.roomPhotosUrl4 : kosimg}
                      className='border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none'
                    />
                    <input
                      type='file'
                      name='file_upload'
                      className='hidden'
                      ref={roomPhoto4Ref}
                      onChange={(e) => onChangeRoomPhoto4(e)}
                    />
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
                {/* <a href='/ownerprofile'> */}
                  <button
                    className='border-2 border-[#0A008A] bg-[#0A008A] text-white font-[600] p-2 px-3'
                    type='button'
                    onClick={(e) => {
                      onClickSubmit(e)

                    }}
                  >
                    Simpan & Lanjutkan
                  </button>
                {/* </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default OwnerDataKamar;
