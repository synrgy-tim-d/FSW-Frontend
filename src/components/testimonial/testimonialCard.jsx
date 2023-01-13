import React from 'react'

function TestimonialCard({move}) {
  return (
    <div className={`w-[500px] bg-slate-50 flex py-3 gap-5 px-5 rounded-3xl ${move}`}>
      <div className='w-full flex gap-4 min-w-[380px]'>
        <div className='w-fit flex justify-center items-center'>
            <div className='w-20 h-20 rounded-full bg-[#D9D9D9]'/>
        </div>
        <div className='flex flex-wrap items-start justify-start gap-0 font-montserrat'>
            <p className='w-full text-start text-lg font-semibold'>Nama Pemilik Kos</p>
            <p className='w-full text-start text-xs font-semibold text-slate-500'>Nama kos, Alamat kos</p>
            <p className='w-full text-justify text-xs pt-2'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce egestas bibendum fringilla.”</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard