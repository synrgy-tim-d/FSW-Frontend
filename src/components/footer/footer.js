import { React } from 'react';

const Footer = () => {
    return (
      <footer className="absolute top-[736px] left-[0px] w-[1440px] h-[329px] text-left text-base text-black font-montserrat">
        <img
          className="absolute top-[0px] left-[0px] w-[1440px] h-[329px]"
          alt=""
          src="../rectangle-2.svg"
        />
        <img
          className="absolute top-[84px] left-[586px] w-6 h-6 overflow-hidden"
          alt=""
          src="../instagramvuvietduccom.svg"
        />
        <img
          className="absolute top-[84px] left-[553px] w-6 h-6"
          alt=""
          src="../facebookvuvietduccom.svg"
        />
        <img
          className="absolute top-[84px] left-[652px] w-6 h-6"
          alt=""
          src="../linkedinvuvietduccom.svg"
        />
        <img
          className="absolute top-[84px] left-[619px] w-6 h-6"
          alt=""
          src="../twittervuvietduccom.svg"
        />
        <img
          className="absolute top-[57px] left-[1093px] w-[277px] h-[126px] object-cover"
          alt=""
          src="../logo-naqos-fix-2-11@2x.png"
        />
        <div className="absolute top-[84px] left-[102px] text-sm leading-[24px] inline-block w-[142px] h-[135px]">
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            Tentang kami
          </p>
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            Blog Naqos
          </p>
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            Pusat Bantuan
          </p>
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            Kebijakan Privasi
          </p>
          <p className="[margin-block-start:0] [margin-block-end:0px]">{`Syarat & Ketentuan`}</p>
        </div>
        <div className="absolute top-[60px] left-[99px] leading-[120%] font-semibold flex items-center w-[58px]">
          Naqos
        </div>
        <div className="absolute top-[84px] left-[294px] text-sm leading-[24px] inline-block w-[171px] h-[76px]">
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            halo@naqos.com
          </p>
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            0812-3456-7891
          </p>
        </div>
        <div className="absolute top-[60px] left-[290px] leading-[120%] font-semibold flex items-center w-[130px]">
          Hubungi Kami
        </div>
        <div className="absolute top-[60px] left-[553px] leading-[120%] font-semibold flex items-center w-[130px]">
          Ikuti Kami
        </div>
      </footer>
    );
  };
  
  export default Footer;
  