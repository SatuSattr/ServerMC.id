"use client";

import { useState } from "react";
import Masonry from "react-masonry-css";
import { galleryImages } from "@/lib/data";
import MinecraftButton from "@/components/ui/MinecraftButton";

const INITIAL_COUNT = 16;

const breakpointColumns = {
  default: 5,
  1280: 4,
  1024: 3,
  640: 2,
};

export default function GallerySection() {
  const [expanded, setExpanded] = useState(false);

  const visibleImages = expanded
    ? galleryImages
    : galleryImages.slice(0, INITIAL_COUNT);
  const hasHidden = galleryImages.length > INITIAL_COUNT;

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 ">
      <h2 className="text-white font-minecraft text-lg mb-1 tracking-wide drop-shadow-[0_3px_0_rgba(0,0,0,0.5)]">
        Galeri Server
      </h2>
      <p className="text-neutral-400 text-sm mb-4">
        Foto-foto dari berbagai server Minecraft Indonesia
      </p>

      <div className="relative">
        <div
          className={expanded ? "" : "max-h-[480px] overflow-hidden relative"}
        >
          <Masonry
            breakpointCols={breakpointColumns}
            className="masonry-grid"
            columnClassName="masonry-grid_column"
          >
            {visibleImages.map((img) => (
              <div key={img.id} className="mb-3 break-inside-avoid">
                <div className="bg-mc-input-bg border-[2px] border-mc-border overflow-hidden group cursor-pointer">
                  <div className="overflow-hidden">
                    <img
                      src={img.src}
                      alt={img.caption}
                      className="w-full h-auto object-cover block group-hover:scale-105 transition-transform duration-300 ease-in-out"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-2.5 flex items-center gap-2.5">
                    <img
                      src={img.logo}
                      alt={img.serverName}
                      className="w-6 h-6 rounded shrink-0"
                    />
                    <div className="min-w-0">
                      <p className="text-white text-xs font-minecraft-regular truncate">
                        {img.serverName}
                      </p>
                      <p className="text-neutral-500 text-[10px] truncate mt-0.5">
                        {img.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Masonry>

          {!expanded && hasHidden && (
            <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-mc-dark-more-bg to-transparent pointer-events-none" />
          )}
        </div>
      </div>

      {hasHidden && (
        <div className="flex justify-center mt-6">
          <MinecraftButton size="md" onClick={() => setExpanded(!expanded)}>
            {expanded ? "Tutup" : "Tampilkan Lebih Banyak"}
          </MinecraftButton>
        </div>
      )}
    </section>
  );
}
