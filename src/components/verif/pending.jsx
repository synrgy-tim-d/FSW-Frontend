import pendingEmail from "../../assets/VerifEmailPending.png"

function EmailPending() {
  return (
    <div className='w-full flex flex-wrap gap-5 justify-center '>
        <div className='w-full flex justify-center'>
            <img className='h-[276px]' src={pendingEmail} />  
        </div>  
        <h1 className='w-full text-center text-3xl font-semibold'>Cek email kamu</h1>
        <p className='w-1/2 mx-auto text-xl text-center font-semibold'>Link verifikasi akun telah kami kirimkan ke alamat email kamu, segera lakukan verifikasi untuk mendapat akses login</p>
    </div>
  )
}

export default EmailPending