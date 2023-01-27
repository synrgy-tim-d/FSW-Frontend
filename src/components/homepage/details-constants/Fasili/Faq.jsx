import React from 'react';

const Faq = () => {
  return (
    <React.Fragment>
      <div className='grid grid-rows-auto gap-6'>
        <div className='faq-one border-[3px] border-[#B9B9BC] rounded-[8px]'>
          <div tabIndex={0} className='collapse collapse-plus collapse-arrow'>
            <input type='checkbox' />
            <div className='collapse-title pl-2 p-2 text-[20px] text-[#B9B9BC] font-[600] bg-white'>
              FAQ BOX 1?
            </div>
            <div className='collapse-content'>
              <div className='p-2 w-full bg-white text-[14px] font-[500]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quasi numquam sed
                iusto itaque, error distinctio nesciunt temporibus cupiditate laborum beatae rem
                aperiam labore impedit, in perspiciatis ratione nulla recusandae! Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Facere, aliquam pariatur temporibus
                cupiditate doloribus dolorem natus! Rem ducimus itaque, sapiente, in at, a corrupti
                neque eligendi quaerat dignissimos exercitationem tempora.
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
              FAQ BOX 2?
            </div>
            <div className='collapse-content'>
              <div className='p-2 w-full bg-white text-[14px] font-[500]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quasi numquam sed
                iusto itaque, error distinctio nesciunt temporibus cupiditate laborum beatae rem
                aperiam labore impedit, in perspiciatis ratione nulla recusandae! Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Facere, aliquam pariatur temporibus
                cupiditate doloribus dolorem natus! Rem ducimus itaque, sapiente, in at, a corrupti
                neque eligendi quaerat dignissimos exercitationem tempora.
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
              FAQ BOX 3?
            </div>
            <div className='collapse-content'>
              <div className='p-2 w-full bg-white text-[14px] font-[500]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quasi numquam sed
                iusto itaque, error distinctio nesciunt temporibus cupiditate laborum beatae rem
                aperiam labore impedit, in perspiciatis ratione nulla recusandae! Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Facere, aliquam pariatur temporibus
                cupiditate doloribus dolorem natus! Rem ducimus itaque, sapiente, in at, a corrupti
                neque eligendi quaerat dignissimos exercitationem tempora.
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Faq;
