import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import shape from "@/public/shapes/banner-circles2.png";
import appStoreIcon from "@/public/images/apple.png";
import googlePlayIcon from "@/public/images/playstore.png";
import docIcon from "@/public/shapes/docIcon.png";
import chatIcon from "@/public/shapes/chatIcon.png";
import msgIcon from "@/public/shapes/msgIcon.png";
import thumbIcon from "@/public/shapes/thumbIcon.png";

const OfferSection = () => {
  return (
    <Stack
      my={10}
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        position: "relative",
      }}
    >
      <Container maxWidth={"lg"}>
        <Box
          component={"img"}
          src={shape.src}
          alt="img"
          sx={{
            position: "absolute",
            width: "90%",
            height: "100vh",
            objectFit: "cover",
            zIndex: -1,
            top: "0%",
          }}
        />
        <Stack
          sx={{ width: "100%", height: "100vh" }}
          justifyContent="center"
          alignItems="center"
          position={"relative"}
        >
          <Box
            component={"img"}
            src={docIcon.src}
            alt="icon"
            width={"100px"}
            height={"100px"}
            sx={{
              position: "absolute",
              top: "20%",
              left: "15%",
            }}
          />
          <Box
            component={"img"}
            src={chatIcon.src}
            alt="icon"
            width={"100px"}
            height={"100px"}
            sx={{
              position: "absolute",
              top: "70%",
              left: "15%",
            }}
          />
          <Box
            component={"img"}
            src={msgIcon.src}
            alt="icon"
            width={"100px"}
            height={"100px"}
            sx={{
              position: "absolute",
              top: "20%",
              right: "15%",
            }}
          />
          <Box
            component={"img"}
            src={thumbIcon.src}
            alt="icon"
            width={"100px"}
            height={"100px"}
            sx={{
              position: "absolute",
              top: "70%",
              right: "15%",
            }}
          />

          <Stack
            gap={3}
            alignItems={"center"}
            textAlign="center"
            width={"802px"}
          >
            <Typography
              variant="body1"
              sx={{
                fontWeight: 600,
                color: "#000000",
                textTransform: "uppercase",
              }}
            >
              Special Launch offer
            </Typography>
            <Typography
              variant="h1"
              sx={{
                textAlign: "center !important",
                fontWeight: "600 !important",
              }}
            >
              Your journey to better health starts now
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 600,
                color: "#777E90",
                textTransform: "uppercase",
              }}
            >
              Get 50% off your first 3 months when you start your trial today!
            </Typography>
            <Stack direction={"row"} gap={3} mt={3}>
              <Button
                startIcon={
                  <Box
                    component={"img"}
                    src={appStoreIcon.src}
                    width={"20px"}
                    sx={{ mr: "10px" }}
                    alt="Google Play"
                  />
                }
                sx={{
                  width: "auto",
                  px: 4,
                  height: "55px",
                  background: "#ffffff",
                  border: "#00000008",
                  borderRadius: "94px",
                  typography: "body1",
                  fontWeight: "700 !important",
                  color: "black",
                }}
              >
                Download
              </Button>
              <Button
                startIcon={
                  <Box
                    component={"img"}
                    src={googlePlayIcon.src}
                    width={"20px"}
                    sx={{ mr: "10px" }}
                    alt="Google Play"
                  />
                }
                sx={{
                  width: "166px",
                  height: "55px",
                  background: "#ffffff",
                  border: "#00000008",
                  borderRadius: "94px",
                  typography: "body1",
                  fontWeight: "700 !important",
                  color: "black",
                }}
              >
                Download
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default OfferSection;
