import React from 'react';
import { Link } from 'react-router-dom';
import Detailkos from '../components/homepage/details-constants/Fasili/Detailkos';
import Contactperson from '../components/homepage/details-constants/Fasili/Contactperson';
import Faq from '../components/homepage/details-constants/Fasili/Faq';
import Fasilitaskamar from '../components/homepage/details-constants/Fasili/Fasilitaskamar';
import Fasilitasbersama from '../components/homepage/details-constants/Fasili/Fasilitasbersama';
import Peraturankos from '../components/homepage/details-constants/Fasili/Peraturankos';
import Deskripsikos from '../components/homepage/details-constants/Fasili/Deskripsikos';
import Review from '../components/homepage/details-constants/Fasili/Review';
import Formpemesanan from '../components/homepage/details-constants/Fasili/Formpemesanan';
import Bigimg from '../assets/Dummy-img-details/Big-img.svg';
import Medimg from '../assets/Dummy-img-details/Med-img.svg';
import Smallimg1 from '../assets/Dummy-img-details/Small-img1.svg';
import Navbarsign from '../components/navbar/navbarnologin';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import magnifier from '../assets/Banner2_Magnifier.png';

const Rinciankos = () => {
  return (
    <React.Fragment>
      {localStorage.getItem('AUTH_TOKEN') === null ? <Navbarsign /> : <Navbar />}
      <div className='w-full font-[Montserrat] font-[400] text-[#000000] text-[16px] p-8 bg-[#FAFAFA]'>
        <div className='flex space-x-4 px-4'>
          <div className='flex space-x-4 w-full border-2 bg-white rounded-[4px] py-3'>
            <img className='ml-4 pointer-events-none' src={magnifier} />
            <input
              className='w-full text-black text-[20px]'
              type='search'
              name=''
              placeholder='Masukkan nama kota yang diinginkan'
            />
          </div>
          <button
            className='w- full bg-[#0A008A] px-10 text-white hover:bg-[#A0A3FF] hover:text-[#FFFFFF] active:bg-black font-[600] rounded-[4px]'
            type='submit'
            onClick=''
          >
            Cari
          </button>
        </div>
        <div className='breadcrumb p-4 py-8'>
          <ul>
            <li>
              <Link to='/' className='text-[24px] font-[600] hover:underline'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/homepage' className='text-[24px] font-[600] hover:underline'>
                Cari Kos
              </Link>
            </li>
            <li>
              <Link to='/kos/:kosid/:roomid' className='text-[24px] font-[600] hover:underline'>
                Kos Alamanda
              </Link>
            </li>
          </ul>
        </div>
        <div className='grid grid-rows-auto grid-flow-row pb-12'>
          <div className='grid grid-cols-12 gap-6'>
            <div className='col-span-7 bg-green-500'>
              <img className='w-full h-auto' src={Bigimg} alt='' />
            </div>
            <div className='col-span-4 grid grid-rows-2 gap-6'>
              <div className='bg-blue-500'>
                <img className='w-full h-auto' src={Medimg} alt='' />
              </div>
              <div className='grid grid-cols-2 grid-flow-col gap-6'>
                <div>
                  <img className='w-full h-auto bg-yellow-500' src={Smallimg1} alt='' />
                </div>
                <div>
                  <img className='w-full h-auto bg-yellow-500' src={Smallimg1} alt='' />
                </div>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-3 pt-12 gap-8'>
            <div className='col-span-2 grid grid-rows-auto gap-y-6'>
              <Detailkos />
              <Contactperson />
              <Faq />
              <hr className='border-2' />
              <Fasilitaskamar />
              <hr className='border-2' />
              <Fasilitasbersama />
              <hr className='border-2' />
              <Peraturankos />
              <hr className='border-2' />
              <Deskripsikos />
              <hr className='border-2' />
              <Review />
              <hr className='border-2' />
              <div>THIS PLACE WILL BE A CARROUSEL OF OTHER ROOM TYPES</div>
            </div>
            <div className='col-span-1 w-full px-20'>
              <Formpemesanan />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Rinciankos;
