import React from 'react';
import saveMoney from '../../assets/Whyus1_saveMoney.png';
import notification from '../../assets/Whyus2_notification.png';
import faq from '../../assets/Whyus3_faq.png';

const Whyus = () => {
  return (
    <div className='py-20 font-montserrat'>
      <div className='text-start space-y-10 '>
        <h2 className='ml-4 text-2xl lg:text-4xl lg:ml-0 lg:pb-7 font-bold '>
          Kenapa Harus Naqos?
        </h2>
        <div className='flex justify-center px-2'>
          <div className='lg:flex w-4/12 px-2'>
            <img className='w-5/12 mx-auto' src={saveMoney} />
            <div className='space-y-1 text-center font-montserrat lg:flex items-center lg:text-start'>
              <div className='lg:space-y-2'>
                <h3 className='font-bold text-xl lg:text-xl'>Murah</h3>
                <p className='text-sm lg:text-base'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut.
                </p>
              </div>
            </div>
          </div>
          <div className='lg:flex w-4/12 px-2'>
            <img className='w-5/12 mx-auto pb-2' src={notification} />
            <div className='space-y-1 text-center font-montserrat lg:flex items-center lg:text-start'>
              <div className='lg:space-y-2'>
                <h3 className='font-bold text-xl lg:text-xl'>Reminder</h3>
                <p className='text-sm lg:text-base'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut.
                </p>
              </div>
            </div>
          </div>
          <div className='lg:flex w-4/12 px-2'>
            <img className='w-5/12 mx-auto pb-4' src={faq} />
            <div className='space-y-1 text-center font-montserrat lg:flex items-center lg:text-start'>
              <div className='lg:space-y-2'>
                <h3 className='font-bold text-xl lg:text-xl'>Lengkap</h3>
                <p className='text-sm lg:text-base'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut.
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
