import { createTheme } from "@mui/material/styles";
import { manrope } from "./theme/fonts";

const theme = createTheme({
  typography: {
    fontFamily: manrope.style.fontFamily, 
    h1: { fontWeight: 700, fontSize: "2.5rem" },
    h2: { fontWeight: 600, fontSize: "2rem" },
    body1: { fontWeight: 400, fontSize: "1rem" },
  },
  palette: {
    primary: { main: "#1976d2" },
    secondary: { main: "#9c27b0" },
  },
});

export default theme;
