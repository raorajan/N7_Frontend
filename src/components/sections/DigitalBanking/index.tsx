import Link from "next/link";

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
      <circle cx="10" cy="10" r="10" fill="#0066FF" />
      <path d="M5.5 10.5L8.5 13.5L14.5 7.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-3 mt-4">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-3">
          <CheckIcon />
          <span className="text-[#03121A] text-[14px] leading-[160%]" style={{ fontFamily: "var(--font-archivo)" }}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

// Phone mockup wrapper — CSS-styled phone frame
function PhoneMockup({ children }: { children?: React.ReactNode }) {
  return (
    <div
      style={{
        width: "260px",
        minHeight: "520px",
        background: "#fff",
        borderRadius: "36px",
        border: "8px solid #0A0A0A",
        boxShadow: "0 30px 80px rgba(0,0,0,0.18)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Notch */}
      <div style={{ width: "80px", height: "26px", background: "#0A0A0A", borderRadius: "0 0 18px 18px", margin: "0 auto" }} />
      {/* Screen content */}
      <div style={{ flex: 1, width: "100%", padding: "12px 0" }}>
        {children}
      </div>
    </div>
  );
}

export function DigitalBankingSection() {
  return (
    <section
      className="w-full max-w-[1440px] mx-auto"
      style={{ background: "#E9F4F9" }}
    >
      {/* ═══ BLOCK 1: Digital banking out-of-the-box ═══ */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-0 px-6 lg:px-[80px] py-20 lg:py-[100px]">
        
        {/* Left: Text content */}
        <div className="flex flex-col gap-6 w-full lg:w-[400px] lg:mr-16">
          <h2
            className="text-[#03121A] text-[36px] lg:text-[48px] font-bold leading-[115%] tracking-[-1px]"
            style={{ fontFamily: "var(--font-archivo)" }}
          >
            Digital banking out-of-the-box
          </h2>
          <p className="text-[#4A6678] text-[15px] leading-[160%]" style={{ fontFamily: "var(--font-archivo)" }}>
            N7 helps your financial institution improve the client experience, automate and optimize procedures
          </p>
          <div className="flex flex-col gap-3 mt-2">
            <Link
              href="#demo"
              className="inline-flex items-center justify-center uppercase text-white bg-[#0066FF] hover:bg-[#F2F8FC] hover:text-[#0055FF] transition-colors font-medium tracking-wider w-full sm:w-[200px] h-[49px] rounded-[10px] text-[12px]"
              style={{ fontFamily: "var(--font-chivo-mono)" }}
            >
              Request Demo
            </Link>
            <Link
              href="#learn-more"
              className="relative inline-flex text-[#0066FF] text-xs tracking-widest uppercase font-medium pb-1 cursor-pointer after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-[#0066FF] after:w-1/2 after:transition-all after:duration-300 hover:after:w-full w-fit"
              style={{ fontFamily: "var(--font-chivo-mono)" }}
            >
              Learn more →
            </Link>
          </div>
        </div>

        {/* Center: Phone */}
        <div className="flex justify-center lg:mx-12">
          <PhoneMockup>
            <div className="px-4 py-2">
              <p className="text-[10px] text-[#aaa]" style={{ fontFamily: "var(--font-archivo)" }}>Toni Kross</p>
              <p className="text-[22px] font-bold text-[#03121A]" style={{ fontFamily: "var(--font-archivo)" }}>$42,295.00 USD</p>
              <div className="flex gap-4 mt-3 mb-4">
                {["Fund Transfer", "Add Money", "More"].map((a) => (
                  <div key={a} className="flex flex-col items-center gap-1">
                    <div className="w-9 h-9 rounded-full bg-[#EEF4FF] flex items-center justify-center">
                      <div className="w-4 h-4 rounded bg-[#0066FF] opacity-70" />
                    </div>
                    <span className="text-[8px] text-[#666]" style={{ fontFamily: "var(--font-archivo)" }}>{a}</span>
                  </div>
                ))}
              </div>
              <p className="text-[10px] font-semibold text-[#03121A] mb-2" style={{ fontFamily: "var(--font-archivo)" }}>Recent activity</p>
              {[{ name: "from Google", amt: "+$200" }, { name: "from Google", amt: "-$471" }, { name: "from Google", amt: "+$800" }].map((t, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-[#f0f0f0]">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#e8f0fe]" />
                    <div>
                      <p className="text-[9px] font-medium text-[#03121A]" style={{ fontFamily: "var(--font-archivo)" }}>{t.name}</p>
                      <p className="text-[8px] text-[#aaa]">Tue Jul Nov</p>
                    </div>
                  </div>
                  <span className={`text-[10px] font-bold ${t.amt.startsWith("+") ? "text-green-600" : "text-red-500"}`}>{t.amt}</span>
                </div>
              ))}
            </div>
          </PhoneMockup>
        </div>

        {/* Right: Feature description */}
        <div className="flex flex-col gap-4 w-full lg:w-[360px] lg:ml-8">
          <h3 className="text-[#03121A] text-[16px] font-bold leading-[130%]" style={{ fontFamily: "var(--font-archivo)" }}>
            Fully compliant with regulatory requirement
          </h3>
          <p className="text-[#4A6678] text-[13px] leading-[165%]" style={{ fontFamily: "var(--font-archivo)" }}>
            The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank's operational risk protocols and procedures.
          </p>
          <FeatureList items={["Pre-integrated Security System", "Fully Compliant With Regulatory Requirement", "Digitally Connected Core"]} />
        </div>
      </div>

      {/* ═══ BLOCK 2: No legacy IT systems ═══ */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-0 px-6 lg:px-[80px] py-20 lg:py-[100px]">

        {/* Left: Feature description */}
        <div className="flex flex-col gap-4 w-full lg:w-[360px] lg:mr-8 order-2 lg:order-1">
          <h3 className="text-[#03121A] text-[20px] font-bold leading-[130%]" style={{ fontFamily: "var(--font-archivo)" }}>
            No legacy IT systems
          </h3>
          <p className="text-[#4A6678] text-[13px] leading-[165%]" style={{ fontFamily: "var(--font-archivo)" }}>
            Our Digital Banking solution and multilayered approach helps financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance.
          </p>
          <FeatureList items={["Adaptive & Intelligent API monetisation", "Ambient User Experience", "Cloud-native With lower TCO"]} />
        </div>

        {/* Center: Phone */}
        <div className="flex justify-center lg:mx-12 order-1 lg:order-2">
          <PhoneMockup>
            <div className="px-4 py-2">
              <p className="text-[10px] text-[#aaa]" style={{ fontFamily: "var(--font-archivo)" }}>Total Balance</p>
              <p className="text-[20px] font-bold text-[#03121A]" style={{ fontFamily: "var(--font-archivo)" }}>$8,295.00 USD</p>
              {/* Bar chart */}
              <div className="flex items-end gap-2 my-4 h-[80px]">
                {[40, 60, 80, 100, 70, 55].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: i === 3 ? "#0066FF" : "#D0E6FF" }} />
                ))}
              </div>
              <div className="flex justify-between mb-4">
                {["$445.00", "$425.00"].map((v) => (
                  <div key={v} className="text-center">
                    <p className="text-[9px] font-semibold text-[#03121A]">{v}</p>
                    <p className="text-[7px] text-[#aaa]">Balance</p>
                  </div>
                ))}
              </div>
              <p className="text-[10px] font-semibold text-[#03121A] mb-2" style={{ fontFamily: "var(--font-archivo)" }}>Recent activity</p>
              {[{ name: "To Ali", amt: "-$20" }, { name: "from Google", amt: "+$20" }].map((t, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-[#f0f0f0]">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#e8f0fe]" />
                    <p className="text-[9px] font-medium text-[#03121A]">{t.name}</p>
                  </div>
                  <span className={`text-[10px] font-bold ${t.amt.startsWith("+") ? "text-green-600" : "text-red-500"}`}>{t.amt}</span>
                </div>
              ))}
            </div>
          </PhoneMockup>
        </div>

        <div className="hidden lg:block lg:w-[360px] order-3" />
      </div>

      {/* ═══ BLOCK 3: No traditional branches ═══ */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-0 px-6 lg:px-[80px] py-20 lg:py-[100px]">

        {/* Left: Phone */}
        <div className="flex justify-center lg:mx-12">
          <PhoneMockup>
            <div className="px-4 py-2">
              {/* Profile avatar */}
              <div className="flex flex-col items-center mb-4 mt-2">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#00B4FD] to-[#003ACE] mb-2 flex items-center justify-center">
                  <span className="text-white text-xl font-bold">TK</span>
                </div>
                <p className="text-[12px] font-bold text-[#03121A]">Toni Kross</p>
                <p className="text-[9px] text-[#aaa]">online advisor</p>
              </div>
              {/* Menu items */}
              {["Profile setting", "Setting", "Support", "Sign out"].map((item) => (
                <div key={item} className="flex items-center justify-between py-3 border-b border-[#f5f5f5]">
                  <span className="text-[11px] text-[#03121A]" style={{ fontFamily: "var(--font-archivo)" }}>{item}</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M5 3L9 7L5 11" stroke="#999" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
              ))}
            </div>
          </PhoneMockup>
        </div>

        {/* Right: Feature description */}
        <div className="flex flex-col gap-4 w-full lg:w-[360px] lg:ml-16">
          <h3 className="text-[#03121A] text-[20px] font-bold leading-[130%]" style={{ fontFamily: "var(--font-archivo)" }}>
            No traditional branches
          </h3>
          <p className="text-[#4A6678] text-[13px] leading-[165%]" style={{ fontFamily: "var(--font-archivo)" }}>
            Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing risks and optimising operational costs for a seamless branchless experience.
          </p>
          <FeatureList items={["Branchless & Paperless Banking", "Digital Transformation Capability", "Optimized, Adaptable and Scalable"]} />
        </div>
      </div>

    </section>
  );
}
