import React, { useEffect, useState } from "react";
import "./Activity.css";
import hostel from "../../Assets/hotel-building.png";
import sports from "../../Assets/trophy.png";
import bus from "../../Assets/school-bus.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Activity = () => {
 

  const [isLibraryCollapsed, setIsLibraryCollapsed] = useState(true);

  const toggleLibraryCollapse = () => {
    setIsLibraryCollapsed(!isLibraryCollapsed);
  };

  return (
    <>

    <div className="activities-main">
     <div className="box">
      <img src="https://images.unsplash.com/photo-1626265774643-f1943311a86b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvc3RlbHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
      <div className="content">
        <h3>Hostel Facility</h3>
        <p>
        Our hostel provides a nurturing home away from home, offering comfortable accommodations and a supportive environment. It fosters camaraderie, 
        </p>
      </div>
    </div>


     <div className="box">
      <img src="https://plus.unsplash.com/premium_photo-1661634073903-2ecdccdfc8a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QnVzfGVufDB8fDB8fHww" alt="" />
      <div className="content">
        <h3>Bus Facility</h3>
        <p>
        Reliable transportation ensures students' safe commute, enabling access to educational opportunities. Our fleet of buses adheres to strict safety standards,
        </p>
      </div>
    </div>

     <div className="box">
      <img src="https://plus.unsplash.com/premium_photo-1661905921900-a8b49e65feeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGlicmFyeXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
      <div className="content">
        <h3>Library </h3>
        <p>
        Our school library fosters a culture of reading and learning, offering a diverse collection of books, digital resources, and study spaces.
        </p>
      </div>
    </div>
    </div>
    



        <div className="second-box-main">
    <div className="second_box">
        <img src="https://images.unsplash.com/photo-1518152006812-edab29b069ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNtYXJ0JTIwY2xhc3N8ZW58MHx8MHx8fDA%3D" alt="" />
        <div className="content">
          <h3 style={{ textAlign: "center" }}>Science Lab</h3>
          <p>
          Our school's science lab offers modern facilities for hands-on learning. Students conduct experiments guided by experienced teachers, exploring diverse scientific disciplines like chemistry and physics 
          </p>
        </div>
      </div>
    <div className="second_box">
        <img src="https://images.unsplash.com/photo-1518152006812-edab29b069ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNtYXJ0JTIwY2xhc3N8ZW58MHx8MHx8fDA%3D" alt="" />
        <div className="content">
          <h3 style={{ textAlign: "center" }}>Science Lab</h3>
          <p>
          Our school's science lab offers modern facilities for hands-on learning. Students conduct experiments guided by experienced teachers, exploring diverse scientific disciplines like chemistry and physics 
          </p>
        </div>
      </div>
    <div className="second_box">
        <img src="https://images.unsplash.com/photo-1518152006812-edab29b069ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNtYXJ0JTIwY2xhc3N8ZW58MHx8MHx8fDA%3D" alt="" />
        <div className="content">
          <h3 style={{ textAlign: "center" }}>Science Lab</h3>
          <p>
          Our school's science lab offers modern facilities for hands-on learning. Students conduct experiments guided by experienced teachers, exploring diverse scientific disciplines like chemistry and physics 
          </p>
        </div>
      </div>

      </div>

    </>
  );
};

export default Activity;
