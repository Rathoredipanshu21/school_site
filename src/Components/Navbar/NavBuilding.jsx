import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBuil from "../Assets/Navbar.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBuilding.css";

const NavBuilding = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <img
        src={NavBuil}
        alt=""
        className="img-fluid"
        style={{ width: "100%" }}
      />

      <nav
        id="navbar-main"
        className={`navbar navbar-expand-lg ${
          isSticky ? "bg-black" : "bg-body-dark"
        } ${isNavOpen ? "show" : ""}`}
      >
        <div className="container-fluid justify-content-between align-items-center">
        
        <div className="navbar-container">
  <Link to="/">
    <img
      id="dpsimg"
      src="https://dpsdhanbad.in/data/website/1555037396_logo.png"
      alt="Logo"
      className="img-fluid logo-img"
    />
  </Link>
  <button className="navbar-toggler" type="button" onClick={toggleNav}>
    <span className="navbar-toggler-icon"></span>
  </button>
</div>

        



          <div
            className={`collapse navbar-collapse justify-content-center ${
              isNavOpen ? "show" : ""
            }`}
            id="navbarSupportedContent"
          >
            <ul
              id="nav-list"
              className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center"
              onClick={closeNav}
            >
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  HOME
                </Link>
              </li>

              <li className="nav-item">
                <span className="nav-link">|</span>
              </li>

              <li
                className="nav-item dropdown"
                onMouseEnter={() => setIsNavOpen(true)}
                onMouseLeave={() => setIsNavOpen(false)}
              >
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  ABOUT US
                </a>
                <ul className={`dropdown-menu ${isNavOpen ? "show" : ""}`}>
                  <li>
                    <a className="dropdown-item" href="/AboutSchool">
                    HISTORY 
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/About">
                    ABOUT SCHOOL
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/OurTopper">
                   OUR TOPPERS
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/SchoolFaculty">
                      STAFF AND FACULTY
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/VirtualTour">
                      VIRTUAL TOUR
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/Try">
                      PRAYERS
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/Building">
                      INFRASTRUCTURE
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <span className="nav-link">|</span>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Achievement">
                  ACHIEVEMENT
                </Link>
              </li>

              <li className="nav-item">
                <span className="nav-link disabled">|</span>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Contact">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
          </div>
      </nav>
    </>
  );
};

export default NavBuilding;
