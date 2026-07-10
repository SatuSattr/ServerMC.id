"use client";

import { useState } from "react";
import Link from "next/link";
import MinecraftButton from "@/components/ui/MinecraftButton";
import FormInput from "@/components/ui/FormInput";
import { Lock, Mail, User } from "lucide-react";
import { siDiscord } from "simple-icons";

export default function RegisterPage() {
  const [errors, setErrors] = useState<{
    username?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  }>({});

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const username = (form.elements.namedItem("username") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;
    const confirmPassword = (form.elements.namedItem("confirmPassword") as HTMLInputElement).value;

    const next: typeof errors = {};
    if (!username) next.username = "Username tidak boleh kosong.";
    if (!email) next.email = "Email tidak boleh kosong.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Format email tidak valid.";
    if (!password) next.password = "Password tidak boleh kosong.";
    else if (password.length < 8) next.password = "Password minimal 8 karakter.";
    if (!confirmPassword) next.confirmPassword = "Konfirmasi password tidak boleh kosong.";
    else if (confirmPassword !== password) next.confirmPassword = "Password tidak cocok.";
    setErrors(next);
    // TODO: call real register API
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
            BERGABUNG SEKARANG
          </h2>
          <p className="font-minecraft-regular text-neutral-300 text-sm xl:text-base">
            Daftarkan servermu dan raih peringkat teratas di Indonesia
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
              DAFTAR
            </h1>
            <p className="font-minecraft-regular text-mc-gray-base text-sm mt-1">
              Sudah punya akun?{" "}
              <Link href="/login" className="text-mc-green-base hover:text-mc-green-light transition-colors">
                Masuk di sini
              </Link>
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
            <FormInput
              name="username"
              label="Username"
              type="text"
              placeholder="Pilih username"
              autoComplete="username"
              icon={<User size={15} />}
              error={errors.username}
            />
            <FormInput
              name="email"
              label="Email"
              type="email"
              placeholder="Masukkan email"
              autoComplete="email"
              icon={<Mail size={15} />}
              error={errors.email}
            />
            <FormInput
              name="password"
              label="Password"
              type="password"
              placeholder="Buat password"
              autoComplete="new-password"
              icon={<Lock size={15} />}
              error={errors.password}
            />
            <FormInput
              name="confirmPassword"
              label="Konfirmasi Password"
              type="password"
              placeholder="Ulangi password"
              autoComplete="new-password"
              icon={<Lock size={15} />}
              error={errors.confirmPassword}
            />

            {/* Terms */}
            <p className="text-mc-gray-dark text-xs leading-relaxed">
              Dengan mendaftar, kamu menyetujui{" "}
              <Link href="#" className="text-mc-gray-base hover:text-mc-green-base transition-colors">
                Syarat & Ketentuan
              </Link>{" "}
              dan{" "}
              <Link href="#" className="text-mc-gray-base hover:text-mc-green-base transition-colors">
                Kebijakan Privasi
              </Link>{" "}
              kami.
            </p>

            <MinecraftButton variant="green" size="md" type="submit" className="w-full mt-2">
              Buat Akun
            </MinecraftButton>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-mc-border" />
            <span className="text-mc-gray-dark text-xs uppercase tracking-widest font-bold">atau</span>
            <div className="flex-1 h-px bg-mc-border" />
          </div>

          {/* Discord register */}
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
