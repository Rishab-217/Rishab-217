import { Mic2, Rocket, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const highlights = [
  {
    icon: Mic2,
    title: "Keynote Speakers",
    description:
      "Industry leaders and AI experts sharing cutting-edge insights on healthcare innovation",
  },
  {
    icon: Rocket,
    title: "AI Startup Showcase",
    description:
      "Discover groundbreaking health-tech startups transforming rehabilitation care",
  },
  {
    icon: Users,
    title: "200+ Healthcare Professionals",
    description:
      "Network with doctors, physiotherapists, researchers, and innovators",
  },
  {
    icon: Award,
    title: "Certificate of Participation",
    description:
      "Receive official certification recognizing your participation in the conference",
  },
];

export function HighlightsSection() {
  return (
    <section id="highlights" className="py-24 bg-[#0A1628]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Conference <span className="text-[#1A6FBF]">Highlights</span>
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
            Experience the best of AI in healthcare with our carefully curated
            sessions and activities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <Card
              key={index}
              className="bg-[#0F1E32] border-[#1E3A5F] hover:border-[#1A6FBF]/50 transition-all duration-300 group hover:shadow-lg hover:shadow-[#1A6FBF]/10"
            >
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-[#1A6FBF]/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#1A6FBF]/30 transition-colors">
                  <highlight.icon className="w-7 h-7 text-[#1A6FBF]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {highlight.title}
                </h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
