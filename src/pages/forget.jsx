import React from 'react';
import logo from '../assets/LogoNaqosFix.png';
import ForgetPending from '../components/forget/pending';
import ForgetForm from '../components/forget/form';
import ForgetSuccess from '../components/forget/success';
import { useParams } from 'react-router-dom';

function Forget() {
  const { otp } = useParams();

  return (
    <div className='flex flex-wrap w-full  lg:gap-28 gap-16 py-14'>
      <div className='w-full flex justify-center'>
        <img className='lg:w-[360px] w-[200px]' src={logo} alt='logo' />
      </div>
      {/* <ForgetPending /> or <ForgetSuccess /> or <ForgetPending /> */}
      <ForgetSuccess />
    </div>
  );
}

export default Forget;
