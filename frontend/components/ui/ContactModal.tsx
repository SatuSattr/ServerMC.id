"use client";

import { ExternalLink, Mail, Link } from "lucide-react";
import Modal from "./Modal";
import { ServerContact } from "@/lib/types";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
  serverName: string;
  contacts: ServerContact[];
}

function getContactIcon(url: string) {
  if (url.startsWith("mailto:") || url.includes("@")) {
    return <Mail size={14} className="shrink-0" />;
  }
  return <Link size={14} className="shrink-0" />;
}

function normalizeUrl(url: string) {
  if (url.startsWith("mailto:") || url.startsWith("http")) return url;
  if (url.includes("@")) return `mailto:${url}`;
  return `https://${url}`;
}

export default function ContactModal({
  open,
  onClose,
  serverName,
  contacts,
}: ContactModalProps) {
  return (
    <Modal open={open} onClose={onClose} title={`Hubungi ${serverName}`}>
      <p className="text-neutral-400 text-xs mb-4">
        Pilih salah satu cara di bawah untuk menghubungi admin server ini.
      </p>

      {contacts.length === 0 ? (
        <p className="text-neutral-500 text-sm text-center py-4">
          Belum ada kontak yang tersedia.
        </p>
      ) : (
        <ul className="flex flex-col gap-2">
          {contacts.map((contact, i) => (
            <li key={i}>
              <a
                href={normalizeUrl(contact.url)}
                target={contact.url.startsWith("mailto:") || contact.url.includes("@") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 bg-mc-input-bg border-[2px] border-mc-border text-mc-gray-light hover:text-white hover:border-neutral-500 transition-colors duration-150 group"
              >
                <span className="text-neutral-500 group-hover:text-neutral-300 transition-colors duration-150">
                  {getContactIcon(contact.url)}
                </span>
                <span className="flex-1 text-sm font-medium">{contact.label}</span>
                <ExternalLink size={12} className="text-neutral-600 group-hover:text-neutral-400 transition-colors duration-150 shrink-0" />
              </a>
            </li>
          ))}
        </ul>
      )}
    </Modal>
  );
}
