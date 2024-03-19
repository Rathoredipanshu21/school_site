import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

const About = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".about-founder", {
            y: 80,
            duration: 8,
            scrollTrigger: {
                trigger: ".about-founder",
                start: "top 80%", // Adjusted start value
                end: "top 20%", // Adjusted end value
                toggleActions: "restart reverse resume complete",
                scrub: 1 
            }
        });
    }, []);

    return (
        <div className="about-us">
            <div className="container-founder">
            <div className="box">
      <img src="https://dpsdhanbad.in/data/website/1554645757_.JPG" alt="" />
      <div className="box-content">
        <h3 className="name">Founder</h3>
        <span className="post">Chairman</span>
      </div>
    </div>
                <div className="about-founder">
                    <h2>Founder & Chairman</h2>
                   

 <p>Mr J.N. Singh, Founder Chairman of the Doon Public School, obtained his Master of Arts degree from Patna University in the year 1962.He came to the Coal City of Dhanbad in the year 1973 and joined Coal India as Administrative Officer and was finally promoted as Dy. Chief Personnel Manager of Coal India in the year 1994. He has also obtained Diploma in Pictorial Photography from the New York Institute of Photography.He is an internationally accepted personality He has received various Honour & several prizes in the field of Art & Literature some of them are as follows Honour of AFIAP(Associate of Federation Internationale de l’Art Photographic Council ) in the same year. Honour of AIIPC (Associate of India International Photographic Council ) He got into the education sphere 30 years ago. He was always aspired to make a difference to society through quality education and working relentlessly, to the fulfilment of his dream. He founded Kusum Vihar Education Trust with the sole motive of development of education mainly in Eastern part of the country.After its inception , Kusum Vihar Education Trust never looked back and established schools in Dhanbad,Ranchi,Patna ,Durgapur (W.B). He was also honoured with “VIDYA RATNA AWARD” on National Level in the year 2002 for his untiring enthusiasm and personal achievements With about 30 years of experience in the pursuit of excellence, a passion for creating and nurturing the best standards and a strong focus towards a greater goal, Mr Singh has built renowned brands in the education sector spread over 6 schools. He is an inspiration to all as he spearheads the Doon Group of management and operations, strategising and directing it through its next phase of growth. Mr Singh believes that the academic programme should be learner led, oriented towards creating exemplary learning opportunities for students. A natural leader and motivator, his primary focus is to provide world class education as he believes that the highest benchmark of an ideal educational institution is its commitment to quality.

Founder & Chairman

Mr J.N. Singh

</p>
                </div>
            </div>

            {/* Add more content below */}
            <div className="additional-content">
                {/* Additional content goes here */}
            </div>
        </div>
    );
}

export default About;
