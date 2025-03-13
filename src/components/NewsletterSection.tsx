import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
export default function Newsletter() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-gray-900 dark:bg-transparent py-28 transition-colors duration-300">
    {/* Decorative mesh background */}
    <div
      className="absolute top-100 right-0 inset-0 opacity-20 dark:opacity-30 transition-opacity duration-300"
      style={{
        backgroundImage: `url(${encodeURI(
          "https://framerusercontent.com/images/3zzvKeH39ZfIEJWMuu6IeSmmiyw.png?scale-down-to=2048"
        )})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  
    {/* Purple gradient line */}
    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-purple-500/0 via-purple-500/70 to-purple-500/0" />
  
    <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold tracking-tight">
            <span className="text-gray-900 dark:text-white transition-colors duration-300">Join our </span>
            <span className="text-gray-500 dark:text-gray-400 transition-colors duration-300">community</span>
          </h2>
          <p className="mt-4 text-l text-gray-700 dark:text-gray-300 transition-colors duration-300">
            Join our community for exclusive insights, announcements, and
            special offers delivered directly to your inbox.
          </p>
        </div>
        <div className="flex items-center">
          <form className="flex w-full max-w-md gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-xl bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white px-4 py-3 placeholder-gray-500 dark:placeholder-gray-400 ring-1 ring-gray-300 dark:ring-gray-800 transition-all focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <button
              type="submit"
              className="rounded-xl bg-purple-600 hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-600 text-white px-6 py-3 font-semibold transition-colors shadow-md shadow-purple-500/20"
            >
              Join
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
  );
}
