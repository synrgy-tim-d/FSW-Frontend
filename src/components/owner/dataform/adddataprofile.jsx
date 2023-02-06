import React from 'react';
import { Link } from 'react-router-dom';

const Password = ({ password }) => {
    const mask = '*'.repeat(password.length);
    return <span>{mask}</span>;
};

const AddOwnerProfile = () => {
    return (
        <React.Fragment>
        <div className='grid grid-cols-5 bg-[#FAFAFA]'>
            <div className='col-span-1 bg-[#0A008A] h-full'></div>

            <div className='col-span-4 grid grid-rows-auto w-2/3 justify-self-left pl-14 gap-y-12 py-12'>{/* <div className='grid grid-flow-row justify-self-center gap-y-4'>
                    <img className='' src={profile} alt='' />
                    <p className='text-left text-[24px] sm:text-[30px] font-[600]'>Ibu Kos</p>
                </div> */}

            <div className=''>
                <p className='text-[39px] text-[#000000] font-[600]'>Silahkan Lengkapi Data Pemilik/Pengelola Kos</p>
                <p className='text-[20px] text-[#000000]'>Data pemilik digunakan apabila calon penyewa akan melakukan negosiasi dan pembayaran</p>
            </div>


            <form>
                <label className="relative block pb-10">
                    <span className="block text-[20px] font-semibold text-[#000000] pb-3">Nama Pemilik/Pengelola</span>

                    <input className="placeholder:text-base placeholder:font-semibold placeholder:text-[#46464F]/[0.38] block bg-white w-full border border-slate-300 rounded-full py-4 pl-6 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Ketikkan nama lengkapmu disini" type="text" name="search" />
                </label>

                <label className="relative block pb-10">
                    <span className="block text-[20px] font-semibold text-[#000000] pb-3">Nomor HP (WhatsApp) Pemilik/Pengelola</span>

                    <input className="placeholder:text-base placeholder:font-semibold placeholder:text-[#46464F]/[0.38] block bg-white w-full border border-slate-300 rounded-full py-4 pl-6 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Isi nomor handphone Whatsapp aktif" type="text" name="search" />
                </label>

                <label className="relative block pb-10">
                    <span className="block text-[20px] font-semibold text-[#000000]">Rekening Bank</span>
                    <span className="block text-[20px] text-[#000000] pb-3">Rekening yang digunakan untuk pembayaran melalui transfer</span>
                </label>

                <label className="relative block pb-10">
                    <span className="block text-[20px] font-semibold text-[#B9B9BC]">Rekening Bank Lain/Pengelola</span>
                    <span className="block text-[20px] text-[#B9B9BC] pb-3">Rekening bank lain yang tidak tertera diatas</span>

                    <input className="placeholder:text-base placeholder:font-semibold placeholder:text-[#46464F]/[0.38] block bg-white w-full border border-slate-300 rounded-full py-4 pl-6 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Ketikkan nama bank disini" type="text" name="search" />
                </label>

                <label className="relative block pb-10">
                    <span className="block text-[20px] font-semibold text-[#000000] pb-3">Nomor Rekening</span>

                    <input className="placeholder:text-base placeholder:font-semibold placeholder:text-[#46464F]/[0.38] block bg-white w-full border border-slate-300 rounded-full py-4 pl-6 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Isi nomor rekening bank" type="text" name="search" />
                </label>

                <label className="relative block pb-10">
                    <span className="block text-[20px] font-semibold text-[#000000] pb-3">Kepemilikan Rekening</span>

                    <input className="placeholder:text-base placeholder:font-semibold placeholder:text-[#46464F]/[0.38] block bg-white w-full border border-slate-300 rounded-full py-4 pl-6 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Isi nama kepemilikan rekening bank" type="text" name="search" />
                </label>
            </form>
        </div>
        </div>
        </React.Fragment>
    );
};

export default AddOwnerProfile;
