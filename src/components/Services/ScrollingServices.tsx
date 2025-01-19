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
    <div className="w-full overflow-hidden bg-black py-8">
      <div className="flex animate-scroll">
        {services.map((service, index) => (
          <div key={index} className="flex items-center flex-shrink-0 mx-8">
            <div className="flex items-center">
              <div className="bg-gray-800 rounded-full p-2 mr-4">
                <div className="text-white">{service.icon}</div>
              </div>
              <h3 className="text-xl font-medium text-white">
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
