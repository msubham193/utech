"use client";
import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Check system preference on mount
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  useEffect(() => {
    // Update document class when dark mode changes
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

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
            ? `${darkMode ? "bg-gray-800/60" : "bg-white/60"} top-5 w-[90%] backdrop-blur-sm py-2 shadow-lg rounded-2xl`
            : "bg-transparent py-4"
        }`}
      >
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <a href="/" className="bg-white rounded-lg">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-10 h-10 bg-black rounded-sm"
            />
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="/"
              className={`${darkMode ? "text-white" : "text-gray-800"} hover:text-gray-500 transition-colors`}
            >
              Home
            </a>
            <a
              href="/features"
              className={`${darkMode ? "text-white" : "text-gray-800"} hover:text-gray-500 transition-colors`}
            >
              Why Us
            </a>
            <a
              href="/integrations"
              className={`${darkMode ? "text-white" : "text-gray-800"} hover:text-gray-500 transition-colors`}
            >
              Services
            </a>
            <a
              href="/pricing"
              className={`${darkMode ? "text-white" : "text-gray-800"} hover:text-gray-500 transition-colors`}
            >
              About
            </a>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 ${darkMode ? "text-white" : "text-gray-800"} hover:text-gray-500 transition-colors`}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a
<<<<<<< HEAD
            href="/remix-template"
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-xl transition-colors shadow-lg shadow-purple-500/30"
=======
            href="/faq"
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50"
>>>>>>> dev
          >
            FAQ
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;