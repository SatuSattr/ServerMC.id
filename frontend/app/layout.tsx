import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
      <html lang="en" className="dark" style={{ colorScheme: "dark" }} data-darkreader-mode="dynamic" suppressHydrationWarning>
      <body className="">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
