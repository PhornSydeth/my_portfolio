// src/data/Project.ts

export type ProjectCategory = "all" | "backend" | "fullstack" | "frontend";
export type ProjectStatus = "completed" | "in-progress";

export interface ProjectData {
  id: number;
  title: string;
  description: string;
  shortDesc: string;
  tags: string[];
  category: ProjectCategory;
  status: ProjectStatus;
  featured: boolean;
  githubLink: string;
  demoLink?: string;
  gradient: string;       // card accent gradient classes
  accentColor: string;    // hex for glow & icon tint
}

export const projects: ProjectData[] = [
  {
    id: 1,
    title: "Secure User Authentication & Role-Based Access System",
    shortDesc: "Banking-grade JWT auth system with RBAC, built on Spring Boot & Spring Security.",
    description:
      "A banking-oriented backend authentication system developed using Spring Boot and Spring Security. Provides secure user registration and login with JWT-based authentication and stateless session management. Passwords are stored with bcrypt encryption. A role-based access control (RBAC) mechanism manages authorization between USER and ADMIN roles. Uses Spring Data JPA + MySQL for persistent storage. The architecture is modular, secure, and extensible — suitable as a foundation for larger financial systems.",
    tags: ["Spring Boot", "Spring Security", "JWT", "MySQL", "RBAC", "Java"],
    category: "backend",
    status: "completed",
    featured: true,
    githubLink: "https://github.com/PhornSydeth/user_mangagment",
    demoLink: "https://sydethportfolio.netlify.app/#projects",
    gradient: "from-blue-500 to-cyan-400",
    accentColor: "#60a5fa",
  },
  {
    id: 2,
    title: "Core Banking Lite",
    shortDesc: "Microservice-based core banking API with account management and transaction flow.",
    description:
      "A lightweight core banking backend built with Spring Boot microservices. Features account creation by type (savings, current), balance inquiry, fund transfers, and transaction history. Secured with JWT and integrated with PostgreSQL. Designed with clean architecture principles — service, repository, and controller layers are clearly separated.",
    tags: ["Spring Boot", "PostgreSQL", "Microservices", "Java", "REST API", "Docker"],
    category: "backend",
    status: "in-progress",
    featured: false,
    githubLink: "https://github.com/PhornSydeth",
    gradient: "from-purple-500 to-pink-500",
    accentColor: "#a78bfa",
  },
  {
    id: 3,
    title: "Developer Portfolio",
    shortDesc: "A modern, animated personal portfolio built with React, TypeScript & Tailwind CSS.",
    description:
      "This very portfolio — a fully responsive, dark-mode-enabled personal portfolio site built with React 19, TypeScript, Tailwind CSS v4 and Framer Motion. Features smooth section animations, a theme toggle, contact form powered by EmailJS, and a clean glassmorphism design system.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "EmailJS"],
    category: "frontend",
    status: "in-progress",
    featured: false,
    githubLink: "https://github.com/PhornSydeth",
    demoLink: "https://sydethportfolio.netlify.app",
    gradient: "from-orange-400 to-amber-400",
    accentColor: "#fb923c",
  },
];
