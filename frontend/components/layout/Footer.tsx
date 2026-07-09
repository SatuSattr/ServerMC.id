import { siDiscord, siGithub } from "simple-icons";

export default function Footer() {
  const exploreLinks = [
    "Server Survival",
    "Server Skyblock",
    "Server Minigames",
    "Server Roleplay",
  ];
  const infoLinks = [
    "Tentang Kami",
    "Kebijakan Privasi",
    "Syarat & Ketentuan",
    "Kontak",
  ];

  return (
    <footer className="bg-mc-dark-bg">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <img
              src="/assets/logo2.png"
              className="h-7 mb-4"
              alt="servermc.id Logo"
            />
            <p className="text-neutral-400 text-sm leading-relaxed max-w-md">
              Platform pencarian server Minecraft Indonesia terlengkap. Temukan
              server favoritmu, dari Survival, Skyblock, Minigames, hingga
              Roleplay — semuanya di sini.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="#"
                aria-label="Discord"
                className="text-neutral-400 hover:text-mc-green-base transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d={siDiscord.path} />
                </svg>
              </a>
              <a
                href="#"
                aria-label="GitHub"
                className="text-neutral-400 hover:text-mc-green-base transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d={siGithub.path} />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Jelajahi</h3>
            <ul className="space-y-2">
              {exploreLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-neutral-400 hover:text-mc-green-base text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Informasi</h3>
            <ul className="space-y-2">
              {infoLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-neutral-400 hover:text-mc-green-base text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-mc-border bg-mc-dark-more-bg">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <p className="text-neutral-400 text-xs text-center leading-relaxed">
            servermc.id tidak berafiliasi dengan, didukung, atau disponsori oleh
            Mojang Studios atau Microsoft Corporation. Minecraft adalah merek
            dagang terdaftar milik Mojang Studios. Semua nama server, logo, dan
            konten adalah milik pemiliknya masing-masing.
          </p>
        </div>
        <div className="border-t border-mc-border">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-neutral-500 text-xs">
              &copy; 2026 servermc.id. All rights reserved.
            </p>
            <p className="text-neutral-500 text-xs">
              Dibuat dengan <span className="text-mc-green-base">&hearts;</span>{" "}
              untuk komunitas Minecraft Indonesia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
