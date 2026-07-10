interface RankBadgeProps {
  rank: number;
  plain?: boolean;
}

export default function RankBadge({ rank, plain = false }: RankBadgeProps) {
  if (!plain && rank <= 3) {
    return (
      <div className="absolute right-5 bottom-4 flex items-end gap-1">
        <span className="text-neutral-400/70 font-minecraft text-2xl -mb-[3px]">
          #
        </span>
        <img
          src={`/assets/rank-${rank}.png`}
          alt={`rank-${rank}`}
          className="h-14"
        />
      </div>
    );
  }

  return (
    <span className="absolute text-2xl font-minecraft text-neutral-500 right-5 bottom-5">
      #{rank}
    </span>
  );
}
