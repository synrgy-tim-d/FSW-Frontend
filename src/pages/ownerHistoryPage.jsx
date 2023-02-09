import { useState, useEffect } from 'react';
import { SidebarOwner } from '../components/owner/sidebar';
import { HistoryOwner } from '../components/owner/history/history';
import { HistoryOwnerNoData } from '../components/owner/history/historyNoData';
import { HistoryDetailOwner } from '../components/owner/history/historyDetail';

export const OwnerHistoryPage = () => {
  const [bookings, setbookings] = useState([]);
  useEffect(() => {
    const bookingList = [
      {
        date: '24 Maret 2022',
        name: 'Kos Lily',
        bookId: '00000000',
        rentor: 'Hihang Hoheng',
        fullDate: 'Fri, 24 March 2022 18:07 WIB',
        price: '1.000.000',
        avatar: 'avatarone',
        status: 'done',
      },
    ];
    setbookings(bookingList);
  }, []);
  let component = null;
  if (Object.keys(bookings).length > 0) {
    component = <HistoryOwner />;
  } else if (Object.keys(bookings).length === 0) {
    component = <HistoryOwnerNoData />;
  }
  return (
    <div className='grid grid-cols-5'>
      {/* ---Sidebar--- */}
      <div className='col-span-1 bg-[#0A008A] text-white min-h-screen h-full text-center py-6 lg:px-8 lg:py-16'>
        <SidebarOwner />
      </div>
      {/* ---Content--- */}
      {component}
    </div>
  );
};

export const OwnerHistoryDetailPage = () => {
  return (
    <div className='grid grid-cols-5'>
      {/* ---Sidebar--- */}
      <div className='col-span-1 bg-[#0A008A] text-white min-h-screen h-full text-center py-6 lg:px-8 lg:py-16'>
        <SidebarOwner />
      </div>
      <HistoryDetailOwner />
    </div>
  );
};
