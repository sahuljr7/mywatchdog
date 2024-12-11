import { HeroCarousel } from "@/components/home/hero-carousel";
import { Features } from "@/components/home/features";
import { CTASection } from "@/components/home/cta-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroCarousel />
      <Features />
      <CTASection />
    </main>
  );
}