import React, { useState } from "react";
import './Infrastructure.css';


const infrastructureData = [
  { name: "Building", images: [
    "https://images.unsplash.com/photo-1613896527026-f195d5c818ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nob29sJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D","https://images.unsplash.com/photo-1596522354195-e84ae3c98731?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXVkaXRvcml1bXxlbnwwfHwwfHx8MA%3D%3D","https://images.unsplash.com/photo-1596522354195-e84ae3c98731?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXVkaXRvcml1bXxlbnwwfHwwfHx8MA%3D%3D"
    
  ]},
  { name: "Auditorium", images: [
    "https://images.unsplash.com/photo-1596522354195-e84ae3c98731?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXVkaXRvcml1bXxlbnwwfHwwfHx8MA%3D%3D", "https://images.unsplash.com/photo-1613896527026-f195d5c818ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nob29sJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D","https://images.unsplash.com/photo-1596522354195-e84ae3c98731?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXVkaXRvcml1bXxlbnwwfHwwfHx8MA%3D%3D","https://images.unsplash.com/photo-1596522354195-e84ae3c98731?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXVkaXRvcml1bXxlbnwwfHwwfHx8MA%3D%3D"
    // Add more images for Auditorium
  ]},
  { name: "Lab", images: [
    "https://images.unsplash.com/photo-1581093577421-f561a654a353?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxhYnxlbnwwfHwwfHx8MA%3D%3D", "https://images.unsplash.com/photo-1613896527026-f195d5c818ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nob29sJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D","https://images.unsplash.com/photo-1596522354195-e84ae3c98731?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXVkaXRvcml1bXxlbnwwfHwwfHx8MA%3D%3D","https://images.unsplash.com/photo-1596522354195-e84ae3c98731?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXVkaXRvcml1bXxlbnwwfHwwfHx8MA%3D%3D"
    // Add more images for Lab
  ]},
  { name: "Ground", images: [
    "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNjaG9vbCUyMGdyb3VuZHxlbnwwfHwwfHx8MA%3D%3D", "https://images.unsplash.com/photo-1613896527026-f195d5c818ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nob29sJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D","https://images.unsplash.com/photo-1596522354195-e84ae3c98731?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXVkaXRvcml1bXxlbnwwfHwwfHx8MA%3D%3D","https://images.unsplash.com/photo-1596522354195-e84ae3c98731?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXVkaXRvcml1bXxlbnwwfHwwfHx8MA%3D%3D"
    // Add more images for Ground
  ]},
  // Add more infrastructure items as needed
];

const Infrastructure = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleClick = (item) => {
    setSelectedItems(item.images);
  };

  return (
    <div className="app-container">
      <div className="infrastructure-list">
        {infrastructureData.map((item, index) => (
          <div key={index} className="item" onClick={() => handleClick(item)}>
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
  );
};

export default Infrastructure;
