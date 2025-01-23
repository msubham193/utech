import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { BorderBeam } from "./ui/border-beam";

const StatsCard = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 p-16 items-center justify-between align-middle">
      <Card className="bg-[#1B1B22] text-white p-8 rounded-3xl shadow-lg shadow-black md:w-96 border-none relative">
        <BorderBeam />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-bold">About Utech</h2>
          <p className="text-gray-300 text-sm">
            At Utech, we specialize in delivering cutting-edge digital solutions
            across mobile, web, and AI domains. Our expertise spans iOS and
            Android development, artificial intelligence integration, and
            comprehensive web development services
          </p>
          <button className="bg-white hover:bg-purple-600 hover:text-white text-black px-6 py-3 rounded-full text-sm font-semibold transition-colors">
            Enquiry Now
          </button>
        </motion.div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <h3 className="text-4xl font-bold text-white mb-3">10+ Lakhs</h3>
          <p className="text-gray-300 text-xl">Funded</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-4xl font-bold text-white mb-3">10+</h3>
          <p className="text-gray-300 text-xl">Project Delivered</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-4xl font-bold text-white mb-3">32+</h3>
          <p className="text-gray-300 text-xl">Happy Client</p>
        </motion.div>
      </div>
    </div>
  );
};

export default StatsCard;
