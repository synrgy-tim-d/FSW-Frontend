import { useMutation } from '@tanstack/react-query';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import imglogo from '../../assets/LogoNaqosFix.png';
import iconeye from '../../assets/icon_eye-slash.svg';
import icongoogle from '../../assets/icon_google.svg';

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      role: 'PENYEWA',
    },
  });

  const postRegister = useMutation((data) => {
    return axios.post('https://be-naqos.up.railway.app/api/auth/register', data);
  });

  const navigate = useNavigate();

  const onSubmit = (e) => {
    postRegister.mutate(e);
    navigate('/verif');
  };

  return (
    <div className='px-[15px] font-[Montserrat] max-w-[1440px] w-screen'>
      <div className='flex flex-row justify-center'>
        <img
          className='md:mt-[70px] md:w-[360px] md:h-[163.72px] min-[393px]:mt-[27px] min-[393px]:w-[171px] min-[393px]:h-[78px]'
          alt=''
          src={imglogo}
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col justify-center mx-auto md:mt-[48px] md:w-[526px] min-[393px]:mt-[18px]'>
          <span className='md:mb-[11px] md:w-[209px] md:h-[24px] md:text-[20px] min-[393px]:text-[14px] min-[393px]:w-[175px] min-[393px]:mb-[14px] text-black text-left font-[600]'>
            Nama Lengkap
          </span>
          <input
            className='md:h-[55px] md:text-[20px] min-[393px]:h-[48px] min-[393px]:text-[12px] px-4 text-black font-[600] bg-white rounded-[526px] placeholder-[#b9b9bc] border-2 border-[#dadadc] focus:outline-none focus:border-[#0A008A]'
            type='text'
            name='fullname'
            placeholder='Ketikkan nama lengkapmu disini'
            {...register('fullname', {
              required: { value: true, message: 'Masukkan nama lengkap' },
            })}
            aria-invalid={errors.fullname ? 'true' : 'false'}
          />
          {errors.fullname && errors.fullname.type === 'required' && (
            <span className='text-red-500 text-sm'>{errors.fullname.message}</span>
          )}
          <span className='md:mt-[20px] md:mb-[11px] md:w-[209px] md:h-[24px] md:text-[20px] min-[393px]:text-[14px] min-[393px]:w-[175px] min-[393px]:mt-[14px] min-[393px]:mb-[14px] text-black text-left font-[600]'>
            Nomor Handphone
          </span>
          <input
            className=' md:h-[55px] md:text-[20px] min-[393px]:h-[48px] min-[393px]:text-[12px] px-4 text-black font-[600] bg-white rounded-[526px] placeholder-[#b9b9bc] border-2 border-[#dadadc] focus:outline-none focus:border-[#0A008A]'
            // type='number'
            name='phoneNumber'
            placeholder='Isi nomor handphone Whatsapp aktif'
            {...register('phoneNumber', {
              required: true,
              validate: (value) => Number(value) == value,
            })}
            aria-invalid={errors.phoneNumber ? 'true' : 'false'}
          />
          {errors.phoneNumber && errors.phoneNumber.type === 'validate' && (
            <span className='text-red-500 text-sm'>Nomor handphone harus berupa angka</span>
          )}
          {errors.phoneNumber && errors.phoneNumber.type === 'required' && (
            <span className='text-red-500 text-sm'>Nomor handphone harus diisi</span>
          )}
          <span className='md:mt-[20px] md:mb-[11px] md:w-[209px] md:h-[24px] md:text-[20px] min-[393px]:text-[14px] min-[393px]:w-[175px] min-[393px]:mt-[14px] min-[393px]:mb-[14px] text-black text-left font-[600]'>
            Email
          </span>
          <input
            className='md:h-[55px] md:text-[20px] min-[393px]:h-[48px] min-[393px]:text-[12px] px-4 text-black font-[600] bg-white rounded-[526px] placeholder-[#b9b9bc] border-2 border-[#dadadc] focus:outline-none focus:border-[#0A008A]'
            type='text'
            name='username'
            placeholder='Ketikkan alamat email'
            {...register('username', {
              required: { value: true, message: 'Masukkan email' },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Masukkan email yang valid',
              },
            })}
          />
          {errors.username && errors.username.type === 'required' && (
            <span className='text-red-500 text-sm'>{errors.username.message}</span>
          )}
          {errors.username && errors.username.type === 'pattern' && (
            <span className='text-red-500 text-sm'>{errors.username.message}</span>
          )}
          <span className='md:mt-[20px] md:mb-[11px] md:w-[209px] md:h-[24px] md:text-[20px] min-[393px]:text-[14px] min-[393px]:w-[175px] min-[393px]:mt-[14px] min-[393px]:mb-[14px] text-black text-left font-[600]'>
            Password
          </span>
          <input
            className='md:h-[55px] md:text-[20px] min-[393px]:h-[48px] min-[393px]:text-[12px] px-4 text-black font-[600] bg-white rounded-[526px] placeholder-[#b9b9bc] border-2 border-[#dadadc] focus:outline-none focus:border-[#0A008A]'
            type='password'
            name='password'
            placeholder='Minimal 6 karakter'
            {...register('password', {
              required: true,
              minLength: 6,
            })}
          />
          {errors.password && errors.password.type === 'required' && (
            <span className='text-red-500 text-sm'>Password harus diisi</span>
          )}
          {errors.password && errors.password.type === 'minLength' && (
            <span className='text-red-500 text-sm'>Password minimal 6 karakter</span>
          )}
          <img
            className='absolute pointer-events-none md:mt-[365px] md:ml-[480px] min-[393px]:mt-[340px] min-[393px]:ml-[330px]'
            src={iconeye}
          />
        </div>
        <div className='flex flex-row justify-center md:mt-[29px] min-[393px]:mt-[20px]'>
          {postRegister.isLoading ? (
            <button
              className='md:w-[481px] md:h-[43px] md:text-[16px] md:pt-2 min-[393px]:w-[362px] min-[393px]:h-[36px] min-[393px]:text-[14px] min-[393px]:pt-1 bg-[#0A008A] rounded-[150px] outline-none font-[600] text-white hover:bg-[#A0A3FF] hover:text-[#0A008A] focus:bg-[#000000] focus:text-white focus:outline-none disabled:bg-[#e8e8e9] disabled:text-[#ababaf]'
              type='submit'
              disabled={postRegister.isLoading}
            >
              Loading...
            </button>
          ) : (
            <button
              className='md:w-[481px] md:h-[43px] md:text-[16px] md:pt-2 min-[393px]:w-[362px] min-[393px]:h-[36px] min-[393px]:text-[14px] min-[393px]:pt-1 bg-[#0A008A] rounded-[150px] outline-none font-[600] text-white hover:bg-[#A0A3FF] hover:text-[#0A008A] focus:bg-[#000000] focus:text-white focus:outline-none disabled:bg-[#e8e8e9] disabled:text-[#ababaf]'
              type='submit'
            >
              Daftarkan akun
            </button>
          )}
        </div>
      </form>
      <div className='flex flex-row justify-center md:mt-[21px] min-[393px]:mt-[5px]'>
        <hr className='md:mt-3 md:w-[195px] min-[393px]:w-[160px] min-[393px]:mt-3 bg-[#999999] border-1 border-[#999999]' />
        <p className='md:text-[24px] min-[393px]:text-[12px] w-max mx-2 font-[600] text-[#999999]'>
          atau
        </p>
        <hr className='md:mt-3 md:w-[195px] min-[393px]:w-[160px] min-[393px]:mt-3 bg-[#999999] border-1 border-[#999999]' />
      </div>
      <div className='flex flex-row justify-center md:mt-[16px] min-[393px]:mt-[5px]'>
        <Link to='/login'>
          <button
            className='md:w-[481px] md:h-[44.96px] md:text-[16px] md:pt-2 min-[393px]:w-[362px] min-[393px]:h-[36px] min-[393px]:text-[14px] min-[393px]:pt-1 bg-white border-2 border-[#E9E9EA] outline-none rounded-[150px] font-[600] text-[#B9B9BC] hover:bg-[#E9E9EA] hover:text-white hover:border-[#E9E9EA] focus:border-[#0A008A] focus:bg-white focus:text-[#0A008A] focus:outline-none'
            type='submit'
          >
            Daftar dengan Google
          </button>
        </Link>
        <img
          className='absolute md:mt-3 md:mr-[230px] min-[393px]:mt-2 min-[393px]:mr-[200px]'
          src={icongoogle}
        />
      </div>
      <div className='flex flex-row justify-center md:mt-[16px] min-[393px]:mt-[20px] mb-[70px] gap-2'>
        <p className='md:text-[16px] min-[393px]:text-[14px] text-center text-black font-[600]'>
          Sudah punya akun?
        </p>
        <Link to='/login'>
          <p className='md:text-[16px] min-[393px]:text-[14px] text-center text-[#0A008A] font-[600]'>
            Masuk
          </p>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
