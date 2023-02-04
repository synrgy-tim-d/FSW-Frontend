import React from 'react';
import {
  CollapseCheckbox,
  CollapseRadio,
  CollapseCheckboxType,
} from './Collapse';
import {
  tipeKos,
  waktuSewa,
  urutanHarga,
  fasilitasKamar,
  fasilitasBersama,
} from './Dropdown';

const Facilities = () => {
  const title = ['Tipe Kos', 'Waktu Sewa', 'Urutkan', 'Fasilitas Kamar', 'Fasilitas Bersama'];

  const submitHandle = (e) => {
    e.preventDefault();
    console.log(tipeKos);
    console.log(waktuSewa);
    console.log(urutanHarga);
    console.log(fasilitasKamar);
    console.log(fasilitasBersama);
  };

  return (
    <div className='grid lg:grid-cols-none grid-flow-row gap-4 lg:col-auto content-start'>
      <CollapseCheckboxType items={tipeKos} buttonText={title[0]} />
      <CollapseRadio items={waktuSewa} buttonText={title[1]} />
      <CollapseRadio items={urutanHarga} buttonText={title[2]} />
      <CollapseCheckbox items={fasilitasKamar} buttonText={title[3]} />
      <CollapseCheckbox items={fasilitasBersama} buttonText={title[4]} />
      <button
        onClick={submitHandle}
        className='w-full col-span-full py-2 rounded-[4px] 
                  text-white bg-[#0A008A] hover:bg-[#A0A3FF] hover:text-[#FFFFFF] active:bg-black'
      >
        Terapkan Filter
      </button>
    </div>
  );
};

export default Facilities;
