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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CircularProgress,
  Alert,
} from "@mui/material";
import { Add, Delete, Edit } from "@mui/icons-material";
import axios from "axios";

const Page = () => {
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    text: "",
  });

  const fetchTestimonials = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/api/testimonial");
      setTestimonials(res.data.data);
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to load testimonials");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  useEffect(() => {
    if (error || success) {
      const timer = setTimeout(() => {
        setError(null);
        setSuccess(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [error, success]);

  const handleOpen = (testimonial: any | null = null) => {
    if (testimonial) {
      setCurrentIndex(testimonial._id);
      setFormData({
        name: testimonial.name || "",
        role: testimonial.role || "",
        text: testimonial.text || "",
      });
    } else {
      setCurrentIndex(null);
      setFormData({ name: "", role: "", text: "" });
    }
    setOpen(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      if (currentIndex) {
        await axios.put(`/api/testimonial/${currentIndex}`, formData);
        setSuccess("Testimonial updated successfully ✅");
      } else {
        await axios.post("/api/testimonial", formData);
        setSuccess("Testimonial created successfully ✅");
      }
      setOpen(false);
      fetchTestimonials();
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to save testimonial");
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`/api/testimonial/${id}`);
      setSuccess("Testimonial deleted successfully ✅");
      fetchTestimonials();
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to delete testimonial");
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      >
        <Typography variant="h4" fontWeight={600}>
          Testimonials section – Update Page
        </Typography>
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={() => handleOpen(null)}
        >
          Add New
        </Button>
      </Stack>
      <Stack my={3}>
        {error && <Alert severity="error">{error}</Alert>}
        {success && <Alert severity="success">{success}</Alert>}
      </Stack>

      {loading ? (
        <Box textAlign="center" py={4}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={3}>
          {testimonials.map((t) => (
            <Grid size={{ xs: 12, sm: 4 }} key={t._id}>
              <Paper
                sx={{
                  p: 3,
                  borderRadius: 3,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="body2" mb={2} color="text.secondary">
                  “{t.text}”
                </Typography>
                <Box>
                  <Typography variant="subtitle1" fontWeight={600}>
                    {t.name}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {t.role}
                  </Typography>
                </Box>

                <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                  <Button
                    variant="outlined"
                    size="small"
                    startIcon={<Edit />}
                    onClick={() => handleOpen(t)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    color="error"
                    startIcon={<Delete />}
                    onClick={() => handleDelete(t._id)}
                  >
                    Delete
                  </Button>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Add/Edit Dialog */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          {currentIndex ? "Edit Testimonial" : "Add New Testimonial"}
        </DialogTitle>
        <DialogContent>
          <Stack spacing={2} mt={2}>
            <TextField
              label="Name"
              name="name"
              value={formData.name ?? ""}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Role"
              name="role"
              value={formData.role ?? ""}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Testimonial"
              name="text"
              value={formData.text ?? ""}
              onChange={handleChange}
              fullWidth
              multiline
              rows={4}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleSave}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Page;
