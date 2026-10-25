import React from "react";
import { Container } from "@mui/material";
import PageHeader from "../components/PageHeader";
import CardComponent from "./Card";

// To add a new role, add an entry to the top of this list.
const experience = [
  {
    title: "Junior Software Engineer",
    shortDescription: "Just Eat Takeaway.com",
    meta: "May 2026 – Present",
    bullets: [
      "Full-stack engineer working across backend services in Java and Kotlin and frontend applications in React and Vue.",
      "Builds features end to end, from backend services and AWS infrastructure through to the user interface.",
      "Works closely with designers to turn designs into working, user-facing features.",
      "Takes part in team discussions on technical approach, helping shape how features are planned and built.",
    ],
  },
  {
    title: "Associate Software Engineer",
    shortDescription: "Verint",
    meta: "August 2025 – April 2026",
    bullets: [
      "Built backend services in Java and Spring Boot, including API and webhook integrations with social platforms.",
      "Designed and managed MongoDB data models.",
      "Used AWS (S3, Secrets Manager, CloudWatch) and Kibana for file handling, configuration and monitoring.",
      "Contributed to CI/CD pipelines with GitHub Actions and Jenkins, deploying to Kubernetes.",
      "Owned features from design to production release and reviewed teammates' code.",
    ],
  },
  {
    title: "Technology Consultant",
    shortDescription: "EY",
    meta: "September 2024 – August 2025",
    bullets: [
      "Contributed to the System Engineering and Integration team, collaborating with colleagues across Ireland and broader Europe to deliver scalable solutions.",
      "Worked across the full stack in Java Spring Boot, Oracle SQL and React, building and maintaining backend services and frontend components",
      "Responsible for release management to the testing environment, deploying the application using Microsoft Azure",
      "Operated in an Agile Scrum environment, using Azure DevOps to manage tasks, sprints, and deployments.",
      "Collaborated with fellow graduates on a thought leadership project, researching Generative AI and its applications in software development, and presented findings to senior leadership.",
    ],
  },
  {
    title: "Trainee Engineer",
    shortDescription: "RPS Group",
    meta: "July 2021 – June 2022",
    bullets: [
      "Utilised ArcGIS geographical information system and quickly gained confidence in this software.",
      "Guided colleagues who were less familiar with ArcGIS.",
      "Balanced multiple projects with tight deadlines, developing effective time management skills.",
      "Collaborated with colleagues both online and in-person to foster a cohesive team dynamic.",
    ],
  },
];

function Experience() {
  return (
    <Container maxWidth="md">
      <PageHeader title="Experience" />
      {experience.map((job) => (
        <CardComponent key={job.title} {...job} />
      ))}
    </Container>
  );
}

export default Experience;
