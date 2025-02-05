"use client";
import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // Get initial theme from localStorage or system preference
    const savedTheme =
      localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

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

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "top-5 w-[100%] backdrop-blur-sm py-2  rounded-2xl"
          : "bg-transparent py-4"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-6 flex items-center justify-between ${
          scrolled
            ? "bg-gray-800/60 dark:bg-gray-800/60 bg-white/60 top-5 w-[90%] backdrop-blur-sm py-2 shadow-lg rounded-2xl"
            : "bg-transparent py-4"
        }`}
      >
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <button
            onClick={() => scrollToSection({ sectionId: "home" })}
            className="bg-white dark:bg-gray-800 rounded-lg"
          >
            <img
              src="/logo.png"
              alt="Logo"
              className="w-10 h-10 bg-black dark:bg-white rounded-sm"
            />
          </button>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection({ sectionId: "home" })}
              className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection({ sectionId: "why-us" })}
              className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              Why Us
            </button>
            <button
              onClick={() => scrollToSection({ sectionId: "services" })}
              className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection({ sectionId: "about" })}
              className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              Our Technologies
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
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
