import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami | servermc.id",
  description: "Pelajari lebih lanjut tentang servermc.id, platform pencarian server Minecraft Indonesia.",
};

export default function TentangKamiPage() {
  return (
    <div className="bg-mc-dark-more-bg min-h-screen">
      {/* Hero */}
      <div className="bg-mc-dark-bg border-b border-mc-border">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h1 className="font-minecraft text-white text-3xl md:text-4xl tracking-wide drop-shadow-[0_3px_0_rgba(0,0,0,0.5)] mb-4">
            TENTANG KAMI
          </h1>
          <p className="text-neutral-400 text-base leading-relaxed max-w-2xl">
            servermc.id adalah platform pencarian server Minecraft Indonesia yang dibuat oleh dan untuk komunitas.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">

        {/* Misi */}
        <section className="space-y-4">
          <h2 className="font-minecraft text-mc-green-base text-xl tracking-wide">
            MISI KAMI
          </h2>
          <div className="border-l-2 border-mc-border pl-6 space-y-3 text-neutral-300 leading-relaxed">
            <p>
              servermc.id hadir dengan satu tujuan sederhana: memudahkan pemain Minecraft Indonesia menemukan server yang tepat untuk mereka. Kami percaya bahwa setiap pemain berhak mendapatkan pengalaman bermain terbaik, dan itu dimulai dari menemukan komunitas yang sesuai.
            </p>
            <p>
              Kami menyediakan direktori server Minecraft Indonesia terlengkap, mulai dari Survival, Skyblock, Minigames, Roleplay, hingga berbagai game mode unik buatan developer lokal.
            </p>
          </div>
        </section>

        {/* Mengapa servermc.id */}
        <section className="space-y-4">
          <h2 className="font-minecraft text-mc-green-base text-xl tracking-wide">
            MENGAPA SERVERMC.ID?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "Direktori Terlengkap",
                desc: "Ratusan server Minecraft Indonesia terdaftar dengan informasi lengkap — versi, mode, jumlah pemain, dan lainnya.",
              },
              {
                title: "Komunitas Lokal",
                desc: "Fokus pada server Indonesia sehingga kamu bisa bermain bersama pemain dengan bahasa dan budaya yang sama.",
              },
              {
                title: "Update Real-time",
                desc: "Status server diperbarui secara berkala agar kamu selalu mendapat informasi terkini sebelum bergabung.",
              },
              {
                title: "Gratis Selamanya",
                desc: "Layanan pencarian server di servermc.id sepenuhnya gratis untuk pemain. Tidak ada biaya tersembunyi.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-mc-dark-bg border border-mc-border p-5"
                style={{
                  boxShadow: "rgba(38,36,35,0.25) 0px 4px 0px 0px inset, rgb(38,36,35) -4px 0px 0px 0px inset, rgba(0,0,0,0.75) 0px -4px 0px 0px inset, rgba(0,0,0,0.75) 4px 0px 0px 0px inset",
                }}
              >
                <h3 className="font-minecraft-regular font-bold text-white text-sm mb-2">
                  {item.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tim */}
        <section className="space-y-4">
          <h2 className="font-minecraft text-mc-green-base text-xl tracking-wide">
            TIM KAMI
          </h2>
          <div className="border-l-2 border-mc-border pl-6 space-y-3 text-neutral-300 leading-relaxed">
            <p>
              servermc.id dibangun dan dikelola oleh sekelompok kecil developer dan gamer Indonesia yang passionate terhadap Minecraft dan ekosistem game lokal. Kami bukanlah perusahaan besar — kami adalah bagian dari komunitas yang sama denganmu.
            </p>
            <p>
              Proyek ini bersifat open source dan menerima kontribusi dari siapa saja. Jika kamu ingin ikut berkontribusi, kunjungi repositori GitHub kami.
            </p>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="bg-mc-dark-bg border border-mc-border p-6">
          <p className="text-neutral-500 text-xs leading-relaxed">
            servermc.id tidak berafiliasi dengan, didukung, atau disponsori oleh Mojang Studios atau Microsoft Corporation. Minecraft adalah merek dagang terdaftar milik Mojang Studios. Semua nama server, logo, dan konten adalah milik pemiliknya masing-masing.
          </p>
        </section>

      </div>
    </div>
  );
}
