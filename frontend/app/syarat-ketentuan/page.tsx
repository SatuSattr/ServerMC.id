import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan | servermc.id",
  description: "Syarat dan ketentuan penggunaan platform servermc.id.",
};

const lastUpdated = "9 Juli 2026";

export default function SyaratKetentuanPage() {
  return (
    <div className="bg-mc-dark-more-bg min-h-screen">
      {/* Hero */}
      <div className="bg-mc-dark-bg border-b border-mc-border">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h1 className="font-minecraft text-white text-3xl md:text-4xl tracking-wide drop-shadow-[0_3px_0_rgba(0,0,0,0.5)] mb-4">
            SYARAT & KETENTUAN
          </h1>
          <p className="text-neutral-500 text-sm">Terakhir diperbarui: {lastUpdated}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-10">

        <p className="text-neutral-300 leading-relaxed">
          Dengan mengakses dan menggunakan servermc.id, kamu menyetujui syarat dan ketentuan berikut. Harap baca dengan seksama sebelum menggunakan layanan kami.
        </p>

        {[
          {
            title: "1. PENERIMAAN SYARAT",
            content: [
              "Dengan menggunakan layanan servermc.id, kamu menyatakan telah membaca, memahami, dan menyetujui syarat dan ketentuan ini.",
              "Jika kamu tidak menyetujui syarat ini, kamu tidak diperkenankan menggunakan layanan kami.",
              "Kami berhak memperbarui syarat ini sewaktu-waktu. Penggunaan berlanjut setelah perubahan dianggap sebagai persetujuan.",
            ],
          },
          {
            title: "2. PENGGUNAAN LAYANAN",
            content: [
              "servermc.id menyediakan platform pencarian dan direktori server Minecraft Indonesia.",
              "Kamu harus berusia minimal 13 tahun untuk menggunakan layanan ini.",
              "Kamu bertanggung jawab atas keamanan akun dan kata sandi kamu.",
              "Dilarang menggunakan layanan untuk tujuan ilegal atau merugikan pihak lain.",
            ],
          },
          {
            title: "3. PENDAFTARAN SERVER",
            content: [
              "Pemilik server bertanggung jawab penuh atas keakuratan informasi yang didaftarkan.",
              "Server yang melanggar aturan, mengandung konten tidak pantas, atau bersifat menipu akan dihapus tanpa pemberitahuan.",
              "servermc.id berhak menolak atau menghapus pendaftaran server kapan saja tanpa perlu memberikan alasan.",
              "Dilarang mendaftarkan server yang melanggar Syarat Layanan Mojang atau Microsoft.",
            ],
          },
          {
            title: "4. KONTEN PENGGUNA",
            content: [
              "Kamu mempertahankan kepemilikan atas konten yang kamu unggah, namun memberikan servermc.id lisensi untuk menampilkannya.",
              "Dilarang mengunggah konten yang melanggar hak cipta, bersifat ofensif, atau melanggar hukum.",
              "Kami berhak menghapus konten yang melanggar ketentuan ini tanpa pemberitahuan.",
            ],
          },
          {
            title: "5. BATASAN TANGGUNG JAWAB",
            content: [
              "servermc.id tidak bertanggung jawab atas konten, kebijakan, atau tindakan server yang terdaftar di platform kami.",
              "Kami tidak menjamin ketersediaan atau akurasi informasi server yang ditampilkan.",
              "servermc.id tidak bertanggung jawab atas kerugian yang timbul dari penggunaan platform atau server yang ditemukan melalui platform kami.",
              "Layanan disediakan &quot;sebagaimana adanya&quot; tanpa jaminan tersurat maupun tersirat.",
            ],
          },
          {
            title: "6. PENANGGUHAN DAN PENGHENTIAN AKUN",
            content: [
              "Kami berhak menangguhkan atau menghentikan akun yang melanggar syarat ini.",
              "Kamu dapat menghapus akun kamu kapan saja melalui pengaturan profil.",
              "Penghentian akun tidak menghilangkan kewajiban yang telah timbul sebelumnya.",
            ],
          },
          {
            title: "7. KEKAYAAN INTELEKTUAL",
            content: [
              "Nama, logo, dan merek servermc.id adalah milik tim servermc.id.",
              "Minecraft adalah merek dagang terdaftar milik Mojang Studios. servermc.id tidak berafiliasi dengan Mojang Studios atau Microsoft.",
              "Dilarang menggunakan merek atau aset servermc.id tanpa izin tertulis.",
            ],
          },
          {
            title: "8. HUKUM YANG BERLAKU",
            content: [
              "Syarat dan ketentuan ini diatur berdasarkan hukum Republik Indonesia.",
              "Segala sengketa yang timbul akan diselesaikan melalui musyawarah, atau jika tidak tercapai kesepakatan, melalui pengadilan yang berwenang di Indonesia.",
            ],
          },
          {
            title: "9. HUBUNGI KAMI",
            content: [
              "Jika kamu memiliki pertanyaan tentang syarat dan ketentuan ini, hubungi kami melalui halaman Kontak atau email di legal@servermc.id.",
            ],
          },
        ].map((section) => (
          <section key={section.title} className="space-y-3">
            <h2 className="font-minecraft text-mc-green-base text-base tracking-wide">
              {section.title}
            </h2>
            <ul className="border-l-2 border-mc-border pl-6 space-y-2">
              {section.content.map((item, i) => (
                <li
                  key={i}
                  className="text-neutral-300 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              ))}
            </ul>
          </section>
        ))}

      </div>
    </div>
  );
}
