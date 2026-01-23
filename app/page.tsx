import Header from './components/Header';
import EmailCapture from './components/EmailCapture';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fffbf5]">
      <Header />
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
        <Image
            src="https://images.unsplash.com/photo-1503431760783-91f2569f6802?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Peaceful mother in postpartum recovery"
            fill
            className="object-cover animate-scaleIn"
          priority
        />
          <div className="absolute inset-0 bg-gradient-to-b from-[#fffbf5]/70 via-[#fffbf5]/60 to-[#fef9ed]/75"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center px-6 py-32">
          <div className="inline-block mb-6 px-6 py-2 bg-[#fcbe11]/10 backdrop-blur-sm rounded-full border border-[#fcbe11]/20 animate-slideInFromTop opacity-0">
            <p className="text-sm font-medium text-[#4a3728]">Nourishment for the fourth trimester</p>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-serif font-semibold mb-8 text-[#1a1511] leading-tight animate-fadeInUp opacity-0 animate-delay-200">
            Postpartum recovery,<br />handled.
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-[#4a3728]/90 max-w-3xl mx-auto leading-relaxed animate-fadeInUp opacity-0 animate-delay-400">
            Birth & Brodo delivers recovery-focused meals designed for the earliest days postpartum — so healing can be the priority.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp opacity-0 animate-delay-600">
            <a
              href="#join"
              className="group inline-flex items-center gap-2 bg-[#dd7409] text-white px-10 py-5 rounded-full text-lg font-medium hover:bg-[#c66508] transition-all transform hover:scale-[1.05] hover:-translate-y-1 shadow-lg hover:shadow-2xl"
            >
              <span>Join the Early Access List</span>
              <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
          <p className="mt-6 text-sm text-[#4a3728]/60 flex items-center justify-center gap-2 animate-fadeIn opacity-0 animate-delay-800">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            Launching Spring 2026 • Limited early access
          </p>
        </div>

        {/* Scroll indicator */}
        <a 
          href="#about"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-fadeIn opacity-0 animate-delay-700 cursor-pointer"
          aria-label="Scroll to content"
        >
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-[#4a3728]/40 hover:text-[#dd7409] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </a>
      </section>

      {/* The Problem Section with Image */}
      <section id="about" className="section-padding bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl animate-fadeInLeft opacity-0">
              <Image
                src="https://images.unsplash.com/photo-1566004100631-35d015d6a491?q=80&w=2070&auto=format&fit=crop"
                alt="Mother resting with newborn baby"
                fill
                className="object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
            
            <div className="animate-fadeInRight opacity-0 animate-delay-300">
              <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-6 text-[#1a1511]">
                The days after birth are physically demanding.
              </h2>
              
              <div className="space-y-6 text-lg text-[#4a3728]/80 leading-relaxed">
                <p className="animate-fadeInUp opacity-0 animate-delay-400">
                  Food still needs to happen — even when sleep is fragmented, recovery is ongoing, and decisions feel heavy.
                </p>
                <p className="font-medium text-[#4a3728] text-xl animate-fadeInUp opacity-0 animate-delay-500">
                  Most meal delivery services aren't designed for postpartum healing.
                </p>
                <p className="text-3xl font-serif text-[#1a1511] pt-4 animate-fadeInUp opacity-0 animate-delay-600">
                  Birth & Brodo is.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes This Different */}
      <section className="section-padding bg-gradient-to-b from-[#fef9ed] to-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp opacity-0">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-4 text-[#1a1511]">
              Designed for recovery — not trends.
            </h2>
            <p className="text-lg text-[#4a3728]/70 max-w-2xl mx-auto">
              Every meal is intentionally crafted to support your body's healing journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-[#fcbe11]/10 animate-fadeInUp opacity-0 animate-delay-200 hover:-translate-y-2 group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#fcbe11]/20 to-[#fdbf14]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-[#fdbf14]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-3 text-[#1a1511] text-center">
                Recovery-Focused
              </h3>
              <p className="text-[#4a3728]/70 leading-relaxed text-center">
                Meals designed to support energy, warmth, and restoration during your healing journey.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-[#fcbe11]/10 animate-fadeInUp opacity-0 animate-delay-400 hover:-translate-y-2 group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#fcbe11]/20 to-[#fdbf14]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-[#fdbf14]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-3 text-[#1a1511] text-center">
                Purpose-Built
              </h3>
              <p className="text-[#4a3728]/70 leading-relaxed text-center">
                Created specifically for the postpartum window — not general wellness or fleeting trends.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-[#fcbe11]/10 animate-fadeInUp opacity-0 animate-delay-600 hover:-translate-y-2 group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#fcbe11]/20 to-[#fdbf14]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-[#fdbf14]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-3 text-[#1a1511] text-center">
                Handled
              </h3>
              <p className="text-[#4a3728]/70 leading-relaxed text-center">
                Delivered ready to eat, so nourishment requires zero effort when you need it most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section id="products" className="section-padding bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp opacity-0">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-4 text-[#1a1511]">
              Thoughtfully curated recovery packs
            </h2>
            <p className="text-lg text-[#4a3728]/70 max-w-2xl mx-auto">
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
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="section-padding bg-[#fef9ed] overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-16 text-center text-[#1a1511] animate-fadeInUp opacity-0">
            How it works
          </h2>

          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-8 items-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 animate-fadeInLeft opacity-0 animate-delay-200 hover:-translate-x-2">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#dd7409] to-[#c66508] text-white flex items-center justify-center text-2xl font-bold shadow-lg animate-pulse-glow">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-serif font-semibold mb-2 text-[#1a1511]">
                  Choose a recovery pack
                </h3>
                <p className="text-lg text-[#4a3728]/70 leading-relaxed">
                  Select from our curated meal packages designed for your specific postpartum needs and recovery timeline.
                </p>
              </div>
              <div className="relative w-48 h-32 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop"
                  alt="Mother choosing meal options"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 animate-fadeInRight opacity-0 animate-delay-400 hover:translate-x-2">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#dd7409] to-[#c66508] text-white flex items-center justify-center text-2xl font-bold shadow-lg animate-pulse-glow">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-serif font-semibold mb-2 text-[#1a1511]">
                  We prepare and deliver
                </h3>
                <p className="text-lg text-[#4a3728]/70 leading-relaxed">
                  Fresh, warming meals prepared with care and delivered right to your door at the perfect time.
                </p>
              </div>
              <div className="relative w-48 h-32 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1621972750749-0fbb1abb7736?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZCUyMGRlbGl2ZXJ5fGVufDB8fDB8fHww"
                  alt="Delivery to your door"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 animate-fadeInLeft opacity-0 animate-delay-600 hover:-translate-x-2">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#dd7409] to-[#c66508] text-white flex items-center justify-center text-2xl font-bold shadow-lg animate-pulse-glow">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-serif font-semibold mb-2 text-[#1a1511]">
                  You focus on healing
                </h3>
                <p className="text-lg text-[#4a3728]/70 leading-relaxed">
                  No planning. No cooking. No decisions. Just nourishment when you need it most.
                </p>
              </div>
              <div className="relative w-48 h-32 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1686668108595-3c2171a8fc78?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Mother bonding with baby"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section id="for-whom" className="section-padding bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-4 text-center text-[#1a1511] animate-fadeInUp opacity-0">
            Who Birth & Brodo is for
          </h2>
          <p className="text-lg text-[#4a3728]/70 text-center mb-16 max-w-2xl mx-auto animate-fadeInUp opacity-0 animate-delay-200">
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

      {/* Credibility */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-[#fef9ed] to-[#fff8e7] rounded-3xl p-16 shadow-xl border-2 border-[#dd7409]/10 animate-scaleIn opacity-0 hover:shadow-2xl transition-all duration-500">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-white shadow-lg flex items-center justify-center animate-float">
                <svg className="w-12 h-12 text-[#dd7409]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-5xl md:text-6xl font-serif font-semibold mb-8 text-[#1a1511]">
                Thoughtfully designed
              </h2>
              
              <p className="text-2xl text-[#4a3728] leading-relaxed mb-6 font-medium">
                Birth & Brodo is being built by people with experience in postpartum care, nutrition, and food operations.
              </p>
              
              <p className="text-xl text-[#4a3728]/70 leading-relaxed">
                We're starting small — intentionally — to get this right.
              </p>
            </div>
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
      <section className="py-20 bg-[#fef9ed]">
        <div className="max-w-4xl mx-auto text-center px-6 animate-fadeIn opacity-0">
          <div className="bg-white rounded-3xl p-12 shadow-lg border border-[#dd7409]/10">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#dd7409]/10 flex items-center justify-center">
              <svg className="w-8 h-8 text-[#dd7409]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-serif font-semibold mb-4 text-[#1a1511]">
              Launching Spring 2026
            </h3>
            <p className="text-lg text-[#4a3728]/80 leading-relaxed mb-2">
              We're currently capturing early interest and preparing for a thoughtful launch.
            </p>
            <p className="text-[#4a3728]/60">
              No spam. No pressure. Just updates on our progress.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-[#dd7409] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden shadow-lg">
                <Image
                  src="/WhatsApp Image 2026-01-21 at 13.00.01.jpeg"
                  alt="Birth & Brodo Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-serif text-4xl font-semibold">Birth & Brodo</h3>
            </div>
            <p className="text-xl text-white/90 mb-8 font-medium">Nourishment for the fourth trimester</p>
            
            <div className="border-t border-white/20 pt-8">
              <div className="flex flex-wrap justify-center gap-6 text-sm text-white/80">
                <span>© 2026 Birth & Brodo</span>
                <span>•</span>
                <span>Spring 2026 Launch</span>
                <span>•</span>
                <span>Postpartum Recovery Meals</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
