import Image from "next/image";
import { Container } from "../../common/Container";
import { Button } from "../../common/Button";
import { ArrowUpRight, Plus, Grid, ArrowRightLeft } from "lucide-react";
import { TrustedBy } from "../TrustedBy";

export function HeroSection() {
  return (
    <section className="pt-[140px] lg:pt-[212px] pb-12 lg:pb-0 relative overflow-hidden max-w-[1440px] mx-auto lg:h-[650px]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="w-full max-w-[608px] flex flex-col gap-[20px] lg:-mt-20 mx-auto text-center lg:text-left items-center lg:items-start">
            <div>
              <h1 
                className="w-full md:max-w-[608px] md:h-[160px] font-medium text-[#E9F4F9] text-4xl sm:text-5xl lg:text-[60px] leading-[1.2] tracking-[-0.01em] mb-4 lg:mb-3 mx-auto lg:mx-0"
                style={{ fontFamily: 'var(--font-archivo)' }}
              >
                The new foundation <br className="hidden md:block" />
                of modern banking
              </h1>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
                We drive innovation and growth, provide seamless customer experience and operational excellence
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 w-full mt-2 lg:mt-0">
              <Button variant="primary" size="default" className="w-full sm:w-[180px]">
                Request Demo
              </Button>
              <Button variant="outline" size="default" className="w-full sm:w-[180px]">
                Contact Us
              </Button>
            </div>
          </div>
          
          {/* Right Content - Visuals */}
          <div className="relative w-full max-w-[580px] h-[301px] mt-8 lg:mt-0 mx-auto lg:ml-auto lg:mr-0 shrink-0 transform scale-[0.55] sm:scale-75 md:scale-90 lg:scale-100 origin-top lg:origin-center -mb-[135px] sm:-mb-[75px] md:-mb-[30px] lg:mb-0">
            
            {/* Glow Circle behind main image */}
            <div 
              className="absolute top-[50%] left-[calc(130px+155px)] -translate-x-1/2 -translate-y-1/2 z-[5] pointer-events-none rounded-full blur-[100px]"
              style={{
                width: "298.87px",
                height: "298.87px",
                opacity: 0.5,
                background: "linear-gradient(103.43deg, #00B4FD -1.02%, #003ACE 83.53%)",
              }}
            ></div>

            {/* Main Image */}
            <div className="absolute top-0 left-[130px] w-[310px] h-[270px] z-10 rounded-[31px] overflow-hidden shadow-2xl border border-white/10">
              <Image 
                src="/images/hero/main.png" 
                alt="Modern Banking"
                width={310}
                height={270}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            
            {/* Right Image (Balance) */}
            <Image 
              src="/images/hero/balance.png" 
              alt="Balance Card" 
              width={250}
              height={230}
              className="absolute top-[0] left-[330px] w-[250px] h-[230px] z-20 object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-[12px]"
            />
            
            {/* Left Image (Activity) */}
            <Image 
              src="/images/hero/activity.png" 
              alt="Activity Card" 
              width={246}
              height={109}
              className="absolute bottom-[60px] left-[4px] w-[246px] h-[109px] z-30 object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-[11px]"
            />
            
          </div>
        </div>
      </Container>
      
      {/* Trusted By Section */}
      <TrustedBy />
    </section>
  );
}
