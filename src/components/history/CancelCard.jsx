import iconlocation from '../../assets/icon_location.svg';
import iconarrowright from '../../assets/icon_arrow-right-2.svg';
import iconcancel from '../../assets/icon_cancel.svg';

function CancelCard({
  image,
  kosName,
  locationName,
  bookingId,
  bookingStartDate,
  bookingEndDate,
  cancelDate,
  isPaid,
  willPay,
  isConfirmed,
  isCancelled,
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

  const dateCancel = new Date(cancelDate);

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
              <p className='text-[10px] lg:text-[16px] font-[600] lg:font-[400]'>{`${
                monthNames[dateStart.getMonth()]
              } ${dateStart.getDate()}`}</p>
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
        <div className='lg:flex flex-col flex-1 w-[150px] text-right hidden'>
          <p className='mt-[85px] text-[#4A4A4A] text-[12px] font-[400]'>{`${dateCancel.toDateString()}`}</p>
          <div className='flex flex-row justify-end'>
            <img className='' alt='' src={iconcancel} />
            <p className='text-[12px] font-[600] text-[#BA1A1A] ml-2 mb-[4px] mt-1'>Cancelled</p>
          </div>
        </div>
      </div>
      {/* --- Status di Mobile */}
      <div className='flex flex-col flex-1 lg:hidden'>
        <p className='text-[#4A4A4A] text-[12px] font-[400]'>{dateCancel.toDateString()}</p>
        <div className='flex flex-row gap-1 mb-2'>
          <img className='w-[14px]' alt='' src={iconcancel} />
          <p className='text-[12px] font-[600] text-[#BA1A1A]'>Cancelled</p>
        </div>
      </div>
      <hr className='mb-4 lg:mb-8'></hr>
    </div>
  );
}

export default CancelCard;
