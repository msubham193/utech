import React from 'react';
import { Mail, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-transparent text-white py-16 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 justify-center">
          {/* Services Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative">
              Services
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-white"></span>
            </h3>
            <ul className="space-y-2 text-sm">
              <li>UI UX Design</li>
              <li>Website Development</li>
              <li>Android & ios Apps</li>
              <li>Digital Marketing</li>
              <li>Cloud Services</li>
              <li>Ecommerce Applications</li>
              <li>AWS Hosting</li>
            </ul>
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative">
              Skills
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-white"></span>
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Software Engineering</li>
              <li>IT Consulting</li>
              <li>Marketing</li>
              <li>Digital Marketing</li>
              <li>Product Development</li>
            </ul>
          </div>

          {/* Social Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative">
              Social Links
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-white"></span>
            </h3>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6" />
              <Twitter className="w-6 h-6" />
              <Instagram className="w-6 h-6" />
              <Mail className="w-6 h-6" />
            </div>
          </div>

          {/* Address Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative">
              Address
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-white"></span>
            </h3>
            <address className="not-italic space-y-2 text-sm">
              <p>PC Plaza,</p>
              <p>Rasulgarh</p>
              <p>PIN- 751010</p>
              <p>Bhubaneswar,Odisha</p>
              <p>+91 7205580247</p>
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;