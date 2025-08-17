"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Typography,
  Avatar,
  IconButton,
  Stack,
  Paper,
  CircularProgress,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import type { Swiper as SwiperType } from "swiper";
import api from "@/app/lib/axiosInstance";

interface Testimonial {
  _id: string;
  text: string;
  name: string;
  role: string;
  subtitle: string;
  avatarColor?: string;
}

export default function TestimonialSlider() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await api.get("/public/testimonial");
        if (res.data.success) {
          setTestimonials(res.data.data);
        }
      } catch (err) {
        console.error("Failed to fetch testimonials:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex);
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" py={6}>
        <CircularProgress />
      </Box>
    );
  }

  if (!testimonials.length) {
    return (
      <Box display="flex" justifyContent="center" py={6}>
        <Typography>No testimonials found.</Typography>
      </Box>
    );
  }

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
          <SwiperSlide key={item._id || index}>
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
                  sx={{
                    bgcolor: item.avatarColor || "#ccc",
                    width: 54,
                    height: 54,
                  }}
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
            key={thumb._id || i}
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
            <Avatar
              sx={{
                bgcolor: thumb.avatarColor || "#ccc",
                width: 54,
                height: 54,
              }}
            >
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
          border: {
            xs: "1px solid rgba(255,255,255,0.3)",
            md: "1px solid #ddd",
          },
          color: "#000",
          "&:hover": {
            transform: {
              xs: "scale(1.05)",
              md: "translateY(-50%) scale(1.05)",
            },
          },
          ...(isBeginning && { opacity: 0.5, cursor: "not-allowed" }),
        }}
      >
        <ArrowBackIos sx={{ fontSize: 16 }} />
      </IconButton>

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
          color: "#fff",
          "&:hover": {
            transform: {
              xs: "scale(1.05)",
              md: "translateY(-50%) scale(1.05)",
            },
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
