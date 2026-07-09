import { ReactNode } from "react";

export default function TagPill({ children }: { children: ReactNode }) {
  return (
    <span className="text-[10px] px-2 py-0.5 bg-mc-border text-neutral-300">
      {children}
    </span>
  );
}
