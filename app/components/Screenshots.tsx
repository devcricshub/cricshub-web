'use client';

import { useState, useEffect } from 'react';

export default function Screenshots() {
  const features = [
    {
      title: "Live Scoring Interface",
      category: "Match Scoring",
      description: "Intuitive live scoring with ball-by-ball tracking and real-time statistics.",
      icon: "ri-play-circle-line",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      title: "YouTube Streaming Setup",
      category: "Live Broadcasting",
      description: "Stream matches directly to YouTube with custom overlays and score integration.",
      icon: "ri-youtube-line",
      gradient: "from-red-500 to-red-600"
    },
    {
      title: "Tournament Dashboard",
      category: "Tournament Management",
      description: "Complete tournament management with fixtures, standings, and results tracking.",
      icon: "ri-trophy-line",
      gradient: "from-yellow-500 to-yellow-600"
    },
    {
      title: "Fantasy Cricket Team",
      category: "Fantasy League",
      description: "Build your dream team and compete in fantasy cricket leagues.",
      icon: "ri-gamepad-line",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      title: "Player Analytics",
      category: "Performance Stats",
      description: "Detailed player statistics and performance analytics across all formats.",
      icon: "ri-bar-chart-line",
      gradient: "from-green-500 to-green-600"
    },
    {
      title: "Match History",
      category: "Records & Results",
      description: "Complete match history with detailed scorecards and performance records.",
      icon: "ri-history-line",
      gradient: "from-indigo-500 to-indigo-600"
    }
  ];

  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);

  // Automatic banner change logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeatureIndex((prevIndex) =>
        prevIndex === features.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3 seconds for faster rotation

    return () => clearInterval(interval); // Clean up the interval
  }, [features.length]);

  const activeFeature = features[activeFeatureIndex];

  // Manual navigation
  const goToNext = () => {
    setActiveFeatureIndex((prevIndex) =>
      prevIndex === features.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setActiveFeatureIndex((prevIndex) =>
      prevIndex === 0 ? features.length - 1 : prevIndex - 1 // Corrected logic for previous
    );
  };

  return (
    <section className="py-24 bg-white text-gray-800 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-gray-100/50 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gray-200/50 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block bg-gray-100/50 backdrop-blur-sm text-gray-700 px-6 py-2 rounded-full text-sm font-semibold mb-4 border border-gray-300">
            APP PREVIEW
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            See CrixHub
            <span className="block bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              In Action
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore key features through dynamic previews and get a glimpse of your ultimate cricket companion.
          </p>
        </div>

        {/* Dynamic Feature Display with Slide Animation */}
        <div className="max-w-4xl mx-auto bg-gray-50 rounded-3xl p-8 shadow-xl border border-gray-200 relative mb-16 overflow-hidden">
          <div
            key={activeFeatureIndex} // Key changes to trigger re-render and animation
            // Apply the custom slide-in animation directly here
            className="flex flex-col md:flex-row items-center justify-center gap-8 animate-slide-in-right"
          >
            {/* Feature Icon Block */}
            <div className="w-full md:w-1/3 flex flex-col items-center justify-center p-4">
              <div className={`w-32 h-32 bg-gradient-to-br ${activeFeature.gradient} rounded-3xl flex items-center justify-center mb-6 shadow-xl`}>
                <i className={`${activeFeature.icon} text-5xl text-white`}></i>
              </div>
              <div className={`bg-gradient-to-r ${activeFeature.gradient} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg`}>
                {activeFeature.category}
              </div>
            </div>

            {/* Feature Details */}
            <div className="w-full md:w-2/3 text-left p-4">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{activeFeature.title}</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">{activeFeature.description}</p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-md hover:bg-white transition-colors duration-200 z-20 hidden md:block"
            aria-label="Previous feature"
          >
            <i className="ri-arrow-left-s-line text-2xl text-gray-700"></i>
          </button>
          <button
            onClick={goToNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-md hover:bg-white transition-colors duration-200 z-20 hidden md:block"
            aria-label="Next feature"
          >
            <i className="ri-arrow-right-s-line text-2xl text-gray-700"></i>
          </button>

          {/* Thumbnail Navigation / Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveFeatureIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === activeFeatureIndex ? `bg-blue-600` : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to feature ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-3xl p-8 max-w-2xl mx-auto border border-gray-200 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Get Started?</h3>
            <p className="text-gray-600 mb-6">Be among the first to experience CrixHub! Sign up for updates.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group relative bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl whitespace-nowrap cursor-pointer text-white overflow-hidden">
                <span className="relative z-10 flex items-center">
                  <i className="ri-mail-line mr-2 text-2xl"></i>
                  Get Launch Updates
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </button>
              <button className="group relative border-2 border-gray-400 hover:border-gray-500 px-8 py-4 rounded-full font-bold text-xl transition-all duration-300 backdrop-blur-sm whitespace-nowrap cursor-pointer text-gray-800 hover:bg-gray-100 overflow-hidden">
                <span className="relative z-10 flex items-center">
                  <i className="ri-notification-line mr-2 text-2xl"></i>
                  Notify Me When Live
                </span>
                <div className="absolute inset-0 bg-gray-100 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}