/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './About.css';
import Typewriter from 'typewriter-effect'

function About() {
  return (
    <div className="about-container" id="about">
      <div className="logo-agb-container">
        <img src="https://drive.google.com/uc?id=19Ixe7SPvl2CFX7qt5b27Td5ZNIloRsGa" alt="logo-agb" className="about-logo"/>
      </div>
      <div className="about-title">
        <Typewriter options={{
          strings: ['Hi 👋🏼, I\'m Alberto Gómez!', 'A passionate Full Stack Developer, currently based in Spain'],
          autoStart: true,
          loop: true,
          delay: 50,
          pauseFor: 3000
        }} />
      </div>

      <p className="about__introduction">
        I started my professional career as an engineer.
        That job allowed to me to develop analytical capacity,
        Project management and teamwork skills among others.
        In love with new technologies, I decided to step in the software development industry,
        in order to convert something that I enjoy, which is coding, in my job.

      </p>
    </div>
  );
}

export default About;
