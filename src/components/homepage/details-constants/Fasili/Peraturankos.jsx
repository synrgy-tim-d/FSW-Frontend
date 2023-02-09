import React from 'react';
import Check from '../../../../assets/Peraturan-kos/Check.svg';
import Cross from '../../../../assets/Peraturan-kos/Cross.svg';

const Peraturankos = ({fetchData}) => {
  return (
    <React.Fragment>
      <div className='grid gap-4'>
        <p className='text-[20px] font-[700]'>Peraturan Kos</p>
        <div className='grid grid-cols-2 grid-flow-row gap-4'>
          <div className='col-start-1 col-span-1 grid grid-rows-auto gap-4'>
            {fetchData?.rooms.map((check) => {
              return (
                <React.Fragment key={check.id}>
                  <div className='grid grid-cols-9 gap-4'>
                    <span className='col-span-1'>
                      <img src={Check} alt='' />
                    </span>
                    <p className='col-span-8'>{check.rules}</p>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
          <div className='col-start-2 col-span-1 grid grid-rows-auto gap-4'>
            {fetchData?.rooms.map((cross) => {
              return (
                <React.Fragment key={cross.id}>
                  <div className='grid grid-cols-9 gap-4'>
                    <span className='col-span-1'>
                      <img src={Cross} alt='' />
                    </span>
                    <p className='col-span-8'>{cross.rules}</p>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Peraturankos;
