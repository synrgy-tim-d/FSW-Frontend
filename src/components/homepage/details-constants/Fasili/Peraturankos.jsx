import React, { useEffect, useState } from 'react';
import Check from '../../../../assets/Peraturan-kos/Check.svg';
import Cross from '../../../../assets/Peraturan-kos/Cross.svg';

const Peraturankos = () => {
  const [Checks, setChecks] = useState([]);
  const [Crosses, setCrosses] = useState([]);
  useEffect(() => {
    const ChecksList = [
      {
        id: 1,
        text: 'Tamu yang menginap harus membayar',
      },
      {
        id: 2,
        text: 'Tidak untuk Pasutri',
      },
      {
        id: 3,
        text: 'Dapat diisi maksimal 2 orang/kamar',
      },
    ];
    const CrossList = [
      {
        id: 1,
        text: 'Barang Elektronik tertentu dikenakan biaya',
      },
      {
        id: 2,
        text: 'Tidak boleh melewati jam malam',
      },
      {
        id: 3,
        text: 'Tidak boleh membawa hewan',
      },
    ];
    setChecks(ChecksList);
    setCrosses(CrossList);
  }, []);

  return (
    <React.Fragment>
      <div className='grid gap-4'>
        <p className='text-[20px] font-[700]'>Peraturan Kos</p>
        <div className='grid grid-cols-2 grid-flow-row gap-4'>
          <div className='col-start-1 col-span-1 grid grid-rows-auto gap-4'>
            {Checks.map((check, index) => {
              return (
                <React.Fragment key={index}>
                  <div className='grid grid-cols-9 gap-4'>
                    <span className='col-span-1'>
                      <img src={Check} alt='' />
                    </span>
                    <p className='col-span-8'>{check.text}</p>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
          <div className='col-start-2 col-span-1 grid grid-rows-auto gap-4'>
            {Crosses.map((cross, index) => {
              return (
                <React.Fragment key={index}>
                  <div className='grid grid-cols-9 gap-4'>
                    <span className='col-span-1'>
                      <img src={Cross} alt='' />
                    </span>
                    <p className='col-span-8'>{cross.text}</p>
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
