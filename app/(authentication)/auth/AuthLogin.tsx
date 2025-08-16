/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import CustomTextField from "@/app/(dashboard)/components/forms/theme-elements/CustomTextField";
import { useRouter } from "next/navigation";
import axios from "axios";
import api from "@/app/lib/axiosInstance";
import { ArrowBack } from "@mui/icons-material";

interface LoginProps {
  title?: string;
  subtitle?: React.ReactNode;
  subtext?: React.ReactNode;
}

const AuthLogin = ({ title, subtitle, subtext }: LoginProps) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", { email, password });
      const { token } = res.data.data;

      localStorage.setItem("adminToken", token);
      router.push("/dashboard");
    } catch (err: any) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={3}>
        <Box>
          <Typography variant="body1" fontWeight={600} mb="5px">
            Email
          </Typography>
          <CustomTextField
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
          />
        </Box>

        <Box>
          <Typography variant="body1" fontWeight={600} mb="5px">
            Password
          </Typography>
          <CustomTextField
            type="password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
          />
        </Box>

        {error && (
          <Typography color="error" variant="body2">
            {error}
          </Typography>
        )}

        <Button type="submit" variant="contained" fullWidth sx={{ mt: 3 }}>
          Sign In
        </Button>
      </Stack>

      {subtitle}
    </form>
  );
};

export default AuthLogin;
