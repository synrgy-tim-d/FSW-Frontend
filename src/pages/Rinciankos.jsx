import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Detailkos from '../components/homepage/details-constants/Fasili/Detailkos';
import Contactperson from '../components/homepage/details-constants/Fasili/Contactperson';
import Faq from '../components/homepage/details-constants/Fasili/Faq';
import Fasilitaskamar from '../components/homepage/details-constants/Fasili/Fasilitaskamar';
import Fasilitasbersama from '../components/homepage/details-constants/Fasili/Fasilitasbersama';
import Peraturankos from '../components/homepage/details-constants/Fasili/Peraturankos';
import Deskripsikos from '../components/homepage/details-constants/Fasili/Deskripsikos';
import Review from '../components/homepage/details-constants/Fasili/Review';
import Formpemesanan from '../components/homepage/details-constants/Fasili/Formpemesanan';
import Navbarsign from '../components/navbar/navbarnologin';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import magnifier from '../assets/Banner2_Magnifier.png';
import { useQuery, useMutation } from '@tanstack/react-query';
import axios from 'axios';

const Rinciankos = () => {
  const [rentTime, setRentTime] = useState('HARIAN');
  const [dateInput, setDateInput] = useState('');
  const rentTimeHandler = (e) => {
    setRentTime(e.target.value);
  };
  const dateInputHandler = (e) => {
    setDateInput(e.target.value);
  };

  const kostId = useParams();
  const [search, setSearch] = useState();
  const navigate = useNavigate();

  const { isLoading, data, isSuccess } = useQuery({
    queryKey: ['kostDetail'],
    queryFn: async () =>
      await axios.get(
        `https://be-naqos.up.railway.app/api/public/kost?search=%5B%22${kostId.kosid}%22%5D&fields=%5B%22id%22%5D`,
      ),
  });

  const searchKost = useQuery({
    queryKey: ['searchKost'],
    queryFn: async () =>
      await axios.get(
        `https://be-naqos.up.railway.app/api/public/kost?start=0&limit=10&page=1&search=%5B%22${search}%22%5D&fields=%5B%22city.city%22%5D&filters=%5B%7B%22field%22%3A%22isAvailable%22%2C%22value%22%3A%22%22%2C%22op%22%3A%22in%22%2C%22valueIn%22%3A%5B%22true%22%5D%7D%5D`,
      ),
    enabled: false,
  });

  const reviewKost = useQuery({
    queryKey: ['testimoni'],
    queryFn: async () =>
      await axios.get(`https://be-naqos.up.railway.app/api/public/kost_review/${kostId.kosid}`),
  });

  useEffect(() => {
    searchKost.refetch();
  }, [search]);

  const handleClick = () => {
    searchKost.refetch();
    if (search === '' || search === ' ') {
      navigate(`/homepage`);
    } else {
      navigate(`/homepage?city=${search.replace(/\s/g, '%20')}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      searchKost.refetch();
      if (search === '' || search === ' ') {
        navigate(`/homepage`);
      } else {
        navigate(`/homepage?city=${search.replace(/\s/g, '%20')}`);
      }
    }
  };

  const postBooking = useMutation({
    mutationFn: async (data) => {
      await axios.post(`https://fsw-backend.up.railway.app/api/book`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('AUTH_TOKEN')}`,
        },
      });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const dateSecond = new Date(dateInput).getTime();
    let dateEnd;
    if (rentTime === 'HARIAN') {
      dateEnd = dateSecond + 86400000;
    } else if (rentTime === 'MINGGUAN') {
      dateEnd = dateSecond + 604800000;
    } else if (rentTime === 'BULANAN') {
      dateEnd = dateSecond + 2629746000;
    }
    const data = {
      kos_id: kostId.kosid,
      room_id: kostId.roomid,
      booking_date_start: dateInput,
      booking_date_end: new Date(dateEnd).toISOString().split('T')[0],
      rent_time: rentTime,
    };
    postBooking.mutate(data);
    navigate(`/history`);
  };

  if (!isLoading && isSuccess && searchKost.isSuccess) {
    const dataKost = data?.data?.data[0];
    const kostReviews = reviewKost?.data?.data?.data;

    return (
      <React.Fragment>
        {localStorage.getItem('AUTH_TOKEN') === null ? <Navbarsign /> : <Navbar />}
        <div className='w-full font-[Montserrat] font-[400] text-[#000000] text-[16px] p-8 bg-[#FAFAFA]'>
          <div className='flex space-x-4 px-4'>
            <div className='flex space-x-4 w-full border-2 bg-white rounded-[4px] py-3'>
              <img className='ml-4 pointer-events-none' src={magnifier} />
              <input
                className='w-full text-black text-[20px]'
                type='search'
                name='search'
                placeholder='Masukkan nama kota yang diinginkan'
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                onKeyDown={handleKeyDown}
              />
            </div>
            <button
              className='w- full bg-[#0A008A] px-10 text-white hover:bg-[#A0A3FF] hover:text-[#FFFFFF] active:bg-black font-[600] rounded-[4px]'
              type='submit'
              onClick={handleClick}
            >
              Cari
            </button>
          </div>
          <div className='breadcrumb p-4 py-8'>
            <ul>
              <li>
                <Link to='/' className='text-[24px] font-[600] hover:underline'>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/homepage' className='text-[24px] font-[600] hover:underline'>
                  Cari Kos
                </Link>
              </li>
              <li>
                <Link
                  to={`/kos/${kostId.kosid}/${kostId.roomid}`}
                  className='text-[24px] font-[600] hover:underline'
                >
                  {dataKost.name}
                </Link>
              </li>
            </ul>
          </div>
          <div className='grid grid-rows-auto grid-flow-row pb-12'>
            <div className='grid grid-cols-12 gap-6'>
              <div className='col-span-7'>
                <img className='w-full h-auto' src={dataKost.imageKosts[0]?.url} alt='' />
              </div>
              <div className='col-span-4 grid grid-rows-2 gap-6'>
                <div className=''>
                  <img
                    className='w-full h-auto'
                    src={dataKost.imageKosts[1]?.url ?? dataKost.imageKosts[0]?.url}
                    alt=''
                  />
                </div>
                <div className='grid grid-cols-2 grid-flow-col gap-6'>
                  <div>
                    <img
                      className='w-full h-auto'
                      src={dataKost.imageKosts[2]?.url ?? dataKost.imageKosts[0]?.url}
                      alt=''
                    />
                  </div>
                  <div>
                    <img
                      className='w-full h-auto bg-yellow-500'
                      src={dataKost.imageKosts[3]?.url ?? dataKost.imageKosts[0]?.url}
                      alt=''
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-3 pt-12 gap-8'>
              <div className='col-span-2 grid grid-rows-auto gap-y-6'>
                <Detailkos fetchData={dataKost} fetchReview={kostReviews} />
                <Contactperson fetchData={dataKost} />
                <Faq fetchData={dataKost} />
                <hr className='border-2' />
                <Fasilitaskamar fetchData={dataKost} />
                <hr className='border-2' />
                <Fasilitasbersama fetchData={dataKost} />
                <hr className='border-2' />
                <Peraturankos fetchData={dataKost} />
                <hr className='border-2' />
                <Deskripsikos fetchData={dataKost} />
                <hr className='border-2' />
                <Review fetchReview={kostReviews} />
                <hr className='border-2' />

                {/* Not Done Yet */}
                {/* <div>THIS PLACE WILL BE A CARROUSEL OF OTHER ROOM TYPES</div> */}
              </div>
              <div className='col-span-1 w-full px-20'>
                <Formpemesanan
                  dateOnChange={dateInputHandler}
                  totalPayment={
                    rentTime === 'HARIAN'
                      ? dataKost?.pricePerDaily
                      : rentTime === 'MINGGUAN'
                      ? dataKost?.pricePerWeekly
                      : rentTime === 'BULANAN'
                      ? dataKost?.pricePerMonthly
                      : 99999999
                  }
                  // totalPayment={100}
                  timeOnChange={rentTimeHandler}
                  dateDesc={
                    rentTime === 'HARIAN'
                      ? 'Hari'
                      : rentTime === 'MINGGUAN'
                      ? 'Minggu'
                      : rentTime === 'BULANAN'
                      ? 'Bulan'
                      : 99999999
                  }
                  submitOnClick={handleSubmit}
                  isLoading={postBooking.isLoading}
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
};

export default Rinciankos;
