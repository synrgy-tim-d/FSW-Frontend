const Review = ({ fetchReview }) => {
  let totalRating = 0
  let waktuReview = '';

  const differenceTime = Math.floor(((new Date()) - (new Date(fetchReview[0]?.reviewDate.slice(0, 10))))/(1000 * 60 * 60 * 24));

  for (let i = 0; i < fetchReview.length; i++) {
    totalRating += fetchReview[i].rating;
  }
 
  const ratingAverage = totalRating/fetchReview.length;

  if (isNaN(differenceTime)) {
    waktuReview = 'Belum ada review';
  } else if(differenceTime === 0){
    waktuReview = 'Hari ini';
  } else if (differenceTime < 7) {
    waktuReview = `${differenceTime} hari yang lalu`;
  } else if (differenceTime < 30) {
    waktuReview = `${Math.floor(differenceTime/7)} minggu yang lalu`;
  } else if (differenceTime < 365) {
    waktuReview = `${Math.floor(differenceTime/30)} bulan yang lalu`;
  } else {
    waktuReview = `${Math.floor(differenceTime/365)} tahun yang lalu`;
  }

  return (
    <div className='grid grid-rows-auto grid-flow-row'>
      <div className='grid grid-flow-col content-center gap-2'>
        <div className='grid grid-flow-col auto-cols-max content-center gap-2'>
          <span className='self-center'>
            <svg
              width='12'
              height='12'
              viewBox='0 0 12 12'
              fill='#000000'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M5.23196 0.582073C5.47408 -0.194024 6.52571 -0.194024 6.76703 0.582073L7.63061 3.35614C7.68337 3.52508 7.78593 3.67229 7.92363 3.77672C8.06134 3.88114 8.22714 3.93745 8.39733 3.93758H11.1914C11.9735 3.93758 12.298 4.98249 11.666 5.46281L9.40618 7.1768C9.2682 7.28131 9.16545 7.42876 9.11268 7.59801C9.0599 7.76725 9.05981 7.9496 9.11241 8.1189L9.97598 10.893C10.2181 11.6691 9.36664 12.3154 8.73308 11.8351L6.47325 10.1211C6.33541 10.0166 6.16943 9.96032 5.99909 9.96032C5.82875 9.96032 5.66277 10.0166 5.52493 10.1211L3.2651 11.8351C2.63235 12.3154 1.78169 11.6691 2.023 10.893L2.88658 8.1189C2.93918 7.9496 2.93909 7.76725 2.88631 7.59801C2.83354 7.42876 2.73079 7.28131 2.5928 7.1768L0.333783 5.46365C-0.298162 4.98333 0.0270921 3.93842 0.808347 3.93842H3.60166C3.77199 3.93847 3.93797 3.88225 4.07583 3.77781C4.2137 3.67337 4.31639 3.52606 4.36919 3.35698L5.23196 0.582073Z'
                fill='#000000'
              />
            </svg>
          </span>
          <span className='font-[600]'>{isNaN(ratingAverage) ? 0 : ratingAverage}</span>
          <span className='italic'>({fetchReview.length} reviews)</span>
        </div>
        <div className='flex justify-end'>
          <button className='bg-[#FFFFFF] border-2 text-[#0A008A] border-[#0A008A] font-[700] p-2'>
            Tulis Review
          </button>
        </div>
      </div>

      <div className='grid grid-cols-7'>
        <div className='col-span-1'>
          <img className='rounded-full w-[70px] h-[70px]' src={fetchReview[0]?.userId?.imgUrl} alt='' />
        </div>
        <div className='col-span-6 grid grid-rows-auto gap-2'>
          <p className='text-[25px] font-[600]'>{fetchReview[0]?.userId?.fullname}</p>
          <p className='text-[#627154] text-[16px]'>{waktuReview}</p>
          <span>
            <svg
              width='12'
              height='12'
              viewBox='0 0 12 12'
              fill='#000000'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M5.23196 0.582073C5.47408 -0.194024 6.52571 -0.194024 6.76703 0.582073L7.63061 3.35614C7.68337 3.52508 7.78593 3.67229 7.92363 3.77672C8.06134 3.88114 8.22714 3.93745 8.39733 3.93758H11.1914C11.9735 3.93758 12.298 4.98249 11.666 5.46281L9.40618 7.1768C9.2682 7.28131 9.16545 7.42876 9.11268 7.59801C9.0599 7.76725 9.05981 7.9496 9.11241 8.1189L9.97598 10.893C10.2181 11.6691 9.36664 12.3154 8.73308 11.8351L6.47325 10.1211C6.33541 10.0166 6.16943 9.96032 5.99909 9.96032C5.82875 9.96032 5.66277 10.0166 5.52493 10.1211L3.2651 11.8351C2.63235 12.3154 1.78169 11.6691 2.023 10.893L2.88658 8.1189C2.93918 7.9496 2.93909 7.76725 2.88631 7.59801C2.83354 7.42876 2.73079 7.28131 2.5928 7.1768L0.333783 5.46365C-0.298162 4.98333 0.0270921 3.93842 0.808347 3.93842H3.60166C3.77199 3.93847 3.93797 3.88225 4.07583 3.77781C4.2137 3.67337 4.31639 3.52606 4.36919 3.35698L5.23196 0.582073Z'
                fill='#000000'
              />
            </svg>
          </span>
          <p className='text-[16px]'>
            {fetchReview[0]?.reviewText}
          </p>
        </div>
      </div>

      <div className='flex justify-center'>
        <button type='button' className='w-full text-[20px] font-[700] text-[#000000]/[0.38]'>
          Selengkapnya
        </button>
      </div>
    </div>
  );
};

export default Review;
