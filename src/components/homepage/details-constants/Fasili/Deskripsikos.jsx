import React from 'react';

const Deskripsikos = ({fetchData}) => {
  return (
    <React.Fragment>
      <div className='grid grid-rows-auto gap-4'>
        <p className='text-[20px] font-[700]'>Deskripsi Kos</p>
        <p>
          {fetchData?.description}
        </p>
        <button className='w-full text-[20px] font-[700] text-[#000000]/[0.38]'>
          Selengkapnya
        </button>
      </div>
    </React.Fragment>
  );
};

export default Deskripsikos;
