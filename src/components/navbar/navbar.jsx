import React from 'react'

const navbar = () => {
  return (    
    <Nav>
      <NavLink to='/'>
        <img src={require(../assets/LogoNaqosFix.png)}/>
      </NavLink>
      <Bars />
      <NavMenu>
        <NavLink>
          Wishlist
        </NavLink>
        <NavLink>
          Riwayat
        </NavLink>
        <NavLink>
          Notifikasi
        </NavLink>
        <NavLink>
          Profil
        </NavLink>
      </NavMenu>
    </Nav>
  )
}

export default navbar
