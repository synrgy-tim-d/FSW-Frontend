import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ButtonPayment = () => {
  return (
    <div className='flex flex-col ml-[115px]'>
      <button
        className='w-[178px] h-[43px] mb-[65px] p-0 bg-[#0A008A] border-0 self-end rounded-[4px] outline-none text-[16px] font-[600] text-white hover:bg-[#A0A3FF] hover:text-[#0A008A] focus:bg-black focus:text-white focus:outline-none'
        type='button'
      >
        Bayar Sekarang
      </button>
      <div className='flex flex-row justify-end'>
        <img className='' alt='' src='src/assets/icon_pending.svg' />
        <p className='text-[12px] font-[500] text-[#EA9A3D] ml-2 mb-[4px] mt-1'>
          Pending (Menunggu Pembayaran)
        </p>
      </div>
    </div>
  );
};

export default ButtonPayment;
