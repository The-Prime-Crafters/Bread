import Image from 'next/image';
import Header from '../components/Header';

export default function Products() {
    return (
        <div className="min-h-screen bg-[#FFFBEB]">
            <Header />
            <div className="pt-24">
                <section id="products" className="section-padding bg-gradient-to-br from-[#FEF3C7] to-[#FCD34D]/20 overflow-hidden py-16">
                    <div className="max-w-7xl mx-auto px-4 md:px-6">
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
                                    href="/#join"
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
            </div>
        </div>
    );
}
