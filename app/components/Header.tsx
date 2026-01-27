'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      // Show sticky CTA after scrolling past hero section (approximately 800px)
      setShowStickyCTA(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); // Close menu after clicking
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#E89B3D] shadow-md ${
          isScrolled
            ? 'py-3'
            : 'py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo with Text */}
            <div className="flex items-center gap-4 cursor-pointer" onClick={() => scrollToSection('hero')}>
              <div className="relative w-16 h-16 flex-shrink-0">
                <Image
                  src="/WhatsApp_Image_2026-01-28_at_02.00.59__1_-removebg-preview.png"
                  alt="Birth & Brodo Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="font-serif text-2xl md:text-3xl font-bold text-white leading-tight">
                  Birth&Brodo
                </h1>
                <p className="text-xs md:text-sm text-white/90 font-medium tracking-wider uppercase">
                  Postpartum Nourishment
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              <button
                onClick={() => scrollToSection('about')}
                className="text-[#8B4513] hover:text-[#6B3410] text-lg font-medium transition-all duration-200 hover:scale-105 relative group"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8B4513] group-hover:w-full transition-all duration-300"></span>
              </button>
              <span className="text-[#8B4513] text-xl">|</span>
              <button
                onClick={() => scrollToSection('products')}
                className="text-[#8B4513] hover:text-[#6B3410] text-lg font-medium transition-all duration-200 hover:scale-105 relative group"
              >
                Our Kits
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8B4513] group-hover:w-full transition-all duration-300"></span>
              </button>
              <span className="text-[#8B4513] text-xl">|</span>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-[#8B4513] hover:text-[#6B3410] text-lg font-medium transition-all duration-200 hover:scale-105 relative group"
              >
                FAQ
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8B4513] group-hover:w-full transition-all duration-300"></span>
              </button>
              <a
                href="#join"
                className="ml-4 bg-[#8B4513] text-white px-8 py-3 rounded font-semibold hover:bg-[#6B3410] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Join Early Access
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 py-4 border-t border-white/20 animate-fadeInUp">
              <nav className="flex flex-col space-y-2">
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-left px-4 py-3 text-white hover:bg-white/10 rounded-lg font-medium transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('products')}
                  className="text-left px-4 py-3 text-white hover:bg-white/10 rounded-lg font-medium transition-colors"
                >
                  Our Kits
                </button>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="text-left px-4 py-3 text-white hover:bg-white/10 rounded-lg font-medium transition-colors"
                >
                  FAQ
                </button>
                <a
                  href="#join"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-center bg-[#8B4513] text-white px-6 py-3 rounded font-semibold hover:bg-[#6B3410] transition-all mt-2"
                >
                  Join Early Access
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Sticky Bottom CTA Bar - Shows after scrolling */}
      {showStickyCTA && (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-[#dd7409] to-[#c66508] shadow-2xl transform transition-transform duration-500 animate-slideInFromBottom">
          <div className="max-w-7xl mx-auto px-4 py-3 md:py-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-white text-center sm:text-left">
                <p className="font-semibold text-base md:text-lg">
                  ✨ Limited Early Access Spots Available
                </p>
                <p className="text-sm text-white/90 hidden md:block">
                  Join now for exclusive launch pricing and priority access
                </p>
              </div>
              <a
                href="#join"
                className="bg-white text-[#dd7409] px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all shadow-lg whitespace-nowrap text-sm md:text-base flex items-center gap-2"
              >
                <span>Reserve Your Spot</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
