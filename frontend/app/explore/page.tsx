"use client";

import { useState, useMemo } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { servers } from "@/lib/data";
import ServerCard from "@/components/server/ServerCard";
import MinecraftButton from "@/components/ui/MinecraftButton";

const sortOptions = ["Most Players", "Newest", "Oldest", "Top Voted"];

function parseVotes(v: string): number {
  const num = parseFloat(v);
  if (v.includes("K")) return num * 1000;
  if (v.includes("M")) return num * 1000000;
  return num;
}

const allTags = [...new Set(servers.flatMap((s) => s.tags))].sort();

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [appliedQuery, setAppliedQuery] = useState("");
  const [sortBy, setSortBy] = useState("Most Players");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [minPlayers, setMinPlayers] = useState("");
  const [maxPlayers, setMaxPlayers] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [showRanks, setShowRanks] = useState(true);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  const handleSearch = () => {
    setAppliedQuery(searchQuery);
  };

  const resetFilters = () => {
    setSearchQuery("");
    setAppliedQuery("");
    setSortBy("Most Players");
    setSelectedTags([]);
    setMinPlayers("");
    setMaxPlayers("");
  };

  const filteredServers = useMemo(() => {
    let result = [...servers];

    if (appliedQuery.trim()) {
      const q = appliedQuery.toLowerCase();
      result = result.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q) ||
          s.tags.some((t) => t.toLowerCase().includes(q)),
      );
    }

    if (selectedTags.length > 0) {
      result = result.filter((s) =>
        selectedTags.some((tag) => s.tags.includes(tag)),
      );
    }

    if (minPlayers) {
      result = result.filter((s) => s.players.online >= parseInt(minPlayers));
    }
    if (maxPlayers) {
      result = result.filter((s) => s.players.online <= parseInt(maxPlayers));
    }

    result.sort((a, b) => {
      switch (sortBy) {
        case "Most Players":
          return b.players.online - a.players.online;
        case "Newest":
          return b.id - a.id;
        case "Oldest":
          return a.id - b.id;
        case "Top Voted":
          return parseVotes(b.votes) - parseVotes(a.votes);
        default:
          return 0;
      }
    });

    return result;
  }, [searchQuery, sortBy, selectedTags, minPlayers, maxPlayers]);

  const filterContent = (
    <div className="flex flex-col gap-5 ">
      {/* Sort */}
      <div>
        <p className="text-white text-xs font-semibold mb-2 uppercase tracking-wide">
          Urutkan
        </p>
        <div className="flex flex-wrap gap-1.5">
          {sortOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setSortBy(opt)}
              className={`text-[11px] px-3 py-1 border transition-colors ${
                sortBy === opt
                  ? "bg-mc-green-base border-mc-green-base text-white"
                  : "bg-mc-input-bg border-mc-border text-neutral-300 hover:border-mc-green-base"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div>
        <p className="text-white text-xs font-semibold mb-2 uppercase tracking-wide">
          Tags
        </p>
        <div className="flex flex-wrap gap-1.5">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`text-[11px] px-3 py-1 border transition-colors ${
                selectedTags.includes(tag)
                  ? "bg-mc-green-base border-mc-green-base text-white"
                  : "bg-mc-input-bg border-mc-border text-neutral-300 hover:border-mc-green-base"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Player Count */}
      <div>
        <p className="text-white text-xs font-semibold mb-2 uppercase tracking-wide">
          Jumlah Pemain
        </p>
        <div className="flex items-center gap-2">
          <input
            type="number"
            placeholder="Min"
            value={minPlayers}
            onChange={(e) => setMinPlayers(e.target.value)}
            className="w-20 h-8 bg-mc-input-bg border border-mc-border px-2 text-xs text-white placeholder:text-neutral-500 focus:border-mc-green-base focus:outline-none"
          />
          <span className="text-neutral-500 text-xs">-</span>
          <input
            type="number"
            placeholder="Max"
            value={maxPlayers}
            onChange={(e) => setMaxPlayers(e.target.value)}
            className="w-20 h-8 bg-mc-input-bg border border-mc-border px-2 text-xs text-white placeholder:text-neutral-500 focus:border-mc-green-base focus:outline-none"
          />
        </div>
      </div>

      {/* Show Ranks */}
      <div>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={showRanks}
            onChange={(e) => setShowRanks(e.target.checked)}
            className="w-4 h-4 accent-mc-green-base"
          />
          <span className="text-white text-xs font-semibold uppercase tracking-wide">
            Tampilkan Rank
          </span>
        </label>
      </div>

      {/* Reset */}
      <div className="pt-1">
        <MinecraftButton variant="gray" size="sm" onClick={resetFilters}>
          Reset Filter
        </MinecraftButton>
      </div>
    </div>
  );

  return (
    <section className="py-4 px-4 bg-mc-dark-more-bg pb-8">
      <div className="max-w-7xl mx-auto py-8">
        {/* Search Bar */}
        <div className="mb-6">
          <div className="flex gap-2 max-w-2xl">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                type="text"
                placeholder="Cari server Minecraft..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                className="w-full h-10 bg-mc-input-bg border-[2px] border-mc-border pl-10 pr-4 text-sm text-white placeholder:text-neutral-400 focus:border-mc-green-base focus:outline-none focus:ring-2 focus:ring-mc-green-base/20"
              />
            </div>
            <MinecraftButton size="md" onClick={handleSearch}>
              <Search size={18} />
              <span>Cari</span>
            </MinecraftButton>
          </div>
        </div>

        {/* Mobile Filter Toggle */}
        <div className="lg:hidden mb-4">
          <MinecraftButton
            variant="gray"
            size="sm"
            onClick={() => setFilterOpen(!filterOpen)}
          >
            <SlidersHorizontal size={16} />
            <span>Filter</span>
            {filterOpen ? <X size={16} /> : null}
          </MinecraftButton>
        </div>

        {/* Mobile Filter Panel */}
        {filterOpen && (
          <div className="lg:hidden mb-6 bg-mc-dark-more-bg border-[2px] border-mc-border p-4">
            {filterContent}
          </div>
        )}

        <div className="flex gap-6">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="bg-mc-dark-bg border-[2px] border-mc-border p-4 sticky top-20">
              <h2 className="text-white font-minecraft-regular text-sm mb-4 uppercase tracking-wide">
                Filter
              </h2>
              {filterContent}
            </div>
          </aside>

          {/* Results */}
          <main className="flex-1 min-w-0">
            <p className="text-neutral-400 text-sm mb-4">
              Menampilkan{" "}
              <span className="text-white font-semibold">
                {filteredServers.length}
              </span>{" "}
              server
              {appliedQuery && (
                <>
                  {" "}
                  untuk &quot;
                  <span className="text-mc-green-base">{appliedQuery}</span>
                  &quot;
                </>
              )}
            </p>

            {filteredServers.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredServers.map((server) => (
                  <ServerCard
                    key={server.id}
                    server={server}
                    showRank={showRanks}
                    simpleRank={true}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-neutral-500 text-sm">
                  Tidak ada server yang ditemukan
                </p>
                <MinecraftButton
                  variant="gray"
                  size="sm"
                  onClick={resetFilters}
                  className="mt-4"
                >
                  Reset Filter
                </MinecraftButton>
              </div>
            )}
          </main>
        </div>
      </div>
    </section>
  );
}
