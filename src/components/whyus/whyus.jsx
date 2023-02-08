import React from 'react';
import saveMoney from '../../assets/Whyus1_saveMoney.png';
import notification from '../../assets/Whyus2_notification.png';
import faq from '../../assets/Whyus3_faq.png';

const Whyus = () => {
  return (
    <div className='p-10 font-montserrat bg-[#FAFAFA]'>
      <div className='text-start space-y-10 '>
        <h2 className='ml-2 text-lg lg:text-4xl lg:ml-0 lg:pb-7 font-bold '>Kenapa Harus Naqos?</h2>
        <div className='flex justify-center px-2'>
          <div className='lg:flex w-4/12 px-2'>
            <img className='w-5/12 mx-auto' src={saveMoney} />
            <div className='space-y-1 text-center font-montserrat lg:flex items-center lg:text-start'>
              <div className='lg:space-y-2'>
                <h3 className='font-bold text-base lg:text-xl'>Murah</h3>
                <p className='text-xs lg:text-base'>
                  Kosan yang tersedia merupakan kosan dengan harga terjangkau
                </p>
              </div>
            </div>
          </div>
          <div className='lg:flex w-4/12 px-2'>
            <img className='w-5/12 mx-auto pb-1' src={notification} />
            <div className='space-y-1 text-center font-montserrat lg:flex items-center lg:text-start'>
              <div className='lg:space-y-2'>
                <h3 className='font-bold text-base lg:text-xl'>Reminder</h3>
                <p className='text-xs lg:text-base'>
                  Fitur reminder buat ngingetin kos yang harus segera dibayar setelah dibooking
                </p>
              </div>
            </div>
          </div>
          <div className='lg:flex w-4/12 px-2'>
            <img className='w-5/12 mx-auto pb-2' src={faq} />
            <div className='space-y-1 text-center font-montserrat lg:flex items-center lg:text-start'>
              <div className='lg:space-y-2'>
                <h3 className='font-bold text-base lg:text-xl'>Lengkap</h3>
                <p className='text-xs lg:text-base'>
                  Deskripsi dan keterangan lengkap dari setiap kos disertai FAQ Box biar ga bingung
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
