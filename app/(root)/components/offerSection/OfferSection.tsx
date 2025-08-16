"use client";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import shape from "@/public/shapes/banner-circles2.png";
import appStoreIcon from "@/public/images/apple.png";
import googlePlayIcon from "@/public/images/playstore.png";
import docIcon from "@/public/shapes/docIcon.png";
import chatIcon from "@/public/shapes/chatIcon.png";
import msgIcon from "@/public/shapes/msgIcon.png";
import thumbIcon from "@/public/shapes/thumbIcon.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OfferSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".offer-content", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".icon-left", {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });

      gsap.from(".icon-right", {
        opacity: 0,
        x: 50,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });

      gsap.to(".floating-icon", {
        y: "+=15",
        repeat: -1,
        yoyo: true,
        duration: 2.5,
        ease: "power1.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Stack
      my={{ xs: 0, md: 10 }}
      sx={{
        height: { xs: "auto", md: "100vh" },
        width: "100%",
        display: "flex",
        position: "relative",
      }}
      ref={sectionRef}
    >
      <Container maxWidth={"lg"}>
        <Box
          component={"img"}
          src={shape.src}
          alt="img"
          sx={{
            position: "absolute",
            width: "90%",
            height: { xs: "100%", md: "100vh" },
            objectFit: "cover",
            zIndex: -1,
            top: "0%",
          }}
        />
        <Stack
          sx={{ width: "100%", height: { xs: "100vh", md: "100vh" } }}
          justifyContent="center"
          alignItems="center"
          position={"relative"}
        >
          <Stack justifyContent="center" alignItems="center">
            <Box
              component={"img"}
              src={docIcon.src}
              alt="icon"
              width={"100px"}
              height={"100px"}
              className="icon-left floating-icon"
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
              className="icon-left floating-icon"
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
              className="icon-right floating-icon"
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
              className="icon-right floating-icon"
              sx={{
                position: "absolute",
                top: "70%",
                right: "15%",
              }}
            />
          </Stack>
          <Stack
            gap={3}
            alignItems={"center"}
            textAlign="center"
            width={{ xs: "100%", md: "802px" }}
            className="offer-content"
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
                textAlign: "center !important",
              }}
            >
              Get 50% off your first 3 months when you start your trial today!
            </Typography>
            <Stack direction={"row"} gap={3} mt={{ xs: 0, md: 3 }}>
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
