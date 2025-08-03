'use client';

export default function Features() {
  const features = [
    {
      title: "Live Match Scoring",
      description: "Score live matches in real-time with intuitive ball-by-ball tracking, automatic statistics calculation, and instant score updates for players and spectators.",
      icon: "ri-play-circle-line",
      gradient: "from-blue-500 to-blue-600",
      bgColor: "bg-white" // Changed to white
    },
    {
      title: "YouTube Live Streaming",
      description: "Stream your matches directly to YouTube with integrated broadcasting tools, custom overlays, and real-time score integration for professional coverage.",
      icon: "ri-youtube-line",
      gradient: "from-red-500 to-red-600",
      bgColor: "bg-white" // Changed to white
    },
    {
      title: "Tournament Management",
      description: "Create and manage complete tournaments with fixture generation, team registration, points tables, knockout stages, and automated result tracking.",
      icon: "ri-trophy-line",
      gradient: "from-yellow-500 to-yellow-600",
      bgColor: "bg-white" // Changed to white
    },
    {
      title: "Fantasy Cricket League",
      description: "Build your dream team, compete with friends, track player performances, and climb leaderboards in our comprehensive fantasy cricket platform.",
      icon: "ri-gamepad-line", // Changed icon for consistency with Hero section
      gradient: "from-purple-500 to-purple-600",
      bgColor: "bg-white" // Changed to white
    },
    {
      title: "Player Statistics",
      description: "Comprehensive player profiles with career statistics, performance analytics, match history, and detailed performance tracking across all formats.",
      icon: "ri-bar-chart-line",
      gradient: "from-green-500 to-green-600",
      bgColor: "bg-white" // Changed to white
    },
    {
      title: "Team & League Analytics",
      description: "Advanced team analytics, head-to-head records, performance trends, and strategic insights to improve your game and tournament success.",
      icon: "ri-pie-chart-line",
      gradient: "from-indigo-500 to-indigo-600",
      bgColor: "bg-white" // Changed to white
    }
  ];

  return (
    <section className="py-24 bg-white text-gray-800 relative overflow-hidden"> {/* Changed section background to plain white and text to gray-800 */}
      {/* Background Decorations - Adjusted for subtler look */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-gray-100/50 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gray-200/50 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block bg-gray-100/50 backdrop-blur-sm text-gray-700 px-6 py-2 rounded-full text-sm font-semibold mb-4 border border-gray-300"> {/* Adjusted colors */}
            COMPLETE CRICKET PLATFORM
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6"> {/* Changed text color */}
            Everything You Need in
            <span className="block bg-gradient-to-r from-gray-600 to-gray-400 bg-clip-text text-transparent"> {/* Adjusted gradient */}
              One Powerful App
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"> {/* Changed text color */}
            From amateur cricket to professional tournaments, CrixHub provides all the tools you need to score, stream, manage, and play cricket like never before.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className={`${feature.bgColor} rounded-3xl p-8 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group relative overflow-hidden border border-gray-200`}> {/* Adjusted hover shadow, translate, and added border */}
              {/* Hover Effect Background - Removed inner gradient overlay for simpler look */}
              {/* <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> */}

              <div className="relative z-10">
                <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 shadow-md`}> {/* Adjusted icon scale and shadow */}
                  <i className={`${feature.icon} text-3xl text-white`}></i>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300"> {/* Changed text color */}
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed"> {/* Changed text color, removed mb-6 as Learn More is gone */}
                  {feature.description}
                </p>

                {/* Learn More Button - REMOVED */}
                {/* <button className="text-blue-600 hover:text-blue-700 font-semibold transition-colors cursor-pointer group-hover:translate-x-2 transition-transform duration-300 flex items-center">
                  Learn More
                  <i className="ri-arrow-right-line ml-2"></i>
                </button> */}
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}