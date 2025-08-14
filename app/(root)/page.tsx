"use client";
import Banner from "@/components/banner/Banner";
import ContentSection from "@/components/contentSection/ContentSection";
import FaqSection from "@/components/faqSection/FaqSection";
import LogoSlider from "@/components/LogoSlider";
import OfferSection from "@/components/offerSection/OfferSection";
import TransformationSliderSection from "@/components/sliderSection/TestimonialSliderSection";

export default function HomePage() {
  return (
    <>
      <Banner />
      <LogoSlider />
      <ContentSection />
      <TransformationSliderSection />
      <FaqSection />
      <OfferSection />
    </>
  );
}
