"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

// Define types for tools and partners
interface Tool {
  title: string;
  icon: string;
  image: string;
  features: string[];
}

interface Partner {
  name: string;
  logo: string;
}

function UxBanner() {
  // State for tools slider
  const [currentToolSlide, setCurrentToolSlide] = useState<number>(0);
  // State for partner ecosystem slider
  const [currentPartnerSlide, setCurrentPartnerSlide] = useState<number>(0);

  // Technical tools data with associated images
  const toolsData: Tool[] = [
    {
      title: "Technical Tools",
      icon: "/figma-logo.png",
      image: "/uiImg1.png",
      features: [
        "Real-Time Collaboration",
        "Designing and Prototyping",
        "Plugins and Integrations",
        "Browser-Based and Desktop App",
        "Easy Collaboration",
        "Centralized Design System",
      ],
    },
    {
      title: "Design Systems",
      icon: "/sketch-logo.png",
      image: "/xd1.png",
      features: [
        "Component Libraries",
        "Style Guidelines",
        "Design Tokens",
        "Documentation",
        "Version Control",
        "Team Workflows",
      ],
    },
    {
      title: "Development Tools",
      icon: "/dev-logo.png",
      image: "/xd2.png",
      features: [
        "Code Inspection",
        "Asset Export",
        "Developer Handoff",
        "Responsive Testing",
        "Accessibility Checks",
        "Integration with GitHub",
      ],
    },
  ];

  // Partner data
  const partnerData: Partner[] = [
    { name: "AdiAqua", logo: "/partner1.png" },
    { name: "Fedison", logo: "/partner2.png" },
    { name: "Kenstar", logo: "/partner3.png" },
    { name: "Smkart", logo: "/partner4.png" },
    { name: "Redbus", logo: "/partner5.png" },
    { name: "Adda247", logo: "/partner6.png" },
  ];

  // Auto-slide functionality for tools
  useEffect(() => {
    const toolsInterval = setInterval(() => {
      setCurrentToolSlide((prev) => (prev + 1) % toolsData.length);
    }, 4000);

    return () => clearInterval(toolsInterval);
  }, [toolsData.length]);

  // Auto-slide functionality for partners
  useEffect(() => {
    const partnersInterval = setInterval(() => {
      setCurrentPartnerSlide((prev) => (prev + 1) % partnerData.length);
    }, 3000);

    return () => clearInterval(partnersInterval);
  }, [partnerData.length]);

  // Function to handle manual tool slide selection
  const handleToolDotClick = (index: number): void => {
    setCurrentToolSlide(index);
  };
  
  return (
    <div className="w-full bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white overflow-hidden transition-colors duration-300">
  <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
    <div className="grid md:grid-cols-2 gap-8 items-center">
      {/* Left side - UX Phone visual with images */}
      <div className="relative">
        <div className="text-6xl font-bold text-blue-600 dark:text-cyan-400 mb-2 transition-colors duration-300">UX</div>
        <div className="text-xl text-blue-600 dark:text-cyan-400 uppercase tracking-wider mb-6 transition-colors duration-300">
          USER<br />EXPERIENCE<br />design
        </div>
        
        <div className="relative h-96 flex items-center justify-center">
          {/* Main UI image - ENLARGED */}
          <div className="relative z-10">
            <Image 
              src="/uiImg1.png" 
              alt="UI Design Example" 
              width={380} 
              height={600} 
              className="rounded-xl shadow-lg"
            />
          </div>
          
          {/* Supporting images positioned around the main image - SMALLER */}
          <div className="absolute top-2 right-2 transform -rotate-6 z-0">
            <Image 
              src="/uiimg1.png" 
              alt="UI Component" 
              width={80} 
              height={130} 
              className="rounded-lg shadow-md opacity-80"
            />
          </div>
          
          <div className="absolute bottom-2 left-2 transform rotate-3 z-0">
            <Image 
              src="/xd1.png" 
              alt="XD Design" 
              width={90} 
              height={80} 
              className="rounded-lg shadow-md opacity-80"
            />
          </div>
          
          <div className="absolute bottom-20 right-4 transform rotate-6 z-0">
            <Image 
              src="/xd2.png" 
              alt="XD Component" 
              width={70} 
              height={110} 
              className="rounded-lg shadow-md opacity-80"
            />
          </div>
          
          {/* Glow effect */}
          <div className="absolute inset-0 bg-blue-500/20 dark:bg-cyan-500/20 blur-3xl rounded-full z-0 transition-colors duration-300"></div>
        </div>
      </div>
      
      {/* Right side - Technical Tools auto slider */}
      <div className="relative">
        <div className="bg-white dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-2xl overflow-hidden border border-blue-400/20 dark:border-cyan-400/20 transition-colors duration-300">
          <div className="p-6 relative w-full h-64">
            {toolsData.map((tool, index) => (
              <div 
                key={index} 
                className={`absolute inset-0 p-6 transition-opacity duration-500 ${
                  currentToolSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div className="w-3/5">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4 transition-colors duration-300">
                      {tool.title}
                    </h3>
                    <ul className="space-y-2">
                      {tool.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center text-gray-700 dark:text-gray-300 text-sm transition-colors duration-300">
                          <span className="w-2 h-2 bg-blue-500 dark:bg-cyan-500 rounded-full mr-2 transition-colors duration-300"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Added tool-specific images to cards */}
                  <div className="w-2/5 flex flex-col items-center justify-center gap-3">
                    <div className="h-20 w-20 relative overflow-hidden rounded-lg shadow-md">
                      <Image 
                        src={tool.image} 
                        alt={`${tool.title} Example`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    <div className="text-lg font-bold">
                      {index === 0 && <span className="text-[#F24E1E]">Figma</span>}
                      {index === 1 && <span className="text-[#F7B500]">Sketch</span>}
                      {index === 2 && <span className="text-[#0ACF83]">DevTools</span>}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Dots indicator with improved styling */}
          <div className="flex justify-center p-3 bg-gradient-to-r from-blue-500/10 to-blue-400/20 dark:from-cyan-500/10 dark:to-cyan-400/20 transition-colors duration-300">
            {toolsData.map((_, index) => (
              <button
                key={index}
                onClick={() => handleToolDotClick(index)}
                className={`w-3 h-3 mx-2 rounded-full transition-all duration-300 ${
                  currentToolSlide === index 
                    ? 'bg-blue-500 dark:bg-cyan-500 scale-110' 
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
    
    {/* Partner Ecosystem Section - Simplified with just text as requested */}
    <div className="mt-16 md:mt-24">
      <h2 className="text-2xl font-bold text-center text-blue-600 dark:text-cyan-400 mb-10 transition-colors duration-300">
        Our Partner Ecosystem
      </h2>
      
      <div className="relative overflow-hidden py-6">
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{ 
            transform: `translateX(-${currentPartnerSlide * (100 / partnerData.length)}%)`,
            width: `${partnerData.length * 100}%` 
          }}
        >
          {partnerData.map((partner, index) => (
            <div 
              key={index} 
              className="flex-shrink-0" 
              style={{ width: `${100 / partnerData.length}%` }}
            >
              <div className="flex justify-center items-center px-4">
                <div className="text-center transition-all duration-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:scale-105">
                  <div className="text-2xl font-medium">{partner.name}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Indicator dots for partners - improved styling */}
        <div className="flex justify-center mt-6">
          {partnerData.map((_, index) => (
            <div
              key={index}
              className={`h-2 mx-2 rounded-full transition-all duration-300 ${
                currentPartnerSlide === index 
                  ? 'bg-blue-600 dark:bg-cyan-400 w-4' 
                  : 'bg-gray-400 dark:bg-gray-600 w-2'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
</div>
  );
}

export default UxBanner;