import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import TestimonialSlider from "./TestimonialSlider";

const TestimonialSliderSection = () => {
  return (
    <Stack sx={{ background: "#F4F5F6", mt: 4 }}>
      <Container maxWidth="lg" sx={{ paddingY: 10 }}>
        <Stack>
          <Stack
            sx={{ maxWidth: "483px", textAlign: "center" }}
            alignItems={"center"}
            justifyContent={"center"}
            margin={"auto"}
            gap={2}
          >
            <Typography
              variant="h2"
              fontWeight={600}
              sx={{ textAlign: "center  !important" }}
            >
              {" "}
              Our Users Feel the Transformation
            </Typography>
            <Typography
              variant="body1"
              color="#777E90"
              sx={{ textAlign: "center !important" }}
            >
              Real Stories from People Empowered by Personalized Wellness
            </Typography>
          </Stack>
          <Stack
            width={"100%  "}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <TestimonialSlider />
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default TestimonialSliderSection;
