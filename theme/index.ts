// src/theme/index.ts
import { createTheme } from "@mui/material/styles";
import { components } from "./components";
import {typography} from "./typography";

export const theme = createTheme({
  typography,
  components,
});