import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ButtonReview = () => {
  return (
    <div className='flex flex-col ml-[201px]'>
      <label
        htmlFor='my-modal'
        className='cursor-pointer inline-flex items-center justify-center w-[151px] h-[43px] mb-[65px] p-0 bg-white border-2 border-[#0A008A] self-end rounded-[4px] outline-none text-[16px] font-[600] text-[#0A008A] hover:bg-[#f3f4ff] hover:border-[#0A008A] hover:text-[#0A008A] active:bg-[#0A008A] active:text-white'
      >
        Tulis Review
      </label>
      <div className='flex flex-row justify-end'>
        <img className='' alt='' src='src/assets/icon_completed.svg' />
        <p className='text-[12px] font-[500] text-[#008A3F] ml-2 mb-[4px] mt-1'>Completed</p>
      </div>
    </div>
  );
};

export default ButtonReview;
