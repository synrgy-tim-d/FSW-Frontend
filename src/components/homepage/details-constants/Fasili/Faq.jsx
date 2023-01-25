import React, { useState, useEffect } from 'react';

const Faq = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div className='grid grid-rows-auto gap-6'>
        <div className='relative border-[#B9B9BC] border-2'>
          <button
            className='p-2 pl-4 block text-left w-full text-[#B9B9BC] font-[600] bg-[#FFFFFF] '
            onClick={() => setIsOpen(!isOpen)}
          >
            FAQ ?
          </button>
          {isOpen && (
            <div className='absolute left-0 mt-2 py-2 w-full bg-white'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quasi numquam sed
              iusto itaque, error distinctio nesciunt temporibus cupiditate laborum beatae rem
              aperiam labore impedit, in perspiciatis ratione nulla recusandae!
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Faq;
