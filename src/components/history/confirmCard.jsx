import iconlocation from '../../assets/icon_location.svg';
import iconarrowright from '../../assets/icon_arrow-right-2.svg';
import iconpending from '../../assets/icon_pending.svg';

function ConfirmCard({
  image,
  kosName,
  locationName,
  bookingId,
  bookingStartDate,
  bookingEndDate,
  isPaid,
  willPay,
  isConfirmed,
  isCancelled,
  phoneNumber,
}) {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const dateStart = new Date(bookingStartDate);
  const dateEnd = new Date(bookingEndDate);

  if (isPaid && !isConfirmed) {
    return (
      <div>
        <div className='flex flex-row py-2 lg:py-4 text-black'>
          <img className='w-[130px] lg:w-[200px] self-center' alt='' src={image} />
          <div className='flex flex-col ml-[20px] lg:ml-[40px] text-left lg:w-[265px] space-y-[-5px] lg:space-y-0'>
            <h1 className='text-[14px] lg:text-[20px] font-[600]'>{kosName}</h1>
            <div className='flex flex-row'>
              <img className='w-[10px] lg:w-auto' alt='' src={iconlocation} />
              <p className='text-[12px] lg:text-[16px] font-[500] ml-1 lg:ml-2 lg:my-1'>
                {locationName}
              </p>
            </div>
            <p className='text-[12px] lg:text-[16px] font-[500] lg:mb-3'>Booking ID: {bookingId}</p>
            <div className='flex flex-row'>
              <div className='flex flex-col text-center'>
                <p className='text-[10px] lg:text-[12px] font-[400] lg:mb-1'>Check in</p>
                <p className='text-[10px] lg:text-[16px] font-[600] lg:font-[400]'>
                  {`${monthNames[dateStart.getMonth()]} ${dateStart.getDate()}`}
                </p>
              </div>
              <div className='flex flex-col mx-[10px] lg:mx-[12px] justify-center'>
                <img className='w-[16px] lg:w-auto' alt='' src={iconarrowright} />
              </div>
              <div className='flex flex-col text-center'>
                <p className='text-[10px] lg:text-[12px] font-[400] lg:mb-1'>Check out</p>
                <p className='text-[10px] lg:text-[16px] font-[600] lg:font-[400]'>
                  {`${monthNames[dateEnd.getMonth()]} ${dateEnd.getDate()}`}
                </p>
              </div>
            </div>
          </div>
          <div className='lg:flex flex-col flex-1 items-end hidden'>
            <a href={`https://wa.me/62${phoneNumber}`} rel='noreferrer' target='_blank'>
              <label
                htmlFor='my-modal'
                className='cursor-pointer inline-flex items-center justify-center px-5 h-[43px] mb-[65px] p-0 bg-white border-2 border-[#0A008A] rounded-[4px] outline-none text-[16px] font-[600] text-[#0A008A] hover:bg-[#f3f4ff] hover:border-[#0A008A] hover:text-[#0A008A] active:bg-[#0A008A] active:text-white'
              >
                Chat Pemilik Kos
              </label>
            </a>
            <div className='flex flex-row'>
              <img className='' alt='' src={iconpending} />
              <p className='text-[12px] font-[500] text-[#EA9A3D] ml-2 mb-[4px] mt-1'>
                Menunggu konfirmasi pembayaran
              </p>
            </div>
          </div>
        </div>
        {/* <div className='flex flex-1 lg:hidden'>{component}</div> */}
        <hr className='w-full mb-4 lg:mb-8'></hr>
      </div>
    );
  }
  return <></>;
}

ConfirmCard.defaultProps = {
  image: 'https://i.ibb.co/7bQQYkX/Rectangle-26.png',
  kosName: 'Kosan 1',
  locationName: 'Jl. Jalan',
  bookingId: '123456789',
  bookingStartDate: '12/12/2021',
  bookingEndDate: '12/12/2021',
  isPaid: true,
  willPay: false,
  isConfirmed: false,
  isCancelled: false,
};

// ConfirmCard.propTypes = {
//   image: PropTypes.string,
//   kosName: PropTypes.string,
//   locationName: PropTypes.string,
//   bookingId: PropTypes.string,
//   bookingStartDate: PropTypes.string,
//   bookingEndDate: PropTypes.string,
//   isPaid: PropTypes.bool,
//   willPay: PropTypes.bool,
//   isConfirmed: PropTypes.bool,
//   isCancelled: PropTypes.bool,
// };

export default ConfirmCard;
