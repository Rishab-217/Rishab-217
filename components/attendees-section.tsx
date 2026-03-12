'use client';

import { Stethoscope, GraduationCap, Zap, Users } from 'lucide-react';

const attendees = [
  {
    icon: GraduationCap,
    title: 'Physiotherapy Students',
    description: 'Learn from industry experts and explore AI applications in your field',
  },
  {
    icon: Stethoscope,
    title: 'Healthcare Professionals',
    description: 'Discover new treatment methodologies powered by artificial intelligence',
  },
  {
    icon: Zap,
    title: 'AI Health-Tech Startups',
    description: 'Showcase innovations and connect with potential collaborators',
  },
  {
    icon: Users,
    title: 'Researchers & Academicians',
    description: 'Present research and engage with the healthcare technology community',
  },
];

export function AttendeesSection() {
  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#0A1628]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center space-y-4 mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">Who Should Attend</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            This conference brings together diverse professionals in healthcare and AI
          </p>
        </div>

        {/* Attendees grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {attendees.map((attendee, index) => {
            const Icon = attendee.icon;
            return (
              <div
                key={index}
                className="flex gap-6 p-6 sm:p-8 bg-gradient-to-br from-blue-900/15 to-blue-800/5 border border-blue-400/20 rounded-xl hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                    {attendee.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    {attendee.description}
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
