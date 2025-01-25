import React from 'react';
import { Mail, Facebook, Twitter, Instagram } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
<<<<<<< HEAD
    <footer className="bg-gradient-to-b from-transparent to-black text-white py-16">
=======
    <footer className="bg-transparent text-white py-8 sm:py-12 md:py-16">
>>>>>>> dev
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 justify-center">
          {/* Services Section */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 relative">
              Services
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-white"></span>
            </h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-300">
              <li>UI UX Design</li>
              <li>Website Development</li>
              <li>Android & iOS Apps</li>
              <li>Digital Marketing</li>
              <li>Cloud Services</li>
              <li>Ecommerce Applications</li>
              <li>AWS Hosting</li>
            </ul>
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 relative">
              Skills
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-white"></span>
            </h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-300">
              <li>Software Engineering</li>
              <li>IT Consulting</li>
              <li>Marketing</li>
              <li>Digital Marketing</li>
              <li>Product Development</li>
            </ul>
          </div>

          {/* Social Links Section */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 relative">
              Social Links
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-white"></span>
            </h3>
            <div className="flex space-x-4 text-gray-300">
              <Facebook className="w-5 h-5 sm:w-6 sm:h-6 hover:text-white transition-colors" />
              <Twitter className="w-5 h-5 sm:w-6 sm:h-6 hover:text-white transition-colors" />
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6 hover:text-white transition-colors" />
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 hover:text-white transition-colors" />
            </div>
          </div>

          {/* Address Section */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 relative">
              Contact
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-white"></span>
            </h3>
            <address className="not-italic space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-300">
              <p>PC Plaza, Rasulgarh</p>
              <p>PIN- 751010</p>
              <p>Bhubaneswar, Odisha</p>
              <p>+91 7205580247</p>
              <p>utechsolutionspvtltd@gmail.com</p>
            </address>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 sm:mt-12 border-t border-gray-700 pt-4 sm:pt-6 text-center">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 text-xs text-gray-400">
            <p>&copy; {new Date().getFullYear()} Utech Solutions. All Rights Reserved.</p>
            <div className="flex space-x-3">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="hover:text-white transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;