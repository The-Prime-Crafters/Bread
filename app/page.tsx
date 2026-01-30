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

      {/* The Problem Section */}
      <section id="about" className="section-padding bg-gradient-to-br from-[#FEF3C7] to-[#FFFBEB] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl animate-fadeInLeft opacity-0 border-4 border-[#FCD34D]/30">
              <Image
                src="https://images.unsplash.com/photo-1566004100631-35d015d6a491?q=80&w=2070&auto=format&fit=crop"
                alt="Mother resting with newborn baby"
                fill
                className="object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>

            <div className="animate-fadeInRight opacity-0 animate-delay-300 px-4 md:px-0">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 text-[#dd7409] leading-tight">
                The postpartum period is physically demanding
              </h2>

              <div className="space-y-4 md:space-y-6 text-base md:text-lg text-[#2C2418]/80 leading-relaxed">
                <p className="animate-fadeInUp opacity-0 animate-delay-400">
                  Healing takes time. Sleep is broken. Decisions feel overwhelming. Yet proper nutrition remains essential for recovery.
                </p>
                <p className="font-semibold text-[#2C2418] text-lg md:text-xl animate-fadeInUp opacity-0 animate-delay-500">
                  Most meal services aren't designed for postpartum recovery.
                </p>
                <p className="text-2xl md:text-3xl font-serif text-[#dd7409] pt-2 md:pt-4 animate-fadeInUp opacity-0 animate-delay-600 font-bold">
                  Birth&Brodo is.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="section-padding bg-gradient-to-br from-[#FFFBEB] to-[#FEF3C7] overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-20 animate-fadeInUp opacity-0">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-4 text-[#dd7409]">
                Why we built this
              </h2>
              <p className="text-lg text-[#2C2418]/70 max-w-2xl mx-auto">
                A mission born from real experience
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#dd7409]/20 animate-fadeInLeft opacity-0 animate-delay-200">
                <Image
                  src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=2128&auto=format&fit=crop"
                  alt="Mother and baby - the inspiration behind Birth&Brodo"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Story */}
              <div className="space-y-6 text-lg text-[#2C2418]/80 leading-relaxed animate-fadeInRight opacity-0 animate-delay-300">
                <p>
                  <span className="text-2xl font-serif text-[#dd7409] font-semibold block mb-3">
                    We know what the postpartum period demands.
                  </span>
                  The fourth trimester is a time of profound transformation — physically, emotionally, and mentally. Yet most support systems fall short when it comes to the simple, essential need for nourishing food.
                </p>

                <p>
                  Birth&Brodo was created by people who understand postpartum recovery firsthand. We have experienced the sleepless nights, the overwhelming decisions, and the critical importance of proper nutrition during healing.
                </p>

                <p>
                  We saw a gap between what new mothers need and what is available. Traditional meal services aren't designed for the unique demands of postpartum recovery. So we decided to build something different — something purpose-built, caring, and truly supportive.
                </p>

                <p className="font-semibold text-[#dd7409] text-xl pt-4">
                  Birth&Brodo isn't just a business. It's our way of supporting you through one of life's most demanding journeys.
                </p>
              </div>
            </div>
          </div>

          {/* Thoughtfully Designed Badge */}
          <div className="bg-gradient-to-br from-[#FCD34D]/40 to-[#fcbe11]/20 rounded-3xl p-8 md:p-16 shadow-xl border-4 border-[#dd7409]/20 animate-scaleIn opacity-0 hover:shadow-2xl transition-all duration-500">
            <div className="text-center">
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 md:mb-8 rounded-full bg-gradient-to-br from-[#dd7409] to-[#fcbe11] shadow-lg flex items-center justify-center animate-float">
                <svg className="w-10 h-10 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-4xl font-serif font-bold text-[#dd7409] mb-4 md:mb-6">
                Thoughtfully designed, lovingly prepared.
              </h3>
              <p className="text-lg md:text-xl text-[#2C2418]/80 max-w-3xl mx-auto leading-relaxed">
                Because you shouldn't have to worry about what's for dinner when you're busy bringing new life into the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Cards / Teasers */}
      <section className="section-padding bg-gradient-to-br from-[#FFFBEB] to-[#FEF3C7]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-2 border-[#FCD34D]/20 flex flex-col items-center text-center">
              <h3 className="text-2xl font-serif font-semibold mb-4 text-[#dd7409]">Our Recovery Packs</h3>
              <p className="text-[#2C2418]/70 mb-6 flex-grow">
                Explore our thoughtfully curated meal packs designed for every stage of recovery.
              </p>
              <Link href="/products" className="text-[#dd7409] font-medium hover:underline flex items-center gap-1">
                View the Menu <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>

            {/* Card 2 */}
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

      {/* FAQ Section */}
      <section id="faq" className="section-padding bg-gradient-to-br from-[#FEF3C7] via-[#FFFBEB] to-[#FEF3C7] overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16 animate-fadeInUp opacity-0">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-4 text-[#dd7409]">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[#2C2418]/70 max-w-2xl mx-auto">
              Everything you need to know
            </p>
          </div>

          <div className="space-y-6">
            {/* FAQ Item 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#FCD34D]/30 animate-fadeInUp opacity-0 animate-delay-100">
              <h3 className="text-xl font-serif font-semibold mb-3 text-[#dd7409] flex items-start gap-3">
                <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                <span>When do you deliver?</span>
              </h3>
              <p className="text-[#2C2418]/80 leading-relaxed ml-9">
                We plan weekly deliveries based on location.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#FCD34D]/30 animate-fadeInUp opacity-0 animate-delay-200">
              <h3 className="text-xl font-serif font-semibold mb-3 text-[#dd7409] flex items-start gap-3">
                <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                <span>Is this for pregnancy or postpartum?</span>
              </h3>
              <p className="text-[#2C2418]/80 leading-relaxed ml-9">
                Both — meals are designed to support nourishment during pregnancy and recovery after birth.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#FCD34D]/30 animate-fadeInUp opacity-0 animate-delay-300">
              <h3 className="text-xl font-serif font-semibold mb-3 text-[#dd7409] flex items-start gap-3">
                <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                <span>Are meals fresh or frozen?</span>
              </h3>
              <p className="text-[#2C2418]/80 leading-relaxed ml-9">
                Meals are prepared fresh and packaged for convenience.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#FCD34D]/30 animate-fadeInUp opacity-0 animate-delay-400">
              <h3 className="text-xl font-serif font-semibold mb-3 text-[#dd7409] flex items-start gap-3">
                <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                <span>Can someone order this as a gift?</span>
              </h3>
              <p className="text-[#2C2418]/80 leading-relaxed ml-9">
                Yes — Birth & Brodo makes a meaningful gift for new parents.
              </p>
            </div>

            {/* FAQ Item 5 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#FCD34D]/30 animate-fadeInUp opacity-0 animate-delay-500">
              <h3 className="text-xl font-serif font-semibold mb-3 text-[#dd7409] flex items-start gap-3">
                <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                <span>Where will you launch first?</span>
              </h3>
              <p className="text-[#2C2418]/80 leading-relaxed ml-9">
                Launch locations will be announced to our waitlist first.
              </p>
            </div>
          </div>

          <div className="text-center mt-16 animate-fadeInUp opacity-0 animate-delay-600">
            <a
              href="#join"
              className="inline-flex items-center gap-2 bg-[#dd7409] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#c66508] transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>Join the Waitlist</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
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
