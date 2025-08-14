import { Add, Remove } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

interface FaqNode {
  title: string;
  content: string;
}

const Faq = () => {
  const [expanded, setExpanded] = useState<number | false>(0);

  // Sample FAQ data
  const faqs: FaqNode[] = [
    {
      title: "What features does the AI Health Assistant offer?",
      content:
        "<p>Experience the future of personalized health and wellness before everyone else. Join our exclusive early access program and help shape the future of AI-powered health coaching.</p>",
    },
    {
      title: "Is the app customizable to my needs?",
      content:
        "<p>Experience the future of personalized health and wellness before everyone else. Join our exclusive early access program and help shape the future of AI-powered health coaching.</p>",
    },
    {
      title: "How can I contact support?",
      content:
        "<p>You can reach our support team at support@example.com or via live chat.</p>",
    },
  ];

  const handleChange =
    (index: number) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? index : false);
    };

  return (
    <Stack gap={3} bgcolor={"#ffffff"} px={1}>
      <Box>
        {faqs.map((faq, index) => {
          const isActive = expanded === index;
          return (
            <Accordion
              key={index}
              expanded={isActive}
              onChange={handleChange(index)}
              disableGutters
              sx={{
                boxShadow: "none",
                backgroundColor: "transparent",
                borderTop: "1px solid",
                borderTopColor: isActive ? "#000" : "#E2E8F0",
                borderBottom: isActive ? "1px solid #000" : "none",
                borderRadius: "0 !important",
                margin: 0,
                "&:before": { display: "none" },
              }}
            >
              <AccordionSummary
                expandIcon={
                  isActive ? (
                    <Remove sx={{ color: "#000000" }} />
                  ) : (
                    <Add sx={{ color: "#000000" }} />
                  )
                }
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  gap: 1,
                  padding: { xs: "10px 0px", md: "22px 0px" },
                  minHeight: "unset",
                }}
              >
                <Stack direction="row" gap={1}>
                  <Typography
                    sx={{
                      fontWeight: "400 !important",
                      typography: "h3",
                      color: isActive ? "#3772FF" : "#000000",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      width: "100%",
                    }}
                  >
                    {faq.title}
                  </Typography>
                </Stack>
              </AccordionSummary>
              <AccordionDetails
                sx={{ padding: { xs: "0", md: "0px 20px 25px 0px" } }}
              >
                <Typography
                  component="div"
                  sx={{
                    color: "#00000080",
                    typography: "h4",
                  }}
                  dangerouslySetInnerHTML={{ __html: faq.content }}
                />
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Box>
    </Stack>
  );
};

export default Faq;
