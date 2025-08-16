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
} from "@mui/material";
import React, { useState } from "react";

interface FaqNode {
  title: string;
  content: string;
}

const Faq = () => {
  const [faqs, setFaqs] = useState<FaqNode[]>([
    {
      title: "What is your refund policy?",
      content: "You can request a refund within 30 days.",
    },
    {
      title: "Do you provide customer support?",
      content: "Yes, we provide 24/7 support.",
    },
  ]);

  const [expanded, setExpanded] = useState<number | false>(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState<FaqNode>({ title: "", content: "" });

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
  };

  const handleSave = () => {
    if (editIndex !== null) {
      // Update existing FAQ
      const updatedFaqs = [...faqs];
      updatedFaqs[editIndex] = formData;
      setFaqs(updatedFaqs);
    } else {
      // Add new FAQ
      setFaqs([...faqs, formData]);
    }
    setOpenDialog(false);
  };

  const handleDelete = (index: number) => {
    const updatedFaqs = faqs.filter((_, i) => i !== index);
    setFaqs(updatedFaqs);
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
          <Typography variant="h5">FAQs </Typography>
          <Button
            variant="contained"
            startIcon={<Add />}
            onClick={() => handleOpenDialog()}
          >
            Add FAQ
          </Button>
        </Stack>

        {faqs.map((faq, index) => (
          <Accordion
            key={index}
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
        ))}

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
            <Button onClick={handleSave} variant="contained">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Container>
  );
};

export default Faq;
