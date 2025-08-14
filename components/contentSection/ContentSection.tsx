import { Button, Container, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import timeTracker from '@/public/images/timeTracker.png'

const ContentSection = () => {
  return (
    <Container maxWidth="lg">
      <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} py={5}>
        <Stack>
          <Typography variant='h2' fontWeight={600} width={533}>Maximizing Your Health Potential Together</Typography>
          <Typography variant='body1' mt={2} fontWeight={500}>
           Smart Nutrition Planning
          </Typography>
          <Typography variant='body1' color='#777E90' mt={2} mb={3} width={459} fontWeight={500}>
           Your AI-powered health companion transforms the way you approach wellness, making healthy living effortless and personalized.
          </Typography>

          <Button sx={{
            mt:3,
             width: "166px",
              height: "55px",
              background: "#ffffff",
              border: "1px solid #00000008",
              borderRadius: "94px",
              typography: "body1",
              fontWeight: "700 !important",
              color: "black",

          }}>
            Read More
          </Button>
        </Stack>
        <Stack>
          <Image src={timeTracker} alt='timeTracker' width={544}/>
        </Stack>
      </Stack>
    </Container>
  )
}

export default ContentSection