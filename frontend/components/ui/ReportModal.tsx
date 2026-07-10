"use client";

import { ExternalLink, AlertTriangle } from "lucide-react";
import { siDiscord } from "simple-icons";
import Modal from "./Modal";
import MinecraftButton from "./MinecraftButton";

interface ReportModalProps {
  open: boolean;
  onClose: () => void;
  serverName: string;
}

function SimpleIcon({
  icon,
  className = "",
}: {
  icon: { path: string; title: string };
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

const DISCORD_URL = "https://discord.gg/servermc";

export default function ReportModal({
  open,
  onClose,
  serverName,
}: ReportModalProps) {
  return (
    <Modal open={open} onClose={onClose} title="Laporkan Server">
      <div className="flex flex-col gap-4">
        {/* Warning notice */}
        <div className="flex gap-3 px-4 py-3 bg-mc-input-bg border-[2px] border-mc-border border-l-[3px] border-l-yellow-500">
          <AlertTriangle size={16} className="text-yellow-500 shrink-0 mt-0.5" />
          <p className="text-neutral-300 text-xs leading-relaxed">
            Laporan palsu atau penyalahgunaan sistem pelaporan dapat mengakibatkan
            akun kamu diblokir dari layanan servermc.id.
          </p>
        </div>

        {/* Instructions */}
        <div className="flex flex-col gap-3">
          <p className="text-neutral-300 text-sm">
            Untuk melaporkan server{" "}
            <span className="text-white font-semibold">{serverName}</span>,
            ikuti langkah berikut:
          </p>

          <ol className="flex flex-col gap-2">
            {[
              "Bergabung ke Discord servermc.id melalui tombol di bawah",
              'Buka channel #open-ticket atau gunakan perintah /ticket',
              'Pilih tema "Server Report" saat membuat ticket',
              "Sertakan nama server, bukti, dan alasan pelaporan",
            ].map((step, i) => (
              <li key={i} className="flex gap-3 text-xs text-neutral-400">
                <span className="font-minecraft text-mc-green-base shrink-0 w-4">
                  {i + 1}.
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Divider */}
        <div className="border-t border-mc-border" />

        {/* CTA */}
        <div className="flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="text-neutral-500 hover:text-neutral-300 text-xs transition-colors duration-150"
          >
            Batal
          </button>
          <MinecraftButton
            variant="discord"
            size="md"
            onClick={() => window.open(DISCORD_URL, "_blank")}
          >
            <SimpleIcon icon={siDiscord} className="w-4 h-4" />
            Buka Discord servermc.id
            <ExternalLink size={12} />
          </MinecraftButton>
        </div>
      </div>
    </Modal>
  );
}
