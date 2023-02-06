import { Link } from 'react-router-dom';

export const ButtonPending = () => {
  return (
    <button
      className='px-6 py-3 text-[16px] font-[600] border-2 rounded-[4px] outline-none border-[#0A008A] bg-[#0A008A] text-white hover:border-[#A0A3FF] hover:bg-[#A0A3FF] hover:text-[#0A008A] focus:border-black focus:bg-black focus:text-white focus:outline-none'
      type='button'
    >
      Konfirmasi
    </button>
  );
};

export const ButtonDetail = () => {
  return (
    <Link to='/owner/history/detail'>
      <button
        className='px-6 py-3 text-[16px] font-[600] border-2 rounded-[4px] outline-none border-[#0A008A] bg-white text-[#0A008A] hover:bg-[#f3f4ff] hover:text-[#0A008A] focus:bg-[#0A008A] focus:text-white focus:outline-none'
        type='button'
      >
        Lihat Detail
      </button>
    </Link>
  );
};

export const ButtonConfirm = () => {
  return (
    <label
      htmlFor='my-modal'
      className='inline-flex self-center justify-center cursor-pointer gap-2 rounded-[4px] w-2/6 py-2 font-[600] text-[16px] text-white border-2 border-[#0A008A] bg-[#0A008A] hover:bg-[#A0A3FF] hover:text-[#0A008A] focus:bg-black focus:text-white focus:outline-none'
    >
      Konfirmasi Pembayaran
    </label>
  );
};

export const ButtonConfirmDisabled = () => {
  return (
    <button
      disabled
      type='button'
      className='inline-flex self-center justify-center gap-2 rounded-[4px] w-2/6 py-2 font-[600] text-[16px] text-[#a8a8ac] border-2 border-[#e4e4e5] bg-[#e4e4e5] focus:outline-none'
    >
      Sudah Dikonfirmasi
    </button>
  );
};
