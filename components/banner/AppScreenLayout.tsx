import { Box, Stack } from "@mui/material";
import React from "react";

import phone from "@/public/images/phone-app.png";
import leftScreen from "@/public/images/left-screen.png";
import rightScreen from "@/public/images/right-screen.png";


import Image from "next/image";

const AppScreenLayout = () => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Stack
        mt={20}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{
          width: "100%",
          height: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Stack
          sx={{
            width: "400px",
            height: "481.97px",
            position: "relative",
            borderRadius: "50%",
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "80%",
              backgroundColor: "#70D9FF",
              transform: "rotate(-23.64deg)",
              filter: "blur(276.4px)",
              borderRadius: "50%",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 1,
            }}
          />

          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 2,
            }}
          >
            <Image
              src={leftScreen}
              alt="image"
              width={418}
              style={{ objectFit: "contain" }}
            />
          </Box>
        </Stack>
      </Stack>
      <Image
        style={{ zIndex: 888 }}
        src={phone}
        alt="image"
        width={512}
        height={577}
      />
      <Stack
         mt={20}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{
          width: "100%",
          height: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Stack
          sx={{
            width: "400px",
            height: "481.97px",
            position: "relative",
            borderRadius: "50%",
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "80%",
              backgroundColor: "#FFE5AA",
              transform: "rotate(-23.64deg)",
              filter: "blur(276.4px)",
              borderRadius: "50%",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 1,
            }}
          />

          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 2,
            }}
          >
            <Image
              src={rightScreen}
              alt="image"
              width={418}
              style={{ objectFit: "contain" }}
            />
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default AppScreenLayout;
