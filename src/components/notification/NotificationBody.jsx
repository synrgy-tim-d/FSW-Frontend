import React from 'react'
import IconClose from "../../assets/icon_close.svg"
import { useState } from 'react'
function NotificationBody({isNotificationHiddenState}) {
    // const [isNotificationHidden, setIsNotificationHidden] = useState(true)
    const onClickCloseNotificationHandler = (e) =>{
        e.preventDefault();
        console.log(isNotificationHiddenState)
        isNotificationHiddenState.setIsNotificationHidden(true);
    }
  return (
    <div className={`lg:w-[433px] lg:max-h-[480px] fixed bg-white drop-shadow-md lg:right-[8%] lg:top-[10%] flex flex-wrap items-start ${isNotificationHiddenState.isNotificationHidden ? 'hidden':""}`}>
        <div className='flex justify-between p-7 w-full'>
            <h2 className='text-2xl font-semibold text-black'>Notifikasi</h2>
            <button onClick={(e) => {onClickCloseNotificationHandler(e)}}>
                <img src={IconClose} />
            </button>
        </div>
        <div className='flex flex-wrap w-full px-7 py-4'>
            <div className='grid grid-cols-1 grid-flow-row gap-2'>
                <h3 className='font-[600] text-black'>Pembayaran Berhasil Dikonfirmasi</h3>
                <p className='text-black font-[300] text-base'>Pembayaran sudah diterima, kamar sudah dapat ditempati sesuai jadwal</p>
                <p className='text-black font-[200] text-sm'>Fri, 24 March 2023 18:07 WIB</p>
            </div>
        </div>
    </div>
  )
}

export default NotificationBody
