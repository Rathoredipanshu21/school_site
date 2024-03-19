import React, { useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import './Hero.css';

const Hero = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      document.querySelector('.carousel-control-next').click();
    }, 2000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div id="carouselExample" className="carousel slide">
        <Carousel>
          <Carousel.Item>
            <img src="https://dpsdhanbad.in/data/slider/1615040568_7.jpeg" className="d-block w-100" alt="..."/>
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://dpsdhanbad.in/data/slider/1672216020_gh.jpg" className="d-block w-100" alt="..."/>
          </Carousel.Item>
        </Carousel>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Hero;
