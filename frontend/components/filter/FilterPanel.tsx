"use client";

import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import MinecraftButton from "@/components/ui/MinecraftButton";

const sortOptions = [
  "Most Players",
  "Newest",
  "Oldest",
  "Top Voted",
];
const tagOptions = [
  "Survival",
  "Skyblock",
  "Minigames",
  "Creative",
  "SMP",
  "PvP",
  "Economy",
  "Roleplay",
  "Faction",
];
const expOptions = [
  "Java Edition",
  "Bedrock Edition",
  "Education Edition",
  "Cross-Platform",
];

interface FilterState {
  sortBy: string;
  selectedTags: string[];
  selectedExperience: string[];
  minPlayers: string;
  maxPlayers: string;
}

export default function FilterPanel() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    sortBy: "Most Players",
    selectedTags: [],
    selectedExperience: [],
    minPlayers: "",
    maxPlayers: "",
  });

  const toggleTag = (tag: string) => {
    setFilters((prev) => ({
      ...prev,
      selectedTags: prev.selectedTags.includes(tag)
        ? prev.selectedTags.filter((t) => t !== tag)
        : [...prev.selectedTags, tag],
    }));
  };

  const toggleExp = (exp: string) => {
    setFilters((prev) => ({
      ...prev,
      selectedExperience: prev.selectedExperience.includes(exp)
        ? prev.selectedExperience.filter((e) => e !== exp)
        : [...prev.selectedExperience, exp],
    }));
  };

  const resetFilters = () => {
    setFilters({
      sortBy: "Most Players",
      selectedTags: [],
      selectedExperience: [],
      minPlayers: "",
      maxPlayers: "",
    });
  };

  return (
    <div className="w-full max-w-2xl bg-mc-dark-bg/90 p-2 border-[2px] border-mc-border shadow-2xl relative">
      <form
        className="flex flex-row gap-2 sm:gap-3 w-full"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Cari server..."
            className="w-full h-10 bg-mc-input-bg border-[2px] border-mc-border px-4 text-sm text-white placeholder:text-neutral-400 focus:border-mc-green-base focus:outline-none focus:ring-2 focus:ring-mc-green-base/20"
          />
        </div>
        <div className="flex gap-2 shrink-0">
          <MinecraftButton type="submit" size="md">
            <Search size={18} />
            <span className="hidden sm:inline">Cari</span>
          </MinecraftButton>
          <MinecraftButton
            variant="gray"
            size="md"
            onClick={() => setFilterOpen(!filterOpen)}
          >
            <SlidersHorizontal size={18} />
            <span className="hidden sm:inline">Filter</span>
          </MinecraftButton>
        </div>
      </form>

      {filterOpen && (
        <div className="absolute left-0 right-0 top-full mt-1 z-50 bg-mc-dark-bg border-[2px] border-mc-border shadow-2xl p-3">
          <div className="flex flex-col gap-4">
            {/* Sort By */}
            <div>
              <p className="text-white text-xs font-semibold mb-2">
                Urutkan
              </p>
              <div className="flex flex-wrap gap-2">
                {sortOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() =>
                      setFilters((prev) => ({ ...prev, sortBy: opt }))
                    }
                    className={`text-[11px] px-3 py-1 border transition-colors ${
                      filters.sortBy === opt
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
              <p className="text-white text-xs font-semibold mb-2">Tags</p>
              <div className="flex flex-wrap gap-2">
                {tagOptions.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`text-[11px] px-3 py-1 border transition-colors ${
                      filters.selectedTags.includes(tag)
                        ? "bg-mc-green-base border-mc-green-base text-white"
                        : "bg-mc-input-bg border-mc-border text-neutral-300 hover:border-mc-green-base"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <p className="text-white text-xs font-semibold mb-2">
                Pengalaman
              </p>
              <div className="flex flex-wrap gap-2">
                {expOptions.map((exp) => (
                  <button
                    key={exp}
                    onClick={() => toggleExp(exp)}
                    className={`text-[11px] px-3 py-1 border transition-colors ${
                      filters.selectedExperience.includes(exp)
                        ? "bg-mc-green-base border-mc-green-base text-white"
                        : "bg-mc-input-bg border-mc-border text-neutral-300 hover:border-mc-green-base"
                    }`}
                  >
                    {exp}
                  </button>
                ))}
              </div>
            </div>

            {/* Player Count */}
            <div>
              <p className="text-white text-xs font-semibold mb-2">
                Jumlah Pemain
              </p>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  value={filters.minPlayers}
                  onChange={(e) =>
                    setFilters((prev) => ({
                      ...prev,
                      minPlayers: e.target.value,
                    }))
                  }
                  className="w-20 h-8 bg-mc-input-bg border border-mc-border px-2 text-xs text-white placeholder:text-neutral-500 focus:border-mc-green-base focus:outline-none"
                />
                <span className="text-neutral-500 text-xs">-</span>
                <input
                  type="number"
                  placeholder="Max"
                  value={filters.maxPlayers}
                  onChange={(e) =>
                    setFilters((prev) => ({
                      ...prev,
                      maxPlayers: e.target.value,
                    }))
                  }
                  className="w-20 h-8 bg-mc-input-bg border border-mc-border px-2 text-xs text-white placeholder:text-neutral-500 focus:border-mc-green-base focus:outline-none"
                />
              </div>
            </div>

            {/* Apply / Reset */}
            <div className="flex gap-2 pt-1">
              <div className="flex-1">
                <MinecraftButton size="sm" className="w-full">
                  Terapkan Filter
                </MinecraftButton>
              </div>
              <MinecraftButton variant="gray" size="sm" onClick={resetFilters}>
                Reset
              </MinecraftButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
