import React from 'react'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import EditProfile from '../components/profile/editprofile'

const EditprofilePage = () => {
  return (
    <React.Fragment>
        <div>
            <Navbar />
            <EditProfile />
            <Footer />
        </div>
    </React.Fragment>
  )
}

export default EditprofilePage