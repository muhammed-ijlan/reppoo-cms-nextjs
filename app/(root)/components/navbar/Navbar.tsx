"use client";
import { Button, Container, Stack } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import logo from "@/public/images/logo.png";

const Navbar = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    setIsLoggedIn(!!token);
  }, []);

  return (
    <Stack sx={{ background: "#F9F9F9", width: "100%" }}>
      <Container maxWidth="lg">
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          py={3}
        >
          <Image src={logo} width={125} height={34} alt="logo" />
          <Button
            onClick={() => router.push(isLoggedIn ? "/dashboard" : "/login")}
            sx={{
              width: "166px",
              height: "55px",
              background: "#ffffff",
              border: "#00000008",
              borderRadius: "94px",
              typography: "body1",
              fontWeight: "700 !important",
              color: "black",
            }}
          >
            {isLoggedIn ? "Dashboard" : "Admin Login"}
          </Button>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Navbar;
