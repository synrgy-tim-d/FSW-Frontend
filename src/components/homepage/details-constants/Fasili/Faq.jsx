import React from 'react';

const Faq = () => {
  return (
    <React.Fragment>
      <div className='grid grid-rows-auto gap-6'>
        <div className='faq-one'>
          <div
            tabIndex={0}
            className='collapse collapse-plus border border-base-300 bg-base-100 rounded-box'
          >
            <input type='checkbox' />
            <div className='collapse-title text-sm font-medium pl-2'>FAQ</div>
            <div className='collapse-content'>
              <div className='left-0 mt-2 py-2 w-full bg-white'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quasi numquam sed
                iusto itaque, error distinctio nesciunt temporibus cupiditate laborum beatae rem
                aperiam labore impedit, in perspiciatis ratione nulla recusandae!
              </div>
            </div>
          </div>
        </div>
        <div className='faq-two'>
          <div
            tabIndex={0}
            className='collapse collapse-plus border border-base-300 bg-base-100 rounded-box'
          >
            <input type='checkbox' />
            <div className='collapse-title text-sm font-medium pl-2'>FAQ</div>
            <div className='collapse-content'>
              <div className='left-0 mt-2 py-2 w-full bg-white'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quasi numquam sed
                iusto itaque, error distinctio nesciunt temporibus cupiditate laborum beatae rem
                aperiam labore impedit, in perspiciatis ratione nulla recusandae!
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Faq;
