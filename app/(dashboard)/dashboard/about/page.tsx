/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
  CircularProgress,
  Alert,
} from "@mui/material";

const Page = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const res = await axios.get("/api/about");
        if (res.data.data) setFormData(res.data.data);
      } catch (err: any) {
        setError(
          axios.isAxiosError(err)
            ? err.response?.data?.error || "Failed to fetch about data"
            : "Error loading data"
        );
      } finally {
        setFetching(false);
      }
    };
    fetchAbout();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const res = await axios.put("/api/about", formData);

      setSuccess("About section updated successfully!");
      setFormData(res.data.data);
    } catch (err: any) {
      const apiError = err.response?.data;
      if (apiError?.errors) {
        setError(apiError.errors.map((e: any) => e.message).join(", "));
      } else {
        setError(apiError?.error || "Failed to save data");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Paper sx={{ p: 4, borderRadius: 3, boxShadow: 3 }}>
        <Typography variant="h5" fontWeight={600} gutterBottom>
          About section – Update Page
        </Typography>

        {fetching ? (
          <Box textAlign="center" py={4}>
            <CircularProgress />
          </Box>
        ) : (
          <Box component="form">
            <Stack spacing={3}>
              {error && <Alert severity="error">{error}</Alert>}
              {success && <Alert severity="success">{success}</Alert>}

              <TextField
                label="Heading"
                name="title"
                value={formData.title}
                onChange={handleChange}
                fullWidth
              />

              <TextField
                label="Content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                fullWidth
                multiline
                rows={4}
              />

              <Box textAlign="right">
                <Button
                  onClick={handleSubmit}
                  type="submit"
                  variant="contained"
                  sx={{ px: 4 }}
                  disabled={loading}
                >
                  {loading ? <CircularProgress size={24} /> : "Save Changes"}
                </Button>
              </Box>
            </Stack>
          </Box>
        )}
      </Paper>
    </Container>
  );
};

export default Page;
