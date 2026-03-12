import { Brain, Heart, Activity } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#0F1E32]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            About <span className="text-[#1A6FBF]">RehabX AI</span>
          </h2>

          <p className="text-lg md:text-xl text-[#94A3B8] leading-relaxed mb-12">
            RehabX AI is an AI-powered physiotherapy and wellness advisor
            designed to guide patients, students, and professionals in
            rehabilitation science.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-6">
              <div className="w-16 h-16 bg-[#1A6FBF]/20 rounded-2xl flex items-center justify-center mb-4">
                <Brain className="w-8 h-8 text-[#1A6FBF]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                AI-Powered Insights
              </h3>
              <p className="text-[#94A3B8] text-sm">
                Advanced algorithms for personalized rehabilitation guidance
              </p>
            </div>

            <div className="flex flex-col items-center p-6">
              <div className="w-16 h-16 bg-[#1A6FBF]/20 rounded-2xl flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-[#1A6FBF]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Patient-Centric
              </h3>
              <p className="text-[#94A3B8] text-sm">
                Designed with patient wellness and recovery as the priority
              </p>
            </div>

            <div className="flex flex-col items-center p-6">
              <div className="w-16 h-16 bg-[#1A6FBF]/20 rounded-2xl flex items-center justify-center mb-4">
                <Activity className="w-8 h-8 text-[#1A6FBF]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Rehabilitation Focus
              </h3>
              <p className="text-[#94A3B8] text-sm">
                Specialized in physiotherapy, nutrition, and rehabilitation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
