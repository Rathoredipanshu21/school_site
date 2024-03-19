import React from 'react'
import Hero from './Hero/Hero'
import Activity from './Activity/Activity'
import About from './About/About'
import Faculty from './Faculty/Faculty'
import Events from './Events/Events'
import Test from './Text/Text'
import OurNews from './OurNews/OurNews'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'



const MainHome = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Activity/>
      <About/>
      <Faculty/>
      <Events/> 
      <Test/>
      <OurNews/>
      <Footer/> 
    </div>
  )
}

export default MainHome;
