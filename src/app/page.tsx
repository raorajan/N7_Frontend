import { Navbar } from "@/components/common/Navbar";
import { HeroSection } from "@/components/sections/Hero";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <SolutionsSection />
      {/* 
        Other sections will go here once they are built:
        <BankingCoreSection />
        ...
      */}
    </>
  );
}
