'use client';

import { Building2, Users2, Globe, Zap } from 'lucide-react';

const trustPoints = [
  {
    icon: Building2,
    title: 'Premier Venue',
    description: 'PGIMER Chandigarh - India\'s leading pediatric healthcare institution',
  },
  {
    icon: Users2,
    title: '200+ Attendees',
    description: 'Physiotherapy students and healthcare professionals from across India',
  },
  {
    icon: Globe,
    title: 'National Level',
    description: 'India\'s first dedicated AI conference for physiotherapy and rehabilitation',
  },
  {
    icon: Zap,
    title: 'Certificate',
    description: 'Official certificate of participation recognizing your attendance',
  },
];

export function TrustSection() {
  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#0A1628]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center space-y-4 mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">Why Trust RehabX AI?</h2>
          <p className="text-gray-400 text-lg">A credible platform bringing together healthcare innovation</p>
        </div>

        {/* Trust points grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="text-center p-6 sm:p-8 bg-gradient-to-br from-blue-900/15 to-blue-800/5 border border-blue-400/20 rounded-xl hover:border-blue-400/50 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-2">{point.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{point.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
