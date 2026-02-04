'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
            : 'bg-transparent py-4'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo with Text */}
            <Link href="/" className="flex items-center gap-3 cursor-pointer">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src="/logo3.jpeg"
                  alt="Birth & Brodo Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <h1 className={`font-serif text-xl md:text-2xl font-bold leading-tight transition-colors ${isScrolled ? 'text-[#2C2418]' : 'text-white'
                  }`}>
                  Birth&Brodo
                </h1>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link
                href="/how-it-works"
                className={`text-base font-medium transition-all duration-200 hover:scale-105 relative group ${isScrolled ? 'text-[#2C2418] hover:text-[#F4B942]' : 'text-white hover:text-[#F4B942]'
                  }`}
              >
                How It Works
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F4B942] group-hover:w-full transition-all duration-300"></span>
              </Link>

              <Link
                href="/products"
                className={`text-base font-medium transition-all duration-200 hover:scale-105 relative group ${isScrolled ? 'text-[#2C2418] hover:text-[#F4B942]' : 'text-white hover:text-[#F4B942]'
                  }`}
              >
                Our Meals
              </Link>

              <Link
                href="/about"
                className={`text-base font-medium transition-all duration-200 hover:scale-105 relative group ${isScrolled ? 'text-[#2C2418] hover:text-[#F4B942]' : 'text-white hover:text-[#F4B942]'
                  }`}
              >
                About
              </Link>

              <Link
                href="/faq"
                className={`text-base font-medium transition-all duration-200 hover:scale-105 relative group ${isScrolled ? 'text-[#2C2418] hover:text-[#F4B942]' : 'text-white hover:text-[#F4B942]'
                  }`}
              >
                FAQ
              </Link>

              <a
                href="/#join"
                className="ml-4 bg-[#F4B942] text-[#2C2418] px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#E5AA32] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Join Waitlist
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <svg className={`w-7 h-7 ${isScrolled ? 'text-[#2C2418]' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className={`w-7 h-7 ${isScrolled ? 'text-[#2C2418]' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 py-4 border-t border-white/20 animate-fadeInUp bg-white/95 backdrop-blur-md rounded-lg">
              <nav className="flex flex-col space-y-2">
                <Link
                  href="/how-it-works"
                  className="text-left px-4 py-3 text-[#2C2418] hover:bg-[#F4B942]/10 rounded-lg font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  How It Works
                </Link>
                <Link
                  href="/products"
                  className="text-left px-4 py-3 text-[#2C2418] hover:bg-[#F4B942]/10 rounded-lg font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Our Meals
                </Link>
                <Link
                  href="/about"
                  className="text-left px-4 py-3 text-[#2C2418] hover:bg-[#F4B942]/10 rounded-lg font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/faq"
                  className="text-left px-4 py-3 text-[#2C2418] hover:bg-[#F4B942]/10 rounded-lg font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  FAQ
                </Link>
                <a
                  href="/#join"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-center bg-[#F4B942] text-[#2C2418] px-6 py-3 rounded-full font-semibold hover:bg-[#E5AA32] transition-all mt-2 mx-4"
                >
                  Join Waitlist
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
