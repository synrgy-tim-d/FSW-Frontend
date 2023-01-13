import React from 'react';

const Popular = () => {
  return (<div className='flex flex-wrap w-full py-10'>
    <div className='flex w-full'>
      <p className='text-2xl font-bold font-montserrat'>Kos Populer di Kota Besar</p>
    </div>
    <div className='w-full grid grid-cols-4 grid-rows-2 py-8 gap-y-7 gap-x-5'>
      {(() => {
        let frame = []
        for (let i = 0; i < 8; i++) {
          frame.push(<div className='w-full h-[221px] bg-[#F5F5F5]  rounded-lg'>
          </div>)
        }
        return frame
      })()}
    </div>
  </div>);
};

export default Popular;
