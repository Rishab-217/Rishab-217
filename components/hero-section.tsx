"use client";

import { Calendar, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260308_135631_041-tvjjuBdnAnpAZmSZKBLeF7YPmr7V2W.jpg"
          alt="RehabX AI Conference Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/80 via-[#0A1628]/70 to-[#0A1628]" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#1A6FBF]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1A6FBF]/10 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="inline-flex items-center gap-2 bg-[#1A6FBF]/20 border border-[#1A6FBF]/30 rounded-full px-4 py-2 mb-6">
          <Sparkles className="w-4 h-4 text-[#1A6FBF]" />
          <span className="text-sm text-[#1A6FBF] font-medium">
            AI in Physiotherapy
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight text-balance">
          RehabX <span className="text-[#1A6FBF]">AI</span> Conference 2026
        </h1>

        <p className="text-xl md:text-2xl text-[#1A6FBF] font-semibold mb-6">
          {"India's First AI Health Advisor Conference"}
        </p>

        <p className="text-lg md:text-xl text-[#94A3B8] max-w-3xl mx-auto mb-10 leading-relaxed">
          Exploring the future of Artificial Intelligence in Physiotherapy,
          Nutrition, and Rehabilitation.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 bg-[#0F1E32] border border-[#1E3A5F] rounded-lg px-5 py-3">
            <Calendar className="w-5 h-5 text-[#1A6FBF]" />
            <span className="text-white font-medium">19 July 2026</span>
          </div>
          <div className="flex items-center gap-2 bg-[#0F1E32] border border-[#1E3A5F] rounded-lg px-5 py-3">
            <MapPin className="w-5 h-5 text-[#1A6FBF]" />
            <span className="text-white font-medium text-sm md:text-base">
              Advanced Pediatric Centre Auditorium, PGIMER Chandigarh
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-[#1A6FBF] hover:bg-[#1558A0] text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg shadow-[#1A6FBF]/30 transition-all hover:shadow-xl hover:shadow-[#1A6FBF]/40"
            onClick={() =>
              document
                .getElementById("register")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Register Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-[#1A6FBF] text-[#1A6FBF] hover:bg-[#1A6FBF]/10 px-8 py-6 text-lg font-semibold rounded-xl"
            onClick={() =>
              window.open("https://for-rishabh.vercel.app/", "_blank")
            }
          >
            Try RehabX AI
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#1A6FBF]/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-[#1A6FBF] rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
