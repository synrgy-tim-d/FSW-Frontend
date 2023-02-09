import { React } from 'react';
import LogoFacebook from '../../assets/icon_fb.png';
import LogoInstagram from '../../assets/icon_ig.png';
import LogoTwitter from '../../assets/icon_twitter.png';
import LogoLinkedin from '../../assets/icon_linkedin.png';
import LogoNaqosPolosWhite from '../../assets/LogoNaqosFixWhite.png';

const Footer = () => {
  return (
    // <footer className='w-full footer p-10 bg-[#0A008A] text-base-content'>
    //   <div>
    //     <span className='footer-title text-white'>Naqos</span>
    //     <a className='link link-hover text-white'>Tentang Kami</a>
    //     <a className='link link-hover text-white'>Blog Naqos</a>
    //     <a className='link link-hover text-white'>Pusat Bantuan</a>
    //     <a className='link link-hover text-white'>Kebijakan Privasi</a>
    //     <a className='link link-hover text-white'>Syarat & Ketentuan</a>
    //   </div>
    //   <div>
    //     <span className='footer-title text-white'>Hubungi Kami</span>
    //     <a className='text-white'>halo@naqos.com</a>
    //     <a className='text-white'>0812-3456-7891</a>
    //   </div>
    //   <div>
    //     <span className='footer-title text-white'>Ikuti Kami</span>
    //     <div className='grid grid-flow-col gap-4'>
    //       <a href=""><img className='h-6' src={LogoFacebook} alt="" /></a>
    //       <a href=""><img className='h-6' src={LogoInstagram} alt="" /></a>
    //       <a href=""><img className='h-6' src={LogoTwitter} alt="" /></a>
    //       <a href=""><img className='h-6' src={LogoLinkedin} alt="" /></a>
    //     </div>
    //   </div>
    //   <div className='grid grid-flow-col'>
    //     <img className='h-32' src={LogoNaqosPolosWhite}></img>
    //   </div>
    // </footer>
    <footer className='w-full p-10 bg-[#0A008A] text-[14px] md:text-[16px] font-[Montserrat] text-white grid grid-col-span-2 md:grid-col-span-3 grid-flow-row md:grid-flow-col gap-4'>
      <div className='col-span-1 grid grid-flow-row auto-rows-max gap-2'>
        <p className='font-[600] text-[20px] pb-2'>Naqos</p>
        <a href=''>Tentang Kami</a>
        <a href=''>Bloq Naqos</a>
        <a href=''>Pusat Bantuan</a>
        <a href=''>Kebijakan Privasi</a>
        <a href=''>Syarat & Ketentuan</a>
      </div>
      <div className='col-span-1 grid grid-flow-row md:grid-flow-col gap-4'>
        <div className='col-span-1 grid grid-flow-row auto-rows-max gap-2'>
          <p className='font-[600] text-[20px] pb-2'>Hubungi Kami</p>
          <a href=''>halo@naqos.com</a>
          <a href=''>0812-3456-7891</a>
        </div>
        <div className='col-span-1 grid auto-rows-max gap-2'>
          <p className='font-[600] text-[20px] pb-2'>Ikuti Kami</p>
          <div className='flex space-x-4'>
            <a href=''>
              <img className='w-[20px]' src={LogoFacebook} alt='NaqosFacebook' />
            </a>
            <a href=''>
              <img className='w-[20px]' src={LogoInstagram} alt='NaqosInstagram' />
            </a>
            <a href=''>
              <img className='w-[20px]' src={LogoTwitter} alt='NaqosTwitter' />
            </a>
            <a href=''>
              <img className='w-[20px]' src={LogoLinkedin} alt='NaqosLinkedIn' />
            </a>
          </div>
        </div>
      </div>
      <div className='col-span-2 md:col-span-1 justify-self-center'>
        <img className='w-[350px] md:w-[250px]' src={LogoNaqosPolosWhite} alt='' />
      </div>
    </footer>
  );
};

export default Footer;
