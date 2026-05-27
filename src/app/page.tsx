import { Navbar } from "@/components/common/Navbar";
import { HeroSection } from "@/components/sections/Hero";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { BankingCoreSection } from "@/components/sections/BankingCore";
import { PaperlessCTASection } from "@/components/sections/PaperlessCTA";
import { MarqueeBanner } from "@/components/sections/MarqueeBanner";
import { DigitalBankingSection } from "@/components/sections/DigitalBanking";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <SolutionsSection />
      <BankingCoreSection />
      <PaperlessCTASection />
      <MarqueeBanner />
      <DigitalBankingSection />
      {/* Other sections will go here once they are built */}
    </>
  );
}

