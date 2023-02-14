function CTA() {
  return (
    <div className='flex gap-4 py-6 flex-wrap justify-center bg-[#0A008A]'>
      <h1 className='w-full text-center font-main text-2xl text-[#FFBA2C] font-bold leading-relaxed tracking-wide lg:text-5xl'>
        +1000 pemilik kos
      </h1>
      <p className='w-full text-white font-main px-12 text-center text-sm lg:text-xl xl:px-40 xl:w-3/4'>
        Lebih dari seribu pemilik kos telah mendaftarkan kosnya! Daftarkan punyamu sekarang!
      </p>
      <div className='flex flex-wrap w-full justify-center'>
        <button className='btn rounded-full capitalize flex flex-wrap gap-2 font-main bg-[#FFBA2C] text-black hover:bg-[#422C00] hover:text-[#FFBA2C] btn-sm p-5 content-center'>
          <p>Daftarkan kos</p>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            className='bi bi-arrow-right'
            viewBox='0 0 16 16'
          >
            <path
              fillRule='evenodd'
              d='M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z'
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default CTA;
