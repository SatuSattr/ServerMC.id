"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function Modal({ open, onClose, title, children }: ModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    if (!open) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  // Lock body scroll while open, compensate scrollbar width to prevent layout shift
  useEffect(() => {
    if (open) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.75)" }}
      onMouseDown={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      <div
        className="w-full max-w-md bg-mc-dark-more-bg border-[2px] border-mc-border"
        style={{
          boxShadow:
            "rgba(38,36,35,0.25) 0px 4px 0px 0px inset, rgb(38,36,35) -4px 0px 0px 0px inset, rgba(0,0,0,0.75) 0px -4px 0px 0px inset, rgba(0,0,0,0.75) 4px 0px 0px 0px inset, rgba(0,0,0,0.5) 0px 8px 24px 0px",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-mc-border">
          <h2 className="text-white font-minecraft text-base tracking-wide">
            {title}
          </h2>
          <button
            onClick={onClose}
            aria-label="Tutup"
            className="text-neutral-500 hover:text-white transition-colors duration-150"
          >
            <X size={16} />
          </button>
        </div>

        {/* Body */}
        <div className="px-5 py-5">{children}</div>
      </div>
    </div>
  );
}
