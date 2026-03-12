import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { HighlightsSection } from "@/components/highlights-section";
import { AttendeesSection } from "@/components/attendees-section";
import { RegistrationSection } from "@/components/registration-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A1628]">
      <HeroSection />
      <AboutSection />
      <HighlightsSection />
      <AttendeesSection />
      <RegistrationSection />
      <Footer />
    </main>
  );
}
