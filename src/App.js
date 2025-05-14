import "./App.css";
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Education from "./Education";
import Experience from "./Experience";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Home from "./Home";
import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/AboutMe" element={<AboutMe />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
