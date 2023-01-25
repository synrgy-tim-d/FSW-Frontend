import React from 'react';

const Peraturankos = () => {
  return (
    <>
      <div className='grid gap-4'>
        <p className='text-[20px] font-[700]'>Peraturan Kos</p>
        <div className='grid grid-cols-2 grid-flow-row gap-4'>
          <div>Tamu yang menginap harus membayar</div>
          <div>Tidak untuk pasutri</div>
          <div>Barang Elektronik tertentu dikenakan biaya</div>
          <div>Tidak boleh melewati jam malam</div>
        </div>
      </div>
    </>
  );
};

export default Peraturankos;
