"use client";

import { Compass, Server, Users, Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import MinecraftButton from "@/components/ui/MinecraftButton";

export default function HeroSection() {
  const router = useRouter();

  return (
    <section
      id="hero"
      className="relative py-20 px-4 md:py-20 flex flex-col items-center justify-center"
    >
      <img
        src="/assets/hero-bg.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-mc-dark-bg/50 -z-10" />

      {/* Title */}
      <h1 className="text-3xl md:text-5xl font-minecraft text-center text-white mb-6 tracking-wide drop-shadow-[0_4px_0_rgba(0,0,0,0.5)]">
        Jelajahi Server
        <br />
        <span className="text-mc-green-light">Minecraft Indonesia</span>
      </h1>

      {/* CTA Button */}
      <div className="mt-2">
        <MinecraftButton size="lg" onClick={() => router.push("/explore")}>
          <Compass size={22} />
          Jelajahi Semua Server
        </MinecraftButton>
      </div>

      {/* Quick Stats */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-6 text-white">
        <div className="flex items-center gap-2">
          <Server size={20} className="text-mc-green-base" />
          <span className="text-sm sm:text-base">
            <strong className="font-bold">500+</strong> Server Aktif
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Users size={20} className="text-mc-green-base" />
          <span className="text-sm sm:text-base">
            <strong className="font-bold">10.000+</strong> Pemain Online
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Heart size={20} className="text-mc-green-base" />
          <span className="text-sm sm:text-base">
            <strong className="font-bold">50.000+</strong> Total Vote
          </span>
        </div>
      </div>

      {/* CTA for Server Owners */}
      <div className="mt-6 text-center">
        <p className="text-sm text-neutral-300 mb-3">
          Punya server Minecraft?{" "}
          <a href="#" className="underline text-mc-green-base">
            Daftarkan sekarang!
          </a>
        </p>
      </div>

      {/* Credit text */}
      <span className="absolute bottom-3 opacity-70 right-4 text-[10px] text-neutral-400 font-sans tracking-wide">
        Background berasal dari{" "}
        <a
          href="https://www.artstation.com/artwork/oArrvW"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-300"
        >
          Mariana Salimena - ArtStation
        </a>
      </span>
    </section>
  );
}
