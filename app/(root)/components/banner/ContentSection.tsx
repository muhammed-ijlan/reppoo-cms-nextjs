"use client";
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useRef } from "react";
import person1 from "@/public/images/person1.jpg";
import person2 from "@/public/images/person2.jpg";
import person3 from "@/public/images/person3.jpg";
import googlePlayIcon from "@/public/images/playstore.png";
import appStoreIcon from "@/public/images/apple.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface HeroData {
  _id: string;
  title: string;
  subtitle: string;
  leftImage: string;
  rightImage: string;
  mainImage: string;
}

gsap.registerPlugin(ScrollTrigger);

const ContentSection = ({ data }: { data: HeroData }) => {
  const sectionRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;
      const elements = (sectionRef.current as HTMLDivElement).children[0]
        .children;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      tl.from(elements[0], {
        opacity: 0,
        y: 30,
        scale: 0.95,
        duration: 0.6,
        ease: "power3.out",
      })
        .from(
          elements[1],
          {
            opacity: 0,
            y: 20,
            scale: 0.98,
            duration: 0.5,
            ease: "back.out(1.7)",
          },
          "-=0.2"
        )
        .from(
          elements[2],
          {
            opacity: 0,
            y: 20,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .from(
          elements[3].children,
          {
            opacity: 0,
            y: 25,
            duration: 0.4,
            ease: "power2.out",
            stagger: 0.15,
          },
          "-=0.2"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Stack
      ref={sectionRef}
      alignItems="center"
      sx={{
        mt: { xs: 55, sm: 14, md: 20 },
        px: { xs: 2, sm: 4 },
      }}
    >
      <Stack
        gap={{ xs: 2, sm: 3 }}
        alignItems="center"
        sx={{
          maxwidth: { xs: "100%", sm: "80%", md: "800px" },
        }}
        width="100%"
      >
        <Stack direction="row" gap={2} alignItems="center">
          <AvatarGroup
            max={4}
            sx={{
              "& .MuiAvatar-root": {
                width: { xs: 28, sm: 34, md: 40 },
                height: { xs: 28, sm: 34, md: 40 },
                fontSize: { xs: 12, sm: 14 },
              },
            }}
          >
            <Avatar alt="Remy Sharp" src={person1.src} />
            <Avatar alt="Travis Howard" src={person2.src} />
            <Avatar alt="Cindy Baker" src={person3.src} />
          </AvatarGroup>
          <Stack direction="row" gap={1} alignItems="center">
            <Typography
              variant="h6"
              fontWeight={700}
              sx={{ fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" } }}
            >
              59,182
            </Typography>
            <Typography
              variant="body2"
              fontWeight={400}
              color="#000000"
              sx={{ fontSize: { xs: "0.75rem", sm: "0.9rem" } }}
            >
              Happy Users
            </Typography>
          </Stack>
        </Stack>

        <Typography
          fontWeight={700}
          sx={{
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
            textAlign: "center",
            lineHeight: 1.2,
          }}
        >
          {data.title}
        </Typography>

        <Typography
          color="#777E90"
          sx={{
            textAlign: "center ! important",
            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
            maxWidth: "600px",
          }}
        >
          {data.subtitle}
        </Typography>

        {/* Buttons */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          gap={2}
          mt={3}
          width="100%"
          justifyContent="center"
        >
          <Button
            fullWidth={isMobile}
            startIcon={
              <Box
                component="img"
                src={appStoreIcon.src}
                width="20px"
                sx={{ mr: "10px" }}
                alt="App Store"
              />
            }
            sx={{
              px: { xs: 2, sm: 4 },
              height: "55px",
              background: "#ffffff",
              border: "1px solid rgba(0,0,0,0.08)",
              borderRadius: "94px",
              fontWeight: 700,
              color: "black",
              boxShadow: "0px 4px 20px rgba(0,0,0,0.05)",
              "&:hover": {
                background: "#f9f9f9",
              },
            }}
          >
            Download
          </Button>
          <Button
            fullWidth={isMobile}
            startIcon={
              <Box
                component="img"
                src={googlePlayIcon.src}
                width="20px"
                sx={{ mr: "10px" }}
                alt="Google Play"
              />
            }
            sx={{
              px: { xs: 2, sm: 4 },
              height: "55px",
              background: "#ffffff",
              border: "1px solid rgba(0,0,0,0.08)",
              borderRadius: "94px",
              fontWeight: 700,
              color: "black",
              boxShadow: "0px 4px 20px rgba(0,0,0,0.05)",
              "&:hover": {
                background: "#f9f9f9",
              },
            }}
          >
            Download
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ContentSection;
