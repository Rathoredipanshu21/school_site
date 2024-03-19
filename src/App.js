import { BrowserRouter as Router, Routes, Route, Form } from "react-router-dom";
import "./App.css";
import CursorBall from "./Components/CursorBall";
import MainHome from "./Components/Home/MainHome";
import MainAbout from "./Components/AboutPage/MainAbout";
import AboutSchool from "./Components/Navbar/AboutSchool";
import Try from "./Components/Navbar/Try";
import SchoolFaculty from "./Components/Navbar/SchoolFaculty";
import Infrastructure from "./Components/Home/Infrastructure/Infrastructure";
import Building from "./Components/Navbar/Buildings";
import VirualTour from "./Components/Navbar/VirtualTour";
import Achievement from "./Components/Navbar/Achievement";
import Contact from "./Components/Navbar/Contact";
import OurTopper from "./Components/Navbar/OurTopper";
import WhatsApp from './Components/Assets/wplogo .png'


function App() {
  return (
    <>
    <Router>
      <CursorBall />
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/about" element={<MainAbout />} />
        <Route path="/AboutSchool" element={<AboutSchool />} />
        <Route path="/Try" element={<Try />} />
        <Route path="/SchoolFaculty" element={<SchoolFaculty />} />
        <Route path="/Building" element={<Building/>} />
        <Route path="/VirtualTour" element={<VirualTour/>} />
        <Route path="/Achievement" element={<Achievement/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/OurTopper" element={<OurTopper/>} />
      </Routes>
    </Router>
   

    <div className="fixed-bottom right-100 p-3" style={{zIndex:"6",left:"initial"}}>
      <a href="https://wa.me/919905416453?text=Hello How can I help you ?" target="blank"><img src={WhatsApp}  width="60" alt="" /></a>

    </div>
    </>
  );
}

export default App;
