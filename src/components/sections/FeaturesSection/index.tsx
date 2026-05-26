import Link from "next/link";
import Image from "next/image";

// ─── Data ────────────────────────────────────────────────────────────────────

const features = [
  {
    title: "Core Banking CB7",
    description:
      "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.",
    icon: "/images/icons/core-banking.png",
  },
  {
    title: "Digital Banking N7",
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.",
    icon: "/images/icons/digital-banking.png",
  },
  {
    title: "Open Banking",
    description:
      "Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.",
    icon: "/images/icons/open-banking.png",
  },
  {
    title: "Loan Origination System",
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.",
    icon: "/images/icons/loan-origination.png",
  },
  {
    title: "Loan Management System",
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.",
    icon: "/images/icons/loan-management.png",
  },
];

// ─── Reusable FeatureCard ─────────────────────────────────────────────────────

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div
      className="flex flex-col justify-between p-6 transition-all duration-300 w-full h-auto min-h-[327px] mx-auto"
      style={{ maxWidth: "268.51px" }}
    >
      <div>
        <Image src={icon} alt={title} width={40} height={40} className="object-contain mb-5" />
        <h3
          className="text-[#E9F4F9] mb-5 text-[18px] font-medium leading-[130%]"
          style={{ fontFamily: "var(--font-archivo)" }}
        >
          {title}
        </h3>
        <p
          className="text-[#E9F4F9] text-[13px] font-normal leading-[160%]"
          style={{ fontFamily: "var(--font-archivo)" }}
        >
          {description}
        </p>
      </div>
      <div
        className="relative inline-flex self-start text-[#00B4FD] text-xs tracking-widest uppercase font-medium pb-1 cursor-pointer after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-[#00B4FD] after:w-1/2 after:transition-all after:duration-300 hover:after:w-full mt-6"
        style={{ fontFamily: "var(--font-chivo-mono)" }}
      >
        Learn more →
      </div>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function FeaturesSection() {
  return (
    <section className="relative w-full max-w-[1440px] mx-auto bg-[#000D12] lg:h-[1177px] py-16 lg:py-0 overflow-hidden">
      <div className="relative w-full h-full max-w-[1440px] mx-auto flex flex-col lg:block px-6 lg:px-0 gap-12 lg:gap-0">
        
        {/* Glowing Ellipse */}
        <div 
          className="absolute rounded-full pointer-events-none hidden lg:block"
          style={{
            width: "556.77px",
            height: "556.77px",
            opacity: 0.1,
            top: "447.5px",
            left: "968.64px",
            background: "linear-gradient(103.43deg, #00B4FD -1.02%, #003ACE 83.53%)",
            filter: "blur(200px)",
            zIndex: 0,
          }}
        />

        {/* Left Box */}
        <div className="contents lg:block">
          <div className="hidden lg:block absolute inset-0 -z-10" />
          <div className="lg:absolute lg:top-[47px] lg:left-[80px] w-full lg:w-[433px] h-auto lg:h-[185px] flex flex-col gap-6 lg:gap-[48px] items-center lg:items-start text-center lg:text-left pt-8 lg:pt-0">
            <h2
              className="text-[#E9F4F9] w-full max-w-[433px] text-[24px] lg:text-[30px] font-normal leading-[120%] tracking-[-1%]"
              style={{ fontFamily: "var(--font-archivo)" }}
            >
              All of our solutions are <br /> tailor-made to your needs,
            </h2>

            {/* Request Demo Button */}
            <Link
              href="#demo"
              className="inline-flex items-center justify-center uppercase text-white border border-white/20 hover:bg-[#F2F8FC] hover:text-[#0055FF] hover:border-[#F2F8FC] transition-colors whitespace-nowrap font-medium tracking-wider w-full sm:w-[226px] h-[49px] rounded-[10px]"
              style={{
                fontFamily: "var(--font-chivo-mono)",
                fontSize: "12px",
              }}
            >
              Request Demo
            </Link>
          </div>
        </div>

        {/* Right Box — 5 Feature Cards in a 2-col grid */}
        <div className="lg:absolute lg:top-[47px] lg:right-[80px] w-full lg:w-[613px] h-auto lg:h-[1085px] flex flex-col gap-[76px] mt-8 lg:mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-[26px]">
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
