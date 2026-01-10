// src/section/Project.tsx

import React from 'react';
import { projects } from '../data/Project'; // Adjust import path as necessary
import ProjectCard from '../data/ProjectCard'; // Adjust import path as necessary
import { useTheme } from '../layout/ThemeProvider';
const ProjectSection: React.FC = () => {
  const {theme}=useTheme()
  const componentStyle={
      backgroundColor:theme==='dark' ?'#333' :'#fff',
      color:theme==='dark'?'#fff':'#000',
      padding:'20px'
  }
  return (
    <section style={componentStyle}>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-900 ">
          My Projects
        </h1>
        <div className="max-w-4xl mx-auto" >
          {projects.map((project) => (
            <ProjectCard  key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
