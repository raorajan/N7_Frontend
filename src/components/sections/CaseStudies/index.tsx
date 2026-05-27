"use client";

import { useState } from "react";
import Link from "next/link";

const caseStudies = [
  {
    tag: "GETTING STARTED",
    title: "How we help brand reach out to more people",
    company: "Zoomerr",
    companyIcon: "/images/hero/zoomerr.png",
    image: "/images/icons/Frame%2054.png",
  },
  {
    tag: "GETTING STARTED",
    title: "How we help brand reach out to more people",
    company: "Zoomerr",
    companyIcon: "/images/hero/zoomerr.png",
    image: "/images/icons/Frame%2054.png",
  },
  {
    tag: "GETTING STARTED",
    title: "How we help brand reach out to more people",
    company: "Zoomerr",
    companyIcon: "/images/hero/zoomerr.png",
    image: "/images/icons/Frame%2054.png",
  },
  {
    tag: "GETTING STARTED",
    title: "How we help brand reach out to more people",
    company: "Zoomerr",
    companyIcon: "/images/hero/zoomerr.png",
    image: "/images/icons/Frame%2054.png",
  },
];

export function CaseStudiesSection() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((p) => (p === 0 ? caseStudies.length - 1 : p - 1));
  const next = () => setActive((p) => (p === caseStudies.length - 1 ? 0 : p + 1));

  const prevIdx = (active - 1 + caseStudies.length) % caseStudies.length;
  const nextIdx = (active + 1) % caseStudies.length;

  return (
    <section className="relative w-full overflow-hidden" style={{ background: "#000D12" }}>
      <div className="max-w-[1440px] mx-auto w-full py-8 lg:py-[100px]">

        <h2
          className="text-white text-center text-[36px] md:text-[48px] font-normal leading-[120%] tracking-[-0.5px] mb-12 lg:mb-16"
          style={{ fontFamily: "var(--font-archivo)" }}
        >
          Our Case Studies
        </h2>

        <div className="relative w-full flex items-center justify-center">

          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[10%] hidden md:block z-0 opacity-30 pointer-events-none">
            <div className="rounded-[20px] overflow-hidden aspect-square" style={{ background: "#0D2235" }}>
              <img src={caseStudies[prevIdx].image} alt="prev" className="w-full h-full object-contain" />
            </div>
          </div>

          <div
            className="relative z-10 w-full md:w-[66%] rounded-[24px] overflow-hidden flex flex-col md:flex-row"
            style={{ background: "#01141B" }}
          >
            
            <div
              className="w-full md:w-[42%] aspect-square shrink-0 flex items-center justify-center py-2 pl-2 md:py-6 md:pl-6"
              style={{ background: "#01141B" }}
            >
              <img
                src={caseStudies[active].image}
                alt={caseStudies[active].title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex flex-col justify-between gap-8 p-8 md:p-12 flex-1">
              <div className="flex flex-col gap-5">
                <span
                  className="text-[#00A3FF] text-[10px] tracking-[1.5px] uppercase"
                  style={{ fontFamily: "var(--font-chivo-mono)" }}
                >
                  {caseStudies[active].tag}
                </span>
                <h3
                  className="text-white text-[28px] md:text-[34px] font-normal leading-[130%]"
                  style={{ fontFamily: "var(--font-archivo)" }}
                >
                  {caseStudies[active].title}
                </h3>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#1A3241] flex items-center justify-center overflow-hidden shrink-0">
                    <img
                      src={caseStudies[active].companyIcon}
                      alt={caseStudies[active].company}
                      className="w-5 h-5 object-contain"
                    />
                  </div>
                  <span className="text-white text-[14px] font-medium" style={{ fontFamily: "var(--font-archivo)" }}>
                    {caseStudies[active].company}
                  </span>
                </div>
              </div>

              <button
                className="w-full py-3 rounded-[8px] text-white text-[10px] tracking-[1.5px] uppercase border transition-colors text-center hover:bg-white hover:text-[#000D12]"
                style={{ fontFamily: "var(--font-chivo-mono)", borderColor: "rgba(255,255,255,0.25)" }}
              >
                READ MORE
              </button>
            </div>
          </div>

        </div>

        <div className="relative flex items-center justify-center mt-10 gap-5 px-6 lg:px-[80px]">

          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-[#00B4FD] flex items-center justify-center text-[#00B4FD] transition-colors hover:bg-[#00B4FD] hover:text-white shrink-0"
            aria-label="Previous"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex items-center gap-2">
            {caseStudies.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: i === active ? "28px" : "8px",
                  height: "8px",
                  background: i === active ? "#00A3FF" : "rgba(255,255,255,0.25)",
                }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-[#00B4FD] flex items-center justify-center text-[#00B4FD] transition-colors hover:bg-[#00B4FD] hover:text-white shrink-0"
            aria-label="Next"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>

          <div className="absolute right-6 lg:right-[80px]">
            <Link
              href="#"
              className="relative inline-flex items-center gap-2 text-[#00A3FF] text-[12px] tracking-[1.5px] uppercase group"
              style={{ fontFamily: "var(--font-chivo-mono)" }}
            >
              <span className="relative pb-[2px] after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-[#00A3FF] after:w-1/2 after:transition-all after:duration-300 group-hover:after:w-full">
                VIEW ALL
              </span>
              <span>→</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
