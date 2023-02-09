import React from 'react';

const Formpemesanan = ({ dateOnChange, totalPayment, timeOnChange, submitOnClick, dateDesc }) => {
  return (
    <React.Fragment>
      <form
        action='|'
        className='shadow-[#000000] shadow-md w-full grid grid-rows-auto gap-y-6 justify-items-center rounded-[8px] sticky top-12 '
      >
        <div className='mt-8'>
          <p className='text-[20px] font-[700]'>
            {`Rp.${new Intl.NumberFormat('en-DE').format(totalPayment)}`}
            <span className='font-[400] text-[14px]'>{`/${dateDesc}`}</span>
          </p>
        </div>
        <div className='w-4/5'>
          <input
            type='date'
            className='w-full border-2 border-[#0A008A] text-[#46464f] text-[14px] font-[500] p-1 rounded-[8px]'
            placeholder='Check-in'
            onChange={dateOnChange}
          />
        </div>
        <div className='w-4/5'>
          <select
            name='rent_time'
            className='w-full border-2 border-[#0A008A] text-[#46464f] text-[14px] font-[500] p-1 rounded-[8px]'
            id=''
            onChange={timeOnChange}
          >
            <option value='HARIAN'>Harian</option>
            <option value='MINGGUAN'>Mingguan</option>
            <option value='BULANAN'>Bulanan</option>
          </select>
        </div>
        <div className='w-full px-6'>
          <hr className='w-full border-2 border-dashed boreder-[#46464F]/[0.38]' />
        </div>
        <div className='w-full grid grid-cols-2 grid-flow-col px-6'>
          <div className='flex justify-start'>Total</div>
          <div className='flex justify-end'>{`Rp.${new Intl.NumberFormat('en-DE').format(
            totalPayment,
          )}`}</div>
        </div>
        <div className='w-full px-6'>
          <button
            type='submit'
            className='bg-[#0A008A] mb-8 p-2 text-[16px] text-white rounded w-full py-1 lg:py-2 px-12 hover:bg-[#A0A3FF] hover:text-[#FFFFFF] active:bg-black'
            onClick={submitOnClick}
          >
            Sewa
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default Formpemesanan;
