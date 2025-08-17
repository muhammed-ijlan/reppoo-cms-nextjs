/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import timeTracker from "@/public/images/timeTracker.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import api from "@/app/lib/axiosInstance";

gsap.registerPlugin(ScrollTrigger);

type AboutData = {
  title?: string;
  content?: string;
};

const ContentSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<AboutData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/public/about");
        if (res.data.success) {
          setData(res.data.data);
        }
      } catch (e: any) {
        console.log(e.response.data);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (sectionRef.current) {
        gsap.from(sectionRef.current.children, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Container maxWidth="lg">
      <Stack
        width={"100%"}
        ref={sectionRef}
        direction={{ xs: "column", md: "row" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        py={5}
        gap={{ xs: 3, md: 0 }}
      >
        <Stack>
          <Typography
            variant="h2"
            fontWeight={600}
            width={{ xs: "100%", md: 533 }}
          >
            {data?.title ?? ""}
          </Typography>
          <Typography variant="body1" mt={2} fontWeight={500}></Typography>
          <Typography
            variant="body1"
            color="#777E90"
            mt={2}
            mb={3}
            width={{ xs: "100%", md: 533 }}
            fontWeight={500}
          >
            {data?.content ?? ""}
          </Typography>

          <Button
            sx={{
              mt: 3,
              width: "166px",
              height: "55px",
              background: "#ffffff",
              border: "1px solid #00000008",
              borderRadius: "94px",
              typography: "body1",
              fontWeight: "700 !important",
              color: "black",
            }}
          >
            Read More
          </Button>
        </Stack>
        <Stack>
          <Box
            component={"img"}
            src={timeTracker.src}
            alt="timeTracker"
            width={{ xs: "100%", md: 544 }}
          />
        </Stack>
      </Stack>
    </Container>
  );
};

export default ContentSection;
