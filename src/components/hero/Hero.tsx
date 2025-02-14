"use client";
import React from "react";
import { BorderBeam } from "../ui/border-beam";
import { NeonGradientCard } from "../ui/neon-gradient-card";
import { TextAnimate } from "../ui/text-animate";

const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-[#121219] dark:to-[#121219] pt-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-5">
        <div className="text-left ml-10 w-full">
          <h1 className="text-4xl md:text-[2.65rem] font-bold text-gray-900 dark:text-white mb-6 leading-relaxed">
            Transforming Ideas into Digital Success with
            <span className="text-purple-600 dark:text-purple-500"> UTECH</span>
          </h1>
          <TextAnimate className="text-gray-600 dark:text-gray-400 text-lg mb-8">
            Transform task management with TodoFusion. Combine powerful to-do
            lists, productivity tracking, and seamless integrations to stay
            focused and achieve more
          </TextAnimate>
        </div>

        {/* Left Side - Animated Element */}
        <div className="relative">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 dark:from-purple-500/20 dark:to-blue-500/20 blur-3xl -z-10" />
          <div className="relative w-full aspect-square">
            {/* Animated Floating Spheres */}
            <div className="absolute w-32 h-32 bg-purple-400/20 dark:bg-purple-500/30 rounded-full animate-pulse top-1/4 right-1/4" />
            <div className="absolute w-24 h-24 bg-blue-400/20 dark:bg-blue-500/30 rounded-full animate-bounce delay-200 top-1/2 left-1/4" />
            <div className="absolute w-40 h-40 bg-indigo-400/20 dark:bg-indigo-500/30 rounded-full animate-pulse delay-500 bottom-1/4 left-1/3" />

            {/* Central Glowing Element */}
            <div className="absolute top-1/2 right-10 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative w-48 h-48">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 dark:from-purple-600 dark:to-blue-600 rounded-full animate-spin-slow blur-xl opacity-50" />
                <div className="absolute inset-4 bg-gray-50 dark:bg-[#121219] rounded-full" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 dark:from-purple-500 dark:to-blue-500 rounded-full opacity-75 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - App Screenshot */}
      <div className="max-w-6xl mx-auto pb-36">
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
