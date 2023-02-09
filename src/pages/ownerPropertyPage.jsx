import { useState, useEffect } from 'react';
import { SidebarOwner } from '../components/owner/sidebar';
import { PropertyOwner } from '../components/owner/property/property';
import { PropertyOwnerNoData } from '../components/owner/property/propertyNoData';

export const OwnerPropertyPage = () => {
  const [properties, setproperties] = useState([]);
  useEffect(() => {
    const propertyList = [
      {
        name: 'Kos Lily',
        type: 'Campuran',
        location: 'Yogyakarta',
        kostImg: 'kostone',
        data: 'pending',
      },
    ];
    setproperties(propertyList);
  }, []);
  let component = null;
  if (Object.keys(properties).length > 0) {
    component = <PropertyOwner />;
  } else if (Object.keys(properties).length === 0) {
    component = <PropertyOwnerNoData />;
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
