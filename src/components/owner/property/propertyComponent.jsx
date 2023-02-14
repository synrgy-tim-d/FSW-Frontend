import iconwarning from '../../../assets/icon_warning.svg';

export const ButtonCompleting = () => {
  return (
    <button
      type='button'
      className='inline-flex self-center justify-center w-full rounded-[4px] py-1 lg:py-2 font-[600] text-[12px] lg:text-[16px] text-white border-2 border-[#0A008A] bg-[#0A008A] hover:bg-[#A0A3FF] hover:text-[#0A008A] focus:bg-black focus:text-white focus:outline-none'
    >
      Lengkapi Data
    </button>
  );
};

export const ButtonEditing = () => {
  return (
    <button
      type='button'
      className='inline-flex self-center justify-center w-full rounded-[4px] py-1 lg:py-2 font-[600] text-[12px] lg:text-[16px] text-white border-2 border-[#0A008A] bg-[#0A008A] hover:bg-[#A0A3FF] hover:text-[#0A008A] focus:bg-black focus:text-white focus:outline-none'
    >
      Edit Kos
    </button>
  );
};

export const CardWarning = () => {
  return (
    <div className='flex flex-row mt-5 py-3 px-4 gap-4 rounded-[4px] border-[1px] border-[#CECECE]'>
      <div className='flex flex-col justify-center w-[25%] lg:w-[10%]'>
        <img className='max-w-[35px] lg:max-w-auto' alt='' src={iconwarning} />
      </div>
      <div className='flex flex-col'>
        <p className='text-[10px] lg:text-[12px] font-[600]'>Lengkapi Data Kos</p>
        <p className='text-[10px] lg:text-[12px] font-[400]'>
          Kosan belum tampil di halaman pencarian kos. Segera lengkapi data dan iklankan kosanmu
        </p>
      </div>
    </div>
  );
};

export const Draft = () => {
  return (
    <div className='px-2 py-1 w-fit rounded-[4px] bg-[#FFDCBD]'>
      <p className='text-[12px] lg:text-[16px] font-[600] text-[#BA1A1A]'>Draft</p>
    </div>
  );
};
