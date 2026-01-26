import Header from './components/Header';
import EmailCapture from './components/EmailCapture';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFBEB]">
      <Header />
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FFFBEB]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
        <Image
            src="https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=2071&auto=format&fit=crop"
            alt="Nourishing postpartum food - warm broth and vegetables"
            fill
            className="object-cover animate-scaleIn"
          priority
        />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FFFBEB]/85 via-[#FFFBEB]/80 to-[#FEF3C7]/85"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center px-4 md:px-6 py-32 md:py-40">
          <div className="inline-block mb-8 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-[#dd7409]/20 shadow-sm animate-slideInFromTop opacity-0">
            <p className="text-sm font-medium text-[#2C2418]">Postpartum meal delivery</p>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 md:mb-8 text-[#2C2418] leading-tight animate-fadeInUp opacity-0 animate-delay-200 max-w-5xl mx-auto">
            Heal Faster.<br className="hidden sm:block" /> Nourish Deeper.
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl mb-10 md:mb-12 text-[#2C2418]/80 max-w-3xl mx-auto leading-relaxed animate-fadeInUp opacity-0 animate-delay-400 px-4">
            Postpartum meals designed to support recovery during the fourth trimester.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp opacity-0 animate-delay-600">
            <a
              href="#join"
              className="group inline-flex items-center gap-2 bg-[#dd7409] text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-base md:text-lg font-semibold hover:bg-[#c66508] transition-all transform hover:scale-[1.02] hover:-translate-y-1 shadow-lg hover:shadow-2xl w-full sm:w-auto justify-center"
            >
              <span>Get Early Access</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#how-it-works"
              className="group inline-flex items-center gap-2 bg-white text-[#dd7409] px-8 md:px-10 py-4 md:py-5 rounded-full text-base md:text-lg font-semibold hover:bg-[#FEF3C7] transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-xl w-full sm:w-auto justify-center border-2 border-[#dd7409]"
            >
              <span>See How It Works</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
          <p className="mt-6 text-sm text-[#2C2418]/60 flex items-center justify-center gap-2 animate-fadeIn opacity-0 animate-delay-800">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            Launching Spring 2026
          </p>
        </div>

        {/* Scroll indicator */}
        <a 
          href="#about"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-fadeIn opacity-0 animate-delay-700 cursor-pointer"
          aria-label="Scroll to content"
        >
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-[#2C2418]/40 hover:text-[#dd7409] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </a>
      </section>

      {/* The Problem Section with Image */}
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

      {/* Comparison Section - NEW */}
      <section id="comparison" className="section-padding bg-gradient-to-br from-[#FFFBEB] to-[#FEF3C7] overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16 animate-fadeInUp opacity-0">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-4 text-[#dd7409]">
              Not just another meal service
            </h2>
            <p className="text-lg text-[#2C2418]/70 max-w-2xl mx-auto">
              Birth&Brodo is specifically designed for postpartum recovery — not general meal delivery.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-[#dd7409]/20 animate-fadeInUp opacity-0 animate-delay-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-[#dd7409] to-[#fcbe11]">
                  <tr>
                    <th className="px-6 py-5 text-left text-white font-serif text-xl">Feature</th>
                    <th className="px-6 py-5 text-center text-white font-serif text-xl">Birth&Brodo</th>
                    <th className="px-6 py-5 text-center text-white/80 font-serif text-xl">Traditional Meal Services</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#FEF3C7]">
                  <tr className="hover:bg-[#FEF3C7]/30 transition-colors">
                    <td className="px-6 py-5 font-medium text-[#2C2418]">Designed for Postpartum Recovery</td>
                    <td className="px-6 py-5 text-center">
                      <div className="flex justify-center">
                        <div className="w-8 h-8 rounded-full bg-[#dd7409] flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-center">
                      <div className="flex justify-center">
                        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                          <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-[#FEF3C7]/30 transition-colors">
                    <td className="px-6 py-5 font-medium text-[#2C2418]">Nutrient-Dense Healing Foods</td>
                    <td className="px-6 py-5 text-center">
                      <div className="flex justify-center">
                        <div className="w-8 h-8 rounded-full bg-[#dd7409] flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-center text-[#2C2418]/60 font-medium">Limited</td>
                  </tr>
                  <tr className="hover:bg-[#FEF3C7]/30 transition-colors">
                    <td className="px-6 py-5 font-medium text-[#2C2418]">One-Handed, Easy-to-Eat Meals</td>
                    <td className="px-6 py-5 text-center">
                      <div className="flex justify-center">
                        <div className="w-8 h-8 rounded-full bg-[#dd7409] flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-center">
                      <div className="flex justify-center">
                        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                          <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-[#FEF3C7]/30 transition-colors">
                    <td className="px-6 py-5 font-medium text-[#2C2418]">Focus on Fourth Trimester Needs</td>
                    <td className="px-6 py-5 text-center">
                      <div className="flex justify-center">
                        <div className="w-8 h-8 rounded-full bg-[#dd7409] flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-center">
                      <div className="flex justify-center">
                        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                          <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-[#FEF3C7]/30 transition-colors">
                    <td className="px-6 py-5 font-medium text-[#2C2418]">Curated Recovery Packs</td>
                    <td className="px-6 py-5 text-center">
                      <div className="flex justify-center">
                        <div className="w-8 h-8 rounded-full bg-[#dd7409] flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-center">
                      <div className="flex justify-center">
                        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                          <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
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

      {/* What Makes This Different */}
      <section className="section-padding bg-gradient-to-b from-[#FFFBEB] via-[#FEF3C7] to-[#FFFBEB] overflow-hidden">
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

      {/* Product Showcase */}
      <section id="products" className="section-padding bg-gradient-to-br from-[#FEF3C7] to-[#FCD34D]/20 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp opacity-0">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-4 text-[#dd7409]">
              Thoughtfully curated recovery packs
            </h2>
            <p className="text-lg text-[#2C2418]/70 max-w-2xl mx-auto">
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

      {/* How It Works */}
      <section id="how-it-works" className="section-padding bg-gradient-to-br from-[#FFFBEB] to-[#FEF3C7] overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-16 text-center text-[#dd7409] animate-fadeInUp opacity-0">
            How it works
          </h2>

          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-8 items-center bg-gradient-to-r from-white to-[#FEF3C7]/40 rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 animate-fadeInLeft opacity-0 animate-delay-200 hover:-translate-x-2 border-2 border-[#FCD34D]/30">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#dd7409] to-[#fcbe11] text-white flex items-center justify-center text-2xl font-bold shadow-lg animate-pulse-glow">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-serif font-semibold mb-2 text-[#dd7409]">
                  Choose a recovery pack
                </h3>
                <p className="text-lg text-[#2C2418]/70 leading-relaxed">
                  Select from our curated meal packages designed for your specific postpartum needs and recovery timeline.
                </p>
              </div>
              <div className="relative w-48 h-32 rounded-xl overflow-hidden shadow-lg border-2 border-[#FCD34D]/50">
                <Image
                  src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop"
                  alt="Mother choosing meal options"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center bg-gradient-to-r from-white to-[#FEF3C7]/40 rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 animate-fadeInRight opacity-0 animate-delay-400 hover:translate-x-2 border-2 border-[#FCD34D]/30">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#dd7409] to-[#fcbe11] text-white flex items-center justify-center text-2xl font-bold shadow-lg animate-pulse-glow">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-serif font-semibold mb-2 text-[#dd7409]">
                  We prepare and deliver
                </h3>
                <p className="text-lg text-[#2C2418]/70 leading-relaxed">
                  Fresh, warming meals prepared with care and delivered right to your door at the perfect time.
                </p>
              </div>
              <div className="relative w-48 h-32 rounded-xl overflow-hidden shadow-lg border-2 border-[#FCD34D]/50">
                <Image
                  src="https://images.unsplash.com/photo-1621972750749-0fbb1abb7736?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZCUyMGRlbGl2ZXJ5fGVufDB8fDB8fHww"
                  alt="Delivery to your door"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center bg-gradient-to-r from-white to-[#FEF3C7]/40 rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 animate-fadeInLeft opacity-0 animate-delay-600 hover:-translate-x-2 border-2 border-[#FCD34D]/30">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#dd7409] to-[#fcbe11] text-white flex items-center justify-center text-2xl font-bold shadow-lg animate-pulse-glow">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-serif font-semibold mb-2 text-[#dd7409]">
                  You focus on healing
                </h3>
                <p className="text-lg text-[#2C2418]/70 leading-relaxed">
                  No planning. No cooking. No decisions. Just nourishment when you need it most.
                </p>
              </div>
              <div className="relative w-48 h-32 rounded-xl overflow-hidden shadow-lg border-2 border-[#FCD34D]/50">
                <Image
                  src="https://images.unsplash.com/photo-1686668108595-3c2171a8fc78?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Mother bonding with baby"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* CTA after "How It Works" */}
          <div className="text-center mt-16 animate-fadeInUp opacity-0 animate-delay-800">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border-2 border-[#dd7409]/20 max-w-2xl mx-auto">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#dd7409] to-[#fcbe11] flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-4 text-[#dd7409]">
                Ready to prioritize your recovery?
              </h3>
              <p className="text-lg text-[#2C2418]/70 mb-6">
                Join hundreds of mothers preparing for their postpartum journey
              </p>
              <a
                href="#join"
                className="inline-flex items-center gap-2 bg-[#dd7409] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#c66508] transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span>Join the Waitlist</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <p className="mt-4 text-sm text-[#2C2418]/60">
                ⚡ Early access members get exclusive launch pricing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section id="for-whom" className="section-padding bg-gradient-to-br from-[#FEF3C7] to-[#FCD34D]/30 overflow-hidden">
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

      {/* Credibility + Founder Story Section */}
      <section className="section-padding bg-gradient-to-br from-[#FFFBEB] to-[#FEF3C7] overflow-hidden">
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

      {/* FAQ Section - NEW */}
      <section id="faq" className="section-padding bg-gradient-to-br from-[#FEF3C7] via-[#FFFBEB] to-[#FEF3C7] overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16 animate-fadeInUp opacity-0">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-4 text-[#dd7409]">
              Your questions answered
            </h2>
            <p className="text-lg text-[#2C2418]/70 max-w-2xl mx-auto">
              Everything you need to know about postpartum meal delivery
            </p>
          </div>

          <div className="space-y-6">
            {/* FAQ Item 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#FCD34D]/30 animate-fadeInUp opacity-0 animate-delay-100">
              <h3 className="text-xl font-serif font-semibold mb-3 text-[#dd7409] flex items-start gap-3">
                <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                <span>When should I order Birth&Brodo meals?</span>
              </h3>
              <p className="text-[#2C2418]/80 leading-relaxed ml-9">
                We recommend ordering 2-3 weeks before your due date to ensure meals arrive when you need them most. However, you can order at any point during your postpartum journey. Many second-time parents order in advance, knowing how critical proper nutrition is for recovery.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#FCD34D]/30 animate-fadeInUp opacity-0 animate-delay-200">
              <h3 className="text-xl font-serif font-semibold mb-3 text-[#dd7409] flex items-start gap-3">
                <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                <span>What makes postpartum nutrition different?</span>
              </h3>
              <p className="text-[#2C2418]/80 leading-relaxed ml-9">
                Postpartum bodies need specific nutrients to support healing, energy restoration, and recovery. Our meals are designed with warming, easy-to-digest ingredients that promote replenishment — not just general health. We focus on nutrient density, ease of eating (one-handed when needed), and foods traditionally known to support postpartum recovery.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#FCD34D]/30 animate-fadeInUp opacity-0 animate-delay-300">
              <h3 className="text-xl font-serif font-semibold mb-3 text-[#dd7409] flex items-start gap-3">
                <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                <span>How are the meals prepared and delivered?</span>
              </h3>
              <p className="text-[#2C2418]/80 leading-relaxed ml-9">
                All meals are freshly prepared using high-quality ingredients and delivered directly to your door. They're designed to be ready-to-eat with minimal reheating. No meal prep, no planning, no decisions — just nourishment when you need it most.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#FCD34D]/30 animate-fadeInUp opacity-0 animate-delay-400">
              <h3 className="text-xl font-serif font-semibold mb-3 text-[#dd7409] flex items-start gap-3">
                <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                <span>Can I gift Birth&Brodo to someone else?</span>
              </h3>
              <p className="text-[#2C2418]/80 leading-relaxed ml-9">
                Absolutely! Birth&Brodo makes a meaningful gift for new mothers, expectant parents, or anyone supporting postpartum recovery. Many partners, family members, and friends choose to gift meal packs as a thoughtful way to provide real, lasting support during the fourth trimester.
              </p>
            </div>

            {/* FAQ Item 5 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#FCD34D]/30 animate-fadeInUp opacity-0 animate-delay-500">
              <h3 className="text-xl font-serif font-semibold mb-3 text-[#dd7409] flex items-start gap-3">
                <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                <span>What if I have dietary restrictions or allergies?</span>
              </h3>
              <p className="text-[#2C2418]/80 leading-relaxed ml-9">
                We're building Birth&Brodo to accommodate various dietary needs. During our early access phase, we'll be collecting information about dietary restrictions and preferences to ensure our meal options work for you. Our goal is to support every mother's recovery journey, regardless of dietary requirements.
              </p>
            </div>

            {/* FAQ Item 6 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#FCD34D]/30 animate-fadeInUp opacity-0 animate-delay-600">
              <h3 className="text-xl font-serif font-semibold mb-3 text-[#dd7409] flex items-start gap-3">
                <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                <span>What's included in early access?</span>
              </h3>
              <p className="text-[#2C2418]/80 leading-relaxed ml-9">
                Early access members will receive launch updates, exclusive pricing, and priority access when we launch in Spring 2026. You'll also have the opportunity to provide feedback that shapes how Birth&Brodo serves the postpartum community. Limited spots available.
              </p>
            </div>
          </div>

          {/* CTA after FAQ */}
          <div className="text-center mt-16 animate-fadeInUp opacity-0 animate-delay-700">
            <p className="text-lg text-[#2C2418]/70 mb-6">Still have questions?</p>
            <a
              href="#join"
              className="inline-flex items-center gap-2 bg-[#dd7409] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#c66508] transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>Join Early Access & Learn More</span>
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
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-12 animate-fadeInUp opacity-0">
            <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <p className="text-white/90 font-medium">Limited Early Access</p>
            </div>
            <h2 className="text-5xl md:text-6xl font-serif font-semibold mb-6 text-white">
              Be the first to know when we launch
            </h2>
            
            <p className="text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Join the early access list for launch updates, limited availability, and founding-member pricing.
            </p>
          </div>

          <div className="max-w-3xl mx-auto animate-fadeInUp opacity-0 animate-delay-300">
            <div className="bg-white rounded-3xl p-12 shadow-2xl">
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
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              <span>Limited founding members</span>
            </div>
          </div>
        </div>
      </section>

      {/* Soft Close */}
      <section className="py-20 bg-gradient-to-br from-[#FEF3C7] to-[#FCD34D]/40">
        <div className="max-w-4xl mx-auto text-center px-6 animate-fadeIn opacity-0">
          <div className="bg-white rounded-3xl p-12 shadow-xl border-2 border-[#dd7409]/20">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#dd7409] to-[#fcbe11] flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-serif font-semibold mb-4 text-[#dd7409]">
              Launching Spring 2026
            </h3>
            <p className="text-lg text-[#2C2418]/80 leading-relaxed mb-2">
              We're currently capturing early interest and preparing for a thoughtful launch.
            </p>
            <p className="text-[#2C2418]/60">
              No spam. No pressure. Just updates on our progress.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 md:py-16 bg-[#dd7409] text-white">
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
            <p className="text-lg md:text-xl text-white/90 mb-6 md:mb-8 font-medium">Postpartum meal delivery</p>
            
            <div className="border-t border-white/20 pt-6 md:pt-8">
              <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-white/80">
                <span>© 2026 Birth&Brodo</span>
                <span>•</span>
                <span>Spring 2026 Launch</span>
                <span className="hidden sm:inline">•</span>
                <span className="hidden sm:inline">Postpartum Recovery Meals</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
