import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
export default function Newsletter() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-transparent py-28">
      {/* Decorative mesh background */}
      <div
        className="absolute top-100 right-0 inset-0 opacity-20 "
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
              <span className="dark:text-white text-black">Join our </span>
              <span className="text-gray-500">community</span>
            </h2>
            <p className="mt-4 text-lg dark:text-gray-400 text-black">
              Join our community for exclusive insights, announcements, and
              special offers delivered directly to your inbox.
            </p>
          </div>
          <div className="flex items-center">
            <form className="flex w-full max-w-md gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-xl dark:bg-gray-900 px-4 py-3 text-white placeholder-gray-400 ring-1 ring-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <button
                type="submit"
                className="rounded-xl dark:bg-white bg-black px-6 py-3 font-semibold dark:text-black transition-colors hover:bg-gray-100 "
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
