"use client";

import { ExternalLink, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdwiouj6Q--yO0IqnovoZYMiQEmbgrLSUvgFJN851A-JvMjZg/viewform?usp=publish-editor";

export function RegistrationSection() {
  return (
    <section id="register" className="py-24 bg-[#0A1628] relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1A6FBF]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#1A6FBF]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Register for the <span className="text-[#1A6FBF]">Conference</span>
          </h2>
          <p className="text-[#94A3B8] text-lg mb-8">
            Secure your spot at India&apos;s first AI Health Advisor Conference.
            Limited seats available!
          </p>

          {/* Event Details Card */}
          <div className="bg-[#0F1E32] border border-[#1E3A5F] rounded-2xl p-8 mb-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#1A6FBF]/20 rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-[#1A6FBF]" />
                </div>
                <div className="text-left">
                  <p className="text-[#94A3B8] text-sm">Date</p>
                  <p className="text-white font-semibold">19 July 2026</p>
                </div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-[#1E3A5F]" />
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#1A6FBF]/20 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#1A6FBF]" />
                </div>
                <div className="text-left">
                  <p className="text-[#94A3B8] text-sm">Venue</p>
                  <p className="text-white font-semibold">PGIMER Chandigarh</p>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-[#1A6FBF] hover:bg-[#1558A0] text-white px-12 py-7 text-xl font-semibold rounded-xl shadow-lg shadow-[#1A6FBF]/30 transition-all hover:shadow-xl hover:shadow-[#1A6FBF]/40 w-full sm:w-auto"
              onClick={() => window.open(GOOGLE_FORM_URL, "_blank")}
            >
              <span>Register for the Conference</span>
              <ExternalLink className="w-5 h-5 ml-2" />
            </Button>

            <p className="text-[#94A3B8] text-sm mt-4">
              You will be redirected to the registration form
            </p>
          </div>

          {/* Additional Info */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-[#94A3B8]">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              Free Registration
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#1A6FBF] rounded-full" />
              Certificate Included
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#1A6FBF] rounded-full" />
              Networking Opportunities
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
