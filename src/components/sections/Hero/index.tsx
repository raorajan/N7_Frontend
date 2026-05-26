import Image from "next/image";
import { Container } from "../../common/Container";
import { Button } from "../../common/Button";
import { ArrowUpRight, Plus, Grid, ArrowRightLeft } from "lucide-react";
import { TrustedBy } from "../TrustedBy";

export function HeroSection() {
  return (
    <section className="pt-[212px] pb-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="w-[608px] h-[319px] flex flex-col gap-[20px] lg:-mt-20">
            <div>
              <h1 
                className="w-full md:w-[608px] md:h-[160px] font-medium text-[#E9F4F9] text-5xl md:text-[60px] leading-[1.2] tracking-[-0.01em] mb-3"
                style={{ fontFamily: 'var(--font-archivo)' }}
              >
                The new foundation <br className="hidden md:block" />
                of modern banking
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                We drive innovation and growth, provide seamless customer experience and operational excellence
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="default">
                Request Demo
              </Button>
              <Button variant="outline" size="default">
                Contact Us
              </Button>
            </div>
          </div>
          
          {/* Right Content - Visuals */}
          <div className="relative w-full max-w-[562px] h-[301px] mt-12 lg:mt-0 lg:ml-auto lg:mr-0 shrink-0">
            
            {/* Glow Circle behind main image */}
            <div className="absolute top-[50%] left-[calc(130px+155px)] -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full bg-blue-500/30 blur-[60px] z-[5] pointer-events-none"></div>

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
