import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const NewsletterSignup = () => {
  const controls = useAnimation();
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start("visible");
          } else {
            controls.start("hidden");
          }
        });
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [controls]);

  return (
    <motion.div
      ref={containerRef}
      className="bg-transparent py-20 px-4 flex flex-col items-center justify-center"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold text-white mb-3">
        Join our community
      </h2>
      <p className="text-gray-400 text-center max-w-xl mb-8">
        Join our community for exclusive insights, announcements, and special
        offers delivered directly to your inbox.
      </p>
      <div className="w-full max-w-md">
        <input
          type="email"
          placeholder="Enter your email"
          className="bg-gray-900 text-white rounded-xl py-3 px-4 w-full mb-4"
        />
        <button className=" bg-purple-500 text-white rounded-xl py-3 px-6 w-full font-medium hover:bg-purple-600 transition-colors">
          Subscribe
        </button>
      </div>
    </motion.div>
  );
};

export default NewsletterSignup;
