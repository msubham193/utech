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
    <div className="relative w-full overflow-hidden bg-[#121219] py-8">
      {/* Left gradient overlay */}
      <div className="absolute left-0 top-0 z-10 h-full w-56 bg-gradient-to-r from-[#121219] to-transparent" />

      {/* Right gradient overlay */}
      <div className="absolute right-0 top-0 z-10 h-full w-56 bg-gradient-to-l from-[#121219] to-transparent" />

      {/* Scrolling content */}
      <div className="flex animate-scroll relative">
        {services.map((service, index) => (
          <div key={index} className="flex items-center flex-shrink-0 mx-8">
            <div className="flex items-center">
              <div className="bg-gray-800 rounded-full p-2 mr-4">
                <div className="text-white">{service.icon}</div>
              </div>
              <h3 className="text-lg font-medium text-slate-300">
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
      `}</style>
    </div>
  );
};

export default ScrollingServices;
