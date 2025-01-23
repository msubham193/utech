import React, { useState, useEffect } from 'react';

const WorldwideSection = () => {
  const [particleCount, setParticleCount] = useState(8);

  useEffect(() => {
    const updateParticleCount = () => {
      setParticleCount(window.innerWidth > 768 ? 15 : 8);
    };

    // Set initial particle count
    updateParticleCount();

    // Add event listener for window resize
    window.addEventListener('resize', updateParticleCount);

    // Cleanup event listener
    return () => window.removeEventListener('resize', updateParticleCount);
  }, []);

  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-transparent">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray mb-8 sm:mb-12 lg:mb-16 tracking-tight">
        We are worldwide
      </h2>

      <div className="relative w-full max-w-7xl mx-auto">
        <div className="relative px-4 sm:px-12 md:px-20 lg:px-32 xl:px-56">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl blur-3xl" />
          
          <div className="relative">
            <img
              src="./worldmap.png"
              alt="World map with dot pattern"
              className="w-full h-auto object-contain"
              loading="lazy"
            />

            <div className="absolute right-[28%] sm:right-[30%] md:right-[32%] top-[45%] transform -translate-y-1/2">
              <div className="relative">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full bg-blue-500/20 animate-ping transform-gpu"
                    style={{
                      animationDelay: `${i * 0.5}s`,
                      width: 'clamp(40px, 8vw, 100px)',
                      height: 'clamp(40px, 8vw, 100px)',
                      left: '50%',
                      top: '50%',
                      transform: 'translate(-50%, -50%)',
                    }}
                  />
                ))}

                <div className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-blue-500 rounded-full animate-pulse transform-gpu" />
              </div>
            </div>

            <div className="absolute inset-0 overflow-hidden">
              {[...Array(particleCount)].map((_, index) => (
                <div
                  key={index}
                  className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-500 rounded-full opacity-50 transform-gpu"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: 'float 4s infinite',
                    animationDelay: `${Math.random() * 4}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(0.8);
            opacity: 0;
          }
          50% {
            transform: translate(clamp(10px, 2vw, 20px), clamp(-10px, -2vw, -20px)) scale(1);
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
};

export default WorldwideSection;