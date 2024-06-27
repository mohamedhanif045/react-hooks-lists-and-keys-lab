// src/components/App.js

import React from 'react';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import ProjectList from './ProjectList';

const App = () => {
  const user = {
    name: 'John Doe',
    age: 30,
    bio: 'A bio about John Doe',
    github: 'https://github.com/johndoe',
    linkedin: 'https://www.linkedin.com/in/johndoe',
  };

  const projects = [
    {
      id: 1,
      name: 'Project One',
      about: 'This is the first project',
      technologies: ['React', 'JavaScript', 'CSS']
    },
    {
      id: 2,
      name: 'Project Two',
      about: 'This is the second project',
      technologies: ['Node.js', 'Express', 'MongoDB']
    },
    // Add more projects as needed
  ];

  return (
    <div>
      <NavBar />
      <Home name={user.name} age={user.age} />
      <About bio={user.bio} github={user.github} linkedin={user.linkedin} />
      <ProjectList projects={projects} />
    </div>
  );
};

export default App;
