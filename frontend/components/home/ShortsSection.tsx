import { servers } from "@/lib/data";

export default function ShortsSection() {
  const allShorts = servers.flatMap((s) => s.shorts);

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-white font-minecraft text-lg mb-4 tracking-wide drop-shadow-[0_3px_0_rgba(0,0,0,0.5)]">
        Server Shorts
      </h2>
      <div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-thin">
        {allShorts.map((short, i) => (
          <a
            key={i}
            href={short.url}
            target="_blank"
            rel="noopener noreferrer"
            className="snap-start shrink-0 w-52 bg-mc-input-bg border-[2px] border-mc-border overflow-hidden hover:border-mc-gray-dark transition-colors"
          >
            <div className="aspect-[9/16] bg-mc-dark-more-bg relative overflow-hidden">
              <img
                src={short.thumbnail}
                alt={short.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-2">
              <p className="text-white text-xs font-semibold truncate">
                {short.title}
              </p>
              <p className="text-neutral-400 text-[10px] mt-0.5">
                {short.serverName}
              </p>
              <p className="text-neutral-500 text-[10px]">
                {short.views} views
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
