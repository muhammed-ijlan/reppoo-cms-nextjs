/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
  Alert,
} from "@mui/material";
import axios from "axios";
import api from "@/app/lib/axiosInstance";

const AdminForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    leftImage: null as File | null,
    rightImage: null as File | null,
    mainImage: null as File | null,
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const { data } = await api.get("/hero");
        setFormData({
          title: data.data.title || "",
          subtitle: data.data.subtitle || "",
          leftImage: null,
          rightImage: null,
          mainImage: null,
        });
      } catch (err) {
        console.error("Failed to fetch Hero data", err);
      }
    };

    fetchHeroData();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("subtitle", formData.subtitle);
      if (formData.leftImage) data.append("leftImage", formData.leftImage);
      if (formData.mainImage) data.append("mainImage", formData.mainImage);
      if (formData.rightImage) data.append("rightImage", formData.rightImage);

      const res = await api.post("/hero", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setSuccessMessage(
        res.data.message || "Hero section updated successfully!"
      );
    } catch (err: any) {
      if (err.response?.data?.message) {
        setErrorMessage(err.response.data.message);
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Paper sx={{ p: 4, borderRadius: 3, boxShadow: 3 }}>
        <Typography variant="h5" fontWeight={600} gutterBottom mb={2}>
          HERO Section – Update Content
        </Typography>

        {errorMessage && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {errorMessage}
          </Alert>
        )}
        {successMessage && (
          <Alert severity="success" sx={{ mb: 2 }}>
            {successMessage}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField
              label="Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              fullWidth
              required
            />

            <TextField
              label="Subtitle"
              name="subtitle"
              value={formData.subtitle}
              onChange={handleChange}
              fullWidth
              multiline
              rows={2}
              required
            />

            <Grid container spacing={2}>
              {["leftImage", "mainImage", "rightImage"].map((img, idx) => (
                <Grid size={{ xs: 4 }} key={idx}>
                  <Button
                    variant="outlined"
                    component="label"
                    fullWidth
                    sx={{ height: "100px" }}
                  >
                    Upload {img.replace("Image", " Image")}
                    <input
                      type="file"
                      name={img}
                      hidden
                      accept="image/*"
                      onChange={handleChange}
                    />
                  </Button>
                  {formData[img as keyof typeof formData] && (
                    <Typography variant="body2" mt={1} textAlign="center">
                      {(formData[img as keyof typeof formData] as File).name}
                    </Typography>
                  )}
                </Grid>
              ))}
            </Grid>

            <Box textAlign="right">
              <Button
                type="submit"
                variant="contained"
                sx={{ px: 4 }}
                disabled={loading}
              >
                {loading ? "Saving..." : "Save Changes"}
              </Button>
            </Box>
          </Stack>
        </Box>
      </Paper>
    </Container>
  );
};

export default AdminForm;
