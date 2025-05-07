
import './App.css';
import React from 'react';
import Button from '@mui/material/Button';
import theme from './theme';
import { ThemeProvider, useTheme } from '@mui/material/styles';
function App() {
 
  return (
    <ThemeProvider theme={theme}>
    <div className="App" style={{ backgroundColor: theme.palette.main }}>
      <header className="App-header">
        
        <p sx={{color: theme.palette.light}}>
        Aoife Mulvenna - Software Engineer
        </p>
    
      </header>
        <Button variant="contained" sx={{
            backgroundColor: theme.palette.dark,
            color: theme.palette.light,
            '&:hover': {
              backgroundColor: theme.palette.contrastText, 
              spacing: theme.layout.spacing,
            },
          }}>About Me</Button>
        <Button variant="contained" sx={{
            backgroundColor: theme.palette.dark,
            color: theme.palette.light,
            '&:hover': {
              backgroundColor: theme.palette.contrastText, 
            },
          }}>Education</Button>
        <Button variant="contained" sx={{
            backgroundColor: theme.palette.dark,
            color: theme.palette.light,
            '&:hover': {
              backgroundColor: theme.palette.contrastText, 
            },
          }}>Experience</Button>
    </div>
    </ThemeProvider>
  );
}

export default App; 

