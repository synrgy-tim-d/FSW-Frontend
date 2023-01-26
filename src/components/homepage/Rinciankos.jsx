import { Link } from 'react-router-dom';
import image from '../../assets/Banner1.png';
import Detailkos from './details-constants/Fasili/Detailkos';
import Contactperson from './details-constants/Fasili/Contactperson';
import Faq from './details-constants/Fasili/Faq';
import Fasilitaskamar from './details-constants/Fasili/Fasilitaskamar';
import Fasilitasbersama from './details-constants/Fasili/Fasilitasbersama';
import Peraturankos from './details-constants/Fasili/Peraturankos';
import Deskripsikos from './details-constants/Fasili/Deskripsikos';
import Review from './details-constants/Fasili/Review';
import Bigimg from '../../assets/Dummy-img-details/Big-img.svg'
import Medimg from '../../assets/Dummy-img-details/Med-img.svg'
import Smallimg1 from '../../assets/Dummy-img-details/Small-img1.svg'
import Smallimg2 from '../../assets/Dummy-img-details/Small-img1.svg'

const Rinciankos = () => {
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
            <li>
              <Link to='/kos' className='text-[20px] font-[600] hover:underline'>
                Kos Alamanda
              </Link>
            </li>
          </ul>
        </div>

        <div className='grid grid-rows-auto grid-flow-row'>
          <div className='grid grid-cols-12 gap-6'>
            <div className='col-span-7 bg-green-500'>
              <img className='w-full h-auto' src={ Bigimg } alt='' />
            </div>
            <div className='col-span-4 grid grid-rows-2 gap-6'>
              <div className='bg-blue-500'>
                <img className='w-full h-auto' src={ Medimg } alt='' />
              </div>
              <div className='grid grid-cols-2 grid-flow-col gap-6'>
                <div>
                  <img className='w-full h-auto bg-yellow-500' src={ Smallimg1 } alt='' />
                </div>
                <div>
                  <img className='w-full h-auto bg-yellow-500' src={ Smallimg2 } alt='' />
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
              <form
                action='|'
                className='shadow-[#000000] shadow-md w-full grid grid-rows-auto gap-y-6 justify-items-center rounded-[8px]'
              >
                <div className='mt-8'>
                  <p className='text-[20px] font-[700]'>
                    Rp1.000.000
                    <span className='font-[400] text-[14px]'>/bulan</span>
                  </p>
                </div>
                <div className='w-4/5'>
                  <input
                    type='text'
                    className='w-full border-2 border-[#0A008A] text-[#B9B9BC] text-[14px] font-[500] p-1 rounded-[8px]'
                    placeholder='Check-in'
                  />
                </div>
                <div className='w-4/5'>
                  <input
                    type='text'
                    className='w-full border-2 border-[#0A008A] text-[#000000] text-[14px] font-[500] p-1 rounded-[8px]'
                    placeholder='Per Bulan'
                  />
                </div>
                <div className='w-full px-6'>
                  <hr className='w-full border-2 border-dashed boreder-[#46464F]/[0.38]' />
                </div>
                <div className='w-full grid grid-cols-2 grid-flow-col px-6'>
                  <div className='flex justify-start'>Total</div>
                  <div className='flex justify-end'>Rp1.000.000</div>
                </div>
                <div className='w-full px-6'>
                  <button
                    type='submit'
                    className='w-full bg-[#46464F1F]/[0.12] text-[#46464F1F]/[0.38] text-[16px] font-[600] mb-8'
                  >
                    Sewa
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rinciankos;
