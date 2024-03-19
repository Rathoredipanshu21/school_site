import React, { useState, useEffect } from "react";
import './Building.css'; // Import CSS file
import Navbar from "./Navbar";
import Footer from "../Footer/Footer";

const BuildingData = [
  {
    name: "Building",
    images: [
      "https://images.unsplash.com/photo-1613896527026-f195d5c818ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nob29sJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1596522354195-e84ae3c98731?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXVkaXRvcml1bXxlbnwwfHwwfHx8MA%3D%3D", "https://images.unsplash.com/photo-1613896527026-f195d5c818ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nob29sJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D"
    ]
  },
  {
    name: "Lab",
    images: [
      "https://images.unsplash.com/photo-1596522354195-e84ae3c98731?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXVkaXRvcml1bXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1613896527026-f195d5c818ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nob29sJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1616512659455-111d3367649f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2Nob29sJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D"
    ]
  },
  {
    name: "Auditorium",
    images: [
      "https://plus.unsplash.com/premium_photo-1681505355852-9001029264db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2Nob29sJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1613896527026-f195d5c818ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nob29sJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1616512659455-111d3367649f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2Nob29sJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D"
    ]
  },
  {
    name: "Ground",
    images: [
      "https://plus.unsplash.com/premium_photo-1683147668085-3667954d962d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2Nob29sJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1592066575517-58df903152f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2Nob29sJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1616512659455-111d3367649f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2Nob29sJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D"
    ]
  },
  {
    name: "Campus",
    images: [
      "https://images.unsplash.com/photo-1596522354195-e84ae3c98731?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXVkaXRvcml1bXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1613896527026-f195d5c818ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nob29sJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1616512659455-111d3367649f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2Nob29sJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D"
    ]
  },
];

const BuildingComponent = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    // Set initial selection to the first building type
    setSelectedItems(BuildingData[0].images);
  }, []);

  const handleClick = (item) => {
    setSelectedItems(item.images);
  };

  return (
    <> 
      <Navbar/>


      <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://plus.unsplash.com/premium_photo-1681505355852-9001029264db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2Nob29sJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..."/>
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

            <div className="about-infrastructure">
            The infrastructure of the school is designed to provide a conducive environment for learning and holistic development. With a total of 36 classrooms, the school offers ample space for academic activities, ensuring each student has access to a comfortable and well-equipped learning environment. Additionally, there are 12 specialized labs, including four computer labs and two language labs, facilitating practical learning experiences and enhancing digital literacy among students.

Apart from academic facilities, the school boasts expansive outdoor spaces, including two large grounds and gardens. These open areas serve as platforms for physical activities, sports events, and recreational pursuits, promoting a healthy and active lifestyle among students. The presence of well-maintained greenery also contributes to a serene and aesthetically pleasing ambiance, creating a refreshing atmosphere conducive to relaxation and creativity.

In addition to these essential facilities, the school prioritizes safety and security measures, such as CCTV surveillance, fire safety equipment, and emergency response protocols, ensuring the well-being of students and staff members. Furthermore, the infrastructure includes administrative offices, staff rooms, a library, a cafeteria, and restroom facilities, catering to the diverse needs of the school community and fostering a supportive and inclusive learning environment.
            </div>

            <div>
                {/* <h1 id="clicktoView">Click to View the Inftastructure..</h1> */}
            </div>


      <div className="app-container">
        <div className="Building-list">
          {BuildingData.map((item, index) => (
            <div
              key={index}
              className={`item ${selectedItems === item.images ? "active" : ""}`}
              onClick={() => handleClick(item)}
            >
              {item.name}
            </div>
          ))}
        </div>
        <div className="image-container">
          {selectedItems.length > 0 && (
            <div className="image-grid">
              {selectedItems.map((image, index) => (
                <img key={index} src={image} alt={`Image ${index}`} />
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default BuildingComponent;
