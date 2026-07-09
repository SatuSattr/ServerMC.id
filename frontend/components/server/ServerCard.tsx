"use client";

import { Heart, Signal, Copy } from "lucide-react";
import { Server } from "@/lib/types";
import RankBadge from "@/components/ui/RankBadge";
import TagPill from "@/components/ui/TagPill";
import PlayerCount from "./PlayerCount";
import ServerBanner from "./ServerBanner";

interface ServerCardProps {
  server: Server;
}

export default function ServerCard({ server }: ServerCardProps) {
  const copyIP = async (ip: string) => {
    try {
      await navigator.clipboard.writeText(ip);
      alert(`IP ${ip} berhasil disalin!`);
    } catch {
      // fallback
    }
  };

  return (
    <div className="bg-mc-input-bg border-[2px] relative border-mc-border overflow-hidden">
      {server.rank <= 3 && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 140% 80% at 100% 100%, ${
              server.rank === 1
                ? "#D4AF3740"
                : server.rank === 2
                  ? "#9CA3AF40"
                  : "#CD7F3240"
            } 0%, transparent 70%)`,
          }}
        />
      )}
      <RankBadge rank={server.rank} />
      <div className="relative">
        <ServerBanner
          src={server.banner}
          type={server.bannerType}
          alt={server.name}
        />
        <div className="absolute inset-0 flex items-center px-3">
          <img
            src={server.logo}
            alt={server.name}
            className="w-10 h-10 rounded"
          />
        </div>
      </div>
      <div className="p-3 text-left">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-minecraft-regular text-white truncate">
            {server.name}
          </h3>
          <div className="flex items-center gap-1 shrink-0">
            <span className="text-white text-xs font-mono">{server.ip}</span>
            <button
              onClick={() => copyIP(server.ip)}
              className="bg-mc-green-base ml-1 h-fit relative"
            >
              <div className="bg-mc-green-dark translate-y-[1px] text-white p-1 cursor-pointer hover:bg-mc-green-base hover:translate-y-0 ease-in-out duration-150 border-b-[1px] border-b-mc-border">
                <Copy className="w-3 h-3" />
              </div>
            </button>
          </div>
        </div>
        <p className="text-neutral-400 text-xs mb-2 line-clamp-2">
          {server.description}
        </p>
        <div className="flex flex-wrap gap-3 mb-2 text-xs text-neutral-400">
          <PlayerCount
            online={server.players.online}
            max={server.players.max}
          />
          <div className="flex items-center gap-1">
            <Heart className="w-3 h-3" />
            <span>{server.votes}</span>
          </div>
          <div className="flex items-center gap-1">
            <Signal className="w-3 h-3" />
            <span>{server.ping || 0}ms</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-1 mb-2">
          {server.tags.slice(0, 3).map((tag, index) => (
            <TagPill key={index}>{tag}</TagPill>
          ))}
          {server.tags.length > 3 && (
            <span className="text-[10px] px-2 py-0.5 bg-mc-green-dark text-neutral-300">
              +{server.tags.length - 3} lainnya
            </span>
          )}
        </div>
        <div className="text-neutral-500 text-[10px]">{server.version}</div>
      </div>
    </div>
  );
}
