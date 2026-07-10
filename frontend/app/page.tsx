import HeroSection from "@/components/server/HeroSection";
import TopServerSection from "@/components/home/TopServerSection";
import DailyPicksSection from "@/components/home/DailyPicksSection";
import GallerySection from "@/components/home/GallerySection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <DailyPicksSection />
      <TopServerSection />
      <GallerySection />
    </>
  );
}
