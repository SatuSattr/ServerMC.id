"use client";

import { useState, ReactNode } from "react";
import { Eye, EyeOff } from "lucide-react";

interface FormInputProps {
  name: string;
  label: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  autoComplete?: string;
  icon?: ReactNode;
  error?: string;
}

export default function FormInput({
  name,
  label,
  type = "text",
  placeholder,
  autoComplete,
  icon,
  error,
}: FormInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword && showPassword ? "text" : type;

  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={name}
        className="text-mc-gray-light text-xs font-bold uppercase tracking-widest"
      >
        {label}
      </label>
      <div
        className={`flex items-center bg-mc-input-bg border transition-colors ${
          error
            ? "border-red-500"
            : "border-mc-border focus-within:border-mc-green-base"
        }`}
      >
        {icon && <span className="px-3 text-mc-gray-dark">{icon}</span>}
        <input
          id={name}
          name={name}
          type={inputType}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className="flex-1 bg-transparent py-2.5 pr-3 text-sm text-white placeholder-mc-gray-dark outline-none"
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="px-3 text-mc-gray-dark hover:text-mc-gray-light transition-colors"
            aria-label={showPassword ? "Sembunyikan password" : "Tampilkan password"}
          >
            {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
          </button>
        )}
      </div>
      {error && <p className="text-red-400 text-xs">{error}</p>}
    </div>
  );
}
