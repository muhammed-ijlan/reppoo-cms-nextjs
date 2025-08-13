import { Avatar, AvatarGroup, Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

// Importing the Google Play and App Store icons
import googlePlayIcon from "@/public/images/playstore.png";
import appStoreIcon from "@/public/images/apple.png";

const ContentSection = () => {
  return (
    <Stack mt={20}>
      <Stack gap={3} alignItems={"center"}>
        <Stack direction={"row"} gap={2} alignItems={"center"}>
          <AvatarGroup max={4}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          </AvatarGroup>
          <Stack direction={"row"} gap={1} alignItems={"center"}>
            <Typography variant="h6" fontWeight={700} color={"#000000"}>
              59,182
            </Typography>
            <Typography variant="body2" fontWeight={400} color={"#000000"}>
              Happy Users
            </Typography>
          </Stack>
        </Stack>

        <Typography
          variant="h1"
          fontWeight={700}>
            Your AI Health Coach
          </Typography>
          <Typography variant="body1" color="#777E90" sx={{textAlign:"center !important"}} maxWidth={600}>
            Transform your wellness journey with personalized AI-powered guidance that adapts to your unique needs.
          </Typography>

          <Stack direction={"row"} gap={3} mt={3}>
            <Button startIcon={
                <Box component={"img"} src={appStoreIcon.src} width={"20px"} sx={{mr:"10px"}} alt="Google Play" />
            } sx={{
              width: "auto",
              px:4,
              height: "55px",
              background: "#ffffff",
              border: "#00000008",
              borderRadius: "94px",
              typography: "body1",
              fontWeight: "700 !important",
              color: "black",
            }}>
                Download 
            </Button>
            <Button startIcon={
                <Box component={"img"} src={googlePlayIcon.src} width={"20px"} sx={{mr:"10px"}} alt="Google Play" />
            } sx={{
              width: "166px",
              height: "55px",
              background: "#ffffff",
              border: "#00000008",
              borderRadius: "94px",
              typography: "body1",
              fontWeight: "700 !important",
              color: "black",
            }}>
                Download 
            </Button>
          </Stack>
      </Stack>
    </Stack>
  );
};

export default ContentSection;
