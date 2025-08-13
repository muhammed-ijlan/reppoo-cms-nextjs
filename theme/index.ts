import { createTheme } from '@mui/material/styles';
import { typography } from './typography';
import { manrope } from './fonts';

const theme = createTheme({
  typography: {
    ...typography,
    fontFamily: manrope.style.fontFamily,
  },
  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: '#9c27b0' },
  },
});

export default theme;
