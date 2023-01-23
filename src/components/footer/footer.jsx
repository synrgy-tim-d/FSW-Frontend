import { React } from 'react';
import LogoFacebook from '../../assets/icon_fb.png'
import LogoInstagram from '../../assets/icon_ig.png'
import LogoTwitter from '../../assets/icon_twitter.png'
import LogoLinkedin from '../../assets/icon_linkedin.png'
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
          <a href=""><img src={LogoFacebook} alt="" /></a>
          <a href=""><img src={LogoInstagram} alt="" /></a>
          <a href=""><img src={LogoTwitter} alt="" /></a>
          <a href=""><img src={LogoLinkedin} alt="" /></a>
        </div>
      </div>
      <div className='grid grid-flow-col'>
        <img className='h-32' src='src/assets/LogoNaqosFixWhite.png'></img>
      </div>
    </footer>
    );
  };

  export default Footer;
