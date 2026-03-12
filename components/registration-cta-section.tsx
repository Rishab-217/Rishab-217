'use client';

export function RegistrationCTASection() {
  return (
    <section
      id="registration-section"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0F1E35] to-[#0A1628]"
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Secure Your Seat for RehabX AI Conference 2026
        </h2>

        {/* Subtext */}
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
          Limited seats available for the PGIMER auditorium. Early registration recommended.
        </p>

        {/* Warning badge */}
        <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/40 rounded-lg px-4 py-2">
          <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
          <span className="text-sm font-medium text-orange-300">Limited seats available</span>
        </div>

        {/* Primary CTA Button */}
        <button
          onClick={() => {
            window.open(
              'https://docs.google.com/forms/d/e/1FAIpQLSdwiouj6Q--yO0IqnovoZYMiQEmbgrLSUvgFJN851A-JvMjZg/viewform',
              '_blank'
            );
          }}
          className="inline-block px-10 py-5 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50 text-lg sm:text-xl w-full sm:w-auto"
        >
          Fill Registration Form
        </button>

        {/* Additional info */}
        <p className="text-sm text-gray-400 pt-4">
          Questions? Contact us for more information
        </p>
      </div>
    </section>
  );
}
