import React, { useState } from 'react';

export const CollapseCheckbox = ({ items, buttonText }) => {
  const [isOpen, setIsOpen] = useState(true);
  // const toggle = () => setIsOpen(!isOpen);

  return (
    <div className='w-full'>
      <button onClick={() => setIsOpen(!isOpen)} className='text-[#000000] w-full text-start bg-white'>
        {buttonText}
      </button>
      {isOpen && (
        <ul className='grid grid-rows-6 grid-flow-col gap-y-2 pt-2'>
          {items.map((item, index) => (
            <li key={index}>
              <input
                type='checkbox'
                name={item.name}
                value={item.id}
                onChange={(el) => {
                  let temp = items.find((e) => e.id == el.target.value);
                  temp.checked = true
                }}
              />
              <label> {item.value}</label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export const CollapseRadio = ({ items, buttonText, className }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className='w-full'>
      <button
        onClick={toggle}
        className='text-[#000000] w-full text-start bg-white 
      hover:border-none active:border-none'
      >
        {buttonText}
      </button>
      {isOpen && (
        <ul className='grid grid-rows-auto gap-y-2 pt-2'>
          {items.map((item, index) => (
            <li key={index}>
              <input
                type='radio'
                name={item.name}
                value={item.id}
                onChange={(el) => {
                  let temp = items.find((e) => e.id == el.target.value);
                  temp.checked = true
                }}
              />
              <label>{" "}{item.value}</label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
