import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar/navbar';
import Navbarsign from '../components/navbar/navbarnologin';
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
import magnifier from '../assets/Banner2_Magnifier.png';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const Homepage = () => {
  const title = ['Tipe Kos', 'Waktu Sewa', 'Urutkan', 'Fasilitas Kamar', 'Fasilitas Bersama'];

  const submitHandle = (e) => {
    e.preventDefault();
    console.log(tipeKos);
    console.log(waktuSewa);
    console.log(urutanHarga);
    console.log(fasilitasKamar);
    console.log(fasilitasBersama);
  };

  const [search, setSearch] = useState('');

  const searchKost = useQuery({
    queryKey: ['searchKost'],
    queryFn: async () =>
      await axios.get(
        `https://be-naqos.up.railway.app/api/public/by-city/${search}?page=1&size=10&orderBy=id&orderType=desc`,
      ),
    enabled: false,
  });

  const handleClick = () => {
    searchKost.refetch();
  };
  // console.log(searchKost?.data?.data.data);

  return (
    <React.Fragment>
      {localStorage.getItem('AUTH_TOKEN') === null ? <Navbarsign /> : <Navbar />}
      <div className='w-full font-[Montserrat] font-[400] text-[#000000] text-[16px] bg-[#FAFAFA] p-8'>
        <div className='flex space-x-4 px-4'>
          <div className='flex space-x-4 w-full border-2 bg-white rounded-[4px] py-3'>
            <img className='ml-4 pointer-events-none' src={magnifier} />
            <input
              className='w-full text-black text-[20px]'
              type='search'
              name='search'
              placeholder='Masukkan nama kota yang diinginkan'
              onChange={(e) => {
                setSearch(e.target.value.replace(/\s/g, '%20'));
              }}
            />
          </div>
          <button
            className='w- full bg-[#0A008A] px-10 text-white hover:bg-[#A0A3FF] hover:text-[#FFFFFF] active:bg-black font-[600] rounded-[4px]'
            type='submit'
            onClick={handleClick}
          >
            Cari
          </button>
        </div>
        <div className='breadcrumb p-4 py-8'>
          <ul>
            <li>
              <Link to='/' className='text-[24px] font-[600] hover:underline hover:text-[#0A008A]'>
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/homepage'
                className='text-[24px] font-[600] hover:underline hover:text-[#0A008A]'
              >
                Cari Kos
              </Link>
            </li>
          </ul>
        </div>

        <div className='grid grid-cols-4 grid-flow-col gap-4'>
          <div className='col-span-3 grid grid-cols-auto auto-rows-max gap-8'>
            <Kostdata fetchData={searchKost?.data?.data.data} />
          </div>

          <div className='col-span-1'>
            <form action='' className='grid grid-flow-row gap-y-4'>
              <CollapseCheckboxType items={tipeKos} buttonText={title[0]} />
              <CollapseRadio items={waktuSewa} buttonText={title[1]} />
              <CollapseRadio items={urutanHarga} buttonText={title[2]} />
              <CollapseCheckbox items={fasilitasKamar} buttonText={title[3]} />
              <CollapseCheckbox items={fasilitasBersama} buttonText={title[4]} />
              <button
                onClick={submitHandle}
                className='w-full py-2 rounded-[4px] text-white bg-[#0A008A] hover:bg-[#A0A3FF] hover:text-[#FFFFFF] active:bg-black'
              >
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

export default Homepage;
