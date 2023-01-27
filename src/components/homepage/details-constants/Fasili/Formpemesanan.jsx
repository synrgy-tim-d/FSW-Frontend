import React from 'react';

const Formpemesanan = () => {
  return (
    <React.Fragment>
      <form
        action='|'
        className='shadow-[#000000] shadow-md w-full grid grid-rows-auto gap-y-6 justify-items-center rounded-[8px]'
      >
        <div className='mt-8'>
          <p className='text-[20px] font-[700]'>
            Rp1.000.000
            <span className='font-[400] text-[14px]'>/bulan</span>
          </p>
        </div>
        <div className='w-4/5'>
          <input
            type='text'
            className='w-full border-2 border-[#0A008A] text-[#B9B9BC] text-[14px] font-[500] p-1 rounded-[8px]'
            placeholder='Check-in'
          />
        </div>
        <div className='w-4/5'>
          <input
            type='text'
            className='w-full border-2 border-[#0A008A] text-[#000000] text-[14px] font-[500] p-1 rounded-[8px]'
            placeholder='Per Bulan'
          />
        </div>
        <div className='w-full px-6'>
          <hr className='w-full border-2 border-dashed boreder-[#46464F]/[0.38]' />
        </div>
        <div className='w-full grid grid-cols-2 grid-flow-col px-6'>
          <div className='flex justify-start'>Total</div>
          <div className='flex justify-end'>Rp1.000.000</div>
        </div>
        <div className='w-full px-6'>
          <button
            type='submit'
            className='w-full bg-[#46464F1F]/[0.12] text-[#46464F1F]/[0.38] text-[16px] font-[600] mb-8 p-2'
          >
            Sewa
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default Formpemesanan;
