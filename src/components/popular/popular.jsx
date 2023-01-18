import React from 'react';
const popularCities = [{
  id:0,
  name:"Jakarta",
  pictureUrl:"https://res.cloudinary.com/dqzqbgi8e/image/upload/v1673952075/naqos/cities/surabaya_ghbqjn.png"
},{
  id:1,
  name:"Jakarta",
  pictureUrl:"https://res.cloudinary.com/dqzqbgi8e/image/upload/v1673952075/naqos/cities/surabaya_ghbqjn.png"
},{
  id:2,
  name:"Jakarta",
  pictureUrl:"https://res.cloudinary.com/dqzqbgi8e/image/upload/v1673952075/naqos/cities/surabaya_ghbqjn.png"
},{
  id:3,
  name:"Jakarta",
  pictureUrl:"https://res.cloudinary.com/dqzqbgi8e/image/upload/v1673952075/naqos/cities/surabaya_ghbqjn.png"
},{
  id:4,
  name:"Jakarta",
  pictureUrl:"https://res.cloudinary.com/dqzqbgi8e/image/upload/v1673952075/naqos/cities/surabaya_ghbqjn.png"
},{
  id:5,
  name:"Jakarta",
  pictureUrl:"https://res.cloudinary.com/dqzqbgi8e/image/upload/v1673952075/naqos/cities/surabaya_ghbqjn.png"
},{
  id:6,
  name:"Jakarta",
  pictureUrl:"https://res.cloudinary.com/dqzqbgi8e/image/upload/v1673952075/naqos/cities/surabaya_ghbqjn.png"
},{
  id:7,
  name:"Jakarta",
  pictureUrl:"https://res.cloudinary.com/dqzqbgi8e/image/upload/v1673952075/naqos/cities/surabaya_ghbqjn.png"
},]
const Popular = () => {
  return (<div className='flex flex-wrap w-full py-10'>
    <div className='flex w-full'>
      <p className='text-2xl font-bold font-montserrat'>Kos Populer di Kota Besar</p>
    </div>
    <div className='w-full grid lg:grid-cols-4 lg:py-8 lg:gap-y-7 lg:gap-x-5 grid-cols-2 py-8 gap-y-7 gap-x-5'>
      {(() => {
        const frame = popularCities.map((e,i) => {
          return (<div className='w-full h-[221px] overflow-hidden rounded-lg flex items-start relative'>
            <img src={e.pictureUrl} className="w-full"/>
            <p className='absolute text-white font-montserrat font-bold text-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50'>{e.name}</p>
            <div className='w-full h-full bg-[#0A008A61] absolute opacity-700' />
          </div>)
        })
        return frame
      })()}
    </div>
  </div>);
};

export default Popular;
