import React from 'react'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import Profile from '../components/profile/profile'

const ProfilePage = () => {
  return (
    <React.Fragment>
        <div>
            <Navbar />
            <Profile />
            <Footer />
        </div>
    </React.Fragment>
  )
}

export default ProfilePage;