import React from "react";
import { Box, IconButton, Link } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { brand } from "../theme";

export const socials = [
  { label: "Email", href: "mailto:aoife.mulvenna10@gmail.com", Icon: EmailIcon, handle: "aoife.mulvenna10@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/aoife-mulvenna/", Icon: LinkedInIcon, handle: "in/aoife-mulvenna" },
  { label: "GitHub", href: "https://github.com/aoife-mulvennna", Icon: GitHubIcon, handle: "@aoife-mulvennna" },
];

function SocialLinks() {
  return (
    <Box display="flex" gap={1}>
      {socials.map(({ label, href, Icon }) => (
        <IconButton
          key={label}
          component={Link}
          href={href}
          target="_blank"
          rel="noopener"
          aria-label={label}
          sx={{ color: brand.plum }}
        >
          <Icon />
        </IconButton>
      ))}
    </Box>
  );
}

export default SocialLinks;
