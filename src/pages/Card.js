import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Collapse,
  Link,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GitHubIcon from "@mui/icons-material/GitHub";
import { brand } from "../theme";

function CardComponent(props) {
  const { title, shortDescription, meta, description, bullets, isSmallScreen: propIsSmallScreen } = props;
  const github = props.github || props.repoLink;
  const muiTheme = useTheme();
  const mediaIsSmallScreen = useMediaQuery(muiTheme.breakpoints.down("sm"));
  const isSmallScreen = typeof propIsSmallScreen === "boolean" ? propIsSmallScreen : mediaIsSmallScreen;
  const [expanded, setExpanded] = useState(false);
  const hasBody = Boolean(description || bullets || github);
  const collapsible = isSmallScreen && hasBody;

  return (
    <Box
      sx={{
        py: { xs: 3, sm: 4 },
        borderTop: `1px solid ${brand.border}`,
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
        gap={2}
        onClick={collapsible ? () => setExpanded(!expanded) : undefined}
        sx={{ cursor: collapsible ? "pointer" : "default" }}
      >
        <Box>
          <Typography variant="h6" component="h2" sx={{ color: brand.ink }}>
            {title}
          </Typography>
          {shortDescription && (
            <Typography sx={{ color: brand.pink, fontWeight: 500 }}>{shortDescription}</Typography>
          )}
          {meta && (
            <Typography variant="body2" sx={{ color: brand.muted, mt: 0.5 }}>
              {meta}
            </Typography>
          )}
        </Box>
        {collapsible && (
          <IconButton sx={{ color: brand.plum, mt: -0.5 }} aria-label="toggle details" aria-expanded={expanded}>
            <ExpandMoreIcon
              sx={{ transform: expanded ? "rotate(180deg)" : "none", transition: "transform 0.3s" }}
            />
          </IconButton>
        )}
      </Box>

      {hasBody && (
        <Collapse in={!isSmallScreen || expanded} timeout="auto">
          {description && (
            <Typography variant="body2" sx={{ color: brand.muted, lineHeight: 1.7, mt: 2 }}>
              {description}
            </Typography>
          )}
          {bullets && (
            <Box component="ul" sx={{ mt: 2, mb: 0, pl: 2.5, color: brand.muted }}>
              {bullets.map((b) => (
                <Typography key={b} component="li" variant="body2" sx={{ mb: 0.75, lineHeight: 1.7 }}>
                  {b}
                </Typography>
              ))}
            </Box>
          )}
          {github && (
            <Link
              href={github}
              target="_blank"
              rel="noopener"
              aria-label={title + " GitHub Repository"}
              sx={{ display: "inline-flex", alignItems: "center", gap: 0.75, mt: 2, color: brand.plum, fontWeight: 500 }}
            >
              <GitHubIcon fontSize="small" /> View on GitHub
            </Link>
          )}
        </Collapse>
      )}
    </Box>
  );
}

export default CardComponent;
