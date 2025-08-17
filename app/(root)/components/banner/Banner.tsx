"use client";
import React, { useEffect, useRef, useState } from "react";
import AppLayout from "./AppScreenLayout";
import { Box, Container, Stack } from "@mui/material";
import circles from "@/public/shapes/banner-circles.png";
import ContentSection from "./ContentSection";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import api from "@/app/lib/axiosInstance";

gsap.registerPlugin(ScrollTrigger);

interface HeroData {
  _id: string;
  title: string;
  subtitle: string;
  leftImage: string;
  rightImage: string;
  mainImage: string;
}

const Banner = () => {
  const bannerRef = useRef(null);
  const circlesRef = useRef(null);
  const [data, setData] = useState<HeroData | null>(null);

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const res = await api.get("/public/hero");
        if (res.data.success) {
          setData(res.data.data);
        }
      } catch (err) {
        console.error("Failed to fetch Hero images:", err);
      }
    };
    fetchHero();
  }, []);

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
    }, bannerRef);

    return () => ctx.revert();
  }, []);

  return (
    <Stack
      ref={bannerRef}
      width="100%"
      sx={{ background: "#F9F9F9", height: { xs: "auto", md: "1100px" } }}
    >
      <Container maxWidth="lg">
        <Stack alignItems="center" justifyContent="center" position="relative">
          <Box
            ref={circlesRef}
            component="img"
            src={circles.src}
            sx={{ width: { xs: "100vw", md: "80%" } }}
          />

          {!data ? (
            <div>Loading...</div>
          ) : (
            <>
              <Stack
                position="absolute"
                sx={{ top: "0px" }}
                className="app-layout"
              >
                <AppLayout data={data} />
              </Stack>
              <div className="content-section">
                <ContentSection data={data} />
              </div>
            </>
          )}
        </Stack>
      </Container>
    </Stack>
  );
};

export default Banner;
