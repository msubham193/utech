import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

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
    // Ensure the active card is always in the center
    const startIdx = (activeIndex - 1 + websites.length) % websites.length;
    return [
      websites[startIdx],
      websites[activeIndex],
      websites[(activeIndex + 1) % websites.length],
    ];
  };

  return (
    <div className="w-full bg-[#121219] py-20 px-4">
      <h2 className="text-4xl font-bold text-center text-white ">
        Our Expertise
      </h2>

      <div className="relative w-full max-w-[80%] mx-auto overflow-hidden ">
        <div className="flex justify-center items-center gap-4 py-4 px-8 w-full">
          {getVisibleWebsites().map((site, index) => {
            const isCenter = index === 1;
            const cardIndex = (activeIndex + index - 1 + websites.length) % websites.length;

            return (
              <div
                key={index}
                className={`inter-var transition-transform duration-500 ease-in-out ${
                  isCenter ? "scale-110" : "scale-90 opacity-75"
                }`}
                onClick={() => handleClick(cardIndex)}
              >
                <CardContainer>
                  <CardBody className="bg-[#1B1B22] relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold text-white"
                    >
                      {site.title}
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-neutral-500 text-sm max-w-sm mt-2 text-neutral-300"
                    >
                      Hover over this card to unleash the power of CSS perspective
                    </CardItem>
                    <CardItem translateZ="100" className="w-full mt-4">
                      <img
                        src={site.image}
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                      />
                    </CardItem>
                    <div className="flex justify-between items-center mt-20">
                      {/* <CardItem
                        translateZ={20}
                        href="https://twitter.com/mannupaaji"
                        target="__blank"
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                      >
                        Try now →
                      </CardItem> */}
                      <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
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