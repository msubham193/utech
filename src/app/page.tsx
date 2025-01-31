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
    <div className="bg-white dark:bg-black h-screen text-white items-center justify-center align-middle font-poppins">
      <ScrollProgress className="top-0" />
      <div id="home" className="min-h-screen ">
        {/* Home section content */}
        <Hero />
      </div>

      <ScrollingServices />
      <div id="why-us" className="min-h-screen">
        {/* Why Us section content */}
        <OurExpertise />
      </div>

      <div id="services" className="min-h-screen">
        {/* Services section content */}
        <ExperienceSection />
      </div>

      <div id="about" className="min-h-screen">
        {/* About section content */}
        <TechSection />
      </div>

      <WorldwideSectionWithStyles />
      <TopClients />
      <div id="faq" className="min-h-screen">
        {/* FAQ section content */}
        <FAQSection />
      </div>

      <NewsletterSignup />
      <Footer />
    </div>
  );
}
