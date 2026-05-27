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
        <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6">{label}</p>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-3 sm:gap-x-[12.4px] sm:gap-y-[12.4px] opacity-90 grayscale hover:grayscale-0 transition-all duration-300 max-w-full lg:max-w-[621px]">
          {brands.map((brand) => (
            <div key={brand.name} className="flex items-center gap-[4px] sm:gap-[6px] shrink-0">
              <Image
                src={brand.src}
                alt={brand.name}
                width={14}
                height={14}
                className="object-contain w-[12px] h-[12px] sm:w-[16px] sm:h-[16px] lg:w-[18px] lg:h-[18px]"
              />
              <span
                className={`font-bold whitespace-nowrap align-middle${brand.uppercase ? " uppercase" : ""}`}
                style={{
                  fontFamily: "var(--font-roboto)",
                  fontSize: "clamp(9px, 2vw, 12px)",
                  lineHeight: "110%",
                  color: "#586E84",
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
