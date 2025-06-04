import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import theme from "../theme";
import { Box, Typography, Container } from "@mui/material";
function Home() {
  const navigate = useNavigate();
  const buttonStyle = {
    backgroundColor: theme.palette.dark,
    color: theme.palette.light,
    fontWeight: "bold",
    padding: "10px 20px",
    "&:hover": {
      backgroundColor: theme.palette.contrastText,
      color: theme.palette.light,
    },
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor: theme.palette.main,
        minHeight: "100vh",
        paddingTop: "40px",
      }}
    >
      <Container maxWidth="sm" sx={{ textAlign: "center" }}>
        <Typography
          variant="h3"
          sx={{ color: theme.palette.contrastText, fontWeight: "bold", mb: 2 }}
        >
          Aoife Mulvenna
        </Typography>
        <Typography
          variant="h5"
          sx={{ color: theme.palette.contrastText, mb: 4 }}
        >
          Software Engineer
        </Typography>

        <Box display="flex" flexDirection="column" gap={2}>
          <Button
            variant="contained"
            sx={buttonStyle}
            onClick={() => navigate("/Experience")}
          >
            Experience
          </Button>
          <Button
            variant="contained"
            sx={buttonStyle}
            onClick={() => navigate("/Education")}
          >
            Education
          </Button>

          <Button
            variant="contained"
            sx={buttonStyle}
            onClick={() => navigate("/Projects")}
          >
            Software Projects
          </Button>
          <Button
            variant="contained"
            sx={buttonStyle}
            onClick={() => navigate("/AboutMe")}
          >
            About Me | Contact
          </Button>
        </Box>
      </Container>
    </div>
  );
}

export default Home;
