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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from "@mui/material";
import { Add, Delete, Edit } from "@mui/icons-material";

const Page = () => {
  // Initial dummy testimonials
  const [testimonials, setTestimonials] = useState([
    {
      name: "Ava L.",
      role: "Marketing Executive",
      text: "I've tried countless health apps, but none come close to this. The AI truly understands my needs and helps me improve my lifestyle.",
    },
    {
      name: "Namo Serlina",
      role: "CEO Delego",
      text: "The platform provided me with insights that really empowered me to make better decisions every day.",
    },
    {
      name: "John Doe",
      role: "Product Manager",
      text: "This solution has transformed the way I look at my health and productivity. Absolutely recommended!",
    },
  ]);

  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    text: "",
  });

  // Open dialog for edit or add
  const handleOpen = (index: number | null = null) => {
    if (index !== null) {
      setCurrentIndex(index);
      setFormData(testimonials[index]);
    } else {
      setCurrentIndex(null);
      setFormData({ name: "", role: "", text: "" });
    }
    setOpen(true);
  };

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Save changes or add new
  const handleSave = () => {
    if (currentIndex !== null) {
      // Update existing testimonial
      const updated = [...testimonials];
      updated[currentIndex] = formData;
      setTestimonials(updated);
    } else {
      // Add new testimonial
      setTestimonials([...testimonials, formData]);
    }
    setOpen(false);
  };

  // Delete testimonial
  const handleDelete = (index: number) => {
    const updated = testimonials.filter((_, i) => i !== index);
    setTestimonials(updated);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      >
        <Typography variant="h4" textAlign="center" fontWeight={600}>
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

      <Grid container spacing={3}>
        {testimonials.map((t, index) => (
          <Grid size={{ xs: 12, sm: 4 }} key={index}>
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
                  onClick={() => handleOpen(index)}
                >
                  Edit
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  color="error"
                  startIcon={<Delete />}
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </Button>
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Add/Edit Dialog */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          {currentIndex !== null ? "Edit Testimonial" : "Add New Testimonial"}
        </DialogTitle>
        <DialogContent>
          <Stack spacing={2} mt={2}>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Testimonial"
              name="text"
              value={formData.text}
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
