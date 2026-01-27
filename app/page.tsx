import Header from './components/Header';
import EmailCapture from './components/EmailCapture';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFBEB]">
      <Header />
      
      {/* Hero Section - LIGHT 1 */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-[#FFF8E7]">
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
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-[#dd7409]/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
            </div>

          </div>
        </div>

      </section>

      {/* Why Birth & Brodo Section - LIGHT 2 */}
      <section id="why" className="section-padding bg-gradient-to-br from-[#FEF3C7] to-[#FCD34D]/20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-16 text-center text-[#dd7409] animate-fadeInUp opacity-0">
            Why Birth & Brodo
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div className="bg-gradient-to-br from-white to-[#FEF3C7]/30 rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 border-2 border-[#FCD34D]/30 animate-fadeInUp opacity-0 animate-delay-200 hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#dd7409] to-[#fcbe11] flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-3 text-[#dd7409] text-center">
                Designed for Mothers
              </h3>
              <p className="text-[#2C2418]/70 leading-relaxed text-center">
                Meals created specifically for pregnancy and postpartum — not generic meal prep.
              </p>
            </div>

            {/* Column 2 */}
            <div className="bg-gradient-to-br from-white to-[#FEF3C7]/30 rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 border-2 border-[#FCD34D]/30 animate-fadeInUp opacity-0 animate-delay-400 hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#dd7409] to-[#fcbe11] flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-3 text-[#dd7409] text-center">
                Healing Ingredients
              </h3>
              <p className="text-[#2C2418]/70 leading-relaxed text-center">
                Warming foods, mineral-rich broths, and easy-to-digest meals inspired by traditional postpartum care.
              </p>
            </div>

            {/* Column 3 */}
            <div className="bg-gradient-to-br from-white to-[#FEF3C7]/30 rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 border-2 border-[#FCD34D]/30 animate-fadeInUp opacity-0 animate-delay-600 hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#dd7409] to-[#fcbe11] flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-3 text-[#dd7409] text-center">
                Delivered With Care
              </h3>
              <p className="text-[#2C2418]/70 leading-relaxed text-center">
                No planning, no grocery shopping, no stress. Just heat, eat, and rest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section with Image - DARK 1 */}
      <section id="about" className="section-padding bg-gradient-to-br from-[#8B6F47] to-[#6B5538] overflow-hidden">
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 text-[#FCD34D] leading-tight">
                The postpartum period is physically demanding
              </h2>
              
              <div className="space-y-4 md:space-y-6 text-base md:text-lg text-white/90 leading-relaxed">
                <p className="animate-fadeInUp opacity-0 animate-delay-400">
                  Healing takes time. Sleep is broken. Decisions feel overwhelming. Yet proper nutrition remains essential for recovery.
                </p>
                <p className="font-semibold text-white text-lg md:text-xl animate-fadeInUp opacity-0 animate-delay-500">
                  Most meal services aren't designed for postpartum recovery.
                </p>
                <p className="text-2xl md:text-3xl font-serif text-[#FCD34D] pt-2 md:pt-4 animate-fadeInUp opacity-0 animate-delay-600 font-bold">
                  Birth&Brodo is.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section - LIGHT 1 */}
      <section id="comparison" className="section-padding bg-gradient-to-br from-[#FFF8E7] to-[#FFFBEB] overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16 animate-fadeInUp opacity-0">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-4 text-[#dd7409]">
              Not just another meal service
            </h2>
            <p className="text-lg text-[#2C2418]/70 max-w-2xl mx-auto">
              Birth&Brodo is specifically designed for postpartum recovery — not general meal delivery.
            </p>
          </div>

          {/* Mobile-Friendly Comparison Cards */}
          <div className="space-y-4 animate-fadeInUp opacity-0 animate-delay-200">
            {/* Comparison Item 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-[#dd7409]/20 hover:shadow-xl transition-all">
              <h3 className="font-semibold text-[#2C2418] mb-4 text-lg">Designed for Postpartum Recovery</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-[#dd7409]/5 rounded-xl">
                  <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-[#dd7409] flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm font-semibold text-[#dd7409]">Birth&Brodo</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-gray-300 flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-gray-600">Others</p>
                </div>
              </div>
            </div>

            {/* Comparison Item 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-[#dd7409]/20 hover:shadow-xl transition-all">
              <h3 className="font-semibold text-[#2C2418] mb-4 text-lg">Nutrient-Dense Healing Foods</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-[#dd7409]/5 rounded-xl">
                  <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-[#dd7409] flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm font-semibold text-[#dd7409]">Birth&Brodo</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-gray-300 flex items-center justify-center">
                    <p className="text-sm font-medium text-gray-600">Limited</p>
                  </div>
                  <p className="text-sm font-medium text-gray-600">Others</p>
                </div>
              </div>
            </div>

            {/* Comparison Item 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-[#dd7409]/20 hover:shadow-xl transition-all">
              <h3 className="font-semibold text-[#2C2418] mb-4 text-lg">One-Handed, Easy-to-Eat Meals</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-[#dd7409]/5 rounded-xl">
                  <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-[#dd7409] flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm font-semibold text-[#dd7409]">Birth&Brodo</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-gray-300 flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-gray-600">Others</p>
                </div>
              </div>
            </div>

            {/* Comparison Item 4 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-[#dd7409]/20 hover:shadow-xl transition-all">
              <h3 className="font-semibold text-[#2C2418] mb-4 text-lg">Focus on Fourth Trimester Needs</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-[#dd7409]/5 rounded-xl">
                  <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-[#dd7409] flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm font-semibold text-[#dd7409]">Birth&Brodo</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-gray-300 flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-gray-600">Others</p>
                </div>
              </div>
            </div>

            {/* Comparison Item 5 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-[#dd7409]/20 hover:shadow-xl transition-all">
              <h3 className="font-semibold text-[#2C2418] mb-4 text-lg">Curated Recovery Packs</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-[#dd7409]/5 rounded-xl">
                  <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-[#dd7409] flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm font-semibold text-[#dd7409]">Birth&Brodo</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-gray-300 flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-gray-600">Others</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA below comparison */}
          <div className="text-center mt-12 animate-fadeInUp opacity-0 animate-delay-400">
            <a
              href="#join"
              className="inline-flex items-center gap-2 bg-[#dd7409] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#c66508] transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>Reserve Your Spot</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* What Makes This Different - LIGHT 2 */}
      <section className="section-padding bg-gradient-to-br from-[#FEF3C7] to-[#FCD34D]/20 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp opacity-0">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-4 text-[#dd7409]">
              Designed for recovery — not trends.
            </h2>
            <p className="text-lg text-[#2C2418]/70 max-w-2xl mx-auto">
              Every meal is intentionally crafted to support your body's healing journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-white to-[#FEF3C7]/30 rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 border-2 border-[#FCD34D]/30 animate-fadeInUp opacity-0 animate-delay-200 hover:-translate-y-2 group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#dd7409] to-[#fcbe11] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-3 text-[#dd7409] text-center">
                Recovery-Focused
              </h3>
              <p className="text-[#2C2418]/70 leading-relaxed text-center">
                Meals designed to support energy, warmth, and restoration during your healing journey.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-[#FEF3C7]/30 rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 border-2 border-[#FCD34D]/30 animate-fadeInUp opacity-0 animate-delay-400 hover:-translate-y-2 group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#dd7409] to-[#fcbe11] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-3 text-[#dd7409] text-center">
                Purpose-Built
              </h3>
              <p className="text-[#2C2418]/70 leading-relaxed text-center">
                Created specifically for the postpartum window — not general wellness or fleeting trends.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-[#FEF3C7]/30 rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 border-2 border-[#FCD34D]/30 animate-fadeInUp opacity-0 animate-delay-600 hover:-translate-y-2 group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#dd7409] to-[#fcbe11] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-3 text-[#dd7409] text-center">
                Handled
              </h3>
              <p className="text-lg text-[#2C2418]/80 leading-relaxed">
                Delivered ready to eat, so nourishment requires zero effort when you need it most.
              </p>
            </div>
          </div>

          {/* CTA after pillars */}
          <div className="text-center mt-16 animate-fadeInUp opacity-0 animate-delay-700">
            <div className="inline-block mb-4 px-4 py-2 bg-[#dd7409]/10 rounded-full">
              <p className="text-sm font-semibold text-[#dd7409]">⏰ Limited Early Access • Spring 2026 Launch</p>
            </div>
            <a
              href="#join"
              className="inline-flex items-center gap-2 bg-[#dd7409] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#c66508] transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>Get Notified at Launch</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Product Showcase - DARK 2 */}
      <section id="products" className="section-padding bg-gradient-to-br from-[#8B6F47] to-[#6B5538] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp opacity-0">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-4 text-[#FCD34D]">
              Thoughtfully curated recovery packs
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Each pack is designed for specific postpartum needs, from the first week to C-section recovery.
          </p>
        </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Product 1 */}
            <div className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-fadeInUp opacity-0 animate-delay-200">
              <div className="relative h-80">
                <Image
                  src="https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=2071&auto=format&fit=crop"
                  alt="The First 7 Days Pack - Nourishing soup"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1511]/80 via-[#1a1511]/40 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform group-hover:translate-y-[-8px] transition-transform duration-300">
                <h3 className="text-3xl font-serif font-semibold mb-2">The First 7 Days</h3>
                <p className="text-white/90">Warming meals for the earliest postpartum days</p>
              </div>
            </div>

            {/* Product 2 */}
            <div className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-fadeInUp opacity-0 animate-delay-300">
              <div className="relative h-80">
                <Image
                  src="https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?q=80&w=2064&auto=format&fit=crop"
                  alt="C-Section Recovery Pack - Healing broth"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1511]/80 via-[#1a1511]/40 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform group-hover:translate-y-[-8px] transition-transform duration-300">
                <h3 className="text-3xl font-serif font-semibold mb-2">C-Section Recovery Pack</h3>
                <p className="text-white/90">Gentle, healing nutrition for surgical recovery</p>
              </div>
            </div>

            {/* Product 3 */}
            <div className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-fadeInUp opacity-0 animate-delay-400">
              <div className="relative h-80">
                <Image
                  src="https://images.unsplash.com/photo-1653543362907-b9e87d2be5db?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Night Feed Support - Easy meals"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1511]/80 via-[#1a1511]/40 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform group-hover:translate-y-[-8px] transition-transform duration-300">
                <h3 className="text-3xl font-serif font-semibold mb-2">Night Feed Support</h3>
                <p className="text-white/90">Easy one-handed meals for those late nights</p>
              </div>
            </div>

            {/* Product 4 */}
            <div className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-fadeInUp opacity-0 animate-delay-500">
              <div className="relative h-80">
                <Image
                  src="https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=2084&auto=format&fit=crop"
                  alt="Warmth & Restore Broths"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1511]/80 via-[#1a1511]/40 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform group-hover:translate-y-[-8px] transition-transform duration-300">
                <h3 className="text-3xl font-serif font-semibold mb-2">Warmth & Restore Broths</h3>
                <p className="text-white/90">Nourishing bone broths for deep replenishment</p>
              </div>
            </div>
          </div>

          {/* CTA after product showcase */}
          <div className="text-center mt-16 animate-fadeInUp opacity-0 animate-delay-600">
            <div className="bg-gradient-to-r from-[#FCD34D]/30 to-[#fcbe11]/20 rounded-2xl p-8 max-w-3xl mx-auto border-2 border-[#dd7409]/30">
              <p className="text-lg font-semibold text-[#2C2418] mb-4">
                🎁 Perfect for gifting or self-care
              </p>
              <p className="text-[#2C2418]/70 mb-6">
                Join our early access list to be the first to order when we launch
              </p>
              <a
                href="#join"
                className="inline-flex items-center gap-2 bg-[#dd7409] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#c66508] transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span>View Sample Meal Packs</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - LIGHT 1 */}
      <section id="how-it-works" className="section-padding bg-gradient-to-br from-[#FFF8E7] to-[#FFFBEB] overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-16 text-center text-[#dd7409] animate-fadeInUp opacity-0">
            How It Works
          </h2>

          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-8 items-start bg-gradient-to-r from-white to-[#FEF3C7]/40 rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 animate-fadeInLeft opacity-0 animate-delay-200 border-2 border-[#FCD34D]/30">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#dd7409] to-[#fcbe11] text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-serif font-semibold mb-2 text-[#dd7409]">
                  Join the Waitlist
                </h3>
                <p className="text-lg text-[#2C2418]/70 leading-relaxed">
                  Tell us your due date and location.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start bg-gradient-to-r from-white to-[#FEF3C7]/40 rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 animate-fadeInRight opacity-0 animate-delay-400 border-2 border-[#FCD34D]/30">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#dd7409] to-[#fcbe11] text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-serif font-semibold mb-2 text-[#dd7409]">
                  We Prepare & Deliver
                </h3>
                <p className="text-lg text-[#2C2418]/70 leading-relaxed">
                  Fresh meals are prepared weekly and delivered to your door.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start bg-gradient-to-r from-white to-[#FEF3C7]/40 rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 animate-fadeInLeft opacity-0 animate-delay-600 border-2 border-[#FCD34D]/30">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#dd7409] to-[#fcbe11] text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-serif font-semibold mb-2 text-[#dd7409]">
                  You Rest & Recover
                </h3>
                <p className="text-lg text-[#2C2418]/70 leading-relaxed">
                  Heat, eat, and focus on healing and your baby.
                </p>
              </div>
            </div>
          </div>

          {/* CTA after "How It Works" */}
          <div className="text-center mt-16 animate-fadeInUp opacity-0 animate-delay-800">
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

      {/* Who It's For Section - LIGHT 2 */}
      <section id="for-whom" className="section-padding bg-gradient-to-br from-[#FEF3C7] to-[#FCD34D]/20 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-4 text-center text-[#dd7409] animate-fadeInUp opacity-0">
            Who It's For
          </h2>
          <p className="text-lg text-[#2C2418]/70 text-center mb-12 max-w-2xl mx-auto animate-fadeInUp opacity-0 animate-delay-200">
            Supporting you through every stage of your journey
          </p>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border-2 border-[#dd7409]/20 animate-fadeInUp opacity-0 animate-delay-300">
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#dd7409] to-[#fcbe11] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-lg text-[#2C2418] group-hover:text-[#dd7409] transition-colors">Expecting mothers</span>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#dd7409] to-[#fcbe11] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-lg text-[#2C2418] group-hover:text-[#dd7409] transition-colors">Postpartum mothers</span>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#dd7409] to-[#fcbe11] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-lg text-[#2C2418] group-hover:text-[#dd7409] transition-colors">Families supporting a new mom</span>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#dd7409] to-[#fcbe11] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-lg text-[#2C2418] group-hover:text-[#dd7409] transition-colors">Anyone gifting nourishment</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Social Proof Section - DARK 3 */}
      <section id="testimonials" className="section-padding bg-gradient-to-br from-[#8B6F47] to-[#6B5538] overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-16 text-center text-[#FCD34D] animate-fadeInUp opacity-0">
            What People Are Saying
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-[#FCD34D]/30 hover:shadow-xl transition-all duration-300 animate-fadeInUp opacity-0 animate-delay-200">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#fcbe11]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-lg text-[#2C2418] leading-relaxed mb-4 italic">
                "This is exactly what I wish I had after giving birth."
              </p>
              <p className="text-sm text-[#2C2418]/60 font-medium">
                — Expecting Mother
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-[#FCD34D]/30 hover:shadow-xl transition-all duration-300 animate-fadeInUp opacity-0 animate-delay-400">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#fcbe11]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-lg text-[#2C2418] leading-relaxed mb-4 italic">
                "Postpartum nutrition like this can make a real difference in recovery."
              </p>
              <p className="text-sm text-[#2C2418]/60 font-medium">
                — Postpartum Care Professional
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For Cards - LIGHT 1 */}
      <section id="for-whom-cards" className="section-padding bg-gradient-to-br from-[#FFF8E7] to-[#FFFBEB] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-4 text-center text-[#dd7409] animate-fadeInUp opacity-0">
            Who Birth&Brodo is for
          </h2>
          <p className="text-lg text-[#2C2418]/70 text-center mb-16 max-w-2xl mx-auto animate-fadeInUp opacity-0 animate-delay-200">
            Supporting you through every stage of your postpartum journey
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1: New mothers */}
            <div className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-fadeInUp opacity-0 animate-delay-300">
              <div className="relative h-80">
                <Image
                  src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=2128&auto=format&fit=crop"
                  alt="Expecting mother preparing for postpartum"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1511]/90 via-[#1a1511]/50 to-transparent"></div>
                
                {/* Checkmark badge */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[#dd7409] flex items-center justify-center shadow-lg animate-scaleIn">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform group-hover:translate-y-[-8px] transition-transform duration-300">
                <h3 className="text-2xl font-serif font-semibold mb-2">New mothers preparing for postpartum</h3>
                <p className="text-white/90 text-sm">Planning ahead for your recovery journey</p>
              </div>
            </div>

            {/* Card 2: Partners */}
            <div className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-fadeInUp opacity-0 animate-delay-400">
              <div className="relative h-80">
                <Image
                  src="https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?q=80&w=2067&auto=format&fit=crop"
                  alt="Partner supporting new mother"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1511]/90 via-[#1a1511]/50 to-transparent"></div>
                
                {/* Checkmark badge */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[#dd7409] flex items-center justify-center shadow-lg animate-scaleIn">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform group-hover:translate-y-[-8px] transition-transform duration-300">
                <h3 className="text-2xl font-serif font-semibold mb-2">Partners looking for a meaningful gift</h3>
                <p className="text-white/90 text-sm">Show your care when it matters most</p>
              </div>
            </div>

            {/* Card 3: Friends and family */}
            <div className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-fadeInUp opacity-0 animate-delay-500">
              <div className="relative h-80">
                <Image
                  src="https://images.unsplash.com/photo-1609220136736-443140cffec6?q=80&w=2070&auto=format&fit=crop"
                  alt="Family supporting new mother"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1511]/90 via-[#1a1511]/50 to-transparent"></div>
                
                {/* Checkmark badge */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[#dd7409] flex items-center justify-center shadow-lg animate-scaleIn">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform group-hover:translate-y-[-8px] transition-transform duration-300">
                <h3 className="text-2xl font-serif font-semibold mb-2">Friends and family supporting recovery</h3>
                <p className="text-white/90 text-sm">The perfect way to help during the fourth trimester</p>
              </div>
            </div>

            {/* Card 4: Second-time parents */}
            <div className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-fadeInUp opacity-0 animate-delay-600">
              <div className="relative h-80">
            <Image
                  src="https://images.unsplash.com/photo-1476703993599-0035a21b17a9?q=80&w=2070&auto=format&fit=crop"
                  alt="Experienced mother with multiple children"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1511]/90 via-[#1a1511]/50 to-transparent"></div>
                
                {/* Checkmark badge */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[#dd7409] flex items-center justify-center shadow-lg animate-scaleIn">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform group-hover:translate-y-[-8px] transition-transform duration-300">
                <h3 className="text-2xl font-serif font-semibold mb-2">Second-time parents who know how hard the early days are</h3>
                <p className="text-white/90 text-sm">You deserve support this time around</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility + Founder Story Section - LIGHT 2 */}
      <section className="section-padding bg-gradient-to-br from-[#FEF3C7] to-[#FCD34D]/20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          {/* Why We Built This - Founder Story */}
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
              <h3 className="text-2xl md:text-4xl font-serif font-semibold mb-6 text-[#dd7409] leading-tight">
                Built by experts who care
              </h3>
              
              <p className="text-lg md:text-xl text-[#2C2418] leading-relaxed mb-4 font-medium px-2">
                Birth&Brodo is being built by people with experience in postpartum care, nutrition, and food operations.
              </p>
              
              <p className="text-base md:text-lg text-[#2C2418]/70 leading-relaxed px-2">
                We're starting small — intentionally — to get this right. Every detail matters when you're supporting recovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - DARK 4 */}
      <section id="faq" className="section-padding bg-gradient-to-br from-[#8B6F47] to-[#6B5538] overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16 animate-fadeInUp opacity-0">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-4 text-[#FCD34D]">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
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

          {/* CTA after FAQ */}
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
      <section id="join" className="section-padding bg-gradient-to-b from-[#dd7409] to-[#c66508] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
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

      {/* Soft Close - REMOVED per plan instructions */}

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
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
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
