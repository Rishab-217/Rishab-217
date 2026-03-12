import {
  Stethoscope,
  GraduationCap,
  Lightbulb,
  FlaskConical,
  HeartPulse,
} from "lucide-react";

const attendees = [
  {
    icon: HeartPulse,
    title: "Physiotherapists",
    description: "Physical therapy practitioners and rehabilitation specialists",
  },
  {
    icon: Stethoscope,
    title: "Doctors",
    description: "Medical professionals exploring AI in healthcare",
  },
  {
    icon: GraduationCap,
    title: "Healthcare Students",
    description: "Future healthcare professionals eager to learn about AI",
  },
  {
    icon: Lightbulb,
    title: "AI Health-Tech Startups",
    description: "Entrepreneurs building the future of health technology",
  },
  {
    icon: FlaskConical,
    title: "Researchers & Innovators",
    description: "Scientists and innovators advancing rehabilitation science",
  },
];

export function AttendeesSection() {
  return (
    <section id="attendees" className="py-24 bg-[#0F1E32]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Who Should <span className="text-[#1A6FBF]">Attend</span>
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
            This conference is designed for professionals and students
            passionate about the intersection of AI and healthcare
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {attendees.map((attendee, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-[#0A1628] border border-[#1E3A5F] rounded-xl p-5 hover:border-[#1A6FBF]/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#1A6FBF]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <attendee.icon className="w-6 h-6 text-[#1A6FBF]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">
                    {attendee.title}
                  </h3>
                  <p className="text-[#94A3B8] text-sm">
                    {attendee.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
