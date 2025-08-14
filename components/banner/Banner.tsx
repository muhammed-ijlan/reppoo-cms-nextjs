"use client";
import React, { useEffect, useRef } from "react";
import AppLayout from "./AppScreenLayout";
import { Box, Container, Stack } from "@mui/material";
import circles from "@/public/shapes/banner-circles.png";
import ContentSection from "./ContentSection";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  const bannerRef = useRef(null);
  const circlesRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(circlesRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.from(".app-layout", {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });

      // gsap.from(".content-section", {
      //   scrollTrigger: {
      //     trigger: ".content-section",
      //     start: "top 80%",
      //     toggleActions: "play none none reverse",
      //   },
      //   opacity: 0,
      //   y: 50,
      //   duration: 1,
      //   ease: "power3.out",
      // });
    }, bannerRef);

    return () => ctx.revert();
  }, []);

  return (
    <Stack
      ref={bannerRef}
      width={"100%"}
      sx={{ background: "#F9F9F9", height: { xs: "auto", md: "1100px" } }}
    >
      <Container maxWidth="lg">
        <Stack
          alignItems="center"
          justifyContent="center"
          position={"relative"}
        >
          <Box
            ref={circlesRef}
            component="img"
            src={circles.src}
            sx={{ width: { xs: "100vw", md: "80%" } }}
          />
          <Stack position="absolute" sx={{ top: "0px" }} className="app-layout">
            <AppLayout />
          </Stack>
          <div className="content-section">
            <ContentSection />
          </div>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Banner;
