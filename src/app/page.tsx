import { Navbar } from "@/components/common/Navbar";
import { HeroSection } from "@/components/sections/Hero";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      {/* 
        Other sections will go here once they are built:
        <SolutionsSection />
        <BankingCoreSection />
        ...
      */}
    </>
  );
}
