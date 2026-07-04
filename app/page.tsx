import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ProblemSection from '@/components/sections/ProblemSection';
import MaizeMattersSection from '@/components/sections/MaizeMattersSection';
import ProductSection from '@/components/sections/ProductSection';
import DiseasesSection from '@/components/sections/DiseasesSection';
import DifferentiationSection from '@/components/sections/DifferentiationSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import BuiltWithFarmersSection from '@/components/sections/BuiltWithFarmersSection';
import FounderSection from '@/components/sections/FounderSection';
import PartnershipsSection from '@/components/sections/PartnershipsSection';
import PilotAccessSection from '@/components/sections/PilotAccessSection';
import FAQSection from '@/components/sections/FAQSection';
import RoadmapSection from '@/components/sections/RoadmapSection';
import BusinessModelSection from '@/components/sections/BusinessModelSection';
import VisionSection from '@/components/sections/VisionSection';
import CtaSection from '@/components/sections/CtaSection';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <MaizeMattersSection />
        <ProductSection />
        <DiseasesSection />
        <DifferentiationSection />
        <FeaturesSection />
        <BuiltWithFarmersSection />
        <FounderSection />
        <PartnershipsSection />
        <PilotAccessSection />
        <FAQSection />
        <RoadmapSection />
        <BusinessModelSection />
        <VisionSection />
        <CtaSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
