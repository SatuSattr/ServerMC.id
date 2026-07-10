import Link from "next/link";
import { Compass } from "lucide-react";
import MinecraftButton from "@/components/ui/MinecraftButton";

export default function HomeCTA() {
  return (
    <section className="relative py-20 px-4 flex flex-col items-center justify-center text-center overflow-hidden mt-8">
      <img
        src="/assets/illustrations/cta-bg.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-mc-dark-bg/50 -z-10" />

      <h2 className="text-2xl md:text-4xl font-minecraft text-white mb-3 tracking-wide drop-shadow-[0_4px_0_rgba(0,0,0,0.6)]">
        Temukan Server
        <br />
        <span className="text-mc-green-light">Favoritmu Sekarang</span>
      </h2>
      <p className="text-neutral-300 text-sm md:text-base mb-8 max-w-md">
        Ribuan server Minecraft Indonesia menunggumu — dari Survival, Skyblock,
        PvP, hingga Roleplay
      </p>
      <Link href="/explore">
        <MinecraftButton size="lg">
          <Compass size={20} />
          Jelajahi Semua Server
        </MinecraftButton>
      </Link>
    </section>
  );
}
