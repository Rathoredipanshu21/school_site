import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Principal from './Principal/Principal'
import SchoolFaculty from '../Navbar/SchoolFaculty'

const MainAbout = () => {
  return (
    <div>
      <Navbar/>
      <Principal/>
      {/* <SchoolFaculty/> */}
      <Footer/>
    </div>
  )
}

export default MainAbout
