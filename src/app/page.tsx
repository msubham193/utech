"use client";
import Hero from "@/components/hero/Hero";
import OurExpertise from "@/components/OurExpertise";
import ScrollingServices from "@/components/Services/ScrollingServices";
import DotPattern from "@/components/ui/dot-pattern";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import ScrollProgress from "@/components/ui/scroll-progress";

import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black h-screen text-white items-center justify-center align-middle">
      <ScrollProgress className="top-0" />

      <DotPattern />
      <Hero />
      <ScrollingServices />
      <OurExpertise />
    </div>
  );
}
