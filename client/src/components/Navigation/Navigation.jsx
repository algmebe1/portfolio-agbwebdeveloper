/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './Navigation.css';
import { Link, animateScroll as scroll } from 'react-scroll';

function Navigation() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className="header__nav-buttons">
      <div>
        <img src="https://raw.githubusercontent.com/spothq/cryptocurrency-icons/9ab8d6934b83a4aa8ae5e8711609a70ca0ab1b2b/svg/color/kcs.svg" alt="logo" onClick={scrollToTop} />
      </div>
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
    </nav>
  );
}

export default Navigation;
