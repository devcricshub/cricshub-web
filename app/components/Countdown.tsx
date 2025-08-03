'use client';

import { useState } from "react"; // Import the useState hook

export default function Countdown() {
  const [isNotified, setIsNotified] = useState(false);

  const handleNotifyMeClick = () => {
    setIsNotified(true);
  };

  const stats = [
    {
      number: "100K+",
      label: "Live Matches Projected",
      icon: "ri-play-circle-line",
      gradient: "from-blue-500 to-blue-600",
      color: "text-blue-600"
    },
    {
      number: "50K+",
      label: "YouTube Streams Supported",
      icon: "ri-youtube-line",
      gradient: "from-red-500 to-red-600",
      color: "text-red-600"
    },
    {
      number: "5K+",
      label: "Tournaments Empowered",
      icon: "ri-trophy-line",
      gradient: "from-yellow-500 to-yellow-600",
      color: "text-yellow-600"
    },
    {
      number: "1M+",
      label: "Future Fantasy Players",
      icon: "ri-star-line",
      gradient: "from-purple-500 to-purple-600",
      color: "text-purple-600"
    }
  ];

  return (
    <section className="py-24 bg-white text-gray-800 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-32 left-32 w-40 h-40 bg-gray-100/50 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-40 right-40 w-32 h-32 bg-gray-200/50 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div 
            className="inline-block bg-gray-100/50 backdrop-blur-sm text-gray-700 px-6 py-2 rounded-full text-sm font-semibold mb-4 border border-gray-300"
            data-aos="fade-up" // Added AOS
          >
            GET READY FOR THE FUTURE OF CRICKET
          </div>
          <h2 
            className="text-5xl md:text-6xl font-bold text-gray-800 mb-6"
            data-aos="fade-up" data-aos-delay="100" // Added AOS
          >
            Experience the Cricket
            <span className="block bg-gradient-to-r from-gray-600 to-gray-400 bg-clip-text text-transparent">
              Revolution
            </span>
          </h2>
          <p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up" data-aos-delay="200" // Added AOS
          >
            Prepare to transform your game experience with CricsHub's upcoming comprehensive platform – launching soon!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl p-8 text-center hover:bg-gray-50 transition-all duration-500 transform hover:-translate-y-4 group border border-gray-200 shadow-sm"
              data-aos="fade-up" // Fade up animation
              data-aos-delay={index * 100 + 300} // Stagger delay for each card
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <i className={`${stat.icon} text-3xl text-white`}></i>
              </div>
              <div className="text-4xl md:text-5xl font-bold text-gray-800 mb-2 group-hover:scale-105 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-gray-600 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div 
            className="bg-white rounded-3xl p-8 max-w-2xl mx-auto border border-gray-200 shadow-sm"
            data-aos="fade-up" data-aos-delay="700" // Added AOS
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Get Started?</h3>
            <p className="text-gray-600 mb-6">Be among the first to experience CricsHub! Sign up for updates.</p>
            
            <button
              onClick={handleNotifyMeClick}
              disabled={isNotified}
              className={`group relative px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl whitespace-nowrap cursor-pointer overflow-hidden ${
                isNotified
                  ? "bg-green-500 text-white pointer-events-none"
                  : "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white"
              }`}
            >
              <span className="relative z-10 flex items-center justify-center">
                {isNotified ? (
                  <i className="ri-check-line mr-3 text-xl"></i>
                ) : (
                  <i className="ri-notification-line mr-3 text-xl"></i>
                )}
                {isNotified ? "You're all set!" : "Notify Me On Launch"}
              </span>
              <div
                className={`absolute inset-0 ${
                  isNotified
                    ? "bg-green-600"
                    : "bg-gradient-to-r from-blue-400 to-blue-500 transform translate-x-full group-hover:translate-x-0"
                } transition-transform duration-300`}
              ></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}