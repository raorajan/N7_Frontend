import Image from "next/image";
import { Container } from "../../common/Container";

const brands = [
  { name: "SHELLS", src: "/images/hero/shells.png" },
  { name: "SmartFinder", src: "/images/hero/smartfinder.png" },
  { name: "Zoomerr", src: "/images/hero/zoomerr.png" },
  { name: "ArtVenue", src: "/images/hero/ArtVanue.png" },
  { name: "kontrastr", src: "/images/hero/kontrastr.png" },
  { name: "WavesMarathon", src: "/images/hero/wavesmarathon.png", uppercase: true },
];

interface TrustedByProps {
  label?: string;
}

export function TrustedBy({ label = "Trusted By:" }: TrustedByProps) {
  return (
    <div className="mt-3 border-t border-white/5 pt-10">
      <Container>
        <p className="text-gray-400 text-sm mb-6">{label}</p>
        <div className="flex items-center w-[621px] h-[18px] gap-[12.4px] opacity-90 grayscale hover:grayscale-0 transition-all duration-300">
          {brands.map((brand) => (
            <div key={brand.name} className="flex items-center w-[86px] h-[18px] gap-[1.6px] shrink-0">
              <Image
                src={brand.src}
                alt={brand.name}
                width={18}
                height={18}
                className="object-contain h-[18px] w-auto shrink-0"
              />
              <span
                className={`font-bold text-white whitespace-nowrap align-middle${brand.uppercase ? " uppercase" : ""}`}
                style={{
                  fontFamily: "var(--font-roboto)",
                  fontSize: "10px",
                  lineHeight: "110%",
                  color:"#586E84",
                  letterSpacing: "0%",
                }}
              >
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
