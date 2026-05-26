import { Navbar } from "@/components/common/Navbar";
import { HeroSection } from "@/components/sections/Hero";
import { FeaturesSection } from "@/components/sections/FeaturesSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      {/* 
        Other sections will go here once they are built:
        <SolutionsSection />
        <BankingCoreSection />
        ...
      */}
    </>
  );
}
