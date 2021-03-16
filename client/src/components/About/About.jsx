/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container" id="about">
      <div className="about-title">
        <p>Hi 👋🏼, I'm Alberto Gómez!</p>
        <p>A passionate Full Stack Developer, currently based in Spain</p>
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
