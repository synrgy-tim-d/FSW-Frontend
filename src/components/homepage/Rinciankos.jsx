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
          <div className='grid grid-cols-5 gap-8'>
            <div className='col-span-3 gap-8 bg-green-500'>
              <img className='w-full h-auto' src={image} alt='' />
            </div>
            <div className='col-span-2 grid grid-rows-2 gap-8'>
              <div className='bg-blue-500'>
                <img className='w-full h-auto' src={image} alt='' />
              </div>
              <div className='grid grid-cols-2 grid-flow-col gap-4'>
                <div>
                  <img className='w-full h-auto bg-yellow-500' src={image} alt='' />
                </div>
                <div>
                  <img className='w-full h-auto bg-yellow-500' src={image} alt='' />
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
              <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt odit porro dolor
                ullam ipsa doloremque illum omnis eaque, sed voluptate enim voluptatibus autem nulla
                perspiciatis praesentium dolore, minus, magni consequatur! Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Temporibus nihil eligendi fugiat repellendus?
                Praesentium assumenda deleniti ducimus id aliquid exercitationem quis incidunt
                labore repellat quas, dolorum sint impedit. Perspiciatis, vel.
              </div>
            </div>

            <div className='col-span-1'>
              <form action=''>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora beatae, ipsam quam
                ut culpa cumque facilis? Accusantium labore natus eligendi nulla non sit voluptate
                cupiditate autem voluptatum totam! Ea, ducimus. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Impedit rem error aut sint vel voluptates, quaerat
                placeat molestias amet deserunt officiis soluta! Quibusdam optio non ducimus aperiam
                voluptatem ratione magnam! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis corporis molestiae saepe quis velit? Odit autem excepturi quaerat
                repudiandae eius ex? Eveniet dolore doloribus voluptatibus error nulla placeat ipsum
                expedita! Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores in
                corporis cupiditate rerum minima optio esse tempore vel debitis, ipsam quam,
                perferendis aliquid at. Rerum voluptatum earum aspernatur voluptatem suscipit! Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Distinctio atque, sint, similique
                autem suscipit pariatur voluptatem in numquam, porro ut dolores vel. Reprehenderit
                adipisci iusto consequatur ipsum quibusdam soluta ipsam?
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rinciankos;
