import React, { useState } from "react";
import PrincipalImage from "../../Assets/principal.jpg";
import VicePrincipalImage from "../../Assets/vice_principal.jpg";
import "./Principal.css";
import Footer from "../../Footer/Footer";

const Principal = () => {
  const [selectedPerson, setSelectedPerson] = useState("principal");

  const handleSelect = (person) => {
    setSelectedPerson(person);
  };

  return (


    <>

<div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://dpsdhanbad.in/data/slider/1629353331_23.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVhY2hlcnMlMjBwaWN0dXJlfGVufDB8fDB8fHww" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://unsplash.com/photos/female-teacher-is-reading-a-book-during-classes-in-preschool-fVP3dwP9emM" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>



    <div className="principal">
     

          <div className="container">
          <div className="options">
      </div>
        <div id="btn" onClick={() => handleSelect("principal")}>Principal</div>
        <div id="btn" onClick={() => handleSelect("viceprincipal")}>
          Vice Principal
        </div>

       </div>
         <hr />

    <div className="details-principal">
  <div className="image-box">
    <img src={selectedPerson === "principal" ? PrincipalImage : VicePrincipalImage} alt="Person" />
  </div>
  <div className="info-box">
    <h2>{selectedPerson === "principal" ? "Principal" : "Vice Principal"}</h2>
    <p>
      {selectedPerson === "principal"
        ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        : "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
    </p>
   
  </div>
</div>


      
   
    </div>
    <Footer/>
    </>
    

  );
};

export default Principal;
