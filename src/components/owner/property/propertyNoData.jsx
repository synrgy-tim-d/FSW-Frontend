import noproperty from '../../../assets/img_noProperty.png';

export const PropertyOwnerNoData = () => {
  return (
    <div className='col-span-4 min-h-screen h-full px-5'>
      <div className='flex flex-row justify-center mt-52'>
        <img src={noproperty} className='' alt='Properti Masih Kosong' />
      </div>
      <div className='flex flex-row justify-center text-center mt-12'>
        <p className='text-[30px] font-[600]'>Properti masih kosong</p>
      </div>
      <div className='flex flex-row justify-center text-center mt-5'>
        <p className='text-[20px] font-[500] max-w-[550px]'>
          Tambah properti dan kelola propertimu sekarang!
        </p>
      </div>
      <div className='flex flex-row justify-center mt-12'>
        <button
          type='button'
          className='inline-flex self-center justify-center gap-2 rounded-[150px] max-w-[450px] w-full px-4 py-2 font-[600] text-[16px] text-white border-2 border-[#0A008A] bg-[#0A008A] hover:bg-[#A0A3FF] hover:text-[#0A008A] focus:bg-black focus:text-white focus:outline-none'
        >
          Tambah Properti
        </button>
      </div>
    </div>
  );
};
