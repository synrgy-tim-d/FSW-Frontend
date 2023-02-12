import icondownload from '../../assets/icon_download.svg';
import iconcompleted from '../../assets/icon_completed.svg';

function PaymentCard({ kosName, bookingId, paymentDate, price, payment_image_url }) {
  const date = new Date(paymentDate);
  const staticUrl = payment_image_url.slice(0, 49);
  const downUrl = payment_image_url.slice(49);
  return (
    <div>
      <div className='flex flex-row py-2 lg:py-4 text-black'>
        <div className='flex flex-col text-left'>
          <h1 className='lg:mb-1 text-[14px] lg:text-[20px] font-[600]'>
            {kosName} [Booking ID: {bookingId}]
          </h1>
          <p className='mb-2 text-[#4A4A4A] text-[12px] font-[400]'>{`${date.toDateString()} ${date.toLocaleTimeString()} WIB`}</p>
          <a
            href={`${staticUrl}/fl_attachment${downUrl}`}
            className='flex flex-row cursor-pointer'
            download={true}
          >
            <img className='w-[12px] lg:w-auto' alt='' src={icondownload} />
            <p className='ml-2 text-[#46464F] opacity-[.38] text-[12px] lg:text-[16px] font-[600]'>
              Download detail pembayaran
            </p>
          </a>
        </div>
        <div className='flex flex-col flex-1 lg:pt-[20px] text-right'>
          <h1 className='lg:mb-2 text-[14px] lg:text-[20px] font-[500]'>{`Rp. ${new Intl.NumberFormat(
            'en-DE',
          ).format(price)}`}</h1>
          <div className='flex flex-row justify-end gap-2'>
            <img className='w-[14px] lg:w-auto' alt='' src={iconcompleted} />
            <p className='text-[12px] font-[600] text-[#008A3F]'>Completed</p>
          </div>
        </div>
      </div>
      <hr className='mb-4 lg:mb-8'></hr>
    </div>
  );
}

export default PaymentCard;
