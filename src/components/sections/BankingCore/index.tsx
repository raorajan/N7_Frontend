import Image from "next/image";

const leftFeatures = [
  "Customer-On Boarding",
  "Managing deposits and withdrawals",
  "Transaction management",
  "Interest Calculation",
  "Payments processing (cash, cheques, mandates, NEFT, RTGS etc)",
];

const rightFeatures = [
  "CRM Activities",
  "Configuring New Banking Products",
  "Loan disbursal and Loan management",
  "Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.",
];

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0 mt-0.5"
    >
      <circle cx="10" cy="10" r="10" fill="#0066FF" />
      <path
        d="M5.5 10.5L8.5 13.5L14.5 7.5"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BankingCoreSection() {
  return (
    <section
      className="relative w-full max-w-[1440px] mx-auto bg-[#000D12] py-16 lg:py-0"
      style={{ minHeight: "681px" }}
    >
      <div className="relative w-full h-full lg:h-[681px] flex flex-col lg:block px-6 lg:px-0">

        {/* Left: Dashboard Image */}
        <div className="relative z-10 w-full lg:static">
          <div
            className="relative lg:absolute lg:top-[110px] lg:left-[-159px] w-full lg:w-[651.66px] h-[320px] lg:h-[461.42px] mt-8 lg:mt-0"
          >
            <Image
              src="/images/icons/corebanking.png"
              alt="KYC Dashboard"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 652px"
              priority
            />
          </div>
        </div>

        {/* Right: Content */}
        <div className="relative z-10 w-full lg:static flex justify-center lg:block">
          <div
            className="relative lg:absolute lg:top-[168.68px] lg:left-[670px] w-full lg:w-[590px] h-auto lg:h-[300.40px] flex flex-col gap-6 lg:gap-[34px] px-6 lg:px-0 py-12 lg:py-0"
          >
            {/* Heading */}
            <h2
              className="text-[#E9F4F9] text-[22px] sm:text-[25px] font-normal leading-[130%] tracking-[-0.5px] max-w-[520px]"
              style={{ fontFamily: "var(--font-archivo)" }}
            >
            Run a more efficient, flexible, and digitally connected corebanking system
          </h2>

          {/* Subheading + Feature grid — grouped so parent gap:34px doesn't split them */}
          <div className="flex flex-col gap-0">

            {/* Subheading */}
            <p
              className="text-[#E9F4F9] text-[14px] font-semibold mb-2"
              style={{ fontFamily: "var(--font-archivo)" }}
            >
              What you will get:
            </p>

            {/* Feature grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-1">
              {/* Left column */}
              <ul className="flex flex-col gap-[14px]">
                {leftFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckIcon />
                    <span
                      className="text-[#8BA3B8] text-[12px] leading-[160%]"
                      style={{ fontFamily: "var(--font-archivo)" }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Right column */}
              <ul className="flex flex-col gap-[14px]">
                {rightFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckIcon />
                    <span
                      className="text-[#8BA3B8] text-[12px] leading-[160%]"
                      style={{ fontFamily: "var(--font-archivo)" }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
        </div>

      </div>
    </section>
  );
}
