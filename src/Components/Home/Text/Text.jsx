import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Text.css'

const Text = () => {
  const textRef = useRef(null);

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
          toggleActions: 'play none play reverse',

        },
      }
    );

    gsap.utils.toArray('.choose-us-item').forEach((item, index) => {
      gsap.fromTo(
        item,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: item,
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
        <h1 id='line' style={{ opacity: 0.5  }}>WHY CHOOSE US ?</h1>
        <h1 id='line' style={{ position: 'absolute', opacity: 1 }}>WHY CHOOSE US ?</h1>
      </div>

      <div className="choose-us-container">
        <div className="choose-us-item">
       
          
          <h2>Comprehensive Education</h2>
          <p>We offer a well-rounded curriculum that balances academic rigor with extracurricular activities, ensuring students receive a holistic education.</p>
        

        </div>



        <div className="choose-us-item">
          <h2>Experienced Faculty</h2>
          <p>Our dedicated team of experienced educators is committed to nurturing every student's potential, providing personalized attention and guidance.</p>
        </div>
        <div className="choose-us-item">
          <h2>Innovative Learning</h2>
          <p>We embrace innovative teaching methods and technology integration to create dynamic learning experiences that prepare students for the challenges of tomorrow.</p>
        </div>
        <div className="choose-us-item">
          <h2>Safe and Supportive Environment</h2>
          <p>The safety and well-being of our students are our top priorities. We provide a nurturing and supportive environment where students feel valued, respected, and empowered to succeed.</p>
        </div>
        <div className="choose-us-item">
          <h2>Strong Community Engagement</h2>
          <p>We believe in the power of community collaboration. Our school actively engages parents, alumni, and the local community to enrich the learning experience and foster a sense of belonging.</p>
        </div>
        <div className="choose-us-item">
          <h2>Focus on Character Development</h2>
          <p>Beyond academic success, we emphasize the importance of character development, instilling values such as integrity, empathy, and resilience in our students.</p>
        </div>
        <div className="choose-us-item">
          <h2>Track Record of Success</h2>
          <p>Our track record speaks for itself. Our graduates have gone on to excel in various fields, demonstrating the effectiveness of our educational approach.</p>
        </div>

        <div className="choose-us-item">
          <h2>Continual Improvement</h2>
          <p>We continuously evaluate and refine our programs to ensure they meet the evolving needs of our students and society.</p>
        </div>
        <div className="choose-us-item">
          <h2>Global Perspective</h2>
          <p>We foster an appreciation for diversity and cultivate global citizenship through international partnerships and cultural exchange programs.</p>
        </div>
      </div>
    </>
  );
};

export default Text;