import { ReactNode } from "react";

interface MinecraftButtonProps {
  children: ReactNode;
  variant?: "green" | "gray";
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const variantStyles = {
  green: {
    outer: "bg-mc-green-base",
    inner: "bg-mc-green-dark hover:bg-mc-green-base",
  },
  gray: {
    outer: "bg-mc-gray-base",
    inner: "bg-mc-gray-dark hover:bg-mc-gray-hover",
  },
};

const sizeStyles = {
  sm: { inner: "px-3 h-8 text-xs" },
  md: { inner: "px-3 sm:px-4 h-10 text-sm" },
  lg: { inner: "px-6 h-12 text-base" },
};

export default function MinecraftButton({
  children,
  variant = "green",
  size = "md",
  type = "button",
  onClick,
  className = "",
  disabled = false,
}: MinecraftButtonProps) {
  const v = variantStyles[variant];
  const s = sizeStyles[size];

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${v.outer} h-fit relative ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      <div
        className={`${v.inner} ${s.inner} translate-y-[1.5px] text-white flex items-center justify-center gap-2 font-semibold cursor-pointer ${disabled ? "cursor-not-allowed" : ""} hover:translate-y-0 ease-in-out duration-150 border-b-[1.5px] border-b-mc-border`}
      >
        {children}
      </div>
    </button>
  );
}
