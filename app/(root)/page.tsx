"use client";
import Banner from "@/app/(root)/components/banner/Banner";
import ContentSection from "@/app/(root)/components/contentSection/ContentSection";
import FaqSection from "@/app/(root)/components/faqSection/FaqSection";
import LogoSlider from "@/app/(root)/components/LogoSlider";
import OfferSection from "@/app/(root)/components/offerSection/OfferSection";
import TransformationSliderSection from "@/app/(root)/components/sliderSection/TestimonialSliderSection";

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
