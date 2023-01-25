import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CollapseCheckbox, CollapseRadio } from '../components/homepage/homepage-constants/Collapse';
import {
  tipeKos,
  waktuSewa,
  urutanHarga,
  fasilitasKamar,
  fasilitasBersama,
} from '../components/homepage/homepage-constants/Dropdown';
import Kostdata from '../components/homepage/homepage-constants/Homepage-kost-data';

export const Homepage = () => {
  const title = ['Tipe Kos', 'Waktu Sewa', 'Urutkan', 'Fasilitas Kamar', 'Fasilitas Bersama'];

  const testHandle = (e) => {
    e.preventDefault();
    console.log(tipeKos);
    console.log(waktuSewa);
    console.log(urutanHarga);
    console.log(fasilitasKamar);
    console.log(fasilitasBersama);
  };

  return (
    <>
      <div className='w-screen font-[Montserrat] font-[400] text-[#000000] text-[16px] p-8'>
        <div className='breadcrumb pl-[62px] py-[17px]'>
          <ul>
            <li>
              <Link to='/' className='text-[20px] font-[600] hover:underline'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/homepage' className='text-[20px] font-[600] hover:underline'>
                Cari Kos
              </Link>
            </li>
          </ul>
        </div>

        <div className='grid grid-cols-4 grid-flow-col gap-4'>
          <div className='col-span-3 grid grid-cols-auto auto-rows-max gap-8 p-4'>
            <Kostdata />
          </div>

          <div className='col-span-1'>
            <form action='' className='grid grid-flow-row gap-y-6'>
              <CollapseCheckbox items={tipeKos} buttonText={title[0]} />
              <CollapseRadio items={waktuSewa} buttonText={title[1]} />
              <CollapseRadio items={urutanHarga} buttonText={title[2]} />
              <CollapseCheckbox items={fasilitasKamar} buttonText={title[3]} />
              <CollapseCheckbox items={fasilitasBersama} buttonText={title[4]} />
              <button onClick={testHandle} className='w-full bg-[#0A008A] text-[#FFFFFF]'>
                Terapkan Filter
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
