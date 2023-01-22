import verifEmailPending from "../../assets/VerifEmailPending.png"

function EmailPending() {
  return (
    <div className='w-full flex flex-wrap gap-5 justify-center '>
        <div className='w-full flex justify-center'>
            <img className='lg:h-[276px] h-[128px]' src={verifEmailPending} />  
        </div>  
        <h1 className='w-full text-center text-xl lg:text-3xl font-semibold'>Cek email kamu</h1>
        <p className='lg:w-1/2 w-[85%] mx-auto  lg:text-xl text-center font-semibold'>Link verifikasi akun telah kami kirimkan ke alamat email kamu, segera lakukan verifikasi untuk mendapat akses login</p>
    </div>
  )
}

export default EmailPending