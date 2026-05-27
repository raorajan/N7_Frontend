import Link from "next/link";
import Image from "next/image";

export function SolutionsSection() {
  return (
    <section className="relative w-full max-w-[1440px] mx-auto bg-[#000D12] lg:h-[600px] overflow-hidden py-6 lg:py-0">
      <div className="relative w-full h-full max-w-[1440px] mx-auto flex flex-col lg:block px-6 lg:px-0 gap-6 lg:gap-0">

        <div 
          className="absolute z-0 pointer-events-none hidden lg:block" 
          style={{ 
            top: '-2.25px', 
            left: '-163.31px', 
            opacity: 0.5,
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)',
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)'
          }}
        >
          <svg width="1141" height="687" viewBox="0 0 1141 687">
            <defs>
              <linearGradient id="cb7-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="-5.68%" stopColor="rgba(0, 180, 253, 0.5)" />
                <stop offset="86.98%" stopColor="rgba(0, 58, 206, 0.5)" />
              </linearGradient>
            </defs>
            <text 
              x="0" 
              y="550" 
              fontFamily="var(--font-archivo)" 
              fontWeight="500" 
              fontSize="572.63px" 
              fill="transparent" 
              stroke="url(#cb7-stroke)" 
              strokeWidth="1.59"
            >
              CB7
            </text>
          </svg>
        </div>

        <div className="relative z-10 w-full lg:static">
          <div className="relative lg:absolute lg:top-[156.88px] lg:left-[80px] w-full lg:w-[607.83px] h-auto lg:h-[308px] flex flex-col gap-[16px] items-center lg:items-start justify-center text-center lg:text-left mt-8 lg:mt-0">
            <h2
              className="text-[#E9F4F9] text-[32px] lg:text-[48px] font-normal leading-[120%] tracking-[-1%]"
              style={{ fontFamily: "var(--font-archivo)" }}
            >
              A complete cloud-based <br className="hidden lg:block" /> core banking.
            </h2>
            <p
              className="text-[#586E84] text-[16px] lg:text-[18px] leading-[160%] max-w-[520px] mb-4"
              style={{ fontFamily: "var(--font-archivo)" }}
            >
              Faster time to market with our cloud-based <br className="hidden lg:block" /> core banking services
            </p>
            
            <div className="flex flex-col items-center lg:items-start gap-[16px]">
              <Link
                href="#demo"
                className="inline-flex items-center justify-center uppercase text-white [background:#0066FF] hover:[background:#F2F8FC] hover:text-[#003ACE] transition-colors whitespace-nowrap font-medium tracking-wider w-full sm:w-[226px] h-[49px] rounded-[10px]"
                style={{
                  fontFamily: "var(--font-chivo-mono)",
                  fontSize: "12px",
                }}
              >
                Request Demo
              </Link>
              <Link
                href="#learn-more"
                className="relative inline-flex text-[#00B4FD] text-xs tracking-widest uppercase font-medium pb-1 cursor-pointer after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-[#00B4FD] after:w-1/2 after:transition-all after:duration-300 hover:after:w-full"
                style={{ fontFamily: "var(--font-chivo-mono)" }}
              >
                Learn more →
              </Link>
            </div>
          </div>
        </div>

        <div className="relative z-10 w-full lg:static">
          {/* Desktop Image: dash_half */}
          <div className="hidden lg:block absolute lg:top-[80.17px] lg:right-[-80px] lg:w-[651.66px] lg:h-[461.42px] z-10">
            <div className="relative w-full h-full">
              <Image 
                src="/images/icons/dash_half.png" 
                alt="AML Dashboard" 
                fill
                className="object-contain object-right"
                sizes="651px"
              />
            </div>
          </div>

          {/* Mobile Images: Complete dashboard + trackpad notch */}
          <div className="relative w-full lg:hidden flex flex-col items-center justify-center mt-10 px-4 sm:px-8">
            <div className="relative w-[85%] border-t border-l border-r border-white/20 rounded-t-[10px] overflow-hidden flex bg-[#000D12]">
              <img 
                src="/images/icons/dashboard.png" 
                alt="AML Dashboard Full" 
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="relative w-full border border-white/20 rounded-[8px] z-20 flex bg-[#000D12] -mt-[1px]">
              <img
                src="/images/icons/trackpad_notch.png"
                alt="Trackpad Notch"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
