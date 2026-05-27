import Image from "next/image";
import { Container } from "../../common/Container";
import { Button } from "../../common/Button";
import { TrustedBy } from "../TrustedBy";

export function HeroSection() {
  return (
    <section className="pt-[100px] lg:pt-[212px] pb-4 lg:pb-0 relative overflow-hidden max-w-[1440px] mx-auto lg:h-[650px]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">

          <div className="w-full max-w-[608px] flex flex-col gap-[20px] lg:-mt-20 mx-auto text-center lg:text-left items-center lg:items-start">
            <div>
              <h1
                className="w-full md:max-w-[608px] md:h-[160px] font-medium text-[#E9F4F9] text-4xl sm:text-5xl lg:text-[60px] leading-[1.2] tracking-[-0.01em] mb-4 lg:mb-3 mx-auto lg:mx-0"
                style={{ fontFamily: "var(--font-archivo)" }}
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

          {/* Responsive Image Composite */}
          <div className="relative w-full max-w-[500px] mx-auto lg:ml-auto lg:mr-0" style={{ aspectRatio: "580 / 320" }}>

            {/* Glow */}
            <div
              className="absolute rounded-full pointer-events-none blur-[80px] lg:blur-[100px]"
              style={{
                width: "51%",
                height: "93%",
                top: "3%",
                left: "25%",
                opacity: 0.5,
                background: "linear-gradient(103.43deg, #00B4FD -1.02%, #003ACE 83.53%)",
                zIndex: 5,
              }}
            />

            {/* Main Card */}
            <div
              className="absolute z-10 rounded-[5%] overflow-hidden shadow-2xl border border-white/10"
              style={{ left: "22.5%", top: "0%", width: "53.5%", height: "84.5%" }}
            >
              <Image
                src="/images/hero/main.png"
                alt="Modern Banking"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Balance Card */}
            <Image
              src="/images/hero/balance.png"
              alt="Balance Card"
              fill={false}
              width={250}
              height={230}
              className="absolute z-20 object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-[4%]"
              style={{ left: "57%", top: "0%", width: "43%", height: "72%" }}
            />

            {/* Activity Card */}
            <Image
              src="/images/hero/activity.png"
              alt="Activity Card"
              fill={false}
              width={246}
              height={109}
              className="absolute z-30 object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-[3%]"
              style={{ left: "0.7%", bottom: "18.5%", width: "42.5%", height: "34%" }}
            />
          </div>

        </div>
      </Container>

      <TrustedBy />
    </section>
  );
}
