import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  IconButton,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import theme from "./theme";
import { useNavigate } from "react-router-dom";

function Education() {
  const navigate = useNavigate();

  const muiTheme = useTheme();
  const isSmallScreen = useMediaQuery(muiTheme.breakpoints.down("sm"));

  const [expandedCard1, setExpandedCard1] = useState(!isSmallScreen);
  const [expandedCard2, setExpandedCard2] = useState(!isSmallScreen);
  const [expandedCard3, setExpandedCard3] = useState(!isSmallScreen);
  const [expandedCard4, setExpandedCard4] = useState(!isSmallScreen);
  useEffect(() => {
    if (!isSmallScreen) {
      setExpandedCard1(true);
      setExpandedCard2(true);
      setExpandedCard3(true);
      setExpandedCard4(true);
    } else {
      setExpandedCard1(false);
      setExpandedCard2(false);
      setExpandedCard3(false);
      setExpandedCard4(false);
    }
  }, [isSmallScreen]);

  const handleHomeNavigation = () => {
    navigate("/");
  };

  return (
    <div
      style={{
        backgroundColor: theme.palette.main,
        minHeight: "100vh",
        paddingTop: "40px",
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ mb: 4, textAlign: "center" }}>
          <Typography
            variant="h3"
            sx={{
              color: theme.palette.contrastText,
              fontWeight: "bold",
              mb: 2,
            }}
          >
            Aoife Mulvenna
          </Typography>
          <Typography
            variant="h5"
            sx={{ color: theme.palette.contrastText, mb: 4 }}
          >
            Software Projects
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: theme.palette.dark,
              color: theme.palette.light,
              "&:hover": {
                backgroundColor: theme.palette.contrastText,
              },
            }}
            onClick={handleHomeNavigation}
          >
            Home
          </Button>
        </Box>

        <Card sx={{ mb: 4, backgroundColor: theme.palette.light }}>
          <CardContent>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Typography
                  variant="h6"
                  sx={{ color: theme.palette.dark, fontWeight: "bold" }}
                >
                  Student Pulse
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ color: theme.palette.contrastText }}
                >
                  Full-Stack Wellness Web App
                </Typography>
              </Box>
              {isSmallScreen && (
                <IconButton
                  onClick={() => setExpandedCard1(!expandedCard1)}
                  sx={{ color: theme.palette.dark }}
                  aria-label="toggle details"
                >
                  <ExpandMoreIcon
                    sx={{
                      transform: expandedCard1 ? "rotate(180deg)" : "none",
                      transition: "transform 0.3s",
                    }}
                  />
                </IconButton>
              )}
            </Box>
            {(!isSmallScreen || expandedCard1) && (
              <Box mt={2}>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  - Designed and developed a web application to monitor student
                  wellness, providing personalised insights for students and
                  analytical tools for staff.
                  <br />- Built with a focus on usability, security, and
                  scalability. Used Tailwind CSS to create a clean, responsive
                  interface and accelerate development with utility-first
                  styling.
                </Typography>
              </Box>
            )}
          </CardContent>
        </Card>

        <Card sx={{ mb: 4, backgroundColor: theme.palette.light }}>
          <CardContent>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Typography
                  variant="h6"
                  sx={{ color: theme.palette.dark, fontWeight: "bold" }}
                >
                  Tradecard
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ color: theme.palette.contrastText }}
                >
                  Full-Stack Web App
                </Typography>
              </Box>
              {isSmallScreen && (
                <IconButton
                  onClick={() => setExpandedCard2(!expandedCard2)}
                  sx={{ color: theme.palette.dark }}
                  aria-label="toggle details"
                >
                  <ExpandMoreIcon
                    sx={{
                      transform: expandedCard2 ? "rotate(180deg)" : "none",
                      transition: "transform 0.3s",
                    }}
                  />
                </IconButton>
              )}
            </Box>
            {(!isSmallScreen || expandedCard2) && (
              <Box mt={2}>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  - Developed a full-stack trading platform with user
                  authentication, data filtering, and collection management.{" "}
                  <br />
                  - Built a normalised MySQL database and ensured secure user
                  data handling.
                  <br />- Delivered a responsive interface using Bootstrap and
                  templated views, with version control via GitHub.
                </Typography>
              </Box>
            )}
          </CardContent>
        </Card>

        <Card sx={{ mb: 4, backgroundColor: theme.palette.light }}>
          <CardContent>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Typography
                  variant="h6"
                  sx={{ color: theme.palette.dark, fontWeight: "bold" }}
                >
                  Save our Planet
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ color: theme.palette.contrastText }}
                >
                  Java Board Game Project
                </Typography>
              </Box>
              {isSmallScreen && (
                <IconButton
                  onClick={() => setExpandedCard3(!expandedCard3)}
                  sx={{ color: theme.palette.dark }}
                  aria-label="toggle details"
                >
                  <ExpandMoreIcon
                    sx={{
                      transform: expandedCard3 ? "rotate(180deg)" : "none",
                      transition: "transform 0.3s",
                    }}
                  />
                </IconButton>
              )}
            </Box>
            {(!isSmallScreen || expandedCard3) && (
              <Box mt={2}>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  - Built a multiplayer console-based board game using
                  object-oriented programming in Java. <br />
                  - Focused on clean, modular code and user-friendly design
                  within a team-based Agile workflow.
                  <br />- Contributed as part of a team to planning,
                  implementation, and testing using GitLab and Jira.
                </Typography>
              </Box>
            )}
          </CardContent>
        </Card>

        <Card sx={{ mb: 4, backgroundColor: theme.palette.light }}>
          <CardContent>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Typography
                  variant="h6"
                  sx={{ color: theme.palette.dark, fontWeight: "bold" }}
                >
                  Tidal Energy Predictive Analysis Tool
                </Typography>
              </Box>
              {isSmallScreen && (
                <IconButton
                  onClick={() => setExpandedCard4(!expandedCard4)}
                  sx={{ color: theme.palette.dark }}
                  aria-label="toggle details"
                >
                  <ExpandMoreIcon
                    sx={{
                      transform: expandedCard4 ? "rotate(180deg)" : "none",
                      transition: "transform 0.3s",
                    }}
                  />
                </IconButton>
              )}
            </Box>
            {(!isSmallScreen || expandedCard4) && (
              <Box mt={2}>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  - Developed a predictive analysis tool using MATLAB, to
                  process large environmental datasets from tidal measurements
                  and predict the energy output of a vertical-axis tidal
                  turbine. <br />- The project involved creating simulations to
                  calculate Annual Energy Predictions (AEP) for the tidal
                  turbine, incorporating turbulence effects to enhance accuracy.
                </Typography>
              </Box>
            )}
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default Education;
