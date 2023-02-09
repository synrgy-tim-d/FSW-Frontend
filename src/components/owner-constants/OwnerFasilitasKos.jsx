import React, { useState } from 'react';
import kosimg from '../../assets/city-card.svg';

const fasilitasBersama = ["Ruang Tamu", "Dispenser", "Mesin Cuci", "Penjaga Kos", "Dapur", "Kulkas", "TV", "Garasi", "Laundry"]
const peraturanKos = ["Tamu yang menginap harus membayar", "Barang elektronik tertentu dikenakan biaya", "Dapat diisi maksimal 2 orang/kamar", "Dapat diisi maksimal >2 orang/kamar", "Harga termasuk listrik", "Tidak untuk pasutri", "Tidak boleh melewati jam malam", "Tidak boleh membawa hewan", "Tamu dilarang menginap", "Dilarang merokok diarea kos"]
function OwnerFasilitasKos() {
    const [fasilitasBersamaCheckedState, setFasilitasBersamaCheckedState] = useState(
        new Array(fasilitasBersama.length).fill(false)
    )

    const fasilitasBersamaOnChangeHandler = (position) => {
        const updatedCheckedState = fasilitasBersamaCheckedState.map((item, index) =>
          index === position ? !item : item
        );
        console.log(updatedCheckedState)
        setFasilitasBersamaCheckedState(updatedCheckedState);
    }

    const [peraturanKosCheckedState, setPeraturanKosCheckedState] = useState(
        new Array(peraturanKos.length).fill(false)
    )
        
    const peraturanKosOnChangeHandler = (position) => {
        const updatedCheckedState = peraturanKosCheckedState.map((item, index) =>
          index === position ? !item : item
        );
        console.log(updatedCheckedState)
        setPeraturanKosCheckedState(updatedCheckedState);
    }
    return (
      <React.Fragment>
        <div className='grid grid-cols-5 text-[16px] font-[400] font-montserrat'>
          <div className='col-span-1 bg-[#0A008A] h-full'></div>
  
          <div className='col-span-4 flex justify-center'>
            <div className='w-11/12 grid grid-flow-row py-10 gap-y-6'>
              <div className='pb-20'>
                <p className='font-[700] text-[38px]'>Tentang Kos</p>
                <p className='text-[20px] w-3/5'>
                Silahkan centang dan isi hal-hal yang sesuai dengan kos
                </p>
              </div>
  
              <div className='grid grid-flow-row gap-y-10'>
                <div className='grid grid-flow-row gap-y-3'>
                  <p className='font-[600]'>Fasilitas Bersama</p>
                  <p>Fasilitas umum yang dapat digunakan oleh seluruh penyewa</p>
                  <ul className='grid grid-flow-row gap-y-3'>
                    {fasilitasBersama.map((name,index) => {
                        return (
                            <li className='flex items-center' key={index}>
                              <input type='checkbox' className='w-5 h-5 ' name={name} value={name} checked={fasilitasBersamaCheckedState[index]} onChange={() => fasilitasBersamaOnChangeHandler(index)}></input>
                              <label className='font-[500] ml-2'>{name}</label>
                            </li>)
                    })}
                  </ul>
                </div>
                <div className='grid grid-flow-row gap-y-3'>
                  <p className='font-[600]'>Peraturan Kos</p>
                  <p>Pilih aturan kos yang sesuai (opsional)</p>
                  <ul className='grid grid-flow-row gap-y-3'>
                    {peraturanKos.map((name,index) => {
                        return (
                            <li className='flex items-center' key={index}>
                              <input type='checkbox' className='w-5 h-5 ' name={name} value={name} checked={peraturanKosCheckedState[index]} onChange={() => peraturanKosOnChangeHandler(index)}></input>
                              <label className='font-[500] ml-2'>{name}</label>
                            </li>)
                    })}
                  </ul>
                </div>
                <div className='grid grid-flow-row gap-y-3'>
                  <p className='font-[600]'>Deskripsi Kos</p>
                  <p>Ceritakan hal menarik tentang kos</p>
                  <textarea className="textarea border-2 rounded-lg border-[#D9D9D9] w-full h-[180px]" placeholder="Tulis hal-hal menarik dari kos, jabarkan pula peraturan rinci kos (bila ada)"></textarea>
                </div>
                <div className='grid grid-flow-row gap-y-3'>
                  <p className='font-[600]'>Pertanyaan yang Sering diajukan Penyewa</p>
                  <p>Ketik pertanyaan yang sering diajukan penyewa beserta jawabannya (opsional)</p>
                  <textarea className="textarea border-2 rounded-lg border-[#D9D9D9] w-full h-[180px]" placeholder="Tuliskan pertanyaan yang sering diajukan"></textarea>
                  <textarea className="textarea border-2 rounded-lg border-[#D9D9D9] w-full h-[180px]" placeholder="Tuliskan jawaban dari pertanyaan diatas"></textarea>
                </div>
                <div className='grid grid-flow-row gap-y-3'>
                  <p className='font-[600]'>Pertanyaan Lain yang Sering diajukan Penyewa</p>
                  <p>Ketik pertanyaan yang sering diajukan penyewa beserta jawabannya (opsional)</p>
                  <textarea className="textarea border-2 rounded-lg border-[#D9D9D9] w-full h-[180px]" placeholder="Tuliskan pertanyaan yang sering diajukan"></textarea>
                  <textarea className="textarea border-2 rounded-lg border-[#D9D9D9] w-full h-[180px]" placeholder="Tuliskan jawaban dari pertanyaan diatas"></textarea>
                </div>
              </div>
  
              <div className='grid grid-flow-col place-content-between pt-24'>
                <button
                  className='border-2 border-[#0A008A] text=[#0A008A] bg-white font-[600] p-2 px-3'
                  type='button'
                >
                  Kembali
                </button>
                <div className='grid grid-flow-col'>
                  <button
                    className='border-2 border-[#0A008A] bg-[#0A008A] text-white font-[600] p-2 px-3'
                    type='button'
                  >
                    Simpan & Lanjut
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
}

export default OwnerFasilitasKos