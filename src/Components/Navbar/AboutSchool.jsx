import React from 'react';
import './AboutSchool.css';
import Navbar from './Navbar';
import Footer from '../Footer/Footer';

const AboutSchool = () => {
  return (
    <>
    <Navbar/>

    <div className="about-school-container">
      
     <div className="history-image">
      <img src="https://images.unsplash.com/photo-1592066575517-58df903152f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2Nob29sJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D" alt="" />
     </div>

     <div className="about-history">
     The history of a school often mirrors the broader societal changes and educational philosophies prevalent during its existence. Founded in [year], [School Name] has stood as a bastion of learning and growth for generations of students, leaving an indelible mark on the community it serves.

Rooted in the ethos of [founder or founding principles], the school began its journey with a humble mission: to provide quality education accessible to all, regardless of background or means. From its modest beginnings in [location], the school steadily grew, fueled by the dedication of visionary educators and the unwavering support of the community.

Over the decades, [School Name] has weathered numerous challenges and celebrated countless triumphs. From surviving economic downturns to adapting to technological advancements, the school has remained resilient, evolving with the times while staying true to its core values.

Throughout its history, [School Name] has been a beacon of academic excellence, nurturing young minds and instilling in them a passion for lifelong learning. Its halls have echoed with the laughter of students engaged in spirited discussions, the footsteps of athletes striving for victory, and the melodious notes of musicians honing their craft.

Beyond academics, [School Name] has fostered a culture of inclusivity and community service, instilling in students a sense of social responsibility and empathy for others. Through various outreach programs and extracurricular activities, students have learned the importance of compassion, leadership, and teamwork, preparing them not only for academic success but also for life beyond the classroom.

As [School Name] looks to the future, it remains committed to its founding principles while embracing innovation and change. With each passing year, the school continues to shape the minds and hearts of future generations, leaving an enduring legacy that extends far beyond its walls.
     </div>
     
    </div>
    <Footer/>
    </>
  );
};

export default AboutSchool;
