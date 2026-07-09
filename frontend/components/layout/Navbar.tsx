"use client";

import { Menu, User } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-mc-dark-bg p-3 flex justify-center items-center relative sticky top-0 z-50">
      <div className="flex flex-col items-center gap-3 justify-center absolute">
        <img
          src="/assets/logo2.png"
          className="h-7"
          alt="servermc.id Logo"
        />
      </div>
      <div className="max-w-7xl w-full flex justify-between">
        <button className="bg-mc-green-base h-fit relative">
          <div className="bg-mc-green-dark translate-y-[1.5px] text-white p-1 md:px-3 cursor-pointer hover:bg-mc-green-base hover:translate-y-0 ease-in-out duration-150 border-b-[1.5px] border-b-mc-border">
            <Menu size={24} />
          </div>
        </button>
        <div>
          <button className="bg-mc-gray-base h-fit relative">
            <div className="bg-mc-gray-dark translate-y-[1.5px] text-white p-1 md:px-3 cursor-pointer hover:bg-mc-gray-hover hover:translate-y-0 ease-in-out duration-150 border-b-[1.5px] border-b-mc-border">
              <User size={24} />
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}
