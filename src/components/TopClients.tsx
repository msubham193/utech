import React from "react";

const TopClients = () => {
  const clients = [
    { id: 1, name: "AdiAqua" },
    { id: 2, name: "Fedison" },
    { id: 3, name: "Kenstar" },
    { id: 4, name: "Smkart" },
    { id: 5, name: "Redbus" },
    { id: 6, name: "Adda247" },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-20 bg-white dark:bg-transparent ">
      {/* Title with decorative lines */}
      <div className="flex items-center justify-center mb-20">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-900  dark:via-gray-300 to-transparent" />
        <h2 className="text-3xl font-bold text-black dark:text-slate-300 px-8 whitespace-nowrap">
          Our Top clients
        </h2>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-900  dark:via-gray-300 to-transparent" />
      </div>

      {/* Clients grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12">
        {clients.map((client) => (
          <div
            key={client.id}
            className="group relative flex items-center justify-center"
          >
            <div className="relative">
              {/* Logo placeholder */}
              <div className="w-32 h-16 flex items-center justify-center">
                <span className="text-lg text-black dark:text-gray-300 font-medium group-hover:text-gray-400 transition-colors duration-300">
                  {client.name}
                </span>
              </div>

              {/* Hover effect underline */}
              <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gray-800 group-hover:w-full transition-all duration-300 transform -translate-x-1/2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopClients;
