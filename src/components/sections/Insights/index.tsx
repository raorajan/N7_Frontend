import Link from "next/link";

export function InsightsSection() {
  return (
    <section className="relative w-full" style={{ background: "#000D12" }}>
      <div className="max-w-[1440px] mx-auto w-full px-6 lg:px-[80px] py-24 lg:py-[120px] flex flex-col lg:flex-row gap-12 lg:gap-[100px]">
        {/* LEFT COLUMN */}
        <div className="w-full lg:w-[360px] xl:w-[420px] shrink-0 flex flex-col items-start gap-10">
          <h2 
            className="text-white text-[28px] md:text-[30px] font-normal leading-[120%] tracking-[-0.01em]" 
            style={{ fontFamily: "var(--font-archivo)" }}
          >
            Get yourself up-to-speed on all the things happening in fintech
          </h2>
          <button 
            className="px-10 py-3 rounded-[8px] text-white text-[12px] tracking-[1.5px] uppercase border hover:bg-white hover:text-[#000D12] transition-colors" 
            style={{ 
              fontFamily: "var(--font-chivo-mono)",
              borderColor: "#E9F4F9"
            }}
          >
            INSIGHTS
          </button>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex-1 flex flex-col gap-6 w-full max-w-[800px] ml-auto">
          {/* Top Featured Card */}
          <div className="w-full rounded-[24px] overflow-hidden flex flex-col md:flex-row p-5 rounded-3xl" style={{ background: "#05131A" }}>
            {/* Image placeholder / Pattern */}
            <div className="w-full md:w-[40%] flex items-center justify-center shrink-0 aspect-square rounded-2xl overflow-hidden" style={{ background: "#0B1E36" }}>
              <img src="/images/icons/Frame%2054.png" alt="Featured insight" className="w-full h-full object-contain opacity-90" />
            </div>
            {/* Content */}
            <div className="flex flex-col p-2 md:p-1 ml-5 justify-between gap-8 flex-1">
              <div className="flex flex-col gap-4">
                <span className="text-[#00A3FF] text-[10px] tracking-[1.5px] uppercase" style={{ fontFamily: "var(--font-chivo-mono)" }}>
                  GETTING STARTED
                </span>
                <h3 className="text-white text-[24px] md:text-[28px] font-medium leading-[130%]" style={{ fontFamily: "var(--font-archivo)" }}>
                  How to transition from a traditional to a digital bank
                </h3>
                <span className="text-[#5B7B90] text-[13px]" style={{ fontFamily: "var(--font-archivo)" }}>
                  David Grohl &nbsp;&nbsp;&nbsp; 17/08/24
                </span>
              </div>
              <button 
                className="w-full py-3 rounded-[8px] text-white text-[10px] tracking-[1.5px] uppercase border transition-colors text-center hover:bg-white hover:text-[#000D12]" 
                style={{ 
                  fontFamily: "var(--font-chivo-mono)",
                  borderColor: "rgba(255, 255, 255, 0.25)"
                }}
              >
                READ MORE
              </button>
            </div>
          </div>

          {/* Bottom Two Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="w-full rounded-[24px] p-8 md:p-10 flex flex-col justify-between gap-8" style={{ background: "#05131A" }}>
              <div className="flex flex-col gap-4">
                <span className="text-[#00A3FF] text-[10px] tracking-[1.5px] uppercase" style={{ fontFamily: "var(--font-chivo-mono)" }}>
                  GETTING STARTED
                </span>
                <h3 className="text-white text-[22px] md:text-[24px] font-medium leading-[130%]" style={{ fontFamily: "var(--font-archivo)" }}>
                  How to transition from a traditional to a digital bank
                </h3>
                <span className="text-[#5B7B90] text-[13px]" style={{ fontFamily: "var(--font-archivo)" }}>
                  David Grohl &nbsp;&nbsp;&nbsp; 17/08/24
                </span>
              </div>
              <button 
                className="w-full py-3 mt-4 rounded-[8px] text-white text-[10px] tracking-[1.5px] uppercase border transition-colors text-center hover:bg-white hover:text-[#000D12]" 
                style={{ 
                  fontFamily: "var(--font-chivo-mono)",
                  borderColor: "rgba(255, 255, 255, 0.25)"
                }}
              >
                READ MORE
              </button>
            </div>
            {/* Card 2 */}
            <div className="w-full rounded-[24px] p-8 md:p-10 flex flex-col justify-between gap-8" style={{ background: "#05131A" }}>
              <div className="flex flex-col gap-4">
                <span className="text-[#00A3FF] text-[10px] tracking-[1.5px] uppercase" style={{ fontFamily: "var(--font-chivo-mono)" }}>
                  GETTING STARTED
                </span>
                <h3 className="text-white text-[22px] md:text-[24px] font-medium leading-[130%]" style={{ fontFamily: "var(--font-archivo)" }}>
                  How to transition from a traditional to a digital bank
                </h3>
                <span className="text-[#5B7B90] text-[13px]" style={{ fontFamily: "var(--font-archivo)" }}>
                  David Grohl &nbsp;&nbsp;&nbsp; 17/08/24
                </span>
              </div>
              <button 
                className="w-full py-3 mt-4 rounded-[8px] text-white text-[10px] tracking-[1.5px] uppercase border transition-colors text-center hover:bg-white hover:text-[#000D12]" 
                style={{ 
                  fontFamily: "var(--font-chivo-mono)",
                  borderColor: "rgba(255, 255, 255, 0.25)"
                }}
              >
                READ MORE
              </button>
            </div>
          </div>

          {/* Link Below */}
          <div className="flex justify-end mt-4">
             <Link href="#" className="relative inline-flex items-center gap-2 text-[#00A3FF] text-[12px] tracking-[1.5px] uppercase group" style={{ fontFamily: "var(--font-chivo-mono)" }}>
               <span className="relative pb-[2px] after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-[#00A3FF] after:w-1/2 after:transition-all after:duration-300 group-hover:after:w-full">READ ALL INSIGHTS</span>
               <span>→</span>
             </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
