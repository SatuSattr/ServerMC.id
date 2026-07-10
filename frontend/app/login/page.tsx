"use client";

import { useState } from "react";
import Link from "next/link";
import MinecraftButton from "@/components/ui/MinecraftButton";
import FormInput from "@/components/ui/FormInput";
import { Lock, User } from "lucide-react";
import { siDiscord } from "simple-icons";

export default function LoginPage() {
  const [errors, setErrors] = useState<{ username?: string; password?: string }>({});

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const username = (form.elements.namedItem("username") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;

    const next: typeof errors = {};
    if (!username) next.username = "Username tidak boleh kosong.";
    if (!password) next.password = "Password tidak boleh kosong.";
    setErrors(next);
    // TODO: call real login API
  }

  return (
    <div className="min-h-[calc(100vh-64px)] flex">
      {/* Left — background illustration */}
      <div
        className="hidden lg:block lg:w-1/2 xl:w-3/5 relative bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/illustrations/login-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-12 left-10 right-10">
          <h2 className="font-minecraft text-white text-3xl xl:text-4xl drop-shadow-[0_3px_0_rgba(0,0,0,0.7)] mb-2">
            SELAMAT DATANG
          </h2>
          <p className="font-minecraft-regular text-neutral-300 text-sm xl:text-base">
            Masuk dan temukan server Minecraft Indonesia terbaikmu
          </p>
        </div>
        <span className="absolute bottom-3 opacity-70 right-4 text-[10px] text-neutral-400 font-sans tracking-wide">
          Background berasal dari{" "}
          <a
            href="https://www.artstation.com/artwork/oArrvW"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-300"
          >
            Mariana Salimena - ArtStation
          </a>
        </span>
      </div>

      {/* Right — form panel */}
      <div className="w-full lg:w-1/2 xl:w-2/5 flex items-center justify-center bg-mc-dark-more-bg px-6 py-12">
        <div className="w-full max-w-sm">
          {/* Header */}
          <div className="mb-8 flex flex-col items-center lg:items-start">
            <h1 className="font-minecraft text-white text-2xl tracking-wide drop-shadow-[0_2px_0_rgba(0,0,0,0.5)]">
              LOGIN
            </h1>
            <p className="font-minecraft-regular text-mc-gray-base text-sm mt-1">
              Belum punya akun?{" "}
              <Link href="/register" className="text-mc-green-base hover:text-mc-green-light transition-colors">
                Daftar sekarang
              </Link>
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
            <FormInput
              name="username"
              label="Username"
              type="text"
              placeholder="Masukkan username"
              autoComplete="username"
              icon={<User size={15} />}
              error={errors.username}
            />
            <FormInput
              name="password"
              label="Password"
              type="password"
              placeholder="Masukkan password"
              autoComplete="current-password"
              icon={<Lock size={15} />}
              error={errors.password}
            />

            {/* Forgot password */}
            <div className="flex justify-end -mt-1">
              <Link href="#" className="text-xs text-mc-gray-base hover:text-mc-green-base transition-colors">
                Lupa password?
              </Link>
            </div>

            <MinecraftButton variant="green" size="md" type="submit" className="w-full mt-2">
              Masuk
            </MinecraftButton>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-mc-border" />
            <span className="text-mc-gray-dark text-xs uppercase tracking-widest font-bold">atau</span>
            <div className="flex-1 h-px bg-mc-border" />
          </div>

          {/* Discord login */}
          <MinecraftButton variant="discord" size="md" className="w-full">
            <a href="/auth/discord" className="flex items-center justify-center gap-2 w-full">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d={siDiscord.path} />
              </svg>
              Lanjut dengan Discord
            </a>
          </MinecraftButton>
        </div>
      </div>
    </div>
  );
}
