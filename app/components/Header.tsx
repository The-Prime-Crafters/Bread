'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg py-4'
          : 'bg-transparent py-6'
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
              <h1 className="font-serif text-xl font-semibold text-[#1a1511]">
                Birth & Brodo
              </h1>
              <p className="text-xs text-[#4a3728]/70">Nourishment for the fourth trimester</p>
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
              Join Early Access
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" aria-label="Menu">
            <svg className="w-6 h-6 text-[#4a3728]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
