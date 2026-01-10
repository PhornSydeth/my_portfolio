// src/data/projectData.ts

export interface ProjectData {
  id: number;
  title: string;
  description: string;
  githubLink: string;
  demoLink?: string; // Optional field for demo link
}

export const projects: ProjectData[] = [
  {
    id: 1,
    title: "Secure User Authentication & Role-Based Access System",
    description: "This project is a banking-oriented backend authentication system developed using Spring Boot and Spring Security, designed to follow industry-level security standards used in financial applications. The system provides secure user registration and login functionality with JWT-based authentication, ensuring stateless and scalable session management. User credentials are safely stored using password encryption, preventing plaintext password exposure and aligning with security best practices commonly required in banking systems. A role-based access control (RBAC) mechanism is implemented to manage authorization between different user roles such as USER and ADMIN. Each role has controlled access to protected APIs, simulating real-world banking permission models. The application uses Spring Data JPA for efficient ORM-based database interaction and MySQL for persistent data storage. The architecture is designed to be modular, secure, and extensible—making it suitable as a foundation for larger banking or financial systems.",
    githubLink: "github.com",
    demoLink: "https://projectone.live",
  },
  {
    id: 2,
    title: "Project Two",
    description: "A second project that showcases advanced state management and API integration. This description emphasizes the project's technical challenges and solutions.",
    githubLink: "github.com",
    demoLink: "https://projecttwo.live",
  },
  {
    id: 3,
    title: "Project Three",
    description: "The third project focuses on UI/UX design and responsive layouts. A brief overview of the design philosophy and technical implementation is provided here.",
    githubLink: "github.com",
  },
  // Add more projects here
];
