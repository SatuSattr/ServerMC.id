import { GalleryImage, Server } from "./types";

const logoAlwi =
  "https://minecraft-mp.com/images/favicon/339723.png?ts=1780804305";
const logoRelx =
  "https://minecraft-mp.com/images/favicon/353709.png?ts=1783400479";
const logoKalwi =
  "https://minecraft-mp.com/images/favicon/287720.png?ts=1780936541";
const logoKaizen =
  "https://minecraft-mp.com/images/favicon/306253.png?ts=1781362886";
const logoMinesive =
  "https://minecraft-mp.com/images/favicon/333355.png?ts=1780886441";
const logoMinegens =
  "https://minecraft-mp.com/images/favicon/320411.png?ts=1777281983";
const logoZeetex =
  "https://minecraft-mp.com/images/favicon/353635.png?ts=1782566004";
const logoVoltraz =
  "https://minecraft-mp.com/images/favicon/340112.png?ts=1780941697";
const logoLegacy = "https://minecraft-mp.com/images/favicon/354777.png";
const logoSeria =
  "https://minecraft-mp.com/images/favicon/336811.png?ts=1780157740";
const logoVoxen =
  "https://minecraft-mp.com/images/favicon/353923.png?ts=1772028993";
const logoVisantara =
  "https://minecraft-mp.com/images/favicon/336809.png?ts=1781209303";
const logoNusantara =
  "https://minecraft-mp.com/images/favicon/342138.png?ts=1780857166";
const logoHunter =
  "https://minecraft-mp.com/images/favicon/358398.png?ts=1783514556";
const logoTerangin = "https://minecraft-mp.com/images/favicon/357463.png";
const logoCloud =
  "https://minecraft-mp.com/images/favicon/338692.png?ts=1779128731";
const logoHitman =
  "https://minecraft-mp.com/images/favicon/349589.png?ts=1779881450";
const logoKolawa =
  "https://minecraft-mp.com/images/favicon/359355.png?ts=1781454722";
const logoVoltera =
  "https://minecraft-mp.com/images/favicon/357979.png?ts=1781336545";
const logoZephy =
  "https://minecraft-mp.com/images/favicon/358483.png?ts=1780111639";

const descAlwi = "Casual & cross-play Minecraft server";
const descRelx = "Economy, PvP & Survival server";
const descKalwi = "Fitur lengkap Skyblock & Survival";
const descKaizen = "Pengalaman bermain terbaik";
const descMinesive = "Era baru Minecraft Indonesia";
const descZeetex = "Server Anarki & Faction Indonesia";
const descVoltraz = "Server semi-RPG penuh petualangan";
const descLegacy = "High quality SMP server";
const descSeria = "Server Survival, Skyblock & Faction";
const descVoxen = "Legends RPG Survival Network";
const descVisantara = "Server bertema Nusantara";
const descNusantara = "Survival Season 2 terbaru";
const descHunter = "DonutSMP replica server";
const descMinegens = "Gens Tycoon pertama di Indonesia";
const descTerangin = "Survival Economy kompetitif";
const descCloud = "Server SMP sejak 2021";
const descHitman = "Crystal PvP ultimate experience";
const descKolawa = "Server SMP Survival Vanilla";
const descVoltera = "Adventure & Survival server";
const descZephy = "Simple server with amazing features";

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    serverId: 1,
    serverName: "AlwiNation",
    src: "https://i.redd.it/xxuyjc71xl071.png",
    width: 400,
    height: 600,
    caption: "Spawn Utama AlwiNation",
    logo: logoAlwi,
    description: descAlwi,
  },
  {
    id: 2,
    serverId: 2,
    serverName: "relxmc",
    src: "https://wallpapercave.com/wp/wp13472258.jpg",
    width: 600,
    height: 400,
    caption: "Event PvP Tournament",
    logo: logoRelx,
    description: descRelx,
  },
  {
    id: 3,
    serverId: 3,
    serverName: "KandangAlwi",
    src: "https://wallpapercave.com/wp/wp13472144.jpg",
    width: 400,
    height: 600,
    caption: "Skyblock Island Showcase",
    logo: logoKalwi,
    description: descKalwi,
  },
  {
    id: 4,
    serverId: 4,
    serverName: "Kaizen Network",
    src: "https://wallpapercave.com/wp/wp11918617.jpg",
    width: 600,
    height: 300,
    caption: "Creative Plot Build",
    logo: logoKaizen,
    description: descKaizen,
  },
  {
    id: 5,
    serverId: 5,
    serverName: "Minesive",
    src: "https://wallpapercave.com/wp/wp6206459.jpg",
    width: 400,
    height: 700,
    caption: "OneBlock Challenge Progression",
    logo: logoMinesive,
    description: descMinesive,
  },
  {
    id: 7,
    serverId: 14,
    serverName: "MineGens",
    src: "https://wallpapercave.com/wp/wp11918613.jpg",
    width: 400,
    height: 600,
    caption: "Gens Tycoon Showroom",
    logo: logoMinegens,
    description: descMinegens,
  },
  {
    id: 8,
    serverId: 1,
    serverName: "AlwiNation",
    src: "https://wallpapercave.com/wp/wp11918611.png",
    width: 500,
    height: 400,
    caption: "Survival World Base",
    logo: logoAlwi,
    description: descAlwi,
  },
  {
    id: 9,
    serverId: 2,
    serverName: "relxmc",
    src: "https://wallpapercave.com/wp/wp11918566.jpg",
    width: 400,
    height: 700,
    caption: "Economy Market District",
    logo: logoRelx,
    description: descRelx,
  },
  {
    id: 10,
    serverId: 3,
    serverName: "KandangAlwi",
    src: "https://wallpapercave.com/wp/wp11918615.jpg",
    width: 600,
    height: 400,
    caption: "Land Claim Village",
    logo: logoKalwi,
    description: descKalwi,
  },
  {
    id: 11,
    serverId: 4,
    serverName: "Kaizen Network",
    src: "https://wallpapercave.com/wp/wp15645960.jpg",
    width: 400,
    height: 800,
    caption: "Roleplay City Hall",
    logo: logoKaizen,
    description: descKaizen,
  },
  {
    id: 12,
    serverId: 5,
    serverName: "Minesive",
    src: "https://wallpapercave.com/wp/wp14418295.jpg",
    width: 600,
    height: 500,
    caption: "Manhunt Arena Match",
    logo: logoMinesive,
    description: descMinesive,
  },
  {
    id: 14,
    serverId: 14,
    serverName: "MineGens",
    src: "https://wallpapercave.com/wp/wp13472144.jpg",
    width: 500,
    height: 300,
    caption: "Community Event Photo",
    logo: logoMinegens,
    description: descMinegens,
  },
  {
    id: 15,
    serverId: 1,
    serverName: "AlwiNation",
    src: "https://wallpapercave.com/wp/wp15645973.jpg",
    width: 500,
    height: 600,
    caption: "Nether Hub Portal",
    logo: logoAlwi,
    description: descAlwi,
  },
  {
    id: 16,
    serverId: 2,
    serverName: "relxmc",
    src: "https://wallpapercave.com/wp/wp9595462.jpg",
    width: 600,
    height: 600,
    caption: "Rank Perks Showcase",
    logo: logoRelx,
    description: descRelx,
  },
  {
    id: 17,
    serverId: 3,
    serverName: "KandangAlwi",
    src: "https://wallpapercave.com/wp/wp12754298.jpg",
    width: 400,
    height: 700,
    caption: "Jobs Area & Workshop",
    logo: logoKalwi,
    description: descKalwi,
  },
  {
    id: 18,
    serverId: 4,
    serverName: "Kaizen Network",
    src: "https://wallpapercave.com/wp/wp5961480.jpg",
    width: 600,
    height: 400,
    caption: "Survival Spawn Build",
    logo: logoKaizen,
    description: descKaizen,
  },
  {
    id: 19,
    serverId: 5,
    serverName: "Minesive",
    src: "https://wallpapercave.com/wp/wp6206459.jpg",
    width: 400,
    height: 600,
    caption: "Practice PvP Arena",
    logo: logoMinesive,
    description: descMinesive,
  },
  {
    id: 21,
    serverId: 14,
    serverName: "MineGens",
    src: "https://wallpapercave.com/wp/wp6206531.png",
    width: 400,
    height: 500,
    caption: "Skyblock Co-op Island",
    logo: logoMinegens,
    description: descMinegens,
  },
  {
    id: 22,
    serverId: 1,
    serverName: "AlwiNation",
    src: "https://wallpapercave.com/wp/wp15645998.jpg",
    width: 400,
    height: 500,
    caption: "Cross-Play Lobby Area",
    logo: logoAlwi,
    description: descAlwi,
  },
  {
    id: 23,
    serverId: 4,
    serverName: "Kaizen Network",
    src: "https://wallpapercave.com/wp/wp15646035.jpg",
    width: 400,
    height: 600,
    caption: "Skyblock Hub Parkour",
    logo: logoKaizen,
    description: descKaizen,
  },
  {
    id: 24,
    serverId: 3,
    serverName: "KandangAlwi",
    src: "https://wallpapercave.com/wp/wp15646090.jpg",
    width: 600,
    height: 500,
    caption: "OneBlock Progression Mid-Game",
    logo: logoKalwi,
    description: descKalwi,
  },
  {
    id: 26,
    serverId: 2,
    serverName: "relxmc",
    src: "https://wallpapercave.com/wp/wp15646045.jpg",
    width: 500,
    height: 500,
    caption: "Survival Hub Gathering",
    logo: logoRelx,
    description: descRelx,
  },
  {
    id: 27,
    serverId: 14,
    serverName: "MineGens",
    src: "https://wallpapercave.com/wp/wp5961480.jpg",
    width: 400,
    height: 700,
    caption: "Rank Progression Board",
    logo: logoMinegens,
    description: descMinegens,
  },
  {
    id: 28,
    serverId: 5,
    serverName: "Minesive",
    src: "https://wallpapercave.com/wp/wp11918613.jpg",
    width: 600,
    height: 400,
    caption: "Survival World Tour",
    logo: logoMinesive,
    description: descMinesive,
  },
  {
    id: 29,
    serverId: 1,
    serverName: "AlwiNation",
    src: "https://wallpapercave.com/wp/wp11918617.jpg",
    width: 600,
    height: 500,
    caption: "Earth Mode Landscape",
    logo: logoAlwi,
    description: descAlwi,
  },
  {
    id: 30,
    serverId: 3,
    serverName: "KandangAlwi",
    src: "https://wallpapercave.com/wp/wp11918611.png",
    width: 400,
    height: 800,
    caption: "Discord Event Hall",
    logo: logoKalwi,
    description: descKalwi,
  },
  {
    id: 31,
    serverId: 4,
    serverName: "Kaizen Network",
    src: "https://wallpapercave.com/wp/wp5961480.jpg",
    width: 500,
    height: 600,
    caption: "PvP Tournament Stage",
    logo: logoKaizen,
    description: descKaizen,
  },
  {
    id: 33,
    serverId: 14,
    serverName: "MineGens",
    src: "https://wallpapercave.com/wp/wp9595462.jpg",
    width: 500,
    height: 400,
    caption: "OneBlock Starter Island",
    logo: logoMinegens,
    description: descMinegens,
  },
  {
    id: 34,
    serverId: 2,
    serverName: "relxmc",
    src: "https://wallpapercave.com/wp/wp12754298.jpg",
    width: 400,
    height: 600,
    caption: "Cross-Play Lobby Hub",
    logo: logoRelx,
    description: descRelx,
  },
  {
    id: 35,
    serverId: 5,
    serverName: "Minesive",
    src: "https://wallpapercave.com/wp/wp15646035.jpg",
    width: 400,
    height: 500,
    caption: "Events & Giveaway Area",
    logo: logoMinesive,
    description: descMinesive,
  },
  {
    id: 36,
    serverId: 1,
    serverName: "AlwiNation",
    src: "https://wallpapercave.com/wp/wp15646090.jpg",
    width: 400,
    height: 700,
    caption: "Skyblock Island Chain",
    logo: logoAlwi,
    description: descAlwi,
  },
  {
    id: 37,
    serverId: 3,
    serverName: "KandangAlwi",
    src: "https://wallpapercave.com/wp/wp15646045.jpg",
    width: 500,
    height: 500,
    caption: "Economy Market Stand",
    logo: logoKalwi,
    description: descKalwi,
  },
  {
    id: 38,
    serverId: 4,
    serverName: "Kaizen Network",
    src: "https://wallpapercave.com/wp/wp11918615.jpg",
    width: 600,
    height: 400,
    caption: "Creative Gallery Exhibit",
    logo: logoKaizen,
    description: descKaizen,
  },
  {
    id: 40,
    serverId: 14,
    serverName: "MineGens",
    src: "https://wallpapercave.com/wp/wp14418295.jpg",
    width: 600,
    height: 400,
    caption: "Tycoon Generator Farm",
    logo: logoMinegens,
    description: descMinegens,
  },
  {
    id: 41,
    serverId: 2,
    serverName: "relxmc",
    src: "https://wallpapercave.com/wp/wp11918611.png",
    width: 500,
    height: 600,
    caption: "Event Night Festival",
    logo: logoRelx,
    description: descRelx,
  },
  {
    id: 42,
    serverId: 5,
    serverName: "Minesive",
    src: "https://wallpapercave.com/wp/wp15645973.jpg",
    width: 400,
    height: 800,
    caption: "War Zone Battlefield",
    logo: logoMinesive,
    description: descMinesive,
  },
];

const wcPhotos = [
  { src: "https://wallpapercave.com/wp/wp13472258.jpg", width: 600, height: 400 },
  { src: "https://wallpapercave.com/wp/wp13472144.jpg", width: 400, height: 600 },
  { src: "https://wallpapercave.com/wp/wp11918617.jpg", width: 600, height: 300 },
  { src: "https://wallpapercave.com/wp/wp11918613.jpg", width: 400, height: 600 },
  { src: "https://wallpapercave.com/wp/wp11918611.png", width: 500, height: 400 },
  { src: "https://wallpapercave.com/wp/wp11918566.jpg", width: 400, height: 700 },
  { src: "https://wallpapercave.com/wp/wp11918615.jpg", width: 600, height: 400 },
  { src: "https://wallpapercave.com/wp/wp15645960.jpg", width: 400, height: 800 },
  { src: "https://wallpapercave.com/wp/wp14418295.jpg", width: 600, height: 500 },
  { src: "https://wallpapercave.com/wp/wp15645973.jpg", width: 500, height: 600 },
  { src: "https://wallpapercave.com/wp/wp9595462.jpg",  width: 600, height: 600 },
  { src: "https://wallpapercave.com/wp/wp12754298.jpg", width: 400, height: 700 },
  { src: "https://wallpapercave.com/wp/wp5961480.jpg",  width: 600, height: 400 },
  { src: "https://wallpapercave.com/wp/wp6206459.jpg",  width: 400, height: 600 },
  { src: "https://wallpapercave.com/wp/wp6206531.png",  width: 400, height: 500 },
  { src: "https://wallpapercave.com/wp/wp15645998.jpg", width: 400, height: 500 },
  { src: "https://wallpapercave.com/wp/wp15646035.jpg", width: 400, height: 600 },
  { src: "https://wallpapercave.com/wp/wp15646090.jpg", width: 600, height: 500 },
  { src: "https://wallpapercave.com/wp/wp15646045.jpg", width: 500, height: 500 },
];

const md = (s: string) =>
  `## 📋 Informasi Server\n\n${s}\n\n### 🏆 Fitur Unggulan\n\n- ✅ Server stabil dengan uptime tinggi\n- ✅ Komunitas aktif & ramah\n- ✅ Support Java & Bedrock (Cross-Play)\n- ✅ Update rutin setiap bulan\n\n### 🔗 Cara Bergabung\n\n1. Buka Minecraft\n2. Pilih **Multiplayer**\n3. Klik **Add Server**\n4. Masukkan IP server\n5. Klik **Join Server**\n\n> *Server ini adalah bagian dari servermc.id — platform pencarian server Minecraft Indonesia terpercaya.*`;

const gal = (id: number, captions: string[]): GalleryImage[] =>
  captions.map((caption, i) => {
    const photo = wcPhotos[(id * 4 + i) % wcPhotos.length];
    return {
      id: id * 100 + i + 1,
      serverId: id,
      serverName: "",
      src: photo.src,
      width: photo.width,
      height: photo.height,
      caption,
      logo: "",
      description: "",
    };
  });

export const servers: Server[] = [
  {
    id: 1,
    rank: 1,
    name: "AlwiNation",
    slug: "alwination",
    banner:
      "https://minecraft-mp.com/images/banners/banner-339723-1739705570.mp4",
    bannerType: "video",
    logo: logoAlwi,
    ip: "alwination.id",
    players: { online: 1550, max: 1888 },
    votes: "26.2K",
    ping: 12,
    uptime: 99.9,
    description:
      "Server Minecraft Indonesia dengan konsep casual dan cross-play. Tersedia Earth, Skyblock, SMP Survival dan Vanilla.",
    longDescription: `# 🌍 Selamat Datang di AlwiNation

**AlwiNation** adalah server Minecraft Indonesia dengan konsep casual dan cross-play yang mendukung pemain Java Edition maupun Bedrock Edition.

## 🎮 Game Mode Tersedia

| Mode | Deskripsi |
|------|-----------|
| **Earth** | Jelajahi dunia nyata dalam Minecraft dengan skala 1:1000 |
| **Skyblock** | Mulai dari pulau kecil dan kembangkan hingga menjadi kerajaan |
| **SMP Survival** | Survival klasik bersama ribuan pemain aktif |
| **Vanilla** | Pengalaman Minecraft murni tanpa mod |

## ✨ Fitur Lengkap

- ✅ Cross-Play (Java + Bedrock) — Main bareng teman dari platform mana pun
- ✅ Economy System — Cari uang, buka usaha, jual beli item
- ✅ Rank Rewards — Dapatkan rank eksklusif dengan vote dan playtime
- ✅ Event Mingguan — Hunting, Build Battle, Parkour, dan PvP Tournament
- ✅ Land Claim — Lindungi bangunanmu dari griefing
- ✅ Staff Aktif 24/7 — Bantuan cepat kapan pun

## 🔗 Cara Bergabung

\`\`\`
1. Buka Minecraft
2. Pilih Multiplayer > Add Server
3. Masukkan IP: alwination.id
4. Klik Join Server
\`\`\`

> *"Server Minecraft Indonesia dengan konsep casual dan cross-play. Tersedia Earth, Skyblock, SMP Survival dan Vanilla."*`,
    discord: "https://discord.gg/alwination",
    youtube: "https://youtube.com/@alwination",
    instagram: "https://instagram.com/alwination",
    tiktok: "https://tiktok.com/@alwination",
    website: "https://alwination.id",
    email: "admin@alwination.id",
    contacts: [
      { label: "Email Admin", url: "mailto:admin@alwination.id" },
      { label: "Discord Server", url: "https://discord.gg/alwination" },
      { label: "WhatsApp", url: "https://wa.me/6281234567890" },
    ],
    tags: ["Survival", "Skyblock", "Earth", "SMP", "Vanilla", "Cross-Play"],
    version: "1.20 - 26.2",
    gallery: [
      { id: 101, serverId: 1, serverName: "AlwiNation", src: "https://wallpapercave.com/wp/wp13472258.jpg", width: 600, height: 400, caption: "Spawn Utama AlwiNation", logo: logoAlwi, description: descAlwi },
      { id: 102, serverId: 1, serverName: "AlwiNation", src: "https://wallpapercave.com/wp/wp11918617.jpg", width: 600, height: 300, caption: "Skyblock Island Showcase", logo: logoAlwi, description: descAlwi },
      { id: 103, serverId: 1, serverName: "AlwiNation", src: "https://wallpapercave.com/wp/wp15645973.jpg", width: 500, height: 600, caption: "Earth Mode Landscape", logo: logoAlwi, description: descAlwi },
      { id: 104, serverId: 1, serverName: "AlwiNation", src: "https://wallpapercave.com/wp/wp15645998.jpg", width: 400, height: 500, caption: "Nether Hub Portal", logo: logoAlwi, description: descAlwi },
    ],
    shorts: [
      {
        title: "Server Tour 2026!",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
        views: "12.4K",
        serverName: "AlwiNation",
      },
      {
        title: "Skyblock Challenge EP.1",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
        views: "8.2K",
        serverName: "AlwiNation",
      },
    ],
  },
  {
    id: 2,
    rank: 2,
    name: "relxmc",
    slug: "relxmc",
    banner:
      "https://minecraft-mp.com/images/banners/banner-353709-1769624693.mp4",
    bannerType: "video",
    logo: logoRelx,
    ip: "relxmc.com",
    players: { online: 275, max: 1000 },
    votes: "18.5K",
    ping: 23,
    uptime: 99.8,
    description:
      "Server dengan fitur Cross-Play, Economy, PvP, Ranks dan Survival. Bergabung dengan komunitas yang aktif!",
    longDescription: `# ⚔️ Selamat Datang di relxmc

**relxmc** adalah server Minecraft Indonesia dengan fitur lengkap untuk pengalaman bermain terbaik.

## 🎮 Game Mode

- **Survival** — Classic survival dengan ekonomi yang stabil
- **Economy** — Sistem ekonomi realistis, cari uang dan bangun kerajaan
- **PvP** — Arena pertarungan sengit antar pemain
- **Ranks** — Sistem ranking dengan berbagai keuntungan

## ✨ Fitur

- ✅ Cross-Play Java & Bedrock
- ✅ Economy System dengan pasar bebas
- ✅ PvP Arena & Tournament
- ✅ Rank Progression dengan reward menarik
- ✅ Komunitas aktif dan ramah`,
    discord: "https://discord.gg/relxmc",
    tags: ["Survival", "Economy", "PvP", "Ranks", "Cross-Play"],
    version: "1.20 - 26.2",
    gallery: [
      { id: 201, serverId: 2, serverName: "relxmc", src: "https://wallpapercave.com/wp/wp13472258.jpg", width: 600, height: 400, caption: "Spawn Area", logo: logoRelx, description: descRelx },
      { id: 202, serverId: 2, serverName: "relxmc", src: "https://wallpapercave.com/wp/wp11918566.jpg", width: 400, height: 700, caption: "PvP Arena", logo: logoRelx, description: descRelx },
      { id: 203, serverId: 2, serverName: "relxmc", src: "https://wallpapercave.com/wp/wp9595462.jpg",  width: 600, height: 600, caption: "Market District", logo: logoRelx, description: descRelx },
    ],
    shorts: [
      {
        title: "PvP Tournament Highlight",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
        views: "5.1K",
        serverName: "relxmc",
      },
    ],
  },
  {
    id: 3,
    rank: 3,
    name: "KandangAlwi",
    slug: "kandangalwi",
    banner:
      "https://minecraft-mp.com/images/banners/banner-287720-1738749575.mp4",
    bannerType: "video",
    logo: logoKalwi,
    ip: "kalwi.id",
    players: { online: 338, max: 2026 },
    votes: "15.8K",
    ping: null,
    uptime: 99.7,
    description:
      "Server dengan fitur lengkap: Cross-Play, Discord, Economy, Jobs, Land Claim, OneBlock, Ranks, Skyblock dan Survival.",
    longDescription: `# 🏰 Selamat Datang di KandangAlwi

**KandangAlwi** adalah server dengan fitur paling lengkap di Indonesia. Dari Skyblock hingga Survival, semua ada di sini!

## 🎮 Game Mode

- **Survival** — Survival dengan jobs & economy
- **Skyblock** — Kembangkan pulau dari nol
- **OneBlock** — Tambang satu blok tak terbatas
- **Land Claim** — Lindungi area bangunanmu`,
    discord: "https://discord.gg/kandangalwi",
    tags: [
      "Survival",
      "Skyblock",
      "OneBlock",
      "Economy",
      "Jobs",
      "Land Claim",
      "Ranks",
      "Cross-Play",
      "Discord",
    ],
    version: "1.20 - 26.1.2",
    gallery: gal(3, ["Spawn Utama", "Skyblock Island", "OneBlock Progress", "Land Claim Area"]).map((g) => ({
      ...g,
      serverName: "KandangAlwi",
      logo: logoKalwi,
      description: descKalwi,
    })),
    shorts: [
      {
        title: "OneBlock Progression",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
        views: "3.7K",
        serverName: "KandangAlwi",
      },
    ],
  },
  {
    id: 4,
    rank: 4,
    name: "Kaizen Network",
    slug: "kaizen-network",
    banner:
      "https://minecraft-mp.com/images/banners/banner-306253-1776240611.mp4",
    bannerType: "video",
    logo: logoKaizen,
    ip: "mp.kaizenmc.id",
    players: { online: 133, max: 6767 },
    votes: "12.4K",
    ping: null,
    uptime: 99.5,
    description:
      "Server Minecraft Indonesia yang menghadirkan pengalaman bermain terbaik untuk semua pemain dengan berbagai game mode.",
    longDescription: `# ⭐ Selamat Datang di Kaizen Network

Kaizen Network adalah server Minecraft Indonesia premium dengan berbagai game mode berkualitas.

## 🎮 Game Mode

- **Survival** — Survival dengan fitur lengkap
- **Skyblock** — Petualangan di atas awan
- **Creative** — Bangun tanpa batas
- **Roleplay** — Mainkan karakter dan cerita`,
    discord: "https://discord.gg/kaizennetwork",
    tags: [
      "Survival",
      "Skyblock",
      "Creative",
      "Roleplay",
      "Economy",
      "Land Claim",
      "PvP",
      "Cross-Play",
      "Discord",
    ],
    version: "1.20 - 26.2",
    gallery: gal(4, ["Spawn Utama", "Creative Plot", "Skyblock Hub", "PvP Tournament"]).map((g) => ({
      ...g,
      serverName: "Kaizen Network",
      logo: logoKaizen,
      description: descKaizen,
    })),
    shorts: [
      {
        title: "Kaizen Server Spotlight",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
        views: "6.8K",
        serverName: "Kaizen Network",
      },
    ],
  },
  {
    id: 5,
    rank: 5,
    name: "Minesive",
    slug: "minesive",
    banner:
      "https://minecraft-mp.com/images/banners/banner-333355-1721379218.mp4",
    bannerType: "video",
    logo: logoMinesive,
    ip: "minesive.com",
    players: { online: 679, max: 1000 },
    votes: "8.5K",
    ping: null,
    uptime: 99.6,
    description:
      "Server Minecraft dengan era baru. Tersedia Economy, Events, Manhunt, OneBlock, Practice, PvP, dan Survival seru!",
    longDescription: `# 🚀 Selamat Datang di Minesive

**Minesive** hadir dengan era baru Minecraft Indonesia. Berbagai mode seru siap menemani petualanganmu!

## 🎮 Game Mode

- **Survival** — Survival dengan twist unik
- **Manhunt** — Kejar-kejaran seru antar pemain
- **OneBlock** — Tantangan satu blok
- **Practice PvP** — Asah skill PvP-mu
- **War** — Perang antar faction`,
    discord: "https://discord.gg/minesive",
    tags: [
      "Survival",
      "Economy",
      "Events",
      "PvP",
      "SMP",
      "War",
      "OneBlock",
      "Manhunt",
      "Practice",
      "Cross-Play",
    ],
    version: "1.20 - 26.2",
    gallery: gal(5, ["OneBlock Challenge", "Practice PvP Arena", "Survival World Tour", "War Zone Battlefield"]).map((g) => ({
      ...g,
      serverName: "Minesive",
      logo: logoMinesive,
      description: descMinesive,
    })),
    shorts: [
      {
        title: "Minesive New Era Trailer",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
        views: "2.1K",
        serverName: "Minesive",
      },
    ],
  },
  {
    id: 6,
    rank: 6,
    name: "zeetex legends",
    slug: "zeetex-legends",
    banner:
      "https://minecraft-mp.com/images/banners/banner-353635-1782497182.mp4",
    bannerType: "video",
    logo: logoZeetex,
    ip: "zeetex.my.id",
    players: { online: 166, max: 700 },
    votes: "5.8K",
    ping: null,
    uptime: 99.4,
    description:
      "Server untuk Bedrock player. Tersedia mode Adventure, Anarchy, Faction, dan PvP seru.",
    longDescription: md(
      "Server untuk Bedrock player dengan mode Adventure, Anarchy, Faction, dan PvP.",
    ),
    discord: "https://discord.gg/zeetexlegends",
    tags: ["Adventure", "Anarchy", "Cross-Play", "Faction", "PvP"],
    version: "1.20 - 26.2",
    gallery: gal(6, ["Spawn Utama", "Anarchy Zone", "Faction Base", "PvP Arena"]).map((g) => ({
      ...g,
      serverName: "zeetex legends",
      logo: logoZeetex,
      description: descZeetex,
    })),
    shorts: [],
  },
  {
    id: 7,
    rank: 7,
    name: "Voltraz MC",
    slug: "voltraz-mc",
    banner:
      "https://minecraft-mp.com/images/banners/banner-340112-1747107786.mp4",
    bannerType: "video",
    logo: logoVoltraz,
    ip: "voltraz.xyz",
    players: { online: 124, max: 500 },
    votes: "4.2K",
    ping: null,
    uptime: 99.3,
    description:
      "Server Minecraft semi-RPG penuh petualangan dengan fitur unik dan komunitas aktif.",
    longDescription: md(
      "Server Minecraft semi-RPG penuh petualangan dengan fitur unik dan komunitas aktif.",
    ),
    discord: "https://discord.gg/voltrazmc",
    tags: [
      "Arena",
      "Cross-Play",
      "Economy",
      "KitPvP",
      "Raiding",
      "Ranks",
      "SMP",
      "Survival",
      "War",
    ],
    version: "1.20 - 26.2",
    gallery: gal(7, ["Spawn Utama", "RPG Quest Area", "Economy Market", "War Zone"]).map((g) => ({
      ...g,
      serverName: "Voltraz MC",
      logo: logoVoltraz,
      description: descVoltraz,
    })),
    shorts: [],
  },
  {
    id: 9,
    rank: 9,
    name: "Project Seria",
    slug: "project-seria",
    banner:
      "https://minecraft-mp.com/images/banners/banner-336811-1780368403.mp4",
    bannerType: "video",
    logo: logoSeria,
    ip: "mc.seria.id",
    players: { online: 139, max: 250 },
    votes: "2.8K",
    ping: null,
    uptime: 99.1,
    description:
      "Server dengan mode Survival, Skyblock, Faction, dan PvP. Tersedia fitur lengkap untuk semua pemain.",
    longDescription: md(
      "Server dengan mode Survival, Skyblock, Faction, dan PvP.",
    ),
    discord: "https://discord.gg/projectseria",
    tags: [
      "Cross-Play",
      "Discord",
      "Economy",
      "Faction",
      "PvE",
      "PvP",
      "Skyblock",
      "Survival",
    ],
    version: "1.21.6",
    gallery: gal(9, ["Spawn Utama", "Skyblock Island", "Faction Base", "PvP Arena"]).map((g) => ({
      ...g,
      serverName: "Project Seria",
      logo: logoSeria,
      description: descSeria,
    })),
    shorts: [],
  },
  {
    id: 10,
    rank: 10,
    name: "VoxenSMP",
    slug: "voxen-smp",
    banner:
      "https://minecraft-mp.com/images/banners/banner-353923-1783087154.mp4",
    bannerType: "video",
    logo: logoVoxen,
    ip: "voxensmp.xyz",
    players: { online: 90, max: 2026 },
    votes: "2.5K",
    ping: null,
    uptime: 99.0,
    description:
      "Legends RPG Survival Network dengan sistem senjata Legends, Buku Kontrak, Dungeon, Boss, dan banyak fitur RPG.",
    longDescription: `# ⚔️ VoxenSMP — Legends RPG Survival Network

**VoxenSMP** menghadirkan pengalaman Survival RPG yang unik dengan sistem Legends.

## 🎮 Fitur RPG

- ⚔️ **Senjata Legends** — Koleksi senjata legendaris dengan kemampuan unik
- 📜 **Buku Kontrak** — Misi dan kontrak dengan reward menarik
- 🏰 **Dungeon** — Jelajahi dungeon penuh monster dan harta karun
- 👹 **Boss** — Lawan boss kuat untuk loot eksklusif
- ⚡ **McMMO** — Sistem skill yang berkembang seiring bermain`,
    discord: "https://discord.gg/voxensmp",
    tags: [
      "Adventure",
      "Arena",
      "Cross-Play",
      "Economy",
      "Events",
      "Faction",
      "KitPvP",
      "McMMO",
    ],
    version: "1.20 - 26.1.2",
    gallery: gal(10, ["Spawn Utama", "Dungeon Entrance", "Boss Arena", "Survival Base"]).map((g) => ({
      ...g,
      serverName: "VoxenSMP",
      logo: logoVoxen,
      description: descVoxen,
    })),
    shorts: [],
  },
  {
    id: 11,
    rank: 11,
    name: "Visantara",
    slug: "visantara",
    banner:
      "https://minecraft-mp.com/images/banners/banner-336809-1748264420.mp4",
    bannerType: "video",
    logo: logoVisantara,
    ip: "play.visantara.com",
    players: { online: 79, max: 2026 },
    votes: "2.1K",
    ping: null,
    uptime: 98.8,
    description:
      "Server Minecraft bertema Nusantara. Visantara menggabungkan kekuatan budaya Indonesia dalam gameplay survival.",
    longDescription: `# 🏝️ Visantara — Server Bertema Nusantara

**Visantara** adalah server Minecraft yang mengangkat tema budaya Nusantara Indonesia.

## 🎮 Tema & Mode

- 🏝️ **Survival Nusantara** — Bangun dan bertahan di dunia bertema Indonesia
- 🏛️ **Land Claim** — Lindungi wilayah kekuasaanmu
- 🌏 **Cross-Play** — Java & Bedrock support`,
    discord: "https://discord.gg/visantara",
    tags: ["Cross-Play", "Land Claim", "Survival"],
    version: "1.20 - 26.1.2",
    gallery: gal(11, ["Spawn Nusantara", "Land Claim Area", "Survival World", "Community Build"]).map((g) => ({
      ...g,
      serverName: "Visantara",
      logo: logoVisantara,
      description: descVisantara,
    })),
    shorts: [],
  },
  {
    id: 12,
    rank: 12,
    name: "Nusantarabatu",
    slug: "nusantarabatu",
    banner:
      "https://minecraft-mp.com/images/banners/banner-342138-1744010171.mp4",
    bannerType: "video",
    logo: logoNusantara,
    ip: "nusantarabatu.id",
    players: { online: 51, max: 2026 },
    votes: "1.8K",
    ping: null,
    uptime: 98.5,
    description:
      "NusantaraBatu Season 2 dengan update Survival terbaru. Tersedia Earth, Economy, Hardcore, dan Vanilla mode.",
    longDescription: md(
      "NusantaraBatu Season 2 dengan update Survival terbaru.",
    ),
    discord: "https://discord.gg/nusantarabatu",
    tags: [
      "Adventure",
      "Cross-Play",
      "Earth",
      "Economy",
      "Hardcore",
      "Land Claim",
      "Survival",
      "Survival Games",
      "Vanilla",
    ],
    version: "1.20 - 26.1.2",
    gallery: gal(12, ["Spawn Utama", "Survival World", "Earth Mode", "Economy Market"]).map((g) => ({
      ...g,
      serverName: "Nusantarabatu",
      logo: logoNusantara,
      description: descNusantara,
    })),
    shorts: [],
  },
  {
    id: 13,
    rank: 13,
    name: "Hunter SMP",
    slug: "hunter-smp",
    banner:
      "https://minecraft-mp.com/images/banners/banner-358398-1781840699.mp4",
    bannerType: "video",
    logo: logoHunter,
    ip: "huntsmp.xyz:25618",
    players: { online: 66, max: 200 },
    votes: "1.5K",
    ping: null,
    uptime: 98.0,
    description:
      "Server replica DonutSMP untuk Minecraft crack. Tersedia mode Anarchy, PvP, Raiding, dan Events seru.",
    longDescription: md(
      "Server replica DonutSMP dengan mode Anarchy, PvP, Raiding, dan Events.",
    ),
    discord: "https://discord.gg/huntersmp",
    tags: [
      "Anarchy",
      "BungeeCord",
      "Discord",
      "Events",
      "Practice",
      "PvP",
      "Raiding",
      "SMP",
      "Survival",
    ],
    version: "1.20 - 26.1.1",
    gallery: gal(13, ["Spawn Utama", "Anarchy Zone", "Raiding Area", "PvP Tournament"]).map((g) => ({
      ...g,
      serverName: "Hunter SMP",
      logo: logoHunter,
      description: descHunter,
    })),
    shorts: [],
  },
  {
    id: 14,
    rank: 14,
    name: "MineGens",
    slug: "minegens",
    banner:
      "https://minecraft-mp.com/images/banners/banner-320411-1686920875.mp4",
    bannerType: "video",
    logo: logoMinegens,
    ip: "minegens.id",
    players: { online: 172, max: 184 },
    votes: "5.2K",
    ping: null,
    uptime: 99.5,
    description:
      "First Gens Tycoon server di Indonesia. Nikmati Skyblock, OneBlock, Survival, dan fitur lengkap dengan komunitas aktif!",
    longDescription: `# ⛏️ MineGens — First Gens Tycoon di Indonesia

**MineGens** adalah server Gens Tycoon pertama di Indonesia! Kembangkan generator-mu dan jadi yang terkaya!

## 🎮 Game Mode

- ⛏️ **Gens Tycoon** — Kembangkan generator dan hasilkan uang
- 🏝️ **Skyblock** — Pulau apung dengan sistem gens
- 🧱 **OneBlock** — Satu blok, tak terbatas kemungkinan
- 🌲 **Survival** — Survival klasik dengan twist gens`,
    discord: "https://discord.gg/minegens",
    tags: [
      "Survival",
      "Skyblock",
      "OneBlock",
      "Economy",
      "Ranks",
      "Jobs",
      "Land Claim",
      "Cross-Play",
      "Discord",
      "Vanilla",
    ],
    version: "1.20 - 26.1.2",
    gallery: gal(14, ["Gens Tycoon Showroom", "Skyblock Island", "OneBlock Progress", "Community Event"]).map((g) => ({
      ...g,
      serverName: "MineGens",
      logo: logoMinegens,
      description: descMinegens,
    })),
    shorts: [
      {
        title: "Skyblock Tips & Tricks",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
        views: "4.5K",
        serverName: "MineGens",
      },
    ],
  },
  {
    id: 15,
    rank: 15,
    name: "TeranginSMP",
    slug: "terangin-smp",
    banner:
      "https://minecraft-mp.com/images/banners/banner-357463-1780804034.mp4",
    bannerType: "video",
    logo: logoTerangin,
    ip: "teranginsmp.my.id:19132",
    players: { online: 117, max: 6767 },
    votes: "1.2K",
    ping: null,
    uptime: 98.5,
    description:
      "Server Minecraft Survival Economy yang seru dan kompetitif. Cari uang, bangun base, bertarung di PvP, ikuti minigame, vote party, dan gacha.",
    longDescription: md(
      "Server Minecraft Survival Economy yang seru dan kompetitif.",
    ),
    discord: "https://discord.gg/teranginsmp",
    tags: [
      "Cross-Play",
      "Discord",
      "Economy",
      "Events",
      "Jobs",
      "Land Claim",
      "SMP",
      "Survival",
    ],
    version: "1.20 - 26.2",
    gallery: gal(15, ["Spawn Utama", "Economy Market", "Survival Base", "Minigame Area"]).map((g) => ({
      ...g,
      serverName: "TeranginSMP",
      logo: logoTerangin,
      description: descTerangin,
    })),
    shorts: [],
  },
  {
    id: 16,
    rank: 16,
    name: "Cloud SMP",
    slug: "cloud-smp",
    banner:
      "https://minecraft-mp.com/images/banners/banner-338692-1733796520.mp4",
    bannerType: "video",
    logo: logoCloud,
    ip: "cloudsmp.xyz",
    players: { online: 50, max: 2026 },
    votes: "1.0K",
    ping: null,
    uptime: 98.0,
    description:
      "Server SMP yang berdiri sejak 2021. Tersedia mode Adventure, Economy, Jobs, dan Land Claim.",
    longDescription: md(
      "Server SMP yang berdiri sejak 2021 dengan mode Adventure, Economy, Jobs, dan Land Claim.",
    ),
    discord: "https://discord.gg/cloudsmp",
    tags: ["Adventure", "Economy", "Jobs", "Land Claim", "SMP"],
    version: "1.21.1",
    gallery: gal(16, ["Spawn Utama", "Adventure Zone", "Economy Market", "Land Claim Area"]).map((g) => ({
      ...g,
      serverName: "Cloud SMP",
      logo: logoCloud,
      description: descCloud,
    })),
    shorts: [],
  },
  {
    id: 17,
    rank: 17,
    name: "HitmanSMP",
    slug: "hitman-smp",
    banner:
      "https://minecraft-mp.com/images/banners/banner-349589-1760422128.mp4",
    bannerType: "video",
    logo: logoHitman,
    ip: "hitmansmp.net:25565",
    players: { online: 85, max: 200 },
    votes: "800",
    ping: null,
    uptime: 97.5,
    description:
      "Ultimate Crystal PvP experience. Adrenaline-fueled, fast-paced, and brutally competitive.",
    longDescription: `# 💥 HitmanSMP — Ultimate Crystal PvP

**HitmanSMP 1.21+** — the ultimate Crystal PvP experience.

## ⚔️ PvP Features

- 💎 **Crystal PvP** — Master End Crystals
- 🛡️ **Obsidian Control** — Dominasi dengan Obsidian
- 🧪 **Totems** — Clutch dengan Totems
- ⚡ **Fast-paced** — Adrenaline-fueled combat`,
    discord: "https://discord.gg/hitmansmp",
    tags: ["Economy", "PvP", "Raiding", "Ranks", "SMP", "Survival"],
    version: "1.20 - 26.1.2",
    gallery: gal(17, ["Crystal PvP Arena", "Survival Base", "Economy Market", "Raiding Zone"]).map((g) => ({
      ...g,
      serverName: "HitmanSMP",
      logo: logoHitman,
      description: descHitman,
    })),
    shorts: [],
  },
  {
    id: 18,
    rank: 18,
    name: "Kolawa World",
    slug: "kolawa-world",
    banner:
      "https://minecraft-mp.com/images/banners/banner-359355-1781454677.mp4",
    bannerType: "video",
    logo: logoKolawa,
    ip: "play.kolawa.my.id",
    players: { online: 51, max: 100 },
    votes: "600",
    ping: null,
    uptime: 97.0,
    description:
      "Server SMP Survival Vanilla dengan fitur Economy, Jobs, Discord, dan Land Claim.",
    longDescription: md(
      "Server SMP Survival Vanilla dengan fitur Economy, Jobs, Discord, dan Land Claim.",
    ),
    discord: "https://discord.gg/kolawaworld",
    tags: [
      "Cross-Play",
      "Discord",
      "Economy",
      "Jobs",
      "Land Claim",
      "SMP",
      "Survival",
      "Vanilla",
    ],
    version: "1.21.11",
    gallery: gal(18, ["Spawn Utama", "Survival World", "Economy Market", "Land Claim Area"]).map((g) => ({
      ...g,
      serverName: "Kolawa World",
      logo: logoKolawa,
      description: descKolawa,
    })),
    shorts: [],
  },
  {
    id: 19,
    rank: 19,
    name: "VolteraMC",
    slug: "voltera-mc",
    banner:
      "https://minecraft-mp.com/images/banners/banner-357979-1778620653.mp4",
    bannerType: "video",
    logo: logoVoltera,
    ip: "play.volteramc.net",
    players: { online: 0, max: 120 },
    votes: "400",
    ping: null,
    uptime: 96.5,
    description:
      "Server Adventure, Survival, dan SMP dengan fitur Jobs, Land Claim, dan Cross-Play.",
    longDescription: md(
      "Server Adventure, Survival, dan SMP dengan fitur Jobs, Land Claim, dan Cross-Play.",
    ),
    discord: "https://discord.gg/volteramc",
    tags: [
      "Adventure",
      "Cross-Play",
      "Jobs",
      "Land Claim",
      "SMP",
      "Survival",
      "Vanilla",
    ],
    version: "1.20 - 26.1.2",
    gallery: gal(19, ["Spawn Utama", "Adventure Zone", "Survival Base", "Land Claim Area"]).map((g) => ({
      ...g,
      serverName: "VolteraMC",
      logo: logoVoltera,
      description: descVoltera,
    })),
    shorts: [],
  },
  {
    id: 20,
    rank: 20,
    name: "ZEPHYARC",
    slug: "zephyarc",
    banner:
      "https://minecraft-mp.com/images/banners/banner-358483-1779701138.mp4",
    bannerType: "video",
    logo: logoZephy,
    ip: "play.zephyarc.xyz",
    players: { online: 38, max: 100 },
    votes: "300",
    ping: null,
    uptime: 96.0,
    description:
      "Simple server with amazing features. Tersedia Adventure, Economy, Land Claim, dan Survival.",
    longDescription: md(
      "Simple server with amazing features. Tersedia Adventure, Economy, Land Claim, dan Survival.",
    ),
    discord: "https://discord.gg/zephyarc",
    tags: ["Adventure", "Economy", "Land Claim", "Survival"],
    version: "1.20 - 26.1.2",
    gallery: gal(20, ["Spawn Utama", "Adventure Zone", "Economy Market", "Survival Base"]).map((g) => ({
      ...g,
      serverName: "ZEPHYARC",
      logo: logoZephy,
      description: descZephy,
    })),
    shorts: [],
  },
];
