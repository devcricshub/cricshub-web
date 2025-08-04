
'use client';

import Hero from './components/Hero';
import Features from './components/Features';
import Countdown from './components/Countdown';
import SocialShare from './components/SocialShare';
import Footer from './components/Footer';


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Countdown />
      <Features />
      <SocialShare />
      <Footer />
    </div>
  );
}