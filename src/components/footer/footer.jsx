import { React } from 'react';
import LogoNaqosPolosWhite from '../../assets/LogoNaqosFixWhite.png'

const Footer = () => {
    return (
    <footer className='footer p-10 bg-[#0A008A] text-base-content'>
      <div>
        <span className='footer-title text-white'>Naqos</span>
        <a className='link link-hover text-white'>Tentang Kami</a>
        <a className='link link-hover text-white'>Blog Naqos</a>
        <a className='link link-hover text-white'>Pusat Bantuan</a>
        <a className='link link-hover text-white'>Kebijakan Privasi</a>
        <a className='link link-hover text-white'>Syarat & Ketentuan</a>
      </div>
      <div>
        <span className='footer-title text-white'>Hubungi Kami</span>
        <a className='text-white'>halo@naqos.com</a>
        <a className='text-white'>0812-3456-7891</a>
      </div>
      <div>
        <span className='footer-title text-white'>Ikuti Kami</span>
        <div className='grid grid-flow-col gap-4'>
          <a><img className='h-6' src='src/assets/icon_fb.png'></img></a>
          <a><img className='h-6' src='src/assets/icon_ig.png'></img></a>
          <a><img className='h-6' src='src/assets/icon_twitter.png'></img></a>
          <a><img className='h-6' src='src/assets/icon_linkedin.png'></img></a>
        </div>
      </div>
      <div className='grid grid-flow-col'>
        <img className='h-32' src={LogoNaqosPolosWhite}></img>
      </div>
    </footer>
    );
  };

  export default Footer;
