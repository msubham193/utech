import React, { useEffect, useState } from "react";

const WorldwideSection = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate random values only on the client
    setParticles(
      [...Array(15)].map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 4}s`,
      }))
    );
  }, []);

  return (
    <div className="w-full mx-auto px-4 sm:px-8 py-16 bg-white dark:bg-transparent">
      {/* Heading */}
      <h2 className="text-2xl sm:text-4xl font-bold text-center text-black dark:text-gray-200 mb-8 sm:mb-16">
        We are worldwide
      </h2>

      {/* Map Container */}
      <div className="relative flex items-center justify-center">
        <div className="relative w-full max-w-4xl sm:px-20 md:px-40 lg:px-56">
          {/* World Map */}
          <img
            src="./worldmap.png"
            alt="World map with dot pattern"
            className="w-full h-auto object-contain"
          />

          {/* India Highlight */}
          <div className="absolute top-1/2 sm:right-1/3 right-1/4 transform -translate-y-1/2">
            <div className="relative">
              {/* Ripple Effect */}
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping"
                  style={{
                    animationDelay: `${i * 0.5}s`,
                    width: "60px",
                    height: "60px",
                  }}
                />
              ))}

              {/* Pulsing Center Dot */}
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded-full animate-pulse" />
            </div>
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {particles.map((particle, index) => (
              <div
                key={index}
                className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-500 rounded-full opacity-50"
                style={{
                  left: particle.left,
                  top: particle.top,
                  animation: `float 4s infinite`,
                  animationDelay: particle.animationDelay,
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
            transform: translate(10px, -10px);
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
};

export default WorldwideSection;
