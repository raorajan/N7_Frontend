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

function PhoneMockup({ imageSrc, alt }: { imageSrc: string; alt: string }) {
  return (
    <div className="w-full max-w-[260px] h-full flex justify-center items-center shrink-0">
      <img src={imageSrc} alt={alt} className="max-h-full w-auto object-contain" style={{ filter: "drop-shadow(0px 30px 80px rgba(0,0,0,0.18))" }} />
    </div>
  );
}

export function DigitalBankingSection() {
  return (
    <section className="relative w-full bg-[#E9F4F9] overflow-hidden">
      
      {/* ══ CONTENT CONTAINER ══ */}
      <div className="max-w-[1440px] mx-auto w-full px-6 lg:px-[80px] py-16 lg:py-[100px]">
        
        {/* ══ DESKTOP LAYOUT (Flex-based, fully responsive, >= 1280px) ══ */}
        <div className="hidden xl:flex items-start justify-between gap-12 xl:gap-[100px]">
          
          {/* LEFT COLUMN (Static Text) */}
          <div className="flex flex-col gap-6 w-[360px] xl:w-[420px] shrink-0 mt-[120px]">
            <h2 className="text-[#03121A] text-[36px] xl:text-[48px] font-bold leading-[115%] tracking-[-1px]" style={{ fontFamily: "var(--font-archivo)" }}>
              Digital banking out-of-the-box
            </h2>
            <p className="text-[#4A6678] text-[14px] xl:text-[15px] leading-[160%]" style={{ fontFamily: "var(--font-archivo)" }}>
              N7 helps your financial institution improve the client experience, automate and optimize procedures
            </p>
            <div className="flex flex-col gap-4 mt-2">
              <Link
                href="#demo"
                className="inline-flex items-center justify-center uppercase text-white bg-[#0066FF] hover:bg-[#F2F8FC] hover:text-[#0055FF] transition-colors font-medium tracking-wider w-[200px] h-[49px] rounded-[10px] text-[12px]"
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

          {/* RIGHT COLUMN (Zigzag Phones & Features) */}
          <div className="flex-1 max-w-[650px] relative flex flex-col gap-[110px]">
            
            {/* SVG Connecting Line Background */}
            <div className="absolute top-[270px] bottom-[270px] left-[130px] right-[130px] pointer-events-none z-0 hidden xl:block">
               <svg width="100%" height="100%" preserveAspectRatio="none">
                 <path d="M 0,0 C 0,30% 100%,20% 100%,50%" stroke="#0066FF" strokeWidth="1.5" fill="none" strokeOpacity="0.2"/>
                 <path d="M 100%,50% C 100%,80% 0,70% 0,100%" stroke="#0066FF" strokeWidth="1.5" fill="none" strokeOpacity="0.2"/>
               </svg>
            </div>

            {/* Row 1 */}
            <div className="relative z-10 flex flex-row items-center justify-between gap-8 h-[540px]">
              <PhoneMockup imageSrc="/images/hero/iPhone 13 Pro_1.png" alt="Digital banking" />
              <div className="flex flex-col gap-4 flex-1">
                <h3 className="text-[#03121A] text-[16px] font-bold leading-[130%]" style={{ fontFamily: "var(--font-archivo)" }}>
                  Fully compliant with regulatory requirement
                </h3>
                <p className="text-[#4A6678] text-[13px] leading-[165%]" style={{ fontFamily: "var(--font-archivo)" }}>
                  The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank&apos;s operational risk protocols and procedures.
                </p>
                <FeatureList items={["Pre-integrated Security System", "Fully Compliant With Regulatory Requirement", "Digitally Connected Core"]} />
              </div>
            </div>

            {/* Row 2 */}
            <div className="relative z-10 flex flex-row items-center justify-between gap-8 h-[540px]">
              <div className="flex flex-col gap-4 flex-1">
                <h3 className="text-[#03121A] text-[20px] font-bold leading-[130%]" style={{ fontFamily: "var(--font-archivo)" }}>
                  No legacy IT systems
                </h3>
                <p className="text-[#4A6678] text-[13px] leading-[165%]" style={{ fontFamily: "var(--font-archivo)" }}>
                  Our Digital Banking solution and multilayered approach helps financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance.
                </p>
                <FeatureList items={["Adaptive & Intelligent API monetisation", "Ambient User Experience", "Cloud-native With lower TCO"]} />
              </div>
              <PhoneMockup imageSrc="/images/hero/iPhone 13 Pro_2.png" alt="No legacy IT systems" />
            </div>

            {/* Row 3 */}
            <div className="relative z-10 flex flex-row items-center justify-between gap-8 h-[540px]">
              <PhoneMockup imageSrc="/images/hero/iPhone 13 Pro_3.png" alt="No traditional branches" />
              <div className="flex flex-col gap-4 flex-1">
                <h3 className="text-[#03121A] text-[20px] font-bold leading-[130%]" style={{ fontFamily: "var(--font-archivo)" }}>
                  No traditional branches
                </h3>
                <p className="text-[#4A6678] text-[13px] leading-[165%]" style={{ fontFamily: "var(--font-archivo)" }}>
                  Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing risks and optimising operational costs for a seamless branchless experience.
                </p>
                <FeatureList items={["Branchless & Paperless Banking", "Digital Transformation Capability", "Optimized, Adaptable and Scalable"]} />
              </div>
            </div>
          </div>
        </div>

        {/* ══ TABLET & MOBILE LAYOUT (< 1280px) ══ */}
        <div className="flex flex-col gap-16 xl:hidden">
          {/* Main Title Block */}
          <div className="flex flex-col gap-6">
            <h2 className="text-[#03121A] text-[32px] md:text-[40px] font-bold leading-[115%]" style={{ fontFamily: "var(--font-archivo)" }}>
              Digital banking out-of-the-box
            </h2>
            <p className="text-[#4A6678] text-[15px] leading-[160%] max-w-[500px]" style={{ fontFamily: "var(--font-archivo)" }}>
              N7 helps your financial institution improve the client experience, automate and optimize procedures
            </p>
            <Link href="#demo" className="inline-flex items-center justify-center uppercase text-white bg-[#0066FF] hover:bg-[#F2F8FC] hover:text-[#0055FF] transition-colors font-medium tracking-wider w-full md:w-[200px] h-[49px] rounded-[10px] text-[12px]" style={{ fontFamily: "var(--font-chivo-mono)" }}>
              Request Demo
            </Link>
          </div>

          {/* Block 1 */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full max-w-[260px] mx-auto md:mx-0 shrink-0 h-auto">
              <PhoneMockup imageSrc="/images/hero/iPhone 13 Pro_1.png" alt="Digital banking out-of-the-box" />
            </div>
            <div className="flex flex-col gap-4 flex-1">
              <h3 className="text-[#03121A] text-[18px] md:text-[20px] font-bold" style={{ fontFamily: "var(--font-archivo)" }}>Fully compliant with regulatory requirement</h3>
              <p className="text-[#4A6678] text-[13px] leading-[165%]" style={{ fontFamily: "var(--font-archivo)" }}>
                The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank&apos;s operational risk protocols and procedures.
              </p>
              <FeatureList items={["Pre-integrated Security System", "Fully Compliant With Regulatory Requirement", "Digitally Connected Core"]} />
            </div>
          </div>

          {/* Block 2 */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full max-w-[260px] mx-auto md:mx-0 shrink-0 h-auto">
              <PhoneMockup imageSrc="/images/hero/iPhone 13 Pro_2.png" alt="No legacy IT systems" />
            </div>
            <div className="flex flex-col gap-4 flex-1">
              <h3 className="text-[#03121A] text-[18px] md:text-[20px] font-bold" style={{ fontFamily: "var(--font-archivo)" }}>No legacy IT systems</h3>
              <p className="text-[#4A6678] text-[13px] leading-[165%]" style={{ fontFamily: "var(--font-archivo)" }}>
                Our Digital Banking solution and multilayered approach helps financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance.
              </p>
              <FeatureList items={["Adaptive & Intelligent API monetisation", "Ambient User Experience", "Cloud-native With lower TCO"]} />
            </div>
          </div>

          {/* Block 3 */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full max-w-[260px] mx-auto md:mx-0 shrink-0 h-auto">
              <PhoneMockup imageSrc="/images/hero/iPhone 13 Pro_3.png" alt="No traditional branches" />
            </div>
            <div className="flex flex-col gap-4 flex-1">
              <h3 className="text-[#03121A] text-[18px] md:text-[20px] font-bold" style={{ fontFamily: "var(--font-archivo)" }}>No traditional branches</h3>
              <p className="text-[#4A6678] text-[13px] leading-[165%]" style={{ fontFamily: "var(--font-archivo)" }}>
                Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing risks and optimising operational costs for a seamless branchless experience.
              </p>
              <FeatureList items={["Branchless & Paperless Banking", "Digital Transformation Capability", "Optimized, Adaptable and Scalable"]} />
            </div>
          </div>
        </div>

        {/* ══ CTA Box ══ */}
        <div
          className="relative mt-20 lg:mt-32 rounded-[24px] overflow-hidden"
          style={{ background: "#03121A" }}
        >
          {/* CB7 background stroke text */}
          <svg
            className="absolute right-0 top-0 h-full pointer-events-none select-none"
            viewBox="0 0 700 280"
            preserveAspectRatio="xMaxYMid meet"
            style={{ opacity: 0.12 }}
          >
            <text
              x="700"
              y="80%"
              textAnchor="end"
              fill="none"
              stroke="#4A9CC8"
              strokeWidth="1.5"
              style={{
                fontFamily: "var(--font-archivo)",
                fontSize: "260px",
                fontWeight: "700",
                letterSpacing: "-8px",
              }}
            >
              CB7
            </text>
          </svg>

          {/* Content */}
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 px-8 lg:px-16 py-12 lg:py-14">
            {/* Left: Text */}
            <div className="flex flex-col gap-4 max-w-[520px]">
              <h2
                className="text-white text-[32px] lg:text-[42px] font-bold leading-[115%] tracking-[-0.5px]"
                style={{ fontFamily: "var(--font-archivo)" }}
              >
                Take the full advantage of going paper-less now.
              </h2>
              <p
                className="text-[#8BA3B8] text-[13px] leading-[165%]"
                style={{ fontFamily: "var(--font-archivo)" }}
              >
                N7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations
              </p>
            </div>

            {/* Right: Buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto shrink-0">
              <Link
                href="/contact"
                className="flex items-center justify-center w-full sm:w-[180px] h-[50px] rounded-[8px] text-white text-[12px] font-semibold tracking-[1px] uppercase transition-all hover:bg-white hover:text-[#03121A]"
                style={{
                  fontFamily: "var(--font-archivo)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                }}
              >
                CONTACT US
              </Link>
              <Link
                href="/demo"
                className="flex items-center justify-center w-full sm:w-[180px] h-[50px] rounded-[8px] text-white text-[12px] font-semibold tracking-[1px] uppercase transition-all bg-gradient-to-r from-[#00B4FD] to-[#003ACE] hover:from-[#F2F8FC] hover:to-[#F2F8FC] hover:text-[#003ACE]"
                style={{
                  fontFamily: "var(--font-archivo)",
                  boxShadow: "0px 10px 30px rgba(0, 102, 255, 0.2)",
                }}
              >
                REQUEST DEMO
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
