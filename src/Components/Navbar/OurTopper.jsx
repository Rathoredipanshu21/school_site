import React from 'react';
import './OurTopper.css';
import NavBuilding from './NavBuilding';
import Footer from '../Footer/Footer';

const OurTopper = () => {
    return (
        <>
        <NavBuilding/>
        <div className="our-topper">
            <h1>On Intermediate</h1>
            <div className="topper-list">
                <div className="topper-item">
                    <img src="https://images.unsplash.com/photo-1554126807-6b10f6f6692a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJveXxlbnwwfHwwfHx8MA%3D%3D" alt="Topper 1" />
                    <div className="topper-info">
                        <h2>John Doe</h2>
                        <p>Class: 12</p>
                        <p>Percentage: 95%</p>
                    </div>
                </div>
                <div className="topper-item">
                    <img src="https://images.unsplash.com/photo-1545696968-1a5245650b36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHN0dWRlbnR8ZW58MHx8MHx8fDA%3D" alt="Topper 2" />
                    <div className="topper-info">
                        <h2>Jane Smith</h2>
                        <p>Class: 12</p>
                        <p>Percentage: 94%</p>
                    </div>
                </div>
                <div className="topper-item">
                    <img src="https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHN0dWRlbnR8ZW58MHx8MHx8fDA%3D" alt="Topper 2" />
                    <div className="topper-info">
                        <h2>Jane Smith</h2>
                        <p>Class: 12</p>
                        <p>Percentage: 94%</p>
                    </div>
                </div>
               
            </div>
        </div>
        <div className="our-topper">
            <h1>On matriculation</h1>
            <div className="topper-list">
                <div className="topper-item">
                    <img src="https://images.unsplash.com/photo-1554126807-6b10f6f6692a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJveXxlbnwwfHwwfHx8MA%3D%3D" alt="Topper 1" />
                    <div className="topper-info">
                        <h2>John Doe</h2>
                        <p>Class: 10</p>
                        <p>Percentage: 95%</p>
                    </div>
                </div>
                <div className="topper-item">
                    <img src="https://images.unsplash.com/photo-1545696968-1a5245650b36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHN0dWRlbnR8ZW58MHx8MHx8fDA%3D" alt="Topper 2" />
                    <div className="topper-info">
                        <h2>Jane Smith</h2>
                        <p>Class: 10</p>
                        <p>Percentage: 94%</p>
                    </div>
                </div>
                <div className="topper-item">
                    <img src="https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHN0dWRlbnR8ZW58MHx8MHx8fDA%3D" alt="Topper 2" />
                    <div className="topper-info">
                        <h2>Jane Smith</h2>
                        <p>Class: 12</p>
                        <p>Percentage: 94%</p>
                    </div>
                </div>
               
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default OurTopper;
