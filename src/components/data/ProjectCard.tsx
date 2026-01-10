// src/components/ProjectCard.tsx

import React from 'react';
import type { ProjectData } from './Project'; // Adjust import path as necessary

interface ProjectCardProps {
  project: ProjectData;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-8 transform hover:scale-105 transition duration-300">
      <h2 className="text-2xl font-bold mb-3 text-gray-800">{project.title}</h2>
      
      {/* Description Section */}
      <p className="text-gray-600 mb-4">{project.description}</p>
      
      {/* Buttons Section */}
      <div className="flex space-x-4">
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
        >
          GitHub View
        </a>
        
        {project.demoLink && (
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
