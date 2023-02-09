function TestimonialCard({name,testimonial,pictureUrl,kosAddress,kosName}) {
  return (
    <div className={`w-[500px] bg-slate-50 flex py-3 gap-5 px-5 rounded-3xl`}>
      <div className='w-full flex gap-5 min-w-[380px]'>
        <div className='w-fit flex justify-center items-center'>
            <div className='w-20 h-20 rounded-full bg-[#D9D9D9] overflow-hidden'>
              <img src={pictureUrl} />
            </div>
        </div>
        <div className='flex flex-wrap items-start justify-start gap-0 font-montserrat'>
            <p className='w-full text-start text-xl'>{name}</p>
            <p className='w-full text-start text-xs font-semibold text-slate-500'>{`${kosName}, ${kosAddress}`}</p>
            <p className='w-full text-justify text-xs pt-2'>{`“${testimonial}”`}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard