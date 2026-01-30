import Header from './components/Header';
import EmailCapture from './components/EmailCapture';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFBEB]">
      <Header />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-[#FFFBEB]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-32 md:py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left Content */}
            <div className="relative z-10 animate-fadeInLeft opacity-0">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-[#2C2418] leading-tight animate-fadeInUp opacity-0 animate-delay-200">
                Nourishing meals for pregnancy & postpartum recovery
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-10 text-[#2C2418]/80 leading-relaxed animate-fadeInUp opacity-0 animate-delay-400">
                Chef-made meals designed to support healing, energy, and nourishment — so you can focus on yourself and your baby.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp opacity-0 animate-delay-600">
                <a
                  href="#join"
                  className="group inline-flex items-center gap-2 bg-[#dd7409] text-white px-8 py-4 rounded-full text-base md:text-lg font-semibold hover:bg-[#c66508] transition-all transform hover:scale-[1.02] hover:-translate-y-1 shadow-lg hover:shadow-2xl justify-center"
                >
                  <span>Join the Waitlist</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <Link
                  href="/how-it-works"
                  className="group inline-flex items-center gap-2 bg-white text-[#dd7409] px-8 py-4 rounded-full text-base md:text-lg font-semibold hover:bg-gray-50 transition-all border-2 border-[#dd7409]/20 shadow-md hover:shadow-lg justify-center"
                >
                  <span>How it works</span>
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative animate-fadeInRight opacity-0 animate-delay-300">
              <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#dd7409]/20">
                <Image
                  src="https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=2071&auto=format&fit=crop"
                  alt="Nourishing postpartum food - warm broth and vegetables"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#FCD34D]/30 rounded-full blur-3xl animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-[#dd7409]/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
            </div>

          </div>
        </div>

      </section>

      {/* Navigation Cards / Teasers */}
      <section className="section-padding bg-gradient-to-br from-[#FFFBEB] to-[#FEF3C7]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-2 border-[#FCD34D]/20 flex flex-col items-center text-center">
              <h3 className="text-2xl font-serif font-semibold mb-4 text-[#dd7409]">Why It Matters</h3>
              <p className="text-[#2C2418]/70 mb-6 flex-grow">
                Discover why postpartum nutrition is critical for your recovery and long-term health.
              </p>
              <Link href="/about" className="text-[#dd7409] font-medium hover:underline flex items-center gap-1">
                Our Story & Mission <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-2 border-[#FCD34D]/20 flex flex-col items-center text-center">
              <h3 className="text-2xl font-serif font-semibold mb-4 text-[#dd7409]">Our Recovery Packs</h3>
              <p className="text-[#2C2418]/70 mb-6 flex-grow">
                Explore our thoughtfully curated meal packs designed for every stage of recovery.
              </p>
              <Link href="/products" className="text-[#dd7409] font-medium hover:underline flex items-center gap-1">
                View the Menu <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-2 border-[#FCD34D]/20 flex flex-col items-center text-center">
              <h3 className="text-2xl font-serif font-semibold mb-4 text-[#dd7409]">See What Others Say</h3>
              <p className="text-[#2C2418]/70 mb-6 flex-grow">
                Read stories from mothers who have felt the difference of proper nourishment.
              </p>
              <Link href="/testimonials" className="text-[#dd7409] font-medium hover:underline flex items-center gap-1">
                Read Testimonials <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Email Capture - Main CTA */}
      <section id="join" className="section-padding bg-gradient-to-b from-[#dd7409] to-[#c66508] relative overflow-hidden py-24">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="max-w-5xl mx-auto relative z-10 px-4 md:px-6">
          <div className="text-center mb-12 animate-fadeInUp opacity-0">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-6 text-white">
              Join the Early Access List
            </h2>

            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Be the first to know when we launch in your area. Early subscribers receive priority access and founding-parent perks.
            </p>
          </div>

          <div className="max-w-3xl mx-auto animate-fadeInUp opacity-0 animate-delay-300">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
              <EmailCapture />
            </div>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-12 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No spam, ever</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span>Spring 2026 Launch</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 md:py-16 bg-[#2C2418] text-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden shadow-lg">
                <Image
                  src="/logo.jpg"
                  alt="Birth&Brodo Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-serif text-3xl md:text-4xl font-bold">Birth&Brodo</h3>
            </div>
            <p className="text-lg text-white/90 mb-6">made with care for mothers.</p>

            <div className="mb-6">
              <a href="mailto:hello@birthandbrodo.com" className="text-white/80 hover:text-white transition-colors">
                hello@birthandbrodo.com
              </a>
            </div>

            <div className="flex justify-center gap-6 mb-8">
              <a
                href="https://instagram.com/birthandbrodo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>

            <div className="border-t border-white/20 pt-6">
              <p className="text-sm text-white/70">
                © 2026 Birth&Brodo. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
