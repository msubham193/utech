"use client";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  interface ScrollToSectionProps {
    sectionId: string;
  }

  const scrollToSection = ({ sectionId }: ScrollToSectionProps) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "top-5 w-[100%] backdrop-blur-sm py-2 shadow-lg rounded-2xl"
          : "bg-transparent py-4"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-6 flex items-center justify-between ${
          scrolled
            ? "bg-gray-800/60 top-5 w-[90%] backdrop-blur-sm py-2 shadow-lg rounded-2xl"
            : "bg-transparent py-4"
        }`}
      >
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection({ sectionId: "home" })} 
            className="bg-white rounded-lg"
          >
            <img
              src="/logo.png"
              alt="Logo"
              className="w-10 h-10 bg-black rounded-sm"
            />
          </button>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection({ sectionId: "home" })}
              className="text-white hover:text-gray-300 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection({ sectionId: "why-us" })}
              className="text-white hover:text-gray-300 transition-colors"
            >
              Why Us
            </button>
            <button
              onClick={() => scrollToSection({ sectionId: "services" })}
              className="text-white hover:text-gray-300 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection({ sectionId: "about" })}
              className="text-white hover:text-gray-300 transition-colors"
            >
              Our Technologies
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="p-2 text-white hover:text-gray-300">
            <div className="w-5 h-5" /> {/* Placeholder for moon icon */}
          </button>
          <button
            onClick={() => scrollToSection({ sectionId: "faq" })}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-xl transition-colors shadow-lg shadow-purple-500/30"
          >
            FAQ
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;