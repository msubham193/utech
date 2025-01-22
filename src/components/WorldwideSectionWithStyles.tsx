import React from "react";

const WorldwideSection = () => {
  return (
    <div className="w-full  mx-auto px-4 py-16 bg-transparent ">
      <h2 className="text-4xl font-bold text-center text-gray mb-16">
        We are worldwide
      </h2>

      <div className="relative w-full items-center justify-center align-middle">
        {/* Base map image with dot pattern */}
        <div className="relative px-56 ">
          <img
            src="./worldmap.png"
            alt="World map with dot pattern"
            className="w-full  h-full object-contain"
          />

          {/* India highlight overlay */}
          <div className="absolute right-1/3 top-1/2 transform -translate-y-1/2">
            <div className="relative">
              {/* Ripple effect for India */}
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className={`
                    absolute inset-0 rounded-full bg-blue-500/20
                    animate-ping
                  `}
                  style={{
                    animationDelay: `${i * 0.5}s`,
                    width: "100px",
                    height: "100px",
                  }}
                />
              ))}

              {/* Center dot for India */}
              <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse" />
            </div>
          </div>

          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(15)].map((_, index) => (
              <div
                key={index}
                className="absolute w-1.5 h-1.5 bg-blue-500 rounded-full opacity-50"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float 4s infinite`,
                  animationDelay: `${Math.random() * 4}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translate(0, 0);
            opacity: 0;
          }
          50% {
            transform: translate(20px, -20px);
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
};

export default WorldwideSection;
