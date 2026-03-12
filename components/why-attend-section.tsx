'use client';

import { Brain, Users, Rocket, Award } from 'lucide-react';

const reasons = [
  {
    icon: Brain,
    title: 'Learn AI Applications',
    description: 'Discover how AI is revolutionizing physiotherapy and rehabilitation practices',
  },
  {
    icon: Users,
    title: 'Network with Innovators',
    description: 'Connect with healthcare professionals and AI health-tech entrepreneurs',
  },
  {
    icon: Rocket,
    title: 'AI Startup Showcase',
    description: 'Explore cutting-edge AI health-tech solutions transforming healthcare',
  },
  {
    icon: Award,
    title: 'Certificate of Participation',
    description: 'Receive an official certificate recognizing your conference participation',
  },
];

export function WhyAttendSection() {
  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0F1E35] to-[#0A1628]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center space-y-4 mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">Why Attend RehabX AI?</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Gain insights, expand your network, and advance your career in AI-powered healthcare
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-blue-900/20 to-blue-800/10 border border-blue-400/30 rounded-xl p-6 hover:border-blue-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-600/0 group-hover:from-blue-500/5 group-hover:to-blue-600/10 rounded-xl transition-all duration-300"></div>

                <div className="relative z-10 space-y-4">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white">{reason.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
