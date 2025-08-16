"use client";
import Link from "next/link";
import { Grid, Box, Card, Stack, Typography, Button } from "@mui/material";
import PageContainer from "@/app/(dashboard)/components/container/PageContainer";
import AuthLogin from "../auth/AuthLogin";
import { ArrowBack } from "@mui/icons-material";

const Login2 = () => {
  return (
    <PageContainer title="Login" description="this is Login page">
      <Box
        sx={{
          position: "relative",
          "&:before": {
            content: '""',
            background: "radial-gradient(#d2f1df, #d3d7fa, #bad8f4)",
            backgroundSize: "400% 400%",
            animation: "gradient 15s ease infinite",
            position: "absolute",
            height: "90vh",
            width: "100%",
            opacity: 0.3,
          },
        }}
      >
        <Grid
          container
          spacing={0}
          justifyContent="center"
          sx={{ height: "80vh" }}
        >
          <Grid
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            size={{ xs: 12, sm: 12, lg: 4, xl: 5 }}
          >
            {/* Back to Home Button */}
            <Box mb={3} width="100%" display="flex" justifyContent="flex-start">
              <Button
                component={Link}
                href="/"
                startIcon={<ArrowBack />}
                variant="contained"
                sx={{
                  textTransform: "none",
                  borderRadius: 3,
                  px: 3,
                  py: 1.2,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  fontWeight: 600,
                  bgcolor: "primary.main",
                  "&:hover": { bgcolor: "primary.dark" },
                }}
              >
                Back to Home
              </Button>
            </Box>

            {/* Login Card */}
            <Card elevation={9} sx={{ p: 4, zIndex: 1, width: "100%" }}>
              <Box display="flex" alignItems="center" justifyContent="center">
                <Box component={"img"} src={"/images/logo.png"} width={200} />
              </Box>
              <AuthLogin />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Login2;
