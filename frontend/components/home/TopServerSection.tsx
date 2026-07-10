"use client";

import { useState, useRef, useEffect } from "react";
import { X, Compass } from "lucide-react";
import { useRouter } from "next/navigation";
import { servers } from "@/lib/data";
import ServerCard from "@/components/server/ServerCard";
import MinecraftButton from "@/components/ui/MinecraftButton";

const criteria = [
  {
    label: "Jumlah Vote",
    weight: 30,
    color: "bg-mc-green-base",
    desc: "Semakin banyak vote, semakin tinggi skor",
  },
  {
    label: "Jumlah Pemain Online",
    weight: 25,
    color: "bg-blue-500",
    desc: "Pemain aktif yang sedang online",
  },
  {
    label: "Persentase Uptime",
    weight: 25,
    color: "bg-purple-500",
    desc: "Semakin stabil server, semakin tinggi skor",
  },
  {
    label: "Kualitas Ping",
    weight: 20,
    color: "bg-yellow-500",
    desc: "Semakin rendah ping, semakin baik",
  },
];

export default function TopServerSection() {
  const [infoOpen, setInfoOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const top6 = servers.filter((s) => s.rank <= 6);

  useEffect(() => {
    if (!infoOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setInfoOpen(false);
      }
    };

    const handleScroll = () => setInfoOpen(false);

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [infoOpen]);

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="relative inline-block mb-1">
        <div className="flex items-center gap-2">
          <h2 className="text-white font-minecraft text-lg tracking-wide drop-shadow-[0_3px_0_rgba(0,0,0,0.5)]">
            Top Server
          </h2>
          <button
            onClick={() => setInfoOpen(!infoOpen)}
            className="w-4 h-4 text-mc-green-base hover:brightness-110 transition-all"
            aria-label="Info cara penilaian"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 16H5V5h14v14z"></path>
              <path d="M11 7h2v2h-2zm0 4h2v6h-2z"></path>
            </svg>
          </button>
        </div>

        {infoOpen && (
          <div ref={popupRef} className="absolute top-full left-0 mt-2 z-50 bg-mc-dark-more-bg border-[2px] border-mc-border p-4 w-72 shadow-2xl">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-white font-minecraft-regular text-xs uppercase tracking-wide">
                Cara Penilaian
              </h3>
              <button onClick={() => setInfoOpen(false)} className="text-neutral-500 hover:text-white">
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <p className="text-neutral-400 text-[11px] mb-3 leading-relaxed">
              Peringkat Top Server dihitung dari empat parameter berikut:
            </p>

            <div className="flex flex-col gap-3">
              {criteria.map((c) => (
                <div key={c.label}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-white text-[11px]">{c.label}</span>
                    <span className="text-mc-green-base text-[11px] font-semibold">
                      {c.weight}%
                    </span>
                  </div>
                  <div className="h-1.5 bg-mc-border rounded-none overflow-hidden">
                    <div
                      className={`h-full ${c.color} rounded-none`}
                      style={{ width: `${c.weight}%` }}
                    />
                  </div>
                  <p className="text-neutral-500 text-[10px] mt-0.5">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-neutral-500 text-[10px] mt-3 pt-3 border-t border-mc-border">
              Skor akhir = (Vote × 30%) + (Online × 25%) + (Uptime × 25%) + (Ping × 20%)
            </p>
          </div>
        )}
      </div>

      <p className="text-neutral-400 text-sm mb-4">
        6 server dengan performa terbaik sepanjang waktu
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {top6.map((server) => (
          <ServerCard key={server.id} server={server} showRank={true} />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <MinecraftButton size="md" onClick={() => router.push("/explore")}>
          <Compass size={18} />
          Jelajahi Lebih Banyak
        </MinecraftButton>
      </div>
    </section>
  );
}
