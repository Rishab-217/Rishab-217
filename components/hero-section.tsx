'use client';

import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

export function HeroSection() {
  const scrollToRegistration = () => {
    const element = document.getElementById('registration-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260308_135631_041-tvjjuBdnAnpAZmSZKBLeF7YPmr7V2W.jpg"
          alt="RehabX AI Conference Background"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/85 via-[#0A1628]/75 to-[#0A1628]/90" />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/40 rounded-full px-4 py-2">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-blue-300">AI In Healthcare</span>
        </div>

        {/* Main title */}
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
            RehabX AI Conference 2026
          </h1>
          <p className="text-xl sm:text-2xl text-blue-300 font-medium">
            India's First AI Conference for Physiotherapy & Rehabilitation
          </p>
        </div>

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Join physiotherapy students, healthcare professionals, and AI innovators to explore how Artificial Intelligence is transforming physiotherapy, rehabilitation, and healthcare practice.
        </p>

        {/* Event Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto pt-4">
          <div className="bg-blue-900/30 border border-blue-400/30 rounded-lg p-4 backdrop-blur-sm">
            <p className="text-gray-400 text-sm mb-1">📅 Date</p>
            <p className="text-white font-semibold text-lg">Sunday, 19 July 2026</p>
          </div>
          <div className="bg-blue-900/30 border border-blue-400/30 rounded-lg p-4 backdrop-blur-sm">
            <p className="text-gray-400 text-sm mb-1">📍 Venue</p>
            <p className="text-white font-semibold">PGIMER Chandigarh, India</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <button
            onClick={scrollToRegistration}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50 text-lg w-full sm:w-auto"
          >
            Register Now
          </button>
          <button
            onClick={() =>
              window.open('https://for-rishabh.vercel.app/', '_blank')
            }
            className="px-8 py-4 border-2 border-blue-400 text-blue-300 hover:text-white hover:bg-blue-900/30 font-semibold rounded-lg transition-all duration-300 text-lg w-full sm:w-auto"
          >
            Try RehabX AI
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-blue-400" />
      </div>
    </section>
  );
}
