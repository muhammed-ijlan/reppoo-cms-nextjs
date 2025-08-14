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
        width: "760px",
        mx: "auto",
        py: 6,
        px: 2,
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
                height: "342px",
                py: 0,
                px: 11,
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

      <Stack direction="row" spacing={2} mt={3} justifyContent="center">
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
          left: -50,
          top: "35%",
          transform: "translateY(-50%)",
          width: 44,
          height: 44,
          borderRadius: "50%",
          bgcolor: "#fff",
          border: "1px solid #ddd",
          color: "#000",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: isBeginning
              ? "translateY(-50%)"
              : "translateY(-50%) scale(1.05)",
            boxShadow: isBeginning
              ? "0 2px 6px rgba(0,0,0,0.1)"
              : "0 4px 10px rgba(0,0,0,0.15)",
            bgcolor: "#fff",
          },
          ...(isBeginning && {
            bgcolor: "#E0E0E0",
            color: "#9E9E9E",
            border: "1px solid #ccc",
            cursor: "not-allowed",
          }),
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ArrowBackIos sx={{ fontSize: 16 }} />
      </IconButton>

      <IconButton
        onClick={() => swiperRef.current?.slideNext()}
        disabled={isEnd}
        sx={{
          position: "absolute",
          right: -50,
          top: "35%",
          transform: "translateY(-50%)",
          width: 44,
          height: 44,
          borderRadius: "50%",
          bgcolor: "#2D8EFF",
          color: "#fff",
          boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: isEnd
              ? "translateY(-50%)"
              : "translateY(-50%) scale(1.05)",
            boxShadow: isEnd
              ? "0 2px 6px rgba(0,0,0,0.15)"
              : "0 4px 10px rgba(0,0,0,0.25)",
            bgcolor: "#1E7AEF",
          },
          ...(isEnd && {
            bgcolor: "#E0E0E0",
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
