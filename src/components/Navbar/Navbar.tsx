"use client";
import React, { useState, useEffect, useRef } from "react";
import { Moon, Sun, Menu, X, ChevronDown, ChevronUp } from "lucide-react";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [productsDropdownOpen, setProductsDropdownOpen] =
    useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedTheme: "dark" | "light" =
      (localStorage.getItem("theme") as "dark" | "light") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        productsDropdownOpen
      ) {
        setProductsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [productsDropdownOpen]);

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
      setProductsDropdownOpen(false);
    }
  };

  const toggleTheme = (): void => {
    const newTheme: "dark" | "light" = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newTheme);
  };

  const toggleProductsDropdown = (e: React.MouseEvent): void => {
    e.stopPropagation();
    console.log("Dropdown toggled, new state:", !productsDropdownOpen);
    setProductsDropdownOpen((prev) => !prev);
  };

  const toggleMobileMenu = (): void => {
    setMenuOpen(!menuOpen);
    if (menuOpen) setProductsDropdownOpen(false);
  };

  const capitalizeFirstLetter = (string: string): string => {
    return string
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const products = [
    {
      id: "product1",
      name: "Product One",
      description: "Our flagship product",
    },
    { id: "product2", name: "Product Two", description: "Premium solution" },
    {
      id: "product3",
      name: "Product Three",
      description: "Budget-friendly option",
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-sm py-2 shadow-lg rounded-b-2xl"
          : "bg-transparent py-4"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-6 flex items-center justify-between ${
          scrolled
            ? "bg-gray-800/60 dark:bg-gray-800/60 bg-white/60 backdrop-blur-sm py-2 rounded-2xl"
            : "bg-transparent py-4"
        }`}
      >
        <div className="flex items-center space-x-4 md:space-x-8">
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

          <div className="hidden md:flex items-center space-x-6">
            {["home", "why-us", "services", "about"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                {capitalizeFirstLetter(item)}
              </button>
            ))}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleProductsDropdown}
                className="flex items-center text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors focus:outline-none"
              >
                Products
                {productsDropdownOpen ? (
                  <ChevronUp className="w-4 h-4 ml-1" />
                ) : (
                  <ChevronDown className="w-4 h-4 ml-1" />
                )}
              </button>
              {productsDropdownOpen && (
                <div
                  className="absolute left-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-[100] border border-gray-200 dark:border-gray-700"
                  style={{ top: "100%", minWidth: "200px" }}
                >
                  {products.map((product) => (
                    <button
                      key={product.id}
                      onClick={() => scrollToSection(product.id)}
                      className="w-full text-left px-4 py-2 text-sm text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <div className="font-medium">{product.name}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {product.description}
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
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
            onClick={() => scrollToSection("faq")}
            className="hidden md:block bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-xl transition-colors shadow-lg shadow-purple-500/30"
          >
            FAQ
          </button>
          <button
            className="md:hidden p-2 text-gray-800 dark:text-white"
            onClick={toggleMobileMenu}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 w-full bg-white dark:bg-gray-800 shadow-lg py-4 transition-all z-[90] max-h-screen overflow-y-auto">
          <div className="flex flex-col w-full">
            {["home", "why-us", "services", "about", "faq"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="w-full text-left px-6 py-3 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                {capitalizeFirstLetter(item)}
              </button>
            ))}
            <div className="w-full" ref={mobileDropdownRef}>
              <button
                onClick={toggleProductsDropdown}
                className="w-full flex items-center justify-between px-6 py-3 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <span>Products</span>
                {productsDropdownOpen ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
              {productsDropdownOpen && (
                <div className="bg-gray-50 dark:bg-gray-700">
                  {products.map((product) => (
                    <button
                      key={product.id}
                      onClick={() => scrollToSection(product.id)}
                      className="w-full text-left px-8 py-3 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                    >
                      <div className="font-medium">{product.name}</div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
