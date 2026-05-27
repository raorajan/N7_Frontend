import Link from "next/link";

export function PaperlessCTASection() {
  return (
    <section
      className="relative w-full max-w-[1440px] mx-auto bg-[#000D12] py-8 lg:py-0"
      style={{ minHeight: "681px" }}
    >
      <div className="relative w-full h-full lg:h-[681px] flex items-center justify-center px-2 lg:px-0">
        
        {/* Center Box — Figma: w:1279 h:427 top:127 left:81 */}
        <div
          className="relative w-full lg:w-[1200px] lg:h-[400px] rounded-[27px] flex flex-col lg:flex-row items-center justify-between p-8 lg:p-0 overflow-hidden"
          style={{
            background: "#03121A", // Subtle lighter background for the box
            // On desktop, we can use absolute positioning to match exact Figma coords if we assume the parent is 1440x681
            ...(typeof window !== 'undefined' && window.innerWidth >= 1024 ? {
               position: "absolute",
               top: "127px",
               left: "81px"
            } : {})
          }}
        >
          {/* CB7 Background Stroke Text */}
          <div 
            className="absolute z-0 pointer-events-none hidden lg:block" 
            style={{ 
              top: '50%', 
              left: '50%',
              transform: 'translate(-50%, -50%)',
              opacity: 0.5,
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)',
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)'
            }}
          >
            <svg width="100%" height="100%" viewBox="0 0 1141 687" preserveAspectRatio="xMidYMid slice">
              <defs>
                <linearGradient id="cta-cb7-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="-5.68%" stopColor="rgba(0, 180, 253, 0.5)" />
                  <stop offset="86.98%" stopColor="rgba(0, 58, 206, 0.5)" />
                </linearGradient>
              </defs>
              <text 
                x="50%" 
                y="70%" 
                textAnchor="middle" 
                fill="none" 
                stroke="url(#cta-cb7-stroke)" 
                strokeWidth="2" 
                fontSize="500" 
                fontWeight="bold" 
                style={{ fontFamily: 'var(--font-archivo)' }}
                letterSpacing="-0.05em"
              >
                CB7
              </text>
            </svg>
          </div>

          {/* Left Content */}
          <div className="relative z-10 flex flex-col lg:w-[50%] lg:pl-[80px]">
            <h2 
              className="text-[#E9F4F9] text-[32px] lg:text-[48px] font-normal leading-[120%] tracking-[-1px] mb-6"
              style={{ fontFamily: "var(--font-archivo)" }}
            >
              Take the full advantage of<br className="hidden lg:block" /> going paper-less now.
            </h2>
            <p 
              className="text-[#8BA3B8] text-[14px] lg:text-[16px] leading-[150%] max-w-[480px]"
              style={{ fontFamily: "var(--font-archivo)" }}
            >
              CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations
            </p>
          </div>

          {/* Right Content (Buttons) */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center w-full lg:w-auto gap-4 lg:gap-6 mt-10 lg:mt-0 lg:pr-[80px]">
            <Link 
              href="/contact"
              className="flex items-center justify-center w-full lg:w-[180px] h-[50px] rounded-[8px] text-white text-[12px] font-semibold tracking-[1px] uppercase transition-all hover:bg-white hover:text-[#03121A]"
              style={{ 
                fontFamily: "var(--font-archivo)",
                border: "1px solid rgba(255, 255, 255, 0.3)"
              }}
            >
              CONTACT US
            </Link>
            
            <Link 
              href="/demo"
              className="flex items-center justify-center w-full lg:w-[180px] h-[50px] rounded-[8px] text-white text-[12px] font-semibold tracking-[1px] uppercase transition-all bg-gradient-to-r from-[#00B4FD] to-[#003ACE] hover:from-[#F2F8FC] hover:to-[#F2F8FC] hover:text-[#003ACE]"
              style={{ 
                fontFamily: "var(--font-archivo)",
                boxShadow: "0px 10px 30px rgba(0, 102, 255, 0.2)"
              }}
            >
              REQUEST DEMO
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
