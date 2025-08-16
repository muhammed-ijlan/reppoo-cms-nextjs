"use client";

import React, { use, useEffect, useState } from "react";
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
        const res = await fetch("/api/hero");
        const data = await res.json();
        if (res.ok) {
          setFormData({
            title: data.data.title || "",
            subtitle: data.data.subtitle || "",
            leftImage: null,
            rightImage: null,
            mainImage: null,
          });
        }
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

      const res = await fetch("/api/hero", {
        method: "POST",
        body: data,
      });

      const result = await res.json();

      if (res.ok) {
        setSuccessMessage(
          result.message || "Hero section updated successfully!"
        );
      } else {
        setErrorMessage(result.message || "Failed to update hero section.");
      }
    } catch (err) {
      setErrorMessage("Something went wrong. Please try again.");
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
              <Grid size={{ xs: 4 }}>
                <Button
                  variant="outlined"
                  component="label"
                  fullWidth
                  sx={{ height: "100px" }}
                >
                  Upload Left Image
                  <input
                    type="file"
                    name="leftImage"
                    hidden
                    accept="image/*"
                    onChange={handleChange}
                  />
                </Button>
                {formData.leftImage && (
                  <Typography variant="body2" mt={1} textAlign="center">
                    {formData.leftImage.name}
                  </Typography>
                )}
              </Grid>

              <Grid size={{ xs: 4 }}>
                <Button
                  variant="outlined"
                  component="label"
                  fullWidth
                  sx={{ height: "100px" }}
                >
                  Upload Main Image
                  <input
                    type="file"
                    name="mainImage"
                    hidden
                    accept="image/*"
                    onChange={handleChange}
                  />
                </Button>
                {formData.mainImage && (
                  <Typography variant="body2" mt={1} textAlign="center">
                    {formData.mainImage.name}
                  </Typography>
                )}
              </Grid>

              <Grid size={{ xs: 4 }}>
                <Button
                  variant="outlined"
                  component="label"
                  fullWidth
                  sx={{ height: "100px" }}
                >
                  Upload Right Image
                  <input
                    type="file"
                    name="rightImage"
                    hidden
                    accept="image/*"
                    onChange={handleChange}
                  />
                </Button>
                {formData.rightImage && (
                  <Typography variant="body2" mt={1} textAlign="center">
                    {formData.rightImage.name}
                  </Typography>
                )}
              </Grid>
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
