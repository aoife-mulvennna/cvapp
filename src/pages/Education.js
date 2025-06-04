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
import theme from "../theme";
import { useNavigate } from "react-router-dom";

function Education() {
  const navigate = useNavigate();

  const muiTheme = useTheme();
  const isSmallScreen = useMediaQuery(muiTheme.breakpoints.down("sm"));

  const [expandedCard1, setExpandedCard1] = useState(!isSmallScreen);
  const [expandedCard2, setExpandedCard2] = useState(!isSmallScreen);
const [expandedCard3, setExpandedCard3] = useState(!isSmallScreen);
  useEffect(() => {
    if (!isSmallScreen) {
      setExpandedCard1(true);
      setExpandedCard2(true);
      setExpandedCard3(true);
    } else {
      setExpandedCard1(false);
      setExpandedCard2(false);
      setExpandedCard3(false);
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
            Education
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
                  MSc Software Development from Queen’s University Belfast with
                  Commendation
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ color: theme.palette.contrastText }}
                >
                  Sept 2023 – Sept 2024
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
                  - Programming: Focused on Java, including Object-Oriented
                  Programming principles. <br />
                  - Computing Foundations: Provided a strong theoretical
                  basis in computing. <br />
                  - Databases: Used MySQL for effective database design and
                  management. <br />
                  - Software Engineering: Covered agile methodologies and
                  project planning techniques. <br />
                  - Web Development: Developed a Full-Stack web application
                  using JavaScript frameworks (Node.js and Express.js) and HTML
                  and CSS. <br />
                  - Individual Software Development Project: Developed a
                  full-stack web mental health tracking application using
                  React.js, Node.js and Express.js. <br />
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
                  BEng (Hons.) Civil Engineering from Queen’s University Belfast
                  with 2:1
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ color: theme.palette.contrastText }}
                >
                  Sept 2019 – May 2023
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
                  - Modules: Design and Communications, Project Management and
                  Engineering Data, Mathematics and Coding, Project, Structures
                  and Hydraulics. <br />
                  - Dissertation: Developed a MATLAB predictive analytics
                  platform that takes recorded tidal data from Strangford Lough
                  and predicts the annual energy that could be produced using a
                  tidal stream-energy turbine. <br />- Completed a placement
                  year (between Stages 2 and 3) at RPS Group, Belfast, as part
                  of the flood risk management team.
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
                  Awards and Acknowledgements
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
                  - Degree Plus Award 2023- Awarded for my contribution to
                  university societies, along with volunteering at the Queen’s
                  Sport Active Campus Couch to 5k program. Within this, I
                  developed leadership and coaching skills and completed a LIRF
                  (Leadership In Running Fitness) qualification. <br />
                  - Stage 2 Course Representative and Programming Module
                  Representative – Involved listening to issues or suggestions
                  from my peers and professionally relaying this information to
                  senior lecturers. <br />
                  - Member of the Queen’s Computing Society <br />
                  - Secretary of Queen’s Engineering Society.
                  <br />
                  - Vice President and Social Secretary of the Queen’s Athletics
                  Club.
                  <br />- Organiser of the IUAA cross country 2024 and Queen’s
                  5k 2024.
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
