import React, { useEffect, useRef } from "react";

const OurExpertise = () => {
  const scrollRef = useRef(null);

  const websites = [
    {
      image:
        "https://image.lexica.art/full_webp/1d60b00e-fcd3-4d40-a993-c8fc5d018304",
      title: "Website Development",
    },
    {
      image:
        "https://image.lexica.art/full_webp/3dd66761-fda6-45f2-a8ce-70c4556fbb09",
      title: "UI/UX Development",
    },
    {
      image:
        "https://image.lexica.art/full_webp/cf3211c0-c6a4-487a-99e3-d6d17d7c6643",
      title: "ios & android Mobile Apps",
    },
  ];

  useEffect(() => {
    const scrollElement = scrollRef.current;
    let scrollPosition = 0;
    let animationFrameId;
    const scrollSpeed = 1.5; // Reduced speed for smoother scrolling

    const scroll = () => {
      if (scrollElement) {
        // Update scroll position
        scrollPosition += scrollSpeed;

        // Reset position when reaching the middle point
        if (scrollPosition >= scrollElement.scrollWidth / 2) {
          scrollPosition = 0;
          scrollElement.scrollLeft = 0;
        } else {
          scrollElement.scrollLeft = scrollPosition;
        }

        // Continue animation
        animationFrameId = requestAnimationFrame(scroll);
      }
    };

    // Start the animation
    animationFrameId = requestAnimationFrame(scroll);

    // Pause animation when tab is not visible
    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId);
      } else {
        animationFrameId = requestAnimationFrame(scroll);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div className="w-full bg-black py-16 px-4">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        Our Expertise
      </h2>

      <div className="relative w-full overflow-hidden ">
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10" />

        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-hidden whitespace-nowrap py-4 px-8 select-none"
        >
          {[...websites, ...websites, ...websites].map((site, index) => (
            <div
              key={index}
              className="inline-block w-[500px] flex-none transition-transform duration-300 hover:scale-105"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <div className="relative aspect-[2]">
                  <img
                    src={site.image}
                    alt={site.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    draggable="false"
                  />
                </div>
                <div className="bg-transparent py-3 px-4">
                  <h3 className="text-lg font-medium text-white">
                    {site.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurExpertise;
