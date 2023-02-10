import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import {
  CollapseCheckbox,
  CollapseRadio
} from '../components/homepage/homepage-constants/Collapse';
import {
  urutanHarga,
  fasilitasKamar,
  fasilitasBersama,
} from '../components/homepage/homepage-constants/Dropdown';
import Kostdata from '../components/wishlist/Wishlistpage-kost-data';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const Wishlistpage = () => {
  const title = ['Urutkan', 'Fasilitas Kamar', 'Fasilitas Bersama'];

  const getWishlist = useQuery({
    queryKey: ['getWishlist'],
    queryFn: async () =>
      await axios.get(`https://be-naqos.up.railway.app/api/wishlists/get?page=1&size=100`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('AUTH_TOKEN')}`
        }
      })
  });

  const submitHandle = (e) => {
    e.preventDefault();
  };

  if (!getWishlist.isLoading) {
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
              <Kostdata fetchData={getWishlist?.data?.data?.data}/>
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
  }
};

export default Wishlistpage;