'use client';

import Image from 'next/image'; // Import the Image component from Next.js

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 relative overflow-hidden font-sans">
      {/* Background Decorations */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-gray-500/10 rounded-full blur-xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-6">
                <Image 
                  src="/images/iconLogo.png" 
                  alt="CricsHub Logo" 
                  width={52} 
                  height={52} // Keep width and height equal
                  className="rounded-full mr-3" // This will now apply a perfect circle border-radius
                />
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                CricsHub
              </h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              The ultimate cricket platform bringing live scoring, streaming, tournament management, and fantasy cricket to enthusiasts worldwide.
            </p>
            {/* Social media icons are now non-interactive and just for display */}
            
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Features</h4>
            <ul className="space-y-3">
              {/* Links are replaced with span tags to make them non-clickable */}
              <li><span className="text-gray-300 flex items-center group">
                {/* <i className="ri-arrow-right-s-line mr-2"></i> */}
                Live Match Scoring
              </span></li>
              <li><span className="text-gray-300 flex items-center group">
                {/* <i className="ri-arrow-right-s-line mr-2"></i> */}
                YouTube Streaming
              </span></li>
              <li><span className="text-gray-300 flex items-center group">
                {/* <i className="ri-arrow-right-s-line mr-2"></i> */}
                Tournament Management
              </span></li>
              <li><span className="text-gray-300 flex items-center group">
                {/* <i className="ri-arrow-right-s-line mr-2"></i> */}
                Fantasy Cricket
              </span></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Support</h4>
            <ul className="space-y-3">
              {/* Links are replaced with span tags to make them non-clickable */}
              <li><span className="text-gray-300 flex items-center group">
                {/* <i className="ri-arrow-right-s-line mr-2"></i> */}
                Help Center
              </span></li>
              <li><span className="text-gray-300 flex items-center group">
                {/* <i className="ri-arrow-right-s-line mr-2"></i> */}
                Contact Us
              </span></li>
              <li><span className="text-gray-300 flex items-center group">
                {/* <i className="ri-arrow-right-s-line mr-2"></i> */}
                Bug Report
              </span></li>
              <li><span className="text-gray-300 flex items-center group">
                {/* <i className="ri-arrow-right-s-line mr-2"></i> */}
                Privacy Policy
              </span></li>
            </ul>
          </div>
          

        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2025 CricsHub. All rights reserved. Transforming cricket experiences worldwide.
            </p>
            {/* Links are replaced with span tags */}
            <div className="flex space-x-6 text-sm">
              <span className="text-gray-400">Terms of Service</span>
              <span className="text-gray-400">Privacy Policy</span>
              <span className="text-gray-400">Cookie Policy</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}