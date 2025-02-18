import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { BorderBeam } from "./ui/border-beam";

const StatsCard = () => {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:gap-8 px-6 py-12 md:p-16 items-center justify-center bg-gray-50 dark:bg-transparent transition-colors duration-300">
      {/* About Utech Card */}
      <Card className="bg-white dark:bg-[#1B1B22] text-gray-900 dark:text-white px-6 py-8 md:p-8 rounded-3xl shadow-lg dark:shadow-black w-full md:w-96 border-none relative transition-colors duration-300">
        <BorderBeam />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4 text-center md:text-left"
        >
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
            About Utech
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base transition-colors duration-300">
            At Utech, we specialize in delivering cutting-edge digital solutions
            across mobile, web, and AI domains. Our expertise spans iOS and
            Android development, artificial intelligence integration, and
            comprehensive web development services.
          </p>
          <button className="bg-gray-900 hover:bg-purple-600 text-white dark:bg-white dark:text-black dark:hover:bg-purple-600 dark:hover:text-white px-4 md:px-6 py-2 md:py-3 rounded-full text-sm font-semibold transition-all duration-300">
            Enquiry Now
          </button>
        </motion.div>
      </Card>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 items-center w-full">
        {[
          { value: "10+ Lakhs", label: "Funded", delay: 0.2 },
          { value: "10+", label: "Projects Delivered", delay: 0.4 },
          { value: "32+", label: "Happy Clients", delay: 0.6 },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: stat.delay }}
            className="text-center"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 md:mb-3 transition-colors duration-300">
              {stat.value}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl transition-colors duration-300">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StatsCard;
