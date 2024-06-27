// src/components/ProjectItem.js

import React from 'react';

const ProjectItem = ({ name, about, technologies }) => {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div>
        {technologies.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>
    </div>
  );
};

export default ProjectItem;
