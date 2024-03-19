import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './OurNews.css'


const OurNews = () => {
  const textRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      textRef.current.children,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top',
          end: '+=200',
          scrub: 5,
          toggleActions: 'onEnter onLeave onEnterBack onLeaveBack', 
        },
      }
    );

    gsap.utils.toArray('.card').forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%', 
            end: 'bottom 20%',
            toggleActions: 'play none none none', 
          },
        }
      );
    });
  }, []);

  return (
    <> 

      


      <div ref={textRef} style={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* <h1 style={{ position: 'absolute', opacity: 1 }}>WHY CHOOSE US</h1> */}
      </div>

      <div className="card-main" ref={cardRef}>
        <div className="card" style={{ width: '18rem' }}>
          <img src="https://plus.unsplash.com/premium_photo-1663011158241-9b03859902df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVhY2hlcnxlbnwwfHwwfHx8MA%3D%3D" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>

        <div className="card" style={{ width: '18rem' }}>
          <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVhY2hlcnxlbnwwfHwwfHx8MA%3D%3D" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>

        <div className="card" style={{ width: '18rem' }}>
          <img src="https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGVhY2hlcnxlbnwwfHwwfHx8MA%3D%3D" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurNews;
