"use client";
import React from "react";
import { BorderBeam } from "../ui/border-beam";
import { NeonGradientCard } from "../ui/neon-gradient-card";
import { TextAnimate } from "../ui/text-animate";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";

const Hero = () => {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-b bg-[#121219] pt-16 px-6">
      {/* TOP SECTION - Side by Side Layout */}

      <BackgroundBeamsWithCollision>
        {" "}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-5">
          <div className="text-left ml-10 w-full">
            <h1 className="text-4xl md:text-[2.65rem] font-bold text-white mb-6 leading-relaxed ">
              Transforming Ideas into Digital Success with
              <span className="text-purple-500"> UTECH</span>
            </h1>
            <TextAnimate className="text-gray-400 text-lg mb-8">
              Transform task management with TodoFusion. Combine powerful to-do
              lists, productivity tracking, and seamless integrations to stay
              focused and achieve more
            </TextAnimate>
          </div>
          {/* Left Side - Animated Element */}
          <div className="relative">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl -z-10" />
            <div className="relative w-full aspect-square">
              {/* Animated Floating Spheres */}
              <div className="absolute w-32 h-32 bg-purple-500/30 rounded-full animate-pulse top-1/4 right-1/4" />
              <div className="absolute w-24 h-24 bg-blue-500/30 rounded-full animate-bounce delay-200 top-1/2 left-1/4" />
              <div className="absolute w-40 h-40 bg-indigo-500/30 rounded-full animate-pulse delay-500 bottom-1/4 left-1/3" />

              {/* Central Glowing Element */}
              <div className="absolute top-1/2 right-10 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative w-48 h-48">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full animate-spin-slow blur-xl opacity-50" />
                  <div className="absolute inset-4 bg-[#121219] rounded-full" />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-75 animate-pulse" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Text Content */}
        </div>
      </BackgroundBeamsWithCollision>
=======
    <div className="min-h-screen bg-gradient-to-b bg-[#121219] pt-20 px-4 sm:px-6 lg:px-8">
      {/* TOP SECTION - Optimized Layout */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-8 lg:mb-12">
        {/* Text Content - Improved Typography */}
        <div className="text-left w-full px-4 sm:px-6 lg:px-10 order-2 lg:order-1">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-relaxed tracking-tight sm:tracking-normal lg:tracking-wide">
            <span className="block mb-2">Transforming Ideas</span>
            <span className="block text-[0.9em] tracking-wide">
              into Digital Success with
              <span className="text-purple-500 ml-2 inline-block transform hover:scale-105 transition-transform duration-300 tracking-wider"> 
                UTECH
              </span>
            </span>
          </h1>
          <TextAnimate className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed tracking-wide max-w-xl">
            Empowering businesses with innovative tech solutions, UTECH drives
            digital transformation, streamlines processes, and delivers
            scalable, impactful results with cutting-edge software and seamless
            experiences.
          </TextAnimate>
        </div>

        {/* Optimized Animated Element */}
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] order-1 lg:order-2 overflow-hidden">
          {/* Background Gradient - Reduced blur for better performance */}
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-2xl -z-10" />

          {/* Floating Spheres - Hidden on mobile */}
          <div className="hidden md:block">
            <div className="absolute w-20 md:w-24 lg:w-32 h-20 md:h-24 lg:h-32 bg-purple-500/30 rounded-full animate-[pulse_3s_ease-in-out_infinite] top-1/4 right-1/4 transform-gpu" />
            <div className="absolute w-16 md:w-20 lg:w-24 h-16 md:h-20 lg:h-24 bg-blue-500/30 rounded-full animate-[bounce_4s_ease-in-out_infinite] top-1/2 left-1/4 transform-gpu" />
            <div className="absolute w-24 md:w-32 lg:w-40 h-24 md:h-32 lg:h-40 bg-indigo-500/30 rounded-full animate-[pulse_5s_ease-in-out_infinite] bottom-1/4 left-1/3 transform-gpu" />
          </div>

          {/* Central Element - Optimized for performance */}
          <div className="absolute top-1/2 left-1/2 lg:left-auto lg:right-10 transform -translate-x-1/2 -translate-y-1/2 lg:translate-x-0">
            <div className="relative w-32 sm:w-40 lg:w-48 h-32 sm:h-40 lg:h-48">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full animate-[spin_8s_linear_infinite] blur-lg opacity-50 transform-gpu" />
              <div className="absolute inset-4 bg-[#121219] rounded-full" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-75 animate-[pulse_2s_ease-in-out_infinite] transform-gpu" />
            </div>
          </div>
        </div>
      </div>
>>>>>>> dev

      {/* Bottom Section - Optimized Image Loading */}
      <div className="max-w-6xl mx-auto mb-20 sm:mb-28 lg:mb-36 px-4 sm:px-6">
        <NeonGradientCard className="relative overflow-hidden">
          <div className="bg-gradient-to-r from-purple-500/30 to-blue-500/30 absolute inset-0 blur-2xl -z-10" />
          <img
            src="./banner1.png"
            alt="TodoFusion App Interface"
            className="w-full rounded-lg sm:rounded-2xl border border-gray-800 shadow-2xl relative"
            loading="lazy"
          />
        </NeonGradientCard>
      </div>
    </div>
  );
};

export default Hero;
