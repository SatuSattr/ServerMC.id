import HeroSection from "@/components/server/HeroSection";
import Top3Section from "@/components/home/Top3Section";
import DailyPicksSection from "@/components/home/DailyPicksSection";
import ShortsSection from "@/components/home/ShortsSection";
import HomeCTA from "@/components/home/HomeCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Top3Section />
      <DailyPicksSection />
      <ShortsSection />
      <HomeCTA />
    </>
  );
}
