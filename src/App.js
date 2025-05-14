import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Education from './Education';
import Home from './Home';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/Experience" element={<div>Experience</div>} />
          <Route path="/AboutMe" element={<div>About Me</div>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
