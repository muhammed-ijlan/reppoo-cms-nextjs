import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import Faq from "./Faq";

const FaqSection = () => {
  return (
    <Container maxWidth={"xl"}>
      <Stack alignItems={"center"} my={{ xs: 5, md: 10 }}>
        <Stack gap={2}>
          <Typography
            sx={{ textAlign: "center !important" }}
            variant="h2"
            width={{ xs: "100%", md: 483 }}
          >
            Frequently Asked Questions
          </Typography>
          <Typography
            sx={{ textAlign: "center !important" }}
            variant="body1"
            width={{ xs: "100%", md: 483 }}
            color="#777E90"
          >
            Get answers to common questions about our AI health assistant app
          </Typography>
        </Stack>

        <Stack width={{ xs: "100%", md: "80%" }} mt={5}>
          <Faq />
        </Stack>
      </Stack>
    </Container>
  );
};

export default FaqSection;
