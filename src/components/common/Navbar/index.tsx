"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";

import { Button } from "../Button";

export function Navbar() {
  return (
    <div className="fixed top-[31px] left-0 right-0 z-50 flex justify-center px-4 w-full">
      <header className="w-[620px] h-[40px] bg-[#2F2F2Fb2] backdrop-blur-md border border-white/10 rounded-[12px] px-[10px] py-[9px] flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-white tracking-wide">
          N7
        </Link>
        
        {/* Navigation Links */}
        <nav className="flex items-center space-x-3">
          <button className="flex items-center space-x-1 font-[family-name:var(--font-chivo-mono)] text-[12px] font-normal leading-[1.3] tracking-normal uppercase text-gray-300 hover:text-white transition-colors">
            <span>Solutions</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
          
          <button className="flex items-center space-x-1 font-[family-name:var(--font-chivo-mono)] text-[12px] font-normal leading-[1.3] tracking-normal uppercase text-gray-300 hover:text-white transition-colors">
            <span>Resources</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
          
          <Link href="#about" className="font-[family-name:var(--font-chivo-mono)] text-[12px] font-normal leading-[1.3] tracking-normal uppercase text-gray-300 hover:text-white transition-colors">
            About Us
          </Link>
        </nav>
        
        {/* CTA Button */}
        <div className="flex items-center">
          <Button href="#demo" className="w-[150px] h-[24px]" variant="outline-nav" size="nav">
            Request Demo
          </Button>
        </div>
        
      </header>
    </div>
  );
}
