"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const AdminForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    leftImage: null,
    rightImage: null,
    mainImage: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Paper sx={{ p: 4, borderRadius: 3, boxShadow: 3 }}>
        <Typography variant="h5" fontWeight={600} gutterBottom mb={2}>
          HERO Section – Update Content
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField
              label="Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              fullWidth
            />

            <TextField
              label="Subtitle"
              name="subtitle"
              value={formData.subtitle}
              onChange={handleChange}
              fullWidth
              multiline
              rows={2}
            />

            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 4 }}>
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
              </Grid>

              <Grid size={{ xs: 12, sm: 4 }}>
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
              </Grid>
              <Grid size={{ xs: 12, sm: 4 }}>
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
              </Grid>
            </Grid>

            <Box textAlign="right">
              <Button type="submit" variant="contained" sx={{ px: 4 }}>
                Save Changes
              </Button>
            </Box>
          </Stack>
        </Box>
      </Paper>
    </Container>
  );
};

export default AdminForm;
