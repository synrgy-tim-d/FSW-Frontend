import { React } from 'react';

const Footer = () => {
    return (
    <footer className='footer p-10 bg-base-200 text-base-content'>
      <div>
        <span className='footer-title'>Naqos</span>
        <a className='link link-hover'>Tentang Kami</a>
        <a className='link link-hover'>Blog Naqos</a>
        <a className='link link-hover'>Pusat Bantuan</a>
        <a className='link link-hover'>Kebijakan Privasi</a>
        <a className='link link-hover'>Syarat & Ketentuan</a>
      </div>
      <div>
        <span className='footer-title'>Hubungi Kami</span>
        <a>halo@naqos.com</a>
        <a>0812-3456-7891</a>
      </div>
      <div>
        <span className='footer-title'>Ikuti Kami</span>
      </div>
      <div>
        <img></img>
      </div>
    </footer>
    );
  };

  export default Footer;
