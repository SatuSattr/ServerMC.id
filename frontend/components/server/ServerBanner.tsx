interface ServerBannerProps {
  src: string;
  type: "video" | "image";
  alt: string;
}

export default function ServerBanner({ src, type, alt }: ServerBannerProps) {
  return (
    <div className="relative h-[60px] bg-mc-dark-more-bg">
      {type === "video" ? (
        <video
          src={src}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
      ) : (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      )}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black/60 to-transparent" />
    </div>
  );
}
