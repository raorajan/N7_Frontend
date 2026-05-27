import { Navbar } from "@/components/common/Navbar";
import { HeroSection } from "@/components/sections/Hero";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { BankingCoreSection } from "@/components/sections/BankingCore";
import { PaperlessCTASection } from "@/components/sections/PaperlessCTA";
import { MarqueeBanner } from "@/components/sections/MarqueeBanner";
import { DigitalBankingSection } from "@/components/sections/DigitalBanking";
import { InsightsSection } from "@/components/sections/Insights";
import { CaseStudiesSection } from "@/components/sections/CaseStudies";
import { Footer } from "@/components/common/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <SolutionsSection />
      <BankingCoreSection />
      {/* <PaperlessCTASection /> */}
      {/* <MarqueeBanner /> */}
      {/* <DigitalBankingSection /> */}
      {/* <InsightsSection /> */}
      {/* <CaseStudiesSection /> */}
      {/* <PaperlessCTASection /> */}
      {/* <Footer /> */}
    </>
  );
}
