import React from "react";
import { Typography } from "@mui/material";
import { brand } from "../theme";

function PageHeader({ title }) {
  return (
    <Typography
      variant="h2"
      component="h1"
      sx={{ fontSize: { xs: "2rem", md: "2.5rem" }, color: brand.plum, pt: { xs: 4, md: 6 }, pb: 3 }}
    >
      {title}
    </Typography>
  );
}

export default PageHeader;
