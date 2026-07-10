import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kebijakan Privasi | servermc.id",
  description: "Kebijakan privasi servermc.id — bagaimana kami mengumpulkan, menggunakan, dan melindungi data kamu.",
};

const lastUpdated = "9 Juli 2026";

export default function KebijakanPrivasiPage() {
  return (
    <div className="bg-mc-dark-more-bg min-h-screen">
      {/* Hero */}
      <div className="bg-mc-dark-bg border-b border-mc-border">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h1 className="font-minecraft text-white text-3xl md:text-4xl tracking-wide drop-shadow-[0_3px_0_rgba(0,0,0,0.5)] mb-4">
            KEBIJAKAN PRIVASI
          </h1>
          <p className="text-neutral-500 text-sm">Terakhir diperbarui: {lastUpdated}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-10">

        <p className="text-neutral-300 leading-relaxed">
          Kebijakan Privasi ini menjelaskan bagaimana servermc.id (&quot;kami&quot;, &quot;layanan kami&quot;) mengumpulkan, menggunakan, dan melindungi informasi pribadi kamu saat menggunakan platform kami.
        </p>

        {[
          {
            title: "1. INFORMASI YANG KAMI KUMPULKAN",
            content: [
              "Informasi Akun: Saat kamu mendaftar, kami mengumpulkan username, alamat email, dan password yang dienkripsi.",
              "Informasi Login Pihak Ketiga: Jika kamu masuk menggunakan Discord, kami menerima informasi profil publik dari akun Discord kamu sesuai izin yang diberikan.",
              "Data Penggunaan: Kami mengumpulkan data anonim tentang bagaimana kamu menggunakan platform, seperti halaman yang dikunjungi dan fitur yang digunakan.",
              "Data Teknis: Alamat IP, jenis browser, dan informasi perangkat dikumpulkan secara otomatis untuk keamanan dan performa layanan.",
            ],
          },
          {
            title: "2. BAGAIMANA KAMI MENGGUNAKAN INFORMASI",
            content: [
              "Menyediakan dan meningkatkan layanan servermc.id.",
              "Mengelola akun dan autentikasi pengguna.",
              "Mengirimkan notifikasi penting terkait layanan.",
              "Mencegah penyalahgunaan dan menjaga keamanan platform.",
              "Menganalisis penggunaan secara agregat untuk pengembangan fitur.",
            ],
          },
          {
            title: "3. BERBAGI INFORMASI",
            content: [
              "Kami tidak menjual, menyewakan, atau memperdagangkan informasi pribadi kamu kepada pihak ketiga.",
              "Informasi dapat dibagikan kepada penyedia layanan teknis yang membantu operasional platform (hosting, analitik) dengan perjanjian kerahasiaan yang ketat.",
              "Kami dapat mengungkapkan informasi jika diwajibkan oleh hukum atau untuk melindungi hak dan keamanan pengguna.",
            ],
          },
          {
            title: "4. KEAMANAN DATA",
            content: [
              "Password disimpan dalam bentuk hash menggunakan algoritma enkripsi modern.",
              "Koneksi ke platform menggunakan HTTPS/TLS.",
              "Kami secara rutin meninjau dan memperbarui praktik keamanan kami.",
              "Meskipun kami berupaya maksimal, tidak ada sistem yang 100% aman. Kami akan memberitahu kamu jika terjadi pelanggaran data yang berdampak pada akun kamu.",
            ],
          },
          {
            title: "5. HAK KAMU",
            content: [
              "Akses: Kamu berhak mengakses data pribadi yang kami miliki tentang kamu.",
              "Koreksi: Kamu dapat memperbarui informasi akun kapan saja melalui pengaturan profil.",
              "Penghapusan: Kamu dapat meminta penghapusan akun dan data terkait dengan menghubungi kami.",
              "Portabilitas: Kamu dapat meminta salinan data kamu dalam format yang dapat dibaca mesin.",
            ],
          },
          {
            title: "6. COOKIE DAN PELACAKAN",
            content: [
              "Kami menggunakan cookie untuk menjaga sesi login dan preferensi kamu.",
              "Cookie analitik anonim digunakan untuk memahami penggunaan platform.",
              "Kamu dapat menonaktifkan cookie melalui pengaturan browser, namun beberapa fitur platform mungkin tidak berfungsi optimal.",
            ],
          },
          {
            title: "7. PERUBAHAN KEBIJAKAN",
            content: [
              "Kami dapat memperbarui kebijakan ini sewaktu-waktu. Perubahan signifikan akan diberitahukan melalui email atau notifikasi di platform.",
              "Penggunaan layanan setelah perubahan diterbitkan dianggap sebagai persetujuan terhadap kebijakan yang diperbarui.",
            ],
          },
          {
            title: "8. HUBUNGI KAMI",
            content: [
              "Jika kamu memiliki pertanyaan tentang kebijakan privasi ini, hubungi kami melalui halaman Kontak atau email di privacy@servermc.id.",
            ],
          },
        ].map((section) => (
          <section key={section.title} className="space-y-3">
            <h2 className="font-minecraft text-mc-green-base text-base tracking-wide">
              {section.title}
            </h2>
            <ul className="border-l-2 border-mc-border pl-6 space-y-2">
              {section.content.map((item, i) => (
                <li key={i} className="text-neutral-300 text-sm leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}

      </div>
    </div>
  );
}
