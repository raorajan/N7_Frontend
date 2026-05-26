"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

import { Button } from "../Button";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed top-[31px] left-0 right-0 z-50 flex justify-center px-4 w-full">
      <header className="w-full max-w-[620px] bg-[#2F2F2Fb2] backdrop-blur-md border border-white/10 rounded-[12px] px-[10px] py-[9px] transition-all duration-300">
        
        <div className="flex items-center justify-between h-[20px]">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-white tracking-wide">
            N7
          </Link>
          
          {/* Navigation Links - Desktop */}
          <nav className="hidden md:flex items-center space-x-3">
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
          
          {/* CTA Button - Desktop */}
          <div className="hidden md:flex items-center">
            <Button href="#demo" className="w-[150px] h-[24px]" variant="outline-nav" size="nav">
              Request Demo
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden flex items-center text-white p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 mt-3 border-t border-white/10 flex flex-col gap-4">
            <button className="flex items-center justify-between font-[family-name:var(--font-chivo-mono)] text-[12px] font-normal uppercase text-gray-300 hover:text-white transition-colors">
              <span>Solutions</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex items-center justify-between font-[family-name:var(--font-chivo-mono)] text-[12px] font-normal uppercase text-gray-300 hover:text-white transition-colors">
              <span>Resources</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <Link href="#about" className="font-[family-name:var(--font-chivo-mono)] text-[12px] font-normal uppercase text-gray-300 hover:text-white transition-colors">
              About Us
            </Link>
            <Button href="#demo" className="w-full mt-2 h-[32px]" variant="outline-nav" size="nav">
              Request Demo
            </Button>
          </div>
        )}
        
      </header>
    </div>
  );
}
