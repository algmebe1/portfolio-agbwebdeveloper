/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, {useEffect, useState} from 'react';
import './Navigation.css';
import { Link, animateScroll as scroll } from 'react-scroll';

function Navigation() {
  const [width, setWidth] = useState(window.innerWidth)
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth)
    })  
  }, [width])


  return (
    <nav className="header__nav-buttons">
      <div>
        <img src="https://drive.google.com/uc?id=1hORgp_-iee8zbiLiZ6U8TH2QyjBVRQLL" alt="logo" className="header-logo" onClick={scrollToTop} />
      </div>
    {width > 768 ? 
      (
      <>
      <ul>
        <li className="about-link">
          <Link
            activeClass="active"
            to="about"
            smooth
            offset={-100}
            duration={500}
          >
            ABOUT
          </Link>
        </li>
        <li className="skills-link">
          <Link
            activeClass="active"
            to="skills"
            smooth
            offset={-100}
            duration={500}
          >
            SKILLS
          </Link>
        </li>
        <li className="projects-link">
          <Link
            activeClass="active"
            to="projects"
            smooth
            offset={-100}
            duration={500}
          >
            PROJECTS
          </Link>
        </li>
        <li className="contact-link">
          <Link
            activeClass="active"
            to="contact"
            smooth
            offset={-100}
            duration={500}
          >
            CONTACT
          </Link>
        </li>
      </ul>
      </>
      ) : (
      <div className="dropdown">
        <button type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="fa fa-bars"></i>
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <button className="dropdown-item">
            <Link
              activeClass="active"
              to="about"
              smooth
              offset={-100}
              duration={500}
            >
              <span className="dropdownText">ABOUT</span>
            </Link>
          </button>
          <button className="dropdown-item">
            <Link
              activeClass="active"
              to="skills"
              smooth
              offset={-100}
              duration={500}
            >
              <span className="dropdownText">SKILLS</span>
            </Link>
          </button>
          <button className="dropdown-item">
            <Link
              activeClass="active"
              to="projects"
              smooth
              offset={-100}
              duration={500}
            >
              <span className="dropdownText">PROJECTS</span>
            </Link>
          </button>
          <button className="dropdown-item">
            <Link
              activeClass="active"
              to="contact"
              smooth
              offset={-100}
              duration={500}
            >
              <span className="dropdownText">CONTACT</span>
            </Link>
          </button>
        </div>
      </div>

      
      )}
    </nav>
  );
}

export default Navigation;
