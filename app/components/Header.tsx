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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gradient-to-r from-[#FFFBEB]/95 to-[#FEF3C7]/95 backdrop-blur-lg shadow-lg ${
          isScrolled
            ? 'py-4'
            : 'py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
              <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-md hover:scale-110 transition-transform duration-300">
                <Image
                  src="/logo.jpg"
                  alt="Birth & Brodo Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h1 className="font-serif text-xl font-semibold text-[#2C2418]">
                  Birth&Brodo
                </h1>
                <p className="text-xs text-[#2C2418]/70">Postpartum meal delivery</p>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('about')}
                className="text-[#4a3728] hover:text-[#1a1511] font-medium transition-colors relative group"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#dd7409] group-hover:w-full transition-all duration-300"></span>
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="text-[#4a3728] hover:text-[#1a1511] font-medium transition-colors relative group"
              >
                Products
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#dd7409] group-hover:w-full transition-all duration-300"></span>
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="text-[#4a3728] hover:text-[#1a1511] font-medium transition-colors relative group"
              >
                How It Works
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#dd7409] group-hover:w-full transition-all duration-300"></span>
              </button>
              <button
                onClick={() => scrollToSection('for-whom')}
                className="text-[#4a3728] hover:text-[#1a1511] font-medium transition-colors relative group"
              >
                For Whom
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#dd7409] group-hover:w-full transition-all duration-300"></span>
              </button>
              <a
                href="#join"
                className="bg-[#dd7409] text-white px-6 py-2.5 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 hover:bg-[#c66508]"
              >
                Join the Waitlist
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 hover:bg-[#FEF3C7] rounded-lg transition-colors" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6 text-[#4a3728]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-[#4a3728]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-[#8b6f47]/10 animate-fadeInUp">
              <nav className="flex flex-col space-y-2">
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-left px-4 py-3 text-[#4a3728] hover:bg-[#FEF3C7] rounded-lg font-medium transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('products')}
                  className="text-left px-4 py-3 text-[#4a3728] hover:bg-[#FEF3C7] rounded-lg font-medium transition-colors"
                >
                  Products
                </button>
                <button
                  onClick={() => scrollToSection('how-it-works')}
                  className="text-left px-4 py-3 text-[#4a3728] hover:bg-[#FEF3C7] rounded-lg font-medium transition-colors"
                >
                  How It Works
                </button>
                <button
                  onClick={() => scrollToSection('for-whom')}
                  className="text-left px-4 py-3 text-[#4a3728] hover:bg-[#FEF3C7] rounded-lg font-medium transition-colors"
                >
                  For Whom
                </button>
                <a
                  href="#join"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-center bg-[#dd7409] text-white px-6 py-3 rounded-full font-medium hover:bg-[#c66508] transition-all mt-2"
                >
                  Join the Waitlist
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
