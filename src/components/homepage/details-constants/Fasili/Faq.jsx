import React from 'react';

const Faq = ({ fetchData }) => {
  return (
    <React.Fragment>
      <div className='grid grid-rows-auto gap-6'>
        <div className='faq-one border-[3px] border-[#B9B9BC] rounded-[8px]'>
          <div tabIndex={0} className='collapse collapse-plus collapse-arrow'>
            <input type='checkbox' />
            <div className='collapse-title pl-2 p-2 text-[20px] text-[#B9B9BC] font-[600] bg-white'>
              {fetchData?.question1}
            </div>
            <div className='collapse-content'>
              <div className='p-2 w-full bg-white text-[14px] font-[500]'>
              {fetchData?.answer1}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='grid grid-rows-auto gap-6'>
        <div className='faq-one border-[3px] border-[#B9B9BC] rounded-[8px]'>
          <div tabIndex={0} className='collapse collapse-plus'>
            <input type='checkbox' />
            <div className='collapse-title pl-2 p-2 text-[20px] text-[#B9B9BC] font-[600] bg-white'>
            {fetchData?.question2}
            </div>
            <div className='collapse-content'>
              <div className='p-2 w-full bg-white text-[14px] font-[500]'>
                {fetchData?.answer2}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='grid grid-rows-auto gap-6'>
        <div className='faq-one border-[3px] border-[#B9B9BC] rounded-[8px]'>
          <div tabIndex={0} className='collapse collapse-plus'>
            <input type='checkbox' />
            <div className='collapse-title pl-2 p-2 text-[20px] text-[#B9B9BC] font-[600] bg-white'>
            {fetchData?.question3}
            </div>
            <div className='collapse-content'>
              <div className='p-2 w-full bg-white text-[14px] font-[500]'>
                {fetchData?.answer3}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Faq;
