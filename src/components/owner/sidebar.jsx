import { NavLink } from 'react-router-dom';

export const SidebarOwner = () => {
  const activeLink =
    'w-full h-[68px] px-6 mb-5 text-[25px] font-[600] flex flex-row items-center rounded-[8px] text-[#0A008A] border-2 border-white bg-white hover:bg-[#0A008A] hover:text-white';
  const normalLink =
    'w-full h-[68px] px-6 mb-5 text-[25px] font-[600] flex flex-row items-center rounded-[8px] text-white border-2 border-[#0A008A] bg-[#0A008A] hover:bg-white hover:border-white hover:text-[#0A008A]';

  return (
    <div>
      <NavLink
        to='/owner/property'
        className={({ isActive }) => (isActive ? activeLink : normalLink)}
      >
        <button className='' type='button'>
          Properti Saya
        </button>
      </NavLink>
      <NavLink
        to='/owner/history'
        className={({ isActive }) => (isActive ? activeLink : normalLink)}
      >
        <button className='' type='button'>
          Riwayat Transaksi
        </button>
      </NavLink>
      <NavLink to='/profilpemilik' className={({ isActive }) => (isActive ? activeLink : normalLink)}>
        <button className='' type='button'>
          Akun Profil
        </button>
      </NavLink>
    </div>
  );
};
