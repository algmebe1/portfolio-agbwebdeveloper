import React from 'react';
import './ProjectItem.css';
import PropTypes from 'prop-types';

function ProjectItem({
  previmg, name, description, tags, ghlink,
}) {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light p-3 w-50 project-item-container">
      <img src={previmg} alt="project-preview" className="w-100 project-preview" />
      <h1 className="text-left mt-3 project-title">{name}</h1>
      <p className="text-justify project-description">{description}</p>
      <div className="d-flex flex-row justify-content-between align-items-center">
        <div className="d-flex flex-wrap align-items-start w-75">
          {[...tags] && tags.map((element) => (
            <span className="tag-container" key={`${element}-tag`}>{element}</span>
          ))}
        </div>
        <a href={ghlink} target="blank" className="anchor-hover"><img src="https://raw.githubusercontent.com/xtoolkit/Micon/8d34a6f055b901dcd6a5d45d24318d1caf443128/icons/webbrand/github.svg" alt="github-logo" className="image-size" /></a>
      </div>
    </div>
  );
}

ProjectItem.propTypes = {
  previmg: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf.isRequired,
  ghlink: PropTypes.string.isRequired,
};

export default ProjectItem;
