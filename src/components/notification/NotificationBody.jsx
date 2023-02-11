import React from 'react'
import IconClose from "../../assets/icon_close.svg"
import { useState } from 'react'
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import appConfig from '../../config';
function NotificationBody({notifications,isNotificationHiddenState}) {
    // const [isNotificationHidden, setIsNotificationHidden] = useState(true)
    const onClickCloseNotificationHandler = (e) =>{
        e.preventDefault();
        console.log(isNotificationHiddenState)
        isNotificationHiddenState.setIsNotificationHidden(true);
    }
  return (
    <div className={`lg:w-[433px] lg:max-h-[480px] fixed bg-white drop-shadow-md lg:right-[8%] lg:top-[75%] flex flex-wrap items-start ${isNotificationHiddenState.isNotificationHidden ? 'hidden':""}`}>
        <div className='flex justify-between p-7 w-full'>
            <h2 className='text-2xl font-semibold text-black'>Notifikasi</h2>
            <button onClick={(e) => {onClickCloseNotificationHandler(e)}}>
                <img src={IconClose} />
            </button>
        </div>
        <div className='flex flex-wrap w-full py-4 overflow-auto lg:max-h-[380px] mb-8'>
            {
                notifications.map((e,i) => {
                    if (!e) {
                        return (
                            <div className='grid grid-cols-1 grid-flow-row gap-2 w-full py-4 px-7' key={i}>
                                <h3 className='font-[600] text-black'>Error</h3>
                                <p className='text-black font-[300] text-base'>Error</p>
                                <p className='text-black font-[200] text-sm'>Error</p>
                            </div>)
                    }
                    return (
                        <div className='grid grid-cols-1 grid-flow-row gap-2 w-full py-4 px-7' key={i}>
                            <h3 className='font-[600] text-black'>{e.title}</h3>
                            <p className='text-black font-[300] text-base'>{e.content}</p>
                            <p className='text-black font-[200] text-sm'>{e.lastUpdated ? e.lastUpdated : "null"}</p>
                        </div>)
                })
            }
        </div>
    </div>
  )
}

export default NotificationBody
