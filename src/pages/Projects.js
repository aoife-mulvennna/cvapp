import React from "react";
import { Container, useMediaQuery, useTheme } from "@mui/material";
import PageHeader from "../components/PageHeader";
import CardComponent from "./Card";

function Projects() {
  const muiTheme = useTheme();
  const isSmallScreen = useMediaQuery(muiTheme.breakpoints.down("sm"));

  const projectData = {
    flashcards: {
      title: "Flashcards",
      shortDescription: "Full Stack Web App",
      description:
        "Developing a full-stack flashcard learning platform using Java Spring Boot, Angular 18, and PostgreSQL. Designing relational data models in PostgreSQL to efficiently manage flashcards, subject decks, and user progress. Containerising the PostgreSQL database using Docker Compose to provide a consistent and reproducible development environment. Implementing JWT authentication with Spring Security and Angular route guards. Built with purpose to study software concepts.",
      repoLink: "https://github.com/aoife-mulvennna/flashcards",
    },
    taskManager: {
      title: "Task Manager",
      shortDescription: "Full Stack Web App",
      description:
        "Developed a full-stack task manager using React, Spring Boot, and an H2 database. Designed an intuitive UI with Material UI and custom priority indicators using icons. Built and consumed RESTful APIs to manage tasks with real-time updates. Focused on clean code structure and user-friendly functionality.",
      repoLink: "https://github.com/aoife-mulvennna/taskmanager",
    },
    cvApp: {
      title: "aoifemulvenna.com",
      shortDescription: "Front End Web App",
      description:
        "This application is designed using React and the React MUI Library. This was my first publicly deployed personal project, hosted using GitHub Pages.",
      repoLink: "https://github.com/aoife-mulvennna/cvapp",
    },
    studentPulse: {
      title: "Student Pulse",
      shortDescription: "Full-Stack Wellness Web App",
      description:
        "Designed and developed a web application to monitor student wellness, providing personalised insights for students and analytical tools for staff. The application was built using a React frontend and Express.js backend with a MySQL database. Built with a focus on usability, security, and scalability. Used Tailwind CSS to create a clean, responsive interface and accelerate development with utility-first styling.",
      repoLink: "https://github.com/aoife-mulvennna/studentpulse",
    },
    tradecard: {
      title: "Tradecard",
      shortDescription: "Full-Stack Web App",
      description:
        "Developed a full-stack CRUD platform with user authentication, data filtering, and collection management. Built a normalised MySQL database and ensured secure user data handling. Built the backend with Node.js and Express, and developed the frontend using HTML, JavaScript, and EJS (Embedded JavaScript Templates). Delivered a responsive interface using Bootstrap CSS and templated views, with version control via GitHub.",
      repoLink: "https://github.com/aoife-mulvennna/tradecard",
    },
    saveOurPlanet: {
      title: "Save our Planet",
      shortDescription: "Java Board Game Project",
      description:
        "Built a multiplayer console-based board game using object-oriented programming in Java. Focused on clean, modular code and user-friendly design within a team-based Agile workflow. Contributed as part of a team to planning, implementation, and testing using GitLab and Jira.",
      repoLink: "https://github.com/aoife-mulvennna/saveourplanet",
    },
    tidalEnergyTool: {
      title: "Tidal Energy Predictive Analysis Tool",
      shortDescription: "MATLAB Data Analysis Project",
      description:
        "Developed a predictive analysis tool using MATLAB, to process large environmental datasets from tidal measurements and predict the energy output of a vertical-axis tidal turbine. The project involved creating simulations to calculate Annual Energy Predictions (AEP) for the tidal turbine, incorporating turbulence effects to enhance accuracy.",
      repoLink: "",
    },
  };

  return (
    <Container maxWidth="md">
      <PageHeader title="Projects" />
      {Object.keys(projectData).map((key) => (
        <CardComponent key={key} {...projectData[key]} isSmallScreen={isSmallScreen} />
      ))}
    </Container>
  );
}

export default Projects;
