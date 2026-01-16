import ExploreSection from '@/components/ExploreSection';
import HeroSection from '@/components/HeroSection';
import InsightsSection from '@/components/InsightsSection';
import IntroSection from '@/components/IntroSection';
import SpeakersSection from '@/components/SpeakersSection';

export default function LandingPage() {
  return (
    <main className="min-h-screen font-sans">
      <HeroSection />
      <IntroSection />
      <ExploreSection/>
      <SpeakersSection/>
      <InsightsSection/>
      {/* We will add the Next Section here once the Hero is perfect */}
    </main>
  );
}