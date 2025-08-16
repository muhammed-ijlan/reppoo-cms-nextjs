import { Box, Container } from "@mui/material";
import React, { useRef } from "react";
import CustomSlider from "./CustomSlider";
import Image from "next/image";

const LogoSlider = () => {
  const scrollRef = useRef<HTMLDivElement>(
    null
  ) as React.RefObject<HTMLDivElement>;

  const items = [
    { id: 1, src: "/images/sliderLogo.png", alt: "Logo 1" },
    { id: 2, src: "/images/sliderLogo.png", alt: "Logo 1" },
    { id: 3, src: "/images/sliderLogo.png", alt: "Logo 1" },
    { id: 4, src: "/images/sliderLogo.png", alt: "Logo 1" },
    { id: 5, src: "/images/sliderLogo.png", alt: "Logo 1" },
  ];
  return (
    <Container maxWidth="lg" sx={{ my: 10 }}>
      <CustomSlider scrollRef={scrollRef} autoScroll={true} scrollSpeed={1}>
        {items.map((item) => (
          <Box
            component={"img"}
            key={item.id}
            src={item.src}
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
