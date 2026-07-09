import HeroSection from "@/components/server/HeroSection";
import ServerCard from "@/components/server/ServerCard";
import { servers } from "@/lib/data";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="py-4 px-4 bg-mc-dark-more-bg pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-left mb-6">
            <h2 className="text-3xl md:text-4xl font-minecraft text-white mb-3 tracking-wide drop-shadow-[0_3px_0_rgba(0,0,0,0.5)]">
              JELAJAHI
            </h2>
            <p className="font-minecraft-regular text-neutral-300 text-base md:text-lg max-w-2xl">
              Temukan server Minecraft Indonesia terbaik untukmu
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {servers.map((server) => (
              <ServerCard key={server.id} server={server} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
