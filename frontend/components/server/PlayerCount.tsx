import { Circle } from "lucide-react";

interface PlayerCountProps {
  online: number;
  max: number;
}

export default function PlayerCount({ online, max }: PlayerCountProps) {
  return (
    <div className="flex items-center gap-1">
      <Circle className="w-3 h-3 fill-mc-green-base text-mc-green-base" />
      <span>
        {online}/{max}
      </span>
    </div>
  );
}
