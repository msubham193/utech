"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MoonIcon, SunIcon } from 'lucide-react';
import UxBanner from '@/components/expertise/uxBanner';

const Page = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300 bg-gray-50 dark:bg-gray-900">
      {/* Hero Banner */}
      <div className="relative w-full h-auto min-h-[20rem] bg-gradient-to-r from-gray-800 to-gray-700 dark:from-gray-900 dark:to-gray-800 text-white overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 dark:from-purple-500/20 dark:to-blue-500/20 opacity-50"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full blur-3xl"></div>
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">UI UX Design</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            A better approach to give realistic look and feel to your ideas by UI UX Design Principles.
          </p>
          <div className="flex space-x-3 items-center">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded flex items-center justify-center shadow-lg">
              <span className="text-white">Fi</span>
            </div>
            <div className="w-10 h-10 bg-purple-700 rounded flex items-center justify-center shadow-lg">
              <span className="text-xs font-bold text-white">Xd</span>
            </div>
            <div className="w-10 h-10 bg-blue-800 rounded flex items-center justify-center shadow-lg">
              <span className="text-xs font-bold text-white">Ps</span>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-1 pb-4">
          <div className="w-2 h-2 bg-white rounded-full opacity-50"></div>
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <div className="w-2 h-2 bg-white rounded-full opacity-50"></div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white dark:bg-gray-800 py-4 px-4 text-sm text-gray-600 dark:text-gray-300 shadow-sm">
        <div className="container mx-auto">
          <div className="flex items-center space-x-2">
            <Link href="/" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Home</Link>
            <span className="text-gray-400">&gt;</span>
            <Link href="/services" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Services</Link>
            <span className="text-gray-400">&gt;</span>
            <span className="text-purple-600 dark:text-purple-400">UI/UX Development</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-10 flex-grow">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-10 transition-all">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-4">
            UI/UX Development
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="space-y-3 p-5 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:shadow-md transition-all">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                  <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 flex items-center justify-center mr-2">UI</div>
                  User Interface (UI):
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Focuses on the aesthetics and interactivity of a digital product. It includes designing the visual buttons, colors, typography, icons, and other visual elements.
                </p>
              </div>

              <div className="space-y-3 p-5 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:shadow-md transition-all">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                  <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 flex items-center justify-center mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  A well-designed UI/UX boosts:
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  User satisfaction, builds brand loyalty, and increases conversion rates by guiding users towards desired actions smoothly. Key principles include maintaining consistency, creating a logical layout, and ensuring accessibility.
                </p>
              </div>

              <div className="space-y-3 p-5 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:shadow-md transition-all">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 flex items-center justify-center mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5 4a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1V5a1 1 0 00-1-1H5zm0-2h10a3 3 0 013 3v10a3 3 0 01-3 3H5a3 3 0 01-3-3V5a3 3 0 013-3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  Tools like Figma:
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Helps in building feature-rich, high-fidelity interfaces, while platforms like Hotjar gather user feedback. Modern trends such as dark mode, micro-interactions, and voice interfaces are becoming popular, steering fresh ways to enhance the user experience.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div className="space-y-3 p-5 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:shadow-md transition-all">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mr-2">UX</div>
                  User Experience (UX):
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Encompasses the overall experience a user has when interacting with a digital product. It involves understanding user needs, creating intuitive navigation, and ensuring the product is accessible and user-friendly.
                </p>
              </div>

              <div className="space-y-3 p-5 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:shadow-md transition-all">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                  <div className="w-8 h-8 rounded-full bg-pink-100 dark:bg-pink-900/50 text-pink-600 dark:text-pink-400 flex items-center justify-center mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  UI/UX development focuses on:
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Creating user-friendly digital products that look great and are easy to use. User Interface (UI) is all about designing the visual aspects like buttons, colors, and typography, ensuring that a product is visually appealing and interactive.
                </p>
              </div>

              <div className="space-y-3 p-5 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:shadow-md transition-all">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                  <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400 flex items-center justify-center mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
                    </svg>
                  </div>
                  On the other hand:
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  UX focuses on the utility and functionality of the user, making sure the product is easy to navigate and meets user needs/goals. UI/UX development is about blending aesthetics with function and creating products that users love and enjoy interacting with.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center p-6 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ready to transform your digital experience?</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">Let our UI/UX experts help you create user-centric designs that convert.</p>
            <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-10">
        <UxBanner />
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-800 py-6 mt-10">
        <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} UTech Solutions Pvt Ltd. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Page;