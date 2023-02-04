import { Link } from 'react-router-dom';
import iconcompleted from '../../assets/icon_completed.svg';
import iconpending from '../../assets/icon_pending.svg';

export const ButtonDisabled = () => {
  return (
    <div className='flex flex-row flex-1'>
      {/* --- WEB PC --- */}
      <div className='lg:flex flex-col flex-1 items-end hidden'>
        <button
          disabled
          className='cursor-not-allowed w-[178px] h-[43px] mb-[65px] p-0 bg-[#e9e9ea] rounded-[4px] outline-none text-[16px] font-[600] text-[#ababaf] hover:border-[#e9e9ea] hover:bg-[#e9e9ea] hover:text-[#ababaf]'
          type='button'
        >
          Upload Bukti
        </button>
        <div className='flex flex-row justify-end'>
          <img className='' alt='' src={iconpending} />
          <p className='text-[12px] font-[500] text-[#EA9A3D] ml-2 mb-[4px] mt-1'>
            Menunggu upload bukti pembayaran
          </p>
        </div>
      </div>

      {/* --- WEB MOBILE --- */}
      <div className='flex flex-col lg:hidden'>
        <button
          disabled
          className='cursor-not-allowed w-[153px] h-[33px] p-0 bg-[#e9e9ea] rounded-[4px] outline-none text-[14px] font-[600] text-[#ababaf] hover:border-[#e9e9ea] hover:bg-[#e9e9ea] hover:text-[#ababaf]'
          type='button'
        >
          Upload Bukti
        </button>
        <div className='flex flex-row gap-1 mb-2'>
          <img className='w-[12px]' alt='' src={iconpending} />
          <p className='text-[12px] font-[500] text-[#EA9A3D]'>Menunggu upload bukti pembayaran</p>
        </div>
      </div>
    </div>
  );
};

export const ButtonPayment = () => {
  return (
    <div className='flex flex-row flex-1'>
      {/* --- WEB PC --- */}
      <div className='lg:flex flex-col flex-1 items-end hidden'>
        <Link
          to={{
            pathname: '/history/booknow',
          }}
        >
          <button
            className='w-[178px] h-[43px] mb-[65px] p-0 bg-[#0A008A] border-0 rounded-[4px] outline-none text-[16px] font-[600] text-white hover:bg-[#A0A3FF] hover:text-[#0A008A] focus:bg-black focus:text-white focus:outline-none'
            type='button'
          >
            Upload Bukti
          </button>
        </Link>
        <div className='flex flex-row justify-end'>
          <img className='' alt='' src={iconpending} />
          <p className='text-[12px] font-[500] text-[#EA9A3D] ml-2 mb-[4px] mt-1'>
            Menunggu upload bukti pembayaran
          </p>
        </div>
      </div>

      {/* --- WEB MOBILE --- */}
      <div className='flex flex-col lg:hidden'>
        <Link
          to={{
            pathname: '/history/booknow',
          }}
        >
          <button
            className='w-[153px] h-[33px] p-0 bg-[#0A008A] border-0 rounded-[4px] outline-none text-[14px] font-[600] text-white hover:bg-[#A0A3FF] hover:text-[#0A008A] focus:bg-black focus:text-white focus:outline-none'
            type='button'
          >
            Upload Bukti
          </button>
        </Link>
        <div className='flex flex-row gap-1 mb-2'>
          <img className='w-[12px]' alt='' src={iconpending} />
          <p className='text-[12px] font-[500] text-[#EA9A3D]'>Menunggu upload bukti pembayaran</p>
        </div>
      </div>
    </div>
  );
};

export const ButtonReview = () => {
  return (
    <div className='flex flex-row flex-1'>
      {/* --- WEB PC --- */}
      <div className='lg:flex flex-col flex-1 items-end hidden'>
        <label
          htmlFor='my-modal'
          className='cursor-pointer inline-flex items-center justify-center w-[151px] h-[43px] mb-[65px] p-0 bg-white border-2 border-[#0A008A] rounded-[4px] outline-none text-[16px] font-[600] text-[#0A008A] hover:bg-[#f3f4ff] hover:border-[#0A008A] hover:text-[#0A008A] active:bg-[#0A008A] active:text-white'
        >
          Tulis Review
        </label>
        <div className='flex flex-row'>
          <img className='' alt='' src={iconcompleted} />
          <p className='text-[12px] font-[500] text-[#008A3F] ml-2 mb-[4px] mt-1'>Completed</p>
        </div>
      </div>

      {/* --- WEB MOBILE --- */}
      <div className='flex flex-col lg:hidden'>
        <label
          htmlFor='my-modal'
          className='cursor-pointer inline-flex items-center justify-center w-[153px] h-[33px] p-0 bg-white border-2 border-[#0A008A] rounded-[4px] outline-none text-[14px] font-[600] text-[#0A008A] hover:bg-[#f3f4ff] hover:border-[#0A008A] hover:text-[#0A008A] active:bg-[#0A008A] active:text-white'
        >
          Tulis Review
        </label>
        <div className='flex flex-row gap-1 mb-2'>
          <img className='w-[14px]' alt='' src={iconcompleted} />
          <p className='text-[12px] font-[500] text-[#008A3F]'>Completed</p>
        </div>
      </div>
    </div>
  );
};
