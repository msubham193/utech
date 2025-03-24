import React from "react"; 
import { Mail, Facebook, Twitter, Instagram } from "lucide-react";

const FooterNav = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className=" bg-gradient-to-b dark:from-transparent dark:to-black from-white to-white text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Services Column */}
          <div className="mx-auto w-full max-w-xs dark:text-white text-black">
            <h3 className="text-lg font-semibold mb-4 border-b  dark:border-white border-black pb-2">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              {["UI UX Design", "Web Development", "Mobile Apps", "Digital Marketing", "Cloud Services", "Ecommerce", "AWS Hosting"].map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
          {/* Contact Column */}
          <div className="mx-auto w-full max-w-xs dark:text-white text-black">
            <h3 className="text-lg font-semibold mb-4 border-b  dark:border-white border-black pb-2">
              Contact
            </h3>
            <address className="not-italic space-y-2 text-sm dark:text-white text-black">
              <p>PC Plaza, Rasulgarh</p>
              <p>Bhubaneswar, Odisha - 751010</p>
              <p>+91 8984140247</p>
              <p>+91 8018606465</p>
              <p>hr@utkaltechsolutions.com</p>
              <p>sales@utkaltechsolutions.com</p>
            </address>
            <div className="flex space-x-4 mt-4 dark:text-white text-black">
              <a href="#" aria-label="Facebook">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" aria-label="Email">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          {/* Legal Column */}
          <div className="mx-auto w-full max-w-xs dark:text-white text-black">
            <h3 className="text-lg font-semibold mb-4 border-b  dark:border-white border-black pb-2">
              Legal
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-of-service" className="hover:underline">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/cookie-policy" className="hover:underline">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Separate Copyright Section */}
      <div className="dark:bg-black bg-white dark:text-white text-black py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © {currentYear} UTech Solutions Pvt Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterNav;