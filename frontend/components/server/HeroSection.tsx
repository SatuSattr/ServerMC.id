"use client";

import FilterPanel from "@/components/filter/FilterPanel";

export default function HeroSection() {
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
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-mc-dark-bg/40 to-mc-dark-bg -z-10" />

      {/* Title */}
      <h1 className="text-3xl md:text-5xl font-minecraft text-center text-white mb-6 tracking-wide drop-shadow-[0_4px_0_rgba(0,0,0,0.5)]">
        Jelajahi Server
        <br />
        <span className="text-mc-green-light">Minecraft Indonesia</span>
      </h1>

      {/* Search & Filter */}
      <FilterPanel />

      {/* Quick Stats */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-6 text-white">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-mc-green-base"
          >
            <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
            <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
            <line x1="6" x2="6.01" y1="6" y2="6" />
            <line x1="6" x2="6.01" y1="18" y2="18" />
          </svg>
          <span className="text-sm sm:text-base">
            <strong className="font-bold">500+</strong> Server Aktif
          </span>
        </div>
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-mc-green-base"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          <span className="text-sm sm:text-base">
            <strong className="font-bold">10.000+</strong> Pemain Online
          </span>
        </div>
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-mc-green-base"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          <span className="text-sm sm:text-base">
            <strong className="font-bold">50+</strong> Game Mode
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
