import Link from "next/link";
import { ArrowRight } from "lucide-react";

const offices = [
  {
    city: "London",
    address: "Linktia Infosystems Ltd – CB7, 26 Main Road Sundridge, TN14 6EP, England, United Kingdom.",
  },
  {
    city: "Dubai",
    address: "Linktia Infosystems Ltd – CB7, Jumeirah Business, Center 5 Cluster W, Jumeirah Lakes Towers, Dubai, United Arab Emirates",
  },
  {
    city: "London",
    address: "Linktia Infosystems Ltd – CB7, Nirmal, Anand Nagar, Suncity Road, Pune, Maharashtra, 411041, India",
  },
];

const navColumns = [
  {
    heading: "Solutions",
    links: [
      "Core Banking CB7",
      "Digital Banking N7",
      "Open Banking",
      "Loan Origination System",
      "Loan Management System",
      "Digital Transformation",
    ],
  },
  {
    heading: "N7 Banking",
    links: ["About Us", "Solutions", "Contact", "Company", "Careers", "Insights", "Core Team", "Brand Center"],
  },
  {
    heading: "Our Socials",
    links: ["LinkedIn", "X"],
  },
];

export function Footer() {
  return (
    <footer className="relative w-full" style={{ background: "#000D12" }}>
      {/* Top Divider */}
      <div className="w-full h-px" style={{ background: "rgba(255,255,255,0.07)" }} />

      <div className="max-w-[1440px] mx-auto w-full px-6 lg:px-[80px] pt-16 lg:pt-[80px] pb-10">

        {/* 2-Column Layout */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-0 items-start justify-between">
          
          {/* LEFT — Large gradient N7 */}
          <div className="lg:w-[40%] shrink-0 flex items-start">
            <span
              className="font-bold leading-none select-none"
              style={{
                fontFamily: "var(--font-archivo)",
                fontSize: "clamp(120px, 18vw, 280px)",
                background: "linear-gradient(135deg, #00B4FD 0%, #003ACE 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                letterSpacing: "-4px",
              }}
            >
              N7
            </span>
          </div>

          {/* RIGHT — Offices + Nav Columns */}
          <div className="flex-1 flex flex-col gap-12 lg:gap-[3rem] w-full pt-4">
            
            {/* Offices Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {offices.map(({ city, address }) => (
                <div key={city + address} className="flex flex-col gap-3">
                  <h4
                    className="text-[#E9F4F9] text-[14px] font-semibold"
                    style={{ fontFamily: "var(--font-archivo)" }}
                  >
                    {city}
                  </h4>
                  <p
                    className="text-[#E9F4F9] text-[12px] leading-[175%]"
                    style={{ fontFamily: "var(--font-archivo)" }}
                  >
                    {address}
                  </p>
                </div>
              ))}
            </div>

            {/* Nav Links Row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
              {navColumns.map(({ heading, links }) => (
                <div key={heading} className="flex flex-col gap-4">
                  <h4
                    className="text-[#E9F4F9] text-[13px] font-semibold"
                    style={{ fontFamily: "var(--font-archivo)" }}
                  >
                    {heading}
                  </h4>
                  <ul className="flex flex-col gap-3">
                    {links.map((label) => (
                      <li key={label}>
                        <Link
                          href="#"
                          className="flex items-center justify-between text-[#E9F4F9] text-[13px] hover:text-white transition-colors group"
                          style={{ fontFamily: "var(--font-archivo)" }}
                        >
                          <span>{label}</span>
                          <span className="text-[#00A3FF] group-hover:translate-x-1 transition-transform">
                            <ArrowRight size={14} strokeWidth={2.5} />
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
