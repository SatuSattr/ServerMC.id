import { servers } from "@/lib/data";
import ServerCard from "@/components/server/ServerCard";

function seededRandom(seed: string): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0;
  }
  return Math.abs(hash) / 0x7fffffff;
}

export default function DailyPicksSection() {
  const today = new Date().toDateString();
  const pool = servers.filter((s) => s.rank > 3);
  const sorted = [...pool].sort(
    (a, b) => seededRandom(today + a.id) - seededRandom(today + b.id)
  );
  const picks = sorted.slice(0, 2);

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-white font-minecraft text-lg mb-1 tracking-wide drop-shadow-[0_3px_0_rgba(0,0,0,0.5)]">
        Daily Picks
      </h2>
      <p className="text-neutral-400 text-sm mb-4">
        Pilihan server hari ini
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {picks.map((server) => (
          <ServerCard key={server.id} server={server} showRank={false} />
        ))}
      </div>
    </section>
  );
}
