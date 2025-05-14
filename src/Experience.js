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

function Experience() {
  const navigate = useNavigate();
  const muiTheme = useTheme();
  const isSmallScreen = useMediaQuery(muiTheme.breakpoints.down("sm"));

  //In future for other experiences, just add a new state!
  const [expandedCard1, setExpandedCard1] = useState(!isSmallScreen);
  const [expandedCard2, setExpandedCard2] = useState(!isSmallScreen);

  useEffect(() => {
    if (!isSmallScreen) {
      setExpandedCard1(true);
      setExpandedCard2(true);
    } else {
      setExpandedCard1(false);
      setExpandedCard2(false);
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
            Experience
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
                  Technology Consultant at EY
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ color: theme.palette.contrastText }}
                >
                  September 2024 – Present
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
                  - Contributing to the System Engineering and Integration team,
                  collaborating with colleagues across Ireland and broader
                  Europe to deliver scalable solutions.
                  <br />
                  - Working across the full stack in Java Spring Boot, Oracle
                  SQL and React, building and maintaining backend services and
                  frontend components
                  <br />
                  - Responsible for release management to the testing
                  environment, deploying the application using Microsoft Azure
                  <br />
                  - Operate in an Agile Scrum environment, using Azure DevOps to
                  manage tasks, sprints, and deployments.
                  <br />- Collaborated with fellow graduates on a thought
                  leadership project, researching Generative AI and its
                  applications in software development, and presented findings
                  to senior leadership.
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
                  Trainee Engineer at RPS Group
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ color: theme.palette.contrastText }}
                >
                  July 2021 - June 2022
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
                  - Utilised ArcGIS geographical information system and quickly
                  gained confidence in this software. <br />
                  - Guided colleagues who were less familiar with ArcGIS.
                  <br />
                  - Balanced multiple projects with tight deadlines, developing
                  effective time management skills.
                  <br />- Collaborated with colleagues both online and in-person
                  to foster a cohesive team dynamic.
                </Typography>
              </Box>
            )}
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default Experience;
