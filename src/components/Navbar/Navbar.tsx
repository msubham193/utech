"use client";
import React, { useState, useEffect, useRef } from "react";
import { Moon, Sun, Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

interface ProductType {
  id: string;
  name: string;
  description: string;
}

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState<boolean>(false);
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
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

  const products: ProductType[] = [
    {
      id: "app-development",
      name: "App Development",
      description: "Mobile and web application development services tailored to your business needs. We specialize in iOS, Android, and cross-platform solutions."
    },
    { 
      id: "ui-development", 
      name: "UI Development",
      description: "User interface design and development with focus on accessibility, usability, and modern aesthetics for exceptional user experiences."
    },
    {
      id: "software-development",
      name: "Software Development",
      description: "Custom software solutions for enterprises including CRM, ERP, data management systems, and business process automation tools."
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
            ? "dark:bg-gray-800/60 bg-white/60 backdrop-blur-sm py-2 rounded-2xl"
            : "bg-transparent py-4"
        }`}
      >
        <div className="flex items-center space-x-4 md:space-x-8">
          <Link href="/">
            <div 
              onClick={() => scrollToSection("home")}
              className="bg-white dark:bg-gray-800 rounded-lg p-1"
            >
              <img
                src="/logo.png"
                alt="Logo"
                className="w-10 h-10 bg-black dark:bg-white rounded-sm"
              />
            </div>
          </Link>

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
            <div 
              className="relative" 
              ref={dropdownRef}
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => {
                setProductsDropdownOpen(false);
                setHoveredProduct(null);
              }}
            >
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
              <div
                className={`absolute left-0 mt-2 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-[100] border border-gray-200 dark:border-gray-700 transition-all duration-300 origin-top flex overflow-hidden ${
                  productsDropdownOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                }`}
                style={{ 
                  top: "100%", 
                  width: hoveredProduct ? "500px" : "250px",
                  transitionProperty: "opacity, transform, width"
                }}
              >
                <div className="w-full min-w-[200px]">
                  {products.map((product, index) => (
                    <div key={product.id} className="relative">
                      <button
                        onClick={() => scrollToSection(product.id)}
                        onMouseEnter={() => setHoveredProduct(product.id)}
                        className={`w-full text-left px-4 py-3 text-sm text-gray-800 dark:text-white hover:bg-purple-500/10 dark:hover:bg-gray-700 transition-all border-b border-gray-100 dark:border-gray-700 ${
                          hoveredProduct === product.id ? "bg-gray-100 dark:bg-gray-700" : ""
                        } ${
                          productsDropdownOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                        }`}
                        style={{ 
                          transitionDelay: `${index * 75}ms`,
                          transitionProperty: "transform, opacity, background-color",
                          transitionDuration: "200ms"
                        }}
                      >
                        <div className="font-medium">{product.name}</div>
                      </button>
                    </div>
                  ))}
                </div>
                
                {hoveredProduct && (
                  <div 
                    className="p-6 bg-gray-900 transition-all duration-200 ease-in-out relative overflow-hidden"
                    style={{
                      opacity: hoveredProduct ? 1 : 0,
                      transform: hoveredProduct ? "translateX(0)" : "translateX(-10px)",
                      width: "40%",
                      height: "40%",
                      minWidth: "200px",
                      maxHeight: "300px"
                    }}
                  >
                    {/* Decorative elements for aesthetic design */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500/10 rounded-full -ml-12 -mb-12 blur-xl"></div>
                    
                    <div className="relative z-10">
                      <h4 className="font-medium text-sm mb-2 text-white border-b border-purple-500/30 pb-2 inline-block">
                        {products.find(p => p.id === hoveredProduct)?.name}
                      </h4>
                      <p className="text-sm text-gray-300 mt-3 leading-relaxed">
                        {products.find(p => p.id === hoveredProduct)?.description}
                      </p>
                      <button 
                        onClick={() => scrollToSection(hoveredProduct)}
                        className="mt-4 text-xs font-medium text-purple-300 hover:text-purple-200 transition-colors flex items-center"
                      >
                        Learn more
                        <ChevronDown className="w-3 h-3 ml-1 rotate-270 transform" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
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
              <div 
                className={`bg-gray-900 transition-all duration-300 origin-top overflow-hidden ${
                  productsDropdownOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {products.map((product, index) => (
                  <div
                    key={product.id}
                    className={`px-8 py-4 border-b border-gray-800 ${
                      productsDropdownOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                    }`}
                    style={{ 
                      transitionDelay: `${index * 75}ms`,
                      transitionProperty: "transform, opacity",
                      transitionDuration: "200ms"
                    }}
                  >
                    <button
                      onClick={() => scrollToSection(product.id)}
                      className="w-full text-left"
                    >
                      <div className="font-medium text-white mb-1">{product.name}</div>
                      <div className="text-xs text-gray-400 mt-1">
                        {product.description}
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;