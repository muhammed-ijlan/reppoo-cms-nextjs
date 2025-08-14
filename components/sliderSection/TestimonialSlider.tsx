"use client";

import React, { useState, useRef } from "react";
import {
  Box,
  Typography,
  Avatar,
  IconButton,
  Stack,
  Paper,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import type { Swiper as SwiperType } from "swiper";

const testimonials = [
  {
    text: `"I've tried countless health apps, but none come close to this. 
    The AI truly understands my needs—it suggested daily routines and nutrition tips that actually fit my lifestyle. 
    Within weeks, I felt more energized, slept better, and became more mindful. It's like having a personal wellness coach in my pocket."`,
    name: "Ava L.",
    role: "Marketing Executive",
    subtitle: "Empowered by AI Wellness Journeys",
    avatarColor: "#D9A188",
  },
  {
    text: `"I've tried countless health apps, but none come close to this. 
    The AI truly understands my needs—it suggested daily routines and nutrition tips that actually fit my lifestyle. 
    Within weeks, I felt more energized, slept better, and became more mindful. It's like having a personal wellness coach in my pocket."`,
    name: "Namo Serlina",
    role: "CEO Delego",
    subtitle: "Founder of Healthy Mindset",
    avatarColor: "#E7C4B5",
  },
  {
    text: `"I've tried countless health apps, but none come close to this. 
    The AI truly understands my needs—it suggested daily routines and nutrition tips that actually fit my lifestyle. 
    Within weeks, I felt more energized, slept better, and became more mindful. It's like having a personal wellness coach in my pocket."`,
    name: "Namo Serlina",
    role: "CEO Delego",
    subtitle: "Changing lives with AI",
    avatarColor: "#E7C4B5",
  },
];

export default function TestimonialSlider() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex);
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <Box
      sx={{
        width: { xs: "100%", md: "760px" },
        mx: "auto",
        py: { xs: 2, md: 6 },
        px: { xs: 0, md: 2 },
        position: "relative",
      }}
    >
      <Swiper
        modules={[Navigation]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={handleSlideChange}
        slidesPerView={1}
        speed={500}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <Paper
              elevation={0}
              sx={{
                height: { xs: "auto", md: "342px" },
                py: { xs: 5, md: 0 },
                px: { xs: 5, md: 11 },
                borderRadius: "24px",
                textAlign: "center",
                bgcolor: "#fff",
                transition: "opacity 0.5s ease, transform 0.5s ease",
                opacity: activeIndex === index ? 1 : 0.6,
                transform: activeIndex === index ? "scale(1)" : "scale(0.98)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: "16px",
                  lineHeight: 1.6,
                  color: "#000",
                  mb: 4,
                  textAlign: "center !important",
                }}
              >
                {item.text}
              </Typography>

              <Stack
                direction="row"
                spacing={3}
                justifyContent="center"
                alignItems="center"
              >
                <Avatar
                  sx={{ bgcolor: item.avatarColor, width: 54, height: 54 }}
                >
                  {item.name.charAt(0)}
                </Avatar>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 500 }}>
                    {item.name}, {item.role}
                  </Typography>
                  <Typography
                    variant="body2"
                    fontWeight={500}
                    sx={{ color: "#909DA2" }}
                  >
                    {item.subtitle}
                  </Typography>
                </Box>
              </Stack>
            </Paper>
          </SwiperSlide>
        ))}
      </Swiper>

      <Stack
        display={{ xs: "none", sm: "flex" }}
        direction="row"
        spacing={2}
        mt={3}
        justifyContent="center"
      >
        {testimonials.map((thumb, i) => (
          <Paper
            elevation={0}
            key={i}
            onClick={() => swiperRef.current?.slideTo(i)}
            sx={{
              width: "240px",
              height: "90px",
              display: "flex",
              alignItems: "center",
              gap: 3,
              px: 2,
              py: 1,
              borderRadius: "20px",
              bgcolor: activeIndex === i ? "#ffffff" : "#F9F9F9",
              cursor: "pointer",
              transition: "all 0.3s ease",
              opacity: activeIndex === i ? "100%" : "70%",
            }}
          >
            <Avatar sx={{ bgcolor: thumb.avatarColor, width: 54, height: 54 }}>
              {thumb.name.charAt(0)}
            </Avatar>
            <Box>
              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                {thumb.name}
              </Typography>
              <Typography variant="caption" sx={{ color: "#909DA2" }}>
                {thumb.role}
              </Typography>
            </Box>
          </Paper>
        ))}
      </Stack>

      <IconButton
        onClick={() => swiperRef.current?.slidePrev()}
        disabled={isBeginning}
        sx={{
          position: "absolute",
          top: { xs: "100%", md: "35%" },
          left: { xs: "38%", md: -50 },
          transform: { xs: "none", md: "translateY(-50%)" },
          width: 40,
          height: 40,
          borderRadius: "50%",
          bgcolor: { xs: "rgba(255,255,255,0.8)", md: "#fff" },
          backdropFilter: { xs: "blur(8px)", md: "none" },
          border: {
            xs: "1px solid rgba(255,255,255,0.3)",
            md: "1px solid #ddd",
          },
          color: { xs: "#000", md: "#000" },
          boxShadow: {
            xs: "0 4px 12px rgba(0,0,0,0.15)",
            md: "0 2px 6px rgba(0,0,0,0.1)",
          },
          transition: "all 0.3s ease",
          "&:hover": {
            transform: {
              xs: "scale(1.05)",
              md: "translateY(-50%) scale(1.05)",
            },
            bgcolor: { xs: "rgba(255,255,255,0.9)", md: "#fff" },
          },
          ...(isBeginning && {
            opacity: 0.5,
            cursor: "not-allowed",
          }),
        }}
      >
        <ArrowBackIos sx={{ fontSize: 16 }} />
      </IconButton>

      {/* Next Button */}
      <IconButton
        onClick={() => swiperRef.current?.slideNext()}
        disabled={isEnd}
        sx={{
          position: "absolute",
          top: { xs: "100%", md: "35%" },
          right: { xs: "38%", md: -50 },
          transform: { xs: "none", md: "translateY(-50%)" },
          width: 40,
          height: 40,
          borderRadius: "50%",
          bgcolor: { xs: "rgba(45,142,255,0.9)", md: "#2D8EFF" },
          backdropFilter: { xs: "blur(8px)", md: "none" },
          color: "#fff",
          boxShadow: {
            xs: "0 4px 12px rgba(0,0,0,0.2)",
            md: "0 2px 6px rgba(0,0,0,0.15)",
          },
          transition: "all 0.3s ease",
          "&:hover": {
            transform: {
              xs: "scale(1.05)",
              md: "translateY(-50%) scale(1.05)",
            },
            bgcolor: { xs: "rgba(30,122,239,0.95)", md: "#1E7AEF" },
          },
          ...(isEnd && {
            bgcolor: { xs: "rgba(224,224,224,0.8)", md: "#E0E0E0" },
            color: "#9E9E9E",
            cursor: "not-allowed",
          }),
        }}
      >
        <ArrowForwardIos sx={{ fontSize: 16 }} />
      </IconButton>
    </Box>
  );
}
