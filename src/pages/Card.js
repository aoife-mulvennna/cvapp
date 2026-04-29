import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  IconButton,
  useMediaQuery,
  useTheme,
  Link,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import theme from "../theme";
import GitHubIcon from "@mui/icons-material/GitHub";

function CardComponent(props) {
  const { title, shortDescription, description, github, isSmallScreen: propIsSmallScreen } = props;
  const muiTheme = useTheme();
  const mediaIsSmallScreen = useMediaQuery(muiTheme.breakpoints.down("sm"));
  const isSmallScreen = typeof propIsSmallScreen === "boolean" ? propIsSmallScreen : mediaIsSmallScreen;
  const [expanded, setExpanded] = useState(false);

  return (
    <Card
      sx={{
        mb: 4,
        backgroundColor: theme.palette.light,
        position: "relative",
      }}
    >
      <CardContent>
        {!isSmallScreen && github && (
          <IconButton
            component={Link}
            href={github}
            target="_blank"
            rel="noopener"
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: theme.palette.dark,
            }}
            aria-label={title + " GitHub Repository"}
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
        )}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography variant="h6" sx={{ color: theme.palette.dark, fontWeight: "bold" }}>
              {title}
            </Typography>

            <Typography variant="subtitle2" sx={{ color: theme.palette.contrastText }}>
              {shortDescription}
            </Typography>
          </Box>
          {isSmallScreen && (
            <IconButton
              onClick={() => setExpanded(!expanded)}
              sx={{ color: theme.palette.dark }}
              aria-label="toggle details"
            >
              <ExpandMoreIcon
                sx={{
                  transform: expanded ? "rotate(180deg)" : "none",
                  transition: "transform 0.3s",
                }}
              />
            </IconButton>
          )}
        </Box>
        {(!isSmallScreen || expanded) && (
          <Box mt={2}>
            <Typography variant="body2" sx={{ mb: 1 }}>
              {description}
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}

export default CardComponent;