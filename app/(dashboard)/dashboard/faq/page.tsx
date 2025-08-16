/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Add, Delete, Edit, ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
  Typography,
  IconButton,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Container,
  CircularProgress,
  Alert,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import api from "@/app/lib/axiosInstance";

interface FaqNode {
  _id?: string;
  title: string;
  content: string;
}

const Faq = () => {
  const [faqs, setFaqs] = useState<FaqNode[]>([]);
  const [expanded, setExpanded] = useState<number | false>(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState<FaqNode>({ title: "", content: "" });

  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const res = await api.get("/faq");
        setFaqs(res.data.data || []);
      } catch (err: any) {
        setError(err.response?.data?.error || "Failed to fetch FAQs");
      } finally {
        setFetching(false);
      }
    };
    fetchFaqs();
  }, []);

  const handleExpand = (index: number) => {
    setExpanded(expanded === index ? false : index);
  };

  const handleOpenDialog = (index: number | null = null) => {
    if (index !== null) {
      setFormData(faqs[index]);
      setEditIndex(index);
    } else {
      setFormData({ title: "", content: "" });
      setEditIndex(null);
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setError(null);
    setSuccess(null);
  };

  const handleSave = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      if (editIndex !== null && faqs[editIndex]._id) {
        const res = await api.put(`/faq/${faqs[editIndex]._id}`, formData);
        const updatedFaqs = [...faqs];
        updatedFaqs[editIndex] = res.data.data;
        setFaqs(updatedFaqs);
        setSuccess("FAQ updated successfully!");
      } else {
        const res = await api.post("/faq", formData);
        setFaqs([...faqs, res.data.data]);
        setSuccess("FAQ created successfully!");
      }
      setOpenDialog(false);
    } catch (err: any) {
      setError(err.response?.data?.error || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (index: number) => {
    const faqId = faqs[index]._id;
    if (!faqId) return;
    try {
      await api.delete(`/faq/${faqId}`);
      setFaqs(faqs.filter((_, i) => i !== index));
      setSuccess("FAQ deleted successfully!");
    } catch (err: any) {
      setError(err.response?.data?.error || "Failed to delete FAQ");
    }
    if (expanded === index) setExpanded(false);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography variant="h5">FAQs</Typography>
          <Button
            variant="contained"
            startIcon={<Add />}
            onClick={() => handleOpenDialog()}
          >
            Add FAQ
          </Button>
        </Stack>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}
        {success && (
          <Alert severity="success" sx={{ mb: 2 }}>
            {success}
          </Alert>
        )}

        {fetching ? (
          <Box textAlign="center" py={4}>
            <CircularProgress />
          </Box>
        ) : (
          faqs.map((faq, index) => (
            <Accordion
              key={faq._id || index}
              expanded={expanded === index}
              onChange={() => handleExpand(index)}
            >
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography sx={{ flexGrow: 1 }}>{faq.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{faq.content}</Typography>
                <Stack direction="row" spacing={1} mt={1}>
                  <IconButton
                    onClick={() => handleOpenDialog(index)}
                    size="small"
                    color="primary"
                  >
                    <Edit fontSize="small" />
                  </IconButton>
                  <IconButton
                    onClick={() => handleDelete(index)}
                    size="small"
                    color="error"
                  >
                    <Delete fontSize="small" />
                  </IconButton>
                </Stack>
              </AccordionDetails>
            </Accordion>
          ))
        )}

        {/* Add/Edit Dialog */}
        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle>
            {editIndex !== null ? "Edit FAQ" : "Add FAQ"}
          </DialogTitle>
          <DialogContent>
            <TextField
              label="Title"
              fullWidth
              margin="normal"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />
            <TextField
              label="Content"
              fullWidth
              multiline
              rows={3}
              margin="normal"
              value={formData.content}
              onChange={(e) =>
                setFormData({ ...formData, content: e.target.value })
              }
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Cancel</Button>
            <Button onClick={handleSave} variant="contained" disabled={loading}>
              {loading ? <CircularProgress size={20} /> : "Save"}
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Container>
  );
};

export default Faq;
