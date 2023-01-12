import React from 'react';
import saveMoney from '../../assets/Whyus1_saveMoney.png';
import notification from '../../assets/Whyus2_notification.png';
import faq from '../../assets/Whyus3_faq.png';

const Whyus = () => {
  return (
    <div className=' py-20'>
      <div className='text-start space-y-10'>
        <h2 className='lg:text-[31px] font-bold'>Kenapa Harus Naqos?</h2>
        <div className='flex'>
          <div className='flex items-center w-4/12'>
            <img className='w-5/12' src={saveMoney} />
            <div className='space-y-4'>
              <h3 className='font-semibold lg:text-[20px] '>Murah</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut.
              </p>
            </div>
          </div>
          <div className='flex items-center w-4/12'>
            <img className='w-5/12' src={notification} />
            <div className='space-y-4'>
              <h3 className='font-semibold lg:text-[20px] '>Reminder</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut.
              </p>
            </div>
          </div>
          <div className='flex items-center w-4/12'>
            <img className='w-5/12' src={faq} />
            <div className='space-y-4'>
              <h3 className='font-semibold lg:text-[20px] '>Lengkap</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
