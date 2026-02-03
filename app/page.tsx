import Header from './components/Header';
import EmailCapture from './components/EmailCapture';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5EFE7]">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1560707854-fb9a10eeaace?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Mother with baby"
            fill
            className="object-cover brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20"></div>
          <div className="absolute inset-0 bg-[#F4B942]/15"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
          {/* Logo */}
          <div className="mb-8">
            <div className="inline-block">
              <div className="relative w-16 h-16 mx-auto mb-4">
                <Image
                  src="/WhatsApp_Image_2026-01-28_at_02.00.59__1_-removebg-preview.png"
                  alt="Birth & Brodo Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-white/90 text-sm tracking-widest uppercase">Birth & Brodo</p>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-light text-white mb-8 leading-tight">
            The Fourth, Nourished
          </h1>

          <a
            href="#join"
            className="inline-block bg-[#F4B942] text-[#2C2418] px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#E5AA32] transition-all transform hover:scale-105 shadow-xl"
          >
            Join Waitlist
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Intro Text Section */}
      <section className="py-20 bg-[#F5EFE7]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xl md:text-2xl text-[#2C2418]/80 leading-relaxed">
            Warm, thoughtfully prepared postpartum meals designed to support healing, recovery, and rest delivered with care.
          </p>
        </div>
      </section>

      {/* Three Cards Section - Healing, Recovery, Rest */}
      <section className="py-16 bg-[#F5EFE7]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Healing Card */}
            <div className="bg-gradient-to-br from-[#F4B942] to-[#E5AA32] rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-3xl font-serif font-semibold text-[#2C2418] mb-4">Healing</h3>
              <p className="text-[#2C2418]/80 leading-relaxed">
                Nutrient-dense broths and warming meals crafted to support your body's natural recovery process.
              </p>
            </div>

            {/* Recovery Card */}
            <div className="bg-gradient-to-br from-[#F4B942] to-[#E5AA32] rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-3xl font-serif font-semibold text-[#2C2418] mb-4">Recovery</h3>
              <p className="text-[#2C2418]/80 leading-relaxed">
                Meals designed with postpartum nutrition in mind, helping you regain strength and energy.
              </p>
            </div>

            {/* Rest Card */}
            <div className="bg-gradient-to-br from-[#F4B942] to-[#E5AA32] rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-3xl font-serif font-semibold text-[#2C2418] mb-4">Rest</h3>
              <p className="text-[#2C2418]/80 leading-relaxed">
                One less thing to worry about. We handle the cooking so you can focus on what matters most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Centered Badge */}
      <section className="py-16 bg-[#F5EFE7]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-8 py-4 shadow-md">
            <div className="w-12 h-12 rounded-full bg-[#F4B942] flex items-center justify-center">
              <svg className="w-6 h-6 text-[#2C2418]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-lg font-medium text-[#2C2418]">Thoughtfully prepared</span>
          </div>
        </div>
      </section>

      {/* Mother & Baby Image Section */}
      <section className="py-20 bg-[#F5EFE7]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            {/* Left Text */}
            <div className="text-center lg:text-right">
              <div className="mb-6">
                <div className="w-12 h-12 rounded-full bg-white mx-auto lg:ml-auto lg:mr-0 flex items-center justify-center shadow-md mb-4">
                  <svg className="w-6 h-6 text-[#2C2418]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-semibold text-[#2C2418] mb-2">
                  Warm meals for a warm heart
                </h3>
                <p className="text-[#2C2418]/70">
                  Comfort food that truly comforts
                </p>
              </div>
            </div>

            {/* Center Image */}
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1560707857-b897819e06fb?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Mother and baby"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#F4B942]/15"></div>
            </div>

            {/* Right Text */}
            <div className="text-center lg:text-left">
              <div className="mb-6">
                <div className="w-12 h-12 rounded-full bg-white mx-auto lg:mr-auto lg:ml-0 flex items-center justify-center shadow-md mb-4">
                  <svg className="w-6 h-6 text-[#2C2418]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-semibold text-[#2C2418] mb-2">
                  Delivered when you need it most
                </h3>
                <p className="text-[#2C2418]/70">
                  Fresh, ready to enjoy
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How This Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left - Title */}
            <div>
              <h2 className="text-5xl md:text-6xl font-serif font-light text-[#2C2418] leading-tight">
                How This<br />Works
              </h2>
            </div>

            {/* Right - Steps */}
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-[#F4B942] flex items-center justify-center text-[#2C2418] font-bold">
                    01
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-semibold text-[#2C2418] mb-2">Join the Waitlist</h3>
                  <p className="text-[#2C2418]/70 leading-relaxed">
                    Sign up to be notified when we launch in your area. Early subscribers get priority access.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-[#F4B942] flex items-center justify-center text-[#2C2418] font-bold">
                    02
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-semibold text-[#2C2418] mb-2">Receive at Home</h3>
                  <p className="text-[#2C2418]/70 leading-relaxed">
                    Fresh, chef-prepared meals delivered to your door on a schedule that works for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Made with Intention Section */}
      <section className="py-20 bg-[#F5EFE7]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-serif font-light text-[#2C2418] leading-tight mb-4">
              Made with<br />Intention, Not Trend
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-white mx-auto flex items-center justify-center shadow-md mb-4">
                <svg className="w-8 h-8 text-[#2C2418]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#2C2418] mb-2">Thoughtful in content, quality ingredients</h3>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-white mx-auto flex items-center justify-center shadow-md mb-4">
                <svg className="w-8 h-8 text-[#2C2418]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#2C2418] mb-2">A focus on nutrient and digestibility</h3>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-white mx-auto flex items-center justify-center shadow-md mb-4">
                <svg className="w-8 h-8 text-[#2C2418]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#2C2418] mb-2">Prepared with care and attention to tradition</h3>
            </div>

            {/* Feature 4 */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-white mx-auto flex items-center justify-center shadow-md mb-4">
                <svg className="w-8 h-8 text-[#2C2418]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#2C2418] mb-2">Crafted to support emotional and physical wellness</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Care When It's Needed Most Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/27177332/pexels-photo-27177332.jpeg?_gl=1*10j3ewn*_ga*MzY2NzQyMzE2LjE3NzAxMDYyODA.*_ga_8JE65Q40S6*czE3NzAxMzE3NDIkbzIkZzEkdDE3NzAxMzE3NDMkajU5JGwwJGgw"
            alt="Happy baby"
            fill
            className="object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20"></div>
          <div className="absolute inset-0 bg-[#F4B942]/15"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-serif font-light text-white mb-8 leading-tight">
            Care, When<br />It's Needed Most
          </h2>
          <a
            href="#join"
            className="inline-block bg-[#F4B942] text-[#2C2418] px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#E5AA32] transition-all transform hover:scale-105 shadow-xl"
          >
            Join Waitlist
          </a>
          <p className="text-white/90 mt-6 text-sm">
            Nourishing meals to support you through the fourth trimester and beyond.
          </p>
        </div>
      </section>

      {/* Yellow CTA Section - Be the First to Know */}
      <section id="join" className="py-24 bg-gradient-to-br from-[#F4B942] to-[#E5AA32] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-serif font-light text-[#2C2418] mb-6 leading-tight">
            Be the First to<br />Know When We<br />Launch
          </h2>

          <div className="max-w-2xl mx-auto mt-12">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
              <EmailCapture />
            </div>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-12 text-[#2C2418]/80 text-sm">
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
