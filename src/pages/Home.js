import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Container, Link, Typography } from "@mui/material";
import { brand } from "../theme";
import SocialLinks from "../components/SocialLinks";

const sections = [
  { label: "Experience", to: "/Experience" },
  { label: "Education", to: "/Education" },
  { label: "Projects", to: "/Projects" },
  { label: "About Me", to: "/AboutMe" },
];

function Home() {
  return (
    <Container maxWidth="md" sx={{ pt: { xs: 8, md: 14 } }}>
      <Typography variant="h1" sx={{ fontSize: { xs: "2.2rem", md: "3rem" }, color: brand.plum }}>
        Aoife Mulvenna
      </Typography>
      <Typography sx={{ fontSize: "1.1rem", color: brand.muted, mt: 1 }}>
        Junior Software Engineer at Just Eat Takeaway.com
      </Typography>

      <Box component="nav" sx={{ mt: 6, borderTop: `1px solid ${brand.border}` }}>
        {sections.map((s) => (
          <Link
            key={s.to}
            component={RouterLink}
            to={s.to}
            underline="none"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              py: 2.5,
              fontSize: { xs: "1.25rem", md: "1.5rem" },
              fontWeight: 500,
              color: brand.ink,
              borderBottom: `1px solid ${brand.border}`,
              transition: "color 0.2s, padding 0.2s",
              "&:hover": { color: brand.pink, pl: 1 },
            }}
          >
            {s.label}
            <span aria-hidden>→</span>
          </Link>
        ))}
      </Box>

      <Box mt={4} ml={-1}>
        <SocialLinks />
      </Box>
    </Container>
  );
}

export default Home;
