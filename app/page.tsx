import { HeroSection } from '@/components/hero-section';
import { WhyAttendSection } from '@/components/why-attend-section';
import { AttendeesSection } from '@/components/attendees-section';
import { PricingSection } from '@/components/pricing-section';
import { RegistrationCTASection } from '@/components/registration-cta-section';
import { TrustSection } from '@/components/trust-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A1628]">
      <HeroSection />
      <WhyAttendSection />
      <AttendeesSection />
      <PricingSection />
      <RegistrationCTASection />
      <TrustSection />
      <Footer />
    </main>
  );
}
