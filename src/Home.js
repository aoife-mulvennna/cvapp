import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import theme from './theme';

function Home() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/Education');
  };

  return (
    <div className="App" style={{ backgroundColor: theme.palette.main }}>
      <header className="App-header">
        <div className="title" style={{ color: theme.palette.contrastText, fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', margin: '20px 0' }}>
          Aoife Mulvenna - Software Engineer
        </div>
        
      </header>

      <Button variant="contained" sx={{
        backgroundColor: theme.palette.dark,
        color: theme.palette.light,
        '&:hover': {
          backgroundColor: theme.palette.contrastText,
        },
      }} onClick={handleNavigation}>
        Education
      </Button>

      <Button variant="contained" sx={{
        backgroundColor: theme.palette.dark,
        color: theme.palette.light,
        '&:hover': {
          backgroundColor: theme.palette.contrastText,
        },
      }} onClick={handleNavigation}>
        Experience
      </Button>

      <Button variant="contained" sx={{
        backgroundColor: theme.palette.dark,
        color: theme.palette.light,
        '&:hover': {
          backgroundColor: theme.palette.contrastText,
        },
      }}onClick={handleNavigation}>
        About Me
      </Button>
    </div>
  );
}

export default Home;
