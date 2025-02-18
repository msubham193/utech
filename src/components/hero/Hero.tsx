"use client";
import React from "react";
import { BorderBeam } from "../ui/border-beam";
import { NeonGradientCard } from "../ui/neon-gradient-card";
import { TextAnimate } from "../ui/text-animate";

const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-[#121219] dark:to-[#121219] pt-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-5">
        {/* Left Side - Text Content */}
        <div className="text-center md:text-left md:ml-10 w-full mt-14">
          <h1 className="text-3xl sm:text-4xl md:text-[2.65rem] font-bold text-gray-900 dark:text-white mb-6 leading-tight sm:leading-relaxed">
            Transforming Ideas into Digital Success with
            <span className="text-purple-600 dark:text-purple-500"> UTECH</span>
          </h1>
          <TextAnimate className="text-gray-600 dark:text-gray-400 text-base sm:text-lg mb-8">
            Transform task management with TodoFusion. Combine powerful to-do
            lists, productivity tracking, and seamless integrations to stay
            focused and achieve more
          </TextAnimate>
        </div>

        {/* Right Side - Animated Element */}
        <div className="relative mt-4 md:mt-0">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 dark:from-purple-500/20 dark:to-blue-500/20 blur-3xl -z-10" />
          <div className="relative w-full aspect-square">
            {/* Animated Floating Spheres */}
            <div className="absolute w-20 h-20 sm:w-32 sm:h-32 bg-purple-400/20 dark:bg-purple-500/30 rounded-full animate-pulse top-1/4 right-1/4" />
            <div className="absolute w-16 h-16 sm:w-24 sm:h-24 bg-blue-400/20 dark:bg-blue-500/30 rounded-full animate-bounce delay-200 top-1/2 left-1/4" />
            <div className="absolute w-24 h-24 sm:w-40 sm:h-40 bg-indigo-400/20 dark:bg-indigo-500/30 rounded-full animate-pulse delay-500 bottom-1/4 left-1/3" />

            {/* Central Glowing Element */}
            <div className="absolute top-1/2 right-10 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative w-32 h-32 sm:w-48 sm:h-48">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 dark:from-purple-600 dark:to-blue-600 rounded-full animate-spin-slow blur-xl opacity-50" />
                <div className="absolute inset-4 bg-gray-50 dark:bg-[#121219] rounded-full" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 dark:from-purple-500 dark:to-blue-500 rounded-full opacity-75 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - App Screenshot */}
      <div className="max-w-6xl mx-auto pb-16 sm:pb-36">
        <NeonGradientCard className="relative">
          <div className="bg-gradient-to-r from-purple-400/20 to-blue-400/20 dark:from-purple-500/30 dark:to-blue-500/30 absolute inset-0 blur-3xl -z-10" />
          <img
            src="./banner2.png"
            alt="TodoFusion App Interface"
            className="w-full rounded-2xl border border-gray-200 dark:border-gray-800 shadow-2xl relative"
          />
        </NeonGradientCard>
      </div>
    </div>
  );
};

export default Hero;