import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/Banner1.png';

const Kos = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className='w-screen font-[Montserrat] font-[400] text-[#000000] text-[16px] p-8'>
        <div className='breadcrumb pl-[62px] py-[17px]'>
          <ul>
            <li>
              <Link to='/' className='text-[20px] font-[600] hover:underline'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/homepage' className='text-[20px] font-[600] hover:underline'>
                Cari Kos
              </Link>
            </li>
            <li>
              <Link to='/kos' className='text-[20px] font-[600] hover:underline'>
                Kos Alamanda
              </Link>
            </li>
          </ul>
        </div>

        <div className='grid grid-rows-auto grid-flow-row'>
          <div className='grid grid-cols-3 gap-4'>
            <div className='col-span-2 gap-4 bg-green-500'>
              <img className='w-full h-auto' src={image} alt='' />
            </div>
            <div className='col-span-1 grid grid-rows-2 gap-4'>
              <div className='bg-blue-500'>
                <img className='w-full h-auto' src={image} alt='' />
              </div>
              <div className='grid grid-cols-2 grid-flow-col gap-4 bg-yellow-500'>
                <div>
                  <img className='w-full h-auto' src={image} alt='' />
                </div>
                <div>
                  <img className='w-full h-auto' src={image} alt='' />
                </div>
              </div>
            </div>
          </div>

          <div className='grid grid-cols-3 pt-12 gap-8'>
            <div className='col-span-2 grid grid-rows-auto gap-y-8'>
              <div className='grid gap-4'>
                <p className='flex text-[39px] font-[700]'>
                  Kos Alamanda
                  <span className='ml-4 p-1 px-3 border-2 border-[#0A008A] rounded-[70px] text-[16px] font-[600]'>
                    Campuran
                  </span>
                </p>
                <p className='text-[39px] font-[700] self-center'>Tipe Kamar Reguler Yogyakarta</p>
                <p className='text-[20px]'>
                  Rincian alamat kos secara lengkap dan kode pos Rincian alamat kos secara lengkap
                  dan kode pos
                </p>
                <div className='grid grid-flow-col gap-4'>
                  <div className='grid grid-flow-col auto-cols-max gap-2 content-center'>
                    <span className='self-center'>
                      <svg
                        width='12'
                        height='12'
                        viewBox='0 0 12 12'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M5.23196 0.582073C5.47408 -0.194024 6.52571 -0.194024 6.76703 0.582073L7.63061 3.35614C7.68337 3.52508 7.78593 3.67229 7.92363 3.77672C8.06134 3.88114 8.22714 3.93745 8.39733 3.93758H11.1914C11.9735 3.93758 12.298 4.98249 11.666 5.46281L9.40618 7.1768C9.2682 7.28131 9.16545 7.42876 9.11268 7.59801C9.0599 7.76725 9.05981 7.9496 9.11241 8.1189L9.97598 10.893C10.2181 11.6691 9.36664 12.3154 8.73308 11.8351L6.47325 10.1211C6.33541 10.0166 6.16943 9.96032 5.99909 9.96032C5.82875 9.96032 5.66277 10.0166 5.52493 10.1211L3.2651 11.8351C2.63235 12.3154 1.78169 11.6691 2.023 10.893L2.88658 8.1189C2.93918 7.9496 2.93909 7.76725 2.88631 7.59801C2.83354 7.42876 2.73079 7.28131 2.5928 7.1768L0.333783 5.46365C-0.298162 4.98333 0.0270921 3.93842 0.808347 3.93842H3.60166C3.77199 3.93847 3.93797 3.88225 4.07583 3.77781C4.2137 3.67337 4.31639 3.52606 4.36919 3.35698L5.23196 0.582073Z'
                          fill='#FFBA2C'
                        />
                      </svg>
                    </span>
                    <span>4.5</span>
                    <span>(7 reviews)</span>
                    <span className='self-center'>
                      <svg
                        width='12'
                        height='15'
                        viewBox='0 0 12 15'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fill-rule='evenodd'
                          clip-rule='evenodd'
                          d='M1.75747 2.01515C2.88267 0.889947 4.40878 0.257813 6.00006 0.257812C7.59135 0.257813 9.11745 0.889947 10.2427 2.01515C11.3679 3.14036 12 4.66647 12 6.25775C12 7.84903 11.3679 9.37514 10.2427 10.5003L6.00006 14.7429L1.75747 10.5003C1.20029 9.94322 0.758301 9.2818 0.456753 8.55385C0.155205 7.8259 0 7.04568 0 6.25775C0 5.46981 0.155205 4.6896 0.456753 3.96165C0.758301 3.2337 1.20029 2.57228 1.75747 2.01515ZM6.00006 7.97193C6.45469 7.97193 6.8907 7.79133 7.21217 7.46986C7.53364 7.14839 7.71424 6.71238 7.71424 6.25775C7.71424 5.80312 7.53364 5.36711 7.21217 5.04564C6.8907 4.72417 6.45469 4.54357 6.00006 4.54357C5.54543 4.54357 5.10943 4.72417 4.78796 5.04564C4.46648 5.36711 4.28588 5.80312 4.28588 6.25775C4.28588 6.71238 4.46648 7.14839 4.78796 7.46986C5.10943 7.79133 5.54543 7.97193 6.00006 7.97193Z'
                          fill='#0A008A'
                        />
                      </svg>
                    </span>
                    <span>Yogyakarta</span>
                  </div>
                  <div className='grid grid-flow-col auto-cols-max gap-4 justify-end'>
                    <div className='grid grid-flow-col gap-2 border-2 border-[#0A008A] radius-[4px] text-[#0A008A] font-[600] p-2'>
                      <span>
                        <svg
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M21 8.25C21 5.76472 18.9013 3.75 16.3125 3.75C14.3769 3.75 12.7153 4.87628 12 6.48342C11.2847 4.87628 9.62312 3.75 7.6875 3.75C5.09867 3.75 3 5.76472 3 8.25C3 15.4706 12 20.25 12 20.25C12 20.25 21 15.4706 21 8.25Z'
                            stroke='#0A008A'
                            stroke-width='1.5'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                        </svg>
                      </span>
                      Simpan
                    </div>
                    <div className='grid grid-flow-col gap-2 border-2 border-[#0A008A] radius-[4px] text-[#0A008A] font-[600] p-2'>
                      <span>
                        <svg
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M7.21721 10.9071C6.83295 10.2169 6.096 9.75 5.25 9.75C4.00736 9.75 3 10.7574 3 12C3 13.2426 4.00736 14.25 5.25 14.25C6.096 14.25 6.83295 13.7831 7.21721 13.0929M7.21721 10.9071C7.39737 11.2307 7.5 11.6034 7.5 12C7.5 12.3966 7.39737 12.7693 7.21721 13.0929M7.21721 10.9071L16.7828 5.5929M7.21721 13.0929L16.7828 18.4071M16.7828 18.4071C16.6026 18.7307 16.5 19.1034 16.5 19.5C16.5 20.7426 17.5074 21.75 18.75 21.75C19.9926 21.75 21 20.7426 21 19.5C21 18.2574 19.9926 17.25 18.75 17.25C17.904 17.25 17.1671 17.7169 16.7828 18.4071ZM16.7828 5.5929C17.1671 6.28309 17.904 6.75 18.75 6.75C19.9926 6.75 21 5.74264 21 4.5C21 3.25736 19.9926 2.25 18.75 2.25C17.5074 2.25 16.5 3.25736 16.5 4.5C16.5 4.89664 16.6026 5.26931 16.7828 5.5929Z'
                            stroke='#0A008A'
                            stroke-width='1.5'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                        </svg>
                      </span>
                      Bagikan
                    </div>
                  </div>
                </div>
              </div>

              <div className='grid grid-cols-5 auto-cols-max'>
                <div className='grid col-span-1 place-content-center'>
                  <img className='w-[150px] h-[150px] rounded-full' src={image} alt='' />
                </div>
                <div className='col-span-4 grid grid-rows-auto auto-rows-max gap-2 content-center'>
                  <p className='text-[20px] font-[600]'>Risma</p>
                  <p className='tect-[12px]'>Pemilik Kos Alamanda</p>
                  <div>
                    <span>telephoneimg</span>
                    0812-3456-7891
                  </div>
                </div>
              </div>

              {/* Accordion */}
              <div className='grid grid-rows-auto gap-6 pb-12'>
                <div className='relative'>
                  <button className='block p-2 text-left w-full text-[#B9B9BC] font-[700]' onClick={() => setIsOpen(!isOpen)}>
                    Dropdown
                  </button>
                  {isOpen && (
                    <div className='absolute left-0 mt-2 py-2 w-full bg-white'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quasi
                      numquam sed iusto itaque, error distinctio nesciunt temporibus cupiditate
                      laborum beatae rem aperiam labore impedit, in perspiciatis ratione nulla
                      recusandae!
                    </div>
                  )}
                </div>
              </div>
              
              {/* Fasil Kamar */}
              <div className='grid gap-4'>
                <p>Fasilitas Kamar</p>
                <div className='grid grid-rows-4 grid-flow-col gap-4'>
                  <div>Wifi</div>
                  <div>KM Dalam</div>
                  <div>Air Panas</div>
                  <div>Lemari</div>
                  <div>Kasur</div>
                  <div>Kursi</div>
                  <div>AC</div>
                  <div>TV</div>
                  <div>Listrik</div>
                  <div>Meja</div>
                  <div>Kipas Angin</div>
                </div>
              </div>
              
              {/* Fasil Bersama */}
              <div className='grid gap-4'>
                <p className='text-[20px] font-[700]'>Fasilitas Bersama</p>
                <div className='grid grid-rows-4 grid-flow-col gap-4'>
                  <div>Dapur</div>
                  <div>Garasi</div>
                  <div>Laundry</div>
                  <div>Kulkas</div>
                  <div>Dispenser</div>
                  <div>Penjaga Kos</div>
                  <div>Mesin Cuci</div>
                  <div>TV</div>
                </div>
              </div>

              <div className='grid gap-4'>
                <p className='text-[20px] font-[700]'>Peraturan Kos</p>
                <div className='grid grid-cols-2 grid-flow-row gap-4'>
                  <div>Tamu yang menginap harus membayar</div>
                  <div>Tidak untuk pasutri</div>
                  <div>Barang Elektronik tertentu dikenakan biaya</div>
                  <div>Tidak boleh melewati jam malam</div>
                </div>
              </div>

              <div className='grid grid-rows-auto gap-4'>
                <p className='text-[20px] font-[700]'>Deskripsi Kos</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint vel, quod vitae
                  eligendi sed sapiente reprehenderit eius voluptatibus tempora reiciendis ullam?
                  Expedita aperiam eos sed, quasi ipsum hic numquam quod.
                </p>
                <button className='w-full text-[20px] font-[700] text-[#000000]/[0.38]'>
                  Selengkapnya
                </button>
              </div>

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
                    <span className='font-[600]'>4.5</span>
                    <span className='italic'>(7 reviews)</span>
                  </div>
                  <div className='flex justify-end'>
                    <button className='bg-[#FFFFFF] border-2 text-[#0A008A] border-[#0A008A] font-[700]'>
                      Tulis Review
                    </button>
                  </div>
                </div>

                <div className='grid grid-cols-7'>
                  <div className='col-span-1'>
                    <img className='rounded-full w-[70px] h-[70px]' src={image} alt='' />
                  </div>
                  <div className='col-span-6 grid grid-rows-auto gap-2'>
                    <p className='text-[25px] font-[600]'>Hihang Hoheng</p>
                    <p className='text-[#627154] text-[16px]'>2 bulan yang lalu</p>
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
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium numquam
                      voluptate officia rerum in fuga suscipit dolorum natus, ipsum aliquam itaque
                      esse, quos mollitia nobis facere quas sit expedita accusamus.
                    </p>
                  </div>
                </div>

                <div>
                  <button>Selengkapnya</button>
                </div>
              </div>

              <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt odit porro dolor
                ullam ipsa doloremque illum omnis eaque, sed voluptate enim voluptatibus autem nulla
                perspiciatis praesentium dolore, minus, magni consequatur! Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Temporibus nihil eligendi fugiat repellendus?
                Praesentium assumenda deleniti ducimus id aliquid exercitationem quis incidunt
                labore repellat quas, dolorum sint impedit. Perspiciatis, vel.
              </div>
            </div>

            <div className='col-span-1'>
              <form action=''>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora beatae, ipsam quam
                ut culpa cumque facilis? Accusantium labore natus eligendi nulla non sit voluptate
                cupiditate autem voluptatum totam! Ea, ducimus. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Impedit rem error aut sint vel voluptates, quaerat
                placeat molestias amet deserunt officiis soluta! Quibusdam optio non ducimus aperiam
                voluptatem ratione magnam! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis corporis molestiae saepe quis velit? Odit autem excepturi quaerat
                repudiandae eius ex? Eveniet dolore doloribus voluptatibus error nulla placeat ipsum
                expedita! Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores in
                corporis cupiditate rerum minima optio esse tempore vel debitis, ipsam quam,
                perferendis aliquid at. Rerum voluptatum earum aspernatur voluptatem suscipit! Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Distinctio atque, sint, similique
                autem suscipit pariatur voluptatem in numquam, porro ut dolores vel. Reprehenderit
                adipisci iusto consequatur ipsum quibusdam soluta ipsam?
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Kos;
