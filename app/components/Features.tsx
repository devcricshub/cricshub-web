'use client';

import { useState } from "react";
import Image from "next/image"; // Assuming you might use Image component if you had a gif/image in dialogue

// Import FormEvent for type safety, similar to Hero component
import type { FormEvent } from 'react'; 

export default function Features() {
  // State for the main "Notify Me" button's text/disabled status
  const [isNotified, setIsNotified] = useState(false);

  // State for the "Notify Me on Launch" pop-up form (NEW for Features component)
  const [notificationDialogue, setNotificationDialogue] = useState({
    isVisible: false,
    message: '',
    isSuccess: false,
    isAlreadyNotified: false,
    isLoading: false // State to manage loading animation for the submit button in the pop-up
  });

  // Handler to open the notification pop-up
  const handleNotifyMeClick = () => {
    setNotificationDialogue({
      isVisible: true,
      message: '',
      isSuccess: false,
      isAlreadyNotified: false,
      isLoading: false // Ensure it's not loading when opening
    });
  };

  // Handler for submitting the 'Notify Me' pop-up form
  const handleNotificationSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    setNotificationDialogue(prev => ({ ...prev, isLoading: true })); // Start loading animation

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
  
    // Map 'interest' to 'phone' as per your Swagger schema
    const apiData = {
      name: data.name,
      email: data.email,
      phone: data.interest || 'notify-on-launch-features-section', // Specific interest for this button
    };
  
    try {
      const response = await fetch('https://userbasecrix.onrender.com/api/v1/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(apiData),
      });
  
      if (response.ok) {
        setNotificationDialogue(prev => ({
          ...prev,
          isVisible: true,
          message: 'Awesome! We\'ll notify you as soon as CricsHub goes live. 🎉',
          isSuccess: true,
          isAlreadyNotified: false,
          isLoading: false
        }));
        setIsNotified(true); // Set main button to 'You're all set!'
        form.reset();
      } else {
        const errorMessage = await response.text();
  
        if (errorMessage.includes("User with this email already exists")) {
          setNotificationDialogue(prev => ({
            ...prev,
            isVisible: true,
            message: 'You\'re already on our notification list! We\'ll keep you posted. 😉',
            isSuccess: false,
            isAlreadyNotified: true,
            isLoading: false
          }));
          setIsNotified(true); // Set main button to 'You're all set!'
        } else {
          setNotificationDialogue(prev => ({
            ...prev,
            isVisible: true,
            message: `Oops! There was an error: ${errorMessage}. Please try again.`,
            isSuccess: false,
            isAlreadyNotified: false,
            isLoading: false
          }));
        }
      }
    } catch (error) {
      console.error('Error submitting notification form:', error);
      setNotificationDialogue(prev => ({
        ...prev,
        isVisible: true,
        message: 'There was a network error. Please check your connection and try again.',
        isSuccess: false,
        isAlreadyNotified: false,
        isLoading: false
      }));
    }
  };


  const features = [
    {
      title: "Live Match Scoring",
      description: "Score live matches in real-time with intuitive ball-by-ball tracking, automatic statistics calculation, and instant score updates for players and spectators.",
      icon: "ri-play-circle-line",
      gradient: "from-blue-500 to-blue-600",
      bgColor: "bg-white"
    },
    {
      title: "YouTube Live Streaming",
      description: "Stream your matches directly to YouTube with integrated broadcasting tools, custom overlays, and real-time score integration for professional coverage.",
      icon: "ri-youtube-line",
      gradient: "from-red-500 to-red-600",
      bgColor: "bg-white"
    },
    {
      title: "Tournament Management",
      description: "Create and manage complete tournaments with fixture generation, team registration, points tables, knockout stages, and automated result tracking.",
      icon: "ri-trophy-line",
      gradient: "from-yellow-500 to-yellow-600",
      bgColor: "bg-white"
    },
    {
      title: "Fantasy Cricket League",
      description: "Build your dream team, compete with friends, track player performances, and climb leaderboards in our comprehensive fantasy cricket platform.",
      icon: "ri-gamepad-line",
      gradient: "from-purple-500 to-purple-600",
      bgColor: "bg-white"
    },
    {
      title: "Player Statistics",
      description: "Comprehensive player profiles with career statistics, performance analytics, match history, and detailed performance tracking across all formats.",
      icon: "ri-bar-chart-line",
      gradient: "from-green-500 to-green-600",
      bgColor: "bg-white"
    },
    {
      title: "Team & League Analytics",
      description: "Advanced team analytics, head-to-head records, performance trends, and strategic insights to improve your game and tournament success.",
      icon: "ri-pie-chart-line",
      gradient: "from-indigo-500 to-indigo-600",
      bgColor: "bg-white"
    }
  ];

  return (
    <section className="py-24 bg-white text-gray-800 relative overflow-hidden">
      {/* NEW: Notify Me on Launch Pop-up Dialogue (Copied from Hero) */}
      {notificationDialogue.isVisible && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className={`bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl transform transition-transform duration-300 scale-100`}>
            <div className="text-center">
              {notificationDialogue.isSuccess ? (
                <div className="text-green-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              ) : notificationDialogue.isAlreadyNotified ? (
                <div className="mb-4">
                  <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTBkaW9kcTNieXgzZWppYWl0eHJ0enZ6OTVyZmp6cm1qbXg1aTZmaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/nVE8OaIGkUhf7rkieR/giphy.gif "alt="Already registered" className="h-24 w-auto mx-auto" />
                </div>
              ) : (
                <div className="text-blue-500 mb-4">
                  <i className="ri-notification-line text-6xl"></i>
                </div>
              )}
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                {notificationDialogue.isSuccess ? `You're Notified!` : notificationDialogue.isAlreadyNotified ? 'Already Notified!' : 'Get Launch Updates!'}
              </h3>
              <p className="text-gray-600 mb-6">
                {notificationDialogue.message || 'Enter your details below to get an email notification when CricsHub goes live.'}
              </p>
              
              {!notificationDialogue.isSuccess && !notificationDialogue.isAlreadyNotified && (
                <form className="space-y-4" onSubmit={handleNotificationSubmit}>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Your Name"
                    className="w-full px-5 py-3 rounded-xl border border-gray-300 bg-white text-gray-800 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                    required
                  />
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Your Email Address"
                    className="w-full px-5 py-3 rounded-xl border border-gray-300 bg-white text-gray-800 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                    required
                  />
                  <input type="hidden" name="interest" value="notify-on-launch-features-section" /> {/* Specific interest source */}
                  <button 
                    type="submit"
                    disabled={notificationDialogue.isLoading} // Disable button when loading
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {notificationDialogue.isLoading ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Notifying...
                      </span>
                    ) : (
                      'Notify Me!'
                    )}
                  </button>
                </form>
              )}

              <button
                onClick={() => setNotificationDialogue({ ...notificationDialogue, isVisible: false })}
                className={`w-full mt-4 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg 
                  ${notificationDialogue.isSuccess || notificationDialogue.isAlreadyNotified 
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white' 
                    : 'bg-gray-400 hover:bg-gray-500 text-white'}`}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}


      {/* Background Decorations - Adjusted for subtler look */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-gray-100/50 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gray-200/50 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div
            className="inline-block bg-gray-100/50 backdrop-blur-sm text-gray-700 px-6 py-2 rounded-full text-sm font-semibold mb-4 border border-gray-300"
            data-aos="zoom-in" data-aos-duration="600" // Zoom in effect for the small tag
          >
            COMPLETE CRICKET PLATFORM
          </div>
          <h2
            className="text-5xl md:text-6xl font-bold text-gray-800 mb-6"
            data-aos="fade-up" data-aos-delay="100" data-aos-duration="800" // Fade up for heading
          >
            Everything You Need in
            <span className="block bg-gradient-to-r from-gray-600 to-gray-400 bg-clip-text text-transparent">
              One Powerful App
            </span>
          </h2>
          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12" // Added mb-12 for spacing below paragraph
            data-aos="fade-up" data-aos-delay="200" data-aos-duration="800" // Fade up for subheading
          >
            From amateur cricket to professional tournaments, CricsHub provides all the tools you need to score, stream, manage, and play cricket like never before.
          </p>

          {/* NEW: Notify Me On Launch Button (placed here for prominence) */}
          <div className="flex justify-center mb-20" data-aos="fade-up" data-aos-delay="300">
            <button
              onClick={handleNotifyMeClick}
              disabled={isNotified} // Button is disabled if already notified
              className={`group relative px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 whitespace-nowrap cursor-pointer overflow-hidden
                ${
                  isNotified
                    ? "bg-green-500 text-white shadow-xl pointer-events-none" // Styles when notified
                    : "bg-white border-2 border-gray-400 text-gray-800 hover:scale-105 shadow-2xl" // Base styles
                }
              `}
            >
              <span className="relative z-10 flex items-center">
                {isNotified ? (
                  <i className="ri-check-line mr-3 text-2xl"></i>
                ) : (
                  <i className="ri-notification-line mr-3 text-2xl"></i>
                )}
                {isNotified ? "You're all set!" : "Notify Me On Launch"}
              </span>
              {/* This div creates the hover-to-fill effect, but only if not notified */}
              {!isNotified && (
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              )}
            </button>
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bgColor} rounded-3xl p-8 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group relative overflow-hidden border border-gray-200`}
              // Different AOS effects based on index to create variety
              data-aos={
                index === 0 ? "fade-right" :
                index === 1 ? "fade-up" :
                index === 2 ? "fade-left" :
                index === 3 ? "fade-right" :
                index === 4 ? "fade-up" :
                "fade-left"
              }
              data-aos-delay={index * 150 + 300} // Staggered delay for each card
              data-aos-duration="800" // Consistent duration for cards
              data-aos-once="true" // Makes cards animate only once
            >
              <div className="relative z-10">
                <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 shadow-md`}>
                  <i className={`${feature.icon} text-3xl text-white`}></i>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}