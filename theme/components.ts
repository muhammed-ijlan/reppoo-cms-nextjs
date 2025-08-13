
import type { Theme, Components } from "@mui/material/styles";
import { manrope } from './fonts';


const MuiContainer: Components<Theme>["MuiContainer"] = {
  defaultProps: {
    maxWidth: "xl",
    disableGutters: true,
  },
  styleOverrides: {
    maxWidthXs: {
      maxWidth: "444px",
      "@media (min-width: 600px)": {
        maxWidth: "444px",
      },
    },
    maxWidthSm: {
      maxWidth: "600px",
      "@media (min-width: 600px)": {
        maxWidth: "600px",
      },
    },
    maxWidthMd: {
      maxWidth: "900px",
      "@media (min-width: 900px)": {
        maxWidth: "900px",
      },
    },
    maxWidthLg: {
      width: "100%",
      maxWidth: "100%",

      // Extra small mobiles (≤ 360px)
      "@media (max-width: 360px)": {
        maxWidth: "320px",
      },

      // Small mobiles (361px–599px)
      "@media (min-width: 361px) and (max-width: 599px)": {
        maxWidth: "370px",
      },

      // Tablets / Small Devices (600px–899px)
      "@media (min-width: 600px) and (max-width: 899px)": {
         maxWidth: "700px",
      },

      // Medium Devices / Tablets (900px–1199px)
      "@media (min-width: 900px) and (max-width: 1199px)": {
        maxWidth: "900px",
      },

      // Large Devices / Desktops (1200px–1535px)
      "@media (min-width: 1200px) and (max-width: 1349px)": {
        maxWidth: "1200px",
      },
      // Large Devices / Desktops (1200px–1535px)
      "@media (min-width: 1350px) and (max-width: 1801px)": {
        maxWidth: "1350px",
      },

      
      "@media (min-width: 1801px) and (max-width: 1800px)": {
        maxWidth: "1350px",
      },


      // Extra Large Devices / Monitors (1536px–2499px)
      "@media (min-width: 1801px) and (max-width: 2499px)": {
        maxWidth: "1350px",
      },

      // Ultra-wide Screens (≥ 2500px)
      "@media (min-width: 2500px)": {
        maxWidth: "1600px",
      },
    },
    maxWidthXl: {
      width: "100%",
      maxWidth: "100%",

      // Extra small mobiles (≤ 360px)
     
      "@media (max-width: 360px)": {
        maxWidth: "320px",
      },

      // Small mobiles (361px–599px)
      "@media (min-width: 359px) and (max-width: 376px)": {
        maxWidth: "340px",
      },
      "@media (min-width: 377px) and (max-width: 599px)": {
        maxWidth: "370px",
      },

      // Tablets / Small Devices (600px–899px)
      "@media (min-width: 600px) and (max-width: 899px)": {
        maxWidth: "680px",
      },

      // Medium Devices / Tablets (900px–1199px)
      "@media (min-width: 900px) and (max-width: 1199px)": {
              maxWidth: "820px",
      },

      // Large Devices / Desktops (1200px–1535px)
      "@media (min-width: 1200px) and (max-width: 1380px)": {
        maxWidth: "1150px",
      },

      // Large Devices / Desktops (1200px–1535px)
      "@media (min-width: 1380px) and (max-width: 1535px)": {
        maxWidth: "1240px",
      },

      // Extra Large Devices / Monitors (1536px–2499px)
      "@media (min-width: 1536px) and (max-width: 1800px)": {
        maxWidth: "1240px",
      },

      "@media (min-width: 1801px) and (max-width: 2499px)": {
        maxWidth: "1240px",
      },

      // Ultra-wide Screens (≥ 2500px)
      "@media (min-width: 2500px)": {
        maxWidth: "1600px",
      },

      
    },
  },
};

const MuiButton: Components<Theme>["MuiButton"]= {
  styleOverrides: {
    root: {
      fontFamily: `${manrope.style.fontFamily} !important`,
      textTransform: 'none', 

    },
  },
};


export const components: Components<Omit<Theme, "components">> = {
  MuiContainer,
  MuiButton,
};


