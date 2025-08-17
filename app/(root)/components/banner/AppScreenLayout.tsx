"use client";
import { Box, Stack } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
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

const AppScreenLayout = ({ data }: { data: HeroData }) => {
  const leftRef = useRef(null);
  const phoneRef = useRef(null);
  const rightRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(leftRef.current, { opacity: 0, x: -100 });
      gsap.set(rightRef.current, { opacity: 0, x: 100 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "bottom center",
            scrub: false,
            once: true,
          },
        })
        .from(phoneRef.current, {
          opacity: 0,
          y: 80,
          duration: 1,
          ease: "power3.out",
        })
        .to(
          leftRef.current,
          { opacity: 1, x: 0, duration: 1, ease: "power3.out" },
          "-=0.5"
        )
        .to(
          rightRef.current,
          { opacity: 1, x: 0, duration: 1, ease: "power3.out" },
          "-=0.8"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const ScreenImage = ({
    imgSrc,
    bgColor,
  }: {
    imgSrc: string | null;
    bgColor: string;
  }) => {
    if (!imgSrc) return null;
    return (
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{ position: "relative", zIndex: 1 }}
      >
        <Stack
          sx={{
            width: { xs: 160, sm: 200, md: 400 },
            height: { xs: 190, sm: 240, md: 482 },
            position: "relative",
            borderRadius: "50%",
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "80%",
              backgroundColor: bgColor,
              transform: "rotate(-23.64deg)",
              filter: "blur(200px)",
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
              inset: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 2,
            }}
          >
            <Image
              src={imgSrc}
              alt="screen"
              width={418}
              height={500}
              style={{ objectFit: "contain", maxWidth: "100%", height: "auto" }}
            />
          </Box>
        </Stack>
      </Stack>
    );
  };

  return (
    <Box ref={sectionRef} sx={{ width: "100%" }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        sx={{ display: { xs: "none", md: "flex" } }}
      >
        <Stack ref={leftRef} mt={20}>
          <ScreenImage imgSrc={data.leftImage} bgColor="#70D9FF" />
        </Stack>
        <Box ref={phoneRef}>
          {data.mainImage && (
            <Image
              src={data.mainImage}
              alt="phone"
              width={512}
              height={577}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          )}
        </Box>
        <Stack ref={rightRef} mt={20}>
          <ScreenImage imgSrc={data.rightImage} bgColor="#FFE5AA" />
        </Stack>
      </Stack>

      <Stack
        direction="column"
        alignItems="center"
        spacing={3}
        sx={{ display: { xs: "flex", md: "none" }, mt: 4 }}
      >
        {data.mainImage && (
          <Box ref={phoneRef}>
            <Image
              src={data.mainImage}
              alt="phone"
              width={300}
              height={340}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>
        )}

        <Stack direction="row" spacing={2} justifyContent="center">
          <ScreenImage imgSrc={data.leftImage} bgColor="#70D9FF" />
          <ScreenImage imgSrc={data.rightImage} bgColor="#FFE5AA" />
        </Stack>
      </Stack>
    </Box>
  );
};

export default AppScreenLayout;
