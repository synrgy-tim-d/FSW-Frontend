import  { useState, useEffect } from 'react';

export const CollapseCheckboxType = ({ items, buttonText }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClick = () => {
    if (screenWidth >= 768) {
      setIsOpen(!isOpen);
    }
  };

  const handleChange = (el) => {
   const temp = items.find((e) => e.value === el.target.value)
   temp.checked = !temp.checked
  };

  return (
    <div className='w-full bg-white px-6 rounded-[8px] py-2'>
      <button
        type='button'
        onClick={handleClick}
        className='text-[#46464F]/[0.38] text-[12px] sm:text-[16px] lg:text-[20px] font-[600] w-full text-center lg:text-start 
        hover:border-none active:border-none'
        disabled={screenWidth < 768}
      >
        {buttonText}
      </button>
      {(isOpen || screenWidth < 768) && (
        <ul
          className='grid grid-rows-2 grid-flow-col 
        text-[12px] lg:text-[16px] lg:grid-rows-auto gap-x-4 lg:gap-x-0 lg:gap-y-2 pt-2 py-4'
        >
          {items.map((item, index) => (
            <li key={index}>
              <input
                type='checkbox'
                name={item.name}
                value={item.value}
                onChange={handleChange}
              />
              <label className='pl-2'>{item.value}</label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export const CollapseCheckbox = ({ items, buttonText }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleChange = (el) => {
    const temp = items.find((e) => e.value === el.target.value)
    temp.checked = !temp.checked
   };

  return (
    <div className='w-full bg-white px-6 rounded-[8px] py-2'>
      <button
        type='button'
        onClick={() => setIsOpen(!isOpen)}
        className='text-[#46464F]/[0.38] text-[12px] sm:text-[16px] lg:text-[20px] font-[600] w-full text-center lg:text-start 
        hover:border-none active:border-none'
      >
        {buttonText}
      </button>
      {isOpen && (
        <ul
          className='grid grid-rows-4 lg:grid-rows-6 grid-flow-col 
        text-[12px] lg:text-[16px] lg:grid-rows-auto gap-x-4 lg:gap-x-0 lg:gap-y-2 pt-2 py-4'
        >
          {items.map((item, index) => (
            <li key={index}>
              <input
                type='checkbox'
                name={item.name}
                value={item.value}
                onChange={handleChange}
              />
              <label className='pl-2'>{item.value}</label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export const CollapseRadio = ({ items, buttonText }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleChange = (el) => {
    const temp = items.find((e) => e.value === el.target.value)
    temp.checked = !temp.checked
   };

  return (
    <div className='w-full h-auto bg-white px-6 rounded-[8px] py-2'>
      <button
        type='button'
        onClick={() => setIsOpen(!isOpen)}
        className='text-[#46464F]/[0.38] text-[12px] sm:text-[16px] lg:text-[20px] font-[600] w-full text-center lg:text-start
        hover:border-none active:border-none'
      >
        {buttonText}
      </button>
      {isOpen && (
        <ul
          className='grid grid-flow-col lg:grid-rows-auto lg:grid-flow-row
        text-[12px] lg:text-[16px] lg:grid-rows-auto gap-x-4 lg:gap-x-0 lg:gap-y-2 pt-2 py-4'
        >
          {items.map((item, index) => (
            <li key={index}>
              <input
                type='radio'
                name={item.name}
                value={item.value}
                onChange={handleChange}
              />
              <label className='pl-2'>{item.value}</label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
