import React, { useState } from "react";

const OurExpertise = () => {
  const websites = [
    {
      title: "Website Development",
      image:
        "https://image.lexica.art/full_webp/3dd66761-fda6-45f2-a8ce-70c4556fbb09",
    },
    {
      title: "UI/UX Development",
      image:
        "https://image.lexica.art/full_webp/1d60b00e-fcd3-4d40-a993-c8fc5d018304",
    },
    {
      title: "iOS & Android Mobile Apps",
      image:
        "https://image.lexica.art/full_webp/cf3211c0-c6a4-487a-99e3-d6d17d7c6643",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(1);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  const getVisibleWebsites = () => {
    const items = [...websites, ...websites, ...websites];
    const startIdx = activeIndex;
    return items.slice(startIdx, startIdx + 3);
  };

  return (
    <div className="w-full bg-[#121219] py-24 px-4">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        Our Expertise
      </h2>

      <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#121219] to-transparent z-10" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#121219] to-transparent z-10" />

        <div className="flex justify-center items-center gap-8 py-4 px-8">
          {getVisibleWebsites().map((site, index) => {
            const isCenter = index === 1;

            return (
              <div
                key={index}
                className={`
                  relative 
                  cursor-pointer 
                  transition-all 
                  duration-500 
                  ease-in-out
                  ${
                    isCenter
                      ? "w-[600px] scale-110 z-10"
                      : "w-[400px] opacity-70"
                  }
                `}
                onClick={() =>
                  handleClick(
                    index === 0
                      ? activeIndex - 1
                      : index === 2
                      ? activeIndex + 1
                      : activeIndex
                  )
                }
              >
                <div className="rounded-2xl overflow-hidden shadow-2xl bg-transparent">
                  <div className="relative aspect-[2]">
                    <img
                      src={site.image}
                      alt={site.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      draggable="false"
                    />
                  </div>
                  <div className="py-4 px-6 text-center">
                    <h3
                      className={`
                      font-medium 
                      text-white 
                      transition-all 
                      duration-500
                      ${isCenter ? "text-xl" : "text-lg"}
                    `}
                    >
                      {site.title}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurExpertise;
