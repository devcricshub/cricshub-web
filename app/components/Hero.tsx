'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const [isNotified, setIsNotified] = useState(false);

  const handleScrollToWaitlist = () => {
    const element = document.getElementById("waitlist-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const handleNotifyMeClick = () => {
    // In a real application, you'd make an API call to save the user's notification preference.
    setIsNotified(true);
  };
  
  return (
    <section className="min-h-screen flex items-center justify-center bg-white text-gray-800 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-2 animate-fade-in-up">
            <div className="w-40 h-40 rounded-full mx-auto mb-8 flex items-center justify-center">
              <Image
                src="/images/iconLogo.png"
                alt="CricsHub Icon Logo"
                width={160}
                height={160}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="mb-8 animate-fade-in-up delay-200">
            <div className="w-auto h-auto mx-auto flex items-center justify-center" style={{ maxWidth: "600px", maxHeight: "100px" }}>
              <Image
                src="/images/textLogo.png"
                alt="CricsHub Text Logo"
                width={600}
                height={100}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <p className="text-2xl md:text-3xl mb-6 text-gray-600 font-medium animate-fade-in-up delay-400">
            Score Live • Stream • Manage • Play Fantasy
          </p>
          <p className="text-lg md:text-xl mb-10 text-gray-700 leading-relaxed max-w-3xl mx-auto animate-fade-in-up delay-600">
            Transform your cricket experience with the ultimate platform for
            live scoring, YouTube streaming, tournament management, and fantasy
            cricket - all in one powerful app.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-fade-in-up delay-800">
            <button
              onClick={handleScrollToWaitlist}
              className="group relative bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl whitespace-nowrap cursor-pointer text-white overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                <i className="ri-mail-line mr-3 text-2xl"></i>
                Get Launch Updates
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </button>
            <button
              onClick={handleNotifyMeClick}
              disabled={isNotified}
              className={`relative px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 whitespace-nowrap cursor-pointer ${
                isNotified
                  ? "bg-green-500 text-white shadow-xl pointer-events-none"
                  : "border-2 border-gray-400 hover:border-gray-500 text-gray-800 hover:bg-gray-100"
              }`}
            >
              <span className="relative z-10 flex items-center">
                {isNotified ? (
                  <i className="ri-check-line mr-3 text-2xl"></i>
                ) : (
                  <i className="ri-notification-line mr-3 text-2xl"></i>
                )}
                {isNotified ? "You're all set!" : "Notify Me When Live"}
              </span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto animate-fade-in-up delay-1000 mb-32">
            <div className="bg-gray-100 rounded-2xl p-6 border border-gray-200 hover:bg-gray-200 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-play-circle-line text-2xl text-white"></i>
              </div>
              <div className="text-xl font-bold text-gray-800 mb-2">Live Scoring</div>
              <div className="text-gray-600">Real-time ball-by-ball updates</div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-6 border border-gray-200 hover:bg-gray-200 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-youtube-line text-2xl text-white"></i>
              </div>
              <div className="text-xl font-bold text-gray-800 mb-2">YouTube Streaming</div>
              <div className="text-gray-600">Broadcast matches live</div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-6 border border-gray-200 hover:bg-gray-200 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-trophy-line text-2xl text-white"></i>
              </div>
              <div className="text-xl font-bold text-gray-800 mb-2">Tournament Manager</div>
              <div className="text-gray-600">Organize complete leagues</div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-6 border border-gray-200 hover:bg-gray-200 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-gamepad-line text-2xl text-white"></i>
              </div>
              <div className="text-xl font-bold text-gray-800 mb-2">Fantasy Cricket</div>
              <div className="text-gray-600">Create & join virtual teams</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}