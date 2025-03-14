"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Why Client Trusts on Utech Solutions?",
    answer:
      "Clients trust Utech Solutions because of our proven track record of delivering high-quality, innovative, and reliable IT solutions. We prioritize client satisfaction, transparency, and timely delivery, ensuring that our services meet and exceed expectations.",
  },
  {
    question: "Which Services Offered by Utech Solutions?",
    answer:
      "Utech Solutions offers a wide range of services including software development, web and mobile app development, cloud computing, IT consulting, cybersecurity solutions, and digital transformation services. We tailor our solutions to meet the unique needs of each client.",
  },
  {
    question: "In which region Utech Solutions based on?",
    answer:
      "Utech Solutions is based in India, with a strong presence in multiple regions across the country. We serve clients both locally and globally, providing top-notch IT solutions and support.",
  },
  {
    question: "How can a client connect with Utech Solutions?",
    answer:
      "Clients can connect with Utech Solutions through our website contact form, email, or phone. Our team is available to assist with inquiries, provide consultations, and discuss project requirements to ensure a seamless collaboration.",
  },
  {
    question: "Why is Utech Solutions popular in India?",
    answer:
      "Utech Solutions is popular in India due to our commitment to delivering cutting-edge technology solutions, exceptional customer service, and cost-effective services. Our ability to adapt to the evolving IT landscape and cater to diverse industries has earned us a strong reputation in the market.",
  },
];

export default function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="min-h-screen bg-gray-50 dark:bg-transparent text-black dark:text-white py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300"
  >
    <div className="max-w-3xl mx-auto">
      {/* Heading */}
      <h2 className="text-2xl sm:text-4xl font-semibold mb-4 text-gray-900 dark:text-white transition-colors duration-300">
        Frequently Asked <span className="text-gray-500 dark:text-gray-400 transition-colors duration-300">Questions</span>
      </h2>
      <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-12 transition-colors duration-300">
        Seamlessly use your preferred tools for unified work, start to finish.
      </p>
  
      {/* FAQ Items */}
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
            {/* Question */}
            <button
              onClick={() =>
                setExpandedIndex(expandedIndex === index ? null : index)
              }
              className="w-full py-3 sm:py-4 flex justify-between items-center text-left focus:outline-none"
            >
              <span className="text-sm sm:text-lg font-medium text-gray-900 dark:text-white transition-colors duration-300">
                {item.question}
              </span>
              <motion.div
                animate={{ rotate: expandedIndex === index ? 45 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500 dark:text-gray-400 transition-colors duration-300" />
              </motion.div>
            </button>
  
            {/* Answer (Collapsible) */}
            <AnimatePresence>
              {expandedIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="pb-4 sm:pb-6 text-gray-600 dark:text-gray-400 text-sm sm:text-base transition-colors duration-300">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
  );
}

