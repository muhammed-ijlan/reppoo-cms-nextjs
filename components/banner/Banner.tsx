import React from 'react'
import AppLayout from './AppScreenLayout'
import { Box, Container, Stack } from '@mui/material'

import circles from "@/public/shapes/banner-circles.png"
import ContentSection from './ContentSection'

const Banner = () => {
    return (
        <Stack sx={{
            background: "#F9F9F9",
            height: "1100px"
        }}>
            <Container maxWidth="lg" >
                <Stack alignItems={"center"} justifyContent={"center"} >
                    <Box component={"img"} src={circles.src} sx={{ width: "80%", }} />
                    <Stack position={"absolute"} sx={{
                        top: "100px",}}>
                        <AppLayout />
                    </Stack>
                    <ContentSection/>
                </Stack>
            </Container>
        </Stack>
    )
}

export default Banner