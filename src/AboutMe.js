import React from "react";
import Button from "@mui/material/Button";
import theme from "./theme";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  IconButton,
  Link,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function AboutMe() {
  const navigate = useNavigate();

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
          ></Typography>
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
            <Typography
              variant="h6"
              sx={{ color: theme.palette.dark, fontWeight: "bold" }}
              textAlign="center"
            >
              A bit about me
            </Typography>

            <Typography variant="body1" sx={{ mt: 1 }}>
              Outside of work, I love staying active. I am a keen runner and
              enjoy taking part in long-distance races. Most weekends I take my
              dog out for walks, which is one of my favourite ways to unwind.
              I’m big on self-care and believe in taking time to look after
              myself, whether that’s getting outside, switching off with a
              podcast, or spending time on hobbies I enjoy. I’ve always had a
              genuine passion for tech, not just as a job, but as something I
              really enjoy learning about. I love working on side
              projects and going to tech events like NIDC, where I get to meet
              like minded people and pick up new ideas.
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ mb: 4, backgroundColor: theme.palette.light }}>
          <CardContent>
            <Box textAlign="center">
              <Typography
                variant="h6"
                sx={{
                  color: theme.palette.dark,
                  fontWeight: "bold",
                  mb: 2,
                }}
              >
                Reach Out!
              </Typography>

              <Box display="flex" justifyContent="center" gap={4}>
                <IconButton
                  component={Link}
                  href="mailto:aoife.mulvenna10@gmail.com"
                  target="_blank"
                  rel="noopener"
                  sx={{ color: theme.palette.dark }}
                  aria-label="Email"
                >
                  <EmailIcon fontSize="large" />
                </IconButton>

                <IconButton
                  component={Link}
                  href="https://www.linkedin.com/in/aoife-mulvenna/"
                  target="_blank"
                  rel="noopener"
                  sx={{ color: theme.palette.dark }}
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon fontSize="large" />
                </IconButton>

                <IconButton
                  component={Link}
                  href="https://github.com/aoife-mulvennna"
                  target="_blank"
                  rel="noopener"
                  sx={{ color: theme.palette.dark }}
                  aria-label="GitHub"
                >
                  <GitHubIcon fontSize="large" />
                </IconButton>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default AboutMe;
