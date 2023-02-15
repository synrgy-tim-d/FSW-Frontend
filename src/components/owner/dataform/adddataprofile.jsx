import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import BCA from '../../../assets/LogoBCA.png';
import Mandiri from '../../../assets/LogoMandiri.png';
import BNI from '../../../assets/LogoBNI.png';
import BRI from '../../../assets/LogoBRI.png';
import BTN from '../../../assets/LogoBTN.png';
import { useAddKost, AddKostActions } from '../../../context/kost';
const AddOwnerProfile = () => {
  const [selectedPayment, setSelectedPayment] = useState('BCA');
  const addKost = useAddKost();
  
  const ownerNameRef = useRef(null);
  const onChangeOwnerName = (e) => {
    e.preventDefault();
    addKost.dispatch({
      type: AddKostActions.SET_OWNER_NAME,
      payload: e.target.value
    })
  }

  const ownerPhoneRef = useRef(null);
  const onChangeOwnerPhone = (e) => {
    e.preventDefault();
    addKost.dispatch({
      type:AddKostActions.SET_OWNER_PHONE,
      payload:e.target.value
    })
  }

  const ownerBankOtherRef = useRef(null)
  const handleChange = (e) => {
    setSelectedPayment(e.target.value);
    if (e.target.value == 'other') {
      addKost.dispatch({
        type:AddKostActions.SET_OWNER_BANK,
        payload: ownerBankOtherRef.current.value
      })
    } else {
      addKost.dispatch({
        type:AddKostActions.SET_OWNER_BANK,
        payload: e.target.value
      })
    }
  };
  const onChangeOwnerBankOther = (e) => {
    e.preventDefault();
    if (selectedPayment == 'other') {
      addKost.dispatch({
        type:AddKostActions.SET_OWNER_BANK,
        payload: e.target.value
      })
    }
  }

  const ownerRekeningRef = useRef(null)
  const onChangeOwnerRekening = (e) => {
    e.preventDefault();
    addKost.dispatch({
      type:AddKostActions.SET_OWNER_REKENING,
      payload:e.target.value
    })
  }

  const ownerRekeningNameRef = useRef(null)
  const onChangeOwnerRekeningName = (e) => {
    e.preventDefault();
    addKost.dispatch({
      type:AddKostActions.SET_OWNER_REKENING_NAME,
      payload:e.target.value
    })
  }

  useEffect(() => {
    ownerNameRef.current.value = addKost.ownerName;
    ownerPhoneRef.current.value = addKost.ownerPhone;
    setSelectedPayment('BCA')
    addKost.dispatch({
      type:AddKostActions.SET_OWNER_BANK,
      payload: 'BCA'
    })
    ownerRekeningRef.current.value = addKost.ownerRekening;
    ownerRekeningNameRef.current.value = addKost.ownerRekeningName;
  },[])
  
  return (
    <React.Fragment>
      <div className='grid grid-cols-5 bg-[#FAFAFA]'>
        <div className='col-span-1 bg-[#0A008A] h-full'></div>

        <div className='col-span-4 grid grid-rows-auto w-2/3 justify-self-left pl-14 gap-y-12 py-12'>
          <div className=''>
            <p className='text-[39px] text-[#000000] font-[600]'>
              Silahkan Lengkapi Data Pemilik/Pengelola Kos
            </p>
            <p className='text-[20px] text-[#000000]'>
              Data pemilik digunakan apabila calon penyewa akan melakukan negosiasi dan pembayaran
            </p>
          </div>

          <form>
            <label className='relative block pb-10'>
              <span className='block text-[20px] font-semibold text-[#000000] pb-3'>
                Nama Pemilik/Pengelola
              </span>

              <input
                className='placeholder:text-base placeholder:font-semibold placeholder:text-[#46464F]/[0.38] block bg-white w-full border border-slate-300 rounded-full py-4 pl-6 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
                placeholder='Ketikkan nama lengkapmu disini'
                type='text'
                name='search'
                onChange={(e) => onChangeOwnerName(e)}
                ref={ownerNameRef}
              />
            </label>

            <label className='relative block pb-10'>
              <span className='block text-[20px] font-semibold text-[#000000] pb-3'>
                Nomor HP (WhatsApp) Pemilik/Pengelola
              </span>

              <input
                className='placeholder:text-base placeholder:font-semibold placeholder:text-[#46464F]/[0.38] block bg-white w-full border border-slate-300 rounded-full py-4 pl-6 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
                placeholder='Isi nomor handphone Whatsapp aktif'
                type='text'
                name='search'
                onChange={(e) => onChangeOwnerPhone(e)}
                ref={ownerPhoneRef}
              />
            </label>

            <label className='relative block'>
              <span className='block text-[20px] font-semibold text-[#000000]'>Rekening Bank</span>
              <span className='block text-[20px] text-[#000000]'>
                Rekening yang digunakan untuk pembayaran melalui transfer
              </span>
            </label>

            <label htmlFor='' className='relative w-full cursor-pointer pb-10'>
              <div className='pt-4'>
                <div className='flex items-center p-5 pr-16 h-[55px] bg border-2 rounded-[100px]'>
                  <input
                    type='radio'
                    name='payment'
                    id='BCA'
                    value='BCA'
                    checked={selectedPayment === 'BCA'}
                    onChange={handleChange}
                  />
                  <img className='h-[55px]' src={BCA} alt='BCA' />
                  <p className='pl-4 font-semibold'>Bank BCA</p>
                </div>
              </div>
            </label>

            <label htmlFor='' className='relative w-full cursor-pointer'>
              <div className='pt-2'>
                <div className='flex items-center p-5 pr-16 h-[55px] bg border-2 rounded-[100px]'>
                  <input
                    type='radio'
                    name='payment'
                    id='Mandiri'
                    value='Mandiri'
                    checked={selectedPayment === 'Mandiri'}
                    onChange={handleChange}
                  />
                  <img className='pl-2 h-[20px]' src={Mandiri} alt='Mandiri' />
                  <p className='pl-4 font-semibold'>Bank Mandiri</p>
                </div>
              </div>
            </label>

            <label htmlFor='' className='relative w-full cursor-pointer'>
              <div className='pt-2'>
                <div className='flex items-center p-5 pr-16 h-[55px] bg border-2 rounded-[100px]'>
                  <input
                    type='radio'
                    name='payment'
                    id='BNI'
                    value='BNI'
                    checked={selectedPayment === 'BNI'}
                    onChange={handleChange}
                  />
                  <img className='pl-2 h-[20px]' src={BNI} alt='BNI' />
                  <p className='pl-4 font-semibold'>Bank BNI</p>
                </div>
              </div>
            </label>

            <label htmlFor='' className='relative w-full cursor-pointer'>
              <div className='pt-2'>
                <div className='flex items-center p-5 pr-16 h-[55px] bg border-2 rounded-[100px]'>
                  <input
                    type='radio'
                    name='payment'
                    id='BRI'
                    value='BRI'
                    checked={selectedPayment === 'BRI'}
                    onChange={handleChange}
                  />
                  <img className='pl-2 h-[20px]' src={BRI} alt='BRI' />
                  <p className='pl-4 font-semibold'>Bank BRI</p>
                </div>
              </div>
            </label>

            <label htmlFor='' className='relative w-full cursor-pointer'>
              <div className='pt-2'>
                <div className='flex items-center p-5 pr-16 h-[55px] bg border-2 rounded-[100px]'>
                  <input
                    type='radio'
                    name='payment'
                    id='BTN'
                    value='BTN'
                    checked={selectedPayment === 'BTN'}
                    onChange={handleChange}
                  />
                  <img className='pl-2 h-[20px]' src={BTN} alt='BTN' />
                  <p className='pl-4 font-semibold'>Bank BTN</p>
                </div>
              </div>
            </label>

            <label htmlFor='' className='relative w-full cursor-pointer'>
              <div className='pt-2 pb-10'>
                <div className='flex items-center p-5 pr-16 h-[55px] bg border-2 rounded-[100px]'>
                  <input
                    type='radio'
                    name='payment'
                    id='other'
                    value='other'
                    checked={selectedPayment === 'other'}
                    onChange={handleChange}
                  />
                  <p className='pl-2 pr-4 font-semibold'>Lainnya</p>
                </div>
              </div>
            </label>

            <label className='relative block pb-10'>
              {/* <span className='block text-[20px] font-semibold text-[#B9B9BC]'></span> */}
              <span className={selectedPayment === 'other' ? 'block text-[20px] font-semibold text-[#000000]' : 'block text-[20px] font-semibold text-[#B9B9BC]'}>
                Rekening Bank Lain/Pengelola
              </span>
              <span className='block text-[20px] text-[#B9B9BC] pb-3'>
                
              Rekening bank lain yang tidak tertera diatas
              </span>

              <input
                className='placeholder:text-base placeholder:font-semibold placeholder:text-[#46464F]/[0.38] block bg-white w-full border border-slate-300 rounded-full py-4 pl-6 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
                placeholder='Ketikkan nama bank disini'
                type='text'
                name='search'
                ref={ownerBankOtherRef}
                onChange={(e) => onChangeOwnerBankOther(e)}
              />
            </label>

            <label className='relative block pb-10'>
              <span className='block text-[20px] font-semibold text-[#000000] pb-3'>
                Nomor Rekening
              </span>

              <input
                className='placeholder:text-base placeholder:font-semibold placeholder:text-[#46464F]/[0.38] block bg-white w-full border border-slate-300 rounded-full py-4 pl-6 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
                placeholder='Isi nomor rekening bank'
                type='text'
                name='search'
                ref={ownerRekeningRef}
                onChange={(e) => onChangeOwnerRekening(e)}
              />
            </label>

            <label className='relative block pb-10'>
              <span className='block text-[20px] font-semibold text-[#000000] pb-3'>
                Kepemilikan Rekening
              </span>

              <input
                className='placeholder:text-base placeholder:font-semibold placeholder:text-[#46464F]/[0.38] block bg-white w-full border border-slate-300 rounded-full py-4 pl-6 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
                placeholder='Isi nama kepemilikan rekening bank'
                type='text'
                name='search'
                ref={ownerRekeningNameRef}
                onChange={(e) => {onChangeOwnerRekeningName(e)}}
              />
            </label>
          </form>
          <div className='grid grid-flow-col place-content-between pt-24'>
            <button
              className='rounded border-2 border-[#0A008A] text=[#0A008A] bg-white font-[600] p-2 px-3'
              type='button'
            >
              Kembali
            </button>
            
            <Link to='/owner/kostdata'>
              <button
                className='rounded border-2 border-[#0A008A] bg-[#0A008A] text-white font-[600] p-2 px-3'
                type='button'
              >
                Simpan & Lanjutkan
              </button>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddOwnerProfile;
