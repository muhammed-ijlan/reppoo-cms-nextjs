import { Container, Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import logo from "@/public/images/logo.png";
import social from "@/public/shapes/social.png";

const Footer = () => {
  return (
    <Container maxWidth="lg">
      <Stack my={6}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          mb={4}
          gap={2}
        >
          <Stack gap={2}>
            <Image src={logo} alt="logo" width={125} height={34} />
            <Typography variant="body2" width={{ xs: "100%", md: 503 }}>
              innovative health assistant app that leverages artificial
              intelligence to provide personalized wellness recommendations.
              <br />
              <span style={{ marginTop: "10px !important" }}>
                hello@reppoo.com
              </span>
            </Typography>
          </Stack>
          <Stack direction={"row"} gap={8}>
            <Stack>
              <Typography variant="body1" fontWeight={700}>
                Company
              </Typography>
              <Typography
                fontWeight={400}
                color="#696B68"
                variant="body2"
                sx={{ mt: 1, cursor: "pointer" }}
              >
                Home
              </Typography>
              <Typography
                color="#696B68"
                variant="body2"
                fontWeight={400}
                sx={{ mt: 1, cursor: "pointer" }}
              >
                Early Access
              </Typography>
              <Typography
                fontWeight={400}
                color="#696B68"
                variant="body2"
                sx={{ mt: 1, cursor: "pointer" }}
              >
                404
              </Typography>
            </Stack>
            <Stack>
              <Typography variant="body1" fontWeight={700}>
                App
              </Typography>
              <Typography
                fontWeight={400}
                color="#696B68"
                variant="body2"
                sx={{ mt: 1, cursor: "pointer" }}
              >
                Download For IOS
              </Typography>
              <Typography
                color="#696B68"
                variant="body2"
                fontWeight={400}
                sx={{ mt: 1, cursor: "pointer" }}
              >
                Download For Android
              </Typography>
            </Stack>
            <Stack>
              <Typography variant="body1" fontWeight={700}>
                Legal Pages
              </Typography>
              <Typography
                fontWeight={400}
                color="#696B68"
                variant="body2"
                sx={{ mt: 1, cursor: "pointer" }}
              >
                Privacy Policy
              </Typography>
              <Typography
                color="#696B68"
                variant="body2"
                fontWeight={400}
                sx={{ mt: 1, cursor: "pointer" }}
              >
                Terms & Conditions
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Divider sx={{ my: 1 }} />
        <Stack
          mt={2}
          direction={"row"}
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="body2" fontWeight={400} textAlign="center">
            © 2024 Copyright Reppoo
          </Typography>
          <Stack direction={"row"} gap={2}>
            <Image src={social} alt="social" width={250} />
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Footer;
