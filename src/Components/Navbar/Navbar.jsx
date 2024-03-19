import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import NavBuilding from "./NavBuilding";
// import AboutSchool from "./AboutSchool";
// import Navbar from "../Assets/Navbar.png";

const Navbar = () => {
  return (
    <>
    <NavBuilding/>
    {/* <div className="nav-bar">
      <div className="logo">
        <img
          src="https://dpsdhanbad.in/data/website/1555037396_logo.png"
          alt="Logo"
        />
      </div>
      <div className="list">
        <Link to="/" activeClassName="active">
          HOME
        </Link>

        <div className="dropdown">
          <Link to="/about" activeClassName="active">
            ABOUT US<i className="fa fa-caret-down" aria-hidden="true"></i> 
          </Link>

          <div className="dropdown-content">
            <Link to="/about" activeClassName="active">
              ABOUT SCHOOL
            </Link>

            <Link to="/AboutSchool" activeClassName="active">
              HISTORY
            </Link>

            <Link to="/SchoolFaculty" activeClassName="active">
              OUR STAFFS AND FACULTY
            </Link>

            <Link to="/" activeClassName="active">
              AIMS and OBJECTIVES
            </Link>

            <Link to="/Try" activeClassName="active">
              PRAYERS
            </Link>


            <Link to="/Building" activeClassName="active">
              INFRASTRUCTURE
            </Link>

          </div>
        </div>

        <Link to="/pages" activeClassName="active">
          PAGES
        </Link>

        <Link to="/contact" activeClassName="active">
          CONTACT
        </Link>
      </div>
    </div> */}
    </>
  );
};

export default Navbar;
