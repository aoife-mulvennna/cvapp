import React, { useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Box, Container, Link } from "@mui/material";
import { brand } from "../theme";
import StarField from "./StarField";

function Layout({ children }) {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <StarField />
      <Box component="main" sx={{ position: "relative", zIndex: 1, minHeight: "100vh", pb: 8 }}>
        {!isHome && (
          <Container maxWidth="md" sx={{ pt: { xs: 3, md: 5 } }}>
            <Link
              component={RouterLink}
              to="/"
              underline="hover"
              sx={{ color: brand.muted, "&:hover": { color: brand.plum } }}
            >
              ← Home
            </Link>
          </Container>
        )}
        {children}
      </Box>
    </>
  );
}

export default Layout;
