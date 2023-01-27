import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import {
  CollapseCheckbox,
  CollapseRadio,
  CollapseCheckboxType,
} from '../components/homepage/homepage-constants/Collapse';
import {
  tipeKos,
  waktuSewa,
  urutanHarga,
  fasilitasKamar,
  fasilitasBersama,
} from '../components/homepage/homepage-constants/Dropdown';
import Kostdata from '../components/homepage/homepage-constants/Homepage-kost-data';

const Wishlistpage = () => {
  const title = ['Urutkan', 'Fasilitas Kamar', 'Fasilitas Bersama'];

  const submitHandle = (e) => {
    e.preventDefault();
    console.log(tipeKos);
    console.log(waktuSewa);
    console.log(urutanHarga);
    console.log(fasilitasKamar);
    console.log(fasilitasBersama);
  };

  return (
    <React.Fragment>
      <Navbar />
      <div className='w-screen font-[Montserrat] font-[400] text-[#000000] text-[16px] bg-[#FAFAFA] p-8'>
        <div className='breadcrumb pl-8 pb-12'>
          <ul>
            <li>
              <Link to='/' className='text-[20px] font-[600] hover:underline hover:text-[#0A008A]'>
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/wishlist'
                className='text-[20px] font-[600] hover:underline hover:text-[#0A008A]'
              >
                Wishlist
              </Link>
            </li>
          </ul>
        </div>

        <div className='grid grid-cols-4 grid-flow-col gap-4'>
          <div className='col-span-3 grid grid-cols-auto auto-rows-max gap-8'>
            <Kostdata />
          </div>

          <div className='col-span-1'>
            <form action='' className='grid grid-flow-row gap-y-4'>
              <CollapseRadio items={urutanHarga} buttonText={title[0]} />
              <CollapseCheckbox items={fasilitasKamar} buttonText={title[1]} />
              <CollapseCheckbox items={fasilitasBersama} buttonText={title[2]} />
              <button onClick={submitHandle} className='w-full py-2 rounded-[4px] text-white bg-[#0A008A] hover:bg-[#A0A3FF] hover:text-[#FFFFFF] active:bg-black'>
                Terapkan Filter
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Wishlistpage;