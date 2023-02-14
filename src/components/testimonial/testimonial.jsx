import { useQuery } from '@tanstack/react-query';
import TestimonialCard from './testimonialCard';
import 'swiper/css';
import axios from 'axios';

const Testimonial = () => {
  const { isLoading, data } = useQuery({
    queryKey: ['testimoni'],
    queryFn: async () =>
      await axios.get(`https://be-naqos.up.railway.app/api/public/kost_review/bec580b2-fc3a-479c-a00b-c71afe6c171c`)
  });

  const kostDetail = useQuery({
    queryKey: ['kostDetail'],
    queryFn: async () =>
      await axios.get(`https://be-naqos.up.railway.app/api/public/kost?search=%5B%22bec580b2-fc3a-479c-a00b-c71afe6c171c%22%5D&fields=%5B%22id%22%5D`)
  });
  
  if (!isLoading && !kostDetail.isLoading){
    const testimoniers = data?.data?.data;
    const dataKos = kostDetail?.data?.data?.data;
    if (testimoniers.length > 0 && dataKos.length > 0) {
      const testimoniersOne = [];
      for (let i = 0; i < testimoniers.length; i++) {
        testimoniersOne.push(
          <TestimonialCard
            key={testimoniers[i].id}
            name={testimoniers[i].userId.fullname}
            testimonial={testimoniers[i].reviewText}
            pictureUrl={testimoniers[i].userId.imgUrl}
            kosAddress={dataKos[0]?.city.city}
            kosName={dataKos[0]?.name}
          />,
        );
      }

      const testimoniersTwo = [];
      for (let i = 0; i < testimoniers.length; i++) {
        testimoniersTwo.push(
          <TestimonialCard
          key={testimoniers[i].id}
          name={testimoniers[i].userId.fullname}
          testimonial={testimoniers[i].reviewText}
          pictureUrl={testimoniers[i].userId.imgUrl}
          kosAddress={dataKos[0]?.city.city}
          kosName={dataKos[0]?.name}
          />,
        );
      }

      return (
        <div className='w-full lg:flex flex-wrap justify-center gap-5 overflow-hidden hidden bg-[#0A008A] py-6'>
          <div className='w-[120%] flex gap-6'>{testimoniersOne}</div>
          <div className='w-[180%] flex gap-6'>{testimoniersTwo}</div>
        </div>
      );
    }
  }
}

export default Testimonial;
