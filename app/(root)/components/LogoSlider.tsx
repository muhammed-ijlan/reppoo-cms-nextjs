import { Box, Container } from "@mui/material";
import React, { useRef } from "react";
import CustomSlider from "./CustomSlider";

const LogoSlider = () => {
  const scrollRef = useRef<HTMLDivElement>(
    null
  ) as React.RefObject<HTMLDivElement>;

  const items = [
    { id: 1, logo: "/images/sliderLogo.png", alt: "Logo 1" },
    { id: 2, logo: "/images/sliderLogo.png", alt: "Logo 1" },
    { id: 3, logo: "/images/sliderLogo.png", alt: "Logo 1" },
    { id: 4, logo: "/images/sliderLogo.png", alt: "Logo 1" },
    { id: 5, logo: "/images/sliderLogo.png", alt: "Logo 1" },
  ];
  return (
    <Container maxWidth="lg" sx={{ my: 10 }}>
      <CustomSlider scrollRef={scrollRef} autoScroll={true} scrollSpeed={1}>
        {items.map((item) => (
          <Box
            component={"img"}
            key={item.id}
            src={item.logo}
            alt={item.alt}
            width={200}
            height={40}
            sx={{ marginRight: { xs: "50px", md: "80px" } }}
          />
        ))}
      </CustomSlider>
    </Container>
  );
};

export default LogoSlider;
