'use client';

import { ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#0A1628] to-[#050B15] border-t border-blue-400/20 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Brand section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">RehabX AI</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transforming physiotherapy and rehabilitation through artificial intelligence innovation.
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Event Details</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📅 Sunday, 19 July 2026</li>
              <li>📍 PGIMER Chandigarh</li>
              <li>🏥 Advanced Pediatric Centre Auditorium</li>
            </ul>
          </div>

          {/* Contact section */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Contact</h4>
            <a
              href="https://physiodietfitcare.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm transition-colors"
            >
              physiodietfitcare.com
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-400/20 my-8"></div>

        {/* Bottom section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-gray-400">
          <div className="text-center sm:text-left">
            <p className="font-semibold text-white mb-1">RehabX AI</p>
            <p>AI Health Advisor | Co-powered by Physio AI</p>
          </div>
          <p className="text-xs text-gray-500">© 2026 RehabX AI Conference. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
