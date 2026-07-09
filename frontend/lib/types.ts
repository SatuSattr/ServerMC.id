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
  tags: string[];
  version: string;
}
