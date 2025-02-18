import React from "react";
import { Settings2, Award, User } from "lucide-react";

const ScrollingServices = () => {
  const services = [
    {
      icon: <Settings2 size={20} />,
      title: "Customized Solutions",
    },
    {
      icon: <Award size={20} />,
      title: "Commitment to Excellence",
    },
    {
      icon: <User size={20} />,
      title: "Client-Centric Approach",
    },
    // Duplicate items for seamless scrolling
    {
      icon: <Settings2 size={20} />,
      title: "Customized Solutions",
    },
    {
      icon: <Award size={20} />,
      title: "Commitment to Excellence",
    },
    {
      icon: <User size={20} />,
      title: "Client-Centric Approach",
    },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-gray-50 dark:bg-[#121219] py-6 sm:py-8">
      {/* Left gradient overlay */}
      <div className="absolute left-0 top-0 z-10 h-full w-24 sm:w-56 bg-gradient-to-r from-gray-50 to-transparent dark:from-[#121219] dark:to-transparent" />

      {/* Right gradient overlay */}
      <div className="absolute right-0 top-0 z-10 h-full w-24 sm:w-56 bg-gradient-to-l from-gray-50 to-transparent dark:from-[#121219] dark:to-transparent" />

      {/* Scrolling content */}
      <div className="flex animate-scroll relative">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex items-center flex-shrink-0 mx-4 sm:mx-8"
          >
            <div className="flex items-center">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-full p-2 sm:p-3 mr-3 sm:mr-4 shadow-lg transition-colors duration-200">
                <div className="text-gray-700 dark:text-white transition-colors duration-200">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-sm sm:text-lg font-medium text-gray-700 dark:text-slate-300 transition-colors duration-200">
                {service.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        /* Optional: Pause animation on hover */
        .animate-scroll:hover {
          animation-play-state: paused;
        }

        /* Adjust animation speed for mobile */
        @media (max-width: 640px) {
          .animate-scroll {
            animation-duration: 15s;
          }
        }
      `}</style>
    </div>
  );
};

export default ScrollingServices;
