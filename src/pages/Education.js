import React from "react";
import { Container } from "@mui/material";
import PageHeader from "../components/PageHeader";
import CardComponent from "./Card";

const education = [
  {
    title: "MSc Software Development",
    shortDescription: "Queen’s University Belfast · Commendation",
    meta: "Sept 2023 – Sept 2024",
    bullets: [
      "Programming: Focused on Java, including Object-Oriented Programming principles.",
      "Computing Foundations: Provided a strong theoretical basis in computing.",
      "Databases: Used MySQL for effective database design and management.",
      "Software Engineering: Covered agile methodologies and project planning techniques.",
      "Web Development: Developed a Full-Stack web application using JavaScript frameworks (Node.js and Express.js) and HTML and CSS.",
      "Individual Software Development Project: Developed a full-stack web mental health tracking application using React.js, Node.js and Express.js.",
    ],
  },
  {
    title: "BEng (Hons.) Civil Engineering",
    shortDescription: "Queen’s University Belfast · 2:1",
    meta: "Sept 2019 – May 2023",
    bullets: [
      "Modules: Design and Communications, Project Management and Engineering Data, Mathematics and Coding, Project, Structures and Hydraulics.",
      "Dissertation: Developed a MATLAB predictive analytics platform that takes recorded tidal data from Strangford Lough and predicts the annual energy that could be produced using a tidal stream-energy turbine.",
      "Completed a placement year (between Stages 2 and 3) at RPS Group, Belfast, as part of the flood risk management team.",
    ],
  },
];

const awards = {
  title: "Awards and Acknowledgements",
  bullets: [
    "Degree Plus Award 2023- Awarded for my contribution to university societies, along with volunteering at the Queen’s Sport Active Campus Couch to 5k program. Within this, I developed leadership and coaching skills and completed a LIRF (Leadership In Running Fitness) qualification.",
    "Stage 2 Course Representative and Programming Module Representative – Involved listening to issues or suggestions from my peers and professionally relaying this information to senior lecturers.",
    "Member of the Queen’s Computing Society",
    "Secretary of Queen’s Engineering Society.",
    "Vice President and Social Secretary of the Queen’s Athletics Club.",
    "Organiser of the IUAA cross country 2024 and Queen’s 5k 2024.",
  ],
};

function Education() {
  return (
    <Container maxWidth="md">
      <PageHeader title="Education" />
      {[...education, awards].map((item) => (
        <CardComponent key={item.title} {...item} />
      ))}
    </Container>
  );
}

export default Education;
