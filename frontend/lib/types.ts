export interface GalleryImage {
  id: number;
  serverId: number;
  serverName: string;
  src: string;
  width: number;
  height: number;
  caption: string;
  logo: string;
  description: string;
}

export interface Short {
  title: string;
  url: string;
  thumbnail: string;
  views: string;
  serverName: string;
}

export interface ServerContact {
  label: string;
  url: string;
}

export interface Server {
  id: number;
  rank: number;
  name: string;
  slug: string;
  banner: string;
  bannerType: "video" | "image";
  logo: string;
  ip: string;
  players: {
    online: number;
    max: number;
  };
  votes: string;
  ping: number | null;
  description: string;
  longDescription: string;
  discord?: string;
  youtube?: string;
  instagram?: string;
  tiktok?: string;
  website?: string;
  email?: string;
  contacts?: ServerContact[];
  uptime: number;
  tags: string[];
  version: string;
  shorts: Short[];
  gallery: GalleryImage[];
}
