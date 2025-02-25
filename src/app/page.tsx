"use client";

import { useEffect } from "react";
import ExperienceSection from "@/components/ExperienceSection";
import FAQSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import FooterNav from "@/components/footer/Footer";
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
  // Fix scrolling issue
  useEffect(() => {
    // Reset any CSS that might be preventing scrolling
    document.body.style.overflow = "auto";
    document.documentElement.style.overflow = "auto";
    document.body.style.height = "auto";
    document.documentElement.style.height = "auto";
    
    // Fix for iOS Safari and some other mobile browsers
    document.body.style.position = "static";
    
    // Handle navigation scroll issues
    const handleNavClick = (e) => {
      // If this is a navigation link with hash
      if (e.target.tagName === 'A' && e.target.hash) {
        // Ensure the page is scrollable after navigation
        setTimeout(() => {
          document.body.style.overflow = "auto";
          document.documentElement.style.overflow = "auto";
        }, 100);
      }
    };
    
    document.addEventListener('click', handleNavClick);
    
    return () => {
      document.removeEventListener('click', handleNavClick);
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col">
      <ScrollProgress />
      
      {/* Home section content */}
      <section id="home">
        <Hero />
      </section>
      
      {/* Why Us section content */}
      <section id="why-us">
        <ExperienceSection />
        <TopClients />
      </section>
      
      {/* Services section content */}
      <section id="services">
        <ScrollingServices />
        <OurExpertise />
        <TechSection />
      </section>
      
      {/* About section content */}
      <section id="about">
        <WorldwideSectionWithStyles />
      </section>
      
      {/* FAQ section content */}
      <section id="faq">
        <FAQSection />
        <NewsletterSignup />
      </section>
      
      <footer>
        <FooterNav />
        <Footer />
      </footer>
    </main>
  );
}