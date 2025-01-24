"use client";
import ExperienceSection from "@/components/ExperienceSection";
import FAQSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import Hero from "@/components/hero/Hero";
import NewsletterSignup from "@/components/NewsletterSection";
import OurExpertise from "@/components/OurExpertise";
import ScrollingServices from "@/components/Services/ScrollingServices";
import TechSection from "@/components/TechSection";
import TopClients from "@/components/TopClients";
import ScrollProgress from "@/components/ui/scroll-progress";
import WorldwideSectionWithStyles from "@/components/WorldwideSectionWithStyles";

import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black h-screen text-white items-center justify-center align-middle font-poppins">
      <ScrollProgress className="top-0" />
      <Hero />
      <ScrollingServices />
      <OurExpertise />
      <ExperienceSection />
      <TechSection />
      <WorldwideSectionWithStyles />
      <TopClients />

      <FAQSection />
      <NewsletterSignup />
      <Footer />
    </div>
  );
}
