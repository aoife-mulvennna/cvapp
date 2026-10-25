import { createTheme } from "@mui/material/styles";

export const brand = {
  pink: "#8C1A2C",
  plum: "#800020",
  ink: "#3D0A14",
  muted: "#5E1A2A",
  background: "#FFA8CC",
  border: "rgba(128, 0, 32, 0.2)",
};

const mono = '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace';

const theme = createTheme({
  palette: {
    primary: { main: brand.plum, contrastText: "#fff" },
    secondary: { main: brand.pink, contrastText: "#fff" },
    background: { default: brand.background, paper: "#fff" },
    text: { primary: brand.ink, secondary: brand.muted },
  },
  typography: {
    fontFamily: mono,
    h1: { fontWeight: 700, letterSpacing: "-0.03em" },
    h2: { fontWeight: 700, letterSpacing: "-0.03em" },
    h3: { fontWeight: 700 },
    h6: { fontWeight: 700, fontSize: "1.1rem", lineHeight: 1.4 },
    button: { textTransform: "none", fontWeight: 600 },
  },
});

export default theme;
