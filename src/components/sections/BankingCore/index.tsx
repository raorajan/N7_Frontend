import Image from "next/image";
import { CheckIcon } from "../../common/Icons/CheckIcon";

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

export function BankingCoreSection() {
  return (
    <section
      className="relative w-full max-w-[1440px] mx-auto bg-[#000D12] py-8 lg:py-0"
      style={{ minHeight: "681px" }}
    >
      <div className="relative w-full h-full lg:h-[681px] flex flex-col lg:block px-6 lg:px-0">
        <div className="relative z-10 w-full lg:static">
          {/* Desktop Image: core_half */}
          <div className="hidden lg:block absolute lg:top-[110px] lg:left-[-50px] lg:w-[651.66px] lg:h-[461.42px] z-10">
            <div className="relative w-full h-full">
              <Image
                src="/images/icons/core_half.png"
                alt="KYC Dashboard"
                fill
                className="object-contain object-left"
                sizes="652px"
                priority
              />
            </div>
          </div>

          {/* Mobile Images: Complete corebanking + trackpad notch */}
          <div className="relative w-full lg:hidden flex flex-col items-center justify-center mt-10 px-4 sm:px-8">
            <div className="relative w-[85%] border-t border-l border-r border-white/20 rounded-t-[10px] overflow-hidden flex bg-[#000D12]">
              <img 
                src="/images/icons/corebanking.png" 
                alt="KYC Dashboard Full" 
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

        <div className="relative z-10 w-full lg:static flex justify-center lg:block">
          <div className="relative lg:absolute lg:top-[168.68px] lg:left-[670px] w-full lg:w-[590px] h-auto lg:h-[300.40px] flex flex-col items-center lg:items-start text-center lg:text-left gap-6 lg:gap-[34px] px-6 lg:px-0 py-6 lg:py-0">
            <h2
              className="text-[#E9F4F9] text-[22px] sm:text-[25px] font-normal leading-[130%] tracking-[-0.5px] max-w-[520px]"
              style={{ fontFamily: "var(--font-archivo)" }}
            >
              Run a more efficient, flexible, and digitally connected corebanking system
            </h2>

            <div className="flex flex-col items-center lg:items-start gap-0">
              <p
                className="text-[#E9F4F9] text-[14px] font-semibold mb-2"
                style={{ fontFamily: "var(--font-archivo)" }}
              >
                What you will get:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 lg:gap-y-1 w-full text-left">
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
