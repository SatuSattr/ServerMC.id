import { servers } from "@/lib/data";
import ServerCard from "@/components/server/ServerCard";

export default function Top3Section() {
  const top3 = servers.filter((s) => s.rank <= 3);

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-white font-minecraft text-lg mb-4 tracking-wide drop-shadow-[0_3px_0_rgba(0,0,0,0.5)]">
        Top Server Minggu Ini
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {top3.map((server) => (
          <ServerCard key={server.id} server={server} showRank={true} />
        ))}
      </div>
    </section>
  );
}
