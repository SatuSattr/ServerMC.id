"use client";

import { useState } from "react";
import { useParams, notFound } from "next/navigation";
import { Copy, Heart, Signal, Mail, Flag, Globe } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Masonry from "react-masonry-css";
import { servers } from "@/lib/data";
import MinecraftButton from "@/components/ui/MinecraftButton";
import TagPill from "@/components/ui/TagPill";
import { useToast } from "@/components/ui/ToastProvider";
import ContactModal from "@/components/ui/ContactModal";
import ReportModal from "@/components/ui/ReportModal";
import { siDiscord, siYoutube, siInstagram, siTiktok } from "simple-icons";

// Minimal branded SVG icon component using simple-icons path data
function SimpleIcon({
  icon,
  className = "",
}: {
  icon: { path: string; hex: string; title: string };
  className?: string;
}) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      className={className}
      aria-label={icon.title}
      fill="currentColor"
    >
      <path d={icon.path} />
    </svg>
  );
}

const masonryBreakpoints = { default: 4, 1024: 3, 640: 2 };

export default function ServerDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { showToast } = useToast();
  const server = servers.find((s) => s.slug === slug);

  if (!server) notFound();

  const [contactOpen, setContactOpen] = useState(false);
  const [reportOpen, setReportOpen] = useState(false);

  const copyIP = async () => {
    try {
      await navigator.clipboard.writeText(server.ip);
      showToast("success", `IP ${server.ip} berhasil disalin!`);
    } catch {
      showToast("error", "Gagal menyalin IP");
    }
  };

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <img
          src="/assets/illustrations/login-bg.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-mc-dark-more-bg via-mc-dark-more-bg/60 to-transparent" />
      </section>

      <div className="px-4">
        {/* Info Panel + Content */}
        <section className="max-w-7xl mx-auto -mt-72 relative z-20">
          <div className="relative z-10 w-full max-w-7xl mx-auto pb-6">
            <div className="flex items-center gap-5">
              <img src={server.logo} alt={server.name} className="w-20 h-20" />
              <div className="flex-1 min-w-0">
                <h1 className="text-3xl md:text-4xl font-minecraft text-white tracking-wide drop-shadow-[0_3px_0_rgba(0,0,0,0.5)]">
                  {server.name}
                </h1>
                <p className="text-neutral-300 text-sm mt-1 line-clamp-2">
                  {server.description}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-mc-input-bg border-[2px] border-mc-border p-5">
            {/* Stats Row */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-5 text-sm">
              <div className="flex items-center gap-2">
                <span className="font-minecraft text-mc-green-base text-lg">
                  #{server.rank}
                </span>
                <span className="text-neutral-400">Rank</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-mc-green-base" />
                <span className="text-white font-medium">
                  {server.players.online}
                </span>
                <span className="text-neutral-500">/ {server.players.max}</span>
                <span className="text-neutral-500">Online</span>
              </div>
              <div className="flex items-center gap-1 text-neutral-400">
                <Heart className="w-3.5 h-3.5" />
                <span>{server.votes}</span>
              </div>
              <div className="flex items-center gap-1 text-neutral-400">
                <Signal className="w-3.5 h-3.5" />
                <span>{server.ping || "?"}ms</span>
              </div>
              <div className="text-neutral-400">
                Uptime:{" "}
                <span className="text-mc-green-base">{server.uptime}%</span>
              </div>
              <div className="text-neutral-400">{server.version}</div>
            </div>

            {/* Action Buttons + Socials */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Primary action buttons */}
              <MinecraftButton size="md" onClick={copyIP}>
                <Copy size={16} />
                Copy IP
              </MinecraftButton>
              <MinecraftButton size="md" variant="gray">
                <Heart size={16} />
                Vote
              </MinecraftButton>
              {server.contacts && server.contacts.length > 0 && (
                <MinecraftButton
                  size="md"
                  variant="gray"
                  onClick={() => setContactOpen(true)}
                >
                  <Mail size={16} />
                  Hubungi
                </MinecraftButton>
              )}
              <MinecraftButton size="md" variant="gray" onClick={() => setReportOpen(true)}>
                <Flag size={16} />
                Laporkan
              </MinecraftButton>

              {/* Divider */}
              {(server.discord || server.youtube || server.instagram || server.tiktok || server.website) && (
                <div className="w-px h-8 bg-mc-border mx-1" />
              )}

              {/* Subtle social icon links */}
              <div className="flex items-center gap-2">
                {server.discord && (
                  <a
                    href={server.discord}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Discord"
                    className="w-8 h-8 flex items-center justify-center text-neutral-400 hover:text-[#5865F2] transition-colors duration-150"
                  >
                    <SimpleIcon icon={siDiscord} className="w-4 h-4" />
                  </a>
                )}
                {server.youtube && (
                  <a
                    href={server.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="YouTube"
                    className="w-8 h-8 flex items-center justify-center text-neutral-400 hover:text-[#FF0000] transition-colors duration-150"
                  >
                    <SimpleIcon icon={siYoutube} className="w-4 h-4" />
                  </a>
                )}
                {server.instagram && (
                  <a
                    href={server.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Instagram"
                    className="w-8 h-8 flex items-center justify-center text-neutral-400 hover:text-[#E1306C] transition-colors duration-150"
                  >
                    <SimpleIcon icon={siInstagram} className="w-4 h-4" />
                  </a>
                )}
                {server.tiktok && (
                  <a
                    href={server.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="TikTok"
                    className="w-8 h-8 flex items-center justify-center text-neutral-400 hover:text-white transition-colors duration-150"
                  >
                    <SimpleIcon icon={siTiktok} className="w-4 h-4" />
                  </a>
                )}
                {server.website && (
                  <a
                    href={server.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Website"
                    className="w-8 h-8 flex items-center justify-center text-neutral-400 hover:text-mc-green-base transition-colors duration-150"
                  >
                    <Globe size={16} />
                  </a>
                )}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mt-4">
              {server.tags.map((tag) => (
                <TagPill key={tag}>{tag}</TagPill>
              ))}
            </div>
          </div>
        </section>

        {/* Markdown Description */}
        <section className="max-w-7xl mx-auto py-8">
          <h2 className="text-white font-minecraft text-lg mb-4 tracking-wide drop-shadow-[0_3px_0_rgba(0,0,0,0.5)]">
            Tentang Server
          </h2>
          <div className="bg-mc-input-bg border-[2px] border-mc-border p-5 md:p-8 prose prose-invert prose-sm max-w-none prose-headings:font-minecraft prose-headings:text-white prose-headings:tracking-wide prose-a:text-mc-green-base prose-strong:text-white prose-code:text-mc-green-light prose-pre:bg-mc-dark-bg prose-pre:border-[1px] prose-pre:border-mc-border prose-td:border-mc-border prose-th:border-mc-border">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {server.longDescription}
            </ReactMarkdown>
          </div>
        </section>

        {/* Gallery */}
        {server.gallery.length > 0 && (
          <section className="max-w-7xl mx-auto py-8">
            <h2 className="text-white font-minecraft text-lg mb-4 tracking-wide drop-shadow-[0_3px_0_rgba(0,0,0,0.5)]">
              Galeri Foto
            </h2>
            <Masonry
              breakpointCols={masonryBreakpoints}
              className="masonry-grid"
              columnClassName="masonry-grid_column"
            >
              {server.gallery.map((img) => (
                <div key={img.id} className="mb-3 break-inside-avoid">
                  <div className="bg-mc-input-bg border-[2px] border-mc-border overflow-hidden group cursor-pointer">
                    <img
                      src={img.src}
                      alt={img.caption}
                      className="w-full h-auto object-cover block group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="p-2.5">
                      <p className="text-neutral-400 text-[11px] truncate">
                        {img.caption}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Masonry>
          </section>
        )}
      </div>

      <ContactModal
        open={contactOpen}
        onClose={() => setContactOpen(false)}
        serverName={server.name}
        contacts={server.contacts ?? []}
      />
      <ReportModal
        open={reportOpen}
        onClose={() => setReportOpen(false)}
        serverName={server.name}
      />
    </>
  );
}
