import Image from 'next/image';
import Header from '../components/Header';

export default function Products() {
    return (
        <div className="min-h-screen bg-[#F5EFE7]">
            <Header />
            <div className="pt-24">
                <section className="section-padding bg-[#F5EFE7] overflow-hidden py-16">
                    <div className="max-w-7xl mx-auto px-4 md:px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-5xl md:text-6xl font-serif font-light mb-6 text-[#2C2418] leading-tight">
                                Our Meal Packs
                            </h2>
                            <p className="text-xl text-[#2C2418]/70 max-w-3xl mx-auto leading-relaxed">
                                Thoughtfully curated recovery packs designed for specific postpartum needs, from the first week to C-section recovery.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            {/* Product 1 */}
                            <div className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 bg-white">
                                <div className="relative h-80">
                                    <Image
                                        src="https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=2071&auto=format&fit=crop"
                                        alt="The First 7 Days Pack - Nourishing soup"
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                                    <div className="absolute inset-0 bg-[#F4B942]/15"></div>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                    <h3 className="text-3xl font-serif font-semibold mb-2">The First 7 Days</h3>
                                    <p className="text-white/90 text-lg">Warming meals for the earliest postpartum days</p>
                                </div>
                            </div>

                            {/* Product 2 */}
                            <div className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 bg-white">
                                <div className="relative h-80">
                                    <Image
                                        src="https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?q=80&w=2064&auto=format&fit=crop"
                                        alt="C-Section Recovery Pack - Healing broth"
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                                    <div className="absolute inset-0 bg-[#F4B942]/15"></div>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                    <h3 className="text-3xl font-serif font-semibold mb-2">C-Section Recovery</h3>
                                    <p className="text-white/90 text-lg">Gentle, healing nutrition for surgical recovery</p>
                                </div>
                            </div>

                            {/* Product 3 */}
                            <div className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 bg-white">
                                <div className="relative h-80">
                                    <Image
                                        src="https://images.unsplash.com/photo-1653543362907-b9e87d2be5db?q=80&w=1740&auto=format&fit=crop"
                                        alt="Night Feed Support - Easy meals"
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                                    <div className="absolute inset-0 bg-[#F4B942]/15"></div>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                    <h3 className="text-3xl font-serif font-semibold mb-2">Night Feed Support</h3>
                                    <p className="text-white/90 text-lg">Easy one-handed meals for those late nights</p>
                                </div>
                            </div>

                            {/* Product 4 */}
                            <div className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 bg-white">
                                <div className="relative h-80">
                                    <Image
                                        src="https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=2084&auto=format&fit=crop"
                                        alt="Warmth & Restore Broths"
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                                    <div className="absolute inset-0 bg-[#F4B942]/15"></div>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                    <h3 className="text-3xl font-serif font-semibold mb-2">Warmth & Restore</h3>
                                    <p className="text-white/90 text-lg">Nourishing bone broths for deep replenishment</p>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="text-center mt-16">
                            <div className="bg-gradient-to-br from-[#F4B942] to-[#E5AA32] rounded-3xl p-10 max-w-3xl mx-auto shadow-xl">
                                <p className="text-2xl font-serif font-semibold text-[#2C2418] mb-3">
                                    Perfect for gifting or self-care
                                </p>
                                <p className="text-[#2C2418]/80 mb-6 text-lg">
                                    Join our early access list to be the first to order when we launch
                                </p>
                                <a
                                    href="/#join"
                                    className="inline-flex items-center gap-2 bg-white text-[#2C2418] px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                                >
                                    <span>Join the Waitlist</span>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
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
