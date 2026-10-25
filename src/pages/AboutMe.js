import React from "react";
import { Box, Container, Link, Typography } from "@mui/material";
import { brand } from "../theme";
import PageHeader from "../components/PageHeader";
import { socials } from "../components/SocialLinks";
import Runner from "../components/Runner";

function AboutMe() {
  return (
    <>
      <Container maxWidth="md">
        <PageHeader title="About Me" />
        <Typography sx={{ color: brand.muted, fontSize: "1.05rem", lineHeight: 1.8 }}>
          Outside of work, I love staying active. I am a keen runner, I attend a run club, and I enjoy taking
          part in long-distance races. I’m big on self-care and believe in taking time to look after myself,
          whether that’s getting outside, switching off with a podcast, or spending time on hobbies I enjoy.
          I’ve always had a genuine passion for tech, not just as a job, but as something I really enjoy
          learning about. I love working on side projects and going to tech events like Northern Ireland
          Developers Conference or Women Techmakers, where I get to meet like minded people and pick up new
          ideas.
        </Typography>

        <Typography variant="h3" component="h2" sx={{ fontSize: "1.5rem", color: brand.plum, mt: 6, mb: 2 }}>
          Reach Out!
        </Typography>
        <Box display="flex" flexDirection="column" gap={1.5}>
          {socials.map(({ label, href, Icon, handle }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener"
              sx={{ display: "inline-flex", alignItems: "center", gap: 1.5, color: brand.plum, width: "fit-content" }}
            >
              <Icon fontSize="small" />
              {handle}
            </Link>
          ))}
        </Box>
      </Container>
      <Runner />
    </>
  );
}

export default AboutMe;
