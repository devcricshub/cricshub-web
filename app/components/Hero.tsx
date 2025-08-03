'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { FormEvent } from 'react'; // Import FormEvent

export default function Hero() {
  // State for the main "Notify Me" button's text/disabled status
  const [isNotified, setIsNotified] = useState(false);

  // State for the waitlist form dialog (existing from previous context)
  const [waitlistDialogue, setWaitlistDialogue] = useState({
    isVisible: false,
    message: '',
    isSuccess: false,
    isAlreadyRegistered: false
  });

  // NEW: State for the "Notify Me When Live" pop-up form
  const [notificationDialogue, setNotificationDialogue] = useState({
    isVisible: false,
    message: '',
    isSuccess: false,
    isAlreadyNotified: false,
    isLoading: false // NEW: State to manage loading animation for the submit button in the pop-up
  });

  const handleScrollToWaitlist = () => {
    const element = document.getElementById("waitlist-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  // Modified: This now opens the notification pop-up
  const handleNotifyMeClick = () => {
    setNotificationDialogue({
      isVisible: true,
      message: '',
      isSuccess: false,
      isAlreadyNotified: false,
      isLoading: false // Ensure it's not loading when opening
    });
  };

  // NEW: Handle submission for the 'Notify Me' pop-up form
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
      phone: data.interest || 'notify-when-live', 
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

  return (
    <section className="min-h-screen flex items-center justify-center bg-white text-gray-800 relative overflow-hidden">
      {/* NEW: Notify Me When Live Pop-up Dialogue */}
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
                {notificationDialogue.isSuccess ? `You're Notified!` : notificationDialogue.isAlreadyNotified ? 'Already Notified!' : 'Get Live Updates!'}
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
                  <input type="hidden" name="interest" value="notify-when-live" /> {/* Hidden field for interest source */}
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

      {/* Hero Section Content (remains largely the same) */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* AOS for main logo */}
          <div className="mb-2" data-aos="fade-up">
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
          {/* AOS for text logo */}
          <div className="mb-8" data-aos="fade-up" data-aos-delay="100">
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
          {/* AOS for taglines */}
          <p className="text-2xl md:text-3xl mb-6 text-gray-600 font-medium" data-aos="fade-up" data-aos-delay="200">
            Score Live • Stream • Manage • Play Fantasy
          </p>
          <p className="text-lg md:text-xl mb-10 text-gray-700 leading-relaxed max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="300">
            Transform your cricket experience with the ultimate platform for
            live scoring, YouTube streaming, tournament management, and fantasy
            cricket - all in one powerful app.
          </p>
          {/* AOS for buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12" data-aos="fade-up" data-aos-delay="400">
            {/* Get Launch Updates Button */}
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

            {/* Notify Me When Live Button (now opens a pop-up) */}
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
                {isNotified ? "You're all set!" : "Notify Me When Live"}
              </span>
              {/* This div creates the hover-to-fill effect, but only if not notified */}
              {!isNotified && (
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              )}
            </button>
          </div>
          {/* AOS for cards with staggered animation */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto mb-32">
            <div 
              className="bg-gray-100 rounded-2xl p-6 border border-gray-200 hover:bg-gray-200 transition-all duration-300 transform hover:-translate-y-2"
              data-aos="fade-up" data-aos-delay="500" // Added AOS
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-play-circle-line text-2xl text-white"></i>
              </div>
              <div className="text-xl font-bold text-gray-800 mb-2">Live Scoring</div>
              <div className="text-gray-600">Real-time ball-by-ball updates</div>
            </div>
            <div 
              className="bg-gray-100 rounded-2xl p-6 border border-gray-200 hover:bg-gray-200 transition-all duration-300 transform hover:-translate-y-2"
              data-aos="fade-up" data-aos-delay="600" // Added AOS
            >
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-youtube-line text-2xl text-white"></i>
              </div>
              <div className="text-xl font-bold text-gray-800 mb-2">YouTube Streaming</div>
              <div className="text-gray-600">Broadcast matches live</div>
            </div>
            <div 
              className="bg-gray-100 rounded-2xl p-6 border border-gray-200 hover:bg-gray-200 transition-all duration-300 transform hover:-translate-y-2"
              data-aos="fade-up" data-aos-delay="700" // Added AOS
            >
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-trophy-line text-2xl text-white"></i>
              </div>
              <div className="text-xl font-bold text-gray-800 mb-2">Tournament Manager</div>
              <div className="text-gray-600">Organize complete leagues</div>
            </div>
            <div 
              className="bg-gray-100 rounded-2xl p-6 border border-gray-200 hover:bg-gray-200 transition-all duration-300 transform hover:-translate-y-2"
              data-aos="fade-up" data-aos-delay="800" // Added AOS
            >
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