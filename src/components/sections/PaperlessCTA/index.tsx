import Link from "next/link";

export function PaperlessCTASection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: "#000D12", minHeight: "316px" }}
    >
      
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-100px",
          left: "-100px",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,102,255,0.07) 0%, transparent 70%)",
        }}
      />

      <div
        className="relative z-10 max-w-[1440px] mx-auto w-full px-6 lg:px-[80px] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10"
        style={{ minHeight: "auto", paddingTop: "32px", paddingBottom: "32px" }}
      >
        
        <div className="flex flex-col gap-4 max-w-[560px]">
          <h2
            className="text-white text-[36px] md:text-[48px] lg:text-[54px] font-normal leading-[115%] tracking-[-1px]"
            style={{ fontFamily: "var(--font-archivo)" }}
          >
            Take the full advantage of going paper-less now.
          </h2>
          <p
            className="text-[#4A6678] text-[13px] leading-[165%] max-w-[380px]"
            style={{ fontFamily: "var(--font-archivo)" }}
          >
            CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
          <Link
            href="/contact"
            className="flex items-center justify-center px-8 h-[50px] rounded-[8px] text-white text-[11px] font-semibold tracking-[1.5px] uppercase transition-all hover:bg-white hover:text-[#000D12]"
            style={{
              fontFamily: "var(--font-chivo-mono)",
              border: "1px solid rgba(255, 255, 255, 0.35)",
              minWidth: "160px",
            }}
          >
            CONTACT US
          </Link>
          <Link
            href="/demo"
            className="flex items-center justify-center px-8 h-[50px] rounded-[8px] text-white text-[11px] font-semibold tracking-[1.5px] uppercase transition-all bg-[#0066FF] hover:bg-[#F2F8FC] hover:text-[#0055FF]"
            style={{
              fontFamily: "var(--font-chivo-mono)",
              boxShadow: "0px 10px 30px rgba(0, 102, 255, 0.25)",
              minWidth: "160px",
            }}
          >
            REQUEST DEMO
          </Link>
        </div>
      </div>
    </section>
  );
}
