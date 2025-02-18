"use client";
import React, { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
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
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
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
          ? "top-5 w-[100%] backdrop-blur-sm py-2 rounded-2xl"
          : "bg-transparent py-4"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-6 flex items-center justify-between ${
          scrolled
            ? "bg-gray-800/60 dark:bg-gray-800/60 bg-white/60 backdrop-blur-sm py-2 shadow-lg rounded-2xl"
            : "bg-transparent py-4"
        }`}
      >
        <div className="flex items-center space-x-4 md:space-x-8">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="bg-white dark:bg-gray-800 rounded-lg p-1"
          >
            <img
              src="/logo.png"
              alt="Logo"
              className="w-10 h-10 bg-black dark:bg-white rounded-sm"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {["home", "why-us", "services", "about"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                {item.replace("-", " ").toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Theme Toggle + FAQ + Mobile Menu */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* FAQ Button (Desktop) */}
          <button
            onClick={() => scrollToSection("faq")}
            className="hidden md:block bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-xl transition-colors shadow-lg shadow-purple-500/30"
          >
            FAQ
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-800 dark:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-gray-800 shadow-lg py-4 transition-all">
          {["home", "why-us", "services", "about", "faq"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="block w-full text-left px-6 py-3 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              {item.replace("-", " ").toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
