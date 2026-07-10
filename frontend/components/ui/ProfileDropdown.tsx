"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, LogIn, UserPlus } from "lucide-react";

export default function ProfileDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      {/* Profile trigger button — minecraft.net style: text + chevron */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="true"
        aria-expanded={open}
        className="flex items-center gap-1.5 text-mc-gray-light hover:text-white text-xs font-bold uppercase tracking-widest transition-colors duration-150 cursor-pointer px-1 py-2"
      >
        Profile
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`}
        />
      </button>

      {/* Dropdown panel — minecraft.net style: inset box-shadow "bevel frame" */}
      {open && (
        <div
          className="absolute right-0 top-[calc(100%+12px)] min-w-[180px] bg-mc-dark-more-bg z-50"
          style={{
            boxShadow:
              "rgba(38,36,35,0.25) 0px 4px 0px 0px inset, rgb(38,36,35) -4px 0px 0px 0px inset, rgba(0,0,0,0.75) 0px -4px 0px 0px inset, rgba(0,0,0,0.75) 4px 0px 0px 0px inset, rgba(0,0,0,0.25) 0px 4px 0px 0px",
          }}
        >
          <ul className="py-2 px-4">
            <li className="border-b border-mc-border">
              <a
                href="/login"
                className="flex items-center gap-2 py-3 text-mc-gray-light hover:text-mc-green-base text-xs font-bold uppercase tracking-widest transition-colors duration-150 no-underline"
              >
                <LogIn size={14} />
                Login
              </a>
            </li>
            <li>
              <a
                href="/register"
                className="flex items-center gap-2 py-3 text-mc-gray-light hover:text-mc-green-base text-xs font-bold uppercase tracking-widest transition-colors duration-150 no-underline"
              >
                <UserPlus size={14} />
                Register
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
