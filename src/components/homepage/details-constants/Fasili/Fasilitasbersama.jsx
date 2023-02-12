import React, { useEffect, useState } from 'react';
import Dapur from '../../../../assets/Fasilitas-bersama/Kitchen.svg'
import Garasi from '../../../../assets/Fasilitas-bersama/Garage.svg'
import Laundry from '../../../../assets/Fasilitas-bersama/Laundry.svg'
import Kulkas from '../../../../assets/Fasilitas-bersama/Fridge.svg'
// import Dispenser from '../../../../assets/Fasilitas-bersama/Kitchen.svg'
import PenjagaKos from '../../../../assets/Fasilitas-bersama/Guard.svg'
// import MesinCuci from '../../../../assets/Fasilitas-bersama/Kitchen.svg'
import TV from '../../../../assets/Fasilitas-bersama/TV.svg'

const Fasilitasbersama = ({ fetchData }) => {
  const [Fasilitas, setFasilitas] = useState([]);
  useEffect(() => {
    const FacilityList = [
      {
        id: 1,
        text: 'Dapur',
        image: Dapur,
      },
      {
        id: 2,
        text: 'Garasi',
        image: Garasi,
      },
      {
        id: 3,
        text: 'Laundry',
        image: Laundry,
      },
      {
        id: 4,
        text: 'Kulkas',
        image: Kulkas,
      },
      {
        id: 5,
        text: 'Dispenser',
        image: Laundry,
      },
      {
        id: 6,
        text: 'Penjaga Kos',
        image: PenjagaKos,
      },
      {
        id: 7,
        text: 'Mesin Cuci',
        image: Laundry,
      },
      {
        id: 8,
        text: 'TV',
        image: TV,
      },
    ];
    setFasilitas(FacilityList)
  }, []);

  return (
    <div className='grid gap-4 text-[Montserrat] text-[20px]'>
      <p className='font-[700]'>Fasilitas Bersama</p>
      <div className='grid grid-rows-4 grid-flow-col auto-cols-max gap-8 gap-x-6'>
        {fetchData?.facilities?.map((facility) => {
          const facilityName = [].concat(facility?.name)
          const fasilitasBersama = Fasilitas.filter(fasilitas => facilityName.includes(fasilitas?.text));
          return (
            <React.Fragment key={facility?.id}>
              <div className='grid grid-cols-5 grid-flow-col gap-2'>
                {fasilitasBersama?.map((roomFacility) => {
                  return (
                    <React.Fragment key={roomFacility?.id}>
                      <span className='self-center'>
                        <img className='rounded-full bg-[#FFDCBD] h-6 w-6' src={roomFacility?.image} alt='' />
                      </span>
                      <span className='col-span-4 self-center justify-self-start'>
                        <p>{roomFacility?.text}</p>
                      </span>
                  </React.Fragment>
                  );
                })}
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Fasilitasbersama;
