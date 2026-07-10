import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ToastProvider from "@/components/ui/ToastProvider";
import SmoothScroll from "@/components/ui/SmoothScroll";

export const metadata: Metadata = {
  title: "Cari Server Minecraft Indonesia | servermc.id",
  description:
    "Platform pencarian server Minecraft Indonesia terlengkap. Temukan server favoritmu, dari Survival, Skyblock, Minigames, hingga Roleplay.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="dark bg-mc-dark-more-bg"
      style={{ colorScheme: "dark" }}
      data-darkreader-mode="dynamic"
      suppressHydrationWarning
    >
      <body className="">
        <ToastProvider>
          <SmoothScroll>
            {/* Preview badge */}
            <div className="fixed top-3 left-3 z-[9999] flex items-center gap-1.5 bg-yellow-500/10 border border-yellow-500/40 px-2.5 py-1 pointer-events-none select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
              <span className="text-yellow-400 text-[10px] font-bold uppercase tracking-widest">Preview</span>
            </div>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </SmoothScroll>
        </ToastProvider>
      </body>
    </html>
  );
}
