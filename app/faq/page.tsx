import Header from '../components/Header';

export default function FAQ() {
    return (
        <div className="min-h-screen bg-[#FFFBEB]">
            <Header />
            <div className="pt-24">
                <section id="faq" className="section-padding bg-gradient-to-br from-[#FEF3C7] via-[#FFFBEB] to-[#FEF3C7] overflow-hidden py-16">
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

                        {/* CTA after FAQ */}
                        <div className="text-center mt-16 animate-fadeInUp opacity-0 animate-delay-600">
                            <a
                                href="/#join"
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
            </div>
        </div>
    );
}
