import Link from "next/link";
import { Compass } from "lucide-react";
import MinecraftButton from "@/components/ui/MinecraftButton";

export default function HomeCTA() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 text-center">
      <h2 className="text-white font-minecraft text-lg mb-2 tracking-wide drop-shadow-[0_3px_0_rgba(0,0,0,0.5)]">
        Siap Mencari Server Favoritmu?
      </h2>
      <p className="text-neutral-400 text-sm mb-6">
        Temukan ribuan server Minecraft Indonesia lainnya
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
