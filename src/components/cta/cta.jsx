import React from 'react';

const CTA = () => {
  return (<div className='flex flex-wrap pt-8 gap-4 font-montserrat'>
    <div className='w-full'>
      <h1 className='font-bold text-6xl'>+1000 pemilik kos</h1>
    </div>
    <div className='w-full flex justify-center'>
      <p className='text-2xl w-1/2'>Lebih dari  seribu pemilik kos telah mendaftarkan kosnya! Daftarkan punyamu sekarang!</p>
    </div>
    <div className='w-full flex justify-center'>
      <button className='text-sm font-semibold font-montserrat flex gap-2 bg-[#FFBA2C] py-3 px-6 rounded-full items-center'>
        <p>Daftarkan kos</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg>
      </button>
    </div>
  </div>);
};

export default CTA;
