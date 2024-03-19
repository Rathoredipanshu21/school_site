import React, { useEffect } from 'react';
import './Events.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Events = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.events', {
      opacity: 1, 
      y: -80, 
      duration: 3,
      scrollTrigger: {
        trigger: '.main-events',
        start: 'top 80%', 
        end: 'bottom 0%', 
        scrub: 1,
       
        toggleActions:'play onleave none onleaveback'
        
      },
    });
  }, []);
  return (
    <>  
      {/* <h3>OUR EVENTS</h3> */}
   

          <div className="main-events"> 
    <div className='events'>

        <div className="image-section">
          <img src="https://www.holistiquelearning.com/blog/wp-content/uploads/2020/01/Annual-Day-pic.jpg" alt="" />
        </div>

        <div className="event-name">
         <p><b>Annual Function</b></p> 
       

        <div className="details">
          <p>Venue : School Campus </p>
          <i>Guest : District Magistrate of Dhanbad </i>
          <p>An Evening of Talent and Honor: Celebrating Unity and Achievement at our Annual School Function, where students shine bright under the esteemed presence of the District Magistrate. Together, we showcase the power of collaboration, creativity, and community.</p>
        </div>
        </div>
     
    </div>

      <div className='events'>

        <div className="image-section">
          <img src="https://www.holistiquelearning.com/blog/wp-content/uploads/2020/01/Annual-Day-pic.jpg" alt="" />
        </div>

        <div className="event-name">
         <p><b>Annual Function</b></p> 
       

        <div className="details">
          <p>Venue : School Campus </p>
          <i>Guest : District Magistrate of Dhanbad </i>
          <p>An Evening of Talent and Honor: Celebrating Unity and Achievement at our Annual School Function, where students shine bright under the esteemed presence of the District Magistrate. Together, we showcase the power of collaboration, creativity, and community.</p>
        </div>
        </div>
     
    </div>

      <div className='events'>

        <div className="image-section">
          <img src="https://www.holistiquelearning.com/blog/wp-content/uploads/2020/01/Annual-Day-pic.jpg" alt="" />
        </div>

        <div className="event-name">
         <p><b>Annual Function</b></p> 
       

        <div className="details">
          <p>Venue : School Campus </p>
          <i>Guest : District Magistrate of Dhanbad </i>
          <p>An Evening of Talent and Honor: Celebrating Unity and Achievement at our Annual School Function, where students shine bright under the esteemed presence of the District Magistrate. Together, we showcase the power of collaboration, creativity, and community.</p>
        </div>
        </div>
     
    </div>

      <div className='events'>

        <div className="image-section">
          <img src="https://www.holistiquelearning.com/blog/wp-content/uploads/2020/01/Annual-Day-pic.jpg" alt="" />
        </div>

        <div className="event-name">
         <p><b>Annual Function</b></p> 
       

        <div className="details">
          <p>Venue : School Campus </p>
          <i>Guest : District Magistrate of Dhanbad </i>
          <p>An Evening of Talent and Honor: Celebrating Unity and Achievement at our Annual School Function, where students shine bright under the esteemed presence of the District Magistrate. Together, we showcase the power of collaboration, creativity, and community.</p>
        </div>
        </div>
     
    </div>

    </div>
<hr />
    </>

  )
}

export default Events;
