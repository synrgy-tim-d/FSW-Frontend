import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BCA from '../../../assets/LogoBCA.png'
import Mandiri from '../../../assets/LogoMandiri.png'
import BNI from '../../../assets/LogoBNI.png'
import BRI from '../../../assets/LogoBRI.png'
import BTN from '../../../assets/LogoBTN.png'

const bankList = ["BCA","Mandiri", "BNI", "BRI", "BTN","Lainnya"]
const bankImages = {
    BCA,Mandiri,BNI,BRI,BTN
}
const AddOwnerProfile = () => {
    const [selectedBank,setSelectedBank] = useState();

    const onChangeSelectBank = (e) => {
        setSelectedBank(e.target.value);
    }

    const onFormSubmit = (e) => {
        e.preventDefault;
        console.log(selectedBank);
    }
    return (
        <React.Fragment>
        <div className='grid grid-cols-5 bg-[#FAFAFA]'>
            <div className='col-span-1 bg-[#0A008A] text-white min-h-screen h-full text-center py-6 lg:px-8 lg:py-16'>
                <SidebarForm />
            </div>

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
              />
            </label>

            <label className='relative block'>
              <span className='block text-[20px] font-semibold text-[#000000]'>Rekening Bank</span>
              <span className='block text-[20px] text-[#000000]'>
                Rekening yang digunakan untuk pembayaran melalui transfer
              </span>
            </label>

                {bankList.map((e,i) => {
                    return (
                        <label htmlFor="" className='relative w-full cursor-pointer pb-10'>
                            <div className='pt-4'>
                                <div className='flex items-center p-5 pr-16 h-[55px] bg border-2 rounded-[100px]'>
                                    <input type='radio' id={e} name='payment' value={e} onChange={(e) => {onChangeSelectBank(e)}}/>
                                    {(() => e=="Lainnya" ? ("") : (<img className='pl-2 h-[20px]' src={bankImages[e]} alt={e} />) )()}
                                    <p className='pl-4 font-semibold'>{`${e=="Lainnya" ? "":"Bank"} ${e}`}</p>
                                </div>
                            </div>
                        </label>
                    )
                })}

                <label className="relative block pb-10 pt-10">
                    <span className={`block text-[20px] font-semibold ${selectedBank == "Lainnya" ? "text-[#000000]":"text-[#B9B9BC]"} `}>Rekening Bank Lain/Pengelola</span>
                    <span className={`block text-[20px] pb-3 ${selectedBank == "Lainnya" ? "text-[#000000]":"text-[#B9B9BC]"}`}>Rekening bank lain yang tidak tertera diatas</span>

                    <input className="placeholder:text-base placeholder:font-semibold placeholder:text-[#46464F]/[0.38] block bg-white w-full border border-slate-300 rounded-full py-4 pl-6 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Ketikkan nama bank disini" type="text" name="search" disabled={selectedBank!="Lainnya"}/>
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
                onClick={(e) => {onFormSubmit(e)}}
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
