import { CollapseCheckbox, CollapseRadio, CollapseCheckboxType } from './Collapse';
import { tipeKos, waktuSewa, urutanHarga, fasilitasKamar, fasilitasBersama } from './Dropdown';

const Facilities = () => {
  const title = ['Tipe Kos', 'Waktu Sewa', 'Urutkan', 'Fasilitas Kamar', 'Fasilitas Bersama'];

  const submitHandle = (e) => {
    e.preventDefault();
    const kostType = tipeKos.filter((el) => el.checked === true);
    const rentalTime = waktuSewa.filter((el) => el.checked === true);
    const price = urutanHarga.filter((el) => el.checked === true);
    const roomFacilities = fasilitasKamar.filter((el) => el.checked === true);
    const kostFacilities = fasilitasBersama.filter((el) => el.checked === true);
    console.log(kostType)
    console.log(rentalTime)
    console.log(price)
    console.log(roomFacilities)
    console.log(kostFacilities)
    if (kostType.length === 0) {
      console.log('tidak ada')
    }
  };

  return (
    <div className='content-start'>
      <div className='bg-white lg:bg-inherit rounded-[16px] lg:rounded-none grid lg:grid-cols-none grid-flow-row gap-0 lg:gap-4 lg:col-auto'>
        <CollapseCheckboxType items={tipeKos} buttonText={title[0]} />
        <CollapseRadio items={waktuSewa} buttonText={title[1]} />
        <CollapseRadio items={urutanHarga} buttonText={title[2]} />
        <CollapseCheckbox items={fasilitasKamar} buttonText={title[3]} />
        <CollapseCheckbox items={fasilitasBersama} buttonText={title[4]} />
      </div>
      <button
        onClick={submitHandle}
        className='w-full col-span-full py-2 rounded-[4px] mt-2
                  text-white bg-[#0A008A] hover:bg-[#A0A3FF] hover:text-[#FFFFFF] active:bg-black'
      >
        Terapkan Filter
      </button>
    </div>
  );
};

export default Facilities;
