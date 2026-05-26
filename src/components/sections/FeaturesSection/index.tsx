import Link from "next/link";
import Image from "next/image";

// ─── Data ────────────────────────────────────────────────────────────────────

const features = [
  {
    title: "Core Banking CB7",
    description:
      "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.",
    icon: "/images/icons/Group.png",
  },
  {
    title: "Digital Banking N7",
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.",
    icon: "/images/icons/Vector.png",
  },
  {
    title: "Open Banking",
    description:
      "Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.",
    icon: "/images/icons/Vector (1).png",
  },
  {
    title: "Loan Origination System",
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.",
    icon: "/images/icons/Vector (2).png",
  },
  {
    title: "Loan Management System",
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.",
    icon: "/images/icons/Vector (3).png",
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
      className="flex flex-col justify-between p-6 transition-all duration-300"
      style={{ width: "268.51px", height: "327px" }}
    >
      <div>
        <Image src={icon} alt={title} width={40} height={40} className="object-contain mb-5" />
        <h3
          className="text-[#E9F4F9] mb-5"
          style={{ fontFamily: "var(--font-archivo)", fontSize: "18px", fontWeight: 500, lineHeight: "130%" }}
        >
          {title}
        </h3>
        <p
          className="text-[#E9F4F9]"
          style={{ fontFamily: "var(--font-archivo)", fontSize: "13px", fontWeight: 400, lineHeight: "160%" }}
        >
          {description}
        </p>
      </div>
      <div
        className="relative inline-flex self-start text-[#00B4FD] text-xs tracking-widest uppercase font-medium pb-1 cursor-pointer after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-[#00B4FD] after:w-1/2 after:transition-all after:duration-300 hover:after:w-full"
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
      <div className="relative w-full h-full max-w-[1440px] mx-auto flex flex-col lg:block px-4 lg:px-0 gap-12">

        {/* Left Box */}
        <div className="contents lg:block">
          <div className="hidden lg:block absolute inset-0 -z-10" />
          <div className="lg:absolute lg:top-[47px] lg:left-[80px] w-full lg:w-[433px] h-auto lg:h-[185px] flex flex-col gap-[48px]">
            <h2
              className="text-[#E9F4F9] w-full lg:w-[433px] h-auto lg:h-[88px]"
              style={{
                fontFamily: "var(--font-archivo)",
                fontWeight: 400,
                fontSize: "30px",
                lineHeight: "120%",
                letterSpacing: "-1%",
              }}
            >
              All of our solutions are tailor-made to your needs,
            </h2>

            {/* Request Demo Button */}
            <Link
              href="#demo"
              className="inline-flex items-center justify-center uppercase text-white border border-white/20 hover:bg-[#F2F8FC] hover:text-[#0055FF] hover:border-[#F2F8FC] transition-colors whitespace-nowrap font-medium tracking-wider"
              style={{
                width: "226px",
                height: "49px",
                borderRadius: "10px",
                borderWidth: "1px",
                paddingTop: "15px",
                paddingRight: "59px",
                paddingBottom: "15px",
                paddingLeft: "59px",
                gap: "8px",
                fontFamily: "var(--font-chivo-mono)",
                fontSize: "12px",
              }}
            >
              Request Demo
            </Link>
          </div>
        </div>

        {/* Right Box — 5 Feature Cards in a 2-col grid */}
        <div className="lg:absolute lg:top-[47px] lg:right-[80px] w-full lg:w-[613px] h-auto lg:h-[1085px] flex flex-col gap-[76px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[26px]">
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
