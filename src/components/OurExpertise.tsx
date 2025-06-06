"use client";

import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

const OurExpertise = () => {
  const router = useRouter(); // Initialize router
  const websites = [
    {
      title: "Website Development",
      image:
        "https://image.lexica.art/full_webp/3dd66761-fda6-45f2-a8ce-70c4556fbb09",
      path: "/expertise/website-development", // Define route
    },
    {
      title: "UI/UX Development",
      image:
        "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      path: "/expertise/ui-ux-development", // Define route
    },
    {
      title: "iOS & Android Mobile Apps",
      image:
        "https://image.lexica.art/full_webp/cf3211c0-c6a4-487a-99e3-d6d17d7c6643",
      path: "/expertise/mobile-apps", // Define route
    },
  ];

  const [activeIndex, setActiveIndex] = useState(1);

  // Handle swipe gestures
  const handlers = useSwipeable({
    onSwipedLeft: () => setActiveIndex((prev) => (prev + 1) % websites.length),
    onSwipedRight: () =>
      setActiveIndex((prev) => (prev - 1 + websites.length) % websites.length),
    trackMouse: true,
  });

  const getVisibleWebsites = () => {
    const startIdx = (activeIndex - 1 + websites.length) % websites.length;
    return [
      websites[startIdx],
      websites[activeIndex],
      websites[(activeIndex + 1) % websites.length],
    ];
  };

  // Handle navigation on card click
  const handleCardClick = (path: string) => {
    router.push(path); // Navigate to the specified path
  };

  return (
    <div
      {...handlers}
      className="w-full bg-gray-50 dark:bg-[#121219] py-12 sm:py-20 px-4 transition-colors duration-300"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white transition-colors duration-300">
        Our Expertise
      </h2>

      <div className="relative w-full max-w-[90%] sm:max-w-[80%] mx-auto overflow-hidden">
        <div className="flex justify-center items-center gap-2 sm:gap-4 py-4 px-2 sm:px-8 w-full">
          {getVisibleWebsites().map((site, index) => {
            const isCenter = index === 1;
            const cardIndex =
              (activeIndex + index - 1 + websites.length) % websites.length;

            return (
              <div
                key={index}
                className={`inter-var transition-all duration-500 ease-in-out ${
                  isCenter ? "scale-100 sm:scale-110" : "scale-90 opacity-75"
                } cursor-pointer`}
                onClick={() => {
                  setActiveIndex(cardIndex); // Update active index
                  handleCardClick(site.path); // Navigate to the specific page
                }}
              >
                <CardContainer>
                  <CardBody
                    className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] transition-colors duration-300
                    bg-white dark:bg-[#1B1B22] 
                    shadow-lg dark:shadow-md shadow-gray-200 dark:shadow-black 
                    border border-gray-200 dark:border-white/[0.2] 
                    w-[18rem] sm:w-[30rem] h-auto rounded-xl p-4 sm:p-6"
                  >
                    <CardItem
                      translateZ="50"
                      className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300"
                    >
                      {site.title}
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-gray-600 dark:text-neutral-300 text-xs sm:text-sm max-w-sm mt-2 transition-colors duration-300"
                    >
                      Hover over this card to unleash the power of CSS
                      perspective
                    </CardItem>
                    <CardItem translateZ="100" className="w-full mt-4">
                      <img
                        src={site.image}
                        height="1000"
                        width="1000"
                        className="h-40 sm:h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt={site.title}
                      />
                    </CardItem>
                    <div className="flex justify-between items-center mt-12 sm:mt-20">
                      <CardItem
                        translateZ={20}
                        as="button"
                        className="px-3 py-1 sm:px-4 sm:py-2 rounded-xl transition-colors duration-300
                          bg-gray-900 dark:bg-white 
                          text-white dark:text-black 
                          hover:bg-gray-800 dark:hover:bg-gray-100
                          text-xs font-bold"
                        onClick={(e: any) => {
                          e.stopPropagation(); // Prevent card click from triggering
                          handleCardClick(site.path); // Navigate on button click
                        }}
                      >
                        See details
                      </CardItem>
                    </div>
                  </CardBody>
                </CardContainer>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurExpertise;
