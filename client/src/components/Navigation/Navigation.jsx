/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState, useRef } from 'react';
import './Navigation.css';
import { Link, animateScroll as scroll } from 'react-scroll';

function Navigation() {
  const [width, setWidth] = useState(window.innerWidth);
  const [dropdownStatus, setDropdownStatus] = useState(false);
  const componentRef = useRef();
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    });
  }, [width]);

  useEffect(() => {
    // document.addEventListener('click', handleClick);
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
    function handleClick(e) {
      if (componentRef && componentRef.current) {
        const ref = componentRef.current;
        if (!ref.contains(e.target)) {
          const dropdownNav = document.querySelector('.dropdownNav');
          if (dropdownNav) dropdownNav.style.visibility = 'hidden';
          setDropdownStatus(false);
        }
      }
    }
  }, []);

  const handleClose = () => {
    const dropdownNav = document.querySelector('.dropdownNav');
    dropdownNav.style.visibility = 'hidden';
    setDropdownStatus(false);
  };

  return (
    <nav className="header__nav-buttons" ref={componentRef}>
      <div className="header-alignment">
        <div>
          <img src="https://drive.google.com/uc?id=1hORgp_-iee8zbiLiZ6U8TH2QyjBVRQLL" alt="logo" className="header-logo" onClick={scrollToTop} />
        </div>
        {width > 768
          ? (
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
            <div className="dropdownMenu">
              <button
                type="button"
                className="dropdownIcon"
                onClick={() => {
                  const dropdownNav = document.querySelector('.dropdownNav');
                  if (dropdownNav.style.visibility === 'hidden') {
                    dropdownNav.style.visibility = 'visible';
                    setDropdownStatus(true);
                  } else {
                    dropdownNav.style.visibility = 'hidden';
                    setDropdownStatus(false);
                  }
                }}
              >
                {dropdownStatus ? <i className="fa fa-times" /> : <i className="fa fa-bars" />}
              </button>
              <div className="dropdownNav" style={{ visibility: 'hidden' }}>
                <button type="button">
                  <Link
                    activeClass="active"
                    to="about"
                    smooth
                    offset={-100}
                    duration={500}
                    onClick={handleClose}
                    data-testid="about-link"
                  >
                    ABOUT
                  </Link>
                </button>
                <button type="button">
                  <Link
                    activeClass="active"
                    to="skills"
                    smooth
                    offset={-100}
                    duration={500}
                    onClick={handleClose}
                    data-testid="skills-link"
                  >
                    SKILLS
                  </Link>
                </button>
                <button type="button">
                  <Link
                    activeClass="active"
                    to="projects"
                    smooth
                    offset={-100}
                    duration={500}
                    onClick={handleClose}
                    data-testid="projects-link"
                  >
                    PROJECTS
                  </Link>
                </button>
                <button type="button">
                  <Link
                    activeClass="active"
                    to="contact"
                    smooth
                    offset={-100}
                    duration={500}
                    onClick={handleClose}
                    data-testid="contact-link"
                  >
                    CONTACT
                  </Link>
                </button>
              </div>
            </div>

          )}
      </div>
    </nav>
  );
}

export default Navigation;
